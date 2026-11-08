//! The Raft model. Rule-for-rule this follows RaftScope's `raft.js`
//! (Ongaro, 2014); the differences are in *how* it runs, not *what* it does:
//!
//! * **Event-driven.** `raft.js` re-evaluates every rule for every server on
//!   every animation frame and filters the whole message array each time.
//!   Here each server has a "next wake" time in a priority queue and messages
//!   sit in a heap keyed by arrival time, so idle time costs nothing and the
//!   cost of a step is proportional to what actually happens.
//! * **Any cluster size.** `NUM_SERVERS = 5` is a constant in `raft.js`; here
//!   `n` is configuration, and per-peer bookkeeping is only allocated while a
//!   server is a candidate or leader, so followers are O(1) memory.
//! * **Deterministic.** All randomness comes from a seeded [`Rng`] that is part
//!   of the state.
//! * **Checked.** A [`Checker`] verifies Raft's safety properties online.

use crate::rng::Rng;
use std::cmp::Reverse;
use std::collections::{BinaryHeap, VecDeque};

/// Simulated time in microseconds (same unit as `raft.js`).
pub type Time = u64;
pub const INF: Time = u64::MAX;

#[derive(Clone, Debug)]
pub struct Config {
    pub n: usize,
    pub election_timeout: Time,
    pub min_latency: Time,
    pub max_latency: Time,
    pub rpc_timeout: Time,
    pub batch_size: u32,
    /// Probability that any single message is lost in transit.
    pub loss: f64,
    pub seed: u64,
    /// If non-zero, a client submits one request to the current leader every
    /// `client_interval` microseconds (open-loop load for benchmarks).
    pub client_interval: Time,
}

impl Default for Config {
    /// The constants from `raft.js`.
    fn default() -> Self {
        Config {
            n: 5,
            election_timeout: 100_000,
            min_latency: 10_000,
            max_latency: 15_000,
            rpc_timeout: 50_000,
            batch_size: 1,
            loss: 0.0,
            seed: 1,
            client_interval: 0,
        }
    }
}

#[derive(Clone, Copy, Debug, PartialEq, Eq)]
#[repr(u8)]
pub enum Role {
    Follower = 0,
    Candidate = 1,
    Leader = 2,
    Stopped = 3,
}

#[derive(Clone, Copy, Debug, PartialEq, Eq)]
pub struct Entry {
    pub term: u32,
    pub value: u32,
}

#[derive(Clone, Debug)]
pub struct Server {
    pub id: u32,
    pub role: Role,
    pub term: u32,
    pub voted_for: Option<u32>,
    pub log: Vec<Entry>,
    pub commit_index: u32,
    pub election_alarm: Time,
    /// Per-peer state, indexed by server id. Empty unless candidate/leader.
    pub vote_granted: Vec<bool>,
    pub votes: u32,
    pub match_index: Vec<u32>,
    pub next_index: Vec<u32>,
    pub rpc_due: Vec<Time>,
    pub heartbeat_due: Vec<Time>,
    /// Leader only: when each peer next needs an AppendEntries, as a lazy
    /// min-heap, so a leader of n servers does O(log n) work per event
    /// instead of rescanning every peer (`raft.js` rescans all of them).
    peer_due: Vec<Time>,
    peer_heap: BinaryHeap<Reverse<(Time, u32)>>,
    /// Leader only: acks[k] = servers known to hold index commit_index+1+k.
    acks: VecDeque<u32>,
    /// Network partition group; messages only flow within a group.
    pub group: u32,
}

impl Server {
    fn new(id: u32) -> Self {
        Server {
            id,
            role: Role::Follower,
            term: 1,
            voted_for: None,
            log: Vec::new(),
            commit_index: 0,
            election_alarm: 0,
            vote_granted: Vec::new(),
            votes: 0,
            match_index: Vec::new(),
            next_index: Vec::new(),
            rpc_due: Vec::new(),
            heartbeat_due: Vec::new(),
            peer_due: Vec::new(),
            peer_heap: BinaryHeap::new(),
            acks: VecDeque::new(),
            group: 0,
        }
    }

    pub fn last_log_term(&self) -> u32 {
        log_term(&self.log, self.log.len() as u32)
    }

    fn free_peer_state(&mut self) {
        self.vote_granted = Vec::new();
        self.votes = 0;
        self.match_index = Vec::new();
        self.next_index = Vec::new();
        self.rpc_due = Vec::new();
        self.heartbeat_due = Vec::new();
        self.peer_due = Vec::new();
        self.peer_heap = BinaryHeap::new();
        self.acks = VecDeque::new();
    }
}

#[inline]
pub fn log_term(log: &[Entry], index: u32) -> u32 {
    if index < 1 || index as usize > log.len() {
        0
    } else {
        log[index as usize - 1].term
    }
}

#[derive(Clone, Debug, PartialEq)]
pub enum Body {
    RequestVote {
        last_log_term: u32,
        last_log_index: u32,
    },
    RequestVoteReply {
        granted: bool,
    },
    AppendEntries {
        prev_index: u32,
        prev_term: u32,
        entries: Vec<Entry>,
        commit_index: u32,
    },
    AppendEntriesReply {
        success: bool,
        match_index: u32,
    },
}

impl Body {
    pub fn is_request(&self) -> bool {
        matches!(self, Body::RequestVote { .. } | Body::AppendEntries { .. })
    }
    /// 0 = RequestVote, 1 = AppendEntries.
    pub fn kind(&self) -> u8 {
        match self {
            Body::RequestVote { .. } | Body::RequestVoteReply { .. } => 0,
            Body::AppendEntries { .. } | Body::AppendEntriesReply { .. } => 1,
        }
    }
}

#[derive(Clone, Debug)]
pub struct Message {
    pub seq: u64,
    pub from: u32,
    pub to: u32,
    pub term: u32,
    pub body: Body,
    pub send_time: Time,
    pub recv_time: Time,
    /// Decided at send time when `loss > 0`; the message is still drawn in
    /// flight but is discarded on arrival.
    pub lost: bool,
}

#[derive(Clone, Debug, Default)]
pub struct Stats {
    pub elections_started: u64,
    pub leaders_elected: u64,
    pub messages_sent: u64,
    pub messages_delivered: u64,
    pub messages_lost: u64,
    pub rule_evaluations: u64,
    pub client_requests: u64,
    pub client_rejected: u64,
    pub committed: u64,
    /// Submit-to-commit latency of each committed client entry (µs).
    pub commit_latencies: Vec<u32>,
    /// Time intervals with no leader anywhere (µs), measured between leaders.
    pub leaderless_time: Time,
}

/// Online checker for Raft's safety properties (Raft paper, Figure 3).
#[derive(Clone, Debug, Default)]
pub struct Checker {
    /// leader_of_term[t] = id + 1, or 0 if no leader was elected in term t.
    leader_of_term: Vec<u32>,
    /// The globally committed prefix, as seen so far.
    pub committed: Vec<Entry>,
    pub violations: Vec<String>,
}

impl Checker {
    fn on_leader(&mut self, s: &Server, now: Time) {
        let t = s.term as usize;
        if self.leader_of_term.len() <= t {
            self.leader_of_term.resize(t + 1, 0);
        }
        let prev = self.leader_of_term[t];
        if prev != 0 && prev != s.id + 1 {
            self.violations.push(format!(
                "t={now}: Election Safety: S{} and S{} both leaders in term {}",
                prev,
                s.id + 1,
                s.term
            ));
        }
        self.leader_of_term[t] = s.id + 1;
        // Leader Completeness: the new leader holds every committed entry.
        for (i, e) in self.committed.iter().enumerate() {
            if s.log.get(i) != Some(e) {
                self.violations.push(format!(
                    "t={now}: Leader Completeness: S{} (term {}) lacks committed entry {}",
                    s.id + 1,
                    s.term,
                    i + 1
                ));
                break;
            }
        }
    }

    /// Called when `s.commit_index` grows from `old`. Returns newly committed
    /// entries (for latency accounting).
    fn on_commit(&mut self, s: &Server, old: u32, now: Time, out: &mut Vec<Entry>) {
        for idx in old as usize..s.commit_index as usize {
            let Some(&e) = s.log.get(idx) else {
                self.violations.push(format!(
                    "t={now}: S{} commitIndex {} beyond log length {}",
                    s.id + 1,
                    s.commit_index,
                    s.log.len()
                ));
                return;
            };
            if idx < self.committed.len() {
                if self.committed[idx] != e {
                    self.violations.push(format!(
                        "t={now}: State Machine Safety: S{} committed {:?} at index {} but {:?} was committed there",
                        s.id + 1, e, idx + 1, self.committed[idx]
                    ));
                }
            } else {
                self.committed.push(e);
                out.push(e);
            }
        }
    }
}

/// Message storage: a slab plus a min-heap on arrival time.
#[derive(Clone, Debug, Default)]
struct Network {
    slots: Vec<Option<Message>>,
    free: Vec<u32>,
    heap: BinaryHeap<Reverse<(Time, u64, u32)>>,
    live: usize,
}

impl Network {
    fn push(&mut self, m: Message) {
        let key = (m.recv_time, m.seq);
        let slot = if let Some(s) = self.free.pop() {
            self.slots[s as usize] = Some(m);
            s
        } else {
            self.slots.push(Some(m));
            (self.slots.len() - 1) as u32
        };
        self.heap.push(Reverse((key.0, key.1, slot)));
        self.live += 1;
    }

    fn peek_time(&mut self) -> Time {
        while let Some(&Reverse((t, seq, slot))) = self.heap.peek() {
            match &self.slots[slot as usize] {
                Some(m) if m.seq == seq => return t,
                _ => {
                    self.heap.pop();
                }
            }
        }
        INF
    }

    fn pop_due(&mut self, now: Time) -> Option<Message> {
        while let Some(&Reverse((t, seq, slot))) = self.heap.peek() {
            let valid = matches!(&self.slots[slot as usize], Some(m) if m.seq == seq);
            if !valid {
                self.heap.pop();
                continue;
            }
            if t > now {
                return None;
            }
            self.heap.pop();
            let m = self.slots[slot as usize].take();
            self.free.push(slot);
            self.live -= 1;
            return m;
        }
        None
    }

    fn remove(&mut self, seq: u64) -> bool {
        for (i, s) in self.slots.iter_mut().enumerate() {
            if matches!(s, Some(m) if m.seq == seq) {
                *s = None;
                self.free.push(i as u32);
                self.live -= 1;
                return true;
            }
        }
        false
    }

    fn iter(&self) -> impl Iterator<Item = &Message> {
        self.slots.iter().filter_map(|s| s.as_ref())
    }
}

#[derive(Clone, Debug)]
pub struct Sim {
    pub cfg: Config,
    pub time: Time,
    pub servers: Vec<Server>,
    net: Network,
    /// Lazy wake queue; an entry is current only if it matches `wake_at`.
    wake: BinaryHeap<Reverse<(Time, u32)>>,
    wake_at: Vec<Time>,
    rng: Rng,
    seq: u64,
    next_value: u32,
    /// Submit time of each client value (index = value - 1).
    submit_time: Vec<Time>,
    next_client_at: Time,
    /// Last server known to have become leader (hint for client routing).
    pub leader_hint: Option<u32>,
    no_leader_since: Option<Time>,
    pub stats: Stats,
    pub checker: Checker,
    commit_buf: Vec<Entry>,
}

impl Sim {
    pub fn new(cfg: Config) -> Self {
        assert!(cfg.n >= 1, "need at least one server");
        assert!(cfg.min_latency >= 1 && cfg.max_latency >= cfg.min_latency);
        let n = cfg.n;
        let mut sim = Sim {
            rng: Rng::new(cfg.seed),
            next_client_at: if cfg.client_interval > 0 {
                cfg.client_interval
            } else {
                INF
            },
            cfg,
            time: 0,
            servers: (0..n as u32).map(Server::new).collect(),
            net: Network::default(),
            wake: BinaryHeap::new(),
            wake_at: vec![INF; n],
            seq: 0,
            next_value: 1,
            submit_time: Vec::new(),
            leader_hint: None,
            no_leader_since: Some(0),
            stats: Stats::default(),
            checker: Checker::default(),
            commit_buf: Vec::new(),
        };
        for i in 0..n {
            sim.servers[i].election_alarm = sim.election_alarm(0);
            sim.reschedule(i as u32);
        }
        sim
    }

    pub fn n(&self) -> usize {
        self.servers.len()
    }

    pub fn messages(&self) -> impl Iterator<Item = &Message> {
        self.net.iter()
    }

    pub fn messages_in_flight(&self) -> usize {
        self.net.live
    }

    /// The highest-term live leader, if any.
    pub fn leader(&self) -> Option<&Server> {
        self.servers
            .iter()
            .filter(|s| s.role == Role::Leader)
            .max_by_key(|s| s.term)
    }

    fn election_alarm(&mut self, now: Time) -> Time {
        let et = self.cfg.election_timeout;
        now + et + self.rng.below(et)
    }

    fn reschedule(&mut self, id: u32) {
        let t = self.next_wake(id);
        self.wake_at[id as usize] = t;
        if t != INF {
            self.wake.push(Reverse((t, id)));
        }
    }

    fn dirty(&mut self, id: u32) {
        let now = self.time;
        self.wake_at[id as usize] = now;
        self.wake.push(Reverse((now, id)));
    }

    fn next_wake(&self, id: u32) -> Time {
        let s = &self.servers[id as usize];
        match s.role {
            Role::Stopped => INF,
            Role::Follower => s.election_alarm,
            Role::Candidate => {
                let mut t = s.election_alarm;
                for (p, &d) in s.rpc_due.iter().enumerate() {
                    if p as u32 != id {
                        t = t.min(d);
                    }
                }
                t
            }
            Role::Leader => {
                // May be stale (too early); a spurious wake is harmless.
                s.peer_heap.peek().map_or(INF, |r| r.0 .0)
            }
        }
    }

    fn peek_wake(&mut self) -> Time {
        while let Some(&Reverse((t, id))) = self.wake.peek() {
            if self.wake_at[id as usize] == t {
                return t;
            }
            self.wake.pop();
        }
        INF
    }

    /// Next instant at which anything can happen.
    pub fn next_event_time(&mut self) -> Time {
        self.peek_wake()
            .min(self.net.peek_time())
            .min(self.next_client_at)
    }

    /// Advance the simulation to exactly `t`, processing every event on the way.
    pub fn advance_to(&mut self, t: Time) {
        loop {
            let next = self.next_event_time();
            if next > t {
                if t > self.time {
                    self.time = t;
                }
                return;
            }
            if next > self.time {
                self.time = next;
            }
            self.process_now();
        }
    }

    /// Process everything due at `self.time`: rules first, then deliveries,
    /// repeating while delivered messages make servers dirty (same ordering as
    /// `raft.update`: rules for all servers, then message delivery).
    fn process_now(&mut self) {
        let now = self.time;
        if self.next_client_at <= now {
            self.next_client_at = now + self.cfg.client_interval;
            self.auto_client_request();
        }
        loop {
            let mut did = false;
            while let Some(&Reverse((t, id))) = self.wake.peek() {
                if t > now {
                    break;
                }
                self.wake.pop();
                if self.wake_at[id as usize] != t {
                    continue;
                }
                did = true;
                self.run_rules(id);
                self.reschedule(id);
            }
            while let Some(m) = self.net.pop_due(now) {
                did = true;
                self.deliver(m);
            }
            if !did {
                break;
            }
        }
    }

    // ---------------------------------------------------------------- rules

    fn run_rules(&mut self, id: u32) {
        self.stats.rule_evaluations += 1;
        self.start_new_election(id);
        self.become_leader(id);
        self.advance_commit_index(id);
        match self.servers[id as usize].role {
            Role::Candidate => {
                for peer in 0..self.n() as u32 {
                    if peer != id {
                        self.send_request_vote(id, peer);
                    }
                }
            }
            Role::Leader => self.service_due_peers(id),
            _ => {}
        }
    }

    /// Leader: send AppendEntries to every peer that is due.
    fn service_due_peers(&mut self, id: u32) {
        let now = self.time;
        loop {
            let s = &mut self.servers[id as usize];
            let Some(&Reverse((t, p))) = s.peer_heap.peek() else {
                break;
            };
            if t > now {
                break;
            }
            s.peer_heap.pop();
            if s.peer_due[p as usize] != t {
                continue; // stale entry
            }
            s.peer_due[p as usize] = INF;
            self.send_append_entries(id, p);
            self.refresh_peer(id, p);
        }
    }

    /// Leader: recompute when peer `p` next needs a message (the conditions of
    /// `rules.sendAppendEntries`, solved for time) and queue it.
    fn refresh_peer(&mut self, id: u32, p: u32) {
        let s = &mut self.servers[id as usize];
        if s.role != Role::Leader {
            return;
        }
        let i = p as usize;
        let len = s.log.len() as u32;
        let mut due = s.heartbeat_due[i];
        if s.next_index[i] <= len {
            due = due.min(s.rpc_due[i]);
        }
        if due != s.peer_due[i] {
            s.peer_due[i] = due;
            if due != INF {
                s.peer_heap.push(Reverse((due, p)));
            }
        }
    }

    fn refresh_all_peers(&mut self, id: u32) {
        for p in 0..self.n() as u32 {
            if p != id {
                self.refresh_peer(id, p);
            }
        }
    }

    fn start_new_election(&mut self, id: u32) {
        let now = self.time;
        let n = self.n();
        let alarm_due = {
            let s = &self.servers[id as usize];
            (s.role == Role::Follower || s.role == Role::Candidate) && s.election_alarm <= now
        };
        if !alarm_due {
            return;
        }
        let alarm = self.election_alarm(now);
        let s = &mut self.servers[id as usize];
        s.election_alarm = alarm;
        s.term += 1;
        s.voted_for = Some(id);
        s.role = Role::Candidate;
        s.free_peer_state();
        s.vote_granted = vec![false; n];
        s.rpc_due = vec![0; n];
        self.stats.elections_started += 1;
    }

    fn become_leader(&mut self, id: u32) {
        let n = self.n();
        let now = self.time;
        let s = &mut self.servers[id as usize];
        if s.role != Role::Candidate || s.votes < (n / 2) as u32 {
            return;
        }
        let len = s.log.len() as u32;
        s.role = Role::Leader;
        s.next_index = vec![len + 1; n];
        s.match_index = vec![0; n];
        s.rpc_due = vec![INF; n];
        s.heartbeat_due = vec![0; n];
        s.peer_due = vec![INF; n];
        s.peer_heap = BinaryHeap::with_capacity(n);
        s.acks = (s.commit_index..len).map(|_| 1).collect();
        s.vote_granted = Vec::new();
        s.election_alarm = INF;
        self.refresh_all_peers(id);
        self.checker.on_leader(&self.servers[id as usize], now);
        self.stats.leaders_elected += 1;
        self.leader_hint = Some(id);
        if let Some(since) = self.no_leader_since.take() {
            self.stats.leaderless_time += now - since;
        }
    }

    /// `rules.advanceCommitIndex`: commit the highest index stored on a
    /// majority, if it is from the current term. Incremental: `acks` holds
    /// the replication count of each uncommitted index.
    fn advance_commit_index(&mut self, id: u32) {
        let n = self.n() as u32;
        let s = &self.servers[id as usize];
        if s.role != Role::Leader {
            return;
        }
        let majority = n / 2 + 1;
        let mut k = 0;
        while k < s.acks.len() && s.acks[k] >= majority {
            k += 1;
        }
        if k == 0 {
            return;
        }
        let target = s.commit_index + k as u32;
        if log_term(&s.log, target) != s.term {
            return;
        }
        let s = &mut self.servers[id as usize];
        s.acks.drain(..k);
        self.set_commit(id, target);
    }

    fn set_commit(&mut self, id: u32, new_commit: u32) {
        let now = self.time;
        let old = self.servers[id as usize].commit_index;
        if new_commit <= old {
            return;
        }
        self.servers[id as usize].commit_index = new_commit;
        let mut buf = std::mem::take(&mut self.commit_buf);
        buf.clear();
        self.checker
            .on_commit(&self.servers[id as usize], old, now, &mut buf);
        for e in &buf {
            self.stats.committed += 1;
            if let Some(&st) = self.submit_time.get(e.value as usize - 1) {
                let lat = (now - st).min(u32::MAX as u64) as u32;
                if self.stats.commit_latencies.len() < 4_000_000 {
                    self.stats.commit_latencies.push(lat);
                }
            }
        }
        self.commit_buf = buf;
    }

    fn send_request_vote(&mut self, id: u32, peer: u32) {
        let now = self.time;
        let rpc_timeout = self.cfg.rpc_timeout;
        let s = &mut self.servers[id as usize];
        if s.role != Role::Candidate || s.rpc_due[peer as usize] > now {
            return;
        }
        s.rpc_due[peer as usize] = now + rpc_timeout;
        let body = Body::RequestVote {
            last_log_term: s.last_log_term(),
            last_log_index: s.log.len() as u32,
        };
        let term = s.term;
        self.send(id, peer, term, body);
    }

    fn send_append_entries(&mut self, id: u32, peer: u32) {
        let now = self.time;
        let (rpc_timeout, et, batch) = (
            self.cfg.rpc_timeout,
            self.cfg.election_timeout,
            self.cfg.batch_size,
        );
        let p = peer as usize;
        let s = &mut self.servers[id as usize];
        if s.role != Role::Leader {
            return;
        }
        let len = s.log.len() as u32;
        if !(s.heartbeat_due[p] <= now || (s.next_index[p] <= len && s.rpc_due[p] <= now)) {
            return;
        }
        let prev_index = s.next_index[p] - 1;
        let mut last_index = (prev_index + batch).min(len);
        if s.match_index[p] + 1 < s.next_index[p] {
            last_index = prev_index;
        }
        let body = Body::AppendEntries {
            prev_index,
            prev_term: log_term(&s.log, prev_index),
            entries: s.log[prev_index as usize..last_index as usize].to_vec(),
            commit_index: s.commit_index.min(last_index),
        };
        s.rpc_due[p] = now + rpc_timeout;
        s.heartbeat_due[p] = now + et / 2;
        let term = s.term;
        self.send(id, peer, term, body);
    }

    fn send(&mut self, from: u32, to: u32, term: u32, body: Body) {
        let now = self.time;
        let lat = self.cfg.min_latency
            + self
                .rng
                .below(self.cfg.max_latency - self.cfg.min_latency + 1);
        self.seq += 1;
        self.stats.messages_sent += 1;
        let lost = self.cfg.loss > 0.0 && self.rng.unit() < self.cfg.loss;
        self.net.push(Message {
            seq: self.seq,
            from,
            to,
            term,
            body,
            send_time: now,
            recv_time: now + lat,
            lost,
        });
    }

    // ------------------------------------------------------------- delivery

    fn deliver(&mut self, m: Message) {
        if m.lost {
            self.stats.messages_lost += 1;
            return;
        }
        let (gf, gt) = (
            self.servers[m.from as usize].group,
            self.servers[m.to as usize].group,
        );
        if gf != gt {
            self.stats.messages_lost += 1;
            return;
        }
        let to = m.to;
        if self.servers[to as usize].role == Role::Stopped {
            return;
        }
        self.stats.messages_delivered += 1;
        match m.body {
            Body::RequestVote {
                last_log_term,
                last_log_index,
            } => self.on_request_vote(&m, last_log_term, last_log_index),
            Body::RequestVoteReply { granted } => self.on_request_vote_reply(&m, granted),
            Body::AppendEntries {
                prev_index,
                prev_term,
                ref entries,
                commit_index,
            } => self.on_append_entries(&m, prev_index, prev_term, entries, commit_index),
            Body::AppendEntriesReply {
                success,
                match_index,
            } => self.on_append_entries_reply(&m, success, match_index),
        }
        // Re-evaluate only what the message could have changed.
        match self.servers[to as usize].role {
            Role::Leader => {
                let t = self.next_wake(to);
                if t < self.wake_at[to as usize] || self.wake_at[to as usize] < self.time {
                    self.wake_at[to as usize] = t;
                    if t != INF {
                        self.wake.push(Reverse((t, to)));
                    }
                }
            }
            Role::Candidate if matches!(m.body, Body::RequestVoteReply { .. }) => {
                self.become_leader(to);
                if self.servers[to as usize].role == Role::Leader {
                    self.dirty(to);
                }
            }
            _ => self.dirty(to),
        }
    }

    fn step_down(&mut self, id: u32, term: u32) {
        let now = self.time;
        let was_leader = self.servers[id as usize].role == Role::Leader;
        let need_alarm = {
            let s = &self.servers[id as usize];
            s.election_alarm <= now || s.election_alarm == INF
        };
        let alarm = if need_alarm {
            Some(self.election_alarm(now))
        } else {
            None
        };
        let s = &mut self.servers[id as usize];
        s.term = term;
        s.role = Role::Follower;
        s.voted_for = None;
        s.free_peer_state();
        if let Some(a) = alarm {
            s.election_alarm = a;
        }
        if was_leader {
            self.note_leader_gone();
        }
    }

    fn note_leader_gone(&mut self) {
        if self.no_leader_since.is_none() && !self.servers.iter().any(|s| s.role == Role::Leader) {
            self.no_leader_since = Some(self.time);
        }
    }

    fn reply(&mut self, req: &Message, term: u32, body: Body) {
        self.send(req.to, req.from, term, body);
    }

    fn on_request_vote(&mut self, m: &Message, last_log_term: u32, last_log_index: u32) {
        let id = m.to;
        if self.servers[id as usize].term < m.term {
            self.step_down(id, m.term);
        }
        let now = self.time;
        let s = &self.servers[id as usize];
        let my_last_term = s.last_log_term();
        let granted = s.term == m.term
            && (s.voted_for.is_none() || s.voted_for == Some(m.from))
            && (last_log_term > my_last_term
                || (last_log_term == my_last_term && last_log_index as usize >= s.log.len()));
        if granted {
            let alarm = self.election_alarm(now);
            let s = &mut self.servers[id as usize];
            s.voted_for = Some(m.from);
            s.election_alarm = alarm;
        }
        let term = self.servers[id as usize].term;
        self.reply(m, term, Body::RequestVoteReply { granted });
    }

    fn on_request_vote_reply(&mut self, m: &Message, granted: bool) {
        let id = m.to;
        if self.servers[id as usize].term < m.term {
            self.step_down(id, m.term);
        }
        let s = &mut self.servers[id as usize];
        if s.role == Role::Candidate && s.term == m.term {
            let p = m.from as usize;
            s.rpc_due[p] = INF;
            if granted && !s.vote_granted[p] {
                s.votes += 1;
            } else if !granted && s.vote_granted[p] {
                s.votes -= 1;
            }
            s.vote_granted[p] = granted;
        }
    }

    fn on_append_entries(
        &mut self,
        m: &Message,
        prev_index: u32,
        prev_term: u32,
        entries: &[Entry],
        commit_index: u32,
    ) {
        let id = m.to;
        let now = self.time;
        if self.servers[id as usize].term < m.term {
            self.step_down(id, m.term);
        }
        let mut success = false;
        let mut match_index = 0;
        let mut new_commit = None;
        if self.servers[id as usize].term == m.term {
            let alarm = self.election_alarm(now);
            let was_leader = self.servers[id as usize].role == Role::Leader;
            let s = &mut self.servers[id as usize];
            if s.role != Role::Follower {
                s.free_peer_state();
            }
            s.role = Role::Follower;
            s.election_alarm = alarm;
            if was_leader {
                self.note_leader_gone();
            }
            let s = &mut self.servers[id as usize];
            if prev_index == 0
                || (prev_index as usize <= s.log.len() && log_term(&s.log, prev_index) == prev_term)
            {
                success = true;
                let mut index = prev_index;
                for e in entries {
                    index += 1;
                    if log_term(&s.log, index) != e.term {
                        s.log.truncate(index as usize - 1);
                        s.log.push(*e);
                    }
                }
                match_index = index;
                new_commit = Some(commit_index);
            }
        }
        if let Some(c) = new_commit {
            self.set_commit(id, c);
        }
        let term = self.servers[id as usize].term;
        self.reply(
            m,
            term,
            Body::AppendEntriesReply {
                success,
                match_index,
            },
        );
    }

    fn on_append_entries_reply(&mut self, m: &Message, success: bool, match_index: u32) {
        let id = m.to;
        if self.servers[id as usize].term < m.term {
            self.step_down(id, m.term);
        }
        let s = &mut self.servers[id as usize];
        if s.role == Role::Leader && s.term == m.term {
            let p = m.from as usize;
            if success {
                let old = s.match_index[p];
                if match_index > old {
                    s.match_index[p] = match_index;
                    let base = s.commit_index;
                    for idx in old.max(base) + 1..=match_index {
                        if let Some(c) = s.acks.get_mut((idx - base - 1) as usize) {
                            *c += 1;
                        }
                    }
                }
                s.next_index[p] = match_index + 1;
            } else {
                s.next_index[p] = s.next_index[p].saturating_sub(1).max(1);
            }
            s.rpc_due[p] = 0;
            self.refresh_peer(id, m.from);
            self.advance_commit_index(id);
        }
    }

    // --------------------------------------------------------- user actions

    pub fn stop(&mut self, id: u32) {
        let s = &mut self.servers[id as usize];
        let was_leader = s.role == Role::Leader;
        s.role = Role::Stopped;
        s.election_alarm = 0;
        s.free_peer_state();
        if was_leader {
            self.note_leader_gone();
        }
        self.reschedule(id);
    }

    pub fn resume(&mut self, id: u32) {
        let now = self.time;
        let alarm = self.election_alarm(now);
        let s = &mut self.servers[id as usize];
        let was_leader = s.role == Role::Leader;
        s.role = Role::Follower;
        s.free_peer_state();
        s.election_alarm = alarm;
        if was_leader {
            self.note_leader_gone();
        }
        self.reschedule(id);
    }

    pub fn resume_all(&mut self) {
        for id in 0..self.n() as u32 {
            self.resume(id);
        }
    }

    pub fn restart(&mut self, id: u32) {
        self.stop(id);
        self.resume(id);
    }

    pub fn timeout(&mut self, id: u32) {
        let s = &mut self.servers[id as usize];
        let was_leader = s.role == Role::Leader;
        s.role = Role::Follower;
        s.free_peer_state();
        s.election_alarm = 0;
        if was_leader {
            self.note_leader_gone();
        }
        self.start_new_election(id);
        self.dirty(id);
    }

    /// Returns true if the entry was accepted.
    pub fn client_request(&mut self, id: u32) -> bool {
        let now = self.time;
        self.stats.client_requests += 1;
        let s = &mut self.servers[id as usize];
        if s.role != Role::Leader {
            self.stats.client_rejected += 1;
            return false;
        }
        let value = self.next_value;
        self.next_value += 1;
        s.log.push(Entry {
            term: s.term,
            value,
        });
        s.acks.push_back(1);
        self.submit_time.push(now);
        self.refresh_all_peers(id);
        self.advance_commit_index(id); // a 1-server cluster commits at once
        self.dirty(id);
        true
    }

    fn auto_client_request(&mut self) {
        let target = match self.leader_hint {
            Some(h) if self.servers[h as usize].role == Role::Leader => Some(h),
            _ => self.leader().map(|s| s.id),
        };
        match target {
            Some(id) => {
                self.client_request(id);
            }
            None => {
                self.stats.client_requests += 1;
                self.stats.client_rejected += 1;
            }
        }
    }

    pub fn drop_message(&mut self, seq: u64) -> bool {
        self.net.remove(seq)
    }

    pub fn set_group(&mut self, id: u32, group: u32) {
        self.servers[id as usize].group = group;
    }

    pub fn heal(&mut self) {
        for s in &mut self.servers {
            s.group = 0;
        }
    }

    /// RaftScope's "spread timers": push apart election alarms that are
    /// within one max latency of each other.
    pub fn spread_timers(&mut self) {
        let now = self.time;
        let ml = self.cfg.max_latency;
        let mut timers: Vec<Time> = self
            .servers
            .iter()
            .map(|s| s.election_alarm)
            .filter(|&a| a > now && a < INF)
            .collect();
        timers.sort_unstable();
        if timers.len() > 1 && timers[1] - timers[0] < ml {
            if timers[0] > now + ml {
                for s in &mut self.servers {
                    if s.election_alarm == timers[0] {
                        s.election_alarm -= ml;
                    }
                }
            } else {
                for s in &mut self.servers {
                    if s.election_alarm > timers[0] && s.election_alarm < timers[0] + ml {
                        s.election_alarm += ml;
                    }
                }
            }
        }
        for id in 0..self.n() as u32 {
            self.reschedule(id);
        }
    }

    /// RaftScope's "align timers": make the two earliest alarms coincide
    /// (provokes a split vote).
    pub fn align_timers(&mut self) {
        self.spread_timers();
        let now = self.time;
        let mut timers: Vec<Time> = self
            .servers
            .iter()
            .map(|s| s.election_alarm)
            .filter(|&a| a > now && a < INF)
            .collect();
        timers.sort_unstable();
        if timers.len() > 1 {
            for s in &mut self.servers {
                if s.election_alarm == timers[1] {
                    s.election_alarm = timers[0];
                }
            }
        }
        for id in 0..self.n() as u32 {
            self.reschedule(id);
        }
    }

    /// RaftScope's log-replication scenario: S1 leads term 2, S2 is up,
    /// S3–S5 are stopped, and S1 holds three uncommitted entries.
    pub fn setup_log_replication_scenario(&mut self) {
        let n = self.n() as u32;
        if n < 2 {
            return;
        }
        for i in 1..n {
            self.restart(i);
        }
        self.timeout(0);
        for i in 1..n {
            let s = &mut self.servers[i as usize];
            s.term = 2;
            s.voted_for = Some(0);
        }
        {
            let s = &mut self.servers[0];
            s.vote_granted = vec![true; n as usize];
            s.vote_granted[0] = false;
            s.votes = n - 1;
        }
        for i in 2..n {
            self.stop(i);
        }
        self.become_leader(0);
        for _ in 0..3 {
            self.client_request(0);
        }
        for id in 0..n {
            self.reschedule(id);
        }
    }

    /// A cheap fingerprint of the full observable state (for determinism tests).
    pub fn fingerprint(&self) -> u64 {
        let mut h: u64 = 0xcbf2_9ce4_8422_2325;
        let mut mix = |v: u64| {
            h ^= v;
            h = h.wrapping_mul(0x100_0000_01b3);
        };
        mix(self.time);
        for s in &self.servers {
            mix(s.role as u64);
            mix(s.term as u64);
            mix(s.commit_index as u64);
            mix(s.election_alarm);
            mix(s.log.len() as u64);
            for e in &s.log {
                mix(((e.term as u64) << 32) | e.value as u64);
            }
        }
        let mut seqs: Vec<(u64, Time)> = self.net.iter().map(|m| (m.seq, m.recv_time)).collect();
        seqs.sort_unstable();
        for (s, t) in seqs {
            mix(s);
            mix(t);
        }
        h
    }
}

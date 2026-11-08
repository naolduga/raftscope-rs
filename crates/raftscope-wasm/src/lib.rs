//! WebAssembly entry points. A plain C ABI (no wasm-bindgen) keeps the module
//! tiny and dependency-free; `raftscope.js` at the repository root is the
//! matching loader. Every function takes the handle returned by `rs_new`, so
//! a page can run several independent simulations side by side.
//!
//! # Safety
//!
//! Functions taking `p: *mut App` are `unsafe`: `p` must be a handle returned
//! by `rs_new` and not yet passed to `rs_free`. The JavaScript loader
//! guarantees this; Rust callers must too. Pointers returned by `rs_cmds`,
//! `rs_text` and `rs_out` stay valid until the next call on the same handle.

use raftscope_core::scene::{preferred_height, Scene, ViewOpts};
use raftscope_core::sim::{Body, Config, Protocol, Role};
use raftscope_core::timeline::{Op, Timeline};
use std::fmt::Write;

pub struct App {
    tl: Timeline,
    scene: Scene,
    out: String,
}

/// # Safety
/// `p` must come from `rs_new` and not have been freed.
unsafe fn app<'a>(p: *mut App) -> &'a mut App {
    &mut *p
}

#[no_mangle]
pub extern "C" fn rs_new(
    n: u32,
    seed: f64,
    election_timeout: f64,
    min_latency: f64,
    max_latency: f64,
    rpc_timeout: f64,
    batch_size: u32,
    loss: f64,
    protocol: u32,
    term_length: f64,
    client_interval: f64,
) -> *mut App {
    let cfg = Config {
        n: n.max(1) as usize,
        seed: seed as u64,
        election_timeout: (election_timeout as u64).max(1),
        min_latency: (min_latency as u64).max(1),
        max_latency: (max_latency as u64).max(min_latency as u64).max(1),
        rpc_timeout: (rpc_timeout as u64).max(1),
        batch_size: batch_size.max(1),
        loss: loss.clamp(0.0, 1.0),
        protocol: if protocol == 1 {
            Protocol::Rotation {
                term_length: (term_length as u64).max(1),
            }
        } else {
            Protocol::Raft
        },
        client_interval: client_interval.max(0.0) as u64,
    };
    Box::into_raw(Box::new(App {
        tl: Timeline::new(cfg),
        scene: Scene::default(),
        out: String::new(),
    }))
}

/// # Safety
/// See the crate-level safety section.
#[no_mangle]
pub unsafe extern "C" fn rs_free(p: *mut App) {
    if !p.is_null() {
        drop(unsafe { Box::from_raw(p) });
    }
}

/// # Safety
/// See the crate-level safety section.
#[no_mangle]
pub unsafe extern "C" fn rs_seek(p: *mut App, t: f64) {
    app(p).tl.seek(t.max(0.0) as u64);
}

/// # Safety
/// See the crate-level safety section.
#[no_mangle]
pub unsafe extern "C" fn rs_time(p: *mut App) -> f64 {
    app(p).tl.time() as f64
}

/// # Safety
/// See the crate-level safety section.
#[no_mangle]
pub unsafe extern "C" fn rs_horizon(p: *mut App) -> f64 {
    app(p).tl.horizon as f64
}

/// kind: 0 stop, 1 resume, 2 resume all, 3 restart, 4 timeout, 5 request,
/// 6 request→leader, 7 drop message (a = seq), 8 set group (a = id, b = group),
/// 9 heal, 10 spread timers, 11 align timers, 12 log-replication scenario,
/// 13 fork (discard the future), 14 restart the leader of the highest term.
/// # Safety
/// See the crate-level safety section.
#[no_mangle]
pub unsafe extern "C" fn rs_op(p: *mut App, kind: u32, a: f64, b: u32) {
    let id = a as u32;
    let op = match kind {
        0 => Op::Stop(id),
        1 => Op::Resume(id),
        2 => Op::ResumeAll,
        3 => Op::Restart(id),
        4 => Op::Timeout(id),
        5 => Op::Request(id),
        6 => Op::RequestToLeader,
        7 => Op::DropMessage(a as u64),
        8 => Op::SetGroup(id, b),
        9 => Op::Heal,
        10 => Op::SpreadTimers,
        11 => Op::AlignTimers,
        12 => Op::LogReplicationScenario,
        13 => {
            app(p).tl.fork();
            return;
        }
        14 => match app(p).tl.sim.leader() {
            Some(l) => Op::Restart(l.id),
            None => return,
        },
        _ => return,
    };
    app(p).tl.apply(op);
}

/// # Safety
/// See the crate-level safety section.
#[no_mangle]
pub unsafe extern "C" fn rs_render(
    p: *mut App,
    w: f32,
    h: f32,
    selected: i32,
    max_messages: u32,
) -> u32 {
    let a = app(p);
    let v = ViewOpts {
        w,
        h,
        selected: if selected >= 0 {
            Some(selected as u32)
        } else {
            None
        },
        max_messages: max_messages as usize,
    };
    a.scene.build(&a.tl.sim, &v);
    a.scene.count() as u32
}

/// # Safety
/// See the crate-level safety section.
#[no_mangle]
pub unsafe extern "C" fn rs_cmds(p: *mut App) -> *const f32 {
    app(p).scene.cmds.as_ptr()
}

/// # Safety
/// See the crate-level safety section.
#[no_mangle]
pub unsafe extern "C" fn rs_text(p: *mut App) -> *const u8 {
    app(p).scene.text.as_ptr()
}

/// # Safety
/// See the crate-level safety section.
#[no_mangle]
pub unsafe extern "C" fn rs_text_len(p: *mut App) -> u32 {
    app(p).scene.text.len() as u32
}

/// # Safety
/// See the crate-level safety section.
#[no_mangle]
pub unsafe extern "C" fn rs_pick(p: *mut App, w: f32, h: f32, x: f32, y: f32) -> f64 {
    Scene::pick(&app(p).tl.sim, w, h, x, y)
}

#[no_mangle]
pub extern "C" fn rs_preferred_height(w: f32) -> f32 {
    preferred_height(w)
}

/// # Safety
/// See the crate-level safety section.
#[no_mangle]
pub unsafe extern "C" fn rs_out(p: *mut App) -> *const u8 {
    app(p).out.as_ptr()
}

/// # Safety
/// See the crate-level safety section.
#[no_mangle]
pub unsafe extern "C" fn rs_out_len(p: *mut App) -> u32 {
    app(p).out.len() as u32
}

fn esc(s: &str) -> String {
    s.replace('\\', "\\\\").replace('"', "\\\"")
}

fn role_name(r: Role) -> &'static str {
    match r {
        Role::Follower => "follower",
        Role::Candidate => "candidate",
        Role::Leader => "leader",
        Role::Stopped => "stopped",
    }
}

/// Writes a JSON summary into the output buffer; returns its length.
/// # Safety
/// See the crate-level safety section.
#[no_mangle]
pub unsafe extern "C" fn rs_stats(p: *mut App) -> u32 {
    let a = app(p);
    let sim = &a.tl.sim;
    let st = &sim.stats;
    let lat = &st.commit_latencies;
    let tail = &lat[lat.len().saturating_sub(100_000)..];
    let (p50, p99) = if tail.is_empty() {
        (0, 0)
    } else {
        let mut v = tail.to_vec();
        v.sort_unstable();
        (v[v.len() / 2], v[(v.len() * 99 / 100).min(v.len() - 1)])
    };
    let leader = sim.leader();
    let max_term = sim.servers.iter().map(|s| s.term).max().unwrap_or(0);
    let mut o = String::with_capacity(512);
    let _ = write!(
        o,
        "{{\"time\":{},\"horizon\":{},\"n\":{},\"leader\":{},\"leaderTerm\":{},\"maxTerm\":{},\"inFlight\":{},\
\"elections\":{},\"leaders\":{},\"sent\":{},\"delivered\":{},\"lost\":{},\"ruleEvals\":{},\
\"requests\":{},\"rejected\":{},\"committed\":{},\"transfers\":{},\"p50\":{},\"p99\":{},\"leaderless\":{},\
\"stopped\":{},\"partitioned\":{},\"violations\":[",
        sim.time,
        a.tl.horizon,
        sim.n(),
        leader.map_or(-1, |l| l.id as i64),
        leader.map_or(0, |l| l.term),
        max_term,
        sim.messages_in_flight(),
        st.elections_started,
        st.leaders_elected,
        st.messages_sent,
        st.messages_delivered,
        st.messages_lost,
        st.rule_evaluations,
        st.client_requests,
        st.client_rejected,
        st.committed,
        st.transfers,
        p50,
        p99,
        st.leaderless_time,
        sim.servers.iter().filter(|s| s.role == Role::Stopped).count(),
        sim.servers.iter().filter(|s| s.group != 0).count(),
    );
    for (i, v) in sim.checker.violations.iter().take(20).enumerate() {
        if i > 0 {
            o.push(',');
        }
        let _ = write!(o, "\"{}\"", esc(v));
    }
    let hl = &st.handoff_latencies;
    let hp50 = if hl.is_empty() {
        0
    } else {
        let mut v = hl.clone();
        v.sort_unstable();
        v[v.len() / 2]
    };
    let _ = write!(o, "],\"successions\":{},\"inOrder\":{},\"handoffP50\":{},\"handoffs\":{},\"rotation\":{},\"termLength\":{},\"leaderTime\":[",
        st.successions, st.in_order_successions, hp50, hl.len(),
        matches!(sim.cfg.protocol, Protocol::Rotation { .. }),
        match sim.cfg.protocol { Protocol::Rotation { term_length } => term_length, _ => 0 });
    if sim.n() <= 64 {
        for (i, v) in sim.leader_time().iter().enumerate() {
            if i > 0 {
                o.push(',');
            }
            let _ = write!(o, "{v}");
        }
    }
    let _ = write!(o, "],\"violationCount\":{}}}", sim.checker.violations.len());
    a.out = o;
    a.out.len() as u32
}

/// # Safety
/// See the crate-level safety section.
#[no_mangle]
pub unsafe extern "C" fn rs_server(p: *mut App, id: u32) -> u32 {
    let a = app(p);
    let sim = &a.tl.sim;
    let mut o = String::new();
    if let Some(s) = sim.servers.get(id as usize) {
        let alarm = if s.election_alarm == u64::MAX {
            -1.0
        } else {
            s.election_alarm as f64
        };
        let _ = write!(
            o,
            "{{\"id\":{},\"role\":\"{}\",\"term\":{},\"votedFor\":{},\"logLength\":{},\"commitIndex\":{},\
\"electionAlarm\":{},\"group\":{},\"votes\":{},\"transferTo\":{}",
            s.id,
            role_name(s.role),
            s.term,
            s.voted_for.map_or(-1, |v| v as i64),
            s.log.len(),
            s.commit_index,
            alarm,
            s.group,
            s.votes,
            s.transfer_to.map_or(-1, |v| v as i64),
        );
        if s.role == Role::Leader && sim.n() <= 64 {
            o.push_str(",\"peers\":[");
            let mut first = true;
            for q in 0..sim.n() {
                if q as u32 == s.id {
                    continue;
                }
                if !first {
                    o.push(',');
                }
                first = false;
                let _ = write!(
                    o,
                    "{{\"id\":{},\"next\":{},\"match\":{}}}",
                    q, s.next_index[q], s.match_index[q]
                );
            }
            o.push(']');
        }
        o.push('}');
    }
    a.out = o;
    a.out.len() as u32
}

/// # Safety
/// See the crate-level safety section.
#[no_mangle]
pub unsafe extern "C" fn rs_message(p: *mut App, seq: f64) -> u32 {
    let a = app(p);
    let seq = seq as u64;
    let mut o = String::new();
    if let Some(m) = a.tl.sim.messages().find(|m| m.seq == seq) {
        let (kind, detail) = match &m.body {
            Body::RequestVote { last_log_term, last_log_index } => (
                "RequestVote",
                format!("\"lastLogTerm\":{last_log_term},\"lastLogIndex\":{last_log_index}"),
            ),
            Body::RequestVoteReply { granted } => ("RequestVote reply", format!("\"granted\":{granted}")),
            Body::AppendEntries { prev_index, prev_term, entries, commit_index } => (
                "AppendEntries",
                format!(
                    "\"prevIndex\":{prev_index},\"prevTerm\":{prev_term},\"entries\":{},\"commitIndex\":{commit_index}",
                    entries.len()
                ),
            ),
            Body::AppendEntriesReply { success, match_index } => (
                "AppendEntries reply",
                format!("\"success\":{success},\"matchIndex\":{match_index}"),
            ),
            Body::TimeoutNow => ("TimeoutNow", String::from("\"handoff\":true")),
        };
        let _ = write!(
            o,
            "{{\"seq\":{},\"kind\":\"{}\",\"from\":{},\"to\":{},\"term\":{},\"sent\":{},\"arrives\":{},\"lost\":{},{}}}",
            m.seq, kind, m.from, m.to, m.term, m.send_time, m.recv_time, m.lost, detail
        );
    }
    a.out = o;
    a.out.len() as u32
}

/// Headless run for benchmarking: advances the raw simulation (no timeline
/// checkpoints, no rendering) to `t`. Returns rule evaluations + deliveries.
/// # Safety
/// See the crate-level safety section.
#[no_mangle]
pub unsafe extern "C" fn rs_run_headless(p: *mut App, t: f64) -> f64 {
    let a = app(p);
    a.tl.sim.advance_to(t as u64);
    (a.tl.sim.stats.rule_evaluations + a.tl.sim.stats.messages_delivered) as f64
}

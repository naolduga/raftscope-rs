//! Time travel by checkpoint + deterministic replay.
//!
//! RaftScope's `state.js` deep-clones the whole model (via jQuery) after every
//! change and scans/compares clones to decide when to record — fine for five
//! servers, prohibitive for five hundred. Because [`Sim`] is deterministic,
//! we only need (a) the user's inputs with their timestamps and (b) sparse
//! checkpoints; any instant can be rebuilt by restoring the nearest earlier
//! checkpoint and re-running forward. Acting while scrubbed into the past
//! forks history: later inputs and checkpoints are discarded.

use crate::sim::{Config, Sim, Time};

#[derive(Clone, Copy, Debug, PartialEq)]
pub enum Op {
    Stop(u32),
    Resume(u32),
    ResumeAll,
    Restart(u32),
    Timeout(u32),
    Request(u32),
    /// Client request routed to whichever server currently leads.
    RequestToLeader,
    DropMessage(u64),
    SetGroup(u32, u32),
    Heal,
    SpreadTimers,
    AlignTimers,
    LogReplicationScenario,
}

impl Op {
    fn apply(self, sim: &mut Sim) {
        let n = sim.n() as u32;
        let ok = |id: u32| id < n;
        match self {
            Op::Stop(i) if ok(i) => sim.stop(i),
            Op::Resume(i) if ok(i) => sim.resume(i),
            Op::ResumeAll => sim.resume_all(),
            Op::Restart(i) if ok(i) => sim.restart(i),
            Op::Timeout(i) if ok(i) => sim.timeout(i),
            Op::Request(i) if ok(i) => {
                sim.client_request(i);
            }
            Op::RequestToLeader => {
                if let Some(id) = sim.leader().map(|s| s.id) {
                    sim.client_request(id);
                }
            }
            Op::DropMessage(seq) => {
                sim.drop_message(seq);
            }
            Op::SetGroup(i, g) if ok(i) => sim.set_group(i, g),
            Op::Heal => sim.heal(),
            Op::SpreadTimers => sim.spread_timers(),
            Op::AlignTimers => sim.align_timers(),
            Op::LogReplicationScenario => sim.setup_log_replication_scenario(),
            _ => {}
        }
    }
}

struct Checkpoint {
    sim: Sim,
    /// Number of inputs already applied when this checkpoint was taken.
    cursor: usize,
}

pub struct Timeline {
    pub sim: Sim,
    inputs: Vec<(Time, Op)>,
    cursor: usize,
    checkpoints: Vec<Checkpoint>,
    pub checkpoint_interval: Time,
    pub max_checkpoints: usize,
    /// Furthest time ever simulated on the current branch.
    pub horizon: Time,
}

impl Timeline {
    pub fn new(cfg: Config) -> Self {
        let sim = Sim::new(cfg);
        // Larger clusters → sparser checkpoints (clone cost grows with n).
        let interval = (50_000u64 * (1 + sim.n() as u64 / 50)).max(50_000);
        Timeline {
            checkpoints: vec![Checkpoint {
                sim: sim.clone(),
                cursor: 0,
            }],
            sim,
            inputs: Vec::new(),
            cursor: 0,
            checkpoint_interval: interval,
            max_checkpoints: 400,
            horizon: 0,
        }
    }

    pub fn time(&self) -> Time {
        self.sim.time
    }

    pub fn inputs(&self) -> &[(Time, Op)] {
        &self.inputs
    }

    /// Apply a user action now. If we are in the past, the future is forked.
    pub fn apply(&mut self, op: Op) {
        let now = self.sim.time;
        if self.cursor < self.inputs.len() || now < self.horizon {
            self.inputs.truncate(self.cursor);
            self.checkpoints.retain(|c| c.sim.time <= now);
            self.horizon = now;
        }
        self.inputs.push((now, op));
        self.cursor += 1;
        op.apply(&mut self.sim);
    }

    /// RaftScope's "fork": discard everything after the current instant,
    /// so the next run forward explores a new future.
    pub fn fork(&mut self) {
        let now = self.sim.time;
        self.inputs.truncate(self.cursor);
        self.checkpoints.retain(|c| c.sim.time <= now);
        self.horizon = now;
    }

    /// Move to time `t` (forwards by simulation, backwards by checkpoint restore).
    pub fn seek(&mut self, t: Time) {
        if t < self.sim.time {
            let i = self.checkpoints.partition_point(|c| c.sim.time <= t);
            let cp = &self.checkpoints[i.saturating_sub(1)];
            self.sim = cp.sim.clone();
            self.cursor = cp.cursor;
        }
        self.run_to(t);
    }

    fn run_to(&mut self, t: Time) {
        loop {
            // Inputs recorded at the current instant are applied first.
            while self.cursor < self.inputs.len() && self.inputs[self.cursor].0 <= self.sim.time {
                let op = self.inputs[self.cursor].1;
                op.apply(&mut self.sim);
                self.cursor += 1;
            }
            if self.sim.time >= t {
                break;
            }
            let last_cp = self.checkpoints.last().map_or(0, |c| c.sim.time);
            let mut next_cp = last_cp + self.checkpoint_interval;
            if next_cp <= self.sim.time {
                next_cp = self.sim.time + self.checkpoint_interval;
            }
            let next_input = self.inputs.get(self.cursor).map_or(Time::MAX, |x| x.0);
            let step = t.min(next_input).min(next_cp);
            self.sim.advance_to(step);
            if self.sim.time == next_cp && self.sim.time > last_cp {
                self.push_checkpoint();
            }
        }
        if self.sim.time > self.horizon {
            self.horizon = self.sim.time;
        }
    }

    fn push_checkpoint(&mut self) {
        // Inputs at exactly this instant are applied after restore, so
        // record the cursor *before* them.
        let mut cursor = self.cursor;
        while cursor > 0 && self.inputs[cursor - 1].0 >= self.sim.time {
            cursor -= 1;
        }
        if cursor != self.cursor {
            return; // keep it simple: skip checkpoints that coincide with inputs
        }
        self.checkpoints.push(Checkpoint {
            sim: self.sim.clone(),
            cursor,
        });
        if self.checkpoints.len() > self.max_checkpoints {
            // Thin out: keep the first and every other one; double spacing.
            let mut k = 0;
            self.checkpoints.retain(|_| {
                k += 1;
                k % 2 == 1
            });
            self.checkpoint_interval *= 2;
        }
    }
}

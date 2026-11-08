use raftscope_core::rng::Rng;
use raftscope_core::sim::{Config, Role, Sim};
use raftscope_core::timeline::{Op, Timeline};

fn cfg(n: usize, seed: u64) -> Config {
    Config {
        n,
        seed,
        ..Config::default()
    }
}

#[test]
fn elects_a_leader() {
    for n in [1, 3, 5, 7, 51] {
        let mut sim = Sim::new(cfg(n, 42));
        sim.advance_to(2_000_000);
        assert!(sim.leader().is_some(), "no leader for n={n}");
        assert!(
            sim.checker.violations.is_empty(),
            "{:?}",
            sim.checker.violations
        );
    }
}

#[test]
fn replicates_and_commits() {
    let mut sim = Sim::new(Config {
        client_interval: 20_000,
        ..cfg(5, 7)
    });
    sim.advance_to(5_000_000);
    assert!(
        sim.stats.committed > 100,
        "committed {}",
        sim.stats.committed
    );
    let min_commit = sim.servers.iter().map(|s| s.commit_index).min().unwrap();
    assert!(min_commit > 50);
    assert!(
        sim.checker.violations.is_empty(),
        "{:?}",
        sim.checker.violations
    );
}

#[test]
fn deterministic_for_a_seed() {
    let run = |seed| {
        let mut s = Sim::new(Config {
            client_interval: 30_000,
            loss: 0.05,
            ..cfg(7, seed)
        });
        s.advance_to(3_000_000);
        s.fingerprint()
    };
    assert_eq!(run(9), run(9));
    assert_ne!(run(9), run(10));
}

/// Chaos: random crashes, restarts, partitions, timeouts and drops, with
/// lossy links; Raft's safety properties must hold throughout.
#[test]
fn safety_under_chaos() {
    for seed in 0..60u64 {
        let n = [3usize, 5, 7][seed as usize % 3];
        let mut sim = Sim::new(Config {
            client_interval: 15_000,
            loss: 0.1,
            ..cfg(n, seed)
        });
        let mut r = Rng::new(seed ^ 0xabc);
        let mut t = 0;
        for _ in 0..400 {
            t += 5_000 + r.below(40_000);
            sim.advance_to(t);
            let id = r.below(n as u64) as u32;
            match r.below(12) {
                0 => sim.stop(id),
                1 | 2 => sim.resume(id),
                3 => sim.restart(id),
                4 => sim.timeout(id),
                5 => sim.set_group(id, 1 + r.below(2) as u32),
                6 => sim.heal(),
                7 => sim.align_timers(),
                _ => {}
            }
        }
        // Liveness is only expected once the network is healthy again
        // (with RaftScope's timings, 10% loss alone causes leader churn).
        sim.heal();
        sim.resume_all();
        sim.cfg.loss = 0.0;
        sim.advance_to(t + 3_000_000);
        assert!(
            sim.checker.violations.is_empty(),
            "seed {seed}: {:?}",
            sim.checker.violations
        );
        assert!(
            sim.leader().is_some(),
            "seed {seed}: no leader after healing"
        );
    }
}

#[test]
fn timeline_seek_back_matches_straight_run() {
    let c = Config {
        client_interval: 40_000,
        loss: 0.02,
        ..cfg(5, 21)
    };
    let mut tl = Timeline::new(c.clone());
    tl.seek(700_000);
    tl.apply(Op::Stop(2));
    tl.seek(1_400_000);
    tl.apply(Op::Resume(2));
    tl.apply(Op::RequestToLeader);
    tl.seek(3_000_000);
    let end = tl.sim.fingerprint();

    // Scrub back and forth.
    tl.seek(150_000);
    tl.seek(1_000_000);
    let mid = tl.sim.fingerprint();
    tl.seek(3_000_000);
    assert_eq!(tl.sim.fingerprint(), end);

    // Independent straight run with the same inputs.
    let mut s = Sim::new(c);
    s.advance_to(700_000);
    s.stop(2);
    s.advance_to(1_000_000);
    assert_eq!(s.fingerprint(), mid);
    s.advance_to(1_400_000);
    s.resume(2);
    let id = s.leader().map(|l| l.id);
    if let Some(id) = id {
        s.client_request(id);
    }
    s.advance_to(3_000_000);
    assert_eq!(s.fingerprint(), end);
}

#[test]
fn acting_in_the_past_forks() {
    let mut tl = Timeline::new(cfg(5, 5));
    tl.seek(500_000);
    tl.apply(Op::Stop(0));
    tl.seek(2_000_000);
    tl.seek(200_000);
    tl.apply(Op::Stop(1));
    assert_eq!(tl.inputs().len(), 1);
    assert_eq!(tl.horizon, 200_000);
    tl.seek(2_000_000);
    assert_ne!(tl.sim.servers[0].role, Role::Stopped);
    assert_eq!(tl.sim.servers[1].role, Role::Stopped);
}

#[test]
fn log_replication_scenario_matches_raftscope() {
    let mut sim = Sim::new(cfg(5, 1));
    sim.setup_log_replication_scenario();
    assert_eq!(sim.servers[0].role, Role::Leader);
    assert_eq!(sim.servers[0].log.len(), 3);
    assert_eq!(sim.servers[1].role, Role::Follower);
    for i in 2..5 {
        assert_eq!(sim.servers[i].role, Role::Stopped);
    }
    sim.advance_to(400_000);
    // Only 2 of 5 up: replicated to S2 but never committed.
    assert_eq!(sim.servers[1].log.len(), 3);
    assert_eq!(sim.servers[0].commit_index, 0);
}

/// The checker must catch a real violation, not just stay quiet: force a
/// second leader into a term that already has one.
#[test]
fn checker_detects_two_leaders_in_one_term() {
    use raftscope_core::sim::INF;
    let mut sim = Sim::new(cfg(5, 1));
    sim.setup_log_replication_scenario(); // S1 leads term 2
    sim.stop(0); // keep S1 from interfering; its term-2 leadership is on record
    let n = sim.n();
    let s2 = &mut sim.servers[1];
    s2.term = 2;
    s2.role = Role::Candidate;
    s2.election_alarm = INF; // no new election, just becomeLeader
    s2.vote_granted = vec![true; n];
    s2.vote_granted[1] = false;
    s2.votes = 4;
    s2.rpc_due = vec![0; n]; // due now, so the engine wakes S2
    sim.spread_timers(); // re-schedules every server, so S2's rules run
    sim.advance_to(sim.time + 1_000);
    assert!(
        sim.checker
            .violations
            .iter()
            .any(|v| v.contains("Election Safety")),
        "{:?}",
        sim.checker.violations
    );
}

#[test]
fn fork_discards_the_future() {
    let mut tl = Timeline::new(cfg(5, 8));
    tl.seek(300_000);
    tl.apply(Op::Stop(0));
    tl.seek(2_000_000);
    tl.seek(200_000);
    tl.fork();
    assert_eq!(tl.horizon, 200_000);
    assert!(tl.inputs().is_empty());
    tl.seek(2_000_000);
    assert_ne!(tl.sim.servers[0].role, Role::Stopped);
}

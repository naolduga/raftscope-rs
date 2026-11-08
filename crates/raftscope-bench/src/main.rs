//! Headless benchmark: how fast the simulator runs, and how the protocol
//! behaves, across cluster sizes, protocols, load and loss.
//!
//! ```text
//! cargo run --release -p raftscope-bench -- --n 5,9,51,201,1001 --secs 30 --seeds 5
//! cargo run --release -p raftscope-bench -- --protocol both --term 2000 --csv > out.csv
//! ```

use raftscope_core::rng::Rng;
use raftscope_core::sim::{Config, Protocol, Sim, GADAA_TERM};
use std::time::Instant;

struct Args {
    ns: Vec<usize>,
    secs: f64,
    seeds: u64,
    protocols: Vec<&'static str>,
    term_ms: u64,
    load_us: u64,
    batch: u32,
    loss: f64,
    csv: bool,
}

fn parse() -> Args {
    let mut a = Args {
        ns: vec![5, 9, 51, 201, 1001],
        secs: 30.0,
        seeds: 5,
        protocols: vec!["raft"],
        term_ms: 2000,
        load_us: 50_000,
        batch: 1,
        loss: 0.0,
        csv: false,
    };
    let argv: Vec<String> = std::env::args().skip(1).collect();
    let mut i = 0;
    while i < argv.len() {
        let v = argv.get(i + 1).cloned().unwrap_or_default();
        match argv[i].as_str() {
            "--n" => {
                a.ns = v
                    .split(',')
                    .map(|x| x.trim().parse().expect("--n"))
                    .collect()
            }
            "--secs" => a.secs = v.parse().expect("--secs"),
            "--seeds" => a.seeds = v.parse().expect("--seeds"),
            "--protocol" => {
                a.protocols = match v.as_str() {
                    "raft" => vec!["raft"],
                    "rotation" => vec!["rotation"],
                    "both" => vec!["raft", "rotation"],
                    _ => panic!("--protocol raft|rotation|both"),
                }
            }
            "--term" => a.term_ms = v.parse().expect("--term (ms)"),
            "--load" => a.load_us = v.parse().expect("--load (µs between requests, 0=off)"),
            "--batch" => a.batch = v.parse().expect("--batch"),
            "--loss" => a.loss = v.parse().expect("--loss (0..1)"),
            "--csv" => {
                a.csv = true;
                i += 1;
                continue;
            }
            "-h" | "--help" => {
                eprintln!("options: --n 5,51 --secs 30 --seeds 5 --protocol raft|rotation|both --term 2000 --load 50000 --batch 1 --loss 0.0 --csv");
                std::process::exit(0);
            }
            x => panic!("unknown option {x}"),
        }
        i += 2;
    }
    a
}

fn pct(v: &mut [u32], q: f64) -> f64 {
    if v.is_empty() {
        return f64::NAN;
    }
    v.sort_unstable();
    v[((v.len() as f64 - 1.0) * q).round() as usize] as f64 / 1000.0
}

fn main() {
    if std::env::args().any(|x| x == "--gadaa") {
        gadaa();
        return;
    }
    let a = parse();
    let sim_us = (a.secs * 1e6) as u64;
    if a.csv {
        println!("protocol,n,seeds,sim_s,wall_ms,speedup,events_per_s,msgs_per_sim_s,elections,commits_per_sim_s,p50_ms,p99_ms,leaderless_pct,violations");
    } else {
        println!(
            "Simulating {} s per run, {} seed(s), one client request every {} µs, batch {}, loss {:.0}%\n",
            a.secs, a.seeds, a.load_us, a.batch, a.loss * 100.0
        );
        println!("| protocol | n | wall ms/run | sim speed-up | events/s | msgs per sim-s | elections | commits per sim-s | p50 commit ms | p99 commit ms | leaderless % | safety violations |");
        println!("|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|");
    }
    for &proto in &a.protocols {
        for &n in &a.ns {
            let mut wall = 0.0;
            let mut events = 0u64;
            let mut msgs = 0u64;
            let mut elections = 0u64;
            let mut commits = 0u64;
            let mut leaderless = 0u64;
            let mut violations = 0usize;
            let mut lats: Vec<u32> = Vec::new();
            for seed in 0..a.seeds {
                let cfg = Config {
                    n,
                    seed: seed + 1,
                    loss: a.loss,
                    client_interval: a.load_us,
                    batch_size: a.batch,
                    protocol: if proto == "rotation" {
                        Protocol::Rotation {
                            term_length: a.term_ms * 1000,
                        }
                    } else {
                        Protocol::Raft
                    },
                    ..Config::default()
                };
                let mut sim = Sim::new(cfg);
                let t0 = Instant::now();
                sim.advance_to(sim_us);
                wall += t0.elapsed().as_secs_f64();
                let s = &sim.stats;
                events += s.rule_evaluations + s.messages_delivered;
                msgs += s.messages_sent;
                elections += s.elections_started;
                commits += s.committed;
                leaderless += s.leaderless_time;
                violations += sim.checker.violations.len();
                lats.extend_from_slice(&s.commit_latencies);
            }
            let k = a.seeds as f64;
            let wall_ms = wall / k * 1000.0;
            let speedup = a.secs / (wall / k);
            let eps = events as f64 / wall;
            let p50 = pct(&mut lats, 0.5);
            let p99 = pct(&mut lats, 0.99);
            let ll = leaderless as f64 / (k * sim_us as f64) * 100.0;
            if a.csv {
                println!(
                    "{proto},{n},{},{},{wall_ms:.2},{speedup:.1},{eps:.0},{:.0},{:.1},{:.1},{p50:.2},{p99:.2},{ll:.3},{violations}",
                    a.seeds, a.secs, msgs as f64 / k / a.secs, elections as f64 / k, commits as f64 / k / a.secs
                );
            } else {
                println!(
                    "| {proto} | {n} | {wall_ms:.1} | {speedup:.0}× | {:.2} M | {:.0} | {:.1} | {:.1} | {p50:.1} | {p99:.1} | {ll:.2} | {violations} |",
                    eps / 1e6,
                    msgs as f64 / k / a.secs,
                    elections as f64 / k,
                    commits as f64 / k / a.secs
                );
            }
        }
    }
}

/// Gadaa round-robin under faults: 5 parties, 800 ms terms, 600 simulated
/// seconds (750 terms) per run, 5 seeds, a client request every 50 ms.
fn gadaa() {
    #[derive(Clone, Copy)]
    enum F {
        None,
        Down(u32),
        Churn,
        Partition,
    }
    let scenarios: Vec<(&str, usize, f64, F, bool)> = vec![
        ("healthy", 5, 0.0, F::None, true),
        ("plain Raft, no rotation", 5, 0.0, F::None, false),
        ("5% message loss", 5, 0.05, F::None, true),
        ("10% message loss", 5, 0.10, F::None, true),
        ("1 party down", 5, 0.0, F::Down(1), true),
        ("2 parties down", 5, 0.0, F::Down(2), true),
        ("crash churn (restart every 4 s)", 5, 0.0, F::Churn, true),
        (
            "partitions (isolate 3 s of every 10 s)",
            5,
            0.0,
            F::Partition,
            true,
        ),
        ("15 parties, healthy", 15, 0.0, F::None, true),
        ("51 parties, healthy", 51, 0.0, F::None, true),
    ];
    let secs = 600u64;
    let seeds = 5u64;
    let end = secs * 1_000_000;
    println!("Gadaa round-robin: term {} ms, {} s simulated per run ({} terms), {} seeds, client request every 50 ms\n",
        GADAA_TERM / 1000, secs, end / GADAA_TERM, seeds);
    println!("| scenario | successions | in order | hand-off p50 / p99 ms | leaderless % | requests rejected % | commit p50 / p99 ms | share of time led, min–max % | safety violations |");
    println!("|---|---:|---:|---:|---:|---:|---:|---:|---:|");
    for (name, n, loss, f, rot) in scenarios {
        let (mut succ, mut inord, mut ll, mut req, mut rej, mut viol) =
            (0u64, 0u64, 0u64, 0u64, 0u64, 0usize);
        let (mut hand, mut lat): (Vec<u32>, Vec<u32>) = (Vec::new(), Vec::new());
        let (mut smin, mut smax) = (f64::MAX, 0.0f64);
        for seed in 1..=seeds {
            let mut cfg = Config {
                n,
                seed,
                loss,
                client_interval: 50_000,
                ..Config::gadaa()
            };
            if !rot {
                cfg.protocol = Protocol::Raft;
            }
            let mut sim = Sim::new(cfg);
            let mut r = Rng::new(seed * 7919);
            if let F::Down(k) = f {
                for i in 0..k {
                    sim.stop(1 + 2 * i);
                }
            }
            let mut t = 0;
            let mut pending: Option<(u64, u32)> = None;
            while t < end {
                t += 100_000;
                sim.advance_to(t);
                match f {
                    F::Churn => {
                        if let Some((at, id)) = pending {
                            if t >= at {
                                sim.resume(id);
                                pending = None;
                            }
                        }
                        if t % 4_000_000 == 0 {
                            let id = r.below(n as u64) as u32;
                            sim.stop(id);
                            pending = Some((t + 1_000_000, id));
                        }
                    }
                    F::Partition => {
                        if t % 10_000_000 == 0 {
                            let id = r.below(n as u64) as u32;
                            sim.set_group(id, 1);
                        }
                        if t % 10_000_000 == 3_000_000 {
                            sim.heal();
                        }
                    }
                    _ => {}
                }
            }
            let st = &sim.stats;
            succ += st.successions;
            inord += st.in_order_successions;
            ll += st.leaderless_time;
            req += st.client_requests;
            rej += st.client_rejected;
            viol += sim.checker.violations.len();
            hand.extend_from_slice(&st.handoff_latencies);
            lat.extend_from_slice(&st.commit_latencies);
            for v in sim.leader_time() {
                let share = v as f64 / end as f64 * 100.0;
                smin = smin.min(share);
                smax = smax.max(share);
            }
        }
        let k = seeds as f64;
        let io = if succ > 0 {
            format!("{:.1}%", inord as f64 / succ as f64 * 100.0)
        } else {
            "—".into()
        };
        let hp = if hand.is_empty() {
            "—".into()
        } else {
            format!("{:.1} / {:.1}", pct(&mut hand, 0.5), pct(&mut hand, 0.99))
        };
        println!("| {name} | {:.0} | {io} | {hp} | {:.2} | {:.1} | {:.1} / {:.1} | {:.1}–{:.1} | {viol} |",
            succ as f64 / k, ll as f64 / (k * end as f64) * 100.0, rej as f64 / req.max(1) as f64 * 100.0,
            pct(&mut lat, 0.5), pct(&mut lat, 0.99), smin, smax);
    }
}

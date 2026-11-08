//! Headless benchmark: how fast the simulator runs, and how Raft behaves,
//! across cluster sizes, load, batch size and message loss.
//!
//! ```text
//! cargo run --release -p raftscope-bench -- --n 5,9,51,201,1001 --secs 30 --seeds 5
//! cargo run --release -p raftscope-bench -- --loss 0.1 --csv > out.csv
//! ```

use raftscope_core::sim::{Config, Sim};
use std::time::Instant;

struct Args {
    ns: Vec<usize>,
    secs: f64,
    seeds: u64,
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
            "--load" => a.load_us = v.parse().expect("--load (µs between requests, 0=off)"),
            "--batch" => a.batch = v.parse().expect("--batch"),
            "--loss" => a.loss = v.parse().expect("--loss (0..1)"),
            "--csv" => {
                a.csv = true;
                i += 1;
                continue;
            }
            "-h" | "--help" => {
                eprintln!(
                    "options: --n 5,51 --secs 30 --seeds 5 --load 50000 --batch 1 --loss 0.0 --csv"
                );
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
    let a = parse();
    let sim_us = (a.secs * 1e6) as u64;
    if a.csv {
        println!("n,seeds,sim_s,wall_ms,speedup,events_per_s,msgs_per_sim_s,elections,commits_per_sim_s,p50_ms,p99_ms,leaderless_pct,violations");
    } else {
        println!(
            "Simulating {} s per run, {} seed(s), one client request every {} µs, batch {}, loss {:.0}%\n",
            a.secs, a.seeds, a.load_us, a.batch, a.loss * 100.0
        );
        println!("| n | wall ms/run | sim speed-up | events/s | msgs per sim-s | elections | commits per sim-s | p50 commit ms | p99 commit ms | leaderless % | safety violations |");
        println!("|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|");
    }
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
                    "{n},{},{},{wall_ms:.2},{speedup:.1},{eps:.0},{:.0},{:.1},{:.1},{p50:.2},{p99:.2},{ll:.3},{violations}",
                    a.seeds, a.secs, msgs as f64 / k / a.secs, elections as f64 / k, commits as f64 / k / a.secs
                );
        } else {
            println!(
                    "| {n} | {wall_ms:.1} | {speedup:.0}× | {:.2} M | {:.0} | {:.1} | {:.1} | {p50:.1} | {p99:.1} | {ll:.2} | {violations} |",
                    eps / 1e6,
                    msgs as f64 / k / a.secs,
                    elections as f64 / k,
                    commits as f64 / k / a.secs
                );
        }
    }
}

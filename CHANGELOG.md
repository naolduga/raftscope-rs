# Changelog

## gadaa branch

- `Protocol::Rotation`: scheduled round-robin leadership on Raft's leadership-transfer extension (TimeoutNow), skipping a successor that does not take over.
- `Config::gadaa()`: 5 parties, 800 ms terms. Gadaa preset in `lab.html`, with a term arc on the leader.
- Succession metrics: in-order successions, hand-off latency, each server's share of time in office.
- `raftscope-bench --gadaa` fault matrix; tests for rotation order and skipping.
- Paper draft and the raw results it cites under `paper/`.

## 0.1.0

First release: a Rust/WebAssembly port of RaftScope.

- Rule-for-rule port of `raft.js`: same constants, controls, keyboard shortcuts and log replication scenario.
- Deterministic, event-driven engine; any cluster size.
- Online checks for Election Safety, Leader Completeness and State Machine Safety.
- Time travel by checkpoint and replay, including fork (F).
- Message loss and network partitions (lab page).
- Drop-in `index.html` for the 800×580 iframe on raft.github.io; `lab.html` with statistics and an in-browser benchmark.
- Pure-JavaScript fallback build for hosts that block WebAssembly.
- Native benchmark and a same-engine comparison against the original `raft.js`.

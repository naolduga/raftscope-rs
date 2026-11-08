# Contributing

Thanks for helping. A few rules keep this usable as a drop-in replacement for RaftScope.

## Before you open a pull request

```sh
cargo fmt --all
cargo clippy --release --all-targets -- -D warnings
cargo test --release
scripts/build.sh          # if you changed anything under crates/
node scripts/smoke.mjs
```

CI runs the same checks, then rebuilds `dist/` from source and smoke-tests the fresh build.

## The rules

- **Protocol fidelity.** `main` follows RaftScope's `raft.js` rule for rule. A change to protocol behaviour needs a test, and a note in the pull request on which `raft.js` rule it matches or why it departs from it. Extensions (new protocols, new metrics) belong on a branch, as `gadaa` does.
- **Determinism.** Every random choice must come from the simulation's seeded `Rng`. Never use the clock or another source of randomness inside `crates/raftscope-core`.
- **Committed build.** `dist/` is committed so the repository works as a static site and a git submodule. If your change affects the browser build, rebuild `dist/` and commit it in the same pull request.
- **No dependencies.** The core and the WebAssembly crate have no dependencies, and the pages load nothing from the network. Please keep it that way.
- **The drop-in page.** `index.html` must fit the 800×580 iframe on raft.github.io without scrolling, and keep the original's controls and keyboard shortcuts.

## Where things live

`crates/raftscope-core/src/sim.rs` holds the protocol and the event scheduler, `timeline.rs` the time travel, `scene.rs` the drawing. `crates/raftscope-wasm` exposes them to JavaScript, and `raftscope.js` paints the draw list.

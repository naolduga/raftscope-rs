node v22.23.4; step 100 µs; client request every 50 ms

| n | mode | sim s | raft.js ms per sim-s | Rust/WASM ms per sim-s | Rust/wasm2js ms per sim-s | WASM speed-up | raft.js clones kept |
|---:|---|---:|---:|---:|---:|---:|---:|
| 5 | core | 20 | 63.33 | 0.09 | 1.76 | 716× | — |
| 5 | page | 2 | 961.01 | 1.15 | 12.76 | 835× | 381 |
| 9 | core | 10 | 109.04 | 0.08 | 5.85 | 1300× | — |
| 9 | page | 1 | 1428.64 | 0.31 | 6.15 | 4569× | 344 |
| 51 | core | 2 | 1596.97 | 0.63 | 18.13 | 2552× | — |
| 51 | page | 0.25 | 18476.29 | 1.65 | 53.93 | 11183× | 418 |
| 201 | core | 0.5 | 17455.61 | 16.58 | 57.78 | 1053× | — |
| 201 | page | 0.5 | (not run: too slow) | 16.15 | 90.27 | — | — |

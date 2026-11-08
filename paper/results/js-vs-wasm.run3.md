node v22.23.4; step 100 µs; client request every 50 ms

| n | mode | sim s | raft.js ms per sim-s | Rust/WASM ms per sim-s | Rust/wasm2js ms per sim-s | WASM speed-up | raft.js clones kept |
|---:|---|---:|---:|---:|---:|---:|---:|
| 5 | core | 20 | 58.04 | 0.20 | 2.62 | 287× | — |
| 5 | page | 2 | 1030.82 | 0.91 | 10.12 | 1131× | 398 |
| 9 | core | 10 | 104.28 | 0.08 | 2.19 | 1335× | — |
| 9 | page | 1 | 1300.19 | 0.38 | 7.20 | 3430× | 364 |
| 51 | core | 2 | 1599.32 | 0.65 | 14.84 | 2462× | — |
| 51 | page | 0.25 | 19955.24 | 5.14 | 45.60 | 3880× | 412 |
| 201 | core | 0.5 | 18015.74 | 16.51 | 57.99 | 1091× | — |
| 201 | page | 0.5 | (not run: too slow) | 18.11 | 63.33 | — | — |

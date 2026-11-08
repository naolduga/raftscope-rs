node v22.23.4; step 100 µs; client request every 50 ms

| n | mode | sim s | raft.js ms per sim-s | Rust/WASM ms per sim-s | Rust/wasm2js ms per sim-s | WASM speed-up | raft.js clones kept |
|---:|---|---:|---:|---:|---:|---:|---:|
| 5 | core | 20 | 48.02 | 0.12 | 2.68 | 389× | — |
| 5 | page | 2 | 855.06 | 0.85 | 10.49 | 1008× | 383 |
| 9 | core | 10 | 120.44 | 0.41 | 2.55 | 292× | — |
| 9 | page | 1 | 1444.25 | 0.35 | 6.78 | 4118× | 337 |
| 51 | core | 2 | 1422.35 | 0.49 | 11.19 | 2890× | — |
| 51 | page | 0.25 | 19134.70 | 1.73 | 44.49 | 11079× | 490 |
| 201 | core | 0.5 | 17786.60 | 16.62 | 59.34 | 1070× | — |
| 201 | page | 0.5 | (not run: too slow) | 17.43 | 66.24 | — | — |

node v22.23.4; step 100 µs; client request every 50 ms

| n | mode | sim s | raft.js ms per sim-s | Rust/WASM ms per sim-s | Rust/wasm2js ms per sim-s | WASM speed-up | raft.js clones kept |
|---:|---|---:|---:|---:|---:|---:|---:|
| 5 | core | 20 | 49.74 | 0.09 | 1.88 | 557× | — |
| 5 | page | 2 | 899.31 | 0.65 | 7.55 | 1393× | 383 |
| 9 | core | 10 | 78.84 | 0.06 | 2.13 | 1215× | — |
| 9 | page | 1 | 1468.81 | 0.39 | 6.12 | 3753× | 348 |
| 51 | core | 2 | 1425.40 | 0.57 | 13.63 | 2496× | — |
| 51 | page | 0.25 | 18172.57 | 2.43 | 46.29 | 7475× | 489 |
| 201 | core | 0.5 | 17367.36 | 20.89 | 69.11 | 831× | — |
| 201 | page | 0.5 | (not run: too slow) | 16.58 | 62.57 | — | — |

node v22.23.4; step 100 µs; client request every 50 ms

| n | mode | sim s | raft.js ms per sim-s | Rust/WASM ms per sim-s | Rust/wasm2js ms per sim-s | WASM speed-up | raft.js clones kept |
|---:|---|---:|---:|---:|---:|---:|---:|
| 5 | core | 20 | 49.04 | 0.11 | 1.87 | 450× | — |
| 5 | page | 2 | 792.53 | 0.78 | 12.69 | 1010× | 377 |
| 9 | core | 10 | 97.48 | 0.08 | 3.62 | 1226× | — |
| 9 | page | 1 | 1472.34 | 0.32 | 9.66 | 4608× | 345 |
| 51 | core | 2 | 1328.48 | 0.52 | 11.70 | 2578× | — |
| 51 | page | 0.25 | 20052.52 | 1.53 | 55.33 | 13134× | 519 |
| 201 | core | 0.5 | 16502.99 | 12.58 | 47.87 | 1312× | — |
| 201 | page | 0.5 | (not run: too slow) | 14.27 | 51.60 | — | — |

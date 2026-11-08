node v22.23.4; step 100 µs; client request every 50 ms

| n | mode | sim s | raft.js ms per sim-s | Rust/WASM ms per sim-s | Rust/wasm2js ms per sim-s | WASM speed-up | raft.js clones kept |
|---:|---|---:|---:|---:|---:|---:|---:|
| 5 | core | 20 | 46.52 | 0.10 | 1.59 | 484× | — |
| 5 | page | 2 | 858.42 | 0.84 | 11.79 | 1016× | 380 |
| 9 | core | 10 | 85.49 | 0.29 | 1.87 | 290× | — |
| 9 | page | 1 | 1439.34 | 0.37 | 5.89 | 3860× | 342 |
| 51 | core | 2 | 1441.30 | 0.50 | 11.26 | 2899× | — |
| 51 | page | 0.25 | 19395.39 | 1.82 | 46.97 | 10634× | 509 |
| 201 | core | 0.5 | 17241.86 | 17.25 | 59.65 | 999× | — |
| 201 | page | 0.5 | (not run: too slow) | 18.84 | 66.34 | — | — |

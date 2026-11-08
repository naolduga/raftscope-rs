Machine: 2 vCPU, x86_64, rustc 1.97.0

Simulating 30 s per run, 5 seed(s), one client request every 50000 µs, batch 1, loss 0%

| protocol | n | wall ms/run | sim speed-up | events/s | msgs per sim-s | elections | commits per sim-s | p50 commit ms | p99 commit ms | leaderless % | safety violations |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| raft | 5 | 0.4 | 67142× | 17.44 M | 160 | 1.4 | 19.9 | 24.5 | 27.4 | 0.50 | 0 |
| raft | 9 | 1.0 | 30067× | 15.05 M | 320 | 2.2 | 19.9 | 24.7 | 26.9 | 0.46 | 0 |
| raft | 51 | 8.3 | 3607× | 11.05 M | 2028 | 11.4 | 19.9 | 25.0 | 25.8 | 0.65 | 0 |
| raft | 201 | 40.3 | 745× | 9.57 M | 8540 | 45.0 | 19.8 | 25.0 | 25.4 | 0.92 | 0 |
| raft | 1001 | 428.7 | 70× | 5.72 M | 54300 | 219.4 | 19.8 | 25.0 | 25.2 | 0.98 | 0 |

With 10% message loss:

Simulating 30 s per run, 5 seed(s), one client request every 50000 µs, batch 1, loss 10%

| protocol | n | wall ms/run | sim speed-up | events/s | msgs per sim-s | elections | commits per sim-s | p50 commit ms | p99 commit ms | leaderless % | safety violations |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| raft | 5 | 0.8 | 39806× | 14.84 M | 196 | 39.0 | 18.6 | 27.2 | 290.0 | 5.95 | 0 |
| raft | 9 | 1.8 | 16359× | 13.17 M | 421 | 85.6 | 17.5 | 49.3 | 459.4 | 10.22 | 0 |
| raft | 51 | 17.4 | 1722× | 12.00 M | 3739 | 361.0 | 1.3 | 187.4 | 2649.3 | 21.54 | 0 |

Overload (100 requests/s, batch 1 vs 8):

Simulating 30 s per run, 5 seed(s), one client request every 10000 µs, batch 1, loss 0%

| protocol | n | wall ms/run | sim speed-up | events/s | msgs per sim-s | elections | commits per sim-s | p50 commit ms | p99 commit ms | leaderless % | safety violations |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| raft | 5 | 1.9 | 15888× | 14.24 M | 319 | 1.4 | 39.8 | 8956.9 | 17731.2 | 0.50 | 0 |
| raft | 5 | 2.0 | 15064× | 13.50 M | 319 | 1.4 | 99.4 | 34.6 | 46.7 | 0.50 | 0 |

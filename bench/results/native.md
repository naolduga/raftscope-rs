Machine: 2 vCPU, x86_64, rustc 1.97.0

Simulating 30 s per run, 5 seed(s), one client request every 50000 µs, batch 1, loss 0%

| n | wall ms/run | sim speed-up | events/s | msgs per sim-s | elections | commits per sim-s | p50 commit ms | p99 commit ms | leaderless % | safety violations |
|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 5 | 0.7 | 43576× | 11.32 M | 160 | 1.4 | 19.9 | 24.5 | 27.4 | 0.50 | 0 |
| 9 | 1.4 | 21450× | 10.74 M | 320 | 2.2 | 19.9 | 24.7 | 26.9 | 0.46 | 0 |
| 51 | 7.2 | 4190× | 12.84 M | 2028 | 11.4 | 19.9 | 25.0 | 25.8 | 0.65 | 0 |
| 201 | 37.2 | 807× | 10.37 M | 8540 | 45.0 | 19.8 | 25.0 | 25.4 | 0.92 | 0 |
| 1001 | 458.6 | 65× | 5.34 M | 54300 | 219.4 | 19.8 | 25.0 | 25.2 | 0.98 | 0 |

With 10% message loss:

Simulating 30 s per run, 5 seed(s), one client request every 50000 µs, batch 1, loss 10%

| n | wall ms/run | sim speed-up | events/s | msgs per sim-s | elections | commits per sim-s | p50 commit ms | p99 commit ms | leaderless % | safety violations |
|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 5 | 0.9 | 32947× | 12.28 M | 196 | 39.0 | 18.6 | 27.2 | 290.0 | 5.95 | 0 |
| 9 | 2.1 | 14139× | 11.38 M | 421 | 85.6 | 17.5 | 49.3 | 459.4 | 10.22 | 0 |
| 51 | 21.6 | 1388× | 9.67 M | 3739 | 361.0 | 1.3 | 187.4 | 2649.3 | 21.54 | 0 |

Overload (100 requests/s), batch 1 then batch 8:

Simulating 30 s per run, 5 seed(s), one client request every 10000 µs, batch 1, loss 0%

| n | wall ms/run | sim speed-up | events/s | msgs per sim-s | elections | commits per sim-s | p50 commit ms | p99 commit ms | leaderless % | safety violations |
|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 5 | 2.8 | 10808× | 9.69 M | 319 | 1.4 | 39.8 | 8956.9 | 17731.2 | 0.50 | 0 |
| 5 | 2.9 | 10419× | 9.34 M | 319 | 1.4 | 99.4 | 34.6 | 46.7 | 0.50 | 0 |

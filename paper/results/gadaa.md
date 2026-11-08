Gadaa round-robin: term 800 ms, 600 s simulated per run (750 terms), 5 seeds, client request every 50 ms

| scenario | successions | in order | hand-off p50 / p99 ms | leaderless % | requests rejected % | commit p50 / p99 ms | share of time led, min–max % | safety violations |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| healthy | 705 | 100.0% | 50.0 / 59.4 | 1.43 | 5.9 | 24.4 / 27.4 | 19.7–19.8 | 0 |
| plain Raft, no rotation | 0 | — | — | 0.02 | 0.0 | 24.4 / 27.4 | 0.0–100.0 | 0 |
| 5% message loss | 706 | 88.7% | 50.4 / 140.4 | 2.64 | 8.1 | 25.1 / 73.1 | 18.6–20.4 | 0 |
| 10% message loss | 702 | 44.1% | 133.7 / 339.6 | 4.44 | 15.0 | 55.3 / 471.2 | 0.1–35.2 | 0 |
| 1 party down | 690 | 75.0% | 50.8 / 140.9 | 1.47 | 8.0 | 25.0 / 36.0 | 0.0–26.7 | 0 |
| 2 parties down | 660 | 33.3% | 137.0 / 143.2 | 1.55 | 11.9 | 26.2 / 41.8 | 0.0–34.0 | 0 |
| crash churn (restart every 4 s) | 651 | 44.1% | 135.5 / 339.6 | 2.33 | 14.9 | 27.6 / 1620.2 | 0.1–35.5 | 0 |
| partitions (isolate 3 s of every 10 s) | 602 | 23.9% | 137.0 / 340.0 | 1.76 | 16.6 | 26.2 / 325.5 | 0.3–43.6 | 0 |
| 15 parties, healthy | 705 | 100.0% | 50.0 / 58.6 | 1.47 | 5.9 | 24.8 / 26.5 | 6.6–6.7 | 0 |
| 51 parties, healthy | 705 | 100.0% | 49.9 / 57.7 | 1.50 | 5.9 | 25.0 / 25.8 | 1.8–2.0 | 0 |

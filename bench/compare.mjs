// Head-to-head in one JS engine: the original RaftScope raft.js vs. this
// project's raftscope.wasm, on the same workload.
//
//   git clone https://github.com/ongardie/raftscope /tmp/raftscope
//   node bench/compare.mjs /tmp/raftscope
//
// Workload: N servers, one client request to the leader every 50 ms of
// simulated time, and the page's stepping model: the original advances the
// model once per animation frame, so we step both simulators in fixed
// increments of DT simulated microseconds (100 µs ≈ one frame at 1/170×).
//
// Two modes per simulator:
//   core   the simulation alone (raft.update / Sim::advance_to)
//   page   what the visualizer pays to keep history for time travel:
//          raft.js + state.js's compare-and-deep-clone after every change,
//          vs. Timeline (sparse checkpoints + deterministic replay).

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const refDir = process.argv[2];
if (!refDir || !fs.existsSync(path.join(refDir, 'raft.js'))) {
  console.error('usage: node bench/compare.mjs <path to a checkout of github.com/ongardie/raftscope>');
  process.exit(2);
}
const wasmPath = path.join(here, '../dist/raftscope.wasm');
const DT = 100;               // µs of simulated time per step
const LOAD = 50_000;          // µs between client requests

function loadOriginal(n) {
  const ctx = {
    console: { log() {} }, Math,
  };
  vm.createContext(ctx);
  // Minimal stand-ins for the two jQuery helpers util.js uses, defined inside
  // the context so clones share its realm (util.equals compares constructors).
  // JSON round-tripping is cheaper than jQuery's deep extend, so this favours
  // the original.
  vm.runInContext(`
    var $ = { map: function (m, f) { return Object.keys(m).map(function (k) { return f(m[k]); }); } };
    var jQuery = { extend: function (deep, t, o) { return JSON.parse(JSON.stringify(o)); } };
  `, ctx);
  for (const f of ['util.js', 'raft.js']) {
    vm.runInContext(fs.readFileSync(path.join(refDir, f), 'utf8'), ctx, { filename: f });
  }
  vm.runInContext(`NUM_SERVERS = ${n};`, ctx);
  return ctx;
}

function runOriginal(n, simUs, page) {
  const g = loadOriginal(n);
  const { raft, util } = g;
  // Built inside the context, as script.js does on the page.
  const model = vm.runInContext(`(function () {
    var m = { servers: [], messages: [], time: 0 };
    for (var i = 1; i <= ${n}; i++) {
      var peers = [];
      for (var j = 1; j <= ${n}; j++) if (i !== j) peers.push(j);
      m.servers.push(raft.server(i, peers));
    }
    return m;
  })()`, g);
  const checkpoints = [util.clone(model)];
  let nextReq = LOAD;
  const t0 = performance.now();
  for (let t = DT; t <= simUs; t += DT) {
    model.time = t;
    if (t >= nextReq) {
      nextReq += LOAD;
      let leader = null;
      for (const s of model.servers) if (s.state === 'leader' && (!leader || s.term > leader.term)) leader = s;
      if (leader) raft.clientRequest(model, leader);
    }
    raft.update(model);
    if (page) {
      // state.updater: compare against the last checkpoint (ignoring time),
      // deep-clone when anything changed.
      const base = checkpoints[checkpoints.length - 1];
      const saved = model.time; model.time = base.time;
      const same = util.equals(model, base);
      model.time = saved;
      if (!same) checkpoints.push(util.clone(model));
    }
  }
  const wall = performance.now() - t0;
  const leader = model.servers.find((s) => s.state === 'leader');
  return { wall, committed: leader ? leader.commitIndex : 0, clones: checkpoints.length };
}

async function loadWasm() {
  const { instance } = await WebAssembly.instantiate(fs.readFileSync(wasmPath), {});
  return instance.exports;
}

function runWasm(x, n, simUs, page) {
  const p = x.rs_new(n, 1, 100_000, 10_000, 15_000, 50_000, 1, 0, LOAD);
  const t0 = performance.now();
  if (page) {
    for (let t = DT; t <= simUs; t += DT) x.rs_seek(p, t);
  } else {
    x.rs_run_headless(p, simUs);
  }
  const wall = performance.now() - t0;
  const len = x.rs_stats(p);
  const st = JSON.parse(new TextDecoder().decode(new Uint8Array(x.memory.buffer, x.rs_out(p), len)));
  x.rs_free(p);
  return { wall, committed: st.committed };
}

const x = await loadWasm();
const xj = await import(path.join(here, '../dist/raftscope.wasm.js'));
// The original keeps every clone in memory (a 20 s run of 5 servers exhausts
// a 2 GB heap), so page mode runs a shorter window.
const plan = [
  { n: 5, secs: 20, pageSecs: 2 },
  { n: 9, secs: 10, pageSecs: 1 },
  { n: 51, secs: 2, pageSecs: 0.25 },
  { n: 201, secs: 0.5, pageSecs: 0 },
];
console.log(`node ${process.version}; step ${DT} µs; client request every ${LOAD / 1000} ms\n`);
console.log('| n | mode | sim s | raft.js ms per sim-s | Rust/WASM ms per sim-s | Rust/wasm2js ms per sim-s | WASM speed-up | raft.js clones kept |');
console.log('|---:|---|---:|---:|---:|---:|---:|---:|');
for (const { n, secs, pageSecs } of plan) {
  for (const page of [false, true]) {
    const s = page ? pageSecs : secs;
    if (!s) {
      const w = runWasm(x, n, 0.5e6, true), j = runWasm(xj, n, 0.5e6, true);
      console.log(`| ${n} | page | 0.5 | (not run: too slow) | ${(w.wall / 0.5).toFixed(2)} | ${(j.wall / 0.5).toFixed(2)} | — | — |`);
      continue;
    }
    const js = runOriginal(n, s * 1e6, page);
    const w = runWasm(x, n, s * 1e6, page), j = runWasm(xj, n, s * 1e6, page);
    const a = js.wall / s, b = w.wall / s;
    console.log(`| ${n} | ${page ? 'page' : 'core'} | ${s} | ${a.toFixed(2)} | ${b.toFixed(2)} | ${(j.wall / s).toFixed(2)} | ${(a / b).toFixed(0)}× | ${page ? js.clones.toLocaleString('en-US') : '—'} |`);
  }
}

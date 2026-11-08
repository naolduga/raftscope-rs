// Smoke test for the prebuilt browser files: both engines in dist/ must load,
// elect a leader, commit entries, report no safety violations, and agree with
// each other exactly (same seed => same run).
//
//   node scripts/smoke.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const dec = new TextDecoder();

async function engines() {
  const out = [];
  const wasm = path.join(root, 'dist/raftscope.wasm');
  const { instance } = await WebAssembly.instantiate(fs.readFileSync(wasm), {});
  out.push(['WebAssembly', instance.exports]);
  const js = path.join(root, 'dist/raftscope.wasm.js');
  if (fs.existsSync(js)) out.push(['wasm2js', await import(js)]);
  return out;
}

function run(x) {
  const p = x.rs_new(5, 42, 100_000, 10_000, 15_000, 50_000, 1, 0.02, 0, 0, 50_000);
  for (let t = 100_000; t <= 5_000_000; t += 100_000) x.rs_seek(p, t); // via the timeline
  x.rs_op(p, 0, 2, 0); // stop S3
  x.rs_seek(p, 8_000_000);
  x.rs_seek(p, 1_000_000); // time travel back
  x.rs_seek(p, 10_000_000);
  const n = x.rs_render(p, 800, 400, -1, 20000);
  const len = x.rs_stats(p); // call first: it rewrites the output buffer
  const st = JSON.parse(dec.decode(new Uint8Array(x.memory.buffer, x.rs_out(p), len)));
  x.rs_free(p);
  return { st, n };
}

let failed = false;
const results = [];
for (const [name, x] of await engines()) {
  const { st, n } = run(x);
  const ok = st.leader >= 0 && st.committed > 50 && st.violationCount === 0 && n > 50;
  console.log(`${ok ? 'ok  ' : 'FAIL'} ${name}: leader S${st.leader + 1}, term ${st.maxTerm}, committed ${st.committed}, ` +
    `${st.sent} messages, ${n} draw commands, ${st.violationCount} violations`);
  failed ||= !ok;
  results.push(JSON.stringify({ ...st, horizon: 0 }));
}
if (results.length === 2 && results[0] !== results[1]) {
  console.log('FAIL engines disagree'); failed = true;
} else if (results.length === 2) console.log('ok   both engines produce identical runs');
process.exit(failed ? 1 : 0);

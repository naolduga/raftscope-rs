// Thin loader for raftscope.wasm. All simulation, layout and hit-testing run
// in Rust; this file only instantiates the module, forwards calls, and
// replays the draw-command list onto a Canvas 2D context.

const STRIDE = 10;
const dec = new TextDecoder();

export async function loadRaftScope(url = new URL('./dist/raftscope.wasm', import.meta.url)) {
  // Some hosts (sandboxed iframes, strict Content-Security-Policy without
  // 'wasm-unsafe-eval') refuse to compile WebAssembly. The same Rust code is
  // also shipped compiled to plain JavaScript (Binaryen wasm2js) as a fallback.
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
    const bytes = await res.arrayBuffer();
    const { instance } = await WebAssembly.instantiate(bytes, {});
    return new Module(instance.exports, 'WebAssembly');
  } catch (err) {
    const js = await import(new URL('./dist/raftscope.wasm.js', import.meta.url).href);
    return new Module(js, 'JavaScript (wasm2js fallback)', err);
  }
}

export const OP = {
  stop: 0, resume: 1, resumeAll: 2, restart: 3, timeout: 4, request: 5,
  requestToLeader: 6, dropMessage: 7, setGroup: 8, heal: 9,
  spreadTimers: 10, alignTimers: 11, logReplicationScenario: 12, fork: 13,
  restartLeader: 14,
};

export const DEFAULTS = {
  n: 5, seed: 1, electionTimeout: 100_000, minLatency: 10_000, maxLatency: 15_000,
  rpcTimeout: 50_000, batchSize: 1, loss: 0,
  clientInterval: 0,
};

class Module {
  constructor(x, engine, fallbackReason = null) {
    this.x = x;
    this.engine = engine;
    this.fallbackReason = fallbackReason;
  }
  preferredHeight(w) { return this.x.rs_preferred_height(w); }
  create(opts = {}) { return new Simulation(this.x, { ...DEFAULTS, ...opts }); }
}

class Simulation {
  constructor(x, o) {
    this.x = x;
    this.opts = o;
    this.p = x.rs_new(o.n, o.seed, o.electionTimeout, o.minLatency, o.maxLatency, o.rpcTimeout,
      o.batchSize, o.loss, o.clientInterval);
  }
  free() { if (this.p) this.x.rs_free(this.p); this.p = 0; }
  get time() { return this.x.rs_time(this.p); }
  get horizon() { return this.x.rs_horizon(this.p); }
  seek(t) { this.x.rs_seek(this.p, t); }
  op(kind, a = 0, b = 0) { this.x.rs_op(this.p, kind, a, b); }
  _json(len) {
    const ptr = this.x.rs_out(this.p);
    return len ? JSON.parse(dec.decode(new Uint8Array(this.x.memory.buffer, ptr, len))) : null;
  }
  stats() { return this._json(this.x.rs_stats(this.p)); }
  server(id) { return this._json(this.x.rs_server(this.p, id)); }
  message(seq) { return this._json(this.x.rs_message(this.p, seq)); }
  pick(w, h, px, py) { return this.x.rs_pick(this.p, w, h, px, py); }
  runHeadless(t) { return this.x.rs_run_headless(this.p, t); }

  /** Build the scene in Rust and paint it. `palette` maps slot index → CSS colour. */
  draw(ctx, w, h, palette, selected = -1, maxMessages = 20000, font = 'sans-serif') {
    const count = this.x.rs_render(this.p, w, h, selected, maxMessages);
    const mem = this.x.memory.buffer;
    const c = new Float32Array(mem, this.x.rs_cmds(this.p), count * STRIDE);
    const text = new Uint8Array(mem, this.x.rs_text(this.p), this.x.rs_text_len(this.p));
    const col = (i) => palette[i | 0] ?? '#888';
    ctx.textBaseline = 'middle';
    for (let k = 0; k < c.length; k += STRIDE) {
      const op = c[k];
      if (op === 1) {
        const [x, y, r, fill, stroke, lw, alpha, dashed] = [c[k+1], c[k+2], c[k+3], c[k+4], c[k+5], c[k+6], c[k+7], c[k+8]];
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        if (fill >= 0) { ctx.fillStyle = col(fill); ctx.fill(); }
        if (stroke >= 0 && lw > 0) {
          ctx.setLineDash(dashed ? [4, 3] : []);
          ctx.strokeStyle = col(stroke); ctx.lineWidth = lw; ctx.stroke();
          ctx.setLineDash([]);
        }
      } else if (op === 2) {
        ctx.globalAlpha = c[k+8];
        ctx.beginPath();
        ctx.arc(c[k+1], c[k+2], c[k+3], c[k+4], c[k+5]);
        ctx.strokeStyle = col(c[k+6]); ctx.lineWidth = c[k+7]; ctx.lineCap = 'round';
        ctx.stroke(); ctx.lineCap = 'butt';
      } else if (op === 3) {
        ctx.globalAlpha = c[k+7];
        ctx.setLineDash(c[k+8] ? [4, 3] : []);
        ctx.beginPath();
        ctx.moveTo(c[k+1], c[k+2]); ctx.lineTo(c[k+3], c[k+4]);
        ctx.strokeStyle = col(c[k+5]); ctx.lineWidth = c[k+6]; ctx.stroke();
        ctx.setLineDash([]);
      } else if (op === 4) {
        ctx.globalAlpha = c[k+8];
        if (c[k+5] >= 0) { ctx.fillStyle = col(c[k+5]); ctx.fillRect(c[k+1], c[k+2], c[k+3], c[k+4]); }
        if (c[k+6] >= 0 && c[k+7] > 0) {
          ctx.strokeStyle = col(c[k+6]); ctx.lineWidth = c[k+7];
          ctx.strokeRect(c[k+1] + 0.5, c[k+2] + 0.5, c[k+3] - 1, c[k+4] - 1);
        }
      } else if (op === 5) {
        ctx.globalAlpha = c[k+9];
        ctx.font = `${c[k+8] ? 600 : 400} ${c[k+3]}px ${font}`;
        ctx.fillStyle = col(c[k+4]);
        ctx.textAlign = ['left', 'center', 'right'][c[k+5] | 0];
        const off = c[k+6] | 0, len = c[k+7] | 0;
        ctx.fillText(dec.decode(text.subarray(off, off + len)), c[k+1], c[k+2] + 0.5);
      }
    }
    ctx.globalAlpha = 1;
    return count;
  }
}

//! Builds the picture as a flat list of draw commands.
//!
//! All visual logic (layout, colours by meaning, what to show at what scale)
//! lives here in Rust; the browser side only replays the commands onto a
//! Canvas 2D context, so one shared `Float32Array` view crosses the WASM
//! boundary per frame instead of thousands of DOM/SVG updates.
//!
//! Each command is [`STRIDE`] floats: `[op, a, b, c, d, e, f, g, h, i]`.
//!
//! | op | meaning | args |
//! |----|---------|------|
//! | 1 | circle | x y r fill stroke lineWidth alpha dashed |
//! | 2 | arc (stroke) | x y r start end color lineWidth alpha |
//! | 3 | line | x1 y1 x2 y2 color lineWidth alpha dashed |
//! | 4 | rect | x y w h fill stroke lineWidth alpha |
//! | 5 | text | x y size color align(0 l,1 c,2 r) textOff textLen bold alpha |
//!
//! Colours are palette indices (negative = none); see [`color`].

#![allow(clippy::too_many_arguments)] // drawing primitives mirror Canvas 2D signatures

use crate::sim::{Body, Role, Sim, INF};
use std::f32::consts::PI;

pub const STRIDE: usize = 10;

/// Palette slots; the host maps them to real colours for its theme.
pub mod color {
    pub const NONE: f32 = -1.0;
    pub const BG: f32 = 0.0;
    pub const FG: f32 = 1.0;
    pub const MUTED: f32 = 2.0;
    pub const LINE: f32 = 3.0;
    pub const SURFACE: f32 = 4.0;
    pub const ACCENT: f32 = 5.0;
    pub const DANGER: f32 = 6.0;
    pub const MSG_VOTE: f32 = 7.0;
    pub const MSG_APPEND: f32 = 8.0;
    pub const MSG_TRANSFER: f32 = 9.0;
    /// Term colours are TERM0 + (term % TERMS).
    pub const TERM0: f32 = 10.0;
    pub const TERMS: u32 = 8;
    pub const ON_TERM: f32 = 18.0;

    pub fn term(t: u32) -> f32 {
        TERM0 + (t % TERMS) as f32
    }
}

#[derive(Clone, Copy, Debug)]
pub struct Layout {
    pub cx: f32,
    pub cy: f32,
    pub ring: f32,
    pub node: f32,
    pub log_x: f32,
    pub log_y: f32,
    pub log_w: f32,
    pub log_h: f32,
    pub detailed: bool,
}

/// Canvas height that suits a given width (CSS pixels).
pub fn preferred_height(w: f32) -> f32 {
    if w >= 760.0 {
        (w * 0.5).clamp(380.0, 620.0)
    } else {
        w + 250.0
    }
}

pub fn layout(w: f32, h: f32, n: usize) -> Layout {
    let wide = w >= 760.0;
    let (side, cx, cy, log_x, log_y, log_w, log_h) = if wide {
        let side = h.min(w * 0.52);
        (
            side,
            side / 2.0,
            h / 2.0,
            side + 40.0,
            12.0,
            w - side - 52.0,
            h - 24.0,
        )
    } else {
        let side = w.min(h - 120.0).max(120.0);
        (
            side,
            w / 2.0,
            side / 2.0,
            12.0,
            side + 4.0,
            w - 24.0,
            h - side - 12.0,
        )
    };
    // Leaves room for the labels outside the ring (anchored outward below).
    let ring = side * if wide { 0.30 } else { 0.31 };
    let n_f = n.max(1) as f32;
    let spacing = if n > 1 {
        ring * (PI / n_f).sin() * 0.82
    } else {
        side * 0.085
    };
    let node = spacing.min(side * 0.085).max(1.5);
    Layout {
        cx,
        cy,
        ring,
        node,
        log_x,
        log_y,
        log_w,
        log_h,
        detailed: n <= 32,
    }
}

pub fn server_pos(l: &Layout, i: usize, n: usize) -> (f32, f32) {
    let a = 2.0 * PI * (0.75 + i as f32 / n.max(1) as f32);
    (l.cx + l.ring * a.cos(), l.cy + l.ring * a.sin())
}

#[derive(Default)]
pub struct Scene {
    pub cmds: Vec<f32>,
    pub text: Vec<u8>,
    /// Number of messages not drawn because of the cap.
    pub culled: usize,
}

pub struct ViewOpts {
    pub w: f32,
    pub h: f32,
    pub selected: Option<u32>,
    pub max_messages: usize,
}

impl Scene {
    pub fn count(&self) -> usize {
        self.cmds.len() / STRIDE
    }

    fn push(&mut self, c: [f32; STRIDE]) {
        self.cmds.extend_from_slice(&c);
    }

    fn circle(
        &mut self,
        x: f32,
        y: f32,
        r: f32,
        fill: f32,
        stroke: f32,
        lw: f32,
        alpha: f32,
        dashed: bool,
    ) {
        self.push([
            1.0,
            x,
            y,
            r,
            fill,
            stroke,
            lw,
            alpha,
            dashed as u8 as f32,
            0.0,
        ]);
    }

    fn arc(&mut self, x: f32, y: f32, r: f32, a0: f32, a1: f32, col: f32, lw: f32, alpha: f32) {
        self.push([2.0, x, y, r, a0, a1, col, lw, alpha, 0.0]);
    }

    fn line(
        &mut self,
        x1: f32,
        y1: f32,
        x2: f32,
        y2: f32,
        col: f32,
        lw: f32,
        alpha: f32,
        dashed: bool,
    ) {
        self.push([
            3.0,
            x1,
            y1,
            x2,
            y2,
            col,
            lw,
            alpha,
            dashed as u8 as f32,
            0.0,
        ]);
    }

    fn rect(
        &mut self,
        x: f32,
        y: f32,
        w: f32,
        h: f32,
        fill: f32,
        stroke: f32,
        lw: f32,
        alpha: f32,
    ) {
        self.push([4.0, x, y, w, h, fill, stroke, lw, alpha, 0.0]);
    }

    fn text(
        &mut self,
        x: f32,
        y: f32,
        size: f32,
        col: f32,
        align: u8,
        s: &str,
        bold: bool,
        alpha: f32,
    ) {
        let off = self.text.len() as f32;
        self.text.extend_from_slice(s.as_bytes());
        self.push([
            5.0,
            x,
            y,
            size,
            col,
            align as f32,
            off,
            s.len() as f32,
            bold as u8 as f32,
            alpha,
        ]);
    }

    pub fn build(&mut self, sim: &Sim, v: &ViewOpts) {
        self.cmds.clear();
        self.text.clear();
        self.culled = 0;
        let n = sim.n();
        let l = layout(v.w, v.h, n);
        let now = sim.time;
        let et = sim.cfg.election_timeout as f32;

        // Ring guide.
        self.circle(
            l.cx,
            l.cy,
            l.ring,
            color::NONE,
            color::LINE,
            1.0,
            1.0,
            false,
        );

        // Messages (under the servers).
        let msg_r = if l.detailed {
            (l.node * 0.16).clamp(3.0, 7.0)
        } else {
            (l.node * 0.5).clamp(1.2, 3.0)
        };
        let mut drawn = 0usize;
        for m in sim.messages() {
            if drawn >= v.max_messages {
                self.culled += 1;
                continue;
            }
            drawn += 1;
            let (x1, y1) = server_pos(&l, m.from as usize, n);
            let (x2, y2) = server_pos(&l, m.to as usize, n);
            let span = (m.recv_time - m.send_time).max(1) as f32;
            let f = ((now.saturating_sub(m.send_time)) as f32 / span).clamp(0.0, 1.0);
            // Travel from rim to rim rather than centre to centre.
            let (dx, dy) = (x2 - x1, y2 - y1);
            let d = (dx * dx + dy * dy).sqrt().max(1e-3);
            let inset = (l.node / d).min(0.45);
            let g = inset + f * (1.0 - 2.0 * inset);
            let (x, y) = (x1 + dx * g, y1 + dy * g);
            let col = match m.body.kind() {
                0 => color::MSG_VOTE,
                1 => color::MSG_APPEND,
                _ => color::MSG_TRANSFER,
            };
            let alpha = if m.lost { 0.3 } else { 1.0 };
            let big = matches!(&m.body, Body::AppendEntries { entries, .. } if !entries.is_empty());
            let r = if big { msg_r * 1.45 } else { msg_r };
            if !l.detailed {
                self.rect(x - r, y - r, 2.0 * r, 2.0 * r, col, color::NONE, 0.0, alpha);
                continue;
            }
            if m.body.is_request() {
                self.circle(x, y, r, col, color::NONE, 0.0, alpha, false);
            } else {
                self.circle(x, y, r * 0.85, color::BG, col, 2.0, alpha, false);
            }
            // Direction tick toward the destination.
            let (ux, uy) = (dx / d, dy / d);
            self.line(
                x + ux * r,
                y + uy * r,
                x + ux * (r + 5.0),
                y + uy * (r + 5.0),
                col,
                1.5,
                alpha,
                false,
            );
        }

        // Servers.
        for s in &sim.servers {
            let (x, y) = server_pos(&l, s.id as usize, n);
            let r = l.node;
            let selected = v.selected == Some(s.id);
            let stopped = s.role == Role::Stopped;
            if !l.detailed {
                let (fill, rr) = match s.role {
                    Role::Leader => (color::ACCENT, r * 2.2),
                    Role::Candidate => (color::term(s.term), r * 1.4),
                    Role::Follower => (color::term(s.term), r),
                    Role::Stopped => (color::MUTED, r),
                };
                self.circle(
                    x,
                    y,
                    rr.max(1.5),
                    fill,
                    color::NONE,
                    0.0,
                    if stopped { 0.4 } else { 1.0 },
                    false,
                );
                if s.group != 0 {
                    self.circle(x, y, rr + 2.0, color::NONE, color::DANGER, 1.0, 1.0, false);
                }
                if selected {
                    self.circle(x, y, rr + 4.0, color::NONE, color::FG, 2.0, 1.0, false);
                }
                continue;
            }
            // Election timer: arc shrinking toward the alarm.
            if !stopped
                && s.role != Role::Leader
                && s.election_alarm != INF
                && s.election_alarm > now
            {
                let frac = ((s.election_alarm - now) as f32 / (2.0 * et)).clamp(0.0, 1.0);
                let a0 = -PI / 2.0;
                self.arc(
                    x,
                    y,
                    r + 6.0,
                    a0,
                    a0 + 2.0 * PI * frac,
                    color::MUTED,
                    3.0,
                    1.0,
                );
            }
            if stopped {
                self.circle(x, y, r, color::SURFACE, color::MUTED, 2.0, 1.0, true);
            } else {
                let (stroke, lw, dashed) = match s.role {
                    Role::Leader => (color::ACCENT, 5.0, false),
                    Role::Candidate => (color::FG, 2.0, true),
                    _ => (color::NONE, 0.0, false),
                };
                self.circle(x, y, r, color::term(s.term), stroke, lw, 1.0, dashed);
            }
            if s.group != 0 {
                self.circle(x, y, r + 11.0, color::NONE, color::DANGER, 2.0, 1.0, true);
            }
            if selected {
                self.circle(x, y, r + 15.0, color::NONE, color::FG, 2.0, 0.9, false);
            }
            let fs = (r * 0.75).clamp(9.0, 26.0);
            let tcol = if stopped {
                color::MUTED
            } else {
                color::ON_TERM
            };
            self.text(x, y, fs, tcol, 1, &s.term.to_string(), true, 1.0);
            // Votes granted (candidates in small clusters).
            if s.role == Role::Candidate && n <= 9 {
                let mut k = 0;
                for p in 0..n {
                    if p as u32 == s.id {
                        continue;
                    }
                    let a = PI * 0.25 + PI * 0.5 * (k as f32 / (n as f32 - 2.0).max(1.0));
                    let (vx, vy) = (x + (r * 0.62) * a.cos(), y + (r * 0.62) * a.sin());
                    let g = s.vote_granted.get(p).copied().unwrap_or(false);
                    self.circle(
                        vx,
                        vy,
                        (r * 0.09).max(2.0),
                        if g { color::ON_TERM } else { color::NONE },
                        color::ON_TERM,
                        1.0,
                        1.0,
                        false,
                    );
                    k += 1;
                }
            }
            // Label outside the ring.
            let (ox, oy) = ((x - l.cx) / l.ring.max(1.0), (y - l.cy) / l.ring.max(1.0));
            // Anchor the label on the side facing away from the ring, so a
            // long label ("S2 · leader") never runs back over its own circle.
            let (align, lr) = if ox > 0.35 {
                (0, r + 17.0)
            } else if ox < -0.35 {
                (2, r + 17.0)
            } else {
                (1, r + 18.0)
            };
            let role = match s.role {
                Role::Leader => " · leader",
                Role::Candidate => " · cand.",
                Role::Stopped => " · down",
                Role::Follower => "",
            };
            let label = format!("S{}{}", s.id + 1, role);
            self.text(
                x + ox * lr,
                y + oy * lr,
                12.0,
                if s.role == Role::Leader {
                    color::ACCENT
                } else {
                    color::MUTED
                },
                align,
                &label,
                s.role == Role::Leader,
                1.0,
            );
        }

        self.build_logs(sim, &l, v);
    }

    fn build_logs(&mut self, sim: &Sim, l: &Layout, v: &ViewOpts) {
        if l.log_w < 80.0 || l.log_h < 40.0 {
            return;
        }
        let n = sim.n();
        // Which rows: everything if it fits, else leader, selection, then by id.
        let max_rows = ((l.log_h - 22.0) / 18.0).floor().max(1.0) as usize;
        let mut rows: Vec<u32> = Vec::new();
        if n <= max_rows.min(12) {
            rows.extend(0..n as u32);
        } else {
            if let Some(ld) = sim.leader() {
                rows.push(ld.id);
            }
            if let Some(sel) = v.selected {
                if !rows.contains(&sel) && (sel as usize) < n {
                    rows.push(sel);
                }
            }
            let mut i = 0u32;
            while rows.len() < max_rows.min(12) && (i as usize) < n {
                if !rows.contains(&i) {
                    rows.push(i);
                }
                i += 1;
            }
            rows.sort_unstable();
        }
        let rh = ((l.log_h - 22.0) / rows.len() as f32).clamp(16.0, 34.0);
        let label_w = 64.0;
        let cw = (rh * 0.92).max(14.0);
        let cols = (((l.log_w - label_w) / cw).floor() as usize).max(1);
        let max_len = rows
            .iter()
            .map(|&i| sim.servers[i as usize].log.len())
            .max()
            .unwrap_or(0);
        let start = if max_len > cols {
            max_len - cols + 1
        } else {
            1
        };
        let x0 = l.log_x + label_w;
        let y0 = l.log_y + 20.0;

        // Column header.
        let step = if cw >= 22.0 { 1 } else { 5 };
        for c in 0..cols {
            let idx = start + c;
            if idx % step == 0 || step == 1 {
                self.text(
                    x0 + c as f32 * cw + cw / 2.0,
                    l.log_y + 8.0,
                    10.0,
                    color::MUTED,
                    1,
                    &idx.to_string(),
                    false,
                    1.0,
                );
            }
        }
        if n > rows.len() {
            self.text(
                l.log_x,
                l.log_y + 8.0,
                10.0,
                color::MUTED,
                0,
                &format!("{} of {}", rows.len(), n),
                false,
                1.0,
            );
        }

        let leader = sim.leader();
        for (r, &id) in rows.iter().enumerate() {
            let s = &sim.servers[id as usize];
            let y = y0 + r as f32 * rh;
            let sel = v.selected == Some(id);
            if sel {
                self.rect(
                    l.log_x - 4.0,
                    y,
                    l.log_w + 8.0,
                    rh,
                    color::SURFACE,
                    color::NONE,
                    0.0,
                    1.0,
                );
            }
            let lc = match s.role {
                Role::Leader => color::ACCENT,
                Role::Stopped => color::MUTED,
                _ => color::FG,
            };
            self.text(
                l.log_x,
                y + rh / 2.0,
                12.0,
                lc,
                0,
                &format!("S{}", id + 1),
                s.role == Role::Leader,
                1.0,
            );
            let pad = 2.0;
            for c in 0..cols {
                let idx = start + c; // 1-based
                let cx = x0 + c as f32 * cw;
                if let Some(e) = s.log.get(idx - 1) {
                    let committed = idx as u32 <= s.commit_index;
                    self.rect(
                        cx + pad,
                        y + pad,
                        cw - 2.0 * pad,
                        rh - 2.0 * pad,
                        color::term(e.term),
                        color::NONE,
                        0.0,
                        if committed { 1.0 } else { 0.38 },
                    );
                    if cw >= 18.0 {
                        self.text(
                            cx + cw / 2.0,
                            y + rh / 2.0,
                            (rh * 0.42).min(12.0),
                            color::ON_TERM,
                            1,
                            &e.term.to_string(),
                            false,
                            if committed { 1.0 } else { 0.8 },
                        );
                    }
                } else {
                    self.rect(
                        cx + pad,
                        y + pad,
                        cw - 2.0 * pad,
                        rh - 2.0 * pad,
                        color::NONE,
                        color::LINE,
                        1.0,
                        1.0,
                    );
                }
            }
            // Leader's view of this follower: matchIndex (solid) / nextIndex (hollow).
            if let Some(ld) = leader {
                if ld.id != id && !ld.match_index.is_empty() {
                    let mi = ld.match_index[id as usize] as usize;
                    let ni = ld.next_index[id as usize] as usize;
                    for (ix, filled) in [(ni, false), (mi, true)] {
                        if ix >= start && ix < start + cols {
                            let mx = x0 + (ix - start) as f32 * cw + cw / 2.0;
                            self.circle(
                                mx,
                                y + rh - 2.0,
                                2.5,
                                if filled { color::FG } else { color::BG },
                                color::FG,
                                1.0,
                                1.0,
                                false,
                            );
                        }
                    }
                }
            }
        }
    }

    /// Hit test. Returns `id + 1` for a server, `-(seq + 1)` for a message, 0 for nothing.
    pub fn pick(sim: &Sim, w: f32, h: f32, px: f32, py: f32) -> f64 {
        let n = sim.n();
        let l = layout(w, h, n);
        let mut best = (f32::MAX, 0.0f64);
        let tol = l.node.max(6.0) + 6.0;
        for s in &sim.servers {
            let (x, y) = server_pos(&l, s.id as usize, n);
            let d = ((x - px).powi(2) + (y - py).powi(2)).sqrt();
            if d < tol && d < best.0 {
                best = (d, s.id as f64 + 1.0);
            }
        }
        if best.1 != 0.0 {
            return best.1;
        }
        // Log rows also select their server.
        if px >= l.log_x && px <= l.log_x + 60.0 && py > l.log_y + 20.0 && n <= 12 {
            let rh = ((l.log_h - 22.0) / n as f32).clamp(16.0, 34.0);
            let r = ((py - l.log_y - 20.0) / rh) as usize;
            if r < n {
                return r as f64 + 1.0;
            }
        }
        let now = sim.time;
        for m in sim.messages() {
            let (x1, y1) = server_pos(&l, m.from as usize, n);
            let (x2, y2) = server_pos(&l, m.to as usize, n);
            let span = (m.recv_time - m.send_time).max(1) as f32;
            let f = (now.saturating_sub(m.send_time) as f32 / span).clamp(0.0, 1.0);
            let (dx, dy) = (x2 - x1, y2 - y1);
            let d = (dx * dx + dy * dy).sqrt().max(1e-3);
            let inset = (l.node / d).min(0.45);
            let g = inset + f * (1.0 - 2.0 * inset);
            let (x, y) = (x1 + dx * g, y1 + dy * g);
            let dd = ((x - px).powi(2) + (y - py).powi(2)).sqrt();
            if dd < 12.0 && dd < best.0 {
                best = (dd, -(m.seq as f64) - 1.0);
            }
        }
        best.1
    }
}

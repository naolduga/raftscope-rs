# Proposing RaftScope.rs for raft.github.io

raft.github.io shows RaftScope through a git submodule (`raftscope/`, pointing at `ongardie/raftscope`) and embeds `raftscope/index.html` in an iframe of 800×580 pixels. The site's page says the visualization is rough around the edges and that pull requests are welcome.

There are two ways to contribute this:

1. **A pull request to `raft/raft.github.io`** that points the `raftscope` submodule at this repository, pinned to a tagged commit. This needs no change to the iframe or the page. It is the smallest change for the site maintainers to review.
2. **A pull request to `ongardie/raftscope`** that replaces its contents. Every site that uses RaftScope gets the update, but the original JavaScript disappears from that repository.

Option 1 is the better first step: the maintainers can compare both versions side by side and switch back with a one-line revert.

## Checklist before opening the pull request

- [ ] Tag a release (for example `v0.1.0`) and pin the submodule to that tag's commit.
- [ ] `dist/` was rebuilt by CI from the tagged source; download the `dist` artifact from the CI run and commit it if it differs.
- [ ] CI is green: fmt, clippy, tests, smoke test of `dist/`.
- [ ] Load raft.github.io locally with the submodule swapped (see README) and check the iframe: no scroll bars, controls work, keyboard shortcuts work once the frame has focus.
- [ ] Check in Firefox and Safari, as well as Chromium (only Chromium has been tested so far).
- [ ] The page makes no requests beyond its own files (check the browser's network panel).
- [ ] The licence notice in `LICENSE-RAFTSCOPE` is intact.

## Known gaps

- **Replay.** The site's `raftscope-replay` submodule uses RaftScope's `replay` branch to play recorded scenarios alongside the talk slides. RaftScope.rs has no replay mode yet, so that submodule should stay as it is.
- **Visual differences.** The layout follows the original (ring on the left, logs on the right, timeline and speed sliders below), but it is drawn on canvas with a different palette and typography. Screenshots in the pull request will help reviewers judge this.

## Draft pull request text

> **Replace RaftScope with RaftScope.rs (Rust/WebAssembly port)**
>
> This points the `raftscope` submodule at RaftScope.rs, a rule-for-rule port of RaftScope's `raft.js` to Rust, compiled to WebAssembly. The iframe and page are unchanged.
>
> - Same protocol rules, constants, controls and keyboard shortcuts.
> - Fits the existing 800×580 iframe; no external requests.
> - Seeded and reproducible; time travel without cloning the model.
> - Checks Raft's safety properties while it runs and shows a violation if one occurs.
> - Supports more than five servers (`?servers=N`).
> - Falls back to a pure-JavaScript build where WebAssembly is blocked.
>
> The `raftscope-replay` submodule is unchanged. Screenshots before and after: (attach).

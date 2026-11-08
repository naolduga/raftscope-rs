#!/usr/bin/env sh
# Rebuild the prebuilt browser files in dist/ (committed, so the repository
# works as a static site or a git submodule with no build step).
#
#   rustup target add wasm32-unknown-unknown   # once (rust-toolchain.toml does this)
#   npm install -g binaryen                     # once, for the wasm2js fallback
#   scripts/build.sh
#
# BUILD_STD=1 builds the standard library from source (needs rust-src) for
# toolchains without the prebuilt wasm32 target.
set -eu
cd "$(dirname "$0")/.."
mkdir -p dist

build() { # $1 = extra target dir suffix, rest = RUSTFLAGS
  dir=$1; shift
  if [ -n "${BUILD_STD:-}" ]; then
    RUSTFLAGS="$*" RUSTC_BOOTSTRAP=1 cargo build -p raftscope-wasm --release \
      --target wasm32-unknown-unknown -Zbuild-std=std,panic_abort --target-dir "target/$dir"
  else
    RUSTFLAGS="$*" cargo build -p raftscope-wasm --release \
      --target wasm32-unknown-unknown --target-dir "target/$dir"
  fi
}

build wasm ""
cp target/wasm/wasm32-unknown-unknown/release/raftscope_wasm.wasm dist/raftscope.wasm

# Fallback for hosts that refuse to compile WebAssembly (e.g. a CSP without
# 'wasm-unsafe-eval'): the same Rust, compiled to plain JavaScript.
if command -v wasm2js >/dev/null 2>&1; then
  build mvp "-C target-cpu=mvp"
  wasm2js -O3 target/mvp/wasm32-unknown-unknown/release/raftscope_wasm.wasm -o dist/raftscope.wasm.js
else
  echo "wasm2js not found (npm install -g binaryen): dist/raftscope.wasm.js left unchanged" >&2
fi
ls -l dist

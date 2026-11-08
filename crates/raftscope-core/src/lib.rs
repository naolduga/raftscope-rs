//! RaftScope in Rust: a deterministic, event-driven Raft simulator plus a
//! renderer-agnostic scene builder, compiled natively (tests, benchmarks) or
//! to WebAssembly (the browser visualizer).

pub mod rng;
pub mod scene;
pub mod sim;
pub mod timeline;

pub use sim::{Body, Config, Entry, Message, Protocol, Role, Server, Sim, Time, INF};
pub use timeline::{Op, Timeline};

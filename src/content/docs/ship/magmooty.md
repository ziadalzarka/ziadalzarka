---
group: ship
file: magmooty.rs
order: 1
kind: project
title: Magmooty
tagline: An offline-first distributed system for regions with unreliable connectivity.
status: private
period: Mar 2025 — present
treeMeta: rust · go · tauri
stack: [Rust, Axum, Tauri, Go, SurrealDB, RocksDB, SQLite, TypeScript, Svelte, Docker]
links:
  - { label: "github.com/magmooty/monorepo", href: "https://github.com/magmooty/monorepo" }
---

An education management platform for private tutoring centres in Egypt, where the network is not
a given. Everything works offline first and reconciles later.

- **Sync engine in Rust** on SurrealDB/RocksDB: LAN master-replica replication and chunked
  last-write-wins batching with a hybrid logical clock, authenticated with RS256 JWTs.
- **A Go-to-Rust FFI bridge**, compiling a WhatsApp bot to a C static library that exposes an
  async C ABI consumed through Rust unsafe bindings — [written up here](https://medium.com/@ziadalzarka/linking-a-go-static-library-to-rust-and-handling-asynchronous-calls-5672932a966b).
- **UDP broadcast auto-discovery** with subnet calculation and multi-NIC handling, plus a BLE
  scanner for proximity-based attendance.
- **An Axum REST API** with record-level permissions and time-bound 2FA, behind a Docker
  cross-compilation pipeline targeting 6 architectures.

---
title: "Skate Fortress 2 (Skate 3 in Team Fortress 2)"
summary: "Press a key and your TF2 class drops onto a board: Skate 3's real skating simulation running inside a Source SDK 2013 Team Fortress 2 mod, with multiplayer prediction."
games: [skate-3, team-fortress-2]
creators: [{ name: "Naitrate", url: "https://github.com/Naitrate" }]
technique: rust-rewrite
origin: ai-built
date: 2026-10-05
status: source-only
repo: "https://github.com/Naitrate/SkateFortress2"
stars: 0
checked: 2026-10-10
builtOn:
  - { label: "skate-3-rust-engine", url: "https://github.com/SK8-ENGINE/skate-3-rust-engine" }
  - { label: "Source SDK 2013", url: "https://github.com/ValveSoftware/source-sdk-2013" }
parents: [skate-3-rust-engine]
tribute: skate-x-open-world
---
Skate Fortress 2 puts Skate 3's skating into Team Fortress 2. Press a key and your class drops onto a board, and the riding is the real Skate 3 simulation (flick-it tricks, pushing, grinds and bails) recovered by the Skate 3 Rust engine.

The repository is a fork of Valve's Source SDK 2013 with the Rust engine compiled in as a library. The TF2 server steps one skater per player at 60 Hz, rebuilding collision from the map's BSP and turning TF2 input into a virtual Xbox pad. The client predicts its own skater with a second copy of the simulation, so it works in multiplayer. There's no packaged release: you build it yourself, on Linux, with Windows binaries cross-compiled or built by the project's CI. Its commits credit Claude Opus 5.5 and Cursor as co-authors. Naitrate shared it in the chasm Discord as a work-in-progress preview.

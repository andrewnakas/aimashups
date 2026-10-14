---
title: "ApexRuntime (Apex Legends movement and guns in MW2)"
summary: "Apex Legends movement (slide, tap-strafe, superglide, mantle, wall climb) and weapon behaviour re-implemented in Rust from measurements, played in MW2 through an IW4L fork."
games: [apex-legends, modern-warfare-2]
creators: [{ name: "ixbh", url: "https://github.com/ixbh" }]
technique: rust-rewrite
origin: ai-built
date: 2026-10-07
status: source-only
repo: "https://github.com/ixbh/ApexRuntime"
stars: 1
license: "MIT OR Apache-2.0"
checked: 2026-10-14
builtOn:
  - { label: "iw4l-apex (IW4L fork)", url: "https://github.com/ixbh/iw4l-apex" }
  - { label: "IW4L", url: "https://github.com/vladtrc/iw4L" }
links:
  - { label: "iw4l-apex", url: "https://github.com/ixbh/iw4l-apex" }
  - { label: "INSTALL.md", url: "https://github.com/ixbh/ApexRuntime/blob/main/INSTALL.md" }
parents: [iw4l]
---
ApexRuntime is a from-scratch Rust re-implementation of Apex Legends' player movement and weapon handling, aimed at tick-for-tick fidelity. The movement (sprint, slide, lurch, tap-strafe, bunny hop, mantle, superglide, wall climb, fall stun) is measured against offline R5Flowstate, and `apex-weapons` handles fire modes, spread, recoil, reloads, swaps and shared ammo. It can run in its own Bevy sandbox.

The companion repository [iw4l-apex](https://github.com/ixbh/iw4l-apex), a fork of [IW4L](https://github.com/vladtrc/iw4L), swaps MW2's movement and guns for ApexRuntime's, so you play Apex's movement on MW2's maps. Optional Apex models, sounds and HUD come from your own export; none are in either repository. Both were published on 7 October 2026 as source only, built by following INSTALL.md. Their commits are co-authored by Claude Opus 5.5.

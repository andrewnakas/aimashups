---
title: "Halo / MW2 Director (Halo CE × MW2 on IW4L)"
summary: "A native Mac cinematic prototype that stages Halo CE's Chief, Warthog and weapons on MW2's Rust map in IW4L, with bot matches and an experimental Battle Creek import."
games: [halo-combat-evolved, modern-warfare-2]
creators: [{ name: "0xburn", url: "https://github.com/0xburn" }]
technique: rust-rewrite
origin: unverified
date: 2026-09-30
status: source-only
repo: "https://github.com/0xburn/halo-mw2-director"
stars: 23
license: "Apache-2.0"
checked: 2026-10-14
builtOn:
  - { label: "IW4L", url: "https://github.com/vladtrc/iw4L" }
parents: [iw4l]
---
Halo / MW2 Director patches [IW4L](https://github.com/vladtrc/iw4L) to stage Halo CE characters and weapons inside Modern Warfare 2's Rust map. Its included 24-second take chains Intervention quickscopes, a blue Master Chief reveal, a Warthog splatter and a battlefield of plasma volleys and rocket kills. Scenes are written as JSON timelines, and a small director tool inspects and checks them.

Beyond the film, it runs autonomous 4v4 bot matches (MW2 quickscopers against jumping Spartans) and has an experimental import of Halo CE's Battle Creek map with MW2 movement and weapons. Playback was checked on an Apple M1 Pro. No assets are included: you bring your own MW2 (2009) and Halo CE data. It's source only, and the repository doesn't say whether an AI agent was used, so it's marked unverified.

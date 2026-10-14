---
title: "World of Skatecraft (Skate 3 in World of Warcraft 1.12.1)"
summary: "Skate 3's skating in World of Warcraft 1.12.1 on benilla, a from-scratch Rust WoW client: summon a board like a mount and level Skateboarding as a profession."
games: [skate-3, world-of-warcraft]
creators: [{ name: "Kimmo3223", url: "https://github.com/Kimmo3223" }]
technique: rust-rewrite
origin: ai-built
date: 2026-10-02
status: source-only
repo: "https://github.com/Kimmo3223/world-of-skatecraft"
stars: 131
license: "MIT OR Apache-2.0"
checked: 2026-10-13
builtOn:
  - { label: "benilla (WoW 1.12.1 client in Rust)", url: "https://github.com/samwhosung/benilla" }
  - { label: "skate-3-rust-engine", url: "https://github.com/SK8-ENGINE/skate-3-rust-engine" }
parents: [skate-3-rust-engine, 2010-rust-rewrite-mashup]
---
World of Skatecraft isn't a mod for Blizzard's client. It's built on [benilla](https://github.com/samwhosung/benilla), a from-scratch World of Warcraft 1.12.1 client written in Rust, with the [skate-3-rust-engine](https://github.com/SK8-ENGINE/skate-3-rust-engine) added for the skating. It runs offline against a local vmangos server that the setup script builds in Docker. You need your own WoW 1.12.1 English client (build 5875) and an extracted Xbox 360 copy of Skate 3.

Every character gets **Summon Skateboard**, which casts like a mount. Your own character rides in your own gear, with Skate 3's flick-it tricks, grinds on any ledge, powerslides and bails. Skateboarding is a secondary skill from 1 to 300: landed lines raise it and give experience, and it unlocks abilities such as Rocket Boost and Moon Jump. The README credits the [2010 Rust Rewrite Mashup](/mashups/2010-rust-rewrite-mashup/)'s Skate 3 mode for MW2 as the model it follows.

There are no releases. You clone the repository and run a setup script. Linux is the main platform, and Windows support is new and untested. The README calls it "vibe coded, just for laughs" with Claude Code, and its 100 most recent commits all carry Claude co-author trailers (mostly Opus 5.5).

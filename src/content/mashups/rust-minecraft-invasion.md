---
title: "Rust Minecraft Invasion (Minecraft mobs on MW2's Rust)"
summary: "A survival mode where 134 Minecraft mobs, Ender Dragons and Wardens included, invade MW2's Rust map, and every standard MW2 killstreak is earned by killing them. Apple silicon build."
games: [modern-warfare-2, minecraft]
creators: [{ name: "oh-ashen-one", url: "https://github.com/oh-ashen-one" }]
technique: rust-rewrite
origin: unverified
date: 2026-10-01
status: downloadable
repo: "https://github.com/oh-ashen-one/rust-minecraft-invasion"
stars: 0
downloads: 5
license: "Apache-2.0"
checked: 2026-10-14
builtOn:
  - { label: "2010 Rust Rewrite Mashup", url: "https://github.com/chasmlol/2010-rust-rewrite-mashup" }
  - { label: "IW4L", url: "https://github.com/vladtrc/iw4L" }
links:
  - { label: "Releases", url: "https://github.com/oh-ashen-one/rust-minecraft-invasion/releases" }
parents: [2010-rust-rewrite-mashup, iw4l]
---
Rust Minecraft Invasion is a single-player mode built on the [2010 Rust Rewrite Mashup](/mashups/2010-rust-rewrite-mashup/). It fills MW2's Rust map with 67 kinds of Minecraft mob, two of each, that respawn three seconds after dying: creepers swell and explode, skeletons shoot, spiders climb, Endermen teleport and witches throw potions. You get 300 HP and an Intervention quickscope class.

Version 0.9.0 turns on every standard MW2 killstreak at once, from UAV to Tactical Nuke, earned by consecutive mob kills and run by MW2's own scripts, aircraft and sounds from your install. Minecraft resources are downloaded from Mojang during setup, and you need the English PC files of MW2 (2009). v0.8.0 came out on 1 October 2026 and v0.9.0 on 6 October, both as macOS Apple silicon builds. The README offers a setup guide for coding agents, but the repository doesn't say whether one wrote the code, so it's marked unverified.

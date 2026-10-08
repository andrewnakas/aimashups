---
title: "2010 Rust Rewrite Mashup (MW2 × Skate 3 × Minecraft)"
summary: "Modern Warfare 2, Skate 3 and an endless Minecraft world in one Rust game, built from two AI-assisted engine rewrites."
games: [modern-warfare-2, skate-3, minecraft]
creators: [{ name: chasmlol, url: "https://github.com/chasmlol" }]
technique: rust-rewrite
date: 2026-09-27
status: downloadable
repo: "https://github.com/chasmlol/2010-rust-rewrite-mashup"
stars: 812
downloads: 13130
license: Apache-2.0
parents: [iw4l, skate-3-rust-engine, minecraftoss]
checked: 2026-10-08
builtOn:
  - { label: "IW4L (vladtrc): Rust/Bevy MW2 runtime", url: "https://github.com/vladtrc/iw4L" }
  - { label: "skate-3-rust-engine (SK8-ENGINE)", url: "https://github.com/SK8-ENGINE/skate-3-rust-engine" }
links:
  - { label: "Releases", url: "https://github.com/chasmlol/2010-rust-rewrite-mashup/releases" }
sources:
  - { title: "The Skate and Minecraft Modern Warfare 2 videos are real", publisher: "Held Games", url: "https://heldgames.com/guides/mw2-skate-minecraft-rust-rewrite" }
  - { title: "AI game mashup videos on social media spark debate and backlash", publisher: "VGC", url: "https://www.videogameschronicle.com/news/ai-game-mashup-videos-on-social-media-spark-debate-and-backlash-among-players-and-modders/" }
tribute: kickflip-ops
faqs:
  - { q: "Is the MW2 Skate 3 Minecraft mashup real?", a: "Yes. It's an open-source Rust program on GitHub with Windows releases from late September 2026. It isn't a video edit." }
  - { q: "Do I need to own the games?", a: "Yes. It reads Modern Warfare 2 from your own Steam install and, for skating, your own Skate 3 files. Minecraft's files are downloaded from Mojang on first launch rather than redistributed." }
  - { q: "Can I play it in a browser?", a: "No, the mashup is a desktop program. Kickflip Ops is a clean-room tribute you can play in a browser with no game files." }
---
The clip that put "AI game mashups" on everyone's timeline showed a Modern Warfare 2 soldier dropping onto a skateboard mid-match, kickflipping across Rust and then fighting through a Minecraft world with MW2 guns. It looked like a video edit. It wasn't.

## How it was made
The mashup stands on two AI-assisted Rust rewrites that already existed. [IW4L](https://github.com/vladtrc/iw4L) by vladtrc is a standalone Call of Duty runtime written in Rust on Bevy and `wgpu` that loads MW2's maps and weapons from your install. [skate-3-rust-engine](https://github.com/SK8-ENGINE/skate-3-rust-engine) is a skating engine based on Skate 3 reverse-engineering research. chasmlol is its top contributor.

Because both were Rust/Bevy codebases, they could be merged into **one program**. Press **J** on any map and you drop onto a board with Skate 3's physics, tricks and grinds. A third piece, MinecraftOSS, a Rust Minecraft engine, supplies an endless Minecraft world with its own world generation, day/night cycle and vanilla mobs.

## Timeline
- **27 September 2026:** repository created.
- **28–29 September:** first three Windows builds.
- **2 October:** v0.4.0. By then clips had spread across X, and coverage pointed out that, unlike many viral clips, this one was real and downloadable.

## Why it matters
It showed that the "rewrite" route, though slower than passthrough mods, produces something closer to a new game: one executable, one physics world, and mechanics from three games interacting directly. It also made the Skate 3 rewrite the most-mashed engine of the wave. Within a week, the same skating was running in [Bully](/mashups/bullyskate/), [San Andreas](/mashups/gta-san-anskateas/) and [Vice City](/mashups/gta-skate-3-trilogy/).

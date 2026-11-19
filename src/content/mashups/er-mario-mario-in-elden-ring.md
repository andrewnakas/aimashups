---
title: "ER Mario (Mario in Elden Ring)"
seoTitle: "ER Mario: Play as Mario in Elden Ring (Download, Setup)"
summary: "ER Mario is a free mod that lets you play Elden Ring as Mario, with Super Mario 64's real moves: triple jumps, wall kicks, ground pounds and Bowser's tail swing on bosses."
description: "ER Mario lets you play Elden Ring as Mario with real Super Mario 64 moves. Download it from GitHub (deltarooo/er-mario); needs Elden Ring and an SM64 ROM."
games: [super-mario-64, elden-ring]
creators: [{ name: deltarooo, url: "https://github.com/deltarooo" }]
technique: library-import
origin: ai-built
date: 2026-09-30
status: downloadable
repo: "https://github.com/deltarooo/er-mario"
stars: 183
downloads: 2314
license: MIT
parents: [libsm64]
checked: 2026-10-13
builtOn:
  - { label: "libsm64", url: "https://github.com/libsm64/libsm64" }
  - { label: "me3 mod loader", url: "https://me3.help" }
sources:
  - { title: "How AI game mashups work: what's real and what you can download", publisher: "VGTimes", url: "https://vgtimes.com/articles/169886-how-ai-game-mashups-work.html" }
tribute: hollow-warden
links:
  - { label: "Releases (download)", url: "https://github.com/deltarooo/er-mario/releases" }
faqs:
  - { q: "Is Mario in Elden Ring downloadable?", a: "Yes. ER Mario has Windows releases on GitHub and loads through the me3 mod loader. You need Elden Ring on Steam and your own Super Mario 64 (US) ROM." }
---
**Where to get it:** ER Mario's releases are on GitHub at [deltarooo/er-mario](https://github.com/deltarooo/er-mario/releases). You need Elden Ring on Steam, the [me3](https://me3.help) mod loader and your own Super Mario 64 (US) ROM; the [install guide](/guides/how-to-play-er-mario/) walks through it.

ER Mario drops Mario into the Lands Between with his real Super Mario 64 movement: triple jumps, wall kicks, long jumps and ground pounds. His punches and kicks hurt enemies, Bowser's tail swing works on staggered bosses, and SM64's health meter, coins and Lakitu camera come along too.

## How it works
Rather than linking two running games, it embeds **one character**. [libsm64](https://github.com/libsm64/libsm64) turns the public Super Mario 64 decompilation into a library that simulates Mario every frame. Elden Ring's collision goes in, and Mario's position and animation come out. Mario's textures, sounds and animations are built from your own ROM on first launch. See [character import](/techniques/library-import/).

It shipped 13 releases in its first week (v0.4.0 on 5 October 2026), one of the fastest-iterating projects of the wave.

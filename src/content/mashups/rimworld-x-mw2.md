---
title: "RimWorld x MW2"
summary: "Draft a RimWorld colonist and play their fights in first person in Modern Warfare 2's engine, while RimWorld keeps running the map, pawns, health, AI and guns."
games: [rimworld, modern-warfare-2]
creators: [{ name: "rkwitz", url: "https://github.com/rkwitz" }]
technique: passthrough
origin: ai-built
date: 2026-10-09
status: source-only
repo: "https://github.com/rkwitz/rimworld-mw2"
stars: 1
license: "Apache-2.0"
checked: 2026-10-14
builtOn:
  - { label: "2010 Rust Rewrite Mashup", url: "https://github.com/chasmlol/2010-rust-rewrite-mashup" }
  - { label: "IW4L", url: "https://github.com/vladtrc/iw4L" }
  - { label: "Harmony", url: "https://github.com/pardeike/Harmony" }
links:
  - { label: "Video: Defending my RimWorld Base in MW2 (YouTube)", url: "https://www.youtube.com/watch?v=WplvPuqe_tQ" }
seenOn:
  - { label: "chasm Discord #share-your-projects", url: "https://discord.com/channels/1553823769460613140/1554228730120114339" }
parents: [2010-rust-rewrite-mashup]
---
RimWorld x MW2 runs both games at once. RimWorld simulates everything: the map, the pawns, their health, AI, guns and items. A RimWorld mod (C#, loaded with Harmony) reports it over a local connection to a patched build of the [2010 Rust Rewrite Mashup](/mashups/2010-rust-rewrite-mashup/)'s engine, chasm's fork of [IW4L](https://github.com/vladtrc/iw4L), which draws the same scene in 3D with RimWorld's own pictures and MW2 models. Draft a colonist, click **Control in MW2**, and you play them in first person. They walk where you walk, and when you shoot, they shoot in RimWorld.

You fire your colonist's own gun with RimWorld's burst, warm-up and cooldown, and your hits wound the body part you hit. RimWorld's bullets fly at you and can be dodged. Grenades, fire, smoke, weather and blood all show in MW2, **E** opens doors and carries downed pawns, and **Tab** brings RimWorld back up. RimWorld's own window becomes the minimap.

There are no release builds. Setup downloads the pinned engine and applies the project's patches, then builds it (about 15 GB and 15 to 40 minutes the first time), and you need RimWorld 1.6 and MW2 (2009) on Steam. Skate 3 mode is switched off. A gameplay video went up on 12 October 2026. The repository includes a `CLAUDE.md`, and its commits are co-authored by Claude Opus 5.5.

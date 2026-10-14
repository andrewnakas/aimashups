---
title: "MINEKILL (Minecraft in ULTRAKILL)"
summary: "Minecraft's player, physics, inventory, building and mobs inside ULTRAKILL's levels, drawn natively by ULTRAKILL. Built independently of Killcraft, source only."
games: [minecraft, ultrakill]
creators: [{ name: "niliota", url: "https://github.com/niliota" }]
technique: passthrough
origin: ai-built
date: 2026-10-13
status: source-only
repo: "https://github.com/niliota/MINEKILL"
stars: 0
license: "GPL-3.0"
checked: 2026-10-13
parents: [fabric]
tribute: blockrealm
---
MINEKILL goes the same way as [Killcraft](/mashups/killcraft/), a Minecraft player in ULTRAKILL's levels, but it's a separate codebase. ULTRACRAFT is the reverse: V1 in Minecraft. A BepInEx 5 plugin in ULTRAKILL and a Fabric mod for Minecraft 26.3 share a memory-mapped bridge file with a fixed, generated layout. ULTRAKILL draws everything and publishes its level collision. Minecraft simulates the player, mobs, items, fluids and GUI, and treats ULTRAKILL's walls and floors as solid in its own physics, pathfinding and projectile code. Blocks, mobs, particles and Minecraft's whole interface are redrawn natively in ULTRAKILL rather than copied as images.

The README credits [SkyCraft](/mashups/skycraft-minecraft-in-skyrim/) for the architecture ("ideas only; no SkyCraft code is included"), and says it was "built with heavy use of AI tooling (Anthropic's Claude), directed and playtested by the author". The original brief is kept in the repository as `docs/INIT_PROMPT.md`.

The repository went public on 13 October 2026 with 27 commits. It has no prebuilt release, so you build both halves yourself. The README still listed combat between Minecraft and ULTRAKILL enemies as not done, but later commits add it. The development setup is Linux, with ULTRAKILL under Wine. Windows is supported in code but untested.

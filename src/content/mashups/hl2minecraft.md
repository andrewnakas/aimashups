---
title: "HL2Minecraft (Half-Life 2 × Minecraft compositor)"
summary: "Minecraft's building, mobs, inventory and Elytra drawn inside Half-Life 2's Direct3D 9 world through a ReShade add-on, with two-way collision and combat. Separate from HalfCraft."
games: [half-life-2, minecraft]
creators: [{ name: "ShadowBlade83", url: "https://github.com/ShadowBlade83" }]
technique: passthrough
origin: unverified
date: 2026-10-10
status: downloadable
repo: "https://github.com/ShadowBlade83/HalfLife2Minecraft"
stars: 1
downloads: 4
license: "CC BY-NC 4.0"
checked: 2026-10-14
links:
  - { label: "Releases", url: "https://github.com/ShadowBlade83/HalfLife2Minecraft/releases" }
parents: [fabric]
---
HL2Minecraft is the same pairing as [HalfCraft](/mashups/halfcraft/), Minecraft in City 17, but a different project with different code. A Fabric mod for Minecraft 26.3 streams chunks, mobs, items, particles and the first-person hand over shared memory to a 32-bit ReShade add-on (`HL2Minecraft.addon32`), which draws them inside Half-Life 2's Direct3D 9 frame with the game's depth buffer, so HL2's walls hide Minecraft blocks.

Blocks you place become solid in Half-Life 2, so you can pillar up and wall off NPCs, and HL2's map geometry is traced live so arrows, TNT and mob pathfinding meet its walls. HL2's NPCs are mirrored in Minecraft: swords, arrows and explosions hurt them, and Minecraft's hostile mobs attack them. Health and damage are shared, and the HUD, inventory and chat are drawn over HL2's window. The README says it was "heavily inspired" by SkyCraft.

Fourteen releases went out on 10 and 11 October 2026, reaching v1.7.5. The repository doesn't say whether an AI agent was used, so it's marked unverified.

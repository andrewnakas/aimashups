---
title: "SkyCraft (Minecraft in Skyrim)"
summary: "Play Skyrim as a Minecraft player: Minecraft's physics, inventory, blocks and combat in Skyrim's world. The passthrough mod that set the template."
games: [minecraft, skyrim]
creators: [{ name: chasmlol, url: "https://github.com/chasmlol" }]
technique: passthrough
date: 2026-09-30
status: downloadable
repo: "https://github.com/chasmlol/SkyCraft"
stars: 1022
downloads: 22640
license: MIT
checked: 2026-10-06
links:
  - { label: "Releases", url: "https://github.com/chasmlol/SkyCraft/releases" }
sources:
  - { title: "How AI game mashups work: what's real and what you can download", publisher: "VGTimes", url: "https://vgtimes.com/articles/169886-how-ai-game-mashups-work.html" }
tribute: platformer-x-voxel
faqs:
  - { q: "Is Minecraft in Skyrim a real mod?", a: "Yes. SkyCraft is an open-source mod on GitHub with Windows releases. It links a Skyrim SKSE plugin to a Minecraft Fabric mod." }
  - { q: "Do I need both games?", a: "Yes, you need to own Skyrim and Minecraft Java Edition. Both run at the same time." }
---
SkyCraft has the most release downloads of any mashup documented here (over 22,000 by 6 October 2026), and several other passthrough mods are built directly on it.

## What it does
You play Skyrim as a Minecraft player. You move with Minecraft's physics on Skyrim's terrain, carry Minecraft's inventory and HUD, place and break blocks anywhere, and fight Skyrim's NPCs with Minecraft weapons. Digging works on Skyrim itself: roads, rocks and the ground drop the blocks they're made of, and TNT and creepers blow real craters. Minecraft's torches and lava light up Skyrim.

## How it works
**Neither game is rewritten.** A Skyrim SKSE plugin and a Minecraft Fabric mod talk to each other through shared memory. Minecraft runs hidden in the background and simulates the player and blocks, with Skyrim's collision fed into Minecraft's own. Skyrim draws everything, including the blocks under its sun, shadows, fog and weather. See [passthrough mods](/techniques/passthrough/).

## Legacy
Within days the design was ported to [Fallout 4](/mashups/falloutcraft/) and [Outer Wilds](/mashups/owcraft/), and the same pattern shows up in [Minecraft in GTA V](/mashups/minecraft-in-gta-v/).

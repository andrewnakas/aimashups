---
title: "SM64Craft (Super Mario 64 Coop DX inside Minecraft)"
summary: "A Super Mario 64 Coop DX game shown and controlled from inside Minecraft: Mario's moves on Minecraft keys, Steve's inventory and blocks, and co-op rooms that pull friends into the host's world."
games: [super-mario-64, minecraft]
creators: [{ name: "GuiiDEV1", url: "https://github.com/GuiiDEV1" }]
technique: passthrough
origin: unverified
date: 2026-10-11
status: downloadable
repo: "https://github.com/GuiiDEV1/SM64Craft"
stars: 0
downloads: 3
license: "MIT"
checked: 2026-10-14
builtOn:
  - { label: "SM64 Coop DX", url: "https://github.com/coop-deluxe/sm64coopdx" }
  - { label: "SkyCraft", url: "https://github.com/chasmlol/SkyCraft" }
links:
  - { label: "Releases", url: "https://github.com/GuiiDEV1/SM64Craft/releases" }
parents: [skycraft-minecraft-in-skyrim, fabric]
---
SM64Craft links a Fabric mod to a local copy of [SM64 Coop DX](https://github.com/coop-deluxe/sm64coopdx). SM64's picture and menus appear inside Minecraft, while Minecraft keeps Steve, the inventory, health and the world. Coop DX runs the menus, levels, enemies and multiplayer rooms, and the mod passes actions between the two. Mario's double and triple jumps, long jump, backflip, wall kick and ground pound are mapped to Space and Shift.

For co-op, the host opens a Minecraft world to LAN and starts a Coop DX room. Friends join the room from SM64's multiplayer menu, and the mod hands them the host's e4mc address so their Minecraft joins the same world. The README (in Portuguese) credits [SkyCraft](/mashups/skycraft-minecraft-in-skyrim/) as the origin of the layer that shows one game inside Minecraft.

You supply your own US ROM, which stays on your PC; the installer downloads the official Coop DX release and patches it. v0.1.11 (`MarioCraft-0.1.11.jar`) went up on 11 October 2026. The repository doesn't say whether an AI agent was used, so it's marked unverified.

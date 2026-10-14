---
title: "Garry's Modcraft (Minecraft in Garry's Mod)"
summary: "Play Garry's Mod as a Minecraft player: dig into any GMod map, build blocks GMod props and vehicles collide with, physgun mobs and wire redstone to Wiremod. Linux, with multiplayer servers."
games: [garrys-mod, minecraft]
creators: [{ name: "cheetahdotcat", url: "https://github.com/cheetahdotcat" }]
technique: passthrough
origin: unverified
date: 2026-10-04
status: downloadable
repo: "https://github.com/cheetahdotcat/garrys-modcraft"
stars: 0
downloads: 7
license: "MIT"
checked: 2026-10-14
builtOn:
  - { label: "SkyCraft (SkycraftFork)", url: "https://github.com/hawktuahs/SkycraftFork" }
links:
  - { label: "Releases", url: "https://github.com/cheetahdotcat/garrys-modcraft/releases" }
parents: [skycraft-minecraft-in-skyrim, fabric]
---
Garry's Modcraft runs a real Minecraft client hidden next to Garry's Mod, linked through shared memory. Minecraft does the moving, digging and building; Garry's Mod draws Minecraft's blocks, mobs and HUD in its own frame with depth against the map, and sends its map collision, props, NPCs and players back so Minecraft collides with them.

You can mine through any GMod map's floors and walls (the hole is cut out of the map), build ramps the jeep can drive up, physgun a cow or rope a pig, and let GMod NPCs fight Minecraft mobs. GMod props become items and blocks become AdvDupe2 dupes, redstone talks to Wiremod and map doors, and moving props and trains carry Minecraft players. A dedicated GMod server and a Minecraft server on the same Linux machine let friends play together.

It's Linux (x86-64) only for now. The licence notes it's derived from [SkyCraft](/mashups/skycraft-minecraft-in-skyrim/) through a fork. v0.6.0 is the current release (9 October 2026). The repository doesn't say whether an AI agent was used, so it's marked unverified.

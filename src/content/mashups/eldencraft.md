---
title: "EldenCraft (Minecraft in Elden Ring)"
summary: "Minecraft Java inside Elden Ring with a campaign: mine the Lands Between, buy diamonds with runes, ride Torrent as a Minecraft horse, and climb from wood to netherite over 159 boss rewards."
games: [minecraft, elden-ring]
creators: [{ name: "SocketByte", url: "https://github.com/SocketByte" }]
technique: passthrough
origin: unverified
date: 2026-10-06
status: downloadable
repo: "https://github.com/SocketByte/EldenCraft"
stars: 13
downloads: 642
license: "MIT"
checked: 2026-10-13
builtOn:
  - { label: "Minecraft-Ring", url: "https://github.com/siddoff/Minecraft-Ring" }
  - { label: "minecraft-crossover-bridge", url: "https://github.com/justbustin/minecraft-crossover-bridge" }
links:
  - { label: "Releases", url: "https://github.com/SocketByte/EldenCraft/releases" }
parents: [fabric]
tribute: blockrealm
---
EldenCraft isn't the [viral Minecraft-in-Elden-Ring clip](/mashups/minecraft-in-elden-ring/), which was a Mac build with no released code. It's a separate Windows project that ships builds. Elden Ring (executable 2.7.1.0, offline) brings the world, enemies, bosses and collision, through a Rust host loaded with me3. Minecraft Java 26.3 brings the blocks, inventory, tools and HUD, and the two renderers are combined through shared GPU textures in a ReShade add-on.

It's built as a campaign. Elden Ring's terrain is minable (grass gives dirt, boulders give stone), Merchant Kalé sells Minecraft gear for your real runes, and boss remembrances move you from wooden to netherite tools across 159 rewards. **Y** summons Torrent as a saddled black horse with a double jump, swings and shield blocks drain a stamina bar, and an obsidian portal turns Limgrave into the Nether. A launcher script downloads portable Java, Prism Launcher, me3 and ReShade and backs up both saves before each launch.

Its README says it was inspired by [Minecraft-Ring](/mashups/minecraft-ring/) and justbustin's minecraft-crossover-bridge. Twelve releases came out between 6 and 10 October 2026, from 0.21.9 to 0.25.5. Neither the README nor the commits say whether an AI agent was used, so it's marked unverified.

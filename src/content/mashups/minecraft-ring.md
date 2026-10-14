---
title: "Minecraft Ring (Minecraft in Elden Ring, Windows)"
summary: "Real Minecraft Java 1.21.1 alongside Elden Ring on Windows: Minecraft movement, building and combat in the Lands Between, composited into Elden Ring's D3D12 frame."
games: [minecraft, elden-ring]
creators: [{ name: "siddoff", url: "https://github.com/siddoff" }]
technique: passthrough
origin: unverified
date: 2026-10-02
status: source-only
repo: "https://github.com/siddoff/Minecraft-Ring"
stars: 60
license: "MIT"
checked: 2026-10-13
builtOn:
  - { label: "minecraft-crossover-bridge (justbustin)", url: "https://github.com/justbustin/minecraft-crossover-bridge" }
parents: [fabric]
tribute: blockrealm
---
Minecraft Ring is a Windows adaptation of justbustin's [minecraft-crossover-bridge](https://github.com/justbustin/minecraft-crossover-bridge), which played Minecraft inside Elden Ring and Monster Hunter: World on Apple Silicon Macs through CrossOver. That project's README credits the original idea to @tobynjacobs, the creator of the [viral Mac clip](/mashups/minecraft-in-elden-ring/), and says its own implementation was "vibecoded". Minecraft Ring itself doesn't say whether an AI agent was used, so it's marked unverified. It credits [SkyCraft](/mashups/skycraft-minecraft-in-skyrim/) and [ArkWeb](/mashups/arkweb/) for informing its architecture and presentation.

A native bridge and a Fabric mod connect the games. Minecraft handles the player and blocks, and Elden Ring (executable 2.7.1.0, offline, without Easy Anti-Cheat) draws the combined scene with depth occlusion. Elden Ring's terrain becomes invisible collision blocks sampled as you explore, so you can build on it but not mine it. Enemies get Minecraft hitboxes, damage crosses both ways, and dying sends you to a Site of Grace. **R** uses doors, levers and graces, and **F8** hands control back to Elden Ring.

There's no packaged release. You build the native DLLs and run the Gradle client yourself. Version 0.3.0 is the current one. It had 60 stars by 13 October 2026, and [EldenCraft](/mashups/eldencraft/) names it as an inspiration.

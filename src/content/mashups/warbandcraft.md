---
title: "WarbandCraft (Minecraft in Mount & Blade: Warband)"
summary: "Real Minecraft Java running alongside native macOS Warband: Steve builds, crafts and fights in Warband's battles, drawn inside Warband's own frame. An experimental Mac prototype."
games: [mount-and-blade-warband, minecraft]
creators: [{ name: "frankstop (Frank Valdez)", url: "https://github.com/frankstop" }]
technique: passthrough
origin: unverified
date: 2026-10-12
status: downloadable
repo: "https://github.com/frankstop/WarbandCraft"
stars: 0
downloads: 0
license: "MIT"
checked: 2026-10-14
builtOn:
  - { label: "SkyCraft", url: "https://github.com/chasmlol/SkyCraft" }
  - { label: "Minecraft-Ring", url: "https://github.com/siddoff/Minecraft-Ring" }
  - { label: "minecraft-crossover-bridge", url: "https://github.com/justbustin/minecraft-crossover-bridge" }
links:
  - { label: "Releases", url: "https://github.com/frankstop/WarbandCraft/releases" }
parents: [skycraft-minecraft-in-skyrim, minecraft-ring, fabric]
---
WarbandCraft runs Minecraft Java 1.21.1 with Fabric next to Steam's native Intel macOS build of Mount & Blade: Warband (1.174, under Rosetta). Warband draws Minecraft's world, hand, Steve and HUD in its own OpenGL frame, and Warband's mission scripts supply player and soldier positions, health, the camera and collision rays. **F8** switches between Steve and Warband controls, so you can place blocks, craft, wire redstone, light TNT and fly an Elytra in a battle while still giving your troops orders.

The README is frank about its state: the repository is titled "A Failed Mac integration" and calls the build a prototype ready for gameplay testing. Warband's soldiers don't collide with Minecraft blocks, its terrain can't be mined, and only windowed Native has been tried. The Minecraft side comes from [SkyCraft](/mashups/skycraft-minecraft-in-skyrim/), [Minecraft Ring](/mashups/minecraft-ring/) and minecraft-crossover-bridge; the Warband mailbox, OpenGL compositor and loader were written for this project.

v0.1.0 (a macOS zip) went up on 12 October 2026 and a 0.2.1 patch on 13 October. The 0.2.1 notes say Codex can now drive both games through Computer Use for testing, but they don't say who wrote the code, so it's marked unverified.

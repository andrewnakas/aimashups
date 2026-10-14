---
title: "BeamNG.drive cars in GTA V (universal-modder example)"
summary: "BeamNG.drive simulates the car, GTA V is the world: spawn a BeamNG car in story mode, drive it and crash it into GTA traffic with real soft-body damage. Work in progress."
games: [beamng-drive, gta-v]
creators: [{ name: "SpeedyNinja306 (Corbin)", url: "https://github.com/SpeedyNinja306" }]
technique: passthrough
origin: ai-built
date: 2026-10-08
status: source-only
repo: "https://github.com/SpeedyNinja306/gtaXbeamng"
stars: 0
license: "MIT"
checked: 2026-10-14
builtOn:
  - { label: "universal-modder", url: "https://github.com/rehan-remade/universal-modder" }
links:
  - { label: "Example folder", url: "https://github.com/SpeedyNinja306/gtaXbeamng/tree/main/examples/beamng-gta5-passthrough" }
parents: [minecraft-in-gta-v]
---
This is a copy of [universal-modder](/mashups/minecraft-in-gta-v/), the AI-agent modding kit, with a new example added: `examples/beamng-gta5-passthrough`. It follows the kit's Minecraft-in-GTA V passthrough pattern. A BeamNG Lua mod drives the car in an empty level, GTA V streams in its ground and walls as invisible collision, a ScriptHookV plugin hides the player in an invisible stand-in car that copies BeamNG's pose, and ReShade in both games composites BeamNG's picture of the car into GTA's frame. Hidden "ghost" cars follow nearby GTA traffic so it can ram and dent the BeamNG car.

The handoff notes from 7 October 2026 say spawning, driving and crash damage work, but the car still "looks photoshopped" and stutters, and fast crashes can drop it under the map. There are no builds. The example was added on 8 October 2026 in commits co-authored by the Cursor agent, and it's written as handoff notes for the next agent, so it's marked AI-built. [BeamNG × Los Santos](/mashups/beamng-x-los-santos/) is a separate project with the same aim.

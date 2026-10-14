---
title: "DOOMCraft (Minecraft in Doom)"
summary: "Real Minecraft drawn into a patched GZDoom: play Doom's maps as Steve, mine its walls into the blocks they look like, and build walls monsters can't pass."
games: [minecraft, doom]
creators: [{ name: "17madman", url: "https://github.com/17madman" }]
technique: passthrough
origin: ai-built
date: 2026-10-10
status: source-only
repo: "https://github.com/17madman/DOOMCraft"
stars: 1
license: "MIT; GZDoom changes GPL-3.0"
checked: 2026-10-13
builtOn:
  - { label: "GZDoom 4.14.2", url: "https://github.com/ZDoom/gzdoom" }
  - { label: "universal-modder", url: "https://github.com/rehan-remade/universal-modder" }
parents: [minecraft-in-gta-v, skycraft-minecraft-in-skyrim, fabric]
tribute: blockrealm
---
DOOMCraft runs Minecraft Java 26.3 beside a patched GZDoom 4.14.2 and composites Minecraft's picture into Doom's wherever it's nearer than Doom's depth, lit by the Doom sector. Each map column near the player is sent to Minecraft as invisible rock, and the Doom texture's name decides the material. Wooden walls give logs, base plating has iron in it, and hell's marble is deepslate rich in ore. Mined cells are kept in a voxel grid, and a shader shows the tunnel where the wall was. Monsters and mobs get invisible stand-ins in each other's game, so damage crosses both ways. Doom saves also save the Minecraft world's state.

It works with DOOM, DOOM II, Final Doom, the shareware WAD or the free Freedoom. The README says the Minecraft mod "grew from [universal-modder](/mashups/minecraft-in-gta-v/)'s Minecraft x GTA V example", credits [SkyCraft](/mashups/skycraft-minecraft-in-skyrim/) for window-handling ideas, and says "the code was written with Claude Code". It ends: "THIS IS AI SLOP!"

There's no release. You clone the repository, and a script builds GZDoom with the project's patch (about 20 minutes, with Visual Studio 2022). The launcher then downloads Minecraft and builds the mod. Windows only, single-player.

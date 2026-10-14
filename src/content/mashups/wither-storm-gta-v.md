---
title: "Wither Storm in GTA V (passthrough)"
summary: "Minecraft 1.20.1 with Cracker's Wither Storm Mod running beside GTA V Legacy: the real storm appears in Los Santos and pulls up and consumes GTA's people and cars."
games: [minecraft, gta-v]
creators: [{ name: "VortexisTV", url: "https://github.com/VortexisTV" }]
technique: passthrough
origin: ai-built
date: 2026-10-02
status: downloadable
repo: "https://github.com/VortexisTV/wither-storm-gta5-passthrough"
stars: 20
downloads: 1440
license: "MIT"
checked: 2026-10-13
builtOn:
  - { label: "universal-modder Minecraft-GTA V passthrough example", url: "https://github.com/rehan-remade/universal-modder/tree/main/examples/minecraft-gta5-passthrough" }
  - { label: "Cracker's Wither Storm Mod", url: "https://www.curseforge.com/minecraft/mc-mods/crackers-wither-storm-mod" }
links:
  - { label: "Releases", url: "https://github.com/VortexisTV/wither-storm-gta5-passthrough/releases" }
parents: [minecraft-in-gta-v]
tribute: block-city
---
This is a modified build of the Minecraft-GTA V passthrough example from [universal-modder](/mashups/minecraft-in-gta-v/), ported to Forge 1.20.1 so it can run nonamecrackers2's Cracker's Wither Storm Mod. Minecraft simulates the storm, with its growth, heads, tractor beams and consumption. A ScriptHookV plugin and a ReShade add-on draw it into GTA V Legacy's view with depth. Nearby pedestrians and cars get invisible Minecraft proxies: when the storm's beam grabs one, the GTA counterpart is lifted into the air, and when it's consumed it's removed. Minecraft fireballs and skulls cause explosions in GTA, and storm weather, lightning and fleeing pedestrians follow.

**F9** summons a storm that grows normally, **Shift+F9** a fully grown one, and F10 and F11 advance or remove it. GTA's buildings, roads and terrain aren't destroyed. The README says it was "Written with Claude Code + Codex."

The repository appeared on 2 October 2026, and its single release followed on 4 October. That zip has a Forge setup (the bridge, the Wither Storm 4.2.1 jar and the GTA files, ScriptHookV and ReShade included) and a Fabric setup of the original example. It had 1,440 downloads by 13 October.

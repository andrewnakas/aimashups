---
title: "ULTRAKILL inside Minecraft (UKPassthrough)"
summary: "Play a normal Minecraft world as V1: a hidden ULTRAKILL supplies the movement, weapons, arms and HUD, and every gun hurts Minecraft's mobs. Separate from ULTRACRAFT."
games: [ultrakill, minecraft]
creators: [{ name: "xandermodsstuff-dot", url: "https://github.com/xandermodsstuff-dot" }]
technique: passthrough
origin: ai-built
date: 2026-10-09
status: downloadable
repo: "https://github.com/xandermodsstuff-dot/ultrakill-minecraft"
stars: 11
downloads: 1961
license: "MIT"
checked: 2026-10-13
builtOn:
  - { label: "universal-modder passthrough example", url: "https://github.com/rehan-remade/universal-modder" }
links:
  - { label: "Releases", url: "https://github.com/xandermodsstuff-dot/ultrakill-minecraft/releases" }
parents: [minecraft-in-gta-v, fabric]
tribute: blockrealm
---
This is the same idea as [ULTRACRAFT](/mashups/ultracraft/), V1 in a Minecraft world, but a different project with different code. ULTRAKILL runs hidden next to Minecraft and talks to it over a local connection (127.0.0.1:25600). It supplies V1's dash, slide, slam and wall-jump on Minecraft's blocks, and every ULTRAKILL weapon hurts Minecraft's mobs, with Minecraft's own drops. Explosions break blocks, the Jackhammer mines, and Tab puts Minecraft items in V1's hand. In creative, the Sandbox arm spawns ULTRAKILL's own enemies to fight Minecraft's mobs. **F7** switches between V1 and plain Steve.

The two halves are `ukpassthrough-<version>.jar` (a Fabric mod for Minecraft 26.3) and `UKPassthrough.dll` (a BepInEx 5 plugin). The README credits [Claude Code](https://claude.com/claude-code) "as the programmer, from the passthrough example in [universal-modder](/mashups/minecraft-in-gta-v/)", and seven of its nine commits are co-authored by Claude Opus 5.5.

Three releases came out on 9 and 10 October 2026, reaching v0.1.2, with nearly 2,000 release downloads (both files counted) by 13 October.

---
title: "Portalcraft (Minecraft in Portal 2)"
summary: "Portal 2's whole campaign played as a Minecraft player, with building and digging in the test chambers and portals that open onto a real Minecraft world. Windows and Linux."
games: [minecraft, portal-2]
creators: [{ name: "Stink-O", url: "https://github.com/Stink-O" }]
technique: passthrough
origin: ai-built
date: 2026-10-10
status: downloadable
repo: "https://github.com/Stink-O/portalcraft"
stars: 2
downloads: 50
license: "MIT"
checked: 2026-10-13
builtOn:
  - { label: "SkyCraft", url: "https://github.com/chasmlol/SkyCraft" }
  - { label: "SourceAutoRecord (Portal 2 plugin framework)", url: "https://github.com/p2sr/SourceAutoRecord" }
links:
  - { label: "Releases", url: "https://github.com/Stink-O/portalcraft/releases" }
parents: [skycraft-minecraft-in-skyrim, fabric]
tribute: voxel-x-portals
---
Portalcraft runs the real Portal 2 and a hidden Minecraft: Java Edition 26.3 side by side. Portal 2 draws everything and runs its own puzzles. Minecraft supplies the player, hand, hotbar, health and blocks. Mining into a chamber wall reveals Minecraft ground behind it, and holding **G** while Chell fires a portal opens its partner onto a Minecraft landscape generated from your own seed. **J** switches between the Minecraft player and Chell. Faith plates, light bridges, lasers, turrets and gels still work on the Minecraft player.

The README credits [SkyCraft](/mashups/skycraft-minecraft-in-skyrim/) for "the idea, the architecture and large parts of the Fabric mod, including digging", and SourceAutoRecord for the plugin framework that hooks Portal 2. The repository appeared on 10 October 2026. Version 0.2.0, the first GitHub release (12 October), added Windows to the Linux build. The repository has a single commit, co-authored by Claude Opus 5.5. The author calls it "early, experimental and still quite broken" and asks for help, especially with smearing artifacts in the Minecraft world.

---
title: "GalaxyCraft (Minecraft in Super Mario Galaxy 2)"
summary: "Real Minecraft on Super Mario Galaxy 2's spherical planets: a Fabric mod, a patched Dolphin and a Syati module sharing one world, with Mario as the player."
games: [minecraft, super-mario-galaxy-2]
creators: [{ name: "Moui (M0uidev)", url: "https://github.com/M0uidev" }]
technique: passthrough
origin: ai-built
date: 2026-10-03
status: downloadable
repo: "https://github.com/M0uidev/GalaxyCraft"
stars: 2
downloads: 596
license: "MIT"
checked: 2026-10-09
builtOn:
  - { label: "Dolphin emulator", url: "https://github.com/dolphin-emu/dolphin" }
  - { label: "Fabric", url: "https://fabricmc.net" }
seenOn:
  - { label: "@recompiledgames reel, 6 Oct 2026", url: "https://www.instagram.com/recompiledgames/reel/DeJ13Xtymsh/" }
parents: [fabric]
tribute: voxel-x-portals
---
GalaxyCraft runs Minecraft and Super Mario Galaxy 2 as one world. A Fabric mod on the Minecraft side, a patched build of the Dolphin emulator and a Syati code module inside the game keep the two in sync, so Minecraft terrain is generated as small spherical planets and Mario walks, spins and long-jumps across blocks you can break and place.

The repository's README doesn't mention AI, but its commit history credits Claude Opus 5.5 and Claude Sonnet 5.5 as co-authors on hundreds of commits. Releases (v0.1.1 on 7 October to v0.1.4 on 9 October 2026) ship a Windows and Linux launcher that signs into your Microsoft account and sets everything up. You need your own Super Mario Galaxy 2 (USA) disc image and a copy of Minecraft: Java Edition.

## Controls
WASD moves, Space is A (jump), Shift is Z, mouse looks and aims, F spins, and left or right click spins or breaks and places blocks. F6 switches between Mario's movement and Minecraft's. `/fly`, `/skin` and `/galaxycraft planet spawn|tp|remove` are available as commands.

---
title: "GModLight (Garry's Mod in Dying Light)"
summary: "Garry's Mod's physgun, weapons and spawn menu inside Dying Light: fling, freeze and shoot Dying Light's zombies with a hidden Garry's Mod doing the work."
games: [dying-light, garrys-mod]
creators: [{ name: "GooseMcGee", url: "https://github.com/GooseMcGee" }]
technique: passthrough
origin: ai-built
date: 2026-10-04
status: downloadable
repo: "https://github.com/GooseMcGee/DyingLight-GMod"
stars: 0
downloads: 7
license: "MIT"
checked: 2026-10-14
links:
  - { label: "Releases", url: "https://github.com/GooseMcGee/DyingLight-GMod/releases" }
---
GModLight runs Garry's Mod hidden next to Dying Light. A plugin in Dying Light sends its camera, input and nearby zombies over shared memory; Garry's Mod mirrors the zombies as invisible stand-ins fitted to their skeletons, and its frame is drawn over Dying Light's, re-projected to Dying Light's camera with depth. **F2** swaps Kyle's hands for Garry's Mod's physgun and weapons, and **Q** opens the spawn menu.

Physgunned zombies really move, and Garry's Mod weapons damage and kill them through the zombie's own damage code, with headshots. Rockets, grenades and crossbow bolts hit Dying Light's walls. Workshop weapon packs like M9K can be switched on. Vehicles spawn but can't be driven yet, and it's single player only.

v0.1.0 went up on 4 October 2026. Its commits are co-authored by Claude Opus 5.5.

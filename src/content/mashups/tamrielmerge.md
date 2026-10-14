---
title: "TamrielMerge (older Elder Scrolls games inside Skyrim)"
summary: "Converts the Daggerfall, Redguard, Morrowind and Oblivion you own into Skyrim Special Edition, as one playthrough in story order with a Travel Through Time power between them."
games: [skyrim, tes-daggerfall, tes-redguard, morrowind, oblivion]
creators: [{ name: "Murray2k6", url: "https://github.com/Murray2k6" }]
technique: conversion
origin: ai-built
date: 2026-10-13
status: downloadable
repo: "https://github.com/Murray2k6/TamrielMerge"
stars: 1
downloads: 24
license: "GPL-3.0"
checked: 2026-10-13
links:
  - { label: "Releases", url: "https://github.com/Murray2k6/TamrielMerge/releases" }
parents: [skse]
---
TamrielMerge doesn't run two games at once. It's a converter. A Windows app reads your own Steam or GOG copies of The Elder Scrolls II: Daggerfall, An Elder Scrolls Legend: Redguard, Morrowind and Oblivion, and rebuilds them as Skyrim Special Edition plugins: land, towns, dungeons, people, dialogue, items, factions, music and intro videos. Each becomes a world inside Skyrim, played in story order (Redguard, Daggerfall, Morrowind, Oblivion, then Skyrim), and a Travel Through Time power moves between them. Daggerfall's Iliac Bay becomes one seamless overland with its 3,400 towns and 4,200 dungeons.

AI tools do a lot of the asset work. TripoSR makes 3D models from Daggerfall's sprites, Real-ESRGAN upscales, and Coqui XTTS-v2 voices lines the games never recorded, in Skyrim's voices. SKSE plugins handle era dates and graphics. A full conversion takes hours and about 60 GB of free space while it runs.

The repository and its first release, v0.1.0 (an 867 MB zip), both appeared on 13 October 2026. All 11 of its commits are co-authored by Claude Opus 5.5. The release notes say the distant view and some Daggerfall navmesh have been checked offline only, not yet in the game.

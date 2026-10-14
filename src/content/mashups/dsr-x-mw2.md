---
title: "DSR × MW2 (Modern Warfare 2 guns in Dark Souls Remastered)"
summary: "MW2's M9, Intervention and SCAR-H with M203 inside native Dark Souls Remastered, with MW2 hands, reloads, recoil and audio, and a bonfire armory. Source release."
games: [dark-souls-remastered, modern-warfare-2]
creators: [{ name: "oh-ashen-one", url: "https://github.com/oh-ashen-one" }]
technique: conversion
origin: ai-built
date: 2026-10-06
status: source-only
repo: "https://github.com/oh-ashen-one/dsr-mw2-crossover"
stars: 0
license: "GPL-3.0"
checked: 2026-10-14
builtOn:
  - { label: "IW4L (recoil component)", url: "https://github.com/vladtrc/iw4L" }
parents: [iw4l]
---
DSR × MW2 adds three Modern Warfare 2 weapons to Dark Souls Remastered: the M9, the Intervention bolt-action sniper and the SCAR-H with an underbarrel M203. They use DSR's own projectile and ammo path, with per-weapon magazines, MW2's reload timings and recoil, and the M203 fires a native DSR grenade. MW2's hands, gun meshes and animations are drawn by an original Direct3D 11 renderer, and an armory at the Asylum bonfire hands the weapons out.

It's a source release, not an installer: you convert the MW2 assets yourself from your own copies, and the launcher targets an Apple M3 Ultra running DSR through CrossOver. The README is written to be handed to a coding agent, and the commits are co-authored by Claude Opus 5.5. Original code is GPL-3.0; the recoil component derived from [IW4L](https://github.com/vladtrc/iw4L) is Apache-2.0.

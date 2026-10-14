---
title: "iw4Strike (Counter-Strike on MW2's maps)"
summary: "An IW4L fork that keeps Modern Warfare 2's maps and replaces the gameplay with Counter-Strike: CS:GO movement and spray, Counter-Strike: Source guns and HUD, buy menu and bomb defusal."
games: [counter-strike-source, modern-warfare-2]
creators: [{ name: "Gh4zi", url: "https://github.com/Gh4zi" }]
technique: rust-rewrite
origin: ai-built
date: 2026-10-06
status: downloadable
repo: "https://github.com/Gh4zi/iw4Strike"
stars: 5
downloads: 11
license: "Apache-2.0"
checked: 2026-10-14
builtOn:
  - { label: "IW4L", url: "https://github.com/vladtrc/iw4L" }
  - { label: "CSMovementRust", url: "https://github.com/EduardoCalvoUribe/CSMovementRust" }
links:
  - { label: "Releases", url: "https://github.com/Gh4zi/iw4Strike/releases" }
parents: [iw4l]
---
iw4Strike is a fork of [IW4L](https://github.com/vladtrc/iw4L) that plays Counter-Strike on Modern Warfare 2's maps. It runs a 100 Hz server tick with CS:GO movement by default (bunny hopping, air strafing, edgebugs, ladders), and CS:S, surf, bhop and CS 1.6 presets. Its 24 guns follow CS:GO's spray patterns and CS 1.6's damage, with silencers, burst fire, scopes, the knife, HE, flash and smoke grenades. Models, sounds and the HUD are read from your own Counter-Strike: Source install (or Condition Zero or CS 1.6), and CS2's guns are an experimental option.

Defusal follows CS rules: $800 starting money, a buy menu near spawn, the C4 with a 3-second plant and a 10-second defuse (5 with a kit), and first to 13 rounds. Free-for-all and team deathmatch are there too. MW2's perks and killstreaks are switched off.

It's an alpha with Windows and Linux builds (Linux untested) and one tester, the author. Seven releases went out from 6 to 12 October 2026, reaching v0.3.3. Its commits are co-authored by Claude Opus 5.5.

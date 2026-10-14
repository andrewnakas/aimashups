---
title: "FN Skate 3 (Skate 3 in Fortnite OG)"
summary: "Skate 3's skating inside offline Fortnite Chapter 4 Season OG (v27.11): press J in a match and drop onto a board with Skate 3's physics, tricks, grinds, bails and Hall of Meat."
games: [skate-3, fortnite]
creators: [{ name: "Cobalyst", url: "https://github.com/Cobalyst" }]
technique: rust-rewrite
origin: unverified
date: 2026-10-11
status: downloadable
repo: "https://github.com/Cobalyst/Fortnite-Skate-3-Mod-for-V27.11"
stars: 1
downloads: 13
license: "Apache-2.0"
checked: 2026-10-13
builtOn:
  - { label: "2010 Rust Rewrite Mashup / skate-3-rust-engine crates", url: "https://github.com/chasmlol/2010-rust-rewrite-mashup" }
links:
  - { label: "Releases", url: "https://github.com/Cobalyst/Fortnite-Skate-3-Mod-for-V27.11/releases" }
parents: [skate-3-rust-engine, 2010-rust-rewrite-mashup]
---
FN Skate 3 is a C++ DLL injected into an offline copy of Fortnite 27.11 (Chapter 4 Season OG, build CL-29739262). It calls `skate_engine.dll`, a Rust wrapper around the Skate 3 engine crates from the [2010 Rust Rewrite Mashup](/mashups/2010-rust-rewrite-mashup/) and SK8-ENGINE, with the mod's changes. Press **J** in a match and your character drops onto a board with Skate 3's physics, tricks, grinds, bails, camera, sounds, trick display, Hall of Meat and object dropper. Press J again to get off and you keep your speed, even in mid-air.

It only works on that exact Fortnite build, with a launcher that can host a local match and inject a DLL. The author recommends ATLAS. A setup program builds the Skate 3 data from your own Xbox 360 copy. The C++ side was written against an SDK dumped from the game with a patched Dumper-7, and the patch is in the repository.

The source and a v1.0 `.rar` release went up together on 11 October 2026 in a single commit. Neither says whether an AI agent was used, so it's marked unverified.

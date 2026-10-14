---
title: "Skate 64 (Skate 3 in Super Mario 64)"
summary: "Mario rides the Rust Skate 3 engine through the real Super Mario 64 in sm64coopdx, with full-body Skate poses, a replay editor, session markers and an object dropper."
games: [skate-3, super-mario-64]
creators: [{ name: "SAitken91", url: "https://github.com/SAitken91" }]
technique: rust-rewrite
origin: ai-built
date: 2026-10-13
status: source-only
repo: "https://github.com/SAitken91/Skating-with-a-Plumber-in-a-magical-land"
stars: 0
license: "MIT"
checked: 2026-10-13
builtOn:
  - { label: "2010 Rust Rewrite Mashup (skate engine)", url: "https://github.com/chasmlol/2010-rust-rewrite-mashup" }
  - { label: "sm64coopdx", url: "https://github.com/coop-deluxe/sm64coopdx" }
parents: [2010-rust-rewrite-mashup, skate-3-rust-engine]
---
"Skating with a Plumber in a Magical Land", or Skate 64, is a mod for sm64coopdx (Super Mario 64 Coop Deluxe). Press **Y** and Mario gets on a board driven by the Rust Skate 3 engine from the [2010 Rust Rewrite Mashup](/mashups/2010-rust-rewrite-mashup/). Coins, enemies, stars and warps keep working around him. Level collision goes straight to the engine, so ledges and edges become grind rails, and the engine's 36-bone skeleton is retargeted onto Mario's 20 body parts every frame.

A small DLL loads in place of coopdx's Discord SDK, hooks its Lua runtime and talks to the Rust host through shared memory. It adds Skate 4-style session markers, a 60-second replay editor, a trainer menu (physics presets, noclip, character select) and an object dropper with kickers, ramps and rails. You need a US Super Mario 64 ROM, sm64coopdx 1.5.1 and Skate 3 assets converted from your own disc. Board sounds come from your own Skate 3 too.

Version 0.1.0 went up on 13 October 2026 as source only: you build it with Rust and Visual Studio. The README says it was "built with help from Claude", and its commits are co-authored by Claude Opus 5.5.

---
title: "SkateGM (Skate 3 in Garry's Mod)"
summary: "Skate 3's board physics, tricks and scoring inside Garry's Mod, on any map and in multiplayer, with 22 minigames, a park editor and Skate 3 maps built from your own disc."
games: [skate-3, garrys-mod]
creators: [{ name: "the-schwilliam", url: "https://github.com/the-schwilliam" }]
technique: rust-rewrite
origin: ai-built
date: 2026-10-03
status: downloadable
repo: "https://github.com/the-schwilliam/SkateGM"
stars: 41
downloads: 5199
license: "GPL-3.0"
checked: 2026-10-13
builtOn:
  - { label: "skate-3-rust-engine", url: "https://github.com/SK8-ENGINE/skate-3-rust-engine" }
  - { label: "2010 Rust Rewrite Mashup (skate engine)", url: "https://github.com/chasmlol/2010-rust-rewrite-mashup" }
links:
  - { label: "Releases", url: "https://github.com/the-schwilliam/SkateGM/releases" }
  - { label: "Installation tutorial (YouTube)", url: "https://www.youtube.com/watch?v=5UXgyk4Bs0A" }
parents: [skate-3-rust-engine, 2010-rust-rewrite-mashup]
---
SkateGM runs Skate 3's skating inside Garry's Mod as a Rust engine module plus a Lua add-on. Its engine folder is the `skate/` engine from the [2010 Rust Rewrite Mashup](/mashups/2010-rust-rewrite-mashup/) with SkateGM's changes, and its data exporter comes from [skate-3-rust-engine](https://github.com/SK8-ENGINE/skate-3-rust-engine). An installer converts your own Xbox 360 copy of Skate 3 (an `.iso` or a folder with `default.xex`) on your PC. It can also build Skate 3's parks as Garry's Mod maps (all of Port Carverton streamed in, plus segments like the Mega Park and Maloof Money Cup) and decode the soundtrack.

It's built for playing with friends. A SkateGM gamemode puts every player on a board, and LB plus the D-pad opens 22 minigames, among them Race, S.K.A.T.E., Hall of Meat, Trick Bingo and Board Golf. There's also a park editor, replays and a rocket board. The add-on is on the Steam Workshop, and the engine module comes from the GitHub installer, since the Workshop can't carry it.

Nine releases went out between 3 and 13 October 2026 (5.30 to 9.0), with nearly 5,200 release downloads by 13 October. Its README says the code "was written with the help of AI coding tools", though the author says they don't use generative AI for assets or game logic.

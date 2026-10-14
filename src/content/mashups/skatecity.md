---
title: "SkateCity (Skate 3 in Batman: Arkham City)"
summary: "Batman on a Skate 3 board in Arkham City: flip tricks, rooftop grinds, cape glides between buildings and Hall of Meat-style bail scoring."
games: [batman-arkham-city, skate-3]
creators: [{ name: "marvelplayer49", url: "https://github.com/marvelplayer49" }]
technique: rust-rewrite
origin: ai-built
date: 2026-10-11
status: source-only
repo: "https://github.com/marvelplayer49/skatecity"
stars: 0
checked: 2026-10-14
builtOn:
  - { label: "2010 Rust Rewrite Mashup (skate engine)", url: "https://github.com/chasmlol/2010-rust-rewrite-mashup" }
  - { label: "BmSDK", url: "https://github.com/Team-BmSDK/BmSDK-AC" }
links:
  - { label: "Video: Batman Arkham city with a skateboard (YouTube)", url: "https://www.youtube.com/watch?v=L27IhiA3bD4" }
seenOn:
  - { label: "chasm Discord #share-your-projects", url: "https://discord.com/channels/1553823769460613140/1554228730120114339" }
parents: [2010-rust-rewrite-mashup]
tribute: skate-x-open-world
---
SkateCity drops Batman onto a skateboard anywhere in Arkham City. The skating runs in the skate engine from the [2010 Rust Rewrite Mashup](/mashups/2010-rust-rewrite-mashup/), and Batman is posed from its skater every frame. The ground is scanned as you ride, so streets, rooftops, stairs and ramps are all skateable, and rails, ledges and rooftop edges are found automatically for grinds. Press LB in the air to open the cape with Arkham's own glide, and you're put back on the board when you land. Wipeouts are scored Hall of Meat style, with broken bones, fall height and tumble distance.

The game side is a C# script for [BmSDK](https://github.com/Team-BmSDK/BmSDK-AC), and a Rust helper is built on your PC. There are no release builds: you compile it against the mashup's source and set up the mashup's Windows release with your own Skate 3 Xbox 360 files (its one-time setup also asks for Modern Warfare 2). marvelplayer49 posted a video on 11 October 2026, calling it a new mod they're working on and saying they're trying to get it working in the co-op mod too. Its commits are co-authored by Claude Opus 5.5.

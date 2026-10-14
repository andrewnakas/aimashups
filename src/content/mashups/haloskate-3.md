---
title: "HaloSkate 3 (Halo CE × Skate 3)"
summary: "The Halo CE campaign in a browser with a Skate 3 board you can drop anywhere: flick-it tricks, auto-found grind rails and kills that land in your combo."
games: [halo-combat-evolved, skate-3]
creators: [{ name: andrewnakas, url: "https://github.com/andrewnakas" }]
technique: decompile-port
origin: ai-built
date: 2026-10-11
status: downloadable
needsOwnCopy: false
repo: "https://github.com/andrewnakas/haloskate3wasm"
stars: 0
checked: 2026-10-13
parents: [skate-3-rust-engine]
builtOn:
  - { label: "OpenCE: Halo CE decompilation (CC0)", url: "https://github.com/OpenCommunityEdition/OpenCE" }
  - { label: "skate-3-rust-engine (SK8-ENGINE)", url: "https://github.com/SK8-ENGINE/skate-3-rust-engine" }
  - { label: "halo-cleanroom: regenerated Halo CE maps", url: "https://github.com/andrewnakas/halo-cleanroom" }
links:
  - { label: "Standalone page (GitHub Pages)", url: "https://andrewnakas.github.io/haloskate3wasm/" }
tribute: haloskate-3
faqs:
  - { q: "Do I need to own Halo or Skate 3?", a: "No. It loads the clean-room maps from halo-cleanroom, where every texture, sound and voice is regenerated from CC0 sources; level geometry, collision and scripts are the original level data. No Skate 3 files ship." }
  - { q: "How was it made?", a: "The repository's commits credit Claude as co-author. The skating is a C++ port of skate-core from skate-3-rust-engine, bridged into OpenCE's WebAssembly build of Halo CE." }
---
HaloSkate 3 takes the idea behind chasmlol's [MW2 × Skate 3 mashup](/mashups/2010-rust-rewrite-mashup/) and applies it to Halo: Combat Evolved. Press B anywhere in the campaign and Master Chief drops onto a board driven by a C++ port of skate-core, the reverse-engineered skating logic from [skate-3-rust-engine](https://github.com/SK8-ENGINE/skate-3-rust-engine). Halo's own collision answers the board's ray casts, and grind rails are derived automatically from each level's collision.

The game is [OpenCE](https://github.com/OpenCommunityEdition/OpenCE), a CC0 decompilation of the Xbox version, in its WebAssembly build. It runs in the browser on [its play page](/play/haloskate-3/).

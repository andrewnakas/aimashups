---
title: "Mirrorwarfare (Mirror's Edge movement in MW2)"
summary: "Faith's parkour from Mirror's Edge Catalyst inside the Rust rewrite of Modern Warfare 2: wallruns, vaults and slides with MW2's guns in free-for-all."
games: [mirrors-edge-catalyst, modern-warfare-2]
creators: [{ name: "roshan (r614)", url: "https://github.com/r614" }]
technique: rust-rewrite
origin: ai-built
date: 2026-10-04
status: source-only
repo: "https://github.com/r614/mirrorwarfare"
stars: 6
license: "Apache-2.0 (some tools GPL-3.0)"
checked: 2026-10-09
builtOn:
  - { label: "IW4L", url: "https://github.com/vladtrc/iw4L" }
seenOn:
  - { label: "@recompiledgames reel, 7 Oct 2026", url: "https://www.instagram.com/recompiledgames/reel/DeMyulNzw30/" }
parents: [iw4l]
tribute: kickflip-ops
---
Mirrorwarfare is a fork of IW4L, the Rust and Bevy rewrite of Modern Warfare 2's runtime, with Mirror's Edge Catalyst's movement rebuilt on top: momentum that builds over about three seconds of running, wallruns, wallclimbs, ledge grabs, vaults, springboards, slides and the 180° quickturn, all while carrying MW2's weapons.

Its README says it "is written almost entirely by an LLM, like the iw4L it builds on." There's no packaged release. You build it with Rust and run a free-for-all test arena against bots; Catalyst's animations and city maps are optional and extracted from your own copy. A third party, SIGF, has published a one-click package of it.

## Controls
W runs (there's no sprint key), Space jumps, wallruns, climbs and vaults, C slides or rolls, Q quickturns, and the mouse fires MW2's weapons. The `thirdperson` console command shows the body animations.

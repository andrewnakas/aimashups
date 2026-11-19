---
title: "SK8V (Skate 3 in GTA V Legacy)"
seoTitle: "SK8V GitHub: Skate 3 in GTA V Download and Setup"
summary: "SK8V is an open-source mod that puts Skate 3's skating into GTA V Legacy story mode. The source and release ZIP are on GitHub at becaring/SK8V."
description: "SK8V puts Skate 3's skating in GTA V Legacy. Source and release ZIP: github.com/becaring/SK8V. Needs GTA V Legacy, your own Skate 3 disc and a controller."
games: [skate-3, gta-v]
creators: [{ name: "becaring", url: "https://github.com/becaring" }]
technique: rust-rewrite
origin: unverified
date: 2026-10-09
status: downloadable
repo: "https://github.com/becaring/SK8V"
stars: 68
downloads: 1880
license: "Apache-2.0"
checked: 2026-10-13
builtOn:
  - { label: "2010 Rust Rewrite Mashup (skate engine)", url: "https://github.com/chasmlol/2010-rust-rewrite-mashup" }
links:
  - { label: "SK8V on GitHub", url: "https://github.com/becaring/SK8V" }
  - { label: "Releases (download)", url: "https://github.com/becaring/SK8V/releases" }
parents: [2010-rust-rewrite-mashup, skate-3-rust-engine]
tribute: skate-x-open-world
faqs:
  - { q: "Where is the SK8V GitHub?", a: "SK8V's source code and releases are at github.com/becaring/SK8V, published by becaring under the Apache-2.0 license. Download the latest release ZIP from its Releases page, not GitHub's Source code ZIP." }
  - { q: "What do I need to play SK8V?", a: "Its README lists Windows x64, GTA V Legacy in story mode with ScriptHookV, your own Skate 3 Xbox 360 disc image or extracted disc folder, and an Xbox or PlayStation controller. GTA V Enhanced, GTA Online and FiveM aren't supported." }
  - { q: "How do I install SK8V?", a: "Extract the release ZIP, close GTA V and run SK8V Setup.cmd. Pick your Skate 3 disc and a stance, press Install, then start GTA V Legacy story mode with BattlEye disabled and pick the skateboard from the weapon wheel." }
---
**Where to get it:** SK8V's source and release ZIP are on GitHub at [becaring/SK8V](https://github.com/becaring/SK8V). Download the latest ZIP from [Releases](https://github.com/becaring/SK8V/releases), not GitHub's Source code ZIP, and run `SK8V Setup.cmd`. Its README asks for GTA V Legacy (story mode only), your own Skate 3 Xbox 360 disc and a controller.

SK8V brings Skate 3's core skating mechanics to Los Santos in GTA V Legacy, joining the Skate 3 ports to [Bully](/mashups/bullyskate/), [San Andreas](/mashups/gta-san-anskateas/) and [GTA III and Vice City](/mashups/gta-skate-3-trilogy/). Its NOTICE file credits the skate engine from the [2010 Rust Rewrite Mashup](/mashups/2010-rust-rewrite-mashup/) (itself a fork of IW4L) and a live GTA collision reader adapted from Sol4ra's LS-Skate-LiveCollision. It loads through ScriptHookV, which it fetches from the official site rather than bundling. Releases have come fast: the 1.0 launch thread is the busiest project post in the chasm Discord's share-your-projects forum (more than 750 replies by 10 October 2026), and 1.1.0 on 10 October added Skate 3's riding styles, posture and truck settings, emotes and radio controls, after 1.0.8 removed a frame-rate drop of around 30 FPS when entering skate mode. The repository doesn't say whether an AI agent was used, so it's marked unverified.

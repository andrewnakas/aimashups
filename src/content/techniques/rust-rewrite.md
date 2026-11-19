---
name: Rust engine rewrite
seoTitle: "Rust Rewrites of Games: Skate 3, MW2 and the GTA Mods"
summary: "A Rust rewrite rebuilds a game's engine from scratch in Rust, usually on Bevy and with an AI coding agent's help, then reads the game's data from your own copy. The 2026 mashup wave grew from two: Skate 3 and Modern Warfare 2."
description: "A Rust rewrite rebuilds a game's engine in Rust, using data from your copy. Can GTA 5 be rewritten in Rust? None we know of; SK8V runs Rust Skate 3 in it."
order: 2
faqs:
  - { q: "Can GTA 5 be rewritten in Rust?", a: "Nobody has released a Rust rewrite of GTA V's engine that we know of. What exists is the reverse: SK8V runs the Rust-rewritten Skate 3 engine inside GTA V Legacy as a ScriptHookV mod, and SkateIV does the same in GTA IV." }
  - { q: "Which games have been rewritten in Rust?", a: "The September 2026 mashup wave grew from two AI-assisted Rust rewrites: skate-3-rust-engine for Skate 3 and IW4L for Modern Warfare 2. A World of Warcraft 1.12 client, benilla, came before them in July, and by October the chasm Discord was producing more, including Fallout: New Vegas, Counter-Strike: Source and Elden Ring's combat." }
---
**Can GTA 5 be rewritten in Rust?** Not so far: nobody has released a Rust rewrite of GTA V's engine that we know of. What exists is the reverse. [SK8V](/mashups/sk8v/) runs the Rust Skate 3 engine inside GTA V Legacy as a ScriptHookV mod, [SkateIV](/mashups/skate-iv/) does the same in GTA IV, and [GTA Skate](/mashups/gta-skate-3-trilogy/) merges it into re3 and reVC, the long-running reverse-engineered sources for GTA III and Vice City.

A Rust rewrite rebuilds a game's runtime from scratch, usually on the [Bevy](https://bevyengine.org) engine and `wgpu`, and then reads the maps, models and animations from the player's own installed copy. Because the rules of the game now live in ordinary Rust code, two rewrites can be merged into one program, or one can be dropped into another game as a plugin.

The September 2026 wave grew from two rewrites: **[skate-3-rust-engine](https://github.com/SK8-ENGINE/skate-3-rust-engine)**, a Skate 3 skating engine from reverse-engineering research, and **[IW4L](https://github.com/vladtrc/iw4L)**, a Rust/Bevy runtime for Modern Warfare 2. The [2010 Rust Rewrite Mashup](/mashups/2010-rust-rewrite-mashup/) combined them with a Rust Minecraft engine, and the skate engine went on to power skating mods for [Bully](/mashups/bullyskate/), [San Andreas](/mashups/gta-san-anskateas/) [Vice City](/mashups/gta-skate-3-trilogy/), [GTA V](/mashups/sk8v/), [GTA IV](/mashups/skate-iv/) and [Team Fortress 2](/mashups/skate-fortress-2/), while IW4L's crates carried MW2 into [Risk of Rain 2](/mashups/mw2-x-risk-of-rain-2/).

By October the [chasm Discord](/history/) was producing single-game rewrites faster than crossovers: Fallout: New Vegas, Mirror's Edge's movement, Forza Horizon, Need for Speed: Most Wanted, Assassin's Creed, Counter-Strike: Source and Elden Ring's combat, each a candidate for the next mashup.

It's the slowest technique and the most portable. A Rust/Bevy codebase can target Windows, macOS, Linux, mobile, VR and the browser (WebAssembly + WebGPU) from one source tree.

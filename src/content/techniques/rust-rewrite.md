---
name: Rust engine rewrite
summary: An AI-assisted from-scratch rewrite of a game's engine in Rust (usually on Bevy) that reads data from your own copy of the game.
order: 2
---
A Rust rewrite rebuilds a game's runtime from scratch, usually on the [Bevy](https://bevyengine.org) engine and `wgpu`, and then reads the maps, models and animations from the player's own installed copy. Because the rules of the game now live in ordinary Rust code, two rewrites can be merged into one program, or one can be dropped into another game as a plugin.

The September 2026 wave grew from two rewrites: **[skate-3-rust-engine](https://github.com/SK8-ENGINE/skate-3-rust-engine)**, a Skate 3 skating engine from reverse-engineering research, and **[IW4L](https://github.com/vladtrc/iw4L)**, a Rust/Bevy runtime for Modern Warfare 2. The [2010 Rust Rewrite Mashup](/mashups/2010-rust-rewrite-mashup/) combined them with a Rust Minecraft engine, and the skate engine went on to power skating mods for [Bully](/mashups/bullyskate/), [San Andreas](/mashups/gta-san-anskateas/) and [Vice City](/mashups/gta-skate-3-trilogy/).

It's the slowest technique and the most portable. A Rust/Bevy codebase can target Windows, macOS, Linux, mobile, VR and the browser (WebAssembly + WebGPU) from one source tree.

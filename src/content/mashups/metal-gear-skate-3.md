---
title: "Metal Gear Skate 3 (Skate 3 in MGS3)"
summary: "Snake skates MGS3's own stages in Master Collection Vol.1 on the Rust Skate 3 engine, with Skate 3's controls, tricks, grinds, bails and skater sounds."
games: [skate-3, metal-gear-solid-3]
creators: [{ name: "nyaaarc", url: "https://github.com/nyaaarc" }]
technique: rust-rewrite
origin: unverified
date: 2026-10-10
status: source-only
repo: "https://github.com/nyaaarc/MetalGearSkate3"
stars: 1
license: "GPL-3.0"
checked: 2026-10-13
builtOn:
  - { label: "skate-3-rust-engine", url: "https://github.com/SK8-ENGINE/skate-3-rust-engine" }
  - { label: "2010 Rust Rewrite Mashup (skate engine)", url: "https://github.com/chasmlol/2010-rust-rewrite-mashup" }
parents: [skate-3-rust-engine, 2010-rust-rewrite-mashup]
---
Metal Gear Skate 3 is an ASI plugin for METAL GEAR SOLID 3 from Master Collection Vol.1 on Steam. Press **F5** and Snake is on foot with a board in hand, then **Y** gets on. From there it's Skate 3's own controls: flick the right stick for ollies, kickflips and nollies, ollie onto a ledge to grind. The skating runs on [skate-3-rust-engine](https://github.com/SK8-ENGINE/skate-3-rust-engine) by way of the [2010 Rust Rewrite Mashup](/mashups/2010-rust-rewrite-mashup/), which also provides the skater's audio, the disc export and the grind-rail finder. The README says the mod is "inspired by and structured like" [GTA San AnSkateas](/mashups/gta-san-anskateas/).

Setup installs MGSHDFix and converts your own Xbox 360 Skate 3 disc (about 180 MB). You then reach the two tested stages, Groznyj Grad Southwest and its night version, through MGS3's developer menu. Guards still see the skater, and the board can't knock them over.

The README describes a release zip, but none was on GitHub as of 13 October 2026, so it's source only (build with Rust and Visual Studio Build Tools). Neither the README nor the commits say whether an AI agent was used, so it's marked unverified.

---
title: "Elden Ring combat in Skyrim (Rust controller rewrite)"
summary: "Elden Ring's player movement and combat rewritten in Rust from the game's own data, then dropped into Skyrim. The rewrite is public; the Skyrim mod isn't out yet."
games: [elden-ring, skyrim]
creators: [{ name: Funny-Bones, url: "https://github.com/Funny-Bones" }]
technique: rust-rewrite
origin: ai-built
date: 2026-10-05
status: unreleased
repo: "https://github.com/Funny-Bones/ELDEN-RING-Combat-Rewrite"
stars: 149
license: MIT
parents: [bevy]
checked: 2026-10-09
sources:
  - { title: "Skyrim modder forgoes trend of AI-powered crossovers, brings Elden Ring's combat to the RPG himself", publisher: "GamesRadar+", url: "https://www.gamesradar.com/games/the-elder-scrolls/skyrim-modder-forgoes-trend-of-ai-powered-crossovers-brings-elden-rings-combat-to-the-rpg-himself-and-earns-rave-reviews-holy-peak/" }
  - { title: "Elden Ring Combat Reportedly Playable in Skyrim Through Rust Rewrite Mod", publisher: "HappyGamer", url: "https://happygamer.com/elden-ring-combat-skyrim-mod-rust-167028/" }
faqs:
  - { q: "Can I download Elden Ring combat for Skyrim?", a: "Not yet. As of 9 October 2026 no Skyrim build has been published and there is no release date or Nexus Mods page, according to games.gg; coverage credits the Skyrim port to a second modder. The Rust rewrite it's built on is public, and needs your own copy of Elden Ring to generate its data." }
  - { q: "Was it made with AI?", a: "Yes, at least in part. GamesRadar framed it as a modder skipping the AI trend, but 21 of the repository's first 25 commits (5 to 8 October 2026) are co-authored by Claude Opus 5.5. It is built the same way as the wave's other Rust rewrites: a Bevy program reading timings and animations from the original game's files." }
---
On 5 October Funny-Bones published a Rust/Bevy sandbox that recreates how Elden Ring's player moves and fights: walk, run and sprint with their braking animations, lock-on strafing, the full set of jumps and landings, rolls that come out on release, and the attack chains. The timings and animations aren't tuned by eye. They're read from the player's own copy of the game, so the repository holds only code.

## Into Skyrim
Because the controller is a standalone Rust program, it can be attached to another game. A day later a clip showed Skyrim's Dragonborn fighting with Elden Ring's timing and weight, and chasm shared it as "Elden Ring combat is now FULLY playable in Skyrim". Replies called it "holy peak". The Skyrim build hasn't been released yet.

## Why it stands out
The clip went viral in the same week the backlash peaked, and it got a far warmer reception than the two-game clips, because it moves the way the original does. GamesRadar contrasted it with the AI crossovers, though the rewrite's own commit history credits Claude as co-author. It's built the way the trend's best-received projects were: a [Rust rewrite](/techniques/rust-rewrite/) of one game's rules that can be dropped into another.

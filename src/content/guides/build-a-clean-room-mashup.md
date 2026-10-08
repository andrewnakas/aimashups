---
title: "How to build a clean-room game mashup with an AI agent"
summary: "Spec, simulate, then wire modes together: the workflow behind GameMash, from a feel spec to a WebAssembly build anyone can play."
date: 2026-10-06
---
Most AI mashups read the original games' data, so they can only be played by people who own those games. A clean-room mashup rebuilds the **feel** from scratch instead. This is the workflow GameMash uses.

## 1. Write a feel spec, not code
For each game you want to borrow from, write a spec in plain language and numbers. Base it on observation: watch gameplay, measure a live copy you own, and read publicly documented values. The spec describes behaviour, not implementation:

| Behaviour | Value |
|---|---|
| Pushes | Discrete kicks of +1.7 m/s every 0.62 s while held |
| Push speed cap | 8 m/s (faster downhill) |
| Ollie | 4.3–5.9 m/s pop scaled by 0.32 s of crouch |
| Landing | ≤24° off travel is clean, ≤62° is sketchy (lose 40% speed), worse is a bail |

That's an excerpt from GameMash's skate spec. Keep every value marked *observed* or *to measure*, so you know what still needs checking.

**Keep the spec and the code separate.** If an agent studies the original game, it writes the spec and nothing else. A fresh agent session that has only seen the spec writes the code. Never paste decompiled code, extracted assets or level data into the implementation session.

## 2. Build engine-free sims first
Put each mechanic in a plain Rust module with no engine types: a `SkateSim`, a `JumpSim`, a voxel grid, a car model. Give each one a tuning struct that mirrors the spec, and unit-test the spec's claims directly:

- discrete pushes reach the cap
- a charged ollie goes higher than a tap
- a late 360 flip bails
- hitting a wall hard bails

Agents are very good at this loop. The tests turn "does it feel right?" into checks they can run themselves.

## 3. One shared player, many modes
The mashup part is a **locomotion hand-off**: one player state (position, velocity, grounded) that each mode reads and writes. When a mode turns off mid-air, the next one takes over the same velocity, so momentum carries across. In Bevy, make each mode a plugin whose systems run only when it's on (a `run_if(mode_on(Mode::Skate))` condition).

## 4. Make synergies explicit
Cross-mode moves are what make a mashup more than a menu of minigames. Emit events (trick landed, kill, portal entered, swing released, car stolen) and score combinations in one pure, tested function: a kill within 1.5 s of a trick is a KICKFLIP KILL, a carjack within 2.5 s of a swing release is an AERIAL JACK.

## 5. Make every asset original
Generate or make every model, texture, sound and font yourself, or use CC0 sources, and record where each one came from. Use no names or likenesses from the games that inspired you.

## 6. Ship to the browser
Bevy builds to WebAssembly with [Trunk](https://trunkrs.dev). Build twice, once with the `webgpu` feature and once for WebGL2, and serve a tiny loader page that picks one based on `navigator.gpu`. Read launch options (like which modes start on) from the URL, so one build can serve many presets. That's how every [/play/](/play/) page on this site works.

## Share it
When it runs, [submit it to AI Game Mashups](https://github.com/andrewnakas/aimashups/blob/main/CONTRIBUTING.md).

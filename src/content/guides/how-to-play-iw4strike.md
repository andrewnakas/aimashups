---
title: "How to install and play iw4Strike (Counter-Strike on MW2's maps)"
summary: "Download the Windows or Linux build, point it at MW2 and Counter-Strike: Source, then the controls, bots, map names and defusal."
date: 2026-10-14
mashup: iw4strike
difficulty: easy
time: "15 minutes"
---
[iw4Strike](/mashups/iw4strike/) plays Counter-Strike on Modern Warfare 2's maps. This guide follows the README of [Gh4zi/iw4Strike](https://github.com/Gh4zi/iw4Strike). It's an alpha. New to mods? Read [Start here](/guides/start-here-playing-game-mashups/) first.

## 1. What you need
- **Call of Duty: Modern Warfare 2** (2009) on Steam, for its maps and engine data.
- **Counter-Strike: Source** on Steam for the guns, sounds and HUD. Condition Zero or CS 1.6 work as fallbacks.
- **Windows or Linux**. The Linux build is built automatically but hasn't been played yet; on Linux, install MW2 through Steam Play (Proton).

## 2. Install
1. Download the Windows `.zip` or Linux `.tar.gz` from the [releases](https://github.com/Gh4zi/iw4Strike/releases).
2. Windows: extract and run `iw4strike.exe`. Linux: extract and run `./iw4strike`.
3. A **game folders** window shows the MW2 and Counter-Strike installs it found in your Steam libraries. Use **Browse...** for anything missing (CS 1.6 is never searched for: pick your `Half-Life` folder), then press **Play**.

It only reads those folders. To change games later, use **Manage Game Paths** on the main menu (it restarts the game).

## 3. Controls

| Key | Does |
|---|---|
| W A S D / Space | Move / jump |
| Ctrl / Shift | Crouch / walk |
| Mouse 1 | Fire, knife slash, throw a grenade |
| Mouse 2 | Scope, silencer, burst, knife stab, lob a grenade |
| R | Reload |
| E | Defuse (hold) / pick up the gun you look at |
| G | Drop gun or the C4 |
| 1–5 | Primary, pistol, knife, grenades, C4 |
| B | Buy menu |
| F1 / F2 | Autobuy / rebuy |
| Tab | Scoreboard |

Keys still MW2's? Run `binddefaults` in the console.

## 4. Matches and bots
**Create Game** offers Free-for-all, Team Deathmatch and Search and Destroy (Defusal). From the console: `map mp_rust` loads a map, `bot add 5` adds bots, `bot dummy 5` adds standing targets and `force_match_start` skips the countdown. Bots don't carry, plant or defuse the bomb yet.

## 5. Reporting bugs
The author is the only tester so far. Report problems in [Issues](https://github.com/Gh4zi/iw4Strike/issues) with the map, mode and `iw4l-artifacts/logs/latest.log`.

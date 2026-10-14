---
title: "How to install and play SkateGM (Skate 3 in Garry's Mod)"
summary: "Step by step: the x86-64 Garry's Mod branch, the Workshop add-on, converting your Skate 3 disc with the installer, controls, minigames, Skate 3 maps and multiplayer."
date: 2026-10-13
updated: 2026-10-13
mashup: skategm
difficulty: easy
time: "20 minutes"
---
[SkateGM](/mashups/skategm/) runs Skate 3's board physics, tricks and scoring inside Garry's Mod. This guide follows **9.0** from [the-schwilliam/SkateGM](https://github.com/the-schwilliam/SkateGM/releases). There's also an [official installation tutorial on YouTube](https://www.youtube.com/watch?v=5UXgyk4Bs0A). New to mods? Read [Start here](/guides/start-here-playing-game-mashups/) first.

## 1. What you need
- **Windows** and **Garry's Mod on the x86-64 branch**: in Steam, right-click Garry's Mod > Properties > Betas and choose **x86-64**.
- **Your own Xbox 360 copy of Skate 3**, dumped by you: the disc image (`.iso`) or an extracted folder with `default.xex`. Nothing from Skate 3 is included.
- **A controller** works best (Xbox, PlayStation, Switch Pro and most others). Keyboard works too.

## 2. Install
1. Subscribe to **SkateGM** on the [Steam Workshop](https://steamcommunity.com/workshop/browse/?appid=4000&searchtext=SkateGM).
2. Download `SkateGM-Setup-<version>.exe` from the [latest release](https://github.com/the-schwilliam/SkateGM/releases/latest).
3. Close Garry's Mod and run the installer.
4. Pick your Skate 3 `.iso` (or `default.xex`) and press **Install**. It converts your game files on your PC and installs the engine module, which the Workshop can't carry. If it can't find Garry's Mod, choose the folder that has `garrysmod` in it.
5. Optional: tick **Generate maps (slow)** to build Skate 3's parks as Garry's Mod maps (10–15 minutes for all of them).

Not using the Workshop? Tick **Install add-on** and the installer installs the add-on too.

## 3. Play
- **SkateGM gamemode:** pick it from the gamemode list. Every player is put in Skater mode.
- **Any other gamemode:** open the console and type `bind j skategm_toggle` once. **J** then switches Skater mode on and off.

The first start takes a while to load. Controller not working? Turn off Steam Input for Garry's Mod (Properties > Controller > **Disable Steam Input**).

## 4. Controls
Skate 3's own controller controls work as in the game. Hold **LB** for the extras:

| Button | Does |
|---|---|
| LB + D-pad down / up | Set a marker / hold to go back to it |
| LB + D-pad left | Minigames: host or join |
| LB + D-pad right | Players: spectate, teleport to or join someone |
| LB + right stick | Skate 3 music: pause/play, skip, restart, volume |
| LB + A | Settings |
| LB + Y | Map |
| LB + B | Park editor |
| LB + X | Respawn |
| LB + RB | Replays |
| Hold right stick click | Rocket board (if on in Settings > Board) |

On keyboard: **W/Space** push, **S** brake, **A/D** steer, **Q/E** grabs, **F** on/off board, **arrow keys** flick-it tricks, **R** respawn, **Ctrl** rocket board, **Z** menu. The README has the full table.

## 5. Minigames and maps
Host a minigame with LB + D-pad left. There are 22, including Race, S.K.A.T.E., Hot Potato, Hall of Meat, Trick Bingo, Copycat and Board Golf. If you built the maps, they show up as `sgm_skate3_portcarverton` (all of Port Carverton), `sgm_skate3_university`, `sgm_skate3_maloof` and others. `sgm_skate2_newsanvan` needs your Skate 2 disc too.

## 6. Multiplayer
Everyone who wants to skate subscribes on the Workshop and runs the installer on their own PC. A dedicated server only needs the add-on. To host a Skate 3 map, copy `garrysmod/addons/skategm_maps` from a PC that built it.

## 7. Update and uninstall
Steam updates the add-on. Run a new installer when SkateGM says its engine module is older than the add-on, and tick "Keep the game data I already converted" to skip the conversion. To uninstall, unsubscribe, then run the installer and press **Uninstall**.

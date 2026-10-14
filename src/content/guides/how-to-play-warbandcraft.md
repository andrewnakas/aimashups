---
title: "How to install and play WarbandCraft (Minecraft in Mount & Blade: Warband)"
summary: "The macOS setup for this experimental prototype: v0.1.0, the optional 0.2.1 patch, F8 to switch to Steve, controls and known limits."
date: 2026-10-14
mashup: warbandcraft
difficulty: hard
time: "45 minutes"
---
[WarbandCraft](/mashups/warbandcraft/) runs real Minecraft Java beside native macOS Mount & Blade: Warband and draws Steve inside Warband's battles. It's an experimental prototype, and its own README calls it "A Failed Mac integration", so expect rough edges. This guide follows the release notes and README on [frankstop/WarbandCraft](https://github.com/frankstop/WarbandCraft). New to mods? Read [Start here](/guides/start-here-playing-game-mashups/) first.

## 1. What you need
- **A Mac** and Steam's native Intel macOS **Mount & Blade: Warband 1.174** (it runs under Rosetta).
- **Minecraft Java** on your own account (the bridge uses Minecraft 1.21.1 with Fabric).
- **Prism Launcher** and **Java 21**.

No game files, accounts or saves are included.

## 2. Install v0.1.0
1. Download `WarbandCraft-v0.1.0-macos.zip` from the [releases](https://github.com/frankstop/WarbandCraft/releases) and extract it.
2. With Warband closed, run **Setup WarbandCraft.command** once. It patches a copy of Warband's Native module into a separate **WarbandCraft** module and sets up a separate Prism instance; your other modules and Prism worlds are kept.
3. Make sure Steam is running, then open **Play WarbandCraft.command**.

## 3. Optional: the 0.2.1 patch
0.2.1 fixes holes in the depth composition, collider scale and world-switch hangs. Close both games, extract `WarbandCraft-0.2.1-patch.zip` into your existing WarbandCraft project folder, and open **Play WarbandCraft 0.2.1.command**. It starts a separate WarbandCraft-Next module and Prism instance; the old launcher still works.

## 4. Play
Start a custom battle or load a campaign yourself. In a 3D scene, press **F8** (Fn+F8 on a Mac keyboard) to switch to Steve. The bridge world starts in Creative; type `/gamemode survival` for real crafting and damage.

| Key | Does |
|---|---|
| F8 | Switch Steve / Warband input and camera |
| WASD, mouse, Space, Shift | Minecraft movement, jump, sneak |
| E | Minecraft inventory |
| Right / left click | Use or place / attack or break |
| 1–9 / wheel | Hotbar |
| F5 | First-person / third-person Steve |
| F9 | Bridge status |
| Alt+1 / 2 / 3 / 0 | Select infantry / archers / cavalry / everyone |
| Alt+F1 to F5 | Hold / follow / charge / hold fire / advance |
| T | Minecraft chat and commands |

## 5. Known limits
Windowed 1280 × 720 with antialiasing off is the tested setup. Warband's soldiers don't collide with Minecraft blocks, Warband's own terrain can't be mined, and fullscreen, other modules and multiplayer haven't been tested. Logs are in `WarbandCraft/logs/native.log` and Prism's `instances/WarbandCraft/minecraft/` folder.

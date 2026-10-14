---
title: "How to install and play HL2Minecraft (Minecraft in Half-Life 2)"
summary: "Step by step: Minecraft 26.3 with Fabric, ReShade with add-on support in Half-Life 2, the auto-installing mod JAR, and controls."
date: 2026-10-14
mashup: hl2minecraft
difficulty: medium
time: "20 minutes"
---
[HL2Minecraft](/mashups/hl2minecraft/) draws Minecraft's blocks, mobs and HUD inside Half-Life 2. This guide follows the README of [ShadowBlade83/HalfLife2Minecraft](https://github.com/ShadowBlade83/HalfLife2Minecraft). It's a different mod from [HalfCraft](/mashups/halfcraft/). New to mods? Read [Start here](/guides/start-here-playing-game-mashups/) first.

## 1. What you need
- **Half-Life 2** on Steam (Windows).
- **Minecraft Java 26.3** with **Fabric Loader 0.19.5+** and **Fabric API**, for example in Prism Launcher.
- **ReShade 6.x with full add-on support**, from [reshade.me](https://reshade.me/#download).

## 2. Install
1. Download the `hl2craft-<version>.jar` from the [releases](https://github.com/ShadowBlade83/HalfLife2Minecraft/releases) and put it in your Minecraft instance's `mods` folder.
2. Run the ReShade installer, point it at `hl2.exe` (`Steam\steamapps\common\Half-Life 2\hl2.exe`), choose **DirectX 9** and finish.
3. Start Minecraft. The mod finds Half-Life 2, installs the `HL2Minecraft.addon32` ReShade add-on bundled inside the JAR and launches Half-Life 2 for you. If HL2 is in a custom folder, a setup screen asks you to pick it.
4. Start a new game or load any map in Half-Life 2. The Minecraft world and HUD follow your position.

## 3. Controls (in the Half-Life 2 window)

| Key | Does |
|---|---|
| W A S D | Move |
| Space | Jump (double-tap for creative flight, or to open the Elytra in mid-air) |
| Left Shift | Sneak / crouch |
| Left Ctrl | Sprint |
| Left mouse | Attack / mine blocks |
| Right mouse | Place blocks / use items / draw bow / block with shield |
| Wheel / 1–9 | Hotbar slot |
| E | Inventory |
| Q | Drop item |
| F | Swap with offhand |
| T or / | Chat / commands |
| Esc | Close menus / pause |

Placed blocks and spawned mobs are cleared when you change map or reload a save; your Minecraft inventory is kept.

---
title: "How to install and play Killcraft (Minecraft inside ULTRAKILL)"
summary: "Step by step: BepInEx 5 for ULTRAKILL, where the Killcraft zip goes, the first-run Minecraft sign-in, controls, the Nether, settings and known limits."
date: 2026-10-10
mashup: killcraft
difficulty: easy
time: "20 minutes"
---
[Killcraft](/mashups/killcraft/) puts a Minecraft player into ULTRAKILL's levels. It's built on SkyCraft: a real Minecraft runs hidden in the background, and ULTRAKILL draws its player, HUD, blocks and items. This guide follows **v1.0.1** from [goonsn/Killcraft](https://github.com/goonsn/Killcraft/releases). New to mods? Read [Start here](/guides/start-here-playing-game-mashups/) first.

## 1. What you need
- **ULTRAKILL** on Steam.
- **BepInEx 5** for ULTRAKILL: `BepInEx_win_x64_5.4.x.zip` from the [BepInEx releases](https://github.com/BepInEx/BepInEx/releases), unzipped into the ULTRAKILL folder. Start the game once so BepInEx sets itself up.
- **A Microsoft account that owns Minecraft: Java Edition.**

You don't need SkyCraft or Skyrim. The Killcraft zip already includes SkyCraft's Minecraft bundle (`SkyCraft-Minecraft.zip`, a portable Prism Launcher with the SkyCraft instance). Minecraft and Java download by themselves the first time.

## 2. Install
1. Download `Killcraft-1.0.1.zip` from the [Releases page](https://github.com/goonsn/Killcraft/releases).
2. Unzip it into `ULTRAKILL\BepInEx\plugins\`, so you end up with `ULTRAKILL\BepInEx\plugins\Killcraft\Killcraft.dll`.
3. Leave `SkyCraft-Minecraft.zip` in that folder, still zipped. Keep `killcraft-mc.jar` there too: Killcraft copies it into Minecraft by itself.

## 3. First launch
1. Start ULTRAKILL. Killcraft unpacks and starts Minecraft by itself, hidden.
2. **The first time**, Prism Launcher asks you to sign in to your Microsoft account. Minecraft and Java then download, which takes a few minutes.
3. Start any level. After a moment Minecraft takes over V1.

## 4. Controls
Minecraft's own controls work (WASD, Space, Shift, mouse buttons, 1–9, E inventory, Q drop). On top of those:

| Key | Does |
|---|---|
| F9 | Turn Minecraft off (plain ULTRAKILL with your guns) and back on |
| F5 | Third person: behind you, then in front, then back to first person |
| O | Minecraft's menu (options) |
| Esc | ULTRAKILL's pause menu. It pauses and mutes Minecraft too, or closes an open Minecraft screen |

Dying in Minecraft is dying in ULTRAKILL, and the other way round. You respawn at ULTRAKILL's checkpoint.

## 5. Things to try
- **The Nether:** type `/give @s minecraft:obsidian 14`, build a portal anywhere in a level, light it with flint and steel, and stand in it for 3 seconds. Any Nether portal brings you back to the one you came through.
- **Potion of ULTRAKILL:** move like V1 for two minutes. Craft it from a glass bottle, sugar, a feather and redstone, take it from the creative menu's Killcraft tab, or `/give @s killcraft:ultrakill_potion`.
- **SMILEOS Shop block:** iron ingots around a glass pane with redstone below, or `/give @s killcraft:smileos_terminal`. ULTRAKILL's real shop stands there.
- **Mobs on your side:** spawn eggs give you zombies, skeletons, iron golems, wolves and more that go after ULTRAKILL's enemies.

## 6. Settings
Killcraft makes `ULTRAKILL\BepInEx\config\dev.killcraft.cfg` on the first start. A few useful ones:

| Setting | Default | Does |
|---|---|---|
| `ToggleMinecraft` | `F9` | The key that turns Minecraft off and on |
| `FreshWorldEachLaunch` | `true` | Fresh world and starting kit every session. `false` keeps your builds and inventory |
| `MobsAttackYouInLevels` | `false` | Minecraft mobs attack you in levels too |
| `NetherEnemies` | `6` | ULTRAKILL enemies around you at a time in the Nether (0: none) |
| `BlockBrightness` | `1.0` | Lower it if blocks look too bright in dark levels |
| `StartWithUltrakill` | `true` | Start Minecraft when ULTRAKILL starts |

The README lists the rest, including damage multipliers and Discord status.

## 7. Known limits
- ULTRAKILL's weapons, movement tech and style meter aren't used while Minecraft has the player. F9 switches back.
- Blocks don't get the level's baked lighting, so they can look bright in dark levels. See `BlockBrightness`.
- ULTRAKILL's enemies only attack V1, never Minecraft mobs.
- Friendly mobs walk straight at enemies. They can't path around walls or up to other floors.
- Holding right click (shield, bow, eating) stops left clicks attacking, as in Minecraft.
- Flint and steel lights ULTRAKILL floors only from the side: aim at the bottom of a wall just above the floor, or at the side of a step.
- An ender pearl thrown more than about 36 blocks comes back to you.
- Look-only effects (night vision, blindness, invisibility) don't show in ULTRAKILL.

## 8. Update
Unzip the new version into `ULTRAKILL\BepInEx\plugins\` over the old one.

## No ULTRAKILL? Play the tribute
Start with [SkyCraft](/mashups/skycraft-minecraft-in-skyrim/), the Minecraft-in-Skyrim mod Killcraft is built on, or its browser tribute [Blockrealm](/play/blockrealm/).

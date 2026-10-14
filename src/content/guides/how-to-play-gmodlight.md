---
title: "How to install and play GModLight (Garry's Mod in Dying Light)"
summary: "The Garry's Mod 64-bit branch, the one-click Install.bat, F2 for the physgun, controls and Workshop weapon packs."
date: 2026-10-14
mashup: gmodlight
difficulty: easy
time: "10 minutes"
---
[GModLight](/mashups/gmodlight/) puts Garry's Mod's physgun, weapons and spawn menu into Dying Light. This guide follows **v0.1.0** from [GooseMcGee/DyingLight-GMod](https://github.com/GooseMcGee/DyingLight-GMod/releases). New to mods? Read [Start here](/guides/start-here-playing-game-mashups/) first.

## 1. What you need
- **Dying Light** and **Garry's Mod** on Steam (Windows).
- Garry's Mod on the 64-bit branch: Garry's Mod > Properties > Betas > **x86-64 - Chromium + 64-bit binaries**.

## 2. Install
1. Download `GModLight-<version>.zip` from the [latest release](https://github.com/GooseMcGee/DyingLight-GMod/releases/latest).
2. Close both games, unzip and double-click **Install.bat**. It finds both games through Steam.
3. Start Dying Light from Steam. Garry's Mod starts by itself, hidden, at Dying Light's main menu. Load in and press **F2**.

**Single player only.** Set Dying Light's game visibility to private and don't join or host co-op with it installed.

## 3. Controls

| Key | Does |
|---|---|
| F2 | Garry's Mod hands on/off |
| F1 / hold Q | Spawn menu: weapons, entities, vehicles |
| Hold C | Context menu |
| Mouse buttons | Fire; physgun grab / freeze |
| Mouse wheel | Weapon wheel; push or pull what the physgun holds |
| 1–0 | Weapon slots |
| R / E / Z | Reload (unfreeze) / use (rotate with the physgun) / undo |
| F7 | Hide or show everything Garry's Mod draws |

Keys and options (frame cap, damage scale and more) are in `GModLight.ini` in the Dying Light folder.

## 4. More guns
Subscribe to a pack like M9K on the Steam Workshop and set `Workshop=1` under `[GMod]` in `GModLight.ini`; its weapons appear in the spawn menu's Weapons tab. Keep Workshop subscriptions small, since Garry's Mod can crash at start with many add-ons. Vehicles can be spawned and physgunned but not driven yet.

## 5. Update, uninstall and problems
To update, run the new version's Install.bat (your INI is kept). To uninstall, run **Uninstall.bat**. For problems, [open an issue](https://github.com/GooseMcGee/DyingLight-GMod/issues) with `Dying Light\GModLight.log` and `GarrysMod\garrysmod\gmodlight.log`.

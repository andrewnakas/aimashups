---
title: "How to install and play OWCraft (Minecraft in Outer Wilds)"
summary: "OWML, Fabric 26.3 and the OWCraft jar: install both halves, land on a planet, press F6, and build on Timber Hearth."
date: 2026-10-09
mashup: owcraft
difficulty: medium
time: "20 minutes"
---
[OWCraft](/mashups/owcraft/) puts real Minecraft on the planets of Outer Wilds. This guide follows **v0.1.1** from [Yaekai/OWCraft](https://github.com/Yaekai/OWCraft/releases). New to mods? Read [Start here](/guides/start-here-playing-game-mashups/) first.

## 1. What you need
- **Windows** and **Outer Wilds on Steam**. The project doesn't name a specific game version.
- **Outer Wilds Mod Manager (OWML).** Start Outer Wilds from it once before installing.
- **Minecraft: Java Edition 26.3** with **Fabric Loader 0.19.5+** and **Fabric API** for 26.3.
- From the release: `Yaekai.OWCraft-0.1.1.zip` and `skycraft-0.1.2+owcraft.5.jar`.

## 2. Install
1. Unzip `Yaekai.OWCraft-0.1.1.zip` into `%AppData%\OuterWildsModManager\OWML\Mods\`, so you end up with `Mods\Yaekai.OWCraft`.
2. Put `skycraft-0.1.2+owcraft.5.jar` and Fabric API into your `.minecraft\mods` folder. If an older `+owcraft.1` jar is there, remove it.

## 3. Play
1. Start Minecraft with your **Fabric** profile in the normal launcher.
2. Start Outer Wilds from the **Mod Manager**.
3. Minecraft opens a void world and waits. Fly to a planet, stand on the ground and press **F6**.

Press F6 again to get back into your spacesuit. Whatever you built stays on the planet.

## 4. Controls
| Key | Does |
|---|---|
| F6 | Enter or leave Minecraft mode |
| O | Minecraft menu |
| F5 | Third person |
| Esc | Pause, or close a Minecraft screen |

You can change the toggle and menu keys, the FPS cap (default 60), walk speed (default 6.0) and verbose logging in the Mod Manager's settings for OWCraft.

## 5. Known limits
- Translucent blocks are drawn opaque.
- The Outer Wilds player doesn't collide with placed blocks.
- There's no day/night sync, and no Nether or other dimensions.
- Mobs only appear within about 40 blocks.
- Giant's Deep islands aren't solid while you fly over them.

It has been tested on one Windows PC so far. If something breaks, open an issue with your OWML log and Minecraft's `logs/latest.log`.

## 6. Uninstall
The project doesn't document this. Removing the `Mods\Yaekai.OWCraft` folder and the jar from `.minecraft\mods` takes out both halves.

## No Outer Wilds? Play the tribute
The [Voxel Portal Sandbox](/play/voxel-x-portals/) is a clean-room block-building tribute you can play in your browser.

---
title: "How to install and play SM64Craft (Super Mario 64 Coop DX inside Minecraft)"
summary: "Step by step: the Fabric instance, the in-game dependency installer and your own ROM, Mario's moves on Minecraft keys, and co-op with friends."
date: 2026-10-14
mashup: sm64craft
difficulty: medium
time: "20 minutes"
---
[SM64Craft](/mashups/sm64craft/) shows a Super Mario 64 Coop DX game inside Minecraft. This guide follows the (Portuguese) README of [GuiiDEV1/SM64Craft](https://github.com/GuiiDEV1/SM64Craft). New to mods? Read [Start here](/guides/start-here-playing-game-mashups/) first.

## 1. What you need
- **Windows 10 or 11, 64-bit**, and an internet connection.
- **Minecraft Java 26.3** in a Fabric instance with **Fabric Loader**, **Fabric API** and **Java 25**. The SM64Craft installer doesn't set these up for you.
- **Your own US Super Mario 64 ROM** (`.z64`, `.n64` or `.v64`). It's never included or uploaded.

## 2. Install
1. Put the JAR from the [latest release](https://github.com/GuiiDEV1/SM64Craft/releases/latest) in your Fabric instance's `mods` folder and start Minecraft.
2. On the main menu, click **Install dependencies**, then **Open sm64craft folder**.
3. Copy your US ROM into that folder, go back to the game and click **Install dependencies** again. It checks the region, makes a working copy of the ROM, downloads the official SM64 Coop DX release, applies the patch and installs e4mc into the instance.
4. Restart Minecraft so e4mc loads. The mod's button on the main menu opens SM64 Coop DX's menu inside Minecraft.

## 3. Controls
Minecraft's normal controls still work. Mario's moves:

| Move | Input |
|---|---|
| Double / triple jump | Space as you land; run to finish the triple |
| Long jump | Shift + Space while running |
| Backflip | Shift + Space standing still |
| Wall kick | Space in the air against a wall |
| Ground pound | Hold Shift as you land |
| Talk or pick up | Right click |
| Steer slide, cannon or shell | WASD + mouse; Space to let go |
| SM64 pause menu | P |
| Change view | F5 |
| Diagnostics line | F7 |

## 4. Co-op
1. Everyone installs the same JAR and supplies their own US ROM.
2. The host opens a Minecraft world to LAN and starts a room from SM64 Coop DX's menu.
3. Each friend joins the room from SM64's multiplayer menu, and the mod connects their Minecraft to the host's world through e4mc. If that needs help, type `/join <address>` in chat; `/leave` goes back to your own session.

No separate Minecraft server or port forwarding is needed. The README says play across separate PCs and full runs of every course haven't been fully tested yet.

## 5. Your files and uninstalling
Everything is stored in the instance's folder: `sm64craft/baserom.us.z64` (the checked ROM copy), `sm64craft/saves/` (SM64 progress) and `sm64craft/install.log`. To uninstall, close Minecraft and remove the SM64Craft JAR from `mods` (and e4mc, if nothing else uses it). Deleting `sm64craft/` also deletes your SM64 saves and the ROM copy there, so back it up first.

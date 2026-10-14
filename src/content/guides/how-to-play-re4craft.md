---
title: "How to install and play RE4Craft (Minecraft in Resident Evil 4)"
summary: "Step by step: the RE4 UHD build and Minecraft 26.3 you need, Setup.cmd and Play.cmd, the F8 switch, AZERTY controls, campaign loot and where the logs are."
date: 2026-10-13
updated: 2026-10-13
mashup: re4craft
difficulty: medium
time: "20 minutes"
---
[RE4Craft](/mashups/re4craft/) runs a hidden Minecraft inside the original Resident Evil 4 UHD. This guide follows **0.2.0-alpha.2** from [Utimaa/ResidentCraft4](https://github.com/Utimaa/ResidentCraft4/releases). The author calls it highly experimental and vibe-coded, so expect problems. New to mods? Read [Start here](/guides/start-here-playing-game-mashups/) first.

## 1. What you need
- **Windows.**
- **The original Resident Evil 4 UHD on Steam**: the 32-bit build, tested as version 1.1.0.
- **Minecraft: Java Edition 26.3**, installed in the official Minecraft Launcher and opened once.
- An internet connection the first time, if Setup needs to download a portable Java 25 runtime (about 58 MB).

## 2. Install
1. In the official Minecraft Launcher, install **26.3**, open it once and close it. That installs its Java runtime, libraries and assets.
2. Download `RE4Craft-0.2.0-alpha.2-Windows.zip` from the [release](https://github.com/Utimaa/ResidentCraft4/releases) and extract it to a folder you can write to. Keep that folder where it is after setup.
3. Close RE4 and double-click **Setup.cmd**. If Windows says access is denied, right-click it and choose **Run as administrator**.

If Setup can't find a game, run it from PowerShell with the paths:

```powershell
.\release\Setup.ps1 -GamePath 'D:\SteamLibrary\steamapps\common\Resident Evil 4' -MinecraftPath "$env:APPDATA\.minecraft"
```

## 3. Play
1. Double-click **Play.cmd**. Minecraft starts with a hidden window, in its own private world. Your normal Minecraft worlds and mods aren't touched.
2. Load an RE4 campaign save and wait for the bridge to connect.
3. Press **F8**.

When you're done, close RE4 normally and Play saves and shuts Minecraft down. **StopMinecraft.cmd** does the same by hand.

## 4. Controls
The controls keep an AZERTY layout.

| Key | Does |
|---|---|
| F8 | Minecraft mode on / off |
| Z / Q / S / D | Move |
| Space | Jump |
| Left Shift / Left Ctrl | Sneak / sprint |
| X | Inventory |
| F5 | First person / rear / front third person |
| Left / right mouse | Attack or mine / use or place |
| T | Chat |

## 5. Campaign loot
Enemies and crates drop Minecraft supplies matched to the chapter: wood in chapter 1, stone in 2, iron in 3, diamond in 4, then netherite upgrade materials, enchanted books and XP in 5 and 6-1. New worlds start with wooden tools, a shield, a bow and arrows.

## 6. If something goes wrong
- Nothing happens with F8: check `Bin32\RE4Craft.log` in the RE4 folder and `.instance\logs\latest.log` in the extracted release. Startup errors are in `.re4craft\last-error.txt`.
- The background client stopped: run **Play.cmd** again while RE4 stays open.
- Make sure Minecraft **26.3** was opened once in the official Launcher.

## 7. Uninstall
Close both bridge processes and run **Uninstall.cmd**. Your private world and backups are kept.

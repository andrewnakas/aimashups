---
title: "How to install and play GrandTheftMinecraft (Minecraft creative in GTA V)"
summary: "Step by step: ScriptHookV and OpenIV.asi, installing the .oiv package, the one restart after first setup, controls, config.ini settings and uninstalling."
date: 2026-10-13
updated: 2026-10-13
mashup: grand-theft-minecraft
difficulty: easy
time: "15 minutes"
---
[GrandTheftMinecraft](/mashups/grand-theft-minecraft/) puts Minecraft's creative mode into GTA V story mode. It doesn't run Minecraft. It reads Minecraft's textures and sounds from your own install, or downloads the official 1.21.11 files from Mojang. This guide follows **1.5.1** from [cyteon/GrandTheftMinecraft](https://github.com/cyteon/GrandTheftMinecraft/releases). New to mods? Read [Start here](/guides/start-here-playing-game-mashups/) first.

## 1. What you need
- **GTA V Legacy** (Steam, Rockstar or Epic), **story mode only**. GTA V Enhanced isn't supported.
- **[ScriptHookV](https://www.dev-c.com/gtav/scripthookv/)** matching your game version (it includes the ASI loader, `dinput8.dll`).
- **[OpenIV](https://openiv.com/)** with **OpenIV.asi** installed: OpenIV > Tools > ASI Manager > OpenIV.asi > Install.
- An internet connection on the first launch, unless Minecraft Java 1.21.11 is already installed on the PC.

Never use mods in GTA Online. The mod switches itself off if an online session starts, but play story mode with BattlEye disabled: add `-nobattleye` to `args.txt` in the GTA folder.

## 2. Install
1. Install ScriptHookV and OpenIV.asi.
2. Download `GrandTheftMinecraft-1.5.1.oiv` from the [Releases page](https://github.com/cyteon/GrandTheftMinecraft/releases).
3. In OpenIV, open **Tools > Package Installer**, choose the `.oiv` and install it **to the mods folder**.
4. Start GTA V and load story mode. The top-left corner shows the setup for a few seconds while the mod builds its textures and sounds from your Minecraft 1.21.11, or downloads them from Mojang.
5. **Restart GTA once** when it says so. Textured blocks load from the second launch on.

There's also a manual-install zip on the Releases page, with an `INSTALL.txt` inside.

## 3. Controls
| Key | Does |
|---|---|
| F6 | Minecraft mode on / off |
| 1–9, mouse wheel | Hotbar slot |
| Left mouse | Break a block / hit (the sword ragdolls people) |
| Right mouse | Place a block / use the item (hold to draw a bow) |
| Middle mouse | Pick the block you're looking at |
| E | Creative inventory |
| Space twice | Creative flight: Space up, Ctrl down, Shift faster |
| F9 | Debug overlay |

In a vehicle the hotbar stays, but GTA's driving controls are untouched. To wear the elytra, right-click it, jump off something and press Space. Fireworks boost you. Build the Wither like in Minecraft: a T of soul sand with three wither skeleton skulls on top.

## 4. Settings
`GrandTheftMinecraft\config.ini` is created on first launch. Edit it with the game closed. Useful settings: `StartEnabled` (Minecraft mode on at start), `Invincible` and `NoWanted`, `PlayAsSteve`, `SkinFile` (your own 64×64 skin PNG), and `MaxBlockProps` / `PropRadius` (how many nearby blocks become real GTA objects, since GTA gets unstable past about 1,500 script objects).

## 5. If something goes wrong
- **Nothing happens:** check that `asiloader.log` in the GTA folder lists `GrandTheftMinecraft.asi` and `OpenIV.asi`, and that ScriptHookV matches your game version.
- **Blocks look flat and unlit:** restart GTA once after the first setup. If it persists, OpenIV.asi isn't loading the mods folder, or the `.oiv` wasn't installed to `mods`.
- **"Couldn't get Minecraft 1.21.11":** install 1.21.11 with any launcher, or set `MinecraftJar` in `config.ini`.
- Everything else: `GrandTheftMinecraft\gtm.log` explains what the mod did.

## 6. Update and uninstall
To update, install the new `.oiv` the same way. Your builds (`world.txt`) and settings are kept. To uninstall, delete `GrandTheftMinecraft.asi`, the `GrandTheftMinecraft` folder and `mods\update\x64\dlcpacks\gtm`, and remove the `dlcpacks:/gtm/` line from `mods\update\update.rpf\common\data\dlclist.xml` in OpenIV.

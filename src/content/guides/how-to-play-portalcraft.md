---
title: "How to install and play Portalcraft (Minecraft in Portal 2)"
summary: "Step by step: what you need on Windows or Linux, the launcher's setup and Prism sign-in, Continue and New game, keys, console commands and known issues."
date: 2026-10-13
updated: 2026-10-13
mashup: portalcraft
difficulty: easy
time: "15 minutes"
---
[Portalcraft](/mashups/portalcraft/) plays Portal 2's campaign as a Minecraft player. This guide follows **0.2.0** from [Stink-O/portalcraft](https://github.com/Stink-O/portalcraft/releases). The author calls it experimental and "still quite broken", and Windows support is new. New to mods? Read [Start here](/guides/start-here-playing-game-mashups/) first.

## 1. What you need
- **Windows 10 or 11 (64-bit)** or **64-bit Linux**, with Steam. On Linux, use Steam's normal package: Flatpak Steam can't load the plugin yet.
- **Portal 2** on Steam: the Windows version on Windows, the native Linux version on Linux (don't force it through Proton).
- **A Microsoft account that owns Minecraft: Java Edition.** The launcher downloads Minecraft 26.3 and Java for you.
- About **3 GB** of free disk space and a PC that can run two games at once.

## 2. Install
1. Download `Portalcraft-0.2.0-Windows.zip` or `Portalcraft-0.2.0-Linux.zip` from the [latest release](https://github.com/Stink-O/portalcraft/releases/latest) and unzip the whole folder somewhere you'll keep it. Keep the launcher and the `files` folder together.
2. Open the launcher. **Windows:** double-click `Portalcraft.exe`. It isn't code-signed, so SmartScreen may warn you: click **More info**, then **Run anyway**. **Linux:** run `Portalcraft` (`chmod +x Portalcraft` if it won't start).
3. Press **Set up Portalcraft**. It finds Portal 2, installs the included Prism Launcher and sets up a profile with Fabric and the mod. Nothing is added to your Portal 2 install.
4. Sign in to Minecraft in the Prism window that opens: account button > **Manage Accounts** > **Add Microsoft**, then type the code at [microsoft.com/link](https://www.microsoft.com/link).
5. Wait while Prism downloads Minecraft and Java and the launcher unpacks Minecraft's textures from your copy.

## 3. Play
Close Portal 2 first, then open the launcher.
- **Continue** picks up the last campaign level you played with Portalcraft.
- **New game** starts the campaign from the first level, optionally with a fresh Minecraft world.
- **Start as** picks who you are when a level loads: the Minecraft player or Chell.

The launcher starts a hidden Minecraft, then Portal 2 through Steam with the plugin, and says **Ready** when they're linked. The first launch takes a few minutes while Minecraft makes your world.

## 4. Keys
| Key | Does |
|---|---|
| J | Switch between the Minecraft player and Chell |
| G | Hold while Chell fires a portal: its partner opens onto the Minecraft world. As the Minecraft player, G also uses buttons and cubes |
| H | Hold half a second in Minecraft: back to the last chamber spot you stood on |
| E | Minecraft inventory |
| O | Minecraft's pause menu |
| Mouse wheel, 1–9 | Hotbar |
| Left / right click | Mine and attack / place and use (right click also picks up cubes) |
| F5 | Third person |
| F8 | Mark a bug and save a replay |
| ` | Portal 2's console |

Useful console commands: `crosshair 1` brings back the portal reticle, `pc_reset` clears your portals, and `pc_dig 0` turns wall digging off.

## 5. Known issues
- The Minecraft world shows smearing, swirling leaves and stretched edges on every build, mostly when you go through a portal into it.
- Windows has only been played on one PC.
- Not every campaign map has been played through as the Minecraft player.
- If Steam shows a pop-up that stops the game starting, click it away and press **RETRY**.

To report a bug, press F8 where it happened, then **Send a bug report** in the launcher and attach the zip to an issue.

## 6. Update and uninstall
Updates arrive through the launcher ("A Portalcraft update is ready"). Everything lives in `%LOCALAPPDATA%\Portalcraft` on Windows and `~/.local/share/portalcraft` on Linux. Deleting that folder removes Portalcraft completely, including its world.

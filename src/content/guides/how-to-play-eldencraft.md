---
title: "How to install and play EldenCraft (Minecraft in Elden Ring)"
summary: "Step by step: the Elden Ring version you need, the one-script setup, the first Prism sign-in, controls, Torrent, saves and troubleshooting."
date: 2026-10-13
updated: 2026-10-13
mashup: eldencraft
difficulty: easy
time: "20 minutes"
---
[EldenCraft](/mashups/eldencraft/) runs Minecraft Java inside Elden Ring, with its own progression. This guide follows **0.25.5** from [SocketByte/EldenCraft](https://github.com/SocketByte/EldenCraft/releases). The author calls it early alpha, so keep your own save backups. New to mods? Read [Start here](/guides/start-here-playing-game-mashups/) first.

## 1. What you need
- **Windows 10 or 11 x64** (build 19041 or newer).
- **Elden Ring on Steam, executable 2.7.1.0** (title-screen App Ver. 1.17.1). Newer game updates need a matching EldenCraft release.
- **A Microsoft account that owns Minecraft: Java Edition.** The launcher installs 26.3.
- Enough memory and GPU headroom to run both games at once.

It's **offline single-player only**. Online Elden Ring and Minecraft LAN or server sessions switch the bridge off.

## 2. Install and first launch
1. Download `EldenCraft-<version>-windows-x64.zip` from the [latest release](https://github.com/SocketByte/EldenCraft/releases/latest) and extract **the whole zip** to an ordinary local folder, such as `C:\Games\EldenCraft`. Not OneDrive or another cloud folder. Keep `scripts`, `config` and `payload` beside `EldenCraft.cmd`.
2. Sign in to Steam and close both games.
3. Double-click **EldenCraft.cmd**. It downloads checksum-verified portable Java, Prism Launcher, me3 and ReShade, installs the bridge and starts both games. You don't need Python, Visual Studio or system Java.
4. The first time, sign in with your Microsoft account in Prism Launcher, then close Prism to continue.
5. Minecraft makes and joins its own **EldenCraft** world. Load or create an Elden Ring character and the two games connect.

The same script is used for every later launch. If it can't find Elden Ring, pass the path: `.\EldenCraft.cmd -GamePath "D:\SteamLibrary\steamapps\common\ELDEN RING\Game\eldenring.exe"`.

## 3. Controls
| Key | Does |
|---|---|
| W A S D | Move |
| Ctrl / Shift / Space | Sprint / sneak / jump |
| Left mouse | Attack; hold to mine |
| Right mouse | Use, place, or charge a ranged weapon |
| Y | Summon or dismiss Torrent |
| R | Elden Ring interaction: ladders, doors, items, levers, Sites of Grace |
| E | Minecraft inventory |
| M / G | Elden Ring's map |
| T or / | Chat / command |
| 1–9, wheel | Hotbar |
| Q / F | Drop item / swap offhand |
| Esc | Minecraft pause menu |
| F5 | Camera view |
| F6 | Minecraft composition on / off |
| F11 | ReShade compositor on / off |

**Torrent:** press Y on solid ground in the open world or underground (not in legacy dungeons, catacombs or caves). Gallop with WASD, hold Ctrl to dash, and press Space twice to double jump. If his health runs out you're thrown off, and calling him back costs three shanks of food.

## 4. Saves and settings
- Elden Ring uses a separate **`EldenCraft.sl2`** save, and Minecraft a dedicated survival world. Existing saves are backed up to ZIPs before any change or launch.
- Runtime files, logs and backups live in `%LOCALAPPDATA%\EldenCraft`.
- Boss rewards, drops, shops and stamina are in `%LOCALAPPDATA%\EldenCraft\campaign.json`. Restart both games after editing it.
- **Updating:** extract the new release into its own folder and run its `EldenCraft.cmd`. Worlds, sign-in and settings carry over.

## 5. If something goes wrong
- **"Unsupported executable":** update Elden Ring to 2.7.1.0 in Steam and verify the files.
- **Minecraft doesn't start:** finish the Microsoft sign-in in Prism and close Prism before running the script again.
- **Blank scene:** keep Minecraft unminimised and both games on the same GPU, or launch with `-CpuFrames`.
- **ReShade opens but Minecraft is missing:** remove any separately installed ReShade from the Game folder. EldenCraft brings its own.
- For help, run **Troubleshoot.cmd** and send the `EldenCraft-support-*.zip` it makes on the project's Discord.

## 6. Known limits
HDR isn't supported. Mobs, items and your avatar can trail slightly while the camera turns. Native enemies don't path around Minecraft walls, and the campaign balance still needs full playthroughs.

---
title: "How to install and play HelloCraft (Minecraft in Hello Neighbor)"
summary: "Step by step: Prism Launcher, Install.bat and Play.bat, controls, the F4 movement switch and the known problem spots in the acts."
date: 2026-10-13
updated: 2026-10-13
mashup: hellocraft
difficulty: easy
time: "15 minutes"
---
[HelloCraft](/mashups/hellocraft/) plays Hello Neighbor as a Minecraft player. This guide follows **1.0** from [AvanindraPatil/HelloCraft](https://github.com/AvanindraPatil/HelloCraft/releases). New to mods? Read [Start here](/guides/start-here-playing-game-mashups/) first.

## 1. What you need
- **Windows 10 or 11.**
- **Hello Neighbor** on Steam.
- **A Microsoft account that owns Minecraft: Java Edition.**
- **[Prism Launcher](https://prismlauncher.org/)** (free). It sets up Java and Fabric for you.

## 2. Install
1. Install Prism Launcher, open it, sign in with your Microsoft account, then close it.
2. Download **HelloCraft-1.0.zip** from the [Releases page](https://github.com/AvanindraPatil/HelloCraft/releases) (not the "Source code" links) and unzip it anywhere.
3. Close Hello Neighbor and run **Install.bat**. It finds Hello Neighbor and Prism, installs the mod (with UE4SS) into Hello Neighbor and adds a Prism instance for Minecraft. If Windows warns about the scripts, choose **More info > Run anyway**.

The installer keeps any files it replaces as `*.before-hnmc`. Antivirus programs may warn because UE4SS loads as `dwmapi.dll` and the mod hooks the game's graphics. The source is on GitHub.

## 3. Play
Run **Play.bat** and wait. Minecraft starts hidden, then Hello Neighbor opens. Load a level and play, and keep the Play.bat window open. The first start downloads Minecraft and Java through Prism, which takes a few minutes. Closing Hello Neighbor closes Minecraft too.

## 4. Controls
Minecraft's own controls work as usual (mouse, WASD, Space, Shift, Ctrl, 1–9, E, Q, F5, T). On top of those:

| Key | Does |
|---|---|
| R (hold) | Hello Neighbor: pick up / interact |
| G | Hello Neighbor: use the held item |
| X | Hello Neighbor: throw the held item |
| Right-click | Open doors, flip switches, turn on the TV |
| Space | Jump; also push ability and skipping cutscenes |
| Esc | Hello Neighbor's menu |
| F4 | Minecraft movement on / off |
| F6 | Resync Minecraft's blocks |
| F9 | Log the cells in front of you (for bug reports) |
| `/hnreset` | Remove your blocks, mobs and items and get the starting kit back |

R, G and X can be rebound in Minecraft's controls (category "Hello Neighbor").

## 5. Known problem spots
- If you fall into the void, press **F4**, restart from the menu, and press F4 again once you're on the floor.
- The Act 1 basement chase can loop. The README recommends going straight to Act 2.
- The finale boss fight can't be finished with Minecraft movement. Press F4 and let Hello Neighbor move the player.
- Ender pearls can go into the void, and elytra flight can be glitchy.

## 6. Uninstall
Run **Uninstall.bat**.

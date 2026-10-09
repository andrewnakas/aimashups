---
title: "How to install and play SkyCraft (Minecraft in Skyrim)"
summary: "Step by step: the Skyrim version you need, SKSE and Address Library, the first-run Minecraft sign-in, controls, multiplayer and fixes for common problems."
date: 2026-10-09
mashup: skycraft-minecraft-in-skyrim
difficulty: easy
time: "20 minutes"
---
[SkyCraft](/mashups/skycraft-minecraft-in-skyrim/) runs real Minecraft inside Skyrim. This guide follows **v0.1.2** from [chasmlol/SkyCraft](https://github.com/chasmlol/SkyCraft/releases). New to mods? Read [Start here](/guides/start-here-playing-game-mashups/) first.

## 1. What you need
- **Skyrim Special Edition on the Anniversary Edition runtime** (1.6.x / 1.7.x). It's developed and tested on **1.7.104**. SE 1.5.97 and Skyrim VR don't work.
- **A Microsoft account that owns Minecraft: Java Edition.** You don't need to install Minecraft: the mod brings its own portable Prism Launcher, Minecraft 26.3, Fabric, Fabric API and e4mc, and Prism downloads Minecraft and Java itself.
- **SKSE64** for your game version.
- **Address Library for SKSE Plugins**, the *All in one (Anniversary Edition)* file ([Nexus mod 32444](https://www.nexusmods.com/skyrimspecialedition/mods/32444)).
- About **3 GB of spare RAM** and **1.5 GB of disk**.
- Strongly recommended: **Alternate Start – Live Another Life**, or a save from after Helgen. The Helgen opening can leave you stuck.

## 2. Install
1. Download `SkyCraft-<version>.zip` from the [Releases page](https://github.com/chasmlol/SkyCraft/releases).
2. Install it with **Mod Organizer 2** or **Vortex**, like any SKSE plugin.

## 3. First launch
1. Start Skyrim through **SKSE**.
2. SkyCraft unpacks Minecraft to `%LOCALAPPDATA%\SkyCraft`, and a Prism window asks you to sign in with your Microsoft account. Alt-Tab to it, sign in, then go back to Skyrim.
3. The download takes a few minutes. Messages in the corner tell you when Minecraft is ready.

After that it's automatic: Minecraft starts hidden alongside Skyrim, opens a Survival world, and quits when Skyrim closes.

## 4. Controls
Minecraft's controls take priority. These keys are kept for Skyrim:

| Key | Does |
|---|---|
| G | Skyrim activate |
| Esc | Skyrim menu |
| J / M | Journal / map |
| H | Wait |
| F9 | Quickload |
| ~ | Console |
| O | Minecraft pause and options menu |

Everything else is Minecraft: E inventory, F5 camera, T chat, / commands, Shift crouches (and sneaks in Skyrim). **Skyrim destruction: On/Off** is in the top left of the pause menu (O).

## 5. Play together
- **Host:** press O → **Open to LAN** → **Start LAN World**, then share the `*.e4mc.link` address that appears in chat.
- **Join:** press T and type `/join <link>`. `/leave` takes you back to your own world. Up to 100 players, and your Discord status gets a Join button.

## 6. Troubleshooting
- **Log:** `Documents\My Games\Skyrim Special Edition\SKSE\SkyCraft.log`. Set `bDiagnostics = 1` in `Data/SKSE/Plugins/SkyCraft.ini` for more detail.
- **Stuck on "starting Minecraft…":** Prism may be waiting for you (Alt-Tab to it), or Minecraft closed. Its log is in `%LOCALAPPDATA%\SkyCraft\Prism\instances\SkyCraft\.minecraft\logs\latest.log`. If it's still stuck, end `javaw.exe` in Task Manager once, or restart the PC.
- **Conflicts:** Improved Camera SE, SmoothCam and True Directional Movement.
- **Known limits:** Skyrim's inventory, magic, shouts and perks can't be opened. Minecraft hits only reach NPCs. Sign text isn't drawn. All interiors share one Minecraft world. There's no in-game switch back to plain Skyrim.

Prefer your own launcher? `SkyCraft.ini` has `bStartWithSkyrim`, `sLauncher` and `sArguments`. Your instance then needs Minecraft 26.3, Fabric Loader 0.19.5+, Fabric API, Java 25, `skycraft-fabric-<version>.jar`, and the JVM argument `-Dskycraft.startHidden=true`.

## 7. Update or uninstall
- **Update:** install the new zip over the old one. Your sign-in and world are kept.
- **Uninstall:** remove the mod, then delete `%LOCALAPPDATA%\SkyCraft`.

## No Skyrim? Play the tribute
[Blockrealm](/play/blockrealm/) is a clean-room tribute to SkyCraft that runs in your browser, with no game files.

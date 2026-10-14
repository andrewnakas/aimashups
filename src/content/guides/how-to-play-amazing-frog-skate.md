---
title: "How to install and play Amazing Frog Skate (Skate 3 in Amazing Frog?)"
summary: "Step by step: what you need, running the installer with your Amazing Frog Legacy folder and Skate 3 files, controls, guns on the board and uninstalling."
date: 2026-10-14
updated: 2026-10-14
mashup: amazing-frog-skate
difficulty: easy
time: "15 minutes"
---
[Amazing Frog Skate](/mashups/amazing-frog-skate/) adds Skate 3's skating to Amazing Frog? Legacy. This guide follows **v1.1** from [Henk56797/Amazing-Frog-Legacy-x-Skate-3](https://github.com/Henk56797/Amazing-Frog-Legacy-x-Skate-3/releases). It's an experimental mod. New to mods? Read [Start here](/guides/start-here-playing-game-mashups/) first.

## 1. What you need
- **Windows 10 or 11, 64-bit.**
- **An unmodified Amazing Frog Legacy installation.** The installer only accepts the game DLL versions it knows and refuses others.
- **Your own Skate 3 Xbox 360 files**: `default.xex` with its complete `data` folder beside it. Nothing from Skate 3 is included.
- **Internet during first setup**, to fetch the vgmstream audio decoder. No game files are downloaded.
- **Free space** for a copy of Amazing Frog plus at least 3 GB.
- A controller is recommended, though J and the mouse work too.

## 2. Install
1. Download `Amazing-Frog-Skate-Setup-v1.1.zip` from the [releases page](https://github.com/Henk56797/Amazing-Frog-Legacy-x-Skate-3/releases).
2. Extract the whole ZIP. Keep the `_internal` folder beside the setup program.
3. Run `Setup Amazing Frog Skate.exe`.
4. Select your Amazing Frog Legacy folder (the one with `AmazingFrog.exe`) and Skate 3's `default.xex`.
5. Choose a **new or empty** installation folder outside both games. Choose whether you want a desktop shortcut.
6. Click **Install** and keep the window open until setup reports success. It can take several minutes.
7. Click **Play**, or run `Play Amazing Frog Skate.exe` from the installed folder.

Setup makes a separate copy of the game and patches that, so your Steam copy and your Skate 3 files stay unchanged. If setup fails or is cancelled, choose a fresh empty folder and try again; the logs are in the `.install-<id>` folder it leaves beside your chosen destination.

## 3. Controls

| Action | Controller / keyboard |
|---|---|
| Toggle skate mode | Click both thumbsticks / **J** |
| Push | A / X |
| Steer | Left stick |
| Flick-it tricks | Right stick |
| Get on or off the board | Y |
| Brake | B |
| Grabs | Triggers |
| Session markers and replay | Hold LB |
| Aim and fire an equipped gun | Hold RB (mouse: right button aims, left fires) |
| Reload | RB + X (mouse: T) |
| Options, including FOV and camera | View button / F2 |
| Help HUD | F8 |
| Grind guide | F10 |

The custom skate park, **The Skate Park**, is in Test Rooms.

## 4. Guns while skating
Equip a gun through the **Phone-G Guns** menu, then hold RB to aim and fire, with the right stick aiming. Weapon-spawner beams also give you guns in skate mode. Leaving skate mode drops the gun. The README warns that weapon poses, board-carry animations and some interactions may still look or behave wrong.

## 5. Uninstall
Delete the installation folder you chose, and the desktop shortcut if you made one. Your original games aren't touched. Unity's saved settings (PlayerPrefs) stay behind.

---
title: "How to install and play the 2010 Rust Rewrite Mashup (MW2 × Skate 3 × Minecraft)"
summary: "Set up the standalone launcher with your own Modern Warfare 2, optionally add Skate 3's skating from your Xbox 360 copy, and load the Minecraft overworld map."
date: 2026-10-09
mashup: 2010-rust-rewrite-mashup
difficulty: medium
time: "20 minutes"
---
The [2010 Rust Rewrite Mashup](/mashups/2010-rust-rewrite-mashup/) is the release that started the wave. This guide follows **v0.4.0** from [chasmlol/2010-rust-rewrite-mashup](https://github.com/chasmlol/2010-rust-rewrite-mashup/releases). New to mods? Read [Start here](/guides/start-here-playing-game-mashups/) first.

## 1. What you need
- **Call of Duty: Modern Warfare 2 (2009) for PC, with its multiplayer files.** Only the Steam version has been tested.
- **Optional, for skating:** the **Xbox 360 version of Skate 3**, extracted: its `default.xex` and `data` folder from your own disc or Games on Demand copy. ISO files don't work. You can extract a disc image with `extract-xiso -x "Skate 3.iso"`, or open a Games on Demand copy with Velocity.
- **A controller** for skating. Any supported pad works since v0.3.2.
- **Internet on first start.** The mod downloads about 125 MB of Minecraft 26.3 files from Mojang into `iw4l-artifacts/minecraft-26.3`, then plays offline. You don't need to own Minecraft.

There are no other dependencies: it's a standalone program.

## 2. Install
1. Download the Windows zip from the [Releases page](https://github.com/chasmlol/2010-rust-rewrite-mashup/releases). The v0.4.0 release lists its SHA-256 if you want to check it.
2. Extract it somewhere you can write to. **Not** Program Files.

## 3. First launch
1. Double-click `iw4l.exe` and confirm your MW2 folder (the one with `iw4mp.exe` and `zone`).
2. When asked about skating, choose **Yes** and pick `default.xex`, or **No** to play without it. It copies only what skating needs into `skate-data/`. Your game folders are never changed.

## 4. Load the Minecraft world
Create Game → **Minecraft** tab → map **overworld**. You can also run `Minecraft World.bat`, start `iw4l.exe map minecraft:overworld`, or type `map minecraft:overworld` in the console (the backtick key).

## 5. Controls
| Input | Does |
|---|---|
| J, or click both sticks | Toggle skate mode |
| 1–9, mouse wheel, D-pad left/right | Hotbar (Minecraft map) |
| Y | Swap the first two hotbar slots |
| E | Inventory |
| Q | Drop |
| Left click / RT | Mine or punch |
| Right click / LT | Place |

Console commands: `skate on`, `skate off`, `skate status`. Options → Controller has the stick layouts (Default, Tactical, Lefty, Bumper Jumper, Bumper Jumper Tactical) and aim assist (Standard or Full).

## 6. Known issues
- The skateboard is invisible on some maps.
- Matches with bots run at lower FPS than the upstream IW4L build.

## 7. Update, reset or uninstall
- **Update:** extract the new zip over your old folder to keep your setup and settings.
- **Reset setup:** delete `.env` and `skate-data/`, then run `iw4l.exe` again.
- **Uninstall:** not documented. Since it never changes your game folders, deleting its own folder removes it.

## No MW2? Play the tribute
[Kickflip Ops](/play/kickflip-ops/) is a clean-room skate-shooter tribute that runs in your browser.

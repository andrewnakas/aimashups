---
title: "How to install and play BullySkate (Skate 3 in Bully)"
summary: "Bully Scholarship Edition 1.200 plus your extracted Xbox 360 Skate 3 files: run the launcher, press F6, and skate Bullworth with the full controls table."
date: 2026-10-09
mashup: bullyskate
difficulty: easy
time: "15 minutes"
---
[BullySkate](/mashups/bullyskate/) brings the Skate 3 Rust rewrite to Bullworth. This guide follows **v0.1.2** from [Faiqie/BullySkate](https://github.com/Faiqie/BullySkate/releases). New to mods? Read [Start here](/guides/start-here-playing-game-mashups/) first.

## 1. What you need
- **Bully: Scholarship Edition for Windows, version 1.200.** Steam copies are already on 1.200 (keep Steam signed in). Older retail copies need the official 1.200 update.
- **Complete, extracted Xbox 360 Skate 3 files**: `default.xex` and the `data` folder, from your own copy. An ISO isn't supported.
- **Windows 10 or 11, 64-bit.**
- **A controller** (Xbox/XInput, DualShock 4 or DualSense, wired or Bluetooth) is best, but keyboard works too.

You don't install loaders yourself: the launcher sets up Derpy's Script Loader 15.3 (it keeps a newer install if you have one) and Ultimate ASI Loader. It may offer Microsoft's legacy DirectX installer for the XACT audio.

## 2. Install and first launch
1. Download the zip from the [Releases page](https://github.com/Faiqie/BullySkate/releases) and extract it.
2. Open **BullySkateLauncher.exe**.
3. Pick **Bully.exe** (on Steam: Manage → Browse local files), then pick **default.xex**.
4. Setup installs the mod and starts Bully.
5. Load a save, stand on foot, and press **F6** (or **R3 + D-pad Down**).

If it says skating is "preparing", wait about 15 seconds and press F6 again. From then on, start the game with the same launcher.

## 3. Controls
| Action | Keyboard | Controller |
|---|---|---|
| Skate on / off | F6 | R3 + D-pad Down |
| Native Bully mode | F5 | |
| Skate menu and FOV | F8 | R3 + D-pad Left |
| Debug camera | F11 | R3 + D-pad Right (B teleports Jimmy) |
| Pause | Esc | Start |
| Set marker | F7 | LB + Down |
| Back to marker | Hold F10 | Hold LB + Up |
| Push | Space | A |
| Brake | S | B |
| Ollie | Left Shift | Right-stick flicks for tricks |
| Get off / on the board | E | Y |
| Board swing, retrieve, skitch | R | RB |
| Reload scripts | F9 | |

The skate menu has difficulty (Easy, Normal, Hardcore, Motorized, Easy + Motorized), a high or low camera, FOV from 40 to 110, and video and performance presets. The full list is in the repo's `docs/CONTROLS.md`.

## 4. Troubleshooting
- **Black or cropped screen:** set the resolution in Bully's Video menu. Launching with `--fullscreen` restores native fullscreen.
- **Change your game or Skate 3 files:** run `Setup.cmd`.
- **No skate sounds:** the `data/audio` folder must sit next to the XEX.
- **Reporting a bug:** run `CheckBully.cmd` for a compatibility report, and attach `_derpy_script_loader/logs/skate-compatibility.log`.

## 5. Update or turn it off
- **Update:** close Bully, then open the newer launcher.
- **Turn it off:** run `Disable.cmd`. Opening the launcher again turns it back on.
- **Full uninstall:** not documented yet.

## No Bully? Play the tribute
The [skateboarding open-world game](/play/skate-x-open-world/) is a clean-room skate-the-city tribute that runs in your browser.

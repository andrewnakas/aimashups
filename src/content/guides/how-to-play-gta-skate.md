---
title: "How to install and play GTA Skate (Skate 3 in GTA III and Vice City)"
summary: "No loaders needed: unblock the zip, run the launcher, point it at your Skate 3 files and your original GTA III or Vice City, and press J."
date: 2026-10-09
mashup: gta-skate-3-trilogy
difficulty: easy
time: "15 minutes"
---
[GTA Skate](/mashups/gta-skate-3-trilogy/) brings Skate 3 to Liberty City and Vice City, using the re3 and reVC rebuilds of those games. This guide follows release **1.1** from [irregularnetwork/GTA-Skate-3-Trilogy](https://github.com/irregularnetwork/GTA-Skate-3-Trilogy/releases), going by the readme inside the release zip. New to mods? Read [Start here](/guides/start-here-playing-game-mashups/) first.

## 1. What you need
- **Windows 10 or 11, 64-bit.**
- **GTA III and/or GTA Vice City for PC, the original versions.** Steam, Rockstar Games Launcher and the old CD versions all work. The Definitive Edition doesn't.
- **Extracted Xbox 360 Skate 3 files**: `default.xex` and `data`, from your own copy. A `.iso` won't work.
- **An Xbox/XInput controller.** You need one to skate.
- About **2 GB of disk per city**, plus 0.5 GB.

San Andreas is listed as coming later and isn't playable yet. For San Andreas, see [GTA San AnSkateas](/guides/how-to-play-gta-san-anskateas/).

## 2. Install
1. Download `GTA.Skate.zip` from the [Releases page](https://github.com/irregularnetwork/GTA-Skate-3-Trilogy/releases).
2. Right-click it → **Properties** → **Unblock**, then **Extract All** to a short path you can write to, like `C:\Games\GTA Skate`. Not Program Files, and no accented letters in the path.

## 3. First launch
1. Double-click **2 - Play GTA Skate**. If SmartScreen appears, choose **More info → Run anyway**.
2. Click a city. The first time, it asks for `default.xex`, then your GTA folder (the one with `gta3.exe` or `gta-vc.exe`).
3. It copies the game into `Files\iii` or `Files\vc` and converts the data. Your original folders are never changed.
4. In game, wait about 15 seconds, then press **J**.

## 4. Controls
| Input | Does |
|---|---|
| J, or click both sticks | Get on or off the board |
| A / X | Push |
| Left stick | Steer and lean |
| Right stick down, then flick up | Ollie (other flicks do flip tricks) |
| Triggers | Grab |
| 1 / 2 (keyboard) | Speed push / big jump |
| Hold LB or left mouse | Shoot while skating (right stick aims, D-pad or wheel switches weapon) |
| Ctrl + M | Skate tools menu: gravity, ollie height, no bails, aim assist |

## 5. Troubleshooting
- **Crash on Alt+Tab:** set `Windowed=1` under `[VideoMode]` in `Files\iii\re3.ini` or `Files\vc\reVC.ini`.
- **Turn skating off:** set `Enabled=0` under `[GTA3Skate]` or `[VCSkate]` in the same file.
- **Logs:** `Files\iii\skate.log` and `Files\vc\skate.log`.
- **Known limits:** parked cars aren't solid, and you can't enter vehicles while skating. Skating ends on death, arrest, cutscenes, teleports, saving or loading, and water.

## 6. Uninstall
Delete the **GTA Skate** folder. Your original GTA and Skate 3 folders were never changed.

## No GTA? Play the tribute
The [skateboarding open-world game](/play/skate-x-open-world/) is a clean-room skate-the-city tribute that runs in your browser.

---
title: "How to install and play GTA San AnSkateas (Skate 3 in San Andreas)"
summary: "Downgrade classic GTA San Andreas to 1.0 US, add an ASI Loader, run Setup with your Skate 3 files, and press J to skate Los Santos."
date: 2026-10-09
mashup: gta-san-anskateas
difficulty: medium
time: "25 minutes"
---
[GTA San AnSkateas](/mashups/gta-san-anskateas/) puts Skate 3's skating in San Andreas. This guide follows **v1.1** from [ryglizzy/GTA-San-AnSkateas](https://github.com/ryglizzy/GTA-San-AnSkateas/releases). New to mods? Read [Start here](/guides/start-here-playing-game-mashups/) first.

## 1. What you need
- **Classic PC GTA San Andreas** (not the Definitive Edition), running as **version 1.0 US with an ASI Loader**.
- **Extracted Xbox 360 Skate 3 files**: `default.xex` and `data`, from your own copy. The ISO file itself won't work.
- **A controller.** Xbox pads work directly. PlayStation pads need **DS4Windows**.
- On "N" editions of Windows, the **Media Feature Pack**, for the SK8-FM radio.

## 2. Downgrade the game
Setup doesn't do this for you.

1. Put `gtasa-open-downgrader-windows.exe` (GTA SA Open Downgrader) in your San Andreas folder and run it.
2. Tick all the boxes and click **Downgrade**. Of its extras, **ASI Loader & ModLoader** is the only one this mod needs.

## 3. Install
1. Download the release from the [Releases page](https://github.com/ryglizzy/GTA-San-AnSkateas/releases) and unzip it anywhere.
2. Double-click `Setup.cmd`. Confirm or pick your GTA folder, then pick `default.xex`.
3. Converting the sounds and soundtrack takes a few minutes and about 150 MB.

## 4. Play
Start San Andreas and load your game. When **"Skate 3 is ready"** shows, press **J** (or **L3 + R3**) to get on the board. Press it again to get off.

## 5. Controls and settings
| Input | Does |
|---|---|
| J, or L3 + R3 | Get on or off the board |
| Hold LB | Skate 3 menu |
| LB + D-pad Down | Set a marker |
| Hold LB + Up | Go back to the marker |
| LB + Left / Right | Change radio station, including SK8-FM |
| Ctrl + J | Restart the skate engine (about 10 seconds) |

In Pause → Options → **SAN ANSKATEAS** you can set difficulty (Easy, the default, Normal or Hard), the camera (High or OG Low) and trucks. Everything else is in `SanAnskateas.ini`.

## 6. Troubleshooting
- **J does nothing:** the game isn't 1.0 US, or the ASI Loader is missing. Run the downgrader again.
- **"Skate 3 failed to load", or no sounds:** run `Setup.cmd` again.
- **"No Xbox controller found":** connect an Xbox pad, or start DS4Windows for a PlayStation pad.
- **Black screen after Alt+Tab:** put DXVK 3.1.1's `x32\d3d9.dll` in the game folder.
- **Log:** `SanAnskateas.log` in the game folder.

## 7. Update or uninstall
- **Update from 1.0:** run the new `Setup.cmd`. It keeps your settings and asks for the XEX once.
- **Uninstall:** delete `SanAnskateas.asi`, `SanAnskateas.ini` and the `SanAnskateas` folder from your San Andreas folder.

## No San Andreas? Play the tribute
The [skateboarding open-world game](/play/skate-x-open-world/) is a clean-room skate-the-city tribute that runs in your browser.

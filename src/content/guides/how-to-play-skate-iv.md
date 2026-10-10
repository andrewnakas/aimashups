---
title: "How to install and play Skate IV (Skate 3's skating inside GTA IV)"
summary: "Set up the v0.8.11 experimental preview: GTA IV 1.0.8.0 with an ASI loader, your extracted Xbox 360 Skate 3, .NET 8 and Python, then Setup.cmd. Keys, logs and how to disable it."
date: 2026-10-10
mashup: skate-iv
difficulty: hard
time: "60 minutes"
---
[Skate IV](/mashups/skate-iv/) runs Skate 3's Rust engine inside GTA IV. GTA keeps the world, your player model, clothing, lighting and traffic; Skate 3 supplies the skating physics and animations. This guide follows **v0.8.11** from [TheJasonMods/SkateIV](https://github.com/TheJasonMods/SkateIV/releases). New to mods? Read [Start here](/guides/start-here-playing-game-mashups/) first.

It's an **experimental development preview**. The project says collision, grind transfers, shadows and performance still have known issues.

## 1. What you need
- **Windows 10 or 11, 64-bit.**
- **Your own working GTA IV on version 1.0.8.0**, with a compatible ASI loader. The current Steam Complete Edition executable isn't supported, and setup won't downgrade, patch or replace your game executable.
- **Your own extracted Xbox 360 Skate 3 files:** `default.xex` with the complete `data` folder beside it. PS3 files aren't supported. No game files are included or downloaded.
- **Microsoft .NET 8 x64 runtime** ([download](https://dotnet.microsoft.com/en-us/download/dotnet/8.0)).
- **Python 3.11 or later with NumPy.** Get Python from [python.org](https://www.python.org/downloads/windows/) if you don't have it. If NumPy is missing, setup prints the install command for you.
- **Internet during setup**, to download a pinned converter and the vgmstream decoder. Their hashes are checked.
- **Plenty of free disk.** Extracting the full city can use tens of GB and take a long time.

## 2. Install
1. Download `GTAIV-Skate-v0.8.11-preview.zip` from the [Releases page](https://github.com/TheJasonMods/SkateIV/releases).
2. Extract the whole folder somewhere you can write to. Close GTA IV.
3. Run **`Setup.cmd`**. Pick `GTAIV.exe`, then your Skate 3 `default.xex`. If the game is in Program Files, Windows may ask for permission; run `Setup.cmd` as administrator if needed.
4. Keep the setup console open. It converts your Skate assets and board sounds, extracts your GTA map and builds grind candidates on your PC. It only installs the mod once conversion succeeds.

Files that setup replaces are backed up under `GTAIV/Skate3Rust/backups/public-setup-<date>`. Your saves aren't touched.

## 3. First launch
1. Start GTA IV with your ASI loader, as you normally would.
2. The Skate engine starts loading by itself once the game world is ready. The first load can take a while.
3. The "ready" message is meant to be a phone text, but the phone text doesn't work yet. Give it time.

## 4. Controls
| Key | Does |
|---|---|
| F10 | Toggle Skate mode |
| F9 | Show or hide grind candidate lines |

A grind line is a candidate, not a promise that every approach will grind. The skating controls themselves aren't documented.

## 5. Known problems / fixes
- **Known issues:** collision, grind transfers, shadows and performance.
- **Setup log:** `%LOCALAPPDATA%/GTAIV-Skate/setup-<id>/setup.log`, with the generated intermediate files.
- **Runtime log:** `skate3rust_passthrough.log` next to `GTAIV.exe`. Logs can contain your install paths, so check them before sharing.
- **Reporting a bug:** include your game version, mod version, a short clip with the time the problem happens, and the matching runtime log.
- **Don't** run other skating mods, or install this next to another version of this ASI.
- Clothes and DLC players use the game's current player mesh. The older preconverted Niko mesh isn't included.

## 6. Disable or roll back
- **Disable:** close GTA IV, run **`Disable.cmd`** and select `GTAIV.exe`.
- **Go back to an earlier version:** with the game closed, copy its backed-up files from `GTAIV/Skate3Rust/backups/` to their original locations.

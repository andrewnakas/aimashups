---
title: "How to install and use TamrielMerge (older Elder Scrolls games in Skyrim)"
summary: "Step by step: the games and Skyrim mods you need, installing the converter and its tools, running a conversion, and starting the merged playthrough."
date: 2026-10-13
updated: 2026-10-13
mashup: tamrielmerge
difficulty: hard
time: "Several hours (mostly conversion)"
---
[TamrielMerge](/mashups/tamrielmerge/) converts the Daggerfall, Redguard, Morrowind and Oblivion you own into Skyrim Special Edition. This guide follows **v0.1.0** from [Murray2k6/TamrielMerge](https://github.com/Murray2k6/TamrielMerge/releases), released on 13 October 2026. It's a first release, and some parts have only been checked offline. New to mods? Read [Start here](/guides/start-here-playing-game-mashups/) first.

## 1. What you need
- **Windows 10 or 11, 64-bit.**
- **Skyrim Special Edition** (Steam or GOG) with **[SKSE](https://skse.silverlock.org/)** and **Address Library for SKSE Plugins**.
- **Any of the games to convert**, from Steam or GOG: Daggerfall, Redguard, Morrowind, Oblivion. Games you don't have are left out.
- **For voices and lip sync:** the Skyrim Special Edition Creation Kit (free on Steam under Library > Tools). Start it once after installing.
- **About 60 GB** free while converting all four games.
- **A graphics card** (NVIDIA recommended) for the videos, models and voice generator. They also run on the processor, much more slowly.
- The **.NET 10 Desktop Runtime** (Windows offers to install it if it's missing).

## 2. Install
1. Download `TamrielMerge-v0.1.0-win-x64.zip` (867 MB) from the [latest release](https://github.com/Murray2k6/TamrielMerge/releases/latest).
2. Unzip it into a folder of its own on a drive with room, such as `D:\TamrielMerge`. Don't put it inside Skyrim's folder or Program Files.
3. Run **TamrielMerge.exe**.
4. Click **Install missing tools**. It downloads ffmpeg, the Bink encoder, the upscaling and AI models, Python environments, Blender, FFDec and Java if needed. That's several gigabytes, and it only happens once.
5. If the Creation Kit is missing, click **Open the Creation Kit in Steam** and install it.

## 3. Convert
1. Tick the games to convert and choose the options (voices, remastered intro videos, models for Daggerfall's sprites, creatures). Leave **Use the graphics card** off unless you want it faster, because it keeps the card under load for hours.
2. Set the **output folder** and, if you use it, your **Mod Organizer 2** folder.
3. Click **Convert**. A full conversion takes hours, most of it Daggerfall. You can pause at any time. To resume a stopped run: `TamrielMerge.Cli.exe convert --resume`.
4. With **Install** ticked, the result goes into Skyrim's Data folder and its plugins are switched on. Otherwise copy the output into Data yourself, or add it to your mod manager.

## 4. Play
Start a **new game** in Skyrim. The first story begins with its intro, which you can watch or skip. The stories run in order (Redguard, Daggerfall, Morrowind, Oblivion, then Skyrim), or you can pick an alternative start in any converted game's time. The **Travel Through Time** power moves between them.

## 5. Optional tools
- **Voice generator** speaks Morrowind's unrecorded lines in Skyrim's voices. It runs for a long time and can be paused.
- **Distant LOD** remakes the converted worlds' distant view after changes.
- **Mod organizer…** switches each part (each game, voices, the menu, creatures) on or off without deleting anything.

## 6. Known limits
The release notes say the distant objects and trees, and walkable navmesh on Daggerfall's platforms, lifts and drawbridges, have been checked offline only, not yet in the game.

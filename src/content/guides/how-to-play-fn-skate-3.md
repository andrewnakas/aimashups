---
title: "How to install and play FN Skate 3 (Skate 3 in Fortnite OG)"
summary: "Step by step: the exact Fortnite build and launcher it needs, converting your Skate 3 disc with the setup program, injecting the mod and skating with J."
date: 2026-10-13
updated: 2026-10-13
mashup: fn-skate-3
difficulty: hard
time: "45 minutes"
---
[FN Skate 3](/mashups/fn-skate-3/) adds Skate 3's skating to offline Fortnite. This guide follows **v1.0** from [Cobalyst/Fortnite-Skate-3-Mod-for-V27.11](https://github.com/Cobalyst/Fortnite-Skate-3-Mod-for-V27.11/releases). It only works on one specific old Fortnite build, run offline through a third-party launcher, so it's the hardest setup here. New to mods? Read [Start here](/guides/start-here-playing-game-mashups/) first.

## 1. What you need
- **Windows 10 or 11, 64-bit.**
- **Fortnite 27.11** (Chapter 4 Season OG), build **CL-29739262**. Other versions won't work.
- **A Fortnite launcher that can host a local match and inject a DLL.** The author recommends ATLAS (ATLAS Link), which the mod was made and tested with.
- **Your own Xbox 360 copy of Skate 3** (USA or Europe), as an `.iso` or an extracted folder with `default.xex` and `data`.
- About **9 GB** free while setup runs (about 1 GB afterwards) and roughly **8 GB** of free RAM.
- An Xbox controller is recommended. Keyboard works too.

## 2. Install (once)
1. Download `FN.Skate.3.rar` from the [Releases page](https://github.com/Cobalyst/Fortnite-Skate-3-Mod-for-V27.11/releases) and unpack it anywhere, but not inside Program Files.
2. Double-click **SETUP - run this first.cmd**. It searches your PC for Skate 3. If it finds none, drag your `.iso` or `default.xex` into the window and press Enter. It copies out only the files the mod needs, converts and checks them (10–20 minutes). Nothing is downloaded and your Skate 3 copy isn't changed.
3. When it says **Done**, the mod is ready. If setup stops with a message, fix what it says and run it again. Its log is `setup\setup.log`.
4. Install Fortnite 27.11 and your launcher.

Keep the mod folder together. The mod finds its files relative to `SkateMod.dll`.

## 3. Play
1. Start Fortnite 27.11 from your launcher with a local match.
2. Inject `<mod folder>\bin\SkateMod.dll` into the game. With ATLAS, both the game client and its background match server get it. Inject it **once** per game launch, never twice.
3. Get into a match and press **J** to skate. Press J again to get off, and you keep your speed, even in mid-air.

The first J of a session takes about 10 seconds while the Skate 3 engine loads. Fortnite itself is played on keyboard and mouse, while skate mode is made for an Xbox controller. Every skate action also works on the keyboard.

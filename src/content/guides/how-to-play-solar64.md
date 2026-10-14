---
title: "How to play SOLAR64 (Mario Kart 64 x Cruis'n Exotica)"
summary: "Step by step: the two ROMs you need, playing in the browser or on Windows and Linux, controls, online rooms and the optional Sonic, Shadow and Devil Jin racers."
date: 2026-10-14
updated: 2026-10-14
mashup: solar64
difficulty: easy
time: "10 minutes"
---
[SOLAR64](/mashups/solar64/) races on Mario Kart 64 and Cruis'n Exotica tracks with up to eight players. This guide follows the creator's [play page](https://solarfren.com/solar64/play/) and [downloads page](https://solarfren.com/solar64/) as of 14 October 2026 (desktop release **2026.10.13-r27**). New to mods? Read [Start here](/guides/start-here-playing-game-mashups/) first.

## 1. What you need
Two ROMs, dumped from your own Nintendo 64 cartridges. Both are required, even if you pick a custom car or track:

- **Mario Kart 64 (USA)**: 12 MiB (12,582,912 bytes), usually `mk64.z64`. European, Japanese and modified versions don't work.
- **Cruis'n Exotica (USA)** for the N64, not an arcade ROM or another Cruis'n game: 16 MiB (16,777,216 bytes), usually `cruisn.z64`.

`.z64`, `.v64` and `.n64` all work, since the byte order is converted for you. Extract `.zip` or `.7z` archives first. The game checks the data, not the file name, and your ROMs are read on your device and never uploaded.

## 2. Play in the browser
1. Open the [play page](https://solarfren.com/solar64/play/) in a browser with hardware acceleration on (it uses WebGL2).
2. Choose your Mario Kart 64 ROM, then your Cruis'n Exotica ROM. Tick **Remember these files** to keep them in this browser.
3. The game starts in Performance mode.

On a phone, you can add it to your home screen: in Chrome on Android use **Install app / Add to Home screen**, and in Safari on iPhone use **Share > Add to Home Screen**. Turn the phone sideways; the touch controls overlay the game.

## 3. Or download it
The [downloads page](https://solarfren.com/solar64/) has a Windows game EXE, an installer, a ZIP, a diagnostic EXE that starts with lower graphics settings, and a Linux build. Windows builds need 64-bit Windows and check for signed updates on launch. Older GPUs have two test builds: an OpenGL compatibility build and a DX12 tier-1 build, both updated by hand.

## 4. Controls (keyboard)

| Key | Does |
|---|---|
| ↑ | Gas |
| ↓ | Brake, or dive in the air |
| ← → | Steer / dodge |
| Space | Boost |
| Shift | Drift |
| Z | Item (Brake + Item fires shells backward) |
| J | Join online |
| G | Ready |
| Enter | Race |
| F2 / F7 | Diagnostics / Performance mode |

Click the game first so it has focus.

## 5. Race online
Choose a car and press **J** to open the room browser. **Quick Join** creates a room when needed, or you can create or join your own. Rooms hold up to eight players, and each host chooses the track and rules (the host's **F6** returns everyone to the lobby). The browser and desktop versions share the same server.

## 6. Optional racers
Each one is imported from your own copy and stays on your device. Other players need their own import to see the model.

- **Sonic**: from the European Dreamcast BIN/CUE of Sonic Adventure. The desktop importer creates `sonic.bin.z`.
- **Shadow**: from the European Dreamcast BIN/CUE data track of Sonic Adventure 2, creating `shadow.bin.z`.
- **Devil Jin**: from a raw ISO of Tekken 5 (USA, SLUS-21059), with `python3 tools/import-racer.py deviljin`.

On desktop, place the file at `assets/<name>/<name>.bin.z` beside the app. In the browser, choose the extracted `.bin.z` file (not the disc image) under the matching **Optional racer** picker.

---
title: "How to install and play ER Mario (Mario in Elden Ring)"
summary: "me3, your own Super Mario 64 ROM and Elden Ring on Steam: set up ER Mario, switch cameras, summon Yoshi, and stay offline."
date: 2026-10-09
mashup: er-mario-mario-in-elden-ring
difficulty: easy
time: "15 minutes"
---
[ER Mario](/mashups/er-mario-mario-in-elden-ring/) replaces the Tarnished with Super Mario 64's Mario, moves and all. This guide follows **v0.4.1** from [deltarooo/er-mario](https://github.com/deltarooo/er-mario/releases). New to mods? Read [Start here](/guides/start-here-playing-game-mashups/) first.

## 1. What you need
- **Elden Ring on Steam.**
- **A Super Mario 64 ROM (US version)** dumped from a cartridge you own. The mod builds Mario from it on first run, so no Nintendo data ships with the mod.
- **me3**, the Elden Ring mod loader, from [me3.help](https://me3.help). The project doesn't name a minimum me3 version.

## 2. Install
1. Install **me3**.
2. Download `ER-Mario-x.y.z.zip` from the [Releases page](https://github.com/deltarooo/er-mario/releases) and unzip it somewhere you can write to, such as Documents.
3. Put your SM64 ROM into the **ER-Mario** folder.

## 3. First launch
1. Double-click **er-mario.me3**.
2. The first run sets itself up from the ROM, with a progress box. When it says **Setup complete**, press any button to close it.
3. Start again with **er-mario.me3**. "ER MARIO" and the version number in the bottom left of the title screen mean the mod is loaded.
4. **Start a new character.** The mod uses its own save file.

**Stay offline.** me3 starts the game offline with anti-cheat off. Never take this mod online.

## 4. Controls
Mario uses his Super Mario 64 moveset, which the project doesn't list in a table. The extra controls are:

| Input | Does |
|---|---|
| F9 | Switch between the Lakitu camera and Elden Ring's camera |
| Hold F1 for 3 seconds | Die and wake up at the last Site of Grace |
| RB, RT, or R on keyboard | Whistle for Yoshi, who replaces Torrent (you need the Torrent whistle) |
| Interact | Pass through fog walls |

To start with Elden Ring's camera every time, set `camera = elden` in `er_mario.ini`. It has been tested with an Xbox One pad, a PS5 pad through Steam, and keyboard and mouse. Other pads work through Steam Input.

Levels and items don't change anything: Mario's health is SM64's 8 wedges. Streamers need window or display capture to show the HUD.

## 5. Known issues
- Mario can clip through some elevators.
- In cutscenes he's crumpled, with the Tarnished's head.
- Large bosses' ragdolls go wild after throws.
- Shadows flicker in sun or moonlight, and fog walls flicker slightly.
- Some hills and rocks have no collision.

Logs are in `logs\er_mario.log` and `er_mario.prev.log`. me3's own log is in `%LOCALAPPDATA%\garyttierney\me3\data\logs\er-mario`. Set `update_check = off` in `er_mario.ini` to turn off the GitHub version check.

## 6. Update or uninstall
- **Update:** unzip the new version, move your ROM (and any edited `er_mario.ini` or `portrait.png`) across, launch, and restart if asked. Then delete the old folder. Your Mario save is kept, since it lives with your Elden Ring saves.
- **Uninstall:** not documented. Deleting the ER-Mario folder removes the mod; the Mario save stays with your Elden Ring saves.

## No Elden Ring? Play the tribute
[Hollow Warden](/play/hollow-warden/) is a clean-room platformer-meets-soulslike tribute that runs in your browser.

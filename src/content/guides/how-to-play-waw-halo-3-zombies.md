---
title: "How to install and play WaW Halo 3 Zombies (Halo 3 in World at War's Nacht der Untoten)"
summary: "Build the mod from your own World at War and Halo MCC installs: the Mod Tools, Python, Install.bat and Play.bat, plus controls, Pack-a-Punch, fixes and uninstall."
date: 2026-10-10
mashup: waw-halo-3-zombies
difficulty: hard
time: "45 minutes"
---
[WaW Halo 3 Zombies](/mashups/waw-halo-3-zombies/) turns Nacht der Untoten into Halo 3: you play Master Chief against Flood combat forms, with Halo 3 guns, grenades, sounds and HUD, dual wielding and a Pack-a-Punch machine. This guide follows **v1.1.0** from [Mr-Joshh/World-at-War-Zombies-Halo-3-Mod](https://github.com/Mr-Joshh/World-at-War-Zombies-Halo-3-Mod/releases). New to mods? Read [Start here](/guides/start-here-playing-game-mashups/) first.

The download has no game files. Its installer reads your own copies of both games and converts the models, textures, sounds and animations on your PC. You must own both.

## 1. What you need
- **Call of Duty: World at War**, the Steam version. The scripts are matched to it.
- **World at War Mod Tools** 1.0 plus the 1.1 to 1.4 updates, installed into a World at War folder (your Steam folder or a copy). Activision no longer hosts them; the README points to community copies (archive.org item `cod-waw-modtools` for 1.0, the updates via wiki.modme.co). The installer checks for `bin\linker_pc.exe`, `bin\converter.exe`, `raw\`, `model_export\`, `xanim_export\` and `main\`.
- **Halo: The Master Chief Collection** on Steam, with **Halo 3, Halo 3: ODST, Halo: Reach and Halo 2: Anniversary** installed, multiplayer maps included. MCC is only read, never changed or launched.
- **Python 3.9 or newer** from python.org, with *Add python.exe to PATH* ticked.
- **Internet once**, to download about 300 MB of open-source tools.
- **Disk:** about 1.6 GB in the mod folder's `work\` while building (you can delete it after), and about 0.5 GB added to the Mod Tools folder.
- **Windows.** Tested on Windows 11 with the Steam versions of both games.

## 2. Install
1. Download `WaW-Halo-1.1.0.zip` from the [Releases page](https://github.com/Mr-Joshh/World-at-War-Zombies-Halo-3-Mod/releases) and extract it somewhere. A path without special characters is safest. To update from 1.0.0, extract over the old folder or into a new one.
2. Run **`Install.bat`**. It finds World at War and MCC through Steam and asks for any folder it can't find, like the Mod Tools if they're in a copy of the game.
3. Wait. It sets up a private Python environment, downloads the .NET 9 SDK, Reclaimer and vgmstream into `work\tools` (nothing system-wide), reads the Halo assets from MCC, builds `mod.ff` and `halo3.iwd`, and installs them to `%LOCALAPPDATA%\Activision\CoDWaW\mods\halo3`. It takes about 15 minutes.

If a step fails, fix what the message says and run `Install.bat --from <step number>` to carry on from there. `Install.bat --reconfigure` asks for the game folders again.

## 3. First launch
1. Make sure Steam is running.
2. Run **`Play.bat`**. It starts World at War on Nacht der Untoten with the mod, and binds key 3 in your WaW profile.

**Nacht der Untoten only.** Don't load the mod on other maps. It was made and tested solo; co-op hasn't been tested.

## 4. Controls
| Key | Does |
|---|---|
| Left mouse | Fire (the left gun when dual wielding) |
| Right mouse | Zoom on the Sniper Rifle, Carbine and Beam Rifle. Fires the right gun when dual wielding |
| F (hold) | Buy wall guns, ammo, doors, the box, Pack-a-Punch. Take weapons and pick up guns |
| H | Dual wield (take a one-handed gun into the left hand) |
| B | Drop the left-hand gun |
| R | Reload |
| G / middle mouse | Throw the selected grenade |
| 3 | Cycle grenade type (frag, plasma, spike, incendiary) |
| V | Melee |
| Hold the trigger | Charge the Spartan Laser. Overcharge the Plasma Pistol (2 s) |

You can dual wield the Magnum, SMG, Plasma Pistol, Plasma Rifle, Spiker and Mauler, in any pair.

## 5. Prices and Pack-a-Punch
- Wall guns cost what the WWII gun on that wall cost in stock Nacht. Ammo costs half.
- You start with the M6G Magnum. Every other gun can come out of the mystery box (950).
- **Pack-a-Punch** is upstairs in the large room and costs 5000. It turns each gun into its Halo: Reach, ODST or Halo 2 version.
- Doors and debris cost 1000 each.
- The Flood can drop an **Overshield** (red, 200 extra health that doesn't regenerate) and **Active Camouflage** (blue, 30 seconds where the Flood can't see or attack you).
- You carry at most 2 of each grenade type, refilled each round. They can't be cooked.

## 6. Known problems / fixes
- **The installer fails on the first run:** this sometimes happens. Run it again.
- **"Cannot rebuild maps/... - no matching original":** your World at War files are a different version from the Steam release the patches were made for.
- **The linker reports `EXE_ERR_HUNK_ALLOC_FAILED`:** close other programs and run `Install.bat --from 25`.
- **MCC files missing:** install the Halo 2: Anniversary, Halo 3, ODST and Reach content in Steam, multiplayer maps included, and run `Install.bat` again.
- **The game asks to run in safe mode** after a crash: answer No.
- **Linker log:** `<Mod Tools>\mods\halo3\linker.log`.
- **Known limits:** switching camo on or off replays the held gun's raise animation, and the Ray Gun stays visible during camo.

Don't share the `work\` folder or the built `mod.ff` and `halo3.iwd`. They contain converted game assets and are for your personal use.

## 7. Uninstall
Run **`Uninstall.bat`**. It removes the installed mod, asks before deleting the files the build added to the Mod Tools folder, and restores your `zone_source\mod.csv`. Then delete the mod's folder. Nothing in the Steam installs of either game is changed.

---
title: "How to install and play Minecraft X Games (Minecraft inside RDR2, PEAK, Ready or Not, Cyberpunk 2077 and GTA V)"
summary: "Set up SkyCraft's Minecraft once without Skyrim, then add RedCraft, PeakCraft, ReadyCraft, CyberCraft or GTACraft. What each game needs, controls, fixes and removal."
date: 2026-10-10
mashup: minecraft-x-games
difficulty: medium
time: "30 minutes"
---
[Minecraft X Games](/mashups/minecraft-x-games/) is a set of prototype mods that put Minecraft inside other games: RedCraft (Red Dead Redemption 2), PeakCraft (PEAK), ReadyCraft (Ready or Not), CyberCraft (Cyberpunk 2077) and GTACraft (GTA V). There's one release per game on [Keel62155/Minecraft-X-Games](https://github.com/Keel62155/Minecraft-X-Games/releases). This guide follows **RedCraft 3.0.0, PeakCraft 1.0.0, ReadyCraft 1.0.0, CyberCraft 2.0.0 and GTACraft 2.0.0**. New to mods? Read [Start here](/guides/start-here-playing-game-mashups/) first.

The project calls these prototypes and says to expect rough edges. CyberCraft has been played on one PC. GTACraft and ReadyCraft are early builds with very little play time.

## 1. What you need
- **The game you want to mod, your own PC copy.** Each one has its own extra requirements; see the table in section 4.
- **A Microsoft account that owns Minecraft: Java Edition.** Bedrock alone isn't enough.
- **SkyCraft's Minecraft.** Every mod here uses the Minecraft that [SkyCraft](/mashups/skycraft-minecraft-in-skyrim/) sets up. It isn't included in these zips. You don't need Skyrim.
- About **1 GB** of free disk for Minecraft, Java and the launcher.
- A save where you can walk around freely.

## 2. Set up SkyCraft's Minecraft (once)
The mods look for a Prism Launcher copy with a ready-made **SkyCraft** instance in `%LOCALAPPDATA%\SkyCraft\Prism`. If you already play SkyCraft in Skyrim, you have it: skip to step 4 below.

1. Download **`SkyCraft-0.1.2.zip`** from [SkyCraft's releases](https://github.com/chasmlol/SkyCraft/releases).
2. Open it and go into `SKSE` → `Plugins` → `SkyCraft`. Open the `SkyCraft-Minecraft.zip` inside. You'll see a `Prism` folder, a `defaults` folder and `bundle-version.txt`.
3. Type `%LOCALAPPDATA%` in a File Explorer address bar, make a folder called **`SkyCraft`** there, and drag those three things into it. Then copy `prismlauncher.cfg` from `defaults` into `Prism`.
4. Start `prismlauncher.exe` in the `Prism` folder. If Windows warns you, click **More info** → **Run anyway**.
5. Account button (top right) → **Manage Accounts** → **Add Microsoft**, and sign in.
6. Select the **SkyCraft** instance and click **Launch**. The first time it downloads Minecraft and Java (about 700 MB).
7. When the title screen appears, close Minecraft and the launcher. You don't need to make a world.

Check it worked: `%LOCALAPPDATA%\SkyCraft\Prism\instances\SkyCraft` should open in File Explorer. The full walkthrough is [SkyCraft-Minecraft-SETUP.md](https://github.com/Keel62155/Minecraft-X-Games/blob/main/SkyCraft-Minecraft-SETUP.md).

## 3. Install a game mod
1. Download that game's zip from the [Releases page](https://github.com/Keel62155/Minecraft-X-Games/releases).
2. Each zip has the mod, a README for that game, and a second zip with the source. Follow that README; the table below sums up the ones published as separate `SETUP.md` files.
3. **Run only one at a time.** They all drive the same Minecraft, so two games at once, or one of these next to SkyCraft in Skyrim, will fight over it.

## 4. Per-game setup
| Mod | Game | Extra requirements | Where the files go | Log |
|---|---|---|---|---|
| **RedCraft 3.0.0** | Red Dead Redemption 2, story mode | See the README in `RedCraft.zip` | See the README in the zip | Not documented outside the zip |
| **PeakCraft 1.0.0** | PEAK | See the README in `PeakCraft.zip` | See the README in the zip | Not documented outside the zip |
| **ReadyCraft 1.0.0** | Ready or Not on Steam, single player, Steam build 24942528 | None: it brings its own loader. Add the Steam launch option `-slnoswapchainprovider` | `version.dll` and `ReadyCraft.dll` in `ReadyOrNot\Binaries\Win64` | `%LOCALAPPDATA%\ReadyCraft\readycraft.log` |
| **CyberCraft 2.0.0** | Cyberpunk 2077, patch 2.31 | RED4ext 1.30.0. Recommended: ReShade with full add-on support. Turn off DLSS and FSR Frame Generation | Copy the zip's `red4ext` and `bin` folders into the game folder | `%LOCALAPPDATA%\CyberCraft\cybercraft.log` |
| **GTACraft 2.0.0** | GTA V **Enhanced**, story mode (Legacy isn't supported) | Script Hook V (`ScriptHookV.dll`, `dinput8.dll`, `xinput1_4.dll`, `args.txt`). Recommended: ReShade with full add-on support plus the zip's `reshade-shaders` folder | `GTACraft.asi` next to `GTA5_Enhanced.exe` | `%LOCALAPPDATA%\GTACraft\gtacraft.log` |

Two notes from the setup files:
- **ReShade** (CyberCraft and GTACraft) must be the build marked *with full add-on support*. Pick DirectX 10/11/12 and untick all effect packages; the mod brings its own. Without ReShade it still works, but blocks draw on top of everything.
- **Stay offline.** GTACraft's `args.txt` turns BattlEye off, so it's story mode only. ReadyCraft is single player only. The project says to keep all of these out of online modes that don't allow mods.

## 5. First launch
1. Start the game as usual and load a save (story mode or Singleplayer).
2. Get on foot, out of cars and cutscenes. Minecraft starts by itself in the background, hidden. It can take about half a minute, and the first start is slowest.
3. When **Minecraft's hotbar** appears at the bottom of the screen, it has taken over.

In Ready or Not, walk to the briefing desk and press **F** to choose a mission, as usual.

## 6. Controls
These are shared by ReadyCraft, CyberCraft and GTACraft:

| Key | Does |
|---|---|
| WASD, Space, Shift | Move, jump, sneak |
| Left click / Right click | Break or hit / place or use |
| 1–9, mouse wheel | Hotbar |
| E | Minecraft inventory |
| T | Minecraft chat |
| F5 | Third-person views |
| O | Minecraft's own menu |
| Esc | The game's pause menu |
| F10 | Hand the character back to the game. Press again to return to Minecraft |

Extra keys per game:
- **ReadyCraft:** F is the game's use key (doors, cuffs, evidence, missions). Hold **Left Alt** to be the officer for a moment.
- **CyberCraft:** the game gets none of your keys while Minecraft has V. Press F10 to talk, shop, answer the phone or drive. **Home** opens ReShade.
- **GTACraft:** **7**, **8**, **9** pull out your best handgun, rifle or machine gun, and shotgun or sniper; left click fires. **F7** turns a gun a quarter turn if it points the wrong way. Hold **Left Alt** to talk, pick things up or get in a car.

RedCraft and PeakCraft controls are in the README inside their zips.

## 7. Known problems / fixes
- **The hotbar never appears:** make sure you're on foot in a loaded level, press F10 once in case it's off, and check `%LOCALAPPDATA%\SkyCraft\Prism` exists and that you launched the SkyCraft instance once by hand.
- **Picture flickers:** turn off DLSS or FSR Frame Generation.
- **Blocks show through walls and people** (CyberCraft, GTACraft): ReShade is missing or is the standard build. If it's installed, press Home and check the mod's effect and the Generic Depth add-on.
- **ReadyCraft crashes about half a minute in:** the launch option is missing or mistyped.
- **Crashes after a game update:** ReadyCraft and CyberCraft are built for one game version, and Script Hook V and RED4ext need updates after patches. Remove the mod until a new release.
- **Minecraft stays running after you quit:** give it half a minute, then end `javaw.exe` and `prismlauncher.exe` in Task Manager.
- **Known gaps:** in CyberCraft nobody can hurt you and vehicles ignore TNT. In ReadyCraft doors aren't solid, blocks draw on top of everything, people walk through blocks and your team can't be hurt.
- **Your own Fabric mods** go in `%LOCALAPPDATA%\SkyCraft\Prism\instances\SkyCraft\.minecraft\mods`. One with a missing requirement stops Minecraft starting and breaks every mod here.

## 8. Uninstall
- **ReadyCraft:** delete `version.dll` and `ReadyCraft.dll`, and clear the Steam launch option.
- **CyberCraft:** delete `red4ext\plugins\CyberCraft` and `bin\x64\reshade-shaders\Shaders\CyberCraft.fx`.
- **GTACraft:** delete `GTACraft.asi` and `reshade-shaders\Shaders\GTACraft.fx`. To play GTA Online again, also remove Script Hook V's four files.
- **RedCraft and PeakCraft:** see the README in their zips.
- **SkyCraft's Minecraft:** delete `%LOCALAPPDATA%\SkyCraft`. That removes the launcher, this Minecraft and its saves.

---
title: "How to install and play FalloutCraft (Minecraft in Fallout 4)"
summary: "Fallout 4 Next-Gen with F4SE, plus Minecraft on Fabric 26.3 or NeoForge 1.21.1: install both halves, launch in the right order, and learn the controls."
date: 2026-10-09
mashup: falloutcraft
difficulty: medium
time: "30 minutes"
---
[FalloutCraft](/mashups/falloutcraft/) brings the SkyCraft design to the Commonwealth. This guide follows **v0.1.3** from [zeyvu/FalloutCraft](https://github.com/zeyvu/FalloutCraft/releases). New to mods? Read [Start here](/guides/start-here-playing-game-mashups/) first.

## 1. What you need
- **Fallout 4 on Steam, current Next-Gen runtime**, tested on **1.11.240**. The old-gen 1.10.163 runtime isn't supported.
- **F4SE 0.7.9** or newer.
- **Address Library for F4SE Plugins**, the *All in One* file ([Nexus mod 47327](https://www.nexusmods.com/fallout4/mods/47327)).
- **Minecraft: Java Edition** and a launcher you can make modded instances in (Prism, MultiMC, Modrinth, the official launcher, or CurseForge for NeoForge).
- About **3 GB of spare RAM**.
- Recommended: a save from after you leave Vault 111.

## 2. Pick your Minecraft side
Use **one** of these, not both:

| Option | Minecraft | Loader | Java | Jar |
|---|---|---|---|---|
| Fabric | 26.3 | Fabric Loader 0.19.5+ and Fabric API 0.161.0+26.3 | 25 | `falloutcraft-0.1.3.jar` |
| NeoForge | 1.21.1 | NeoForge 21.1.x (tested 21.1.252) | 21 | `falloutcraft-neoforge-0.1.3+1.21.1.jar` |

The NeoForge build lets you add other Minecraft mods, but shader packs (Iris/Oculus) and Sodium-style renderers don't work.

## 3. Install
1. Install **F4SE** and **Address Library**.
2. Install `FalloutCraft-0.1.3-FO4.zip` from the [Releases page](https://github.com/zeyvu/FalloutCraft/releases) with MO2 or Vortex. Or copy `commonlibf4-template.dll` into `Fallout 4\Data\F4SE\Plugins\` yourself.
3. Make a Minecraft instance for your chosen option, and put the jar (plus Fabric API for the Fabric option) in its `mods` folder.

## 4. Launch, in this order
1. **Start Minecraft first.** Its window hides and waits for Fallout. That's normal.
2. Start Fallout 4 through `f4se_loader.exe` (or MO2's F4SE entry) and load a save.
3. Minecraft takes over after a few seconds.

To confirm the plugin loaded, open `Documents\My Games\Fallout4\F4SE\commonlibf4-template.log`. It should begin with "SkyCraft (FalloutCraft) plugin build".

## 5. Controls
| Key | Does |
|---|---|
| E | Fallout activate |
| Tab | Pip-Boy |
| Esc | Fallout pause |
| ~ | Console |
| F9 | Quickload |
| I | Minecraft inventory (moved from E) |
| Shift | Sprint |
| Ctrl | Crouch |
| O | Minecraft menu |

Everything else (F5, T, /, hotbar, mouse) is Minecraft's.

## 6. Troubleshooting
- **Logs:** `commonlibf4-template.log`, `SkyCraft_crash.log`, and Minecraft's `logs\latest.log`.
- **Two jars installed** causes problems. Keep exactly one falloutcraft jar.
- **Camera and movement mods** conflict.
- **Known limits in 0.1.3:** you can stumble on cracked ground. Fallout weapons and VATS can't be used, and stimpaks don't heal hearts. Charisma and Intelligence do nothing yet. Digging into the world, lights, water, NPC pathing, skill training and multiplayer haven't been ported from SkyCraft yet. Deleting `FalloutCraft_worlds.txt` moves interiors.

## 7. Update or uninstall
- **Update:** update both halves, the Fallout plugin and the Minecraft jar.
- **Uninstall:** delete `Fallout 4\Data\F4SE\Plugins\commonlibf4-template.dll`, and remove the jar from your Minecraft instance.

## No Fallout 4? Play the tribute
[Blockrealm](/play/blockrealm/) runs a clean-room block-world RPG in your browser.

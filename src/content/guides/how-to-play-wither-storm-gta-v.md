---
title: "How to install and play the Wither Storm in GTA V"
summary: "Step by step: the GTA V Legacy and Minecraft 1.20.1 Forge setup, what's in the release zip, where its two folders go, starting both games, and the storm keys."
date: 2026-10-13
updated: 2026-10-13
mashup: wither-storm-gta-v
difficulty: medium
time: "30 minutes"
---
[Wither Storm in GTA V](/mashups/wither-storm-gta-v/) runs Cracker's Wither Storm Mod in Minecraft and draws the storm into Los Santos. This guide follows the single release, **mc-gta5** (4 October 2026), from [VortexisTV/wither-storm-gta5-passthrough](https://github.com/VortexisTV/wither-storm-gta5-passthrough/releases), plus the README. New to mods? Read [Start here](/guides/start-here-playing-game-mashups/) first.

## 1. What you need
- **Windows**, with both games on the same PC.
- **GTA V Legacy**, Story Mode only, with BattlEye disabled. GTA V Enhanced isn't supported, and never use mods in GTA Online.
- **Minecraft: Java Edition 1.20.1** in a **dedicated** launcher instance with **Forge 47.4.10** and **Java 17**.
- **Cracker's Wither Storm Mod 4.2.1** for 1.20.1. The README asks you to get it from [CurseForge](https://www.curseforge.com/minecraft/mc-mods/crackers-wither-storm-mod).

## 2. What's in the release zip
`wither-release.zip` has two setups, each with a `gta5-game` folder and a `mods` folder:
- **`mcmods-forge`**: the Wither Storm build. Its `mods` has `passthrough-forge-0.1.0.jar` and the Wither Storm jar. Its `gta5-game` has `MCPassthrough.asi`, ScriptHookV with its ASI loader (`dinput8.dll`), ReShade (`ReShade64.asi`) with its shaders and settings, and an `args.txt`.
- **`mcmods-fabric-vanilla`**: the original universal-modder passthrough for Minecraft 26.3 with Fabric (no storm).

## 3. Install
The release notes are two lines: put the `gta5-game` files in the GTA V folder, and the `mods` folder in your Minecraft directory. For the storm:
1. Make a Minecraft 1.20.1 instance with Forge 47.4.10 and Java 17, used only for this.
2. Copy the contents of `mcmods-forge\mods` into that instance's `mods` folder.
3. Close GTA and copy the contents of `mcmods-forge\gta5-game` into your GTA V folder. Back up anything with the same name first, such as an existing `dinput8.dll`, `ScriptHookV.dll`, ReShade or `args.txt`.
4. The README says ScriptHookV must be compatible with your installed GTA build. If the bundled one isn't, get the current one from [dev-c.com](https://www.dev-c.com/gtav/scripthookv/).

## 4. Play
1. Start the Forge instance and let it load the `passthrough` world. The bridge creates this creative void world itself.
2. Leave Minecraft running in the background with its window open.
3. Start GTA V Legacy with BattlEye disabled and pick **Story Mode**. The plugin connects to Minecraft on `127.0.0.1:25599`.
4. Press **Shift+F9** for an already-grown storm, or **F9** to watch it grow.

## 5. Keys in GTA
| Key | Does |
|---|---|
| F7 | Passthrough on / off |
| F8 | Re-level Minecraft's ground at your position |
| F9 | Summon a Wither Storm ahead of you |
| Shift+F9 | Summon a grown storm (phase 4) |
| F10 | Advance the storm one phase |
| F11 | Remove the storm |
| Shift+F11 | Start its death sequence |
| Left / right mouse | Minecraft attack / use |
| Mouse wheel, 1–9 | Minecraft hotbar |
| Tab | Cycle experimental GTA gun modes |

## 6. Known limits
- Roads, terrain and buildings aren't destroyed.
- A large storm plus two games needs a lot of CPU and GPU.
- ReShade needs GTA's depth buffer. If the storm doesn't appear behind scenery, check the effect, add-on support and depth settings.

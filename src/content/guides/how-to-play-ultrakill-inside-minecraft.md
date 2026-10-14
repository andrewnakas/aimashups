---
title: "How to install and play ULTRAKILL inside Minecraft (UKPassthrough)"
summary: "Step by step: the save you need, the Fabric half for Minecraft 26.3, the BepInEx half for ULTRAKILL, connecting the two, keys and the settings menu."
date: 2026-10-13
updated: 2026-10-13
mashup: ultrakill-inside-minecraft
difficulty: medium
time: "25 minutes"
---
[ULTRAKILL inside Minecraft](/mashups/ultrakill-inside-minecraft/) lets you play a Minecraft world as V1. It isn't [ULTRACRAFT](/mashups/ultracraft/), so don't mix their files. This guide follows **0.1.2** from [xandermodsstuff-dot/ultrakill-minecraft](https://github.com/xandermodsstuff-dot/ultrakill-minecraft/releases). New to mods? Read [Start here](/guides/start-here-playing-game-mashups/) first.

## 1. What you need
- **Windows** (10 or 11, 64-bit).
- **Minecraft: Java Edition 26.3** with **Fabric Loader 0.19.3** or newer and **Fabric API** for 26.3.
- **ULTRAKILL** on Steam with **BepInEx 5**.
- **An ULTRAKILL save that has finished the tutorial and has the Revolver.** Without it the mod doesn't work properly.
- A PC that can run both games at once. The README's minimum is a 6-core CPU, 12 GB of RAM and a Vulkan 1.3 GPU with 4 GB of video memory.

It's single-player only. The two games talk only on your own PC (127.0.0.1).

## 2. Download
From the [latest release](https://github.com/xandermodsstuff-dot/ultrakill-minecraft/releases/latest), get both files:
- `ukpassthrough-0.1.2.jar`, the Minecraft half
- `UKPassthrough.dll`, the ULTRAKILL half

The two halves only work with the same version of each other.

## 3. Minecraft half
**With the official Minecraft Launcher:**
1. Play Minecraft 26.3 once, then close it.
2. Run the [Fabric Installer](https://fabricmc.net/use/installer/), choose **26.3** on the Client tab and click **Install**.
3. Download [Fabric API](https://modrinth.com/mod/fabric-api) for 26.3.
4. Put Fabric API and `ukpassthrough-0.1.2.jar` in `%appdata%\.minecraft\mods` (create `mods` if it's missing).
5. In the launcher, choose **fabric-loader-…-26.3**.

**With the Modrinth App or CurseForge:** make a Fabric 26.3 instance or profile, install Fabric API from inside the app, then open the instance folder and put `ukpassthrough-0.1.2.jar` in its `mods` folder.

## 4. ULTRAKILL half
Play ULTRAKILL's tutorial until you have the Revolver first.

**With r2modman (recommended):** pick ULTRAKILL, make a new profile, download **BepInExPack** under Online, then in Settings > **Browse profile folder** put `UKPassthrough.dll` in `BepInEx\plugins`. Start the game with **Start modded**.

**By hand:** unzip `BepInEx_x64_5.4.21.0.zip` ([BepInEx 5.4.21](https://github.com/BepInEx/BepInEx/releases/tag/v5.4.21)) into the ULTRAKILL folder, start the game once to its main menu and quit, then put `UKPassthrough.dll` in `BepInEx\plugins`.

The mod keeps its weapons and loadout separately and doesn't change your save. Backing up ULTRAKILL's `Saves` folder is still a good idea.

## 5. Play
1. Start Minecraft with Fabric and open a single-player world. The top-left corner shows **"ULTRAKILL: waiting (127.0.0.1:25600)"** in gold.
2. Start ULTRAKILL (Start modded, or from Steam if you installed by hand). Leave its main menu alone.
3. Click back into Minecraft. The corner line turns green, and V1 falls into your world.
4. Play in Minecraft's window. Don't minimise or close ULTRAKILL's.

## 6. Keys
Moving, shooting, punching and switching weapons use your ULTRAKILL bindings. On top of those:

| Key | Does |
|---|---|
| F7 | Switch between V1 and plain Steve |
| F5 | First person / behind V1 / in front of V1 |
| Tab | Inventory: click an item to put it in V1's blue hand |
| Feedbacker punch (F) with an item in hand | Use it: place, swing, mine, eat, draw a bow |
| Knuckleblaster punch (G) | Empty V1's hand |
| R or a click when dead | Respawn where Minecraft would |
| 6 | Sandbox arm, in creative |
| Esc | Minecraft's pause menu, with **ULTRAKILL x Minecraft Settings** |
| `/uk` | Connection status |

The settings menu has Progression Mode (earn P from experience and buy your guns), Safe Building, Potato Mode for slower PCs, and a **Controls Guide...**.

## 7. If something goes wrong
- **The corner stays gold:** ULTRAKILL isn't running with the plugin. Check `UKPassthrough.dll` is in `BepInEx\plugins` and that `BepInEx\LogOutput.log` mentions UKPassthrough.
- **Weapons missing:** your save needs the tutorial finished and the Revolver.
- **Minecraft won't start:** check that Fabric API is for 26.3 and that only one `ukpassthrough-….jar` is in `mods`.
- **Port 25600 in use:** add `-Dukpassthrough.port=25601` to Minecraft's JVM arguments and set `Port = 25601` in `BepInEx\config\dev.ukmc.ukpassthrough.cfg`.

## 8. Update
Delete the old `ukpassthrough-….jar` before adding the new one, and replace `UKPassthrough.dll`.

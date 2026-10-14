---
title: "How to install and play WitcherCraft (Minecraft in The Witcher 3)"
summary: "Step by step: the Witcher 3 patch you need, copying the mod into the game, the first-run Minecraft sign-in, two settings to change, keys and saving."
date: 2026-10-13
updated: 2026-10-13
mashup: witchercraft
difficulty: easy
time: "15 minutes"
---
[WitcherCraft](/mashups/witchercraft/) lets you play The Witcher 3 as Steve from Minecraft. This guide follows **0.1.0** from [Wanesia/WitcherCraft](https://github.com/Wanesia/WitcherCraft/releases). New to mods? Read [Start here](/guides/start-here-playing-game-mashups/) first.

## 1. What you need
- **Windows 10 or 11** (64-bit) and **16 GB of RAM or more**: both games run at once.
- **The Witcher 3: Wild Hunt - Remastered**, tested on patches **5.0 and 5.01** (Steam).
- **A Microsoft account that owns Minecraft: Java Edition.** You don't need the Minecraft Launcher: WitcherCraft brings its own.
- **Keyboard and mouse.** Controllers don't work yet.
- An internet connection the first time.

## 2. Install
1. Download **WitcherCraft-0.1.0.zip** from the [Releases page](https://github.com/Wanesia/WitcherCraft/releases). Get the `.zip`, not the `.jar`.
2. In Steam, right-click The Witcher 3 > **Manage** > **Browse local files**. You should see `bin` and `content`.
3. Copy the zip's **bin** and **mods** folders straight into that folder.
4. If Windows asks to replace **dinput8.dll**, click **Skip**: another mod already uses it. Rename WitcherCraft's `dinput8.dll` (in `bin\x64_dx12`) to **witchercraft.asi** and put it in `bin\x64_dx12` instead. The author says this setup hasn't been tested yet.

## 3. First launch
1. Start The Witcher 3. A **WitcherCraft** message appears instead of the game. Click **OK** and the game closes.
2. **Prism Launcher** opens. Add the Microsoft account that owns Minecraft. Prism downloads Minecraft and closes by itself when it's done.
3. Start The Witcher 3 again. Minecraft now runs hidden in the background.
4. In **Options > Video > Graphics**, turn **Frame Generation** off (blocks shake and smear with it on) and **Motion Blur** off.

Load a save. You're Geralt until Minecraft is ready, then you turn into Steve.

## 4. Keys
| Key | Does |
|---|---|
| F8 | Switch between Steve and Geralt |
| G | Talk, loot, open doors, mount a horse |
| V (hold) | Witcher senses |
| X | Call Steve's horse |
| M / J / I / K | Map, journal, inventory, character |
| N | Meditate |
| Esc | Minecraft's menu; **WitcherCraft...** in it changes keys and options |

Minecraft's own controls work for moving, building and fighting.

## 5. Things to know
- **Saving:** Steve can't open the save menu. Press F8 to become Geralt, then Esc and save. Minecraft saves your blocks and items by itself.
- **One world:** a house you build in Velen also stands at the same spot in every other region.
- **Your blocks are Steve's only:** Geralt and the Witcher's people walk through them.
- Minecraft's FOV is locked at 70 while you play.
- If something feels wrong, press F8 to get Geralt back. **Reset everything to defaults** in the WitcherCraft menu undoes changed settings.

## 6. Update and uninstall
To update, copy the new zip's **bin** and **mods** folders over the old ones and choose **Replace**. To uninstall, delete `dinput8.dll` (or `witchercraft.asi`), `witchercraft_native.ini`, `witchercraft_native.log` and the `witchercraft` folder from `bin\x64_dx12`, and `mods\modWitcherCraft`. Your builds are kept in `%LOCALAPPDATA%\WitcherCraft` until you delete that folder.

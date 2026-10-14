---
title: "How to install and play MW2 x Risk of Rain 2 (the MW2 Soldier as a RoR2 survivor)"
summary: "Install the MW2 Soldier with r2modman or by hand, point it at your own MW2, then set up Create-a-Class and killstreaks. Controls, settings, getting unstuck and logs."
date: 2026-10-10
mashup: mw2-x-risk-of-rain-2
difficulty: easy
time: "15 minutes"
---
[MW2 x Risk of Rain 2](/mashups/mw2-x-risk-of-rain-2/) adds the MW2 Soldier to Risk of Rain 2, built from your own copy of Modern Warfare 2: its movement, guns, HUD, menus and killstreaks, with RoR2's items and enemies. This guide follows **v0.4.3** from [buhhrad/MW2xRoR2](https://github.com/buhhrad/MW2xRoR2/releases). New to mods? Read [Start here](/guides/start-here-playing-game-mashups/) first.

The project calls it experimental. Solo is tested on RoR2's October 8, 2026 update. Co-op was tested with 2 players before that update and not since; 3 and 4 player lobbies, other mods, Linux and Steam Deck haven't been tested.

## 1. What you need
- **Risk of Rain 2** on Steam (PC). v0.4.3 is for the October 8, 2026 update (Steam build 25475991).
- **Call of Duty: Modern Warfare 2 (2009)** on Steam, **with its multiplayer content installed**. Tested on MW2 Multiplayer Steam build 25374019. No game files come with the mod; it reads your install and finds it in your Steam libraries by itself.
- **Windows 10 or 11, 64-bit.** No extra runtimes.
- **BepInExPack** by bbepis.
- **In co-op, everyone needs the same mod version.** The lobby tells you if they don't match.

## 2. Install
The Thunderstore listing is waiting for review. Until it's up, use one of these. Both zips are on the [Releases page](https://github.com/buhhrad/MW2xRoR2/releases), and the release lists their SHA-256.

**r2modman or Thunderstore Mod Manager**
1. Pick **Risk of Rain 2** and a profile (a new one is fine).
2. Go to **Online**, search for **BepInExPack** (by bbepis) and click **Download**. A local mod doesn't bring its dependencies, so this comes first.
3. Download `MW2xRoR2-v0.4.3-thunderstore.zip`. Go to **Settings** → **Profile** tab → **Import local mod**, and pick the zip.

**Manual (no mod manager)**
1. In Steam, right-click Risk of Rain 2 → **Manage** → **Browse local files**.
2. Get [BepInExPack](https://thunderstore.io/c/riskofrain2/p/bbepis/BepInExPack/) with **Manual Download**. Extract what's inside its `BepInExPack` folder into the game folder, so `winhttp.dll` sits next to `Risk of Rain 2.exe`.
3. Extract `MW2xRoR2-v0.4.3-manual.zip` into the same folder. The mod ends up in `BepInEx\plugins\MW2xRoR2`.

**Gale** users: wait for the Thunderstore listing, or use the manual install.

## 3. First launch
1. With a mod manager, click **Start modded**. For a manual install, start the game from Steam as usual.
2. Pick the **MW2 Soldier** on character select.
3. On the Soldier's **Loadout** tab, choose a skin, a class and your three killstreaks. **Rank** has **Unlock everything**, which switches to a separate profile with everything unlocked and keeps your own progress apart.

On the first stage you get MW2's match start: Choose Class, the countdown and the spawn music, with no drop pod.

## 4. Controls
| Input | Does |
|---|---|
| RoR2 primary / secondary (left / right mouse) | Fire / aim down sights |
| R | Reload |
| Your MW2 sprint key (or RoR2's) | Sprint, and hold your breath while aiming |
| Left Ctrl / Z | Crouch / prone |
| 1 / 2 | Primary / secondary weapon |
| G (hold to cook) / F | Lethal / tactical |
| V | Knife |
| 3 | Underbarrel attachment |
| 5 | Use killstreak |
| X | Tactical Insertion |
| F3 / F5 | Create-a-Class / Create-a-Streak (character select) |
| F4 | Change class |
| F7 | First / third person (you spawn in third person) |
| F6 | MW2 mode off / on, to get unstuck |

The mod reads your MW2 (or IW4x) config and uses your own binds. The keys above are only the fallback for players without an MW2 config.

F4 follows MW2's rule: right after you spawn, a new class is yours on the spot. Once you've fought, it comes with your next spawn. **One Man Army**, the Soldier's utility skill, is the mid-fight change.

## 5. Settings
RoR2's **Settings → Gameplay** has **MW2 First-Person FOV** (65–90) and **MW2 Third Person Only**. Everything else is in `com.buhhrad.mw2ror2.cfg`, in `BepInEx\config\` or your mod manager's config editor. Edit it with the game closed. Some useful ones:

| Setting | Default | Does |
|---|---|---|
| `[Ammo] RoR2Ammo` | true | Guns never run out of reserve; launchers, grenades and tacticals recharge |
| `[Killstreaks] KillScale` | 4 | Kills a streak needs, times MW2's. 1 = MW2's |
| `[Balance] DamageMultiplier` | 1.25 | Damage of every MW2 round |
| `[Balance] MoveSpeedBoost` | 1.45 | How much faster than MW2 you move |
| `[Balance] RegenDelay` | 0 | MW2 health regen after this many seconds. 0 = off |
| `[MW2] WeaponVolume` | 0.35 | Volume of MW2's gun sounds |
| `[MW2] CommonMpPath` | found through Steam | Where your MW2 is, if it's not in a Steam library |

## 6. Known problems / fixes
- **No MW2 Soldier on character select:** the game started without mods. Launch with **Start modded** (or **Launch modded** in Gale), not from Steam. If it still happens, fully exit Steam and try again.
- **Stuck in the level:** press **F6** to turn MW2 mode off, walk out, then press **F6** again.
- **"MW2 not found" or "No MW2 weapons loaded" in the log:** check MW2's multiplayer is installed, or set `CommonMpPath` to your MW2 folder's `zone\<language>\common_mp.ff`.
- **Anything else:** close the game and attach `BepInEx\LogOutput.log` to an [issue](https://github.com/buhhrad/MW2xRoR2/issues). With a mod manager it's in the profile's folder. If you run other mods, include your mod list.
- Balance is still being tuned.

## 7. Update or uninstall
- **Update:** in a mod manager, import the new `-thunderstore.zip` the same way (or update from installed mods once it's on Thunderstore). Manual: extract the new zip over the old one. Your settings and rank are kept.
- **Play without mods (manual install):** rename `winhttp.dll` in the game folder, for example to `winhttp.dll.off`. Rename it back to play with them.
- The mod only writes inside the `BepInEx` folder and never changes your MW2 files.

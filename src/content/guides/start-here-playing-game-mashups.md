---
title: "Start here: how to install and play game mashups safely"
summary: "What every downloadable mashup needs: your own copies of the games, the right game versions, mod loaders, and how to check a release before you run it."
date: 2026-10-09
difficulty: easy
time: "5 minutes to read"
---
Every downloadable mashup on this site works the same basic way: it ships code only, and reads everything else from games you already own. This page covers what they have in common. Each mashup then has its own step-by-step guide.

## 1. You need your own copies
None of these mods include game files. You need a legal copy of every game involved, installed on your PC. Some need a specific console version too: several Skate 3 mashups read the **Xbox 360** version's `default.xex` and `data` folder, dumped from your own disc or Games on Demand copy. An `.iso` file on its own never works.

Nobody can legally send you those files, and you shouldn't download them from anyone. If you don't own the games, try the [clean-room tributes](/play/) instead: they run in your browser and need nothing.

## 2. Match the game version
Most mashups hook into a game's executable, so the exact version matters more than anything else:

| Game | Version mashups expect |
|---|---|
| Skyrim | Special Edition on the Anniversary Edition runtime (1.6.x / 1.7.x), not 1.5.97 or VR |
| Fallout 4 | Next-Gen runtime (tested on 1.11.240), not 1.10.163 |
| GTA San Andreas | Classic PC 1.0 US (downgrade a Steam copy), not the Definitive Edition |
| GTA III / Vice City | Original PC releases, not the Definitive Edition |
| Bully | Scholarship Edition 1.200 |
| Minecraft | Java Edition, usually 26.3 with Fabric |

If a mod does nothing at all, a wrong game version is the most likely reason.

## 3. Mod loaders
Many mashups are plugins for a loader that has to be installed first:

- **SKSE64** and **Address Library** for Skyrim, **F4SE** and **Address Library** for Fallout 4
- **OWML** (Outer Wilds Mod Manager) for Outer Wilds
- **me3** for Elden Ring
- An **ASI Loader** for classic GTA
- **Fabric** (or NeoForge) for the Minecraft side

Install each loader from its official page, and start the game through the loader rather than the normal launcher.

## 4. Check before you run anything
- **Download only from the project's own GitHub Releases page**, linked from each guide. Re-uploads on other sites aren't checked.
- **Check the release is recent and matches the guide's version.** Several projects publish SHA-256 hashes you can compare with `certutil -hashfile <file> SHA256` on Windows.
- **Windows SmartScreen** often warns about new, unsigned launchers. That's normal for small projects, but it's also why you should only run files from the source repo.
- **Stay offline in games with online anti-cheat.** Elden Ring mods in particular must never be used online.

## 5. Keep your saves safe
Back up your saves before you start, and use a new character or a dedicated save where a guide says so. Most of these mods are a week or two old and change quickly.

## 6. If something breaks
Every guide lists where the mod writes its log. When you report a problem, open an issue on the project's GitHub with that log attached. That's the fastest way to get it fixed, and it helps everyone else.

## Guides
- [SkyCraft: Minecraft in Skyrim](/guides/how-to-play-skycraft/)
- [FalloutCraft: Minecraft in Fallout 4](/guides/how-to-play-falloutcraft/)
- [OWCraft: Minecraft in Outer Wilds](/guides/how-to-play-owcraft/)
- [2010 Rust Rewrite Mashup: MW2, Skate 3 and Minecraft](/guides/how-to-play-2010-rust-rewrite-mashup/)
- [ER Mario: Mario in Elden Ring](/guides/how-to-play-er-mario/)
- [BullySkate: Skate 3 in Bully](/guides/how-to-play-bullyskate/)
- [GTA San AnSkateas: Skate 3 in San Andreas](/guides/how-to-play-gta-san-anskateas/)
- [GTA Skate: Skate 3 in GTA III and Vice City](/guides/how-to-play-gta-skate/)

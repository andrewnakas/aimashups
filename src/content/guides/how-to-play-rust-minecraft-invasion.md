---
title: "How to install and play Rust Minecraft Invasion (Minecraft mobs on MW2's Rust)"
summary: "The Apple silicon app, pointing it at your own MW2 (2009) files, preparing Minecraft resources, starting a Rust Invasion match, controls and killstreaks."
date: 2026-10-14
mashup: rust-minecraft-invasion
difficulty: medium
time: "20 minutes"
---
[Rust Minecraft Invasion](/mashups/rust-minecraft-invasion/) fills MW2's Rust map with Minecraft mobs. This guide follows **v0.9.0** from [oh-ashen-one/rust-minecraft-invasion](https://github.com/oh-ashen-one/rust-minecraft-invasion/releases). New to mods? Read [Start here](/guides/start-here-playing-game-mashups/) first.

## 1. What you need
- **An Apple silicon Mac** on **macOS 14 or later**. Windows, Intel Mac and Linux haven't been runtime-tested for this version.
- **The English Windows PC files of Modern Warfare 2 (2009)**, base game and multiplayer, for example a folder installed through Steam in CrossOver. The 2022 game and Campaign Remastered won't work.

## 2. Install
1. Download the `macOS-arm64.zip` from the [releases](https://github.com/oh-ashen-one/rust-minecraft-invasion/releases) and extract it.
2. Move **Rust Minecraft Invasion.app** to Applications and open it. It's ad-hoc signed, not notarized; if macOS blocks it, follow [Apple's instructions for opening a trusted app](https://support.apple.com/en-us/102445).
3. Click **Choose MW2 Folder** and pick the folder that contains `main/` and `zone/english/mp_rust.ff`.
4. Click **Prepare Files**. It downloads the pinned Minecraft resources from Mojang and checks them, which can take several minutes.
5. Click **Open Game Menu → Create Game → Rust Invasion → Rust**, start the match, choose **Intervention Quickscope** and press **Equip**.

**Check Setup** verifies everything without starting a game. Your MW2 folder is only read.

## 3. Controls

| Action | Keyboard / mouse | DualSense |
|---|---|---|
| Move / look | WASD / mouse | Sticks |
| Fire / aim | Left / right mouse | R2 / L2 |
| Jump / reload | Space / R | Cross / Square |
| Switch weapon | Your MW2 weapon-cycle key | Triangle |
| Use next earned killstreak | 4 | D-pad Right |

## 4. Killstreaks
Consecutive mob kills unlock every standard MW2 reward at each threshold: UAV at 3, Care Package and Counter-UAV at 4, up to the AC-130 and Chopper Gunner at 11, EMP at 15 and the Tactical Nuke at 25. Earning one never fires it; deploy it with 4 or D-pad Right. The counter resets when you die.

Logs and settings are in `~/Library/Application Support/Rust Minecraft Invasion/0.8.0/`; see `logs/latest-launch.log` if a launch fails.

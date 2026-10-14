---
title: "How to install and play Garry's Modcraft (Minecraft in Garry's Mod)"
summary: "Linux only: the 64-bit Garry's Mod branch, Prism Launcher, the gmodcraft launcher, joining a server, and setting one up."
date: 2026-10-14
mashup: garrys-modcraft
difficulty: medium
time: "30 minutes"
---
[Garry's Modcraft](/mashups/garrys-modcraft/) lets you play Garry's Mod as a Minecraft player. This guide follows the README and quickstart of [cheetahdotcat/garrys-modcraft](https://github.com/cheetahdotcat/garrys-modcraft). It's Linux (x86-64) only for now. New to mods? Read [Start here](/guides/start-here-playing-game-mashups/) first.

## 1. What you need
- **Linux x86-64** (the quickstart is written for CachyOS and Arch).
- **Garry's Mod** on Steam, on the **x86-64 - Chromium + 64-bit binaries** beta branch. Start it once after switching.
- **Minecraft Java** on a Microsoft account, and **[Prism Launcher](https://prismlauncher.org/)** with that account added. The AppImage is recommended.
- **Python** with Tk for the launcher window (on Arch: `sudo pacman -S tk`).
- From the server owner: the server address and password.

## 2. Install
1. Download `gmodcraft-launcher.pyz` and `garrys-modcraft-<version>.zip` from the [releases](https://github.com/cheetahdotcat/garrys-modcraft/releases), and check them with `sha256sum -c SHA256SUMS`.
2. Run `python gmodcraft-launcher.pyz`.
3. In the **Setup** tab, browse to the release bundle and press **Install / Update**. It copies the GMod modules and add-on into Garry's Mod, creates a `GmodCraft` Prism instance (Minecraft 26.3 with Fabric) and downloads Java 25 for it. All Status lines should turn green.

## 3. Join a server
1. **Play** tab > Servers > **Add...**: any name, the server address, Minecraft port `25565` unless told otherwise, and the password.
2. Double-click the server. The launcher starts Minecraft and Garry's Mod together and shows each step until you're in the world. The first Minecraft start takes a while.

If something fails, the **Logs** tab shows the GMod console and the Minecraft log with hints. A version mismatch means you and the server run different releases.

## 4. Run your own server
On a Linux x86-64 machine, with the release zip and `server_setup.sh`:

    bash server_setup.sh --bundle garrys-modcraft-<version>.zip --accept-eula

It installs the GMod dedicated server and the Minecraft server on the same machine (they talk through shared memory), asks for the passwords and writes `start.sh`, `stop.sh` and `status.sh` into `~/gmodcraft-server`. Forward **27015 UDP and TCP** and **25565 TCP**. Admins get a control centre in the spawn menu.

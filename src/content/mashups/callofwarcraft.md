---
title: "CallOfWarcraft (World of Warcraft × MW2)"
summary: "\"Warcraft with a gun\": a hidden MW2 runtime supplies a live gun, arms and weapon simulation, drawn in a vanilla WoW 1.12.1 client against a patched local server."
games: [world-of-warcraft, modern-warfare-2]
creators: [{ name: "yumekiru", url: "https://github.com/yumekiru" }]
technique: passthrough
origin: unverified
date: 2026-10-06
status: source-only
repo: "https://github.com/yumekiru/callofwarcraft"
stars: 3
license: "MIT (scripts); patches follow upstream licences"
checked: 2026-10-14
builtOn:
  - { label: "IW4L", url: "https://github.com/vladtrc/iw4L" }
  - { label: "Benilla", url: "https://github.com/samwhosung/benilla" }
  - { label: "vMaNGOS", url: "https://github.com/vmangos/core" }
parents: [iw4l]
---
CallOfWarcraft (also called CoDCraft) runs two game processes at once. A patched [IW4L](https://github.com/vladtrc/iw4L) supplies MW2's gun, arms, animations and weapon simulation, and a patched Benilla client draws the Warcraft world and UI, with the MW2 gun rendered as 3D geometry in Warcraft. You aim with the mouse, aim down sights, sprint and fire automatic weapons, and server-confirmed bullets go through the equipped weapon's main-hand damage. Hostile humanoids carry rifles, bullet kills are looted remotely, and grenades cook on **G**.

There are no builds. Setup scripts fetch the three open-source projects at pinned revisions, apply the patches and build the clients, and you also build a patched vMaNGOS server. You need your own WoW 1.12.1 (build 5875) data and the 2009 MW2 multiplayer data. Packaging scripts are MIT; the patches follow Benilla's, IW4L's and vMaNGOS's licences. The repository doesn't say whether an AI agent was used, so it's marked unverified.

---
title: "Monster Hunter Tri x Final Fantasy XI"
summary: "A native PC port of Monster Hunter Tri played as Final Fantasy XI: your FFXI character, menus, jobs, spells, Trusts and music, inside Monster Hunter's world."
games: [monster-hunter-tri, final-fantasy-xi]
creators:
  - { name: "Seamus (seamuswilkie31-dev)", url: "https://github.com/seamuswilkie31-dev" }
  - { name: "River" }
technique: decompile-port
origin: ai-built
date: 2026-10-03
status: source-only
repo: "https://github.com/seamuswilkie31-dev/pc-monsterhunter3-FFXI"
stars: 0
license: "MIT"
checked: 2026-10-14
builtOn:
  - { label: "pc-monsterhunter3 (original Monster Hunter Tri PC port)", url: "https://github.com/vs-sr-dev/pc-monsterhunter3" }
  - { label: "wiikit", url: "https://github.com/vs-sr-dev/wiikit" }
links:
  - { label: "Video: Monster Hunter TRI X Final Fantasy XI (YouTube)", url: "https://www.youtube.com/watch?v=ZDDOMTaoo3s" }
seenOn:
  - { label: "chasm Discord #share-your-projects", url: "https://discord.com/channels/1553823769460613140/1554228730120114339" }
faqs:
  - { q: "Is there a download?", a: "Not a prebuilt one. The repository's Setup.bat builds the game on your PC from your own European Monster Hunter Tri disc (RMHP08) and reads your own Final Fantasy XI installation." }
  - { q: "Does it connect to FFXI's servers?", a: "No. The README says only FFXI's installed files are read and the game never connects to FFXI's servers." }
---
This one starts from a native PC port of Monster Hunter Tri: the Wii game's PowerPC code statically recompiled to C++ and run on [wiikit](https://github.com/vs-sr-dev/wiikit), with no emulator. That port is Samuele Voltan's ([vs-sr-dev](https://github.com/vs-sr-dev/pc-monsterhunter3)). Seamus and River added an FFXI layer on top. A bridge compiled into the port hooks monster damage, the hunter, menus, cameras and the pad, and shares memory with a Python layer that runs FFXI's rules and draws FFXI's models, effects and interface from your own FFXI installation.

You play your own FFXI character in the hunter's place, with FFXI's command menu, combat log, macro bars and Vana'diel clock. Combat is FFXI's: auto-attack, TP, weapon skills, skillchains and magic bursts, six jobs (WAR, DRK, PLD, RDM, WHM, BLM) plus a subjob, and Trusts fighting beside you. Hits land as real Monster Hunter hits, so monsters flinch, fall and can be carved, and drops go to a treasure pool. F9 swaps back to Monster Hunter's HUD, and `/combat mh` brings back Monster Hunter's combat.

The FFXI layer's first commit is dated 3 October 2026, and a gameplay video followed on 10 October. There are no release builds: Setup.bat builds the game from your own disc (15 to 40 minutes the first time). The README thanks Claude Opus, which "wrote much of the FFXI layer, the bridge and the setup", and 138 of the repository's commits are co-authored by Claude Opus 5.5. It's marked as a work in progress that hasn't been fully tested for glitches.

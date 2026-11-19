---
name: Passthrough mod
seoTitle: "What Is a Passthrough Mod? How Two Games Run as One"
summary: "A passthrough mod runs two games at the same time and links them through shared memory every frame. One game simulates, the other draws. SkyCraft (Minecraft in Skyrim) is the classic example."
description: "A passthrough mod runs two games at once, linked by shared memory: one simulates, the other draws. How SkyCraft and its forks work, and what you need."
order: 1
faqs:
  - { q: "What is a passthrough mod?", a: "A mod that runs two games at the same time, leaving both intact, and links them with a small plugin in each that talks to the other through shared memory every frame. One game simulates the gameplay and the other draws it. SkyCraft, which puts Minecraft inside Skyrim, is the best-known example." }
  - { q: "What do you need to play a passthrough mod?", a: "Your own copies of both games, each game's mod loader or script extender (for example SKSE for Skyrim and Fabric or NeoForge for Minecraft), and a PC that can run both games at once." }
---
A passthrough mod leaves both games intact. Each game gets a small plugin: a script-extender plugin on one side (SKSE for Skyrim, F4SE for Fallout 4, an ASI plugin for GTA), and a mod loader on the other (Fabric or NeoForge for Minecraft). The two plugins talk through **shared memory** every frame.

In [SkyCraft](/mashups/skycraft-minecraft-in-skyrim/), the template for most of the wave, Minecraft runs hidden in the background and simulates the player, the inventory and the blocks. Skyrim feeds its collision into Minecraft and draws everything, including the blocks, under its own sun, shadows and weather.

**Why it spread so fast:** neither game is rewritten, so an AI coding agent only has to write the two bridge plugins and the data contract between them. The catch is that you need to own both games and a PC that can run both at once.

**Examples:** SkyCraft, FalloutCraft, OWCraft, ArkWeb, Minecraft in GTA V.

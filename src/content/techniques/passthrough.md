---
name: Passthrough mod
summary: Both games run at the same time and trade state every frame. One game simulates, the other draws.
order: 1
---
A passthrough mod leaves both games intact. Each game gets a small plugin: a script-extender plugin on one side (SKSE for Skyrim, F4SE for Fallout 4, an ASI plugin for GTA), and a mod loader on the other (Fabric or NeoForge for Minecraft). The two plugins talk through **shared memory** every frame.

In [SkyCraft](/mashups/skycraft-minecraft-in-skyrim/), the template for most of the wave, Minecraft runs hidden in the background and simulates the player, the inventory and the blocks. Skyrim feeds its collision into Minecraft and draws everything, including the blocks, under its own sun, shadows and weather.

**Why it spread so fast:** neither game is rewritten, so an AI coding agent only has to write the two bridge plugins and the data contract between them. The catch is that you need to own both games and a PC that can run both at once.

**Examples:** SkyCraft, FalloutCraft, OWCraft, ArkWeb, Minecraft in GTA V.

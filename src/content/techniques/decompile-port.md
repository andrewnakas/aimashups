---
name: AI decompilation port
summary: An agent decompiles or recompiles a game's own code into a new program, often a PC or browser port, that still needs the original game's data.
order: 3.5
---
Here the agent doesn't rebuild a game from observation. It works from the game's compiled code: decompiling it to readable source or statically recompiling it for a new platform, then fixing what breaks. Once the game exists as source, other games can be grafted onto it. That's how [P.E. Cooper's World at War zombies](/mashups/cod-zombies-in-the-browser/) ended up in a browser and then collided with half a dozen other games.

The same technique produced the AI-generated PC recompilations that the human [Zelda and Banjo Recompiled](https://kotaku.com/zelda-and-banjo-recompiled-devs-go-to-war-with-ai-vibe-coded-slopcomps-2000739936) teams called "slopcomps": ports that build on years of human reverse-engineering research but patch the output in ways nobody can maintain.

The results are derived from the original game's code, so they can't be hosted or shared as standalone games. The careful versions keep the game data out of the repository and load it from the player's own copy. The [clean-room](/techniques/clean-room/) approach goes the other way: no original code at all.

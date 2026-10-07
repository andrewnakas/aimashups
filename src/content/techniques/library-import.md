---
name: Character import
summary: One game's character, with its original movement code, is embedded as a library inside another game.
order: 3
---
Instead of linking two whole games, a character import takes one game's player character, with its movement physics intact, and runs it inside another game. The best-known example is [Mario in Elden Ring](/mashups/er-mario-mario-in-elden-ring/). It uses [libsm64](https://github.com/libsm64/libsm64), a library built from the public Super Mario 64 decompilation that exposes Mario's real movement as a function you can call every frame. The host game's collision is fed into libsm64, and Mario's position and animation come back out.

The player's own ROM supplies the textures, sounds and animations, which are built locally on first launch.

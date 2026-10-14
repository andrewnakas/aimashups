---
title: "Shadows of Tamriel (Assassin's Creed movement in Skyrim)"
summary: "Assassin's Creed 1's locomotion, free-running and leaps of faith running natively in Skyrim SE/AE, with animations extracted from your own copy of AC1. Work in progress, source only."
games: [assassins-creed, skyrim]
creators: [{ name: "tnrjns", url: "https://github.com/tnrjns" }]
technique: library-import
origin: ai-built
date: 2026-10-12
status: source-only
repo: "https://github.com/tnrjns/shadows-of-tamriel"
stars: 6
checked: 2026-10-13
builtOn:
  - { label: "AC1 Movement Rewritten", url: "https://github.com/Banned445/AC1-Movement-Rewritten" }
links:
  - { label: "Greybox demo (YouTube)", url: "https://www.youtube.com/watch?v=QjH20tMcsJg" }
parents: [skse]
---
Shadows of Tamriel keeps your character a normal Skyrim character (physics, camera, combat, saves) but has it move like Altaïr. It's built on [AC1 Movement Rewritten](https://github.com/Banned445/AC1-Movement-Rewritten), an open-source reverse-engineered rewrite of Assassin's Creed 1's movement. That project's research decides how jump targets are found and scored. An SKSE plugin, `AltairFreerun.dll`, uses Havok rays to find AC1-style targets and plays AC1's own takeoff, flight and landing clips with the root locked onto the target. It covers ledges, beams, poles, swing bars, wall runs and viewpoint synchronisation. Haystacks arm the leap of faith, eagle cry included.

The animations and sounds aren't in the repository. Tools extract them from your own copy of Assassin's Creed (Director's Cut) and retarget them to the Skyrim skeleton in Blender. There's no installer or release yet: the README gives a build outline and says the script paths are still the author's own. All 14 of its commits are co-authored by Claude Opus 5.5. The repository has no licence file.

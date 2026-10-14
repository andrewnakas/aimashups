---
title: "BeamNG × Los Santos (BeamNG.drive × GTA V)"
summary: "A real BeamNG.drive car, with its soft-body physics, tuning and damage, driving through GTA V Legacy's Los Santos with GTA's traffic and police. In development."
games: [beamng-drive, gta-v]
creators: [{ name: "CrackGohan", url: "https://github.com/CrackGohan" }]
technique: passthrough
origin: ai-built
date: 2026-10-08
status: source-only
repo: "https://github.com/CrackGohan/Beamng-x-GTAV"
stars: 0
checked: 2026-10-14
---
BeamNG × Los Santos runs both games side by side over UDP. In GTA V, `BeamLS.asi` keeps an invisible GTA car on the BeamNG car's position so traffic and police react to it, and sends GTA's camera, controls, ground, walls and traffic to BeamNG. A BeamNG mod drives the car from GTA's controls, mirrors GTA's world as invisible collision and renders the car, which ReShade composites into GTA's frame. **F6** opens BeamNG's car selector, **F7** its tuning, and crashes into traffic, walls and police rams deform the car.

The README says it builds and passes its tests without the games but "has not run in the real games yet". It targets GTA V Legacy 1.0.3889.0 story mode and was made for Melty's one-click installs. It says it was "Built with AI assistance (Claude Code)", and its commits are co-authored by Claude Opus 5.5. A [separate BeamNG-in-GTA V project](/mashups/beamng-cars-in-gta-v/) by another author uses a similar design.

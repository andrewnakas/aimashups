---
title: "World at War Zombies in the browser (P.E. Cooper)"
summary: "Call of Duty: World at War's first zombies map, ported to the web by Opus 5.5, then crossed with Wii Sports, Mario Kart, Portal, Fortnite, NHL and Halo."
games: [cod-world-at-war]
creators: [{ name: P.E. Cooper, url: "https://x.com/p_e_cooper" }]
technique: decompile-port
origin: ai-built
date: 2026-09-29
status: video-only
checked: 2026-10-09
sources:
  - { title: "Call of Duty fan creates insane Zombies crossovers with Wii Sports, Portal & Fortnite", publisher: "Dexerto", url: "https://www.dexerto.com/call-of-duty/call-of-duty-fan-creates-insane-zombies-crossovers-with-wii-sports-portal-fortnite-3414983/" }
  - { title: "The Wild AI Mashups That Broke the Internet: What's Real and What You Can Download", publisher: "VGTimes", url: "https://vgtimes.com/articles/169886-how-ai-game-mashups-work.html" }
  - { title: "The trend of AI generating mashup mods has angered mod creators", publisher: "GIGAZINE", url: "https://gigazine.net/gsc_news/en/20261005-modders-furious-claude-powered-mashup-mods/" }
faqs:
  - { q: "Can I play World at War Zombies in my browser?", a: "Not from this project. The port and the crossovers are only shown in clips; nothing has been released." }
  - { q: "Which AI did P.E. Cooper use?", a: "Claude Opus 5.5 together with Astra, according to the original post." }
---
On 29 September P.E. Cooper posted that they'd had Opus 5.5 and Astra "pull the source code" for Call of Duty: World at War and port the original Nazi Zombies map to the web. The clip showed the classic map running in a browser tab.

## The crossovers
With the game in a form an agent could edit, the follow-ups came quickly: Mario Kart karts, a World of Warcraft makeover, NHL, Halo, Portal and Fortnite crossovers, and a Wii Sports version where you play as a Mii who bowls, punches or bats the zombies. Dexerto covered the Wii Sports clip on 2 October, and VideoCardz used the Mario Kart one in its headline.

## How it was made
This is an [AI decompilation port](/techniques/decompile-port/): the agent works from the game's compiled code rather than rebuilding it from observation, so the result is still World at War's code and data. That's why none of it has been released, and why it couldn't be hosted publicly even if it were. A browser zombies mode built from scratch would be a [clean-room](/techniques/clean-room/) project.

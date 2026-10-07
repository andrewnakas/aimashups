// Playable GameMash presets. Every pair of modes gets a page at /play/<a>-x-<b>/.
// Copy describes only mechanics GameMash actually has: the synergy rules in
// GameMash src/core/score.rs and the cross-mode interactions listed in its README.

import { MODES, pairSlug } from './modes';

export interface Preset {
  modes: string[]; // mode slugs
  name?: string; // in-game preset name, when GameMash ships one
  title: string; // H1 / search phrasing
  pitch: string; // one-sentence description (meta description)
  combos: string[]; // what actually happens when these modes meet
}

const P = (modes: string[], p: Omit<Preset, 'modes'>): Preset => ({ modes, ...p });

const MOMENTUM = 'Your momentum carries across every switch: toggle modes mid-air and keep your speed.';

export const PAIRS: Preset[] = [
  P(['skate', 'platformer'], {
    title: 'Skateboarding Platformer',
    pitch: 'Ollie and grind through a city, then hop off the board into triple jumps, wall kicks and ground pounds.',
    combos: ['Hop off the board (G) mid-line and chain straight into a triple jump.', 'Wall-kick up to rooftops a board can’t reach, then drop back in to skate the ledges.', MOMENTUM],
  }),
  P(['skate', 'shooter'], {
    name: 'Kickflip Warfare',
    title: 'Skateboarding Shooter',
    pitch: 'Kickflip over bots, aim down sights mid-air and land a KICKFLIP KILL, the original GameMash combo.',
    combos: ['A kill within 1.5 s of landing a trick scores “<TRICK> KILL” for double the trick’s points plus 200.', 'Kills while airborne score AIRBORNE KILL (+250).', 'Killstreaks (UAV, care package, airstrike) still stack while you skate.'],
  }),
  P(['skate', 'open-world'], {
    title: 'Skateboarding Open-World Crime Game',
    pitch: 'Skate a living city with traffic and a five-star wanted level. Bail off a stolen car onto your board.',
    combos: ['Skate through traffic while the police chase you on foot and by car.', 'Jump out of a stolen car and push off on your board to lose the cops.', MOMENTUM],
  }),
  P(['skate', 'voxel'], {
    title: 'Skateboarding Voxel Sandbox',
    pitch: 'Build your own skatepark out of blocks, including rail blocks you can grind, and blow it up with TNT.',
    combos: ['Rail blocks are real grindable rails: place a line and grind it.', 'Break blocks out of your way or place a kicker mid-line.', 'TNT carves the voxel layer, so you can blast new transitions.'],
  }),
  P(['skate', 'portals'], {
    title: 'Skateboarding Portal Game',
    pitch: 'Shoot two portals and skate through them with your speed intact. Tricks right out of a portal score PORTAL TRICK.',
    combos: ['Portals keep your momentum: skate in fast, fly out fast.', 'A trick within 2 s of going through a portal scores PORTAL TRICK (the trick’s points again).', 'Your board passes through portals with you.'],
  }),
  P(['skate', 'web-swing'], {
    title: 'Web-Swinging Skateboarder',
    pitch: 'Web-swing above the streets, fling off the release and land tricks for a SWING BOOST bonus scaled by speed.',
    combos: ['Tricks within 3 s of a swing release score SWING BOOST, scaled by your release speed.', 'Fling off a swing straight into a grind line.', MOMENTUM],
  }),
  P(['skate', 'bullet-time'], {
    title: 'Skateboarding in Bullet-Time',
    pitch: 'Time moves only when you move, so every flip and grind plays in your own slow motion.',
    combos: ['Hold still mid-air and the world freezes. Line up the landing, then commit.', 'Slow pushes mean slow time: carve in controlled slow motion.', MOMENTUM],
  }),
  P(['platformer', 'shooter'], {
    title: '3D Platformer Shooter',
    pitch: 'Triple jump over bots, backflip into an airborne kill and ground-pound into cover.',
    combos: ['Kills while airborne score AIRBORNE KILL (+250). Triple jumps and backflips keep you in the air.', 'Wall-kick to high ground the bots can’t reach.', 'Call in an airstrike, then long-jump clear.'],
  }),
  P(['platformer', 'open-world'], {
    title: 'Platformer Open-World Crime Game',
    pitch: 'Long-jump across traffic, dive through a city with a wanted level and wall-kick up away from the police.',
    combos: ['Steal a car, then dive out and triple jump onto a rooftop to lose your stars.', 'Ground-pound from height, then sprint into traffic.', MOMENTUM],
  }),
  P(['platformer', 'voxel'], {
    title: 'Platformer Voxel Sandbox',
    pitch: 'Ground pounds smash blocks. Build your own obstacle course and wall-kick up it.',
    combos: ['Ground pounds break voxel blocks under you.', 'Place blocks to build a wall-kick chimney, then climb it.', 'TNT plus a well-timed long jump makes a launch pad.'],
  }),
  P(['platformer', 'portals'], {
    name: 'Plumber Portals',
    title: 'Platformer Portal Game',
    pitch: 'Long-jump into a portal and come out the other side with all your speed: momentum puzzles with a triple jump.',
    combos: ['Portals keep momentum, so a ground pound into a floor portal launches you out of a wall.', 'Chain long jumps through portals to cross gaps.', 'Use portals to reach shards that are awkward to jump to.'],
  }),
  P(['platformer', 'web-swing'], {
    title: 'Web-Swinging Platformer',
    pitch: 'Web-swing between buildings and release into a triple jump or a dive.',
    combos: ['Release a swing at the top of the arc and triple jump from there.', 'Tether two objects together with Z, then wall-kick off them.', MOMENTUM],
  }),
  P(['platformer', 'bullet-time'], {
    title: 'Bullet-Time Platformer',
    pitch: 'Time moves only while you move. Freeze mid-jump, read the level, then commit.',
    combos: ['Stop moving at the peak of a triple jump to freeze the world.', 'Precision wall kicks in slow motion.', MOMENTUM],
  }),
  P(['shooter', 'open-world'], {
    title: 'Military Shooter in an Open-World City',
    pitch: 'Bots, killstreaks and aim-down-sights gunplay in a city with traffic, carjacking and a wanted level.',
    combos: ['Explosions wreck cars: call in an airstrike on traffic.', 'Steal a car to escape bots and police at once.', 'Care packages drop into live streets.'],
  }),
  P(['shooter', 'voxel'], {
    name: 'Block Ops',
    title: 'Voxel Military Shooter',
    pitch: 'Dig cover out of the ground, build walls, and watch explosions carve the voxel world.',
    combos: ['Explosions carve the voxel layer. Airstrikes and TNT reshape the map.', 'Place blocks for instant cover, then aim down sights.', 'Mine a tunnel to flank the bots.'],
  }),
  P(['shooter', 'portals'], {
    title: 'Portal Shooter',
    pitch: 'Shoot through your own portals. A kill within two seconds of a portal scores THROUGH THE PORTAL.',
    combos: ['Bullets pass through portals: shoot around corners.', 'A kill within 2 s of a portal scores THROUGH THE PORTAL (+500).', 'Drop through a floor portal behind the bots.'],
  }),
  P(['shooter', 'web-swing'], {
    title: 'Web-Swinging Shooter',
    pitch: 'Swing over the battlefield and fire from the air for AIRBORNE KILLs. Tethers yank bots off their feet.',
    combos: ['Kills while airborne score AIRBORNE KILL (+250).', 'Z tethers can yank bots toward objects.', 'Release a swing to fling over cover.'],
  }),
  P(['shooter', 'bullet-time'], {
    title: 'Bullet-Time Military Shooter',
    pitch: 'Time moves only when you move: aim down sights in a frozen firefight, then make your move.',
    combos: ['Stand still to freeze incoming fire and line up every shot.', 'Killstreaks land in slow motion.', 'Pair with jumps for slow airborne kills.'],
  }),
  P(['open-world', 'voxel'], {
    title: 'Voxel Open-World Crime Game',
    pitch: 'Steal cars in a city you can dig through, build over and blow up with TNT.',
    combos: ['TNT carves the city’s voxel layer and wrecks cars.', 'Wall off a street with blocks to stop a police chase.', 'Dig in and build walls while the police close in.'],
  }),
  P(['open-world', 'portals'], {
    title: 'Portal Open-World Crime Game',
    pitch: 'Drive a stolen car into a portal and out the other side at full speed. Cars pass straight through.',
    combos: ['Cars pass through portals with their momentum intact.', 'Portal out of a police chase.', 'Bullets and cars both pass through, so the chase can follow you.'],
  }),
  P(['open-world', 'web-swing'], {
    name: 'Getaway',
    title: 'Web-Swinging Open-World Crime Game',
    pitch: 'Swing across the city and steal a car straight out of the swing: an AERIAL JACK.',
    combos: ['Carjacking within 2.5 s of a swing release scores AERIAL JACK (+800).', 'Tethers yank cars around.', 'Swing over a roadblock when your wanted level climbs.'],
  }),
  P(['open-world', 'bullet-time'], {
    title: 'Bullet-Time Open-World Crime Game',
    pitch: 'A city where time moves only when you move. Freeze traffic, then pick your getaway.',
    combos: ['Stand still and the whole chase freezes around you.', 'Drive in controlled slow motion through traffic.', 'Slow carjacks with no rush.'],
  }),
  P(['voxel', 'portals'], {
    title: 'Voxel Portal Sandbox',
    pitch: 'Build with blocks and link it with portals that keep momentum: a block-built portal puzzle sandbox.',
    combos: ['Build a drop shaft and a floor portal for an endless fall loop.', 'Portal TNT into places you can’t reach.', 'Place portals on your own builds.'],
  }),
  P(['voxel', 'web-swing'], {
    title: 'Web-Swinging Voxel Sandbox',
    pitch: 'Swing off your own block towers and tether things together in a world you can break and build.',
    combos: ['Build an anchor point anywhere and swing from it.', 'Tether objects together across your builds.', 'Fling off a swing onto a rail block.'],
  }),
  P(['voxel', 'bullet-time'], {
    title: 'Bullet-Time Voxel Sandbox',
    pitch: 'Light TNT and walk away in slow motion. Time moves only when you move.',
    combos: ['Freeze a TNT explosion mid-blast by standing still.', 'Build mid-fall in slow motion.', 'Combine with Shooter for slow-motion block warfare.'],
  }),
  P(['portals', 'web-swing'], {
    title: 'Web-Swinging Portal Game',
    pitch: 'Swing into a portal and fling out of the other one at full pendulum speed.',
    combos: ['Portals keep the speed of your swing release.', 'Tether objects on either side of a portal.', MOMENTUM],
  }),
  P(['portals', 'bullet-time'], {
    title: 'Bullet-Time Portal Game',
    pitch: 'Portal momentum puzzles where time moves only when you move.',
    combos: ['Freeze mid-flight between portals and plan your exit.', 'Place the second portal while the world is frozen.', MOMENTUM],
  }),
  P(['web-swing', 'bullet-time'], {
    title: 'Bullet-Time Web-Swinging',
    pitch: 'Web-swing through a city where time follows your input: perfect releases, every time.',
    combos: ['Stop at the top of a swing arc to freeze time and aim the release.', 'Slow-motion tethers.', MOMENTUM],
  }),
];

export const FEATURED: Preset[] = [
  P(['skate', 'shooter', 'voxel'], {
    name: 'Block Ops (with board)',
    title: 'Skate × Shooter × Voxel',
    pitch: 'Kickflip kills on a map you can dig, build and grind: the closest match to the MW2 × Skate 3 × Minecraft mashup.',
    combos: ['KICKFLIP KILL and AIRBORNE KILL from Skate × Shooter.', 'Grindable rail blocks and explosions that carve the world.', 'Inspired by the 2010 Rust Rewrite Mashup.'],
  }),
  P(['skate', 'portals', 'web-swing'], {
    name: 'Web Skater',
    title: 'Skate × Portals × Web-Swing',
    pitch: 'Swing, portal and skate in one line: SWING BOOST and PORTAL TRICK stack on the same trick.',
    combos: ['SWING BOOST and PORTAL TRICK can both apply to one trick.', 'Every mode keeps your momentum.', 'Boards pass through portals.'],
  }),
  P(['platformer', 'shooter', 'bullet-time'], {
    name: 'Slow-Mo Shootout',
    title: 'Platformer × Shooter × Bullet-Time',
    pitch: 'Backflip into a frozen firefight and line up AIRBORNE KILLs while time waits for you.',
    combos: ['AIRBORNE KILL from jumps.', 'Time moves only when you move.', 'Killstreaks in slow motion.'],
  }),
  P(['open-world', 'web-swing', 'bullet-time'], {
    name: 'Getaway (slow-mo)',
    title: 'Open-World × Web-Swing × Bullet-Time',
    pitch: 'A slow-motion city getaway: swing, freeze and AERIAL JACK the perfect car.',
    combos: ['AERIAL JACK out of a swing.', 'Freeze the chase by standing still.', 'Tethers that yank cars.'],
  }),
];

export const ALL_PRESETS = [...PAIRS, ...FEATURED];
export const presetSlug = (p: Preset) => pairSlug(p.modes);

// Every pair of modes must be covered exactly once.
if (PAIRS.length !== (MODES.length * (MODES.length - 1)) / 2) throw new Error(`expected 28 pairs, have ${PAIRS.length}`);

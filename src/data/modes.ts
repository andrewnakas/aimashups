// The eight GameMash modes, under the generic names used across the site.
// `gm` is the name GameMash accepts in `?modes=` (see GameMash src/core/modes.rs).

export interface Mode {
  slug: string;
  gm: string;
  name: string;
  noun: string; // reads naturally inside a sentence: "a skateboarding game"
  inspiredBy: string;
  blurb: string;
  controls: string;
  color: string;
}

export const MODES: Mode[] = [
  {
    slug: 'skate', gm: 'skate', name: 'Skate', noun: 'skateboarding',
    inspiredBy: '2010-era skateboarding sims',
    blurb: 'Kick pushes, charged ollies, flips, grinds, manuals, combos and bails.',
    controls: 'W push · S brake · A/D carve · hold+release Space ollie · J/K/L/U/H flips · Y grab · G hop on/off',
    color: '#ffb81c',
  },
  {
    slug: 'platformer', gm: 'jump', name: 'Platformer', noun: '3D platformer',
    inspiredBy: 'N64-era 3D platformers',
    blurb: 'Triple jump, long jump, backflip, side flip, wall kick, ground pound and dive, with shards to collect.',
    controls: 'Space jump (chain for double/triple) · Ctrl crouch / ground pound · Ctrl+Space long jump or backflip · F dive',
    color: '#e63946',
  },
  {
    slug: 'shooter', gm: 'warfare', name: 'Shooter', noun: 'military shooter',
    inspiredBy: '2009-era military shooters',
    blurb: 'Aim down sights, recoil, bots, health regen and killstreaks (UAV, care package, airstrike).',
    controls: 'LMB fire · RMB aim · R reload · Shift sprint · 1-3 weapons · 5 UAV · 6 care package · 7 airstrike',
    color: '#6e8c5a',
  },
  {
    slug: 'open-world', gm: 'streets', name: 'Open-World Crime', noun: 'open-world crime',
    inspiredBy: '2004-era open-world crime games',
    blurb: 'Traffic, carjacking, a five-star wanted level, police that chase and shoot, and a minimap.',
    controls: 'E enter/steal car · W/S drive · A/D steer · Space handbrake',
    color: '#f078c8',
  },
  {
    slug: 'voxel', gm: 'blocks', name: 'Voxel', noun: 'voxel sandbox',
    inspiredBy: 'voxel sandbox games',
    blurb: 'Break and place blocks anywhere, light TNT, and build rail blocks you can grind.',
    controls: '4 pickaxe/blocks · LMB break · RMB place · scroll block type · T TNT',
    color: '#5eaa50',
  },
  {
    slug: 'portals', gm: 'portals', name: 'Portals', noun: 'portal puzzle',
    inspiredBy: '2007-era portal puzzlers',
    blurb: 'Two linked portals that keep your momentum. Bullets, cars and boards all pass through.',
    controls: '8 portal gun · LMB blue · RMB orange',
    color: '#40a0ff',
  },
  {
    slug: 'web-swing', gm: 'swing', name: 'Web-Swing', noun: 'web-swinging',
    inspiredBy: 'web-swinging superhero games',
    blurb: 'Pendulum web-swing, release fling, and tethers that yank cars and bots.',
    controls: 'Q hold to swing, release to fling · Z tether two objects',
    color: '#c8283c',
  },
  {
    slug: 'bullet-time', gm: 'bullettime', name: 'Bullet-Time', noun: 'time-moves-when-you-move',
    inspiredBy: 'shooters where time moves only when you move',
    blurb: 'The world clock follows your input. Stand still and everything freezes.',
    controls: 'Time scales with how much you move',
    color: '#ebebf5',
  },
];

export const modeBySlug = (slug: string) => {
  const m = MODES.find((m) => m.slug === slug);
  if (!m) throw new Error(`unknown mode ${slug}`);
  return m;
};

/** Canonical pair slug, in MODES order: "skate-x-shooter". */
export const pairSlug = (slugs: string[]) =>
  [...slugs].sort((a, b) => MODES.findIndex((m) => m.slug === a) - MODES.findIndex((m) => m.slug === b)).join('-x-');

export const playUrl = (playerOrigin: string, slugs: string[], panel = false) =>
  `${playerOrigin}/gamemash/?modes=${slugs.map((s) => modeBySlug(s).gm).join(',')}${panel ? '' : '&panel=0'}`;

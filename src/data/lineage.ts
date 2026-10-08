// The family tree on /history/: what each mashup was built on, as credited in its
// own README (checked 8 Oct 2026). Mashups list their parents in frontmatter
// (`parents`), and a parent can be a foundation below or another mashup's id.
// Foundations are the engines, libraries and loaders that aren't mashups themselves.

export interface Foundation {
  id: string;
  name: string;
  url: string;
  what: string;
  parents?: string[];
}

export const FOUNDATIONS: Foundation[] = [
  { id: 'bevy', name: 'Bevy', url: 'https://bevyengine.org', what: 'The open-source Rust game engine the rewrites are built on.' },
  { id: 'iw4l', name: 'IW4L', url: 'https://github.com/vladtrc/iw4L', what: 'Modern Warfare 2 runtime rewritten in Rust (13 Sep 2026).', parents: ['bevy'] },
  { id: 'skate-3-rust-engine', name: 'skate-3-rust-engine', url: 'https://github.com/SK8-ENGINE/skate-3-rust-engine', what: 'Skate 3 skating rewritten in Rust (8 Sep 2026).', parents: ['bevy'] },
  { id: 'minecraftoss', name: 'MinecraftOSS', url: 'https://github.com/chasmlol/2010-rust-rewrite-mashup/tree/main/third_party/minecraftoss', what: 'A Rust Minecraft engine: world, mobs and items.' },
  { id: 'revc', name: 're3 / reVC', url: 'https://github.com/mrxenginner/reVC', what: 'Long-standing reverse-engineered source for GTA III and Vice City.' },
  { id: 'gta-reversed', name: 'gta-reversed', url: 'https://github.com/gta-reversed/gta-reversed', what: 'Reverse-engineered GTA: San Andreas.' },
  { id: 'libsm64', name: 'libsm64', url: 'https://github.com/libsm64/libsm64', what: "Runs Super Mario 64's movement from your own ROM inside other games." },
  { id: 'skse', name: 'SKSE', url: 'https://skse.silverlock.org', what: "Skyrim's script extender, the hook SkyCraft attaches to." },
  { id: 'fabric', name: 'Fabric', url: 'https://fabricmc.net', what: 'Minecraft mod loader; the Minecraft half of every passthrough mod.' },
  { id: 'owml', name: 'OWML', url: 'https://github.com/ow-mods/owml', what: 'Outer Wilds mod loader.' },
];

/** Where the tree starts, in display order. */
export const ROOTS = ['bevy', 'fabric', 'libsm64', 'revc', 'gta-reversed'];

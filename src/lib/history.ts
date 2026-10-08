// Everything /history/ and its sub-pages derive from the content collections:
// the merged timeline, headline numbers, the lineage graph and the people index.
import { getCollection, type CollectionEntry } from 'astro:content';
import { FOUNDATIONS, ROOTS, type Foundation } from '../data/lineage';

type Mashup = CollectionEntry<'mashups'>;
type Event = CollectionEntry<'events'>;
type Link = { label: string; url: string };
type Source = { title: string; url: string; publisher?: string };

export const KINDS = {
  engine: { label: 'Engines & rewrites', color: '#6e8c5a' },
  model: { label: 'AI models', color: '#7a5af0' },
  mashup: { label: 'Released mashups', color: '#e0452f' },
  clip: { label: 'Viral clips', color: '#f08c1c' },
  tool: { label: 'Tools', color: '#2a8fc4' },
  port: { label: 'Ports', color: '#5d6170' },
  press: { label: 'Coverage', color: '#2f8a4c' },
  backlash: { label: 'Backlash', color: '#b8321f' },
  platform: { label: 'Platforms & takedowns', color: '#a8690b' },
  counter: { label: 'Alternatives', color: '#0f8f8f' },
} as const;
export type Kind = keyof typeof KINDS;

export interface Item {
  id: string;
  date: Date;
  kind: Kind;
  title: string;
  text: string;
  href?: string; // on-site page for this item
  links: Link[];
  sources: Source[];
}

/** Released or source-available mashups count as `mashup`; clips and announcements as `clip`. */
const mashupKind = (m: Mashup): Kind => (m.data.status === 'video-only' || m.data.status === 'unreleased' ? 'clip' : 'mashup');

export async function timeline(): Promise<Item[]> {
  const [mashups, events] = await Promise.all([getCollection('mashups'), getCollection('events')]);
  // Astro only logs a YAML error and carries on with an empty collection; fail the build instead.
  if (events.length === 0) throw new Error('history: src/content/events.yaml is empty or failed to parse');
  return [
    ...events.map((e: Event): Item => ({
      id: e.id,
      date: e.data.date,
      kind: e.data.kind,
      title: e.data.title,
      text: e.data.text,
      href: e.data.mashup ? `/mashups/${e.data.mashup.id}/` : undefined,
      links: e.data.links,
      sources: e.data.sources,
    })),
    ...mashups.map((m): Item => ({
      id: m.id,
      date: m.data.date,
      kind: mashupKind(m),
      title: m.data.title,
      text: m.data.summary,
      href: `/mashups/${m.id}/`,
      links: m.data.repo ? [{ label: m.data.repo.replace('https://github.com/', ''), url: m.data.repo }] : [],
      sources: [],
    })),
  ].sort((a, b) => +a.date - +b.date || a.title.localeCompare(b.title));
}

export async function stats() {
  const [mashups, events] = await Promise.all([getCollection('mashups'), getCollection('events')]);
  const playable = mashups.filter((m) => m.data.status === 'downloadable');
  const sources = new Map<string, Source>();
  for (const s of [...events.flatMap((e) => e.data.sources), ...mashups.flatMap((m) => m.data.sources)]) sources.set(s.url, s);
  const checked = mashups.reduce((d, m) => (m.data.checked > d ? m.data.checked : d), new Date(0));
  return {
    mashups: mashups.length,
    playable: playable.length,
    clips: mashups.filter((m) => m.data.status === 'video-only').length,
    downloads: mashups.reduce((n, m) => n + (m.data.downloads ?? 0), 0),
    stars: mashups.reduce((n, m) => n + (m.data.stars ?? 0), 0),
    sources: sources.size,
    publishers: new Set([...sources.values()].map((s) => s.publisher).filter(Boolean)).size,
    checked,
  };
}

// ---- Lineage ----

export type Node = { id: string; name: string; url: string; what: string; mashup?: Mashup };

export async function lineage() {
  const mashups = await getCollection('mashups');
  const nodes = new Map<string, Node>();
  const parents = new Map<string, string[]>();
  for (const f of FOUNDATIONS) {
    nodes.set(f.id, { id: f.id, name: f.name, url: f.url, what: f.what });
    parents.set(f.id, f.parents ?? []);
  }
  for (const m of mashups) {
    nodes.set(m.id, { id: m.id, name: m.data.title, url: `/mashups/${m.id}/`, what: m.data.summary, mashup: m });
    parents.set(m.id, m.data.parents);
  }
  for (const [id, ps] of parents) for (const p of ps) if (!nodes.has(p)) throw new Error(`lineage: ${id} names unknown parent "${p}"`);
  const children = (id: string) =>
    [...parents].filter(([, ps]) => ps.includes(id)).map(([c]) => nodes.get(c)!).sort((a, b) => +(a.mashup?.data.date ?? 0) - +(b.mashup?.data.date ?? 0));
  const of = (id: string) => (parents.get(id) ?? []).map((p) => nodes.get(p)!);
  // Mashups that credit nothing on the tree: built from scratch, or undisclosed.
  const standalone = mashups.filter((m) => m.data.parents.length === 0).sort((a, b) => +a.data.date - +b.data.date);
  return { roots: ROOTS.map((r) => nodes.get(r)!), children, parentsOf: of, standalone };
}

export const foundation = (id: string): Foundation | undefined => FOUNDATIONS.find((f) => f.id === id);

// ---- People ----

// The same person under different handles.
const ALIASES: Record<string, string> = { chasm: 'chasmlol' };
export const personKey = (name: string) => (ALIASES[name] ?? name).toLowerCase().replace(/[^a-z0-9]+/g, '-');

export async function people() {
  const [mashups, events] = await Promise.all([getCollection('mashups'), getCollection('events')]);
  const map = new Map<string, { name: string; url?: string; mashups: Mashup[]; events: Event[] }>();
  const add = (p: { name: string; url?: string }) => {
    const key = personKey(p.name);
    const cur = map.get(key) ?? { name: ALIASES[p.name] ?? p.name, url: p.url, mashups: [], events: [] };
    cur.url ??= p.url;
    map.set(key, cur);
    return cur;
  };
  for (const m of mashups) for (const c of m.data.creators) add(c).mashups.push(m);
  for (const e of events) for (const w of e.data.who) add(w).events.push(e);
  return [...map.entries()]
    .map(([key, v]) => ({ key, ...v }))
    .sort((a, b) => b.mashups.length - a.mashups.length || b.events.length - a.events.length || a.name.localeCompare(b.name));
}

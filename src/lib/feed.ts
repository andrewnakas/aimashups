// "Latest from the scene": the history timeline plus guides, newest first.
// Shared by the homepage, /latest/ and /rss.xml so they never disagree.
import { getCollection } from 'astro:content';
import { timeline, KINDS, type Kind } from './history';
import type { Origin } from './site';

export interface FeedItem {
  id: string;
  date: Date;
  kind: Kind | 'guide';
  label: string; // kind label shown above the title
  title: string;
  text: string;
  href: string; // on-site page, or the first outside link
  origin?: Origin;
}

export async function feed(limit = Infinity): Promise<FeedItem[]> {
  const [items, guides, mashups] = await Promise.all([timeline(), getCollection('guides'), getCollection('mashups')]);
  const origin = new Map(mashups.map((m) => [m.id, m.data.origin]));
  const all: FeedItem[] = [
    ...items.map((i) => ({
      id: i.id,
      date: i.date,
      kind: i.kind,
      label: KINDS[i.kind].label,
      title: i.title,
      text: i.text,
      href: i.href ?? i.links[0]?.url ?? i.sources[0]?.url ?? `/history/#t-${i.id}`,
      origin: origin.get(i.id),
    })),
    ...guides.map((g) => ({
      id: `guide-${g.id}`,
      date: g.data.updated ?? g.data.date,
      kind: 'guide' as const,
      label: 'Guide',
      title: g.data.title,
      text: g.data.summary,
      href: `/guides/${g.id}/`,
    })),
  ];
  return all.sort((a, b) => +b.date - +a.date || a.title.localeCompare(b.title)).slice(0, limit);
}

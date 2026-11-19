// /llms.txt (https://llmstxt.org): a plain-Markdown map of the site for AI assistants and
// AI search. Built from the same content collections as the pages, so it never goes stale.
import { getCollection } from 'astro:content';
import { SITE, fmtDate } from '../lib/site';
import { stats } from '../lib/history';
import { TRIBUTES, FEATURED, ALL_PRESETS, presetSlug } from '../data/presets';

const STATUS = { 'downloadable': 'downloadable', 'source-only': 'source only', 'video-only': 'video only', 'unreleased': 'not released' } as const;
const url = (path: string) => `${SITE.url}${path}`;
const one = (s: string) => s.replace(/\s+/g, ' ').trim();

export async function GET() {
  const [mashups, games, techniques, guides, s] = await Promise.all([
    getCollection('mashups'), getCollection('games'), getCollection('techniques'), getCollection('guides'), stats(),
  ]);
  const count = (id: string) => mashups.filter((m) => m.data.games.some((g) => g.id === id)).length;
  const byTitle = <T extends { data: { title: string } }>(a: T, b: T) => a.data.title.localeCompare(b.data.title);
  const playGuides = guides.filter((g) => g.data.mashup).sort(byTitle);
  const otherGuides = guides.filter((g) => !g.data.mashup).sort(byTitle);

  const mashupLine = (m: (typeof mashups)[number]) => {
    const d = m.data;
    const facts = [STATUS[d.status], d.repo && `source: ${d.repo}`, d.needsOwnCopy ? 'needs your own copies of the games' : 'no game files needed'].filter(Boolean).join('; ');
    return `- [${d.title}](${url(`/mashups/${m.id}/`)}): ${one(d.summary)} (${facts})`;
  };

  const text = `# ${SITE.name}

> ${SITE.name} documents every notable game mashup, mods that put one game inside another such as Minecraft in Skyrim or Mario in Elden Ring, most of them built with AI coding agents since September 2026, and hosts clean-room mashups you can play free in a browser.

As of ${fmtDate(s.checked)} the site tracks ${s.mashups} mashups, ${s.playable} of them downloadable, with ${s.sources} sources from ${s.publishers} publishers. Each mashup page states its status, creator, technique, GitHub repository, whether an AI agent built it, and what you need to play it. Downloadable mashups ship code only and need your own copies of the original games. The browser games on /play/ are clean-room rebuilds with original code and art, so they need nothing.

## Key pages
- [Home](${url('/')}): what AI game mashups are, the newest ones, and a matrix of every pair of games that has been combined
- [All mashups](${url('/mashups/')}): directory of all ${s.mashups} mashups, filterable by game, technique, status and whether an AI agent built it
- [History of AI game mashups](${url('/history/')}): dated, sourced timeline of how the trend began in late September 2026, with an FAQ and a family tree
- [Latest](${url('/latest/')}): every new mashup, clip, tool, news story and guide, newest first (also as [RSS](${url('/rss.xml')}))
- [Games](${url('/games/')}): every game that appears in a mashup, with the mashups that use it
- [Guides](${url('/guides/')}): step-by-step install guides for ${playGuides.length} downloadable mashups
- [Techniques](${url('/techniques/')}): how mashups are made, from passthrough mods to Rust engine rewrites
- [Play in your browser](${url('/play/')}): ${ALL_PRESETS.length} clean-room mashups, free, no download
- [Press coverage](${url('/history/press/')}): every article, video and post cited on the site
- [People](${url('/history/people/')}): the creators behind the mashups
- [Clean-room policy](${url('/about/clean-room/')}): what "clean room" means for the games hosted here
- [About](${url('/about/')}): what the site is and how entries are checked

## How mashups are made
${techniques.sort((a, b) => a.data.order - b.data.order).map((t) => `- [${t.data.name}](${url(`/techniques/${t.id}/`)}): ${one(t.data.summary)}`).join('\n')}

## Install guides
${[...otherGuides, ...playGuides].map((g) => `- [${g.data.title}](${url(`/guides/${g.id}/`)}): ${one(g.data.summary)}`).join('\n')}

## Mashups
${mashups.sort(byTitle).map(mashupLine).join('\n')}

## Play in your browser
${[...TRIBUTES, ...FEATURED].map((p) => `- [${p.title}](${url(`/play/${presetSlug(p)}/`)}): ${one(p.pitch)}`).join('\n')}
- [GameMash](${url('/play/gamemash/')}): eight clean-room game modes in one world, combined any way you like

## Optional
${games.filter((g) => count(g.id) > 0).sort((a, b) => a.data.name.localeCompare(b.data.name)).map((g) => `- [${g.data.name} mashups](${url(`/games/${g.id}/`)}): ${count(g.id)} mashup${count(g.id) === 1 ? '' : 's'}`).join('\n')}
- [Sitemap](${url('/sitemap-index.xml')})
`;
  return new Response(text, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}

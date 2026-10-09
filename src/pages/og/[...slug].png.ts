// Per-page social cards (1200×630), rendered at build with satori + resvg.
// /og/mashups/<id>.png, /og/guides/<id>.png, /og/games/<id>.png
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { getCollection, getEntries } from 'astro:content';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { ORIGINS } from '../../lib/site';

const font = (pkg: string, file: string) => readFileSync(join(process.cwd(), 'node_modules', pkg, 'files', file));
const fonts = [
  { name: 'Inter', data: font('@fontsource/inter', 'inter-latin-400-normal.woff'), weight: 400 as const, style: 'normal' as const },
  { name: 'Inter', data: font('@fontsource/inter', 'inter-latin-700-normal.woff'), weight: 700 as const, style: 'normal' as const },
  { name: 'Archivo Black', data: font('@fontsource/archivo-black', 'archivo-black-latin-400-normal.woff'), weight: 400 as const, style: 'normal' as const },
];

interface Card { kicker: string; title: string; text: string; tags: string[]; }

export async function getStaticPaths() {
  const [mashups, guides, games] = await Promise.all([getCollection('mashups'), getCollection('guides'), getCollection('games')]);
  const paths: { params: { slug: string }; props: Card }[] = [];
  for (const m of mashups) {
    const gs = await getEntries(m.data.games);
    paths.push({ params: { slug: `mashups/${m.id}` }, props: {
      kicker: 'Game mashup', title: m.data.title, text: m.data.summary,
      tags: [ORIGINS[m.data.origin].label, m.data.status.replace('-', ' '), ...gs.map((g) => g.data.name)],
    } });
  }
  for (const g of guides) paths.push({ params: { slug: `guides/${g.id}` }, props: { kicker: 'Guide', title: g.data.title, text: g.data.summary, tags: [g.data.difficulty, g.data.time].filter(Boolean) as string[] } });
  for (const g of games) {
    const n = mashups.filter((m) => m.data.games.some((x) => x.id === g.id)).length;
    paths.push({ params: { slug: `games/${g.id}` }, props: { kicker: 'Game', title: `${g.data.name} mashups`, text: g.data.summary, tags: [`${n} mashup${n === 1 ? '' : 's'}`] } });
  }
  return paths;
}

// satori takes React-style element objects; this keeps the card readable without JSX.
const h = (type: string, style: Record<string, unknown>, children?: unknown) => ({ type, props: { style, children } });

export async function GET({ props }: { props: Card }) {
  const { kicker, title, text, tags } = props;
  const W = 1056; // content width inside the 72px side padding
  const tree = h('div', { width: '100%', height: '100%', display: 'flex', position: 'relative', background: '#0f1014', color: '#eceef3', fontFamily: 'Inter', borderTop: '14px solid #ff5a3c' }, [
    h('div', { position: 'absolute', top: 60, left: 72, width: W, display: 'flex', flexDirection: 'column' }, [
      h('div', { display: 'flex', fontSize: 26, fontWeight: 700, color: '#ff5a3c', textTransform: 'uppercase', letterSpacing: 3, marginBottom: 18 }, kicker),
      h('div', { display: 'flex', width: W, fontFamily: 'Archivo Black', fontSize: title.length > 48 ? 58 : 70, lineHeight: 1.08, marginBottom: 22 }, title),
      h('div', { display: 'flex', width: W, fontSize: 30, color: '#9aa0ae', lineHeight: 1.35 }, text.length > 150 ? `${text.slice(0, 147)}…` : text),
    ]),
    h('div', { position: 'absolute', bottom: 52, left: 72, width: W, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }, [
      h('div', { display: 'flex' }, tags.slice(0, 4).map((t) => h('div', { display: 'flex', fontSize: 22, fontWeight: 700, padding: '8px 16px', marginRight: 12, borderRadius: 999, background: '#1f222a', color: '#eceef3' }, t))),
      h('div', { display: 'flex', fontFamily: 'Archivo Black', fontSize: 30 }, [h('span', { color: '#eceef3' }, 'AIGame'), h('span', { color: '#ff5a3c' }, 'Mashups')]),
    ]),
  ]);
  const svg = await satori(tree as never, { width: 1200, height: 630, fonts });
  const png = new Resvg(svg).render().asPng();
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
}

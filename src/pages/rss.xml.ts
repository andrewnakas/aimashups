import { getCollection } from 'astro:content';
import { SITE } from '../lib/site';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export async function GET() {
  const items = (await getCollection('mashups')).sort((a, b) => +b.data.date - +a.data.date).map((m) => {
    const url = `${SITE.url}/mashups/${m.id}/`;
    return `<item><title>${esc(m.data.title)}</title><link>${url}</link><guid>${url}</guid><pubDate>${m.data.date.toUTCString()}</pubDate><description>${esc(m.data.summary)}</description></item>`;
  });
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${SITE.name}: mashup history</title><link>${SITE.url}/</link><description>${esc(SITE.tagline)}</description>${items.join('')}</channel></rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}

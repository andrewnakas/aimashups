import { SITE } from '../lib/site';
import { feed } from '../lib/feed';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export async function GET() {
  const items = (await feed(60)).map((i) => {
    const url = i.href.startsWith('/') ? `${SITE.url}${i.href}` : i.href;
    const guid = `${SITE.url}/#${i.id}`;
    return `<item><title>${esc(i.title)}</title><link>${esc(url)}</link><guid isPermaLink="false">${guid}</guid><category>${esc(i.label)}</category><pubDate>${i.date.toUTCString()}</pubDate><description>${esc(i.text)}</description></item>`;
  });
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${SITE.name}: latest</title><link>${SITE.url}/latest/</link><description>${esc(SITE.tagline)}</description>${items.join('')}</channel></rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}

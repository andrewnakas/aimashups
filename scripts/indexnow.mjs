// After a deploy, tells Bing/Yandex/Seznam (IndexNow) about every URL in the sitemap.
// The key file is public/<key>.txt; search engines fetch it to verify ownership.
import { readFileSync, readdirSync } from 'node:fs';

const KEY = '85867e419f060b6de65f4b72feacebef';
const HOST = 'aimashups.com';
const dist = new URL('../dist/', import.meta.url);
const urls = readdirSync(dist)
  .filter((f) => /^sitemap-\d+\.xml$/.test(f))
  .flatMap((f) => [...readFileSync(new URL(f, dist), 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]));
if (!urls.length) throw new Error('indexnow: no URLs in dist/sitemap-*.xml');
const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'content-type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: urls.slice(0, 10000) }),
});
console.log(`indexnow: ${urls.length} URLs → HTTP ${res.status}`);
if (res.status >= 400 && res.status !== 429) process.exit(1);

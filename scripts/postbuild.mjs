// Writes Cloudflare Pages _redirects (search-variant aliases → canonical play pages) and _headers.
import { writeFileSync, readdirSync, existsSync } from 'node:fs';

const dist = new URL('../dist/', import.meta.url);
const play = new URL('play/', dist);
const lines = [];
for (const slug of readdirSync(play)) {
  const parts = slug.split('-x-');
  if (parts.length !== 2 || !existsSync(new URL(`${slug}/index.html`, play))) continue;
  const [a, b] = parts;
  for (const alias of [`${b}-x-${a}`, `${a}-vs-${b}`, `${b}-vs-${a}`, `${a}-${b}`, `${b}-${a}`]) {
    lines.push(`/play/${alias}/ /play/${slug}/ 301`, `/play/${alias} /play/${slug}/ 301`);
  }
}
lines.push('/timeline/ /history/#timeline 301');
writeFileSync(new URL('_redirects', dist), lines.join('\n') + '\n');

writeFileSync(new URL('_headers', dist), `/*
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: interest-cohort=()
/_astro/*
  Cache-Control: public, max-age=31536000, immutable
/pagefind/*
  Cache-Control: public, max-age=3600
`);
console.log(`postbuild: ${lines.length} redirects`);

// Content checks that the schema can't express. Run in CI on every PR.
//   - every mashup's tribute names a real preset
//   - every repo / source / builtOn URL is reachable (with --links)
//   - no retail game file types anywhere in the repo
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const errors = [];
const checkLinks = process.argv.includes('--links');

// Preset slugs: both orderings of every pair, plus featured triples, from src/data.
const modes = [...readFileSync(join(root, 'src/data/modes.ts'), 'utf8').matchAll(/slug: '([a-z-]+)', gm:/g)].map((m) => m[1]);
const presetSrc = readFileSync(join(root, 'src/data/presets.ts'), 'utf8');
// A preset is `P([modes], { slug?: '...', ... })`: an explicit slug wins over the mode pair.
const presets = new Set([...presetSrc.matchAll(/P\(\[([^\]]+)\], \{\s*(?:slug: '([a-z0-9-]+)')?/g)].map((m) => {
  if (m[2]) return m[2];
  const slugs = m[1].split(',').map((s) => s.trim().replace(/'/g, ''));
  return slugs.sort((a, b) => modes.indexOf(a) - modes.indexOf(b)).join('-x-');
}));

const mashupDir = join(root, 'src/content/mashups');
const urls = new Set();
for (const f of readdirSync(mashupDir)) {
  const src = readFileSync(join(mashupDir, f), 'utf8');
  const tribute = src.match(/^tribute: (\S+)/m)?.[1];
  if (tribute && !presets.has(tribute)) errors.push(`${f}: tribute "${tribute}" is not a preset`);
  if (!/^sources:/m.test(src) && !/^repo:/m.test(src)) errors.push(`${f}: needs a repo or at least one source`);
  for (const m of src.matchAll(/https?:\/\/[^\s"')\]]+/g)) urls.add(m[0]);
}

const BANNED = new Set(['.iso', '.xex', '.z64', '.n64', '.v64', '.nds', '.gba', '.sfc', '.smc', '.nes', '.wad', '.pak', '.ff', '.iwd', '.ipak', '.bsa', '.ba2', '.esm', '.psarc', '.big', '.rpf', '.xcp']);
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    if (['node_modules', '.git', 'dist', '.astro'].includes(name)) continue;
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (BANNED.has(extname(name).toLowerCase())) errors.push(`retail game file type not allowed: ${p.slice(root.length)}`);
  }
};
walk(root);

if (checkLinks) {
  await Promise.all([...urls].map(async (u) => {
    try {
      const r = await fetch(u, { method: 'GET', redirect: 'follow', signal: AbortSignal.timeout(20000), headers: { 'user-agent': 'aimashups-link-check' } });
      // Some news sites block bots; only hard 404/410 fail the build.
      if (r.status === 404 || r.status === 410) errors.push(`dead link (${r.status}): ${u}`);
    } catch (e) {
      console.warn(`warn: could not reach ${u}: ${e.message}`);
    }
  }));
}

if (errors.length) {
  console.error(errors.map((e) => `✗ ${e}`).join('\n'));
  process.exit(1);
}
console.log(`validate: ok (${presets.size} presets, ${readdirSync(mashupDir).length} mashups${checkLinks ? `, ${urls.size} links` : ''})`);

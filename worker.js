// Serves the built site (dist/) as Workers static assets on aigamemashups.com.
// http:// and www redirect (301) to https://aigamemashups.com, and the assets layer's
// temporary 307 for a missing trailing slash is made a permanent 301.
// /embed/<game>/ proxies a GitHub Pages game whose threaded build needs cross-origin
// isolation, which GitHub Pages can't send headers for; the game still loads its maps
// and data straight from GitHub.
// Everything else, including _headers and _redirects, is handled by the assets layer.
const EMBEDS = {
};

async function embed(request, game, rest) {
  const upstream = new URL(rest + new URL(request.url).search, EMBEDS[game]);
  if (!upstream.href.startsWith(EMBEDS[game])) return new Response('Not found', { status: 404 });
  const forward = new Headers();
  for (const h of ['range', 'accept', 'if-none-match', 'if-modified-since']) if (request.headers.has(h)) forward.set(h, request.headers.get(h));
  const response = await fetch(upstream, { headers: forward, cf: { cacheTtl: 600, cacheEverything: true } });
  const headers = new Headers(response.headers);
  headers.set('Cross-Origin-Opener-Policy', 'same-origin');
  headers.set('Cross-Origin-Embedder-Policy', 'require-corp');
  headers.set('Cross-Origin-Resource-Policy', 'same-origin');
  return new Response(request.method === 'HEAD' ? null : response.body, { status: response.status, statusText: response.statusText, headers });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    // Only on the real domains, so `wrangler dev` on http://localhost keeps working.
    if (url.hostname === 'www.aigamemashups.com' || (url.hostname === 'aigamemashups.com' && url.protocol === 'http:')) {
      url.hostname = 'aigamemashups.com';
      url.protocol = 'https:';
      return Response.redirect(url.toString(), 301);
    }
    const m = url.pathname.match(/^\/embed\/([a-z0-9-]+)(\/.*)?$/);
    if (m && EMBEDS[m[1]] && (request.method === 'GET' || request.method === 'HEAD')) {
      if (!m[2]) return Response.redirect(`${url.origin}/embed/${m[1]}/${url.search}`, 301);
      return embed(request, m[1], m[2].slice(1));
    }
    const response = await env.ASSETS.fetch(request);
    // html_handling = "auto-trailing-slash" answers /mashups with a 307; search engines should see a 301.
    if (response.status === 307 && response.headers.has('location')) {
      return Response.redirect(new URL(response.headers.get('location'), url).toString(), 301);
    }
    return response;
  },
};

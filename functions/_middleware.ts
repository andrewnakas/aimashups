// One canonical host: www.aigamemashups.com redirects to the apex, keeping the
// path and query. (Typed inline so astro check doesn't need Workers types.)
export const onRequest = async ({ request, next }: { request: Request; next: () => Promise<Response> }) => {
  const url = new URL(request.url);
  if (url.hostname === 'www.aigamemashups.com') {
    url.hostname = 'aigamemashups.com';
    return Response.redirect(url.toString(), 301);
  }
  return next();
};

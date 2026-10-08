// Serves the built site (dist/) as Workers static assets on aigamemashups.com.
// The only logic: www redirects to the apex. Everything else, including
// _headers and _redirects, is handled by the assets layer.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === 'www.aigamemashups.com') {
      url.hostname = 'aigamemashups.com';
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};

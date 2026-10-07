import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://aimashups.com',
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  integrations: [mdx(), sitemap()],
});

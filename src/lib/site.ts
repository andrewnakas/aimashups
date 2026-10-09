export const SITE = {
  name: 'AI Game Mashups',
  url: 'https://aigamemashups.com',
  repo: 'https://github.com/andrewnakas/aimashups',
  tagline: 'Play AI game mashups in your browser, and read how the famous ones were made.',
};

// Game binaries are served from a separate origin (R2 behind play.aigamemashups.com).
export const PLAYER_ORIGIN = (import.meta.env.PUBLIC_PLAYER_ORIGIN ?? 'https://play.aigamemashups.com').replace(/\/$/, '');

// Google Analytics 4: property aigamemashups.com in the treesixty account.
export const GA_ID: string = import.meta.env.PUBLIC_GA_ID || 'G-Q0L5GT4GL6';

export const GISCUS = {
  repo: import.meta.env.PUBLIC_GISCUS_REPO as string | undefined,
  repoId: import.meta.env.PUBLIC_GISCUS_REPO_ID as string | undefined,
  categoryId: import.meta.env.PUBLIC_GISCUS_CATEGORY_ID as string | undefined,
};

export const fmtDate = (d: Date) => d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
export const isoDate = (d: Date) => d.toISOString().slice(0, 10);
export const abs = (path: string) => new URL(path, SITE.url).href;

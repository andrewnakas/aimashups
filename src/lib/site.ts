export const SITE = {
  name: 'AI Mashups',
  url: 'https://aimashups.com',
  repo: 'https://github.com/andrewnakas/aimashups',
  tagline: 'Play AI game mashups in your browser, and read how the famous ones were made.',
};

// Game binaries are served from a separate origin (R2 behind play.aimashups.com).
export const PLAYER_ORIGIN = (import.meta.env.PUBLIC_PLAYER_ORIGIN ?? 'https://play.aimashups.com').replace(/\/$/, '');

export const GISCUS = {
  repo: import.meta.env.PUBLIC_GISCUS_REPO as string | undefined,
  repoId: import.meta.env.PUBLIC_GISCUS_REPO_ID as string | undefined,
  categoryId: import.meta.env.PUBLIC_GISCUS_CATEGORY_ID as string | undefined,
};

export const fmtDate = (d: Date) => d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
export const isoDate = (d: Date) => d.toISOString().slice(0, 10);
export const abs = (path: string) => new URL(path, SITE.url).href;

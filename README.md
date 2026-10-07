# AI Mashups

Source for **[aimashups.com](https://aimashups.com)**: play clean-room game mashups in your browser, and read the history of AI game mashups.

- **Play:** every `/play/<a>-x-<b>/` page boots [GameMash](https://github.com/andrewnakas/GameMash) with that pair of modes (`?modes=skate,warfare`). 28 pairs plus featured triples, from `src/data/presets.ts`.
- **History:** `src/content/mashups/`, one verified entry per real-world mashup, plus game hubs, techniques and guides.
- **Stack:** Astro (static), Pagefind search, Cloudflare Pages. Game binaries live on R2 behind `play.aimashups.com`.

## Build and deploy
GitHub Actions (`.github/workflows/site.yml`) validates content, type-checks, builds and, on `main`, deploys to Cloudflare Pages. Deploy needs repo secrets `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`. Optional repo variables: `PUBLIC_PLAYER_ORIGIN` and the `PUBLIC_GISCUS_*` IDs for comments.

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License
Code: MIT. Written content in `src/content/`: CC BY 4.0. Game names are trademarks of their owners and are used descriptively. This project isn't affiliated with any of them.

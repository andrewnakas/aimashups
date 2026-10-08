# Contributing

Everything happens on GitHub: issues for suggestions, pull requests for changes. CI builds and checks every PR.

## Add or fix a history entry
History entries live in `src/content/mashups/<slug>.md`. Copy an existing entry. The schema is in `src/content.config.ts`, and CI fails on missing fields.

- Link a primary source for every claim: the repo, a release, or the creator's original post. Press coverage goes in `sources`.
- Star and download counts are snapshots. Update `checked:` when you refresh them.
- Mark `status` honestly: `downloadable`, `source-only`, `video-only` or `unreleased`.
- Set `tribute` to the closest preset slug on `/play/` (for example `skate-x-shooter`).

New source games go in `src/content/games/`.

## Add a playable game
Hosted games must follow the [clean-room policy](https://aigamemashups.com/about/clean-room/): original code written from a behavioural spec, original or CC0 assets, no game files, decompiled code, names or likenesses. Include:

- `CLEANROOM.md`: how the spec was produced and who wrote the code
- `ASSETS.md`: the origin and license of every asset
- a WebAssembly build that runs from a static folder (WebGL2 at minimum)

Open an issue first so we can agree on how it's hosted.

## Presets
GameMash presets are in `src/data/presets.ts`. Copy may only describe mechanics GameMash really has.

## Local development
You don't need to build locally, since CI does it. If you want to:

```sh
npm ci
npm run dev        # http://127.0.0.1:4321
npm run check      # astro check + content validation
npm run build
```

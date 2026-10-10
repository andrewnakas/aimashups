import { defineCollection, reference } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

const link = z.object({ label: z.string(), url: z.url() });
const source = z.object({ title: z.string(), url: z.url(), publisher: z.string().optional() });
const person = z.object({ name: z.string(), url: z.url().optional() });

// A real-world AI game mashup, documented for the history.
const mashups = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/mashups' }),
  schema: z.object({
    title: z.string(), // "Minecraft in Skyrim (SkyCraft)"
    summary: z.string().max(200),
    games: z.array(reference('games')).min(1),
    creators: z.array(person).min(1),
    technique: reference('techniques'),
    // How it was made: an AI coding agent (creator says so), ordinary modding, or not yet known.
    origin: z.enum(['ai-built', 'conventional-mod', 'unverified']),
    date: z.coerce.date(), // first public release or first clip
    status: z.enum(['downloadable', 'source-only', 'video-only', 'unreleased']),
    needsOwnCopy: z.boolean().default(true),
    repo: z.url().optional(),
    stars: z.number().int().optional(), // as of `checked`
    downloads: z.number().int().optional(), // release asset downloads, as of `checked`
    license: z.string().optional(),
    checked: z.coerce.date(), // when repo facts were last verified
    builtOn: z.array(link).default([]),
    links: z.array(link).default([]),
    sources: z.array(source).default([]),
    seenOn: z.array(link).default([]), // where we first spotted it, e.g. an @recompiledgames reel
    reach: z.string().optional(), // for clips: "22.5M views on X", as reported by the cited source
    parents: z.array(z.string()).default([]), // lineage ids (src/data/lineage.ts) this was built on
    tribute: z.string().optional(), // preset slug on /play/
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
  }),
});

// A source game hub: every mashup involving it.
const games = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/games' }),
  schema: z.object({
    name: z.string(),
    year: z.number().int(),
    owner: z.string(), // trademark holder, for the non-affiliation note
    summary: z.string(),
    modes: z.array(z.string()).default([]), // closest GameMash mode slugs
  }),
});

const techniques = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/techniques' }),
  schema: z.object({ name: z.string(), summary: z.string(), order: z.number() }),
});

const guides = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    mashup: reference('mashups').optional(), // a how-to-play guide for this mashup
    difficulty: z.enum(['easy', 'medium', 'hard']).optional(),
    time: z.string().optional(), // "15 minutes"
  }),
});

// Everything else that shaped the history: engines, model launches, tools, clips,
// press coverage and platform responses. One YAML file, rendered on /history/.
const events = defineCollection({
  loader: file('src/content/events.yaml'),
  schema: z.object({
    date: z.coerce.date(),
    kind: z.enum(['engine', 'model', 'clip', 'tool', 'port', 'press', 'backlash', 'platform', 'counter']),
    title: z.string(),
    text: z.string(),
    who: z.array(person).default([]),
    mashup: reference('mashups').optional(),
    links: z.array(link).default([]),
    sources: z.array(source).default([]),
  }),
});

export const collections = { mashups, games, techniques, guides, events };

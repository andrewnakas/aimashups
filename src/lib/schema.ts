// JSON-LD builders. Keep these to facts actually shown on the page.
import { SITE, abs, isoDate } from './site';

export type Crumb = { name: string; path: string };

export const breadcrumbs = (items: Crumb[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: abs(c.path) })),
});

export const faqPage = (faqs: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
});

export const videoGame = (o: { name: string; description: string; path: string; genres: string[]; image?: string }) => ({
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name: o.name,
  description: o.description,
  url: abs(o.path),
  genre: o.genres,
  gamePlatform: ['Web browser', 'Windows', 'macOS', 'Linux'],
  applicationCategory: 'Game',
  operatingSystem: 'Any (WebGPU or WebGL2 browser)',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: 0, priceCurrency: 'USD' },
  author: { '@type': 'Person', name: 'Andrew Nakas', url: 'https://nak.as' },
  ...(o.image ? { image: abs(o.image) } : {}),
});

export const article = (o: { headline: string; description: string; path: string; published: Date; modified?: Date; about?: string[] }) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: o.headline,
  description: o.description,
  mainEntityOfPage: abs(o.path),
  datePublished: isoDate(o.published),
  dateModified: isoDate(o.modified ?? o.published),
  author: { '@type': 'Organization', name: SITE.name, url: SITE.url },
  publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url },
  ...(o.about ? { about: o.about.map((name) => ({ '@type': 'VideoGame', name })) } : {}),
});

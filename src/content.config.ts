import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// "work" entries live in src/content/work/*.md
// Each file's `id` is derived from its filename, e.g. artlens.md -> "artlens",
// which becomes the URL at /work/artlens.
const work = defineCollection({
  loader: glob({ base: './src/content/work', pattern: '**/*.md' }),
  schema: ({ image }) => {
    const figure = z.object({
      src: image(),
      alt: z.string(),
      caption: z.string().optional(),
    });

    return z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      description: z.string().optional(),
      year: z.number().int(),
      category: z.string().optional(),
      event: z.string().optional(),
      award: z.string().optional(),
      // Sort key for the homepage selected-work list and the /work index.
      date: z.coerce.date(),
      heroImage: figure.optional(),
      gallery: z.array(figure).default([]),
      links: z
        .array(
          z.object({
            label: z.string(),
            href: z.url(),
          }),
        )
        .default([]),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    });
  },
});

// About page copy. Body lives in Markdown; frontmatter is metadata
// the layout needs (title, SEO). Extra fields can be added here later
// without moving the prose back into the .astro page.
const about = defineCollection({
  loader: glob({ base: './src/content/about', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

// Research publications. One Markdown file per paper. There are no
// per-paper routes; /research reads the collection as an index.
const research = defineCollection({
  loader: glob({ base: './src/content/research', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    year: z.number().int(),
    type: z.enum(['journal', 'conference', 'workshop', 'preprint']),
    venue: z.string(),
    doi: z.string().optional(),
    arxiv: z.string().optional(),
    pdf: z.url().optional(),
    code: z.url().optional(),
    abstract: z.string(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

// Notes and posts. One Markdown file per entry at /notes/<id>.
const notes = defineCollection({
  loader: glob({ base: './src/content/notes', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { work, about, research, notes };

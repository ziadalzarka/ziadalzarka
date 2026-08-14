import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const link = z.object({ label: z.string(), href: z.string() });

const docs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/docs' }),
  schema: z.object({
    group: z.enum(['root', 'work', 'ship', 'write', 'hire']),
    file: z.string(),
    order: z.number(),
    kind: z.enum(['thesis', 'role', 'project', 'list', 'offers', 'contact']),
    title: z.string(),
    treeMeta: z.string().optional(),

    display: z.string().optional(),
    accent: z.string().optional(),

    role: z.string().optional(),
    period: z.string().optional(),
    place: z.string().optional(),

    tagline: z.string().optional(),
    status: z.enum(['public', 'private']).optional(),
    repo: z.string().optional(),

    stack: z.array(z.string()).default([]),
    links: z.array(link).default([]),
    entries: z.array(z.object({ name: z.string(), url: z.string(), meta: z.string() })).default([]),
    offers: z
      .array(z.object({ name: z.string(), body: z.string(), proof: z.string() }))
      .default([]),
  }),
});

export const collections = { docs };

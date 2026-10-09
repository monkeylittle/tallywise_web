import { defineCollection, z } from 'astro:content';

// Blog posts (English only, region-neutral; see src/pages/blog/).
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    author: z.string().default('Tallywise'),
    /** Social-card image path under /public. */
    image: z.string(),
    imageAlt: z.string(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };

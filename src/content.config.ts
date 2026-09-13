import { glob } from "astro/loaders"
import { defineCollection } from "astro:content"
import { z } from "astro/zod"

const works = defineCollection({
    loader: glob({
        base: 'src/content/works',
        pattern: '*.md'
    }),
    schema: ({ image }) => z.object({
        cover: image(),
        coverAlt: z.string(),
        title: z.string(),
        role: z.string(),
        employer: z.string().optional(),
        skills: z.array(
            z.object({
                skill: z.string(),
            })
        ).optional(),
        website: z.string().optional(),
        order: z.number()
    }),
})

const experiences = defineCollection({
    loader: glob({
        base: 'src/content/experiences',
        pattern: '*.md'
    }),
    schema: z.object({
        date: z.string(),
        title: z.string(),
        note: z.string().optional(),
        location: z.string(),
        description: z.string(),
        clients: z.string().optional(),
        links: z.array(
            z.object({
                label: z.string(),
                url: z.string()
            })
        ).optional(),
        order: z.number()
    })
})

export const collections = { works, experiences }
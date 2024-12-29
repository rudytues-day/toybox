import { glob } from 'astro/loaders';
import { string } from 'astro/zod';
import { defineCollection, z, type SchemaContext } from 'astro:content';

// 1. Import utilities from `astro:content`

// 2. Define your collection(s)

const allPlaylists = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/playlists/'}),
    schema: z.object({
        title: z.string().optional(),
        date: z.date().optional(),
    })
});

const allMusicLogs = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/playlists/music-logs/'}),
    schema: z.object({
        title: z.string().optional(),
        date: z.date().optional(),
    })
});

const allNows = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/now/'}),
    schema: z.object({
        date: z.date(),
        currently: z.string(),
    })
});

const allCuratedLists = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/playlists/curated/'}),
    schema: z.object({
        title: z.string().optional(),
        date: z.date().optional(),
    })
});


export const collections = {
    'playlists': allPlaylists,
    'musicLogs': allMusicLogs,
    'curatedLists': allCuratedLists,
    'nows': allNows
}
import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const blog = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/blog" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.string(),
		styledWordClasses: z.array(z.string()).optional(),
	}),
});

// Expose your defined collection to Astro
// with the `collections` export
export const collections = { blog };

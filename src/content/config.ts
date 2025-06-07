// src/content/config.ts
import { defineCollection, z } from "astro:content";

// Definimos una nueva colección llamada 'reviews'
const reviewsCollection = defineCollection({
  type: "content", // significa que son archivos de contenido como .mdx o .md
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      author: z.string(),
      date: z.date(),
      rating: z.number().min(1).max(5),
      // ¡AQUÍ ESTÁ LA MAGIA! Le decimos a Astro que este campo es una imagen optimizable.
      product_image: image(),
      specs: z.array(z.record(z.string(), z.string())),
      pros: z.array(z.string()),
      cons: z.array(z.string()),
    }),
});

export const collections = {
  reviews: reviewsCollection,
};

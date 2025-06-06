import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx'; // <-- Esta línea es crucial

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()], // <-- Y esta también es crucial
  // ... otras configuraciones si las tienes
});
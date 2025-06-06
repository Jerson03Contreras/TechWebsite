import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap'; // 1. Importar

export default defineConfig({
  // 2. Definir la URL final de tu sitio
  site: 'https://tech-website-pi.vercel.app/', // ¡Reemplaza con tu dominio!
  integrations: [
    mdx(),
    sitemap() // 3. Añadir la integración
  ],
});
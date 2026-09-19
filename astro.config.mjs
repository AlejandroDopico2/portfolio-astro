// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Canonical URL for sitemap, Open Graph, and GitHub Pages at dopico.dev.
const SITE_URL = 'https://dopico.dev';

export default defineConfig({
  site: SITE_URL,

  integrations: [sitemap()],

  // Prefetches internal links on hover/viewport entry for near-instant navigation.
  prefetch: true,

  vite: {
    plugins: [tailwindcss()],
  },

  // Astro's built-in Fonts API: self-hosts and optimizes these at build time
  // (no Google-hosted requests, no extra npm packages, automatic preloading).
  // Each cssVariable below is consumed in src/styles/global.css inside the
  // Tailwind @theme block (--font-body, --font-mono; display uses the same sans).
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'IBM Plex Sans',
      cssVariable: '--ff-body',
      weights: ['400', '500'],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
    },
    {
      provider: fontProviders.google(),
      name: 'IBM Plex Mono',
      cssVariable: '--ff-mono',
      weights: ['400'],
      subsets: ['latin'],
    },
  ],
});

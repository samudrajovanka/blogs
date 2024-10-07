// @ts-check
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://blogs.jovan.id',
  integrations: [tailwind(), icon(), sitemap()],
  output: 'server',
  adapter: vercel(),
});
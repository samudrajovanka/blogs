// @ts-check
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon()],
  output: 'server',
  adapter: vercel(),
});
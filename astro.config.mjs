// @ts-check
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon()],
  output: 'server',

  adapter: node({
    mode: 'standalone',
  }),
});
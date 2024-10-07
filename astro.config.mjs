// @ts-check
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon()],
  output: 'server',
  adapter: vercel()
});
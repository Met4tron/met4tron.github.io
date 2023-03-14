import { defineConfig } from 'astro/config';
import compress from 'astro-compress';
import tailwind from '@astrojs/tailwind';
import robotsTxt from 'astro-robots-txt';

import critters from "astro-critters";

// https://astro.build/config
export default defineConfig({
  integrations: [compress({
    js: true,
    css: true,
    html: true
  }), tailwind(), robotsTxt(), critters()],
  site: "https://met4tron.github.io"
});
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const siteUrl =
  process.env.PUBLIC_SITE_URL ||
  process.env.URL ||
  'https://openbuild-ide.netlify.app';

export default defineConfig({
  site: siteUrl,
  output: 'static',
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith('/offline/') && !page.endsWith('/offline'),
    }),
  ],
});
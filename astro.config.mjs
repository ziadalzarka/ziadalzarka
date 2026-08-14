import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ziadalzarka.dev',
  trailingSlash: 'ignore',
  build: {
    inlineStylesheets: 'always',
  },
  markdown: {
    shikiConfig: {
      theme: 'vitesse-dark',
    },
  },
});

import cloudflare from '@astrojs/cloudflare'
import sitemap from '@astrojs/sitemap'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  build: {
    inlineStylesheets: 'always',
  },
  compressHTML: true,
  prefetch: true,
  devToolbar: {
    enabled: false,
  },
  output: 'hybrid',
  adapter: cloudflare({
    imageService: 'cloudflare',
  }),
  site: 'https://gadmin.shop',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/success'),
    }),
  ],
  vite: {
    ssr: {
      noExternal: ['path-to-regexp'],
    },
  },
})

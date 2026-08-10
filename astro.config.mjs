import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.kmcexperience.com',
  base: '/',
  build: {
    format: 'directory'
  }
});
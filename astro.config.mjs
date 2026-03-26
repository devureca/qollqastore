import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://qollqastore.vercel.app',
  output: 'server',

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: vercel()
})
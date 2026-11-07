import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [mdx(), icon()],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },
  vite: {
    plugins: [tailwindcss()],
    server: { watch: { ignored: ['**/.tmp-capture/**', '**/public/projects/**', '**/dist/**'] } },
  },
});

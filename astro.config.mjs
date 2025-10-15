import { defineConfig } from 'astro/config';
export default defineConfig({
  output: 'static',
  experimental: { clientPrerender: true },
  // Si publicas en un subpath (project pages), añade:
  // base: '/NOMBRE_DEL_REPO'
});
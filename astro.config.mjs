// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://sebavedoya.github.io/Sebastian-Vedoya',
  base: '/Sebastian-Vedoya/',
  output: 'static',     // build estático
  // outDir: 'dist',     // opcional (por defecto ya es 'dist')
});
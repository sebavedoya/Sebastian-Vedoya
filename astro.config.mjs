// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://sebavedoya.github.io/Sebastian-Vedoya',
  base: '/Sebastian-Vedoya/', // importante para rutas en Pages
  // outDir: './dist', // opcional; por defecto ya es 'dist'
  output: 'static',
});
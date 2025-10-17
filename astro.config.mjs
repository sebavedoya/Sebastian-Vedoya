// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://sebavedoya.github.io/Sebastian-Vedoya',
  base: '/Sebastian-Vedoya/',   // importante para rutas en Pages
  outDir: './docs',             // construye directo a /docs
  output: 'static',             // build estático (por defecto)
});
# Sitio de Sebastián Vedoya M. — Astro

## Requisitos
- Node.js 18+
- npm

## Desarrollo
```bash
npm install
npm run dev
# abre http://localhost:4321
```

## Build
```bash
npm run build
npm run preview
```

## Archivos públicos
- `public/favicon.svg`
- `public/assets/foto-perfil.jpg` ← reemplaza por tu foto real
- `public/assets/prensa/*.jpg` ← portadas de notas
- `public/files/CV.pdf` ← tu CV

## GitHub Pages
1. Crea un repositorio y sube todo el proyecto.
2. Si la URL será `https://usuario.github.io/tu-repo`, edita `astro.config.mjs` y agrega:
```js
export default defineConfig({ base: '/tu-repo', output: 'static' });
```
3. Ve a **Settings → Pages** y elige **GitHub Actions**. Este repo ya incluye `.github/workflows/pages.yml`.

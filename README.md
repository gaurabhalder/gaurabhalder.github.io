# Gaurab Halder — Cyberpunk Portfolio

Premium personal portfolio built with React, Vite, TypeScript, Tailwind CSS, and Framer Motion.

Live: https://gaurabhalder.github.io/

## Quick start

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Customize personal information

| What | File |
| --- | --- |
| Name, bio, links, nav, orbit labels | `src/data/site.ts` |
| Expertise + tech marquee | `src/data/skills.ts` |
| Projects + modal copy | `src/data/projects.ts` |
| Experience, stats, testimonials | `src/data/experience.ts` |

Contact form:

1. Create a form at [Formspree](https://formspree.io/)
2. Paste the endpoint into `siteConfig.formspreeEndpoint` in `src/data/site.ts`
3. If left empty, the form falls back to `mailto:`

## Add project images

1. Put images in `public/projects/` (example: `public/projects/dokanai.jpg`)
2. In `src/data/projects.ts`, set:

```ts
image: '/projects/dokanai.jpg',
```

## GitHub Pages deployment

This repo is configured as a **user site** (`gaurabhalder.github.io`) with Vite `base: '/'`.

1. Push to `main`
2. GitHub → **Settings → Pages**
3. Set source to **GitHub Actions**
4. The workflow in `.github/workflows/deploy.yml` builds and deploys `dist`

If you ever host this as a **project site** (`username.github.io/repo-name`), change `base` in `vite.config.ts` to `'/repo-name/'`.

## Project structure

```
src/
  components/   UI sections + shared effects
  data/         Editable portfolio content
  hooks/        Reusable React hooks
  App.tsx       Page composition
  index.css     Tailwind + cyberpunk tokens
```

## Notes

- Desktop-only custom cursor glow
- Respects `prefers-reduced-motion`
- No backend required

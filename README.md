# Macrova — Next.js site

The macrova.in marketing site, converted from a static HTML page to a
**Next.js (App Router) + TypeScript + Tailwind CSS** project with shadcn/ui
structure. It is configured for **static export** so it can be hosted on
GitHub Pages exactly like the original site.

## Stack

- Next.js 14 (App Router), TypeScript, Tailwind CSS
- shadcn/ui structure (`components/ui`, `@/*` path alias, `components.json`)
- `framer-motion` (powers the scroll-animation component)

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
```

## Production build (static export)

```bash
npm run build      # outputs the static site to ./out
```

`next.config.mjs` sets `output: "export"`, so `npm run build` produces a fully
static site in `out/` (no Node server needed). `images.unoptimized` is on
because GitHub Pages can't run Next's image optimizer.

## Deploying to GitHub Pages

A workflow is included at `.github/workflows/deploy.yml`. On every push to
`main` it builds the static export and publishes it to GitHub Pages.

One-time setup in the repo: **Settings → Pages → Build and deployment →
Source = "GitHub Actions"**. The custom domain (`public/CNAME` → `macrova.in`)
and `.nojekyll` are included in the export automatically.

## Project structure

```
app/
  layout.tsx        # metadata, fonts, JSON-LD structured data
  page.tsx          # the landing page (client component)
  globals.css       # Tailwind layers + the original site CSS (verbatim)
components/ui/
  container-scroll-animation.tsx   # the shadcn/ui scroll component
lib/
  utils.ts          # cn() helper (clsx + tailwind-merge)
  landing-effects.ts# ported vanilla-JS interactions (particles, reveal, etc.)
public/
  assets/           # app screenshots & logo
  privacy/, support/# existing sub-pages (kept as static HTML)
  CNAME, robots.txt, sitemap.xml, llms.txt, 404.html, .nojekyll
```

## The scroll-animation component

`components/ui/container-scroll-animation.tsx` is used in `app/page.tsx` inside
the "See it in motion" section (`#showcase`). Pass a `titleComponent` and any
`children` (an app screenshot here) and it applies the scroll-driven 3D tilt.

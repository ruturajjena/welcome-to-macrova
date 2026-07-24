# Macrova — marketing website

A premium, scroll-driven landing page for **Macrova**, the free AI nutrition,
calorie & workout tracker for iOS & Android. Built with Next.js 14 (App Router),
TypeScript, Tailwind CSS, Framer Motion and Lenis. **No image assets** — the
phone and every app screen are CSS/SVG.

The signature element is a **scroll-pinned phone** whose screen changes as you
scroll (Plan → Scanner → Home → Health Lab), with glassy floating cards.

```bash
npm install          # first time (see note below if it errors)
npm run dev          # http://localhost:3000
npm run build        # static export → ./out
```

> **Install note:** `lucide-react` declares a broad React peer range that npm can
> occasionally flag. If `npm install` errors with `ERESOLVE`, run
> `npm install --legacy-peer-deps`.

The build uses `output: "export"` (see `next.config.mjs`), so `npm run build`
produces a fully static `./out` folder that deploys anywhere the current
macrova.in static site does (GitHub Pages, Netlify, …).

---

## Everything editable lives in one file

**`config/theme.ts`** is the single source of truth — all copy, colours, the app
screens' content, features, reviews, FAQ, languages, nav and store links. You
almost never need to touch a component.

### Common edits

| I want to… | Edit |
| --- | --- |
| **Change the accent colour** | `theme.colors.light.accent` / `.dark.accent` (+ `accent-2` for the gradient). Values flow into CSS variables via `lib/cssVars.ts`. |
| **Swap App Store / Play links** | `theme.brand.stores.apple` / `.google` |
| **Edit an in-phone app screen** | `theme.screens.<goal\|home\|scanner\|plan\|lab\|success>` — labels, numbers, meals, macros, chart series, etc. |
| **Reorder / edit the pinned features** | `theme.walkthrough` (array order = scroll order). Each item has a `screen` key and a floating `card`. |
| **Edit hero copy / floating cards** | `theme.hero` |
| **Add or remove a language** | `theme.languages.list` |
| **Change reviews / FAQ / stats** | `theme.reviews`, `theme.faq`, `theme.stats` |
| **Toggle light/dark defaults** | Light is default; dark applies on `<html data-theme="dark">` (see `components/ui/ThemeToggle.tsx`). |

### Adding an icon

Icons are referenced by **name** (string) in `theme.ts`. Register the lucide
icon once in `components/ui/Icon.tsx`, then use its name anywhere in config.

---

## Where the SEO lives

- **Title, description, keywords, Open Graph, Twitter card** →
  `app/layout.tsx` (`metadata`), sourced from `theme.seo`.
- **`SoftwareApplication` JSON-LD** (mobile app rich result) → `app/layout.tsx`
  (`jsonLd`), generated from the theme.
- **One `<h1>`** lives in the hero; sections use a single `<h2>` each.
- **robots.txt / sitemap.xml / llms.txt** → `public/` (preserved from the live
  site so search + AI visibility don't regress).
- **`CNAME`** → `public/CNAME` keeps the `macrova.in` custom domain on export.

To change the site title or meta description, edit `theme.seo` — layout reads
from there.

---

## Project structure

```
app/
  layout.tsx          # fonts, theme CSS vars, SEO metadata + JSON-LD
  page.tsx            # section order
  globals.css         # base styles, utility classes, reduced-motion path
config/
  theme.ts            # ← single source of truth (copy, colours, screens, data)
components/
  phone/
    PhoneShowcase.tsx # the reusable signature device (screen crossfade + cards)
    PhoneFrame.tsx    # CSS/SVG phone frame + status bar
    FloatingCard.tsx  # glassy floating chip
    screens/          # the 6 HTML/CSS app screens + registry
  sections/           # Nav, Hero, Stats, Walkthrough (pinned), HowItWorks,
                      # Languages, PreviewReel, Reviews, FAQ, DownloadCTA, Footer
  ui/                 # Reveal, CountUp, StoreBadges, Logo, Icon, Blooms, QR…
lib/
  motion.ts           # shared easing + reveal variants
  hooks.ts            # SSR-safe mounted / reduced-motion hooks
  cssVars.ts          # theme colours → CSS variables
public/               # CNAME, robots.txt, sitemap.xml, llms.txt, /privacy, /support
```

## The scroll-pinned phone

`components/phone/PhoneShowcase.tsx` is presentational — it renders the device
and crossfades between screens when its `screen` prop changes. The **scroll
mechanics** live in `components/sections/Walkthrough.tsx`, which pins the phone
for a tall section and maps scroll progress → the active screen + floating card.
The hero and download sections reuse the same `PhoneShowcase` with a fixed
screen. This separation keeps the device reusable.

**Reduced motion** (`prefers-reduced-motion`): the pinned section degrades to a
clean static list beside one still screen, screen crossfades and idle float are
disabled, and Lenis smooth-scroll is turned off. All handled SSR-safely so there
is no hydration mismatch.

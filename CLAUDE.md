# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project: Épicurien French Bakery

**Client:** Épicurien French Bakery — W District, Bangkok  
**Founder:** Enzo Le Bohec (1st Best Croissant in Paris 2021)  
**Brand direction:** Moody French luxury — think Pierre Hermé meets fine-dining dessert bar  
**Audience:** Trilingual (French primary, English, Thai)

## Stack
- **Framework:** Next.js 16 App Router, TypeScript
- **Styling:** Tailwind CSS v4 (CSS-first: `@import "tailwindcss"` in `globals.css`)
- **Animation:** `motion` package (`motion/react`) — **never** `framer-motion`
- **Icons:** Lucide React only — **exception:** `Instagram` and `Facebook` were removed from lucide-react v1.x; use `@/components/shared/SocialIcons.tsx` instead
- **Fonts:** Cormorant Garamond (H1, italic) + Satoshi local (H2–body) + Geist Mono (fallback)
- **Deploy:** Vercel (auto-deploys on push to `main`)

## Commands

```bash
npm run dev       # Start dev server (webpack) on localhost:3000
npm run build     # Production build
npm run lint      # ESLint + TypeScript checks
npm run start     # Serve prior production build
```

> **`--webpack` flag is required.** Turbopack crashes on this project because the full OneDrive path exceeds Windows' 260-character path limit when Turbopack generates `.next` cache filenames. The `dev` script in `package.json` already includes `--webpack`.

**If the dev server breaks:**
```bash
npx kill-port 3000
cmd //c "rmdir /s /q .next"   # Windows-safe cache clear
npm run dev
```

## Pages

| Route | File | Description |
|-------|------|-------------|
| `/` | `src/app/page.tsx` | Home — Hero, TrustBar, FeaturedProducts, MidPageCTA, StoryTeaser, InstagramStrip |
| `/menu` | `src/app/menu/page.tsx` | Full product catalog with category filter |
| `/about` | `src/app/about/page.tsx` | Founder story + philosophy cards |
| `/visit` | `src/app/visit/page.tsx` | Address, hours, Google Maps embed |
| `/contact` | `src/app/contact/page.tsx` | Instagram, Facebook, phone — no form yet |

## Component Architecture

```
src/components/
  layout/
    NavBar.tsx          "use client" — fixed top, mobile drawer (AnimatePresence), lang toggle
    Footer.tsx          "use client" — uses useLang() for translations
    MobileStickyBar.tsx "use client" — fixed bottom, hidden on md+
    PageTransition.tsx  "use client" — wraps page content in <motion.main>
  shared/
    DualCTA.tsx         "use client" — Grab + Directions buttons; uses useLang()
    TrustBar.tsx        "use client" — award/ingredient/location strip; uses useLang()
    SocialIcons.tsx     server — inline SVG for Instagram + Facebook (not in lucide-react v1.x)
  sections/
    home/               Hero, FeaturedProducts, MidPageCTA, StoryTeaser, InstagramStrip
    menu/               CategoryFilter ("use client" — filter state + product grid)
    about/              FounderStory, PhilosophyCards (both "use client" for useLang)
    visit/              InfoGrid ("use client"), MapEmbed (server)
src/lib/
  lang/
    index.ts            LangProvider + useLang() — uses createElement, NOT JSX (it's a .ts file)
    en.ts               Source of truth — typed as Dict, NO "as const"
    fr.ts / th.ts       Implement Dict with translated strings
  products.ts           Static product array + featuredProducts subset
  utils.ts              cn() helper (clsx + tailwind-merge)
```

**Rule for `"use client"`:** Any component that calls `useLang()`, uses `useState`/`useEffect`, or renders `motion.*` elements must have `"use client"`. Server components cannot use React Context.

## i18n

`useLang()` returns `{ locale, setLocale, t }` where `t` is the typed `Dict` from `en.ts`.

**Adding a new string:**
1. Add key to `src/lib/lang/en.ts` (no `as const` — fr/th need different string values)
2. Mirror in `fr.ts` and `th.ts`
3. Use in a `"use client"` component: `const { t } = useLang()`

**Do not use next-intl or any i18n library** — OneDrive's file-read errors break packages with heavy dynamic imports at startup.

## Color System (60/30/10 rule)

| Role | Hex | CSS variable | Usage |
|------|-----|-------------|-------|
| Dominant 60% | `#FFFAF0` | `--dominant-brand` | Section backgrounds, breathing space |
| Secondary 30% | `#0C0908` | `--secondary-brand` | Hero, NavBar, Footer, product cards |
| Accent 10% | `#DA9100` | `--accent-brand` | CTAs, icons, price tags, borders |
| Muted text | `#2B1B17` | `--muted-text` | Body text on cream backgrounds |
| Divider | `rgba(218,145,0,0.25)` | `--divider` | Gold hairline borders |

**Current section split per page:**
- Home: Hero + TrustBar dark → FeaturedProducts + MidPageCTA + StoryTeaser + InstagramStrip cream
- Menu: compact dark hero → cream filter+grid section
- About: dark hero → cream FounderStory + PhilosophyCards + CTA
- Visit: dark hero → cream InfoGrid + MapEmbed + Grab banner
- Contact: full cream

**Product image areas are always dark** (`bg-[var(--secondary-brand)]` or dark gradients) — never white.

## Tailwind v4 Gotchas

- Custom fonts (`font-satoshi`, `font-cormorant`) must be declared in the `@theme inline` block in `globals.css` — `tailwind.config.ts` extensions alone are not enough in CSS-first mode:
  ```css
  @theme inline {
    --font-satoshi: var(--font-satoshi);
    --font-cormorant: var(--font-cormorant);
  }
  ```
- Use `bg-[var(--dominant-brand)]` inline syntax — no legacy `theme()` function in CSS.
- `shadcn/tailwind.css` is imported in `globals.css` for shadcn token compatibility.

## motion/react Gotchas

- Import: `import { motion } from "motion/react"` — not `framer-motion`.
- When defining `Variants` objects, import and annotate the type explicitly:
  ```ts
  import { motion, type Variants } from "motion/react";
  const myVariants: Variants = { ... };
  ```
  Without the annotation, TypeScript infers `ease: string` instead of `Easing`, which fails type-checking.
- `whileHover` on a parent `motion.div` propagates to child `variants` — use this pattern for nav underline animations.

## Critical Constraints

1. **No next-intl** — custom `LangContext` only.
2. **No carousel autoplay** — ever.
3. **No white backgrounds** for product image areas.
4. **`lang/index.ts` uses `createElement`** not JSX — the file is `.ts` not `.tsx`; ESLint rejects JSX in `.ts` files.
5. **`en.ts` has no `as const`** — fr/th must satisfy `Dict` with their own string values.
6. **Contact form** — no `POST /api/contact` route exists yet. When adding one, create the route at `src/app/api/contact/route.ts`.

## CTAs (global)

- **Order on Grab:** `https://food.grab.com/th/en/` (placeholder — replace with real merchant deep-link)
- **Get Directions:** `https://maps.app.goo.gl/mRJsESrH4KEqCGJ9A`
- **Instagram:** `https://instagram.com/epicurien.bkk`
- **Facebook:** `https://facebook.com/share/18WCJuTpEe/`
- **Phone:** `+66 80 791 2902`

## Design Reference

**Primary:** [Pierre Hermé](https://pierreherme.com) — gold standard for typography, product photography, luxury spacing, mobile-first.  
**Priority:** Mobile experience → Desktop refinement → Trilingual accessibility.

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Turbopack crash / path too long | Already fixed: dev script uses `--webpack`. If it appears again, verify `package.json` has `next dev --webpack`. |
| `UNKNOWN: unknown error, read` | `npx kill-port 3000 && cmd //c "rmdir /s /q .next" && npm run dev` |
| `Cannot apply unknown utility class font-satoshi` | Add `--font-satoshi: var(--font-satoshi)` to `@theme inline` block in `globals.css` |
| `Export Instagram doesn't exist` | Use `InstagramIcon` from `@/components/shared/SocialIcons` |
| `Variants` type error on `ease` | Annotate variant objects as `Variants` from `"motion/react"` |
| Vercel deploy fails | Check build logs — TypeScript errors in `motion` variant objects are the most common cause |

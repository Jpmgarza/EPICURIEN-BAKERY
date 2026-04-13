# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> **Brand fact:** Enzo Le Bohec won **N.1 Best Croissant in Paris 2021** — keep this visible in trust/award copy.

---

## Project

**Client:** Épicurien French Bakery — W District, Bangkok  
**Brand direction:** Moody French luxury — Pierre Hermé meets fine-dining dessert bar  
**Audience:** Trilingual — English (primary), French, Thai  
**Default locale:** `"en"` — English is both the default and the main language of the site.

---

## Stack

| Layer | Choice | Notes |
|-------|--------|-------|
| Framework | Next.js 16 App Router + TypeScript | |
| Styling | Tailwind CSS v4 — CSS-first | `@import "tailwindcss"` in `globals.css` |
| Animation | `motion/react` | **Never** `framer-motion` |
| UI primitives | `@base-ui/react` + `shadcn` | Only `button.tsx` installed so far |
| Icons | Lucide React only | **Exception:** Instagram + Facebook → `@/components/shared/SocialIcons.tsx` |
| Fonts | Cormorant Garamond (H1, Google Fonts) + Satoshi (H2–body, local WOFF2) | |
| Deploy | Vercel | Auto-deploys on push to `main` |

---

## Commands

```bash
npm run dev       # Dev server on localhost:3000 (webpack)
npm run build     # Production build
npm run lint      # ESLint + TypeScript checks
npm run start     # Serve prior production build
```

> **`--webpack` flag is required.** Turbopack crashes because the OneDrive
> path exceeds Windows' 260-char limit when generating `.next` cache filenames.
> The `dev` script in `package.json` already includes `--webpack`.

**If the dev server breaks:**
```bash
npx kill-port 3000
cmd //c "rmdir /s /q .next"
npm run dev
```

---

## Environment Variables

Create `.env.local` at project root — **do not commit this file.**

```env
NEXT_PUBLIC_SUPABASE_URL=https://pbrnjxgzfmhbcgcqawro.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-anon-key-here>
```

Both are required — the app throws at startup if missing.  
For Vercel: set both in project Environment Variables settings (keep `NEXT_PUBLIC_` prefix).

---

## Supabase & Image Storage

All product images live in Supabase, not `public/`. Bucket: **`products`**.

**Image URL pattern:**
https://pbrnjxgzfmhbcgcqawro.supabase.co/storage/v1/object/public/products/<filename>

text

**`src/lib/supabase.ts` exports:**
- `supabase` — configured client
- `uploadProductImage(file, productName)` → `string | null`
- `getImageUrl(bucket, path)` → `string`
- `deleteProductImage(filePath)` → `boolean`

**Using images in components:**
```tsx
import Image from "next/image";

export function ProductCard({ product }) {
  const imageUrl = `https://pbrnjxgzfmhbcgcqawro.supabase.co/storage/v1/object/public/products/${product.image}`;
  return <Image src={imageUrl} alt={product.name} width={300} height={300} />;
}
```

**`products.ts` shape:**
```ts
{ id, name, price, category, descriptionKey?, image }
// image = filename only, e.g. "croissant-au-beurre.jpg"
// descriptionKey = optional key into t.menu
```

**Rules:**
- `next.config.ts` already whitelists the Supabase domain — no config changes needed
- All images go in the `products` bucket (subdirectories OK: `products/croissants/`)
- Naming: lowercase, hyphens, include extension

---

## Pages

| Route | File | Sections |
|-------|------|----------|
| `/` | `src/app/page.tsx` | Hero, TrustBar, FeaturedProducts, MidPageCTA, StoryTeaser, TestimonialsSection, InstagramStrip |
| `/menu` | `src/app/menu/page.tsx` | Compact dark hero → cream filter + product grid |
| `/about` | `src/app/about/page.tsx` | Dark hero → FounderStory + PhilosophyCards + TestimonialsSection + CTA |
| `/visit` | `src/app/visit/page.tsx` | Dark hero → InfoGrid + MapEmbed + Grab banner |
| `/contact` | `src/app/contact/page.tsx` | Full cream — Instagram, Facebook, phone only (no form) |

---

## File Structure

```
src/
  app/                   App Router pages + layouts
  components/
    layout/              NavBar, Footer, MobileStickyBar, PageTransition
    shared/              DualCTA, TrustBar, SocialIcons, ImageUpload
    ui/                  shadcn components (button.tsx only)
    sections/            Page-specific sections (grouped by page)
  lib/
    lang/                LangProvider, useLang(), en/fr/th dictionaries
    supabase.ts          Supabase client + image helpers
    products.ts          Product catalog + featuredProducts
    utils.ts             cn() helper (clsx + tailwind-merge)
  globals.css            Tailwind directives + CSS vars + @theme inline
public/
  fonts/                 Satoshi-Regular.woff2, Satoshi-Medium.woff2
```

---

## Component Architecture

```
layout/
  NavBar.tsx          "use client" — fixed top, mobile drawer (AnimatePresence), lang toggle
                      Section-aware color: reads data-nav-color="light"|"dark" from page sections
                      on scroll to switch navbar between light and dark styles (non-home pages only).
                      On home, navbar is transparent and becomes opaque after scrolling past hero.
  Footer.tsx          "use client" — useLang()
  MobileStickyBar.tsx "use client" — fixed bottom, hidden on md+
  PageTransition.tsx  "use client" — wraps content in <motion.main>
  LoadingScreen.tsx   "use client" — luxury loading screen shown once on first visit;
                      animated icon fades out automatically. Do not remove.
shared/
  DualCTA.tsx         "use client" — Grab + Directions buttons
  TrustBar.tsx        "use client" — award/ingredient/location strip
  SocialIcons.tsx     server — inline SVG (Instagram + Facebook not in lucide-react v1.x)
  ImageUpload.tsx     "use client" — drag-and-drop upload to Supabase
ui/
  button.tsx          shadcn Button
sections/
  home/               Hero, FeaturedProducts, MidPageCTA, StoryTeaser, InstagramStrip
  menu/               CategoryFilter ("use client" — filter state + product grid)
  about/              FounderStory, PhilosophyCards ("use client" — useLang)
  visit/              InfoGrid ("use client"), MapEmbed (server)
```

**`"use client"` rule:** Required on any component that calls `useLang()`,
uses `useState`/`useEffect`, or renders `motion.*` elements.

---

## i18n

`useLang()` returns `{ locale, setLocale, t }`:
- `locale` — `"en"` (default) | `"fr"` | `"th"`
- `t` — typed `Dict` of all translated strings for current locale
- `en.ts` is the source of truth — always populate English first, then mirror to `fr.ts` and `th.ts`

**`lang/index.ts` uses `createElement`, not JSX** — it's a `.ts` file (not `.tsx`).
ESLint rejects JSX in `.ts` files. Do not convert it.

**`en.ts` has no `as const`** — `fr.ts` and `th.ts` must independently satisfy `Dict`.

**Adding a translation string:**
1. Add key + English value to `en.ts` (camelCase, no `as const`)
2. Mirror exact key structure in `fr.ts` and `th.ts`
3. Use in `"use client"` component: `const { t } = useLang()`
4. Run `npm run lint` — TypeScript catches missing keys

**Do not use next-intl or any i18n library** — OneDrive file-read errors
break packages with heavy dynamic imports at startup.

---

## Brand Colors

Defined as CSS custom properties in `globals.css` — use these everywhere instead of raw hex values:

| Variable | Value | Purpose |
|----------|-------|---------|
| `--dominant-brand` | `#FFFAF0` | Warm cream — light section backgrounds |
| `--secondary-brand` | `#0C0908` | Near-black — dark section backgrounds, primary text |
| `--accent-brand` | `#FFFFFF` | Pure white |
| `--muted-text` | `#2B1B17` | Dark brown — subdued body copy |
| `--divider` | `rgba(255,255,255,0.10)` | Subtle white rule between dark sections |

Usage: `bg-[var(--dominant-brand)]`, `text-[var(--secondary-brand)]`, etc.

The typical section pattern is either **cream** (`bg-[var(--dominant-brand)]` with dark text) or **dark** (`bg-[var(--secondary-brand)]` with light text). Alternate between them for visual rhythm.

---

## LoadingScreen Mechanism

`LoadingScreen.tsx` renders an animated curtain (fixed overlay, `z-[9999]`) for ~3 s on first page load. When the timer fires it:
1. Adds `body.page-loaded` CSS class
2. Unmounts the overlay via `AnimatePresence`

`#main-content` in `layout.tsx` starts at `opacity: 0`; `globals.css` transitions it to `opacity: 1` when `body.page-loaded` is present. **Do not remove** `#main-content` wrapper or the `body.page-loaded` CSS rule — the page would flash invisible content without them.

---

## NavBar Color Convention (`data-nav-color`)

NavBar reads `data-nav-color` attributes from page sections as the user scrolls (non-home pages only). On the home page it switches from transparent → opaque after the hero.

To control navbar appearance on a new section, add `data-nav-color="light"` or `data-nav-color="dark"` to the section's root element:
```tsx
<section data-nav-color="dark" className="bg-[var(--secondary-brand)]">
  {/* dark background → navbar switches to light text */}
</section>
<section data-nav-color="light" className="bg-[var(--dominant-brand)]">
  {/* light background → navbar switches to dark text */}
</section>
```

---

## Tailwind v4 Gotchas

- Custom fonts must be declared in `@theme inline` in `globals.css`:
  ```css
  @theme inline {
    --font-satoshi: var(--font-satoshi);
    --font-cormorant: var(--font-cormorant);
  }
  ```
  `tailwind.config.ts` extensions alone are not enough in CSS-first mode.
- Use `bg-[var(--color-name)]` inline syntax — no legacy `theme()` function.
- `shadcn/tailwind.css` is imported in `globals.css` for shadcn token compatibility.

---

## motion/react Gotchas

- Import: `import { motion } from "motion/react"` — never `framer-motion`
- Always annotate `Variants` objects explicitly:
  ```ts
  import { motion, type Variants } from "motion/react";
  const myVariants: Variants = { ... };
  ```
  Without annotation, TypeScript infers `ease: string` instead of `Easing` → build fails.
- `whileHover` on a parent `motion.div` propagates to child `variants` — use for nav underline animations.

---

## Critical Constraints

1. **No next-intl** — custom `LangContext` only
2. **No carousel autoplay** — ever
3. **No `framer-motion`** — use `motion/react`
4. **`lang/index.ts` stays `.ts`** — uses `createElement`, not JSX
5. **`en.ts` has no `as const`** — fr/th satisfy `Dict` independently
6. **Contact form API route doesn't exist yet** — create at `src/app/api/contact/route.ts` when needed

---

## CTAs (Global)

| CTA | URL |
|-----|-----|
| Order on Grab | `https://food.grab.com/th/en/` **TODO: replace with real Grab merchant deep-link** |
| Get Directions | `https://maps.app.goo.gl/mRJsESrH4KEqCGJ9A` |
| Instagram | `https://instagram.com/epicurien.bkk` |
| Facebook | `https://facebook.com/share/18WCJuTpEe/` |
| Phone | `+66 80 791 2902` |

---

## Common Tasks

### Adding a New Product
1. Upload image to Supabase `products` bucket — note the relative path
2. Add product object to `src/lib/products.ts` (id, name, price, category, image, descriptionKey)
3. Add `descriptionKey` string to `en.ts`, `fr.ts`, `th.ts` under `menu` section
4. If featured: add to `featuredProducts` array

### Adding a New Page
1. Create `src/app/[route]/page.tsx`
2. Wrap content in `<PageTransition>`
3. Add links in `NavBar.tsx` and `Footer.tsx`
4. Add translations in `src/lib/lang/{en,fr,th}.ts`
5. Test all three locales by toggling the language selector

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Turbopack crash / path too long | `package.json` dev script must include `--webpack` |
| `UNKNOWN: unknown error, read` (OneDrive timeout) | `npx kill-port 3000 && cmd //c "rmdir /s /q .next" && npm run dev` |
| `Cannot apply unknown utility class font-satoshi` | Add `--font-satoshi: var(--font-satoshi)` to `@theme inline` in `globals.css` |
| `Export Instagram doesn't exist` | Use `InstagramIcon` from `@/components/shared/SocialIcons` |
| `Variants` type error on `ease` | Annotate variant objects as `type Variants` from `"motion/react"` |
| Vercel deploy fails | TypeScript errors in `motion` variant objects are most common cause — check build logs |
| Supabase env vars missing at build | Set both `NEXT_PUBLIC_` vars in `.env.local` and in Vercel project settings |
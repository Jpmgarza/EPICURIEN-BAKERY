## Communication Style
Respond like a caveman.
No articles, no filler words, no pleasantries.
Short.
Direct.
Code speaks for itself.
If asked for code, give code.
No explain unless asked.
No sycophancy.
No restating the question.
No sign-offs.

---

`src/lib/supabase.ts` exports: `supabase`, `uploadProductImage`, `getImageUrl`, `deleteProductImage`.
Supabase domain is already whitelisted in `next.config.ts`.

---

## i18n
- `useLang()` returns `{ locale, setLocale, t }`
- `en.ts` is source of truth — populate English first, mirror to `fr.ts` and `th.ts`
- **French product name overrides** → `fr-product-names.ts` keyed by product ID — edit only this file for FR names
- **Adding a string:** add to `en.ts` → mirror in `fr.ts` + `th.ts` → `npm run lint` catches missing keys

---

## Brand Colors
| Variable | Value | Use |
|----------|-------|-----|
| `--dominant-brand` | `#FFFAF0` | Cream — light section backgrounds |
| `--secondary-brand` | `#0C0908` | Near-black — dark sections, primary text |
| `--accent-brand` | `#FFFFFF` | Pure white |
| `--muted-text` | `#2B1B17` | Dark brown — subdued body copy |
| `--divider` | `rgba(255,255,255,0.10)` | Subtle rule between dark sections |

Usage: `bg-[var(--dominant-brand)]`. Alternate cream/dark sections for visual rhythm.

---

## Key Gotchas

**Tailwind v4:**
- Custom fonts must be in `@theme inline` in `globals.css` — `tailwind.config.ts` alone is not enough
- Use `bg-[var(--color-name)]` — no legacy `theme()` function

**motion/react:**
- Always annotate `Variants` objects: `import { type Variants } from "motion/react"` — without it, `ease: string` causes build failure

**NavBar:**
- Sections control navbar color via `data-nav-color="light"|"dark"` on the section root element
- Home page: transparent → opaque after hero scroll; other pages: follows `data-nav-color`

**LoadingScreen:**
- Do not remove `#main-content` wrapper or `body.page-loaded` CSS rule in `globals.css` — page content is invisible without them

---

## CTAs
| Action | URL |
|--------|-----|
| Order on Grab | `https://food.grab.com/th/en/` *(TODO: replace with real merchant deep-link)* |
| Get Directions | `https://maps.app.goo.gl/mRJsESrH4KEqCGJ9A` |
| Instagram | `https://instagram.com/epicurien.bkk` |
| Facebook | `https://facebook.com/share/18WCJuTpEe/` |
| Phone | `+66 80 791 2902` |

---

## Common Tasks

**Add a product:**
1. Upload image to Supabase `products` bucket
2. Add to `src/lib/products.ts` — `{ id, name, price, category, image, descriptionKey? }`
3. Add `descriptionKey` to `en.ts` / `fr.ts` / `th.ts` under `menu`
4. Add French name to `fr-product-names.ts`
5. If featured → add to `featuredProducts` array

**Add a page:**
1. Create `src/app/[locale]/[route]/page.tsx`
2. Wrap in `<PageTransition>`
3. Add links to `NavBar.tsx` + `Footer.tsx` using `/${locale}/route`
4. Add translations in `en.ts` / `fr.ts` / `th.ts`
5. Test all three locales

---

## Troubleshooting
| Problem | Fix |
|---------|-----|
| Turbopack crash | Dev script must include `--webpack` |
| `UNKNOWN: unknown error, read` | Kill port + delete `.next` + restart |
| `Cannot apply unknown utility font-satoshi` | Add `--font-satoshi: var(--font-satoshi)` to `@theme inline` |
| `Export Instagram doesn't exist` | Use `InstagramIcon` from `@/components/shared/SocialIcons` |
| `Variants` type error on `ease` | Annotate as `type Variants` from `"motion/react"` |
| Supabase env vars missing | Set `NEXT_PUBLIC_` vars in `.env.local` and Vercel project settings |
# Proofreading Audit — Épicurien French Bakery
**Date:** 2026-04-24  
**Languages audited:** English (EN), Thai (TH)  
**Scope:** All user-facing strings in `src/lib/lang/`, hardcoded SEO metadata in page/layout files  
**Auditor:** Claude Code (professional proofreading pass)

---

## Issue Log

| # | File | Location | Language | Original Text | Issue | Suggested Fix | Status |
|---|------|----------|----------|---------------|-------|---------------|--------|
| 1 | `src/lib/lang/en.ts` | `menu.iceCappuccino` | EN | `"Ice Cappuccino"` | CONSISTENCY — all other iced drinks use "Iced" (Iced Espresso, Iced Latte, Iced Mocha, Iced Americano…) | `"Iced Cappuccino"` | ✅ Resolved |
| 2 | `src/lib/lang/en.ts` | `menu.iceCaramelMacchiato` | EN | `"Ice Caramel Macchiato"` | CONSISTENCY — same pattern as #1 | `"Iced Caramel Macchiato"` | ✅ Resolved |
| 3 | `src/lib/lang/en.ts` | `menu.focacciaBread` | EN | `"Focaccia bread, sold per piece"` | TONE — "Focaccia bread" is redundant (focaccia is bread by definition); "per piece" is informal vs. brand tone | `"Focaccia, sold by the piece"` | ✅ Resolved |
| 4 | `src/app/[locale]/about/page.tsx` | `generateMetadata` description (×3) | EN | `"N.1 Best Croissant in Paris 2021"` | CONSISTENCY — the badge in `en.ts` uses `N°1`; "N.1" with a full stop is non-standard | `"No. 1 Best Croissant in Paris 2021"` | ✅ Resolved |
| 5 | `src/lib/lang/th.ts` | `hero.trustBadge` | TH | `"อันดับ 1 ครัวซองค์ที่ดีที่สุดในปารีส — 2021"` | SPELLING — "ครัวซองค์" is non-standard; Royal Institute of Thailand spelling is "ครัวซองต์" | Replace "ครัวซองค์" → "ครัวซองต์" | ✅ Resolved |
| 6 | `src/lib/lang/th.ts` | `hero.headline` | TH | `"ศิลปะแห่งครัวซองค์ฝรั่งเศส."` | SPELLING — same as #5 | Replace "ครัวซองค์" → "ครัวซองต์" | ✅ Resolved |
| 7 | `src/lib/lang/th.ts` | `hero.badgeAward` | TH | `"ครัวซองค์\nที่ดีที่สุด\nในปารีส"` | SPELLING — same as #5 | Replace "ครัวซองค์" → "ครัวซองต์" | ✅ Resolved |
| 8 | `src/lib/lang/th.ts` | `menu.croissant` | TH | `"ครัวซองท์ เป็นตัวที่ขายดีที่สุด…"` | SPELLING — "ครัวซองท์" is also non-standard; testimonials in the same file correctly use "ครัวซองต์" | `"ครัวซองต์ เป็นตัวที่ขายดีที่สุด…"` | ✅ Resolved |
| 9 | `src/lib/lang/th.ts` | `menu.croissantAmandes` | TH | `"ครัวซองท์ อัลมอนด์"` | SPELLING — "ครัวซองท์" same as #8 | `"ครัวซองต์ อัลมอนด์"` | ✅ Resolved |
| 10 | `src/lib/lang/th.ts` | `menu.painSuisse` | TH | `"สอดไส้ คัสตาทและช็อกโกแลตชิพ"` | SPELLING — stray space after "ไส้" (should be unspaced: "สอดไส้คัสตาท…") | `"สอดไส้คัสตาทและช็อกโกแลตชิพ"` | ✅ Resolved |
| 11 | `src/lib/lang/th.ts` | `menu.painChocolatAmandes` | TH | `"สอดไส้ช็อสติ๊ก และครีมอัลมอนด์"` | SPELLING — "ช็อสติ๊ก" is a truncated/garbled form of "ช็อกโกแลตสติ๊ก" | `"สอดไส้ช็อกโกแลตสติ๊ก และครีมอัลมอนด์"` | ✅ Resolved |
| 12 | `src/lib/lang/th.ts` | `menu.painSuisseAmandes` | TH | `"สอดไส้คัสตาทผสมช้อคโกแลตชิพ"` | SPELLING/CONSISTENCY — "ช้อคโกแลต" is non-standard; same item uses "ช็อกโกแลต" in `menu.painSuisse` | `"สอดไส้คัสตาทผสมช็อกโกแลตชิพ"` | ✅ Resolved |
| 13 | `src/lib/lang/th.ts` | `about.subline` | TH | `"เรื่องราวเบื้องหลังทุกชิ้นครัวซองค์"` | SPELLING — "ครัวซองค์" same as #5 | Replace "ครัวซองค์" → "ครัวซองต์" | ✅ Resolved |
| 14 | `src/lib/lang/th.ts` | `about.story` | TH | `"…ผู้คว้ารางวัลที่ 1 ครัวซองค์ยอดเยี่ยมแห่งปารีส…"` | SPELLING — "ครัวซองค์" same as #5 | Replace "ครัวซองค์" → "ครัวซองต์" | ✅ Resolved |
| 15 | `src/lib/lang/th.ts` | `about.story` | TH | `"…สร้างสรรค์เบเกอรีฝีมืออย่างพิถีพิถัน…"` | CONSISTENCY — rest of site uses "เบเกอรี่" (with mai ek ่ tone mark); missing here | `"เบเกอรี่ฝีมือ"` | ✅ Resolved |
| 16 | `src/lib/lang/th.ts` | `about.philosophy3Desc` | TH | `"อันดับ 1 ครัวซองค์ที่ดีที่สุดในปารีส 2021"` | SPELLING — "ครัวซองค์" same as #5 | Replace "ครัวซองค์" → "ครัวซองต์" | ✅ Resolved |
| 17 | `src/lib/lang/th.ts` | `storyTeaser.body` | TH | `"…ครัวซองค์ ทาร์ต และขนมปังทุกชิ้น…"` | SPELLING — "ครัวซองค์" same as #5 | Replace "ครัวซองค์" → "ครัวซองต์" | ✅ Resolved |
| 18 | `src/lib/lang/th.ts` | `testimonials.reviewTexts[2]` | TH | `"ฟิเซลล์ บริออช และปาน สวิส คือเมนูโปรด…"` | CONSISTENCY — "Ficelle" in the same sentence is kept in French (as on the menu); "ปาน สวิส" is an inconsistent partial transliteration with a stray space; menu calls it "Pain Suisse" | `"Pain Suisse"` | ✅ Resolved |

---

## Out-of-Scope Notes (French — not fixed in this audit)

| Note | File | Detail |
|------|------|--------|
| FR mocha spelling inconsistency | `src/lib/lang/fr-product-names.ts` vs `fr.ts` | `"iced-mocha"` key → `"Moka glacé"` (French spelling) but `fr.menu.icedMocha` → `"Mocha Glacé"` (English/Italian spelling). Both appear in user-facing UI. Recommend standardising to `"Moka glacé"` throughout. |

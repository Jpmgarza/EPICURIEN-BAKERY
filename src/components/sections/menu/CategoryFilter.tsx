"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Bike } from "lucide-react";
import { useLang } from "@/lib/lang";
import { frProductNames } from "@/lib/lang/fr-product-names";
import { products, type Category } from "@/lib/products";

const SUPABASE_STORAGE = "https://pbrnjxgzfmhbcgcqawro.supabase.co/storage/v1/object/public/products/";

const GRAB_URL = "https://r.grab.com/g/6-20260425_161413_D423C37AF6D44E2FB0FCDCEB13FA084F_MEXMPS-3-C7LVFA53AXX2AX";

// 4×5 SVG placeholder matching --secondary-brand (#0C0908) card background
const BLUR_DATA_URL = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5'%3E%3Crect width='4' height='5' fill='%230C0908'/%3E%3C/svg%3E";

type Filter = "All" | Category;

export function CategoryFilter() {
  const { t, locale } = useLang();
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const filters: { key: Filter; label: string }[] = [
    { key: "All", label: t.products.filterAll },
    { key: "Viennoiseries", label: t.products.filterViennoiseries },
    { key: "Pains", label: t.products.filterPains },
    { key: "Pâtisseries", label: t.products.filterPatisseries },
    { key: "Boissons", label: t.products.filterBoissons },
    { key: "Biscuits Bretons", label: t.products.filterBiscuitsBretons },
  ];

  // TODO: add image to focaccia-bread and cheesecake-cup in products.ts to make them visible
  const visibleProducts = products.filter((p) => p.image);

  const filtered =
    activeFilter === "All"
      ? visibleProducts
      : visibleProducts.filter((p) => p.category === activeFilter);

  return (
    <div className="pt-12">
      {/* Filter pills */}
      <div className="flex flex-wrap gap-3 justify-center mb-14">
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            aria-pressed={activeFilter === f.key}
            onClick={() => setActiveFilter(f.key)}
            className={`font-satoshi text-[10px] tracking-[0.2em] uppercase px-6 py-2.5 border transition-all duration-200 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--secondary-brand)] ${
              activeFilter === f.key
                ? "bg-[var(--secondary-brand)] border-[var(--secondary-brand)] text-[var(--dominant-brand)]"
                : "border-[var(--secondary-brand)]/25 text-[var(--secondary-brand)] opacity-50 hover:opacity-100 hover:border-[var(--secondary-brand)]/50"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Product grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {filtered.map((product, i) => (
            <div
              key={product.id}
              className="group bg-[var(--secondary-brand)] border border-[var(--dominant-brand)]/8 hover:border-[var(--dominant-brand)]/25 transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Product image */}
              <div className="aspect-[4/5] relative overflow-hidden bg-[var(--secondary-brand)]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_75%,rgba(255,255,255,0.04),transparent_55%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_20%,rgba(255,250,240,0.05),transparent_50%)]" />
                {product.image && (
                  <Image
                    src={SUPABASE_STORAGE + product.image}
                    alt={`${product.name} — Épicurien French Bakery Bangkok`}
                    fill
                    quality={80}
                    priority={i < 8}
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1023px) 50vw, 25vw"
                  />
                )}
              </div>
              {/* Info + CTA */}
              <div className="p-5 border-t border-[rgba(255,255,255,0.06)] flex flex-col flex-1">
                <p className="font-satoshi font-medium text-[var(--dominant-brand)] text-sm mb-1.5">
                  {locale === "fr" ? (frProductNames[product.id] ?? product.name) : product.name}
                </p>
                {product.descriptionKey && (
                  <p className="font-satoshi text-[var(--dominant-brand)]/70 text-xs mb-3 leading-relaxed">
                    {t.menu[product.descriptionKey as keyof typeof t.menu] || ""}
                  </p>
                )}
                <p className="font-satoshi text-[var(--dominant-brand)] opacity-60 text-sm mb-4">
                  {product.price} THB
                </p>
                <a
                  href={GRAB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 w-full border border-white/30 text-white font-satoshi text-[9px] tracking-[0.1em] uppercase px-2 py-2.5 min-h-[44px] whitespace-nowrap overflow-hidden hover:bg-white hover:text-[var(--secondary-brand)] hover:border-white transition-all duration-200 mt-auto"
                >
                  <Bike size={12} />
                  {t.products.addToGrab}
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

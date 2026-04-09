"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Bike } from "lucide-react";
import { useLang } from "@/lib/lang";
import { products, type Category } from "@/lib/products";

const GRAB_URL = "https://food.grab.com/th/en/";

type Filter = "All" | Category;

export function CategoryFilter() {
  const { t } = useLang();
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const filters: { key: Filter; label: string }[] = [
    { key: "All", label: t.products.filterAll },
    { key: "Viennoiseries", label: t.products.filterViennoiseries },
    { key: "Pains", label: t.products.filterPains },
    { key: "Pâtisseries", label: t.products.filterPatisseries },
    { key: "Boissons", label: t.products.filterBoissons },
  ];

  const filtered =
    activeFilter === "All"
      ? products
      : products.filter((p) => p.category === activeFilter);

  return (
    <div className="pt-12">
      {/* Filter pills */}
      <div className="flex flex-wrap gap-3 justify-center mb-14">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setActiveFilter(f.key)}
            className={`font-satoshi text-[10px] tracking-[0.2em] uppercase px-6 py-2.5 rounded-full border transition-all duration-200 cursor-pointer ${
              activeFilter === f.key
                ? "bg-[var(--accent-brand)] border-[var(--accent-brand)] text-[var(--secondary-brand)]"
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {filtered.map((product) => (
            <div
              key={product.id}
              className="group bg-[var(--secondary-brand)] border border-[rgba(218,145,0,0.12)] hover:border-[var(--accent-brand)] transition-all duration-300 overflow-hidden"
            >
              {/* Image placeholder */}
              <div className="aspect-[4/5] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1c1309] via-[#0C0908] to-[#1a1007]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_75%,rgba(218,145,0,0.18),transparent_55%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_20%,rgba(255,250,240,0.06),transparent_50%)]" />
              </div>
              {/* Info + CTA */}
              <div className="p-5 border-t border-[rgba(218,145,0,0.08)]">
                <p className="font-satoshi font-medium text-[var(--dominant-brand)] text-sm mb-1.5">
                  {product.name}
                </p>
                <p className="font-satoshi text-[var(--accent-brand)] text-sm mb-4">
                  {product.price} THB
                </p>
                <a
                  href={GRAB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full border border-[var(--accent-brand)]/40 text-[var(--accent-brand)] font-satoshi text-[10px] tracking-[0.2em] uppercase py-2.5 hover:bg-[var(--accent-brand)] hover:text-[var(--secondary-brand)] hover:border-[var(--accent-brand)] transition-all duration-200"
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

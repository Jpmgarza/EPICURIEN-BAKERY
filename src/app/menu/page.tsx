"use client";

import { PageTransition } from "@/components/layout/PageTransition";
import { CategoryFilter } from "@/components/sections/menu/CategoryFilter";
import { useLang } from "@/lib/lang";

export default function MenuPage() {
  const { t } = useLang();
  return (
    <PageTransition>
      {/* Compact Hero */}
      <section data-nav-color="dark" className="bg-[var(--secondary-brand)] min-h-[40vh] flex flex-col items-center justify-center text-center px-6 pt-16">
        <div className="w-8 h-px bg-[var(--accent-brand)] opacity-50 mb-8" />
        <h1 className="font-cormorant font-normal italic text-[var(--dominant-brand)] text-5xl md:text-7xl mb-4">
          {t.menu.headline}
        </h1>
        <p className="font-satoshi text-[var(--dominant-brand)] opacity-40 text-[10px] tracking-[0.3em] uppercase">
          {t.menu.subline}
        </p>
      </section>

      {/* Filter + Grid */}
      <section data-nav-color="light" className="bg-[var(--dominant-brand)] pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <CategoryFilter />
        </div>
      </section>
    </PageTransition>
  );
}

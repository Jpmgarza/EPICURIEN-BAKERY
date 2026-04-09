import { PageTransition } from "@/components/layout/PageTransition";
import { CategoryFilter } from "@/components/sections/menu/CategoryFilter";

export default function MenuPage() {
  return (
    <PageTransition>
      {/* Compact Hero */}
      <section className="bg-[var(--secondary-brand)] min-h-[40vh] flex flex-col items-center justify-center text-center px-6 pt-16">
        <div className="w-8 h-px bg-[var(--accent-brand)] opacity-50 mb-8" />
        <h1 className="font-cormorant font-normal italic text-[var(--dominant-brand)] text-5xl md:text-7xl mb-4">
          La Carte
        </h1>
        <p className="font-satoshi text-[var(--dominant-brand)] opacity-40 text-[10px] tracking-[0.3em] uppercase">
          Baked fresh every morning in our W District atelier
        </p>
      </section>

      {/* Filter + Grid */}
      <section className="bg-[var(--dominant-brand)] pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <CategoryFilter />
        </div>
      </section>
    </PageTransition>
  );
}

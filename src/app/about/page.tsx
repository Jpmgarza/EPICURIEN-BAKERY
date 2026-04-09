import { PageTransition } from "@/components/layout/PageTransition";
import { FounderStory } from "@/components/sections/about/FounderStory";
import { PhilosophyCards } from "@/components/sections/about/PhilosophyCards";
import { DualCTA } from "@/components/shared/DualCTA";

export default function AboutPage() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="bg-[var(--secondary-brand)] min-h-[55vh] flex flex-col items-center justify-center text-center px-6 pt-16 relative overflow-hidden">
        {/* Decorative ampersand */}
        <span className="absolute font-cormorant italic text-[var(--accent-brand)] opacity-[0.04] text-[22rem] leading-none select-none pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          &amp;
        </span>
        <div className="relative z-10 flex flex-col items-center gap-5">
          <div className="w-8 h-px bg-[var(--accent-brand)] opacity-50" />
          <h1 className="font-cormorant font-normal italic text-[var(--dominant-brand)] text-5xl md:text-7xl">
            L&apos;Artisan
          </h1>
          <p className="font-satoshi text-[var(--dominant-brand)] opacity-40 text-[10px] tracking-[0.3em] uppercase">
            The story behind every croissant
          </p>
        </div>
      </section>

      <FounderStory />
      <PhilosophyCards />

      {/* CTA footer */}
      <section className="bg-[var(--dominant-brand)] py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <DualCTA heading="Ready to taste it?" variant="light" />
        </div>
      </section>
    </PageTransition>
  );
}

"use client";

import { PageTransition } from "@/components/layout/PageTransition";
import { InfoGrid } from "@/components/sections/visit/InfoGrid";
import { MapEmbed } from "@/components/sections/visit/MapEmbed";
import { DualCTA } from "@/components/shared/DualCTA";
import { useLang } from "@/lib/lang";

export default function VisitPage() {
  const { t } = useLang();
  return (
    <PageTransition>
      {/* Hero */}
      <section data-nav-color="dark" className="bg-[var(--secondary-brand)] min-h-[40vh] flex flex-col items-center justify-center text-center px-6 pt-16">
        <div className="w-8 h-px bg-[var(--accent-brand)] opacity-50 mb-8" />
        <h1 className="font-cormorant font-normal italic text-[var(--dominant-brand)] text-4xl sm:text-5xl md:text-7xl mb-4">
          {t.visit.headline}
        </h1>
        <p className="font-satoshi text-[var(--dominant-brand)] opacity-40 text-[10px] tracking-[0.3em] uppercase">
          {t.visit.subline}
        </p>
      </section>

      <InfoGrid />
      <MapEmbed />

      {/* Grab delivery banner */}
      <section data-nav-color="light" className="bg-[var(--dominant-brand)] py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <DualCTA
            heading={t.visit.grabHeading}
            subline={t.visit.grabSubline}
            variant="light"
          />
        </div>
      </section>
    </PageTransition>
  );
}

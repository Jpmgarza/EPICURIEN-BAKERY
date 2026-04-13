"use client";

import { DualCTA } from "@/components/shared/DualCTA";
import { useLang } from "@/lib/lang";

export function BottomCTA() {
  const { t } = useLang();
  return (
    <section data-nav-color="light" className="bg-[var(--dominant-brand)] py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <DualCTA
          heading={t.home.bottomCTAHeading}
          variant="light"
        />
      </div>
    </section>
  );
}

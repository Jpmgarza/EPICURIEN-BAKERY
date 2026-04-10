"use client";

import { DualCTA } from "@/components/shared/DualCTA";
import { useLang } from "@/lib/lang";

export function MidPageCTA() {
  const { t } = useLang();
  return (
    <section className="bg-[var(--dominant-brand)] py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <DualCTA
          heading={t.home.midPageHeading}
          subline={t.visit.hours}
          variant="light"
        />
      </div>
    </section>
  );
}

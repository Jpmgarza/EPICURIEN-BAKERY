import { DualCTA } from "@/components/shared/DualCTA";

export function MidPageCTA() {
  return (
    <section className="bg-[var(--dominant-brand)] py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <DualCTA
          heading="Every morning, freshly baked."
          subline="Open daily · 09:00–20:00"
          variant="light"
        />
      </div>
    </section>
  );
}

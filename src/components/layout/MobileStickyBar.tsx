"use client";

import { Bike, MapPin } from "lucide-react";
import { useLang } from "@/lib/lang";

const GRAB_URL = "https://r.grab.com/g/6-20260413_161946_D423C37AF6D44E2FB0FCDCEB13FA084F_MEXMPS-3-C7LVFA53AXX2AX";
const MAPS_URL = "https://maps.app.goo.gl/mRJsESrH4KEqCGJ9A";

export function MobileStickyBar() {
  const { t } = useLang();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[var(--secondary-brand)] border-t border-[var(--divider)] px-4 py-3 flex gap-3">
      <a
        href={GRAB_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-1.5 bg-[var(--accent-brand)] text-[var(--secondary-brand)] font-satoshi font-medium text-[10px] tracking-[0.1em] uppercase py-3 min-h-[44px] whitespace-nowrap overflow-hidden"
      >
        <Bike size={13} />
        {t.hero.ctaGrab}
      </a>
      <a
        href={MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-1.5 border border-[var(--dominant-brand)]/25 text-[var(--dominant-brand)] font-satoshi font-medium text-[10px] tracking-[0.1em] uppercase py-3 min-h-[44px] whitespace-nowrap overflow-hidden hover:border-[var(--dominant-brand)]/50 transition-colors"
      >
        <MapPin size={13} />
        {t.hero.ctaVisit}
      </a>
    </div>
  );
}

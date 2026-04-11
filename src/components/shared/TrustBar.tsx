"use client";

import { Award, Wheat, MapPin } from "lucide-react";
import { useLang } from "@/lib/lang";

export function TrustBar() {
  const { t } = useLang();

  return (
    <div className="bg-[var(--dominant-brand)] border-y border-[var(--secondary-brand)]/10 py-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8">
          <div className="flex items-center gap-2.5">
            <Award size={13} className="text-[var(--secondary-brand)] opacity-60 shrink-0" />
            <span className="font-satoshi text-[var(--secondary-brand)] opacity-70 text-[10px] tracking-[0.2em] uppercase">
              {t.trustBar.award}
            </span>
          </div>
          <span className="hidden sm:block text-[var(--secondary-brand)] opacity-20 select-none">·</span>
          <div className="flex items-center gap-2.5">
            <Wheat size={13} className="text-[var(--secondary-brand)] opacity-60 shrink-0" />
            <span className="font-satoshi text-[var(--secondary-brand)] opacity-70 text-[10px] tracking-[0.2em] uppercase">
              {t.trustBar.ingredient}
            </span>
          </div>
          <span className="hidden sm:block text-[var(--secondary-brand)] opacity-20 select-none">·</span>
          <div className="flex items-center gap-2.5">
            <MapPin size={13} className="text-[var(--secondary-brand)] opacity-60 shrink-0" />
            <span className="font-satoshi text-[var(--secondary-brand)] opacity-70 text-[10px] tracking-[0.2em] uppercase">
              {t.trustBar.location}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

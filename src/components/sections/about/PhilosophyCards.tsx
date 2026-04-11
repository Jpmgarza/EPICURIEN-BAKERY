"use client";

import { Flame, Leaf, Trophy } from "lucide-react";
import { useLang } from "@/lib/lang";

export function PhilosophyCards() {
  const { t } = useLang();

  const cards = [
    {
      icon: Flame,
      title: t.about.philosophy1Title,
      desc: t.about.philosophy1Desc,
    },
    {
      icon: Leaf,
      title: t.about.philosophy2Title,
      desc: t.about.philosophy2Desc,
    },
    {
      icon: Trophy,
      title: t.about.philosophy3Title,
      desc: t.about.philosophy3Desc,
    },
  ];

  return (
    <section data-nav-color="light" className="bg-[var(--dominant-brand)] py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
        {cards.map((card, i) => (
          <div
            key={i}
            className="bg-[#0e0b09] border border-[rgba(255,255,255,0.08)] p-8"
          >
            <card.icon
              size={20}
              className="text-[var(--dominant-brand)] opacity-50 mb-6"
            />
            <h3 className="font-satoshi font-medium text-[var(--dominant-brand)] text-sm mb-3 tracking-wide">
              {card.title}
            </h3>
            <p className="font-satoshi text-[var(--dominant-brand)] opacity-40 text-sm leading-relaxed">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

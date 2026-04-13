"use client";

import Image from "next/image";
import { motion, type Variants } from "motion/react";
import Link from "next/link";
import { useLang } from "@/lib/lang";
import { featuredProducts } from "@/lib/products";

const SUPABASE_STORAGE = "https://pbrnjxgzfmhbcgcqawro.supabase.co/storage/v1/object/public/products/";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export function FeaturedProducts() {
  const { t } = useLang();

  return (
    <section className="bg-[var(--dominant-brand)] min-h-screen flex flex-col justify-center py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-14">
          <h2 className="font-cormorant font-normal text-[var(--secondary-brand)] text-4xl md:text-5xl mb-3">
            {t.products.sectionTitle}
          </h2>
          <div className="w-8 h-px bg-[var(--secondary-brand)] mx-auto opacity-30" />
        </div>

        {/* Product grid */}
        <motion.div
          className="flex overflow-x-auto snap-x snap-mandatory [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden gap-3 -mx-6 px-6 pb-4 sm:mx-0 sm:px-0 sm:pb-0 sm:grid sm:grid-cols-2 sm:overflow-x-visible sm:snap-none lg:grid-cols-4 sm:gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {featuredProducts.map((product) => (
            <motion.div key={product.id} variants={cardVariants} className="shrink-0 w-[75vw] snap-start sm:w-auto">
              <Link
                href="/menu"
                className="group block bg-[var(--secondary-brand)] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.30)] transition-all duration-300 overflow-hidden"
              >
                {/* Product image */}
                <div className="aspect-[3/4] sm:aspect-[4/5] relative overflow-hidden bg-[var(--secondary-brand)]">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_75%,rgba(255,255,255,0.04),transparent_55%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_20%,rgba(255,250,240,0.05),transparent_50%)]" />
                  {product.image && (
                    <Image
                      src={SUPABASE_STORAGE + product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  )}
                </div>
                {/* Info */}
                <div className="p-5 border-t border-[rgba(255,255,255,0.06)]">
                  <p className="font-satoshi font-medium text-[var(--dominant-brand)] text-sm mb-1.5">
                    {product.name}
                  </p>
                  <p className="font-satoshi text-[var(--dominant-brand)] opacity-60 text-sm">
                    {product.price} THB
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View all link */}
        <div className="text-center mt-12">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 font-satoshi text-[var(--secondary-brand)] text-[10px] tracking-[0.3em] uppercase border-b border-[var(--secondary-brand)]/30 pb-px hover:border-[var(--secondary-brand)] hover:opacity-70 transition-all"
          >
            {t.products.viewFullMenu}
          </Link>
        </div>
      </div>
    </section>
  );
}

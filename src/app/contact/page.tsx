import { PageTransition } from "@/components/layout/PageTransition";
import { Phone } from "lucide-react";
import {
  InstagramIcon,
  FacebookIcon,
} from "@/components/shared/SocialIcons";

export default function ContactPage() {
  return (
    <PageTransition>
      <section className="bg-[var(--dominant-brand)] min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16">
        <div className="w-8 h-px bg-[var(--accent-brand)] opacity-60 mb-10" />
        <h1 className="font-cormorant font-normal italic text-[var(--secondary-brand)] text-5xl md:text-7xl mb-16">
          Contact
        </h1>

        <div className="flex flex-col gap-4 w-full max-w-sm">
          <a
            href="https://instagram.com/epicurien.bkk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 border border-[var(--secondary-brand)]/10 hover:border-[var(--accent-brand)] text-[var(--secondary-brand)] transition-all group"
          >
            <InstagramIcon size={16} className="text-[var(--accent-brand)] shrink-0" />
            <div className="text-left">
              <p className="font-satoshi font-medium text-sm opacity-70 group-hover:opacity-100 transition-opacity">
                Instagram
              </p>
              <p className="font-satoshi text-xs opacity-40">@epicurien.bkk</p>
            </div>
          </a>

          <a
            href="https://facebook.com/share/18WCJuTpEe/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 border border-[var(--secondary-brand)]/10 hover:border-[var(--accent-brand)] text-[var(--secondary-brand)] transition-all group"
          >
            <FacebookIcon size={16} className="text-[var(--accent-brand)] shrink-0" />
            <div className="text-left">
              <p className="font-satoshi font-medium text-sm opacity-70 group-hover:opacity-100 transition-opacity">
                Facebook
              </p>
              <p className="font-satoshi text-xs opacity-40">
                Épicurien French Bakery
              </p>
            </div>
          </a>

          <a
            href="tel:+66807912902"
            className="flex items-center gap-4 p-5 border border-[var(--secondary-brand)]/10 hover:border-[var(--accent-brand)] text-[var(--secondary-brand)] transition-all group"
          >
            <Phone size={16} className="text-[var(--accent-brand)] shrink-0" />
            <div className="text-left">
              <p className="font-satoshi font-medium text-sm opacity-70 group-hover:opacity-100 transition-opacity">
                Phone
              </p>
              <p className="font-satoshi text-xs opacity-40">+66 80 791 2902</p>
            </div>
          </a>
        </div>

        <p className="font-satoshi text-[var(--secondary-brand)] opacity-30 text-[10px] tracking-widest mt-14 max-w-xs leading-relaxed">
          For wholesale or catering inquiries, DM us on Instagram
        </p>
      </section>
    </PageTransition>
  );
}

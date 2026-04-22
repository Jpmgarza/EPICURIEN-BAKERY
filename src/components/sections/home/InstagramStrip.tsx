import { InstagramIcon } from "@/components/shared/SocialIcons";
import en from "@/lib/lang/en";
import fr from "@/lib/lang/fr";
import th from "@/lib/lang/th";

const INSTAGRAM_URL = "https://instagram.com/epicurien.bkk";

// TODO: Set INSTAGRAM_ACCESS_TOKEN to activate the live feed.
// 1. Go to developers.facebook.com → create a Facebook App
// 2. Add "Instagram Graph API" product and connect the epicurien.bkk Business/Creator account
// 3. Generate a long-lived access token (valid 60 days — must be refreshed before expiry)
// 4. In Vercel → Project Settings → Environment Variables, add: INSTAGRAM_ACCESS_TOKEN=<token>
// 5. Redeploy — the grid will show the 4 latest posts automatically (refreshes every 30 min)
// Until the token is set, the 4 static fallback images below are shown instead.

const DICTS = { en, fr, th } as const;
type Locale = keyof typeof DICTS;

// Static fallback — shown when INSTAGRAM_ACCESS_TOKEN is not set or the API fails
const FALLBACK_POSTS = [
  {
    id: "fallback-1",
    src: "https://pbrnjxgzfmhbcgcqawro.supabase.co/storage/v1/object/public/products/social%20media/instagram/instagram-2.png",
    href: INSTAGRAM_URL,
  },
  {
    id: "fallback-2",
    src: "https://pbrnjxgzfmhbcgcqawro.supabase.co/storage/v1/object/public/products/social%20media/instagram/instagram-1.png",
    href: INSTAGRAM_URL,
  },
  {
    id: "fallback-3",
    src: "https://pbrnjxgzfmhbcgcqawro.supabase.co/storage/v1/object/public/products/social%20media/instagram/Instagram-3.png",
    href: INSTAGRAM_URL,
  },
  {
    id: "fallback-4",
    src: "https://pbrnjxgzfmhbcgcqawro.supabase.co/storage/v1/object/public/products/social%20media/instagram/Instagram-4.png",
    href: INSTAGRAM_URL,
  },
];

type Post = { id: string; src: string; href: string };

async function fetchLatestPosts(): Promise<Post[]> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!token) return FALLBACK_POSTS;

  try {
    const res = await fetch(
      `https://graph.instagram.com/me/media?fields=id,media_url,thumbnail_url,permalink,media_type&limit=8&access_token=${token}`,
      // Re-fetch every 30 minutes so fresh CDN URLs are served
      // (Instagram media_url expires; next/image caching would serve stale 403s)
      { next: { revalidate: 1800 } }
    );

    if (!res.ok) return FALLBACK_POSTS;

    const { data } = (await res.json()) as {
      data: Array<{
        id: string;
        media_url?: string;
        thumbnail_url?: string;
        permalink: string;
        media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
      }>;
    };

    const posts: Post[] = data
      .filter((p) => p.media_type !== "VIDEO" && p.media_url)
      .slice(0, 4)
      .map((p) => ({
        id: p.id,
        // thumbnail_url is set for Reels/video covers — safe fallback
        src: p.media_url ?? p.thumbnail_url ?? "",
        href: p.permalink,
      }));

    // Need exactly 4; fall back if the account has fewer eligible posts
    return posts.length === 4 ? posts : FALLBACK_POSTS;
  } catch {
    return FALLBACK_POSTS;
  }
}

export async function InstagramStrip({ locale = "en" }: { locale?: string }) {
  const posts = await fetchLatestPosts();
  const t = DICTS[(locale as Locale) in DICTS ? (locale as Locale) : "en"];

  return (
    <section className="bg-[var(--dominant-brand)] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <InstagramIcon size={15} className="text-[var(--secondary-brand)] opacity-40" />
          <span className="font-satoshi text-[var(--secondary-brand)] opacity-70 text-[10px] tracking-[0.35em] uppercase">
            {t.contact.instagramHandle}
          </span>
        </div>

        {/* Image grid — 2 cols mobile / 4 cols desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
          {posts.map(({ id, src, href }) => (
            <a
              key={id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square relative overflow-hidden group"
            >
              {/*
               * Plain <img>, not next/image:
               * Instagram CDN URLs expire after ~1 hour. next/image would
               * cache and re-serve those URLs after expiry, causing broken
               * images. Plain <img> always fetches the current (revalidated)
               * URL. Fallback Supabase URLs are stable, so also fine here.
               */}
              <img
                src={src}
                alt="Épicurien on Instagram"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[var(--secondary-brand)]/0 group-hover:bg-[var(--secondary-brand)]/20 transition-colors duration-300" />
            </a>
          ))}
        </div>

        {/* Follow CTA */}
        <div className="text-center mt-10">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-satoshi text-[var(--secondary-brand)] opacity-60 hover:opacity-90 text-[10px] tracking-[0.3em] uppercase border border-[var(--secondary-brand)]/30 hover:border-[var(--secondary-brand)]/60 px-8 py-3.5 transition-all"
          >
            {t.home.followInstagram}
          </a>
        </div>
      </div>
    </section>
  );
}

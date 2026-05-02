export const BASE_URL = "https://epicurienbakery.com";

export const OG_IMAGE =
  "https://pbrnjxgzfmhbcgcqawro.supabase.co/storage/v1/object/public/products/logo/epicuriens-og-logo.png";

type LocaleMeta = { title: string; description: string };
type PageMeta = Record<"en" | "fr" | "th", LocaleMeta>;

export const pageMeta: Record<string, PageMeta> = {
  home: {
    en: {
      title: "Épicurien — French Bakery Bangkok",
      description:
        "Authentic French pastries, breads, and biscuits handcrafted in Bangkok. Experience the art of French baking at Épicurien.",
    },
    fr: {
      title: "Épicurien — Boulangerie Française à Bangkok",
      description:
        "Pâtisseries, pains et biscuits français authentiques, faits à la main à Bangkok. Découvrez l'art de la boulangerie française.",
    },
    th: {
      title: "Épicurien — เบเกอรี่ฝรั่งเศส กรุงเทพ",
      description:
        "ขนมอบ ขนมปัง และบิสกิตฝรั่งเศสแท้ๆ ทำด้วยมือในกรุงเทพ สัมผัสศิลปะการทำเบเกอรี่สไตล์ฝรั่งเศสที่ Épicurien",
    },
  },
  menu: {
    en: {
      title: "Menu | Épicurien — French Bakery Bangkok",
      description:
        "Explore our full menu of French pastries, Breton biscuits, viennoiseries, and more — freshly made every day in Bangkok.",
    },
    fr: {
      title: "Menu | Épicurien — Boulangerie Française à Bangkok",
      description:
        "Découvrez notre menu complet : pâtisseries françaises, biscuits bretons, viennoiseries et plus encore, faits frais chaque jour.",
    },
    th: {
      title: "เมนู | Épicurien — เบเกอรี่ฝรั่งเศส กรุงเทพ",
      description:
        "สำรวจเมนูครบครันของเรา ทั้งขนมอบฝรั่งเศส บิสกิตเบรอตง วียนนัวซรี และอีกมากมาย ทำสดทุกวันในกรุงเทพ",
    },
  },
  about: {
    en: {
      title: "About Us | Épicurien — French Bakery Bangkok",
      description:
        "Learn the story behind Épicurien — a passion for authentic French baking brought to the heart of Bangkok.",
    },
    fr: {
      title: "À Propos | Épicurien — Boulangerie Française à Bangkok",
      description:
        "Découvrez l'histoire d'Épicurien — une passion pour la boulangerie française authentique au cœur de Bangkok.",
    },
    th: {
      title: "เกี่ยวกับเรา | Épicurien — เบเกอรี่ฝรั่งเศส กรุงเทพ",
      description:
        "เรียนรู้เรื่องราวเบื้องหลัง Épicurien ความหลงใหลในการทำเบเกอรี่ฝรั่งเศสแท้ๆ กลางใจกรุงเทพ",
    },
  },
  visit: {
    en: {
      title: "Visit Us | Épicurien — French Bakery Bangkok",
      description:
        "Find Épicurien in Bangkok. Opening hours, location map, and everything you need to plan your visit.",
    },
    fr: {
      title: "Nous Rendre Visite | Épicurien — Boulangerie Française à Bangkok",
      description:
        "Retrouvez Épicurien à Bangkok. Horaires d'ouverture, carte et tout ce qu'il faut savoir pour nous rendre visite.",
    },
    th: {
      title: "มาเยี่ยมเรา | Épicurien — เบเกอรี่ฝรั่งเศส กรุงเทพ",
      description:
        "ค้นหา Épicurien ในกรุงเทพ เวลาเปิด-ปิด แผนที่ และทุกอย่างที่คุณต้องการสำหรับการมาเยี่ยมชม",
    },
  },
  contact: {
    en: {
      title: "Contact | Épicurien — French Bakery Bangkok",
      description:
        "Get in touch with Épicurien. We'd love to hear from you — for orders, events, or any questions.",
    },
    fr: {
      title: "Contact | Épicurien — Boulangerie Française à Bangkok",
      description:
        "Contactez Épicurien. Commandes, événements ou questions — nous serions ravis de vous répondre.",
    },
    th: {
      title: "ติดต่อเรา | Épicurien — เบเกอรี่ฝรั่งเศส กรุงเทพ",
      description:
        "ติดต่อ Épicurien สำหรับคำสั่งซื้อ อีเวนต์ หรือข้อสงสัยใดๆ เรายินดีตอบทุกคำถาม",
    },
  },
};

export const OG_ALT =
  "Freshly baked artisan croissants at Épicurien French Bakery Bangkok";

export function hreflangs(path: string) {
  return {
    en: `${BASE_URL}/en${path}`,
    fr: `${BASE_URL}/fr${path}`,
    th: `${BASE_URL}/th${path}`,
    "x-default": `${BASE_URL}/en${path}`,
  };
}

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
        "Authentic French pastries, viennoiseries, and award-winning croissants handcrafted daily in Bangkok by chef Enzo Le Bohec. Visit Épicurien at W District.",
    },
    fr: {
      title: "Épicurien — Boulangerie Française à Bangkok",
      description:
        "Pâtisseries, viennoiseries et biscuits bretons artisanaux à Bangkok. Chef Enzo Le Bohec, 1er Meilleur Croissant de Paris 2021. Découvrez Épicurien au W District.",
    },
    th: {
      title: "Épicurien — เบเกอรี่ฝรั่งเศส กรุงเทพ",
      description:
        "ขนมอบ วียนนัวซรี และบิสกิตเบรอตงฝรั่งเศสแท้ๆ ทำสดใหม่ทุกเช้าในกรุงเทพ ครัวซองต์รางวัลที่ 1 ในปารีส 2021 โดยเชฟ Enzo Le Bohec มาที่ Épicurien W District",
    },
  },
  menu: {
    en: {
      title: "Menu | Épicurien — French Bakery Bangkok",
      description:
        "Explore our full menu of French pastries, viennoiseries, Breton biscuits, breads, and drinks — all freshly made every day at Épicurien, W District, Bangkok.",
    },
    fr: {
      title: "Menu | Épicurien — Boulangerie Française à Bangkok",
      description:
        "Découvrez notre carte complète : viennoiseries, pâtisseries, biscuits bretons, pains et boissons — faits frais chaque matin chez Épicurien au W District, Bangkok.",
    },
    th: {
      title: "เมนู | Épicurien — เบเกอรี่ฝรั่งเศส กรุงเทพ",
      description:
        "สำรวจเมนูครบครันของเรา วียนนัวซรี ขนมอบฝรั่งเศส บิสกิตเบรอตง ขนมปัง และเครื่องดื่ม ทำสดใหม่ทุกเช้าที่ Épicurien W District กรุงเทพฯ สั่งผ่าน Grab ได้เลย",
    },
  },
  about: {
    en: {
      title: "About Us | Épicurien — French Bakery Bangkok",
      description:
        "The story of Épicurien: chef Enzo Le Bohec, winner of the 1st Best Croissant in Paris 2021, brings authentic French baking to the heart of W District, Bangkok.",
    },
    fr: {
      title: "À Propos | Épicurien — Boulangerie Française à Bangkok",
      description:
        "L'histoire d'Épicurien : le chef Enzo Le Bohec, 1er Meilleur Croissant de Paris 2021, apporte la boulangerie française authentique au cœur du W District, Bangkok.",
    },
    th: {
      title: "เกี่ยวกับเรา | Épicurien — เบเกอรี่ฝรั่งเศส กรุงเทพ",
      description:
        "เรื่องราวของ Épicurien เชฟ Enzo Le Bohec ผู้คว้ารางวัลที่ 1 ครัวซองต์ที่ดีที่สุดในปารีส 2021 นำการอบขนมฝรั่งเศสแท้ๆ มาสู่ W District กรุงเทพฯ",
    },
  },
  visit: {
    en: {
      title: "Visit Us | Épicurien — French Bakery Bangkok",
      description:
        "Find Épicurien at W District, Sukhumvit 71, Bangkok. Open daily 7am–9pm, a 3-minute walk from BTS Phra Khanong. Get directions and plan your visit today.",
    },
    fr: {
      title: "Trouver Épicurien | Boulangerie Française à Bangkok",
      description:
        "Retrouvez Épicurien au W District, Sukhumvit 71, Bangkok. Ouvert tous les jours de 7h à 21h, à 3 min du BTS Phra Khanong. Préparez votre visite dès maintenant.",
    },
    th: {
      title: "มาเยี่ยมเรา | Épicurien — เบเกอรี่ฝรั่งเศส กรุงเทพ",
      description:
        "มาเยี่ยม Épicurien ที่ W District สุขุมวิท 71 กรุงเทพฯ เปิดทุกวัน 7:00–21:00 น. ห่าง BTS พระโขนง 3 นาทีเดินเท้า มีที่จอดรถ ดูแผนที่และวางแผนการมาได้เลย",
    },
  },
  contact: {
    en: {
      title: "Contact | Épicurien — French Bakery Bangkok",
      description:
        "Contact Épicurien French Bakery by phone, email, Instagram, or Facebook. We're happy to answer questions about orders, catering, events, or wholesale inquiries.",
    },
    fr: {
      title: "Contact | Épicurien — Boulangerie Française à Bangkok",
      description:
        "Contactez Épicurien Boulangerie Française par téléphone, e-mail, Instagram ou Facebook. Commandes, traiteur, événements : notre équipe vous répond avec plaisir.",
    },
    th: {
      title: "ติดต่อเรา | Épicurien — เบเกอรี่ฝรั่งเศส กรุงเทพ",
      description:
        "ติดต่อ Épicurien เบเกอรี่ฝรั่งเศส ทางโทรศัพท์ อีเมล Instagram หรือ Facebook สำหรับการสั่งซื้อส่ง อีเวนต์ หรือสอบถามข้อมูลใดๆ เรายินดีช่วยเหลือ",
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

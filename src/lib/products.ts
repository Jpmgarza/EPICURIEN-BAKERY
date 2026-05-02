export type Category = "Viennoiseries" | "Pains" | "Pâtisseries" | "Boissons" | "Biscuits Bretons";

export interface Product {
  id: string;
  name: string;
  price: number;
  category: Category;
  descriptionKey?: string; // Key to find description in language files
  image?: string; // Path relative to Supabase products bucket
}

export const products: Product[] = [
  // Viennoiseries
  { id: "croissant", name: "Croissant", price: 95, category: "Viennoiseries", descriptionKey: "croissant", image: "Menu images/pasteries/Croisant.webp" },
  { id: "pain-chocolat", name: "Pain Au Chocolat", price: 105, category: "Viennoiseries", descriptionKey: "painChocolat", image: "Menu images/pasteries/Pain Au Chocolat.webp" },
  { id: "pain-raisins", name: "Pain Aux Raisins", price: 115, category: "Viennoiseries", descriptionKey: "painRaisins", image: "Menu images/pasteries/Pain Aux Raisins.webp" },
  { id: "pain-suisse", name: "Pain Suisse", price: 125, category: "Viennoiseries", descriptionKey: "painSuisse", image: "Menu images/pasteries/Pain Suisse.webp" },
  { id: "chausson-pommes", name: "Chausson Aux Pommes", price: 115, category: "Viennoiseries", descriptionKey: "chaussonPommes", image: "Menu images/pasteries/Chausson Aux Pommes.webp" },
  { id: "croissant-amandes", name: "Croissant Aux Amandes", price: 155, category: "Viennoiseries", descriptionKey: "croissantAmandes", image: "Menu images/pasteries/Croissant Aux Amandes.webp" },
  { id: "pain-chocolat-amandes", name: "Pain Chocolate Aux Amandes", price: 125, category: "Viennoiseries", descriptionKey: "painChocolatAmandes", image: "Menu images/pasteries/Pain Chocolat Aux Amandes.webp" },
  { id: "pain-raisin-amandes", name: "Pain Raisin Aux Amandes", price: 125, category: "Viennoiseries", descriptionKey: "painRaisinAmandes", image: "Menu images/pasteries/Pain Raisin Aux Amandes.webp" },
  { id: "pain-suisse-amandes", name: "Pain Suisse Aux Amandes", price: 130, category: "Viennoiseries", descriptionKey: "painSuisseAmandes", image: "Menu images/pasteries/Pain Suisse Aux Amandes.webp" },
  { id: "brioche", name: "Brioche", price: 95, category: "Viennoiseries", descriptionKey: "brioche", image: "Menu images/pasteries/Brioche.webp" },
  { id: "brioche-vanilla-cream", name: "Brioche Vanilla Cream", price: 155, category: "Viennoiseries", descriptionKey: "briocheVanillaCream", image: "Menu images/pasteries/Brioche-creme-vanille.webp" },
  { id: "tarte-au-sucre", name: "Tarte Au Sucre", price: 115, category: "Viennoiseries", descriptionKey: "tarteAuSucre", image: "Menu images/pasteries/tarte-au-sucre.webp" },
  { id: "double-croissant", name: "Double Croissant", price: 260, category: "Viennoiseries", descriptionKey: "doubleCroissant", image: "Menu images/pasteries/Double-croissants.webp" },
  { id: "croissant-caramel", name: "Croissant Caramel", price: 150, category: "Viennoiseries", descriptionKey: "croissantCaramel", image: "Menu images/pasteries/Croissant caramel.webp" },
  { id: "croissant-chocolate-hazelnut", name: "Croissant Chocolate & Hazelnut", price: 150, category: "Viennoiseries", descriptionKey: "croissantChocolateHazelnut", image: "Menu images/pasteries/Croissant chocolat-noissettes.webp" },
  { id: "croissant-strawberry-jam", name: "Croissant Strawberry Jam", price: 150, category: "Viennoiseries", descriptionKey: "croissantStrawberryJam", image: "Menu images/pasteries/Croissant confitures de fraises.webp" },
  { id: "croissant-chocolate-bun", name: "Croissant + Chocolate Pastry Bun", price: 270, category: "Viennoiseries", descriptionKey: "croissantChocolateBun", image: "Menu images/pasteries/Croisant+croisant-au-chocolat.webp" },

  // Pains
  { id: "baguette", name: "Baguette", price: 88, category: "Pains", descriptionKey: "baguette", image: "Menu images/Breads/Baguette.webp" },
  { id: "focaccia-bread", name: "Focaccia Bread", price: 85, category: "Pains", descriptionKey: "focacciaBread" },
  { id: "ficelle", name: "Ficelle", price: 85, category: "Pains", descriptionKey: "ficelle", image: "Menu images/Breads/Ficelle.webp" },

  // Pâtisseries
  { id: "cookies", name: "Cookies", price: 105, category: "Pâtisseries", descriptionKey: "cookies", image: "Menu images/cakes/Cookie.webp" },
  { id: "madeleine-lemon", name: "Madeleine Lemon", price: 115, category: "Pâtisseries", descriptionKey: "madeleineeLemon", image: "Menu images/cakes/Madeleine Au Citron.webp" },
  { id: "french-butter-cake", name: "French Butter Cake", price: 85, category: "Pâtisseries", descriptionKey: "frenchButterCake", image: "Menu images/cakes/Gateau-au-beur.webp" },
  { id: "mini-financier", name: "Mini Financier", price: 130, category: "Pâtisseries", descriptionKey: "miniFinancier", image: "Menu images/cakes/mini-financier-5pcs.webp" },
  { id: "mini-cream-puffs", name: "Mini Cream Puffs", price: 65, category: "Pâtisseries", descriptionKey: "miniCreamPuffs", image: "Menu images/cakes/Chouquettes-6pcs.webp" },
  { id: "chouquettes", name: "Chouquettes", price: 118, category: "Pâtisseries", descriptionKey: "chouquettes", image: "Menu images/cakes/mini-creme-puffs.webp" },
  { id: "tiramisu", name: "Tiramisu", price: 200, category: "Pâtisseries", descriptionKey: "tiramisu", image: "Menu images/cakes/Tiramisu.webp" },
  { id: "panna-cotta", name: "Panna Cotta", price: 200, category: "Pâtisseries", descriptionKey: "pannaCotta", image: "Menu images/cakes/Pana cota.webp" },
  { id: "chocolate-mousse", name: "Chocolate Mousse", price: 200, category: "Pâtisseries", descriptionKey: "chocolateMousse", image: "Menu images/cakes/Mousse au chocolat.webp" },
  { id: "milk-rice", name: "Milk Rice", price: 200, category: "Pâtisseries", descriptionKey: "milkRice", image: "Menu images/cakes/Rice-Milk-(madagascarVanilla).webp" },
  { id: "tropicale", name: "Tropicale", price: 225, category: "Pâtisseries", descriptionKey: "tropicale", image: "Menu images/cakes/Tropezienne (1).webp" },
  { id: "cheesecake-cup", name: "Cheesecake In Cup", price: 230, category: "Pâtisseries", descriptionKey: "cheesecakeCup" },

  // TODO: replace with real product images
  // Biscuits Bretons
  { id: "galettes-bretonnes-nature", name: "Breton Butter Galettes Nature",      price: 332, category: "Biscuits Bretons", descriptionKey: "galettesBretonnesNature" },
  { id: "palets-bretons-nature",     name: "Breton Butter Palets Nature",        price: 318, category: "Biscuits Bretons", descriptionKey: "paletsBretons" },
  { id: "selection-bretonne",        name: "Breton Selection",                   price: 332, category: "Biscuits Bretons", descriptionKey: "selectionBretonne" },
  { id: "galettes-tube",             name: "Breton Galettes Tub",                price: 744, category: "Biscuits Bretons", descriptionKey: "galettesTube" },
  { id: "galettes-mini",             name: "Mini Pure Butter Breton Galettes",   price: 358, category: "Biscuits Bretons", descriptionKey: "galettesMini" },
  { id: "breton-assortment",         name: "Original Breton Nature Assortment",  price: 318, category: "Biscuits Bretons", descriptionKey: "bretonAssortment" },
  { id: "galettes-caramel",          name: "Breton Caramel Galettes",            price: 358, category: "Biscuits Bretons", descriptionKey: "galettesCaramel" },
  { id: "palets-chocolat",           name: "French Chocolate Palets",            price: 358, category: "Biscuits Bretons", descriptionKey: "paletsChocolat" },
  { id: "coffret-excellence",        name: "French Excellence Gift Box",          price: 664, category: "Biscuits Bretons", descriptionKey: "coffretExcellence" },
  { id: "assortiment-breton",        name: "Assorted Breton Biscuits",           price: 930, category: "Biscuits Bretons", descriptionKey: "assortimentBreton" },

  // Boissons
  { id: "iced-espresso", name: "Iced Espresso", price: 85, category: "Boissons", descriptionKey: "icedEspresso", image: "Menu images/drinks/Iced Espresso.webp" },
  { id: "iced-latte", name: "Iced Latte", price: 95, category: "Boissons", descriptionKey: "icedLatte", image: "Menu images/drinks/Iced Latte.webp" },
  { id: "iced-mocha", name: "Iced Mocha", price: 105, category: "Boissons", descriptionKey: "icedMocha", image: "Menu images/drinks/Iced Mocha.webp" },
  { id: "thai-tea", name: "Thai Tea", price: 85, category: "Boissons", descriptionKey: "thaiTea", image: "Menu images/drinks/Thai Tea.webp" },
  { id: "green-tea", name: "Green Tea", price: 75, category: "Boissons", descriptionKey: "greenTea", image: "Menu images/drinks/Green Tea.webp" },
  { id: "iced-cocoa", name: "Iced Cocoa", price: 85, category: "Boissons", descriptionKey: "icedCocoa", image: "Menu images/drinks/Iced Cocoa.webp" },
  { id: "lemon-tea", name: "Lemon Tea", price: 80, category: "Boissons", descriptionKey: "lemonTea", image: "Menu images/drinks/Lemon Tea.webp" },
  { id: "strawberry-soda", name: "Strawberry Soda", price: 80, category: "Boissons", descriptionKey: "strawberrySoda", image: "Menu images/drinks/Strawberry Soda.webp" },
  { id: "lemon-soda", name: "Lemon Soda", price: 80, category: "Boissons", descriptionKey: "lemonSoda", image: "Menu images/drinks/Lemon Soda.webp" },
  { id: "peach-soda", name: "Peach Soda", price: 80, category: "Boissons", descriptionKey: "peachSoda", image: "Menu images/drinks/Peach Soda.webp" },
  { id: "passion-soda", name: "Passion Fruit Soda", price: 80, category: "Boissons", descriptionKey: "passionSoda", image: "Menu images/drinks/Passion Fruit Soda.webp" },
  { id: "lychee-soda", name: "Lychee Soda", price: 80, category: "Boissons", descriptionKey: "lycheeSoda", image: "Menu images/drinks/Lychee Soda.webp" },
  { id: "apple-soda", name: "Apple Soda", price: 80, category: "Boissons", descriptionKey: "appleSoda", image: "Menu images/drinks/Apple Soda.webp" },
  { id: "kiwi-soda", name: "Kiwi Soda", price: 80, category: "Boissons", descriptionKey: "kiwiSoda", image: "Menu images/drinks/Kiwi Soda.webp" },
  { id: "iced-americano", name: "Iced Americano", price: 110, category: "Boissons", descriptionKey: "icedAmericano", image: "Menu images/drinks/Iced-Americano.webp" },
  { id: "ice-cappuccino", name: "Ice Cappuccino", price: 120, category: "Boissons", descriptionKey: "iceCappuccino" },
  { id: "ice-caramel-macchiato", name: "Ice Caramel Macchiato", price: 140, category: "Boissons", descriptionKey: "iceCaramelMacchiato", image: "Menu images/drinks/Iced-Caramel-Macchiato.webp" },
  { id: "iced-caramel-milk", name: "Iced Caramel Milk", price: 95, category: "Boissons", descriptionKey: "icedCaramelMilk", image: "Menu images/drinks/Iced-Caramel-Milk.webp" },
];

export const featuredProducts: Product[] = [
  { id: "croissant", name: "Croissant", price: 95, category: "Viennoiseries", descriptionKey: "croissant", image: "Menu images/pasteries/Croisant.webp" },
  { id: "pain-chocolat", name: "Pain Au Chocolat", price: 105, category: "Viennoiseries", descriptionKey: "painChocolat", image: "Menu images/pasteries/Pain Au Chocolat.webp" },
  { id: "croissant-amandes", name: "Croissant Aux Amandes", price: 155, category: "Viennoiseries", descriptionKey: "croissantAmandes", image: "Menu images/pasteries/Croissant Aux Amandes.webp" },
  { id: "madeleine-lemon", name: "Madeleine Lemon", price: 115, category: "Pâtisseries", descriptionKey: "madeleineeLemon", image: "Menu images/cakes/Madeleine Au Citron.webp" },
];

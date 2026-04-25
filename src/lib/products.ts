export type Category = "Viennoiseries" | "Pains" | "Pâtisseries" | "Boissons";

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
  { id: "croissant", name: "Croissant", price: 95, category: "Viennoiseries", descriptionKey: "croissant", image: "Menu images/pasteries/Croisant.png" },
  { id: "pain-chocolat", name: "Pain Au Chocolat", price: 105, category: "Viennoiseries", descriptionKey: "painChocolat", image: "Menu images/pasteries/Pain Au Chocolat.png" },
  { id: "pain-raisins", name: "Pain Aux Raisins", price: 115, category: "Viennoiseries", descriptionKey: "painRaisins", image: "Menu images/pasteries/Pain Aux Raisins.png" },
  { id: "pain-suisse", name: "Pain Suisse", price: 125, category: "Viennoiseries", descriptionKey: "painSuisse", image: "Menu images/pasteries/Pain Suisse.png" },
  { id: "chausson-pommes", name: "Chausson Aux Pommes", price: 115, category: "Viennoiseries", descriptionKey: "chaussonPommes", image: "Menu images/pasteries/Chausson Aux Pommes.png" },
  { id: "croissant-amandes", name: "Croissant Aux Amandes", price: 120, category: "Viennoiseries", descriptionKey: "croissantAmandes", image: "Menu images/pasteries/Croissant Aux Amandes.png" },
  { id: "pain-chocolat-amandes", name: "Pain Chocolate Aux Amandes", price: 125, category: "Viennoiseries", descriptionKey: "painChocolatAmandes", image: "Menu images/pasteries/Pain Chocolat Aux Amandes.png" },
  { id: "pain-raisin-amandes", name: "Pain Raisin Aux Amandes", price: 125, category: "Viennoiseries", descriptionKey: "painRaisinAmandes", image: "Menu images/pasteries/Pain Raisin Aux Amandes.png" },
  { id: "pain-suisse-amandes", name: "Pain Suisse Aux Amandes", price: 130, category: "Viennoiseries", descriptionKey: "painSuisseAmandes", image: "Menu images/pasteries/Pain Suisse Aux Amandes.png" },
  { id: "brioche", name: "Brioche", price: 95, category: "Viennoiseries", descriptionKey: "brioche", image: "Menu images/pasteries/Brioche.png" },
  { id: "brioche-vanilla-cream", name: "Brioche Vanilla Cream", price: 155, category: "Viennoiseries", descriptionKey: "briocheVanillaCream", image: "Menu images/pasteries/Brioche-creme-vanille.png" },
  { id: "tarte-au-sucre", name: "Tarte Au Sucre", price: 115, category: "Viennoiseries", descriptionKey: "tarteAuSucre", image: "Menu images/pasteries/tarte-au-sucre.png" },
  { id: "double-croissant", name: "Double Croissant", price: 260, category: "Viennoiseries", descriptionKey: "doubleCroissant", image: "Menu images/pasteries/Double-croissants.png" },
  { id: "croissant-caramel", name: "Croissant Caramel", price: 150, category: "Viennoiseries", descriptionKey: "croissantCaramel", image: "Menu images/pasteries/Croissant caramel.png" },
  { id: "croissant-chocolate-hazelnut", name: "Croissant Chocolate & Hazelnut", price: 150, category: "Viennoiseries", descriptionKey: "croissantChocolateHazelnut", image: "Menu images/pasteries/Croissant chocolat-noissettes.png" },
  { id: "croissant-strawberry-jam", name: "Croissant Strawberry Jam", price: 150, category: "Viennoiseries", descriptionKey: "croissantStrawberryJam", image: "Menu images/pasteries/Croissant confitures de fraises.png" },
  { id: "croissant-chocolate-bun", name: "Croissant + Chocolate Pastry Bun", price: 270, category: "Viennoiseries", descriptionKey: "croissantChocolateBun", image: "Menu images/pasteries/Croisant+croisant-au-chocolat.png" },

  // Pains
  { id: "baguette", name: "Baguette", price: 88, category: "Pains", descriptionKey: "baguette", image: "Menu images/Breads/Baguette.png" },
  { id: "focaccia-bread", name: "Focaccia Bread", price: 85, category: "Pains", descriptionKey: "focacciaBread" },
  { id: "ficelle", name: "Ficelle", price: 85, category: "Pains", descriptionKey: "ficelle", image: "Menu images/Breads/Ficelle.png" },

  // Pâtisseries
  { id: "cookies", name: "Cookies", price: 105, category: "Pâtisseries", descriptionKey: "cookies", image: "Menu images/cakes/Cookie.png" },
  { id: "madeleine-lemon", name: "Madeleine Lemon", price: 90, category: "Pâtisseries", descriptionKey: "madeleineeLemon", image: "Menu images/cakes/Madeleine Au Citron.png" },
  { id: "french-butter-cake", name: "French Butter Cake", price: 85, category: "Pâtisseries", descriptionKey: "frenchButterCake", image: "Menu images/cakes/Gateau-au-beur.png" },
  { id: "mini-financier", name: "Mini Financier", price: 130, category: "Pâtisseries", descriptionKey: "miniFinancier", image: "Menu images/cakes/mini-financier-5pcs.png" },
  { id: "mini-cream-puffs", name: "Mini Cream Puffs", price: 65, category: "Pâtisseries", descriptionKey: "miniCreamPuffs", image: "Menu images/cakes/mini-creme-puffs.png" },
  { id: "chouquettes", name: "Chouquettes", price: 118, category: "Pâtisseries", descriptionKey: "chouquettes", image: "Menu images/cakes/Chouquettes-6pcs.png" },
  { id: "tiramisu", name: "Tiramisu", price: 200, category: "Pâtisseries", descriptionKey: "tiramisu", image: "Menu images/cakes/Tiramisu.png" },
  { id: "panna-cotta", name: "Panna Cotta", price: 200, category: "Pâtisseries", descriptionKey: "pannaCotta", image: "Menu images/cakes/Pana cota.png" },
  { id: "chocolate-mousse", name: "Chocolate Mousse", price: 200, category: "Pâtisseries", descriptionKey: "chocolateMousse", image: "Menu images/cakes/Mousse au chocolat.png" },
  { id: "milk-rice", name: "Milk Rice", price: 200, category: "Pâtisseries", descriptionKey: "milkRice", image: "Menu images/cakes/Rice-Milk-(madagascarVanilla).png" },
  { id: "tropicale", name: "Tropicale", price: 225, category: "Pâtisseries", descriptionKey: "tropicale", image: "Menu images/cakes/Tropezienne (1).png" },
  { id: "cheesecake-cup", name: "Cheesecake In Cup", price: 230, category: "Pâtisseries", descriptionKey: "cheesecakeCup" },

  // Boissons
  { id: "iced-espresso", name: "Iced Espresso", price: 85, category: "Boissons", descriptionKey: "icedEspresso", image: "Menu images/drinks/Iced Espresso.png" },
  { id: "iced-latte", name: "Iced Latte", price: 95, category: "Boissons", descriptionKey: "icedLatte", image: "Menu images/drinks/Iced Latte.png" },
  { id: "iced-mocha", name: "Iced Mocha", price: 105, category: "Boissons", descriptionKey: "icedMocha", image: "Menu images/drinks/Iced Mocha.png" },
  { id: "thai-tea", name: "Thai Tea", price: 85, category: "Boissons", descriptionKey: "thaiTea", image: "Menu images/drinks/Thai Tea.png" },
  { id: "green-tea", name: "Green Tea", price: 75, category: "Boissons", descriptionKey: "greenTea", image: "Menu images/drinks/Green Tea.png" },
  { id: "iced-cocoa", name: "Iced Cocoa", price: 85, category: "Boissons", descriptionKey: "icedCocoa", image: "Menu images/drinks/Iced Cocoa.png" },
  { id: "lemon-tea", name: "Lemon Tea", price: 80, category: "Boissons", descriptionKey: "lemonTea", image: "Menu images/drinks/Lemon Tea.png" },
  { id: "strawberry-soda", name: "Strawberry Soda", price: 80, category: "Boissons", descriptionKey: "strawberrySoda", image: "Menu images/drinks/Strawberry Soda.png" },
  { id: "lemon-soda", name: "Lemon Soda", price: 80, category: "Boissons", descriptionKey: "lemonSoda", image: "Menu images/drinks/Lemon Soda.png" },
  { id: "peach-soda", name: "Peach Soda", price: 80, category: "Boissons", descriptionKey: "peachSoda", image: "Menu images/drinks/Peach Soda.png" },
  { id: "passion-soda", name: "Passion Fruit Soda", price: 80, category: "Boissons", descriptionKey: "passionSoda", image: "Menu images/drinks/Passion Fruit Soda.png" },
  { id: "lychee-soda", name: "Lychee Soda", price: 80, category: "Boissons", descriptionKey: "lycheeSoda", image: "Menu images/drinks/Lychee Soda.png" },
  { id: "apple-soda", name: "Apple Soda", price: 80, category: "Boissons", descriptionKey: "appleSoda", image: "Menu images/drinks/Apple Soda.png" },
  { id: "kiwi-soda", name: "Kiwi Soda", price: 80, category: "Boissons", descriptionKey: "kiwiSoda", image: "Menu images/drinks/Kiwi Soda.png" },
  { id: "iced-americano", name: "Iced Americano", price: 110, category: "Boissons", descriptionKey: "icedAmericano", image: "Menu images/drinks/Iced-Americano.png" },
  { id: "ice-cappuccino", name: "Ice Cappuccino", price: 120, category: "Boissons", descriptionKey: "iceCappuccino" },
  { id: "ice-caramel-macchiato", name: "Ice Caramel Macchiato", price: 140, category: "Boissons", descriptionKey: "iceCaramelMacchiato", image: "Menu images/drinks/Iced-Caramel-Macchiato.png" },
  { id: "iced-caramel-milk", name: "Iced Caramel Milk", price: 95, category: "Boissons", descriptionKey: "icedCaramelMilk", image: "Menu images/drinks/Iced-Caramel-Milk.png" },
];

export const featuredProducts: Product[] = [
  { id: "croissant", name: "Croissant", price: 95, category: "Viennoiseries", descriptionKey: "croissant", image: "Menu images/pasteries/Croisant.png" },
  { id: "pain-chocolat", name: "Pain Au Chocolat", price: 105, category: "Viennoiseries", descriptionKey: "painChocolat", image: "Menu images/pasteries/Pain Au Chocolat.png" },
  { id: "croissant-amandes", name: "Croissant Aux Amandes", price: 120, category: "Viennoiseries", descriptionKey: "croissantAmandes", image: "Menu images/pasteries/Croissant Aux Amandes.png" },
  { id: "madeleine-lemon", name: "Madeleine Lemon", price: 90, category: "Pâtisseries", descriptionKey: "madeleineeLemon", image: "Menu images/cakes/Madeleine Au Citron.png" },
];

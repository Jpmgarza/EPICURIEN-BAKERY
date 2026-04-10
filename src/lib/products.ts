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

  // Pâtisseries
  { id: "cookies", name: "Cookies", price: 105, category: "Pâtisseries", descriptionKey: "cookies", image: "Menu images/cakes/Cookie.png" },
  { id: "madeleine-lemon", name: "Madeleine Lemon", price: 90, category: "Pâtisseries", descriptionKey: "madeleineeLemon", image: "Menu images/cakes/Madeleine Au Citron.png" },

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
];

export const featuredProducts: Product[] = [
  { id: "croissant", name: "Croissant", price: 95, category: "Viennoiseries", descriptionKey: "croissant", image: "Menu images/pasteries/Croisant.png" },
  { id: "pain-chocolat", name: "Pain Au Chocolat", price: 105, category: "Viennoiseries", descriptionKey: "painChocolat", image: "Menu images/pasteries/Pain Au Chocolat.png" },
  { id: "croissant-amandes", name: "Croissant Aux Amandes", price: 120, category: "Viennoiseries", descriptionKey: "croissantAmandes", image: "Menu images/pasteries/Croissant Aux Amandes.png" },
  { id: "madeleine-lemon", name: "Madeleine Lemon", price: 90, category: "Pâtisseries", descriptionKey: "madeleineeLemon", image: "Menu images/cakes/Madeleine Au Citron.png" },
];

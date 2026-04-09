export type Category = "Viennoiseries" | "Pains" | "Pâtisseries" | "Boissons";

export interface Product {
  id: string;
  name: string;
  price: number;
  category: Category;
}

export const products: Product[] = [
  { id: "croissant", name: "Croissant", price: 95, category: "Viennoiseries" },
  { id: "pain-chocolat", name: "Pain au Chocolat", price: 110, category: "Viennoiseries" },
  { id: "croissant-amandes", name: "Croissant Amandes", price: 120, category: "Viennoiseries" },
  { id: "pain-raisins", name: "Pain aux Raisins", price: 115, category: "Viennoiseries" },
  { id: "baguette", name: "Baguette Tradition", price: 80, category: "Pains" },
  { id: "pain-campagne", name: "Pain de Campagne", price: 90, category: "Pains" },
  { id: "tarte-citron", name: "Tarte au Citron", price: 150, category: "Pâtisseries" },
  { id: "eclair-cafe", name: "Éclair Café", price: 140, category: "Pâtisseries" },
  { id: "cafe-americano", name: "Café Americano", price: 85, category: "Boissons" },
  { id: "cafe-latte", name: "Café Latte", price: 95, category: "Boissons" },
];

export const featuredProducts: Product[] = [
  { id: "croissant", name: "Croissant", price: 95, category: "Viennoiseries" },
  { id: "pain-chocolat", name: "Pain au Chocolat", price: 110, category: "Viennoiseries" },
  { id: "croissant-amandes", name: "Croissant Amandes", price: 120, category: "Viennoiseries" },
  { id: "baguette", name: "Baguette Tradition", price: 80, category: "Pains" },
];

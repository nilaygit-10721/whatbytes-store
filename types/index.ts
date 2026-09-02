export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: "Electronics" | "Clothing" | "Home";
  brand: string;
  image: string;
  rating: number;
  reviewCount: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type Category = "All" | "Electronics" | "Clothing" | "Home";
export type Brand = "All" | "Nike" | "Sony" | "Samsung" | "Apple" | "Generic";

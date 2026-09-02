import { Product } from "@/types";

export const products: Product[] = [
  {
    id: 1,
    title: "Running Shoes",
    price: 99,
    description:
      "Lightweight and breathable running shoes designed for maximum comfort and performance on any terrain.",
    category: "Clothing",
    brand: "Nike",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&auto=format",
    rating: 4.0,
    reviewCount: 128,
  },
  {
    id: 2,
    title: "Wireless Headphones",
    price: 149,
    description:
      "Premium noise-cancelling wireless headphones with 30-hour battery life and crystal-clear audio.",
    category: "Electronics",
    brand: "Sony",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&auto=format",
    rating: 4.5,
    reviewCount: 256,
  },
  {
    id: 3,
    title: "Backpack",
    price: 129,
    description:
      "Durable and spacious backpack with multiple compartments, perfect for daily commute or weekend adventures.",
    category: "Home",
    brand: "Generic",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&auto=format",
    rating: 4.2,
    reviewCount: 89,
  },
  {
    id: 4,
    title: "Smartwatch",
    price: 249,
    description:
      "Feature-rich smartwatch with health tracking, GPS, and a stunning AMOLED display. Available in multiple styles.",
    category: "Electronics",
    brand: "Apple",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&auto=format",
    rating: 4.7,
    reviewCount: 412,
  },
  {
    id: 5,
    title: "Sunglasses",
    price: 149,
    description:
      "Stylish UV400 protection sunglasses with polarized lenses and a lightweight frame for all-day comfort.",
    category: "Clothing",
    brand: "Generic",
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop&auto=format",
    rating: 3.8,
    reviewCount: 67,
  },
  {
    id: 6,
    title: "Digital Camera",
    price: 499,
    description:
      "Professional-grade digital camera with 24MP sensor, 4K video recording, and advanced autofocus system.",
    category: "Electronics",
    brand: "Sony",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop&auto=format",
    rating: 4.6,
    reviewCount: 198,
  },
  {
    id: 7,
    title: "T-shirt",
    price: 29,
    description:
      "Soft and breathable 100% cotton T-shirt available in multiple colors. Perfect for casual everyday wear.",
    category: "Clothing",
    brand: "Nike",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&auto=format",
    rating: 4.1,
    reviewCount: 342,
  },
  {
    id: 8,
    title: "Smartphone",
    price: 699,
    description:
      "Lorem ipsum dolor amet, conssectetur euisagend. Flagship smartphone with a stunning 6.7-inch OLED display, triple camera system, and all-day battery life.",
    category: "Electronics",
    brand: "Samsung",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop&auto=format",
    rating: 3.5,
    reviewCount: 523,
  },
  {
    id: 9,
    title: "Desk Lamp",
    price: 45,
    description:
      "Modern LED desk lamp with adjustable brightness and color temperature. USB charging port included.",
    category: "Home",
    brand: "Generic",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop&auto=format",
    rating: 4.3,
    reviewCount: 155,
  },
  {
    id: 10,
    title: "Bluetooth Speaker",
    price: 89,
    description:
      "Portable waterproof Bluetooth speaker with 360° sound and 12-hour playtime. Perfect for outdoor adventures.",
    category: "Electronics",
    brand: "Sony",
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop&auto=format",
    rating: 4.4,
    reviewCount: 287,
  },
];

export const categories = ["All", "Electronics", "Clothing", "Home"] as const;
export const brands = ["All", "Nike", "Sony", "Samsung", "Apple", "Generic"] as const;

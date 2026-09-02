"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Check } from "lucide-react";
import { useState } from "react";
import { Product } from "@/types";
import { useCartStore } from "@/store/cartStore";
import StarRating from "@/components/ui/StarRating";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link
      href={`/product/${product.id}`}
      id={`product-card-${product.id}`}
      className="group flex flex-col bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
    >
      {/* Product Image */}
      <div className="relative aspect-square bg-gray-50 overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Card Content */}
      <div className="flex flex-col flex-1 p-3">
        <h3 className="text-sm font-semibold text-gray-800 leading-snug line-clamp-2 mb-1">
          {product.title}
        </h3>

        <div className="mb-2">
          <StarRating rating={product.rating} size={12} />
        </div>

        <p className="text-base font-bold text-gray-900 mb-3">
          ${product.price}
        </p>

        {/* Add to Cart button */}
        <button
          id={`add-to-cart-${product.id}`}
          onClick={handleAddToCart}
          className="mt-auto w-full flex items-center justify-center gap-2 py-2 px-3 rounded-md text-white text-sm font-medium transition-all duration-200 active:scale-95"
          style={{
            backgroundColor: added ? "#16a34a" : "var(--primary)",
          }}
        >
          {added ? (
            <>
              <Check size={14} />
              Added!
            </>
          ) : (
            <>
              <ShoppingCart size={14} />
              Add to Cart
            </>
          )}
        </button>
      </div>
    </Link>
  );
}

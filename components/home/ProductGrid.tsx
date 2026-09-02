"use client";

import { Product } from "@/types";
import ProductCard from "@/components/product/ProductCard";
import { PackageSearch } from "lucide-react";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <PackageSearch size={64} className="text-gray-300 mb-4" />
        <h2 className="text-xl font-semibold text-gray-600 mb-2">
          No products found
        </h2>
        <p className="text-gray-400 text-sm max-w-xs">
          Try adjusting your filters or search term to find what you&apos;re
          looking for.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

"use client";

import { Suspense } from "react";
import Sidebar from "@/components/home/Sidebar";
import ProductGrid from "@/components/home/ProductGrid";
import { useFilters } from "@/hooks/useFilters";

function HomeContent() {
  const { filters, setFilter, clearFilters, filteredProducts } = useFilters();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <div className="lg:w-56 shrink-0">
          <Sidebar
            filters={filters}
            setFilter={setFilter}
            clearFilters={clearFilters}
          />
        </div>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-4">
            <h1
              className="text-2xl font-bold"
              style={{ color: "var(--primary)" }}
            >
              Product Listing
            </h1>
            <span className="text-sm text-gray-500">
              {filteredProducts.length}{" "}
              {filteredProducts.length === 1 ? "product" : "products"}
            </span>
          </div>

          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <Suspense fallback={
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="animate-pulse">
          <div className="h-8 w-48 bg-gray-200 rounded mb-6" />
          <div className="grid grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-gray-200 rounded-lg h-64" />
            ))}
          </div>
        </div>
      </div>
    }>
      <HomeContent />
    </Suspense>
  );
}

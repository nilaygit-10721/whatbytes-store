"use client";

import { categories, brands } from "@/data/products";
import { Filters } from "@/hooks/useFilters";
import { SlidersHorizontal } from "lucide-react";

interface SidebarProps {
  filters: Filters;
  setFilter: (key: keyof Filters, value: string | number) => void;
  clearFilters: () => void;
}

export default function Sidebar({ filters, setFilter, clearFilters }: SidebarProps) {
  return (
    <aside className="flex flex-col gap-4 w-full">
      {/* ── Filter Card 1: Category + Price ── */}
      <div className="rounded-lg overflow-hidden shadow-sm">
        {/* Card header */}
        <div
          className="flex items-center gap-2 px-4 py-3"
          style={{ backgroundColor: "var(--primary)" }}
        >
          <SlidersHorizontal size={16} className="text-white" />
          <h2 className="text-white font-semibold text-sm">Filters</h2>
        </div>

        {/* Card body */}
        <div className="bg-white px-4 py-4 space-y-5">
          {/* Category */}
          <div>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
              Category
            </h3>
            <div className="space-y-2">
              {categories.map((cat) => (
                <label
                  key={cat}
                  className="flex items-center gap-2 cursor-pointer group"
                  id={`filter-category-${cat.toLowerCase()}`}
                >
                  <input
                    type="radio"
                    name="category"
                    value={cat}
                    checked={filters.category === cat}
                    onChange={() => setFilter("category", cat)}
                    className="w-4 h-4 cursor-pointer"
                    style={{ accentColor: "var(--primary)" }}
                  />
                  <span className="text-sm text-gray-700 group-hover:text-blue-700 transition-colors">
                    {cat}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
              Price
            </h3>
            <input
              id="price-slider"
              type="range"
              min={0}
              max={1000}
              step={10}
              value={filters.maxPrice}
              onChange={(e) => setFilter("maxPrice", Number(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>0</span>
              <span className="font-medium text-blue-700">${filters.maxPrice}</span>
              <span>1000</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Filter Card 2: Brand + Price input ── */}
      <div className="rounded-lg overflow-hidden shadow-sm">
        {/* Card header */}
        <div
          className="flex items-center gap-2 px-4 py-3"
          style={{ backgroundColor: "var(--primary)" }}
        >
          <h2 className="text-white font-semibold text-sm">Brand</h2>
        </div>

        {/* Card body */}
        <div className="bg-white px-4 py-4 space-y-5">
          {/* Brand radios */}
          <div>
            <div className="space-y-2">
              {brands.map((brand) => (
                <label
                  key={brand}
                  className="flex items-center gap-2 cursor-pointer group"
                  id={`filter-brand-${brand.toLowerCase()}`}
                >
                  <input
                    type="radio"
                    name="brand"
                    value={brand}
                    checked={filters.brand === brand}
                    onChange={() => setFilter("brand", brand)}
                    className="w-4 h-4 cursor-pointer"
                    style={{ accentColor: "var(--primary)" }}
                  />
                  <span className="text-sm text-gray-700 group-hover:text-blue-700 transition-colors">
                    {brand}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Max price number input */}
          <div>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
              Max Price ($)
            </h3>
            <input
              id="price-number-input"
              type="number"
              min={0}
              max={5000}
              step={10}
              value={filters.maxPrice}
              onChange={(e) => setFilter("maxPrice", Number(e.target.value))}
              className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          {/* Clear filters */}
          {(filters.category !== "All" ||
            filters.maxPrice !== 1000 ||
            filters.brand !== "All" ||
            filters.search !== "") && (
            <button
              id="clear-filters-btn"
              onClick={clearFilters}
              className="w-full text-xs text-blue-600 hover:text-blue-800 underline transition-colors"
            >
              Clear all filters
            </button>
          )}
        </div>
      </div>
    </aside>
  );
}

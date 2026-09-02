"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";
import { products } from "@/data/products";
import { Category } from "@/types";

export interface Filters {
  category: Category;
  minPrice: number;
  maxPrice: number;
  search: string;
  brand: string;
}

export function useFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const filters: Filters = useMemo(() => {
    return {
      category: (searchParams.get("category") as Category) || "All",
      minPrice: Number(searchParams.get("minPrice")) || 0,
      maxPrice: Number(searchParams.get("maxPrice")) || 1000,
      search: searchParams.get("search") || "",
      brand: searchParams.get("brand") || "All",
    };
  }, [searchParams]);

  const setFilter = useCallback(
    (key: keyof Filters, value: string | number) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value === "All" || value === "" || value === 0) {
        params.delete(key);
      } else {
        params.set(key, String(value));
      }
      // Reset minPrice to 0 by default
      if (key === "maxPrice" && value === 1000) {
        params.delete("maxPrice");
      }
      router.push(`/?${params.toString()}`, { scroll: false });
    },
    [router, searchParams]
  );

  const clearFilters = useCallback(() => {
    router.push("/", { scroll: false });
  }, [router]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchCategory =
        filters.category === "All" || product.category === filters.category;
      const matchPrice =
        product.price >= filters.minPrice &&
        product.price <= filters.maxPrice;
      const matchSearch =
        filters.search === "" ||
        product.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        product.description.toLowerCase().includes(filters.search.toLowerCase()) ||
        product.category.toLowerCase().includes(filters.search.toLowerCase());
      const matchBrand =
        filters.brand === "All" || product.brand === filters.brand;

      return matchCategory && matchPrice && matchSearch && matchBrand;
    });
  }, [filters]);

  return { filters, setFilter, clearFilters, filteredProducts };
}

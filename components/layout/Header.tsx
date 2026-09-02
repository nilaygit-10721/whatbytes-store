"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { ShoppingCart, Search } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { useCallback, useState, useEffect } from "react";

export default function Header() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const totalItems = useCartStore((state) => state.totalItems);
  const [searchValue, setSearchValue] = useState(
    searchParams.get("search") || ""
  );
  const [cartCount, setCartCount] = useState(0);

  // Sync cart count after hydration to avoid SSR mismatch
  useEffect(() => {
    setCartCount(totalItems());
  }, [totalItems]);

  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      setSearchValue(val);
      const params = new URLSearchParams(searchParams.toString());
      if (val) {
        params.set("search", val);
      } else {
        params.delete("search");
      }
      router.push(`/?${params.toString()}`, { scroll: false });
    },
    [router, searchParams]
  );

  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{ backgroundColor: "var(--primary)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center gap-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-white text-2xl font-bold tracking-tight shrink-0 hover:opacity-90"
          id="logo-link"
        >
          Logo
        </Link>

        {/* Search bar */}
        <div className="flex-1 max-w-xl mx-auto">
          <div className="relative">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              id="search-input"
              type="text"
              placeholder="Search for products..."
              value={searchValue}
              onChange={handleSearch}
              className="w-full pl-9 pr-4 py-2 rounded-md bg-white text-gray-800 text-sm placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
        </div>

        {/* Cart button */}
        <Link
          href="/cart"
          id="cart-link"
          className="relative flex items-center gap-2 px-4 py-2 rounded-md text-white text-sm font-medium shrink-0"
          style={{ backgroundColor: "var(--navy)" }}
        >
          <ShoppingCart size={18} />
          <span className="hidden sm:inline">Cart</span>
          {cartCount > 0 && (
            <span
              className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 rounded-full text-white text-xs font-bold"
              style={{ backgroundColor: "var(--badge-red)" }}
            >
              {cartCount > 99 ? "99+" : cartCount}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}

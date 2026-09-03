"use client";

import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from "lucide-react";

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } =
    useCartStore();

  const subtotal = totalPrice();
  const shipping = subtotal > 100 ? 0 : 9.99;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 text-center">
        <ShoppingBag size={72} className="text-gray-300 mx-auto mb-6" />
        <h1 className="text-2xl font-bold text-gray-700 mb-2">
          Your cart is empty
        </h1>
        <p className="text-gray-400 mb-8">
          Looks like you haven&apos;t added anything yet.
        </p>
        <Link
          href="/"
          id="continue-shopping-empty"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold"
          style={{ backgroundColor: "var(--primary)" }}
        >
          <ArrowLeft size={16} />
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Shopping Cart</h1>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* ── Cart Items ── */}
        <div className="flex-1 space-y-3">
          {items.map(({ product, quantity }) => (
            <div
              key={product.id}
              id={`cart-item-${product.id}`}
              className="flex items-center gap-4 bg-white rounded-xl border border-gray-100 shadow-sm p-4"
            >
              {/* Thumbnail */}
              <Link href={`/product/${product.id}`} className="shrink-0">
                <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-gray-50">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
              </Link>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <Link href={`/product/${product.id}`}>
                  <h3 className="text-sm font-semibold text-gray-800 hover:text-blue-700 transition-colors line-clamp-1">
                    {product.title}
                  </h3>
                </Link>
                <p className="text-xs text-gray-500 mt-0.5">
                  {product.category}
                </p>
                <p
                  className="text-sm font-bold mt-1"
                  style={{ color: "var(--primary)" }}
                >
                  ${product.price}
                </p>
              </div>

              {/* Quantity controls */}
              <div className="flex items-center gap-0 border border-gray-200 rounded-lg overflow-hidden shrink-0">
                <button
                  id={`cart-decrement-${product.id}`}
                  onClick={() => updateQuantity(product.id, quantity - 1)}
                  className="px-2.5 py-1.5 hover:bg-gray-100 transition-colors text-gray-600"
                  aria-label="Decrease quantity"
                >
                  <Minus size={12} />
                </button>
                <span className="px-3 py-1.5 text-sm font-semibold border-x border-gray-200 min-w-[2rem] text-center">
                  {quantity}
                </span>
                <button
                  id={`cart-increment-${product.id}`}
                  onClick={() => updateQuantity(product.id, quantity + 1)}
                  className="px-2.5 py-1.5 hover:bg-gray-100 transition-colors text-gray-600"
                  aria-label="Increase quantity"
                >
                  <Plus size={12} />
                </button>
              </div>

              {/* Line total */}
              <p className="text-sm font-bold text-gray-900 w-16 text-right shrink-0">
                ${(product.price * quantity).toFixed(2)}
              </p>

              {/* Remove */}
              <button
                id={`cart-remove-${product.id}`}
                onClick={() => removeItem(product.id)}
                className="shrink-0 text-gray-400 hover:text-red-500 transition-colors ml-1"
                aria-label={`Remove ${product.title}`}
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}

          {/* Clear cart */}
          <div className="flex justify-between items-center pt-2">
            <Link
              href="/"
              id="continue-shopping-link"
              className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ArrowLeft size={14} />
              Continue Shopping
            </Link>
            <button
              id="clear-cart-btn"
              onClick={clearCart}
              className="text-sm text-red-500 hover:text-red-700 transition-colors"
            >
              Clear Cart
            </button>
          </div>
        </div>

        {/* ── Price Summary ── */}
        <div className="lg:w-72 shrink-0">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 sticky top-20">
            <h2 className="text-lg font-bold text-gray-800 mb-4">
              Order Summary
            </h2>

            <div className="space-y-3 text-sm text-gray-600 mb-4">
              <div className="flex justify-between">
                <span>
                  Subtotal ({items.reduce((s, i) => s + i.quantity, 0)} items)
                </span>
                <span className="font-semibold text-gray-800">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="font-semibold text-gray-800">
                  {shipping === 0 ? (
                    <span className="text-green-600">Free</span>
                  ) : (
                    `$${shipping.toFixed(2)}`
                  )}
                </span>
              </div>
              {shipping > 0 && (
                <p className="text-xs text-gray-400">
                  Free shipping on orders over $100
                </p>
              )}
            </div>

            <div className="border-t border-gray-100 pt-3 mb-6">
              <div className="flex justify-between font-bold text-gray-900">
                <span>Total</span>
                <span className="text-lg" style={{ color: "var(--primary)" }}>
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>

            <button
              id="checkout-btn"
              className="w-full py-3 rounded-lg text-white font-semibold transition-all duration-200 active:scale-95 hover:opacity-90"
              style={{ backgroundColor: "var(--primary)" }}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

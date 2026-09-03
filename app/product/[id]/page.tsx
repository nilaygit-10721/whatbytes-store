"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { products } from "@/data/products";
import { useCartStore } from "@/store/cartStore";
import StarRating from "@/components/ui/StarRating";
import { ShoppingCart, ArrowLeft, Minus, Plus, Check, Tag } from "lucide-react";

export default function ProductDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const addItem = useCartStore((state) => state.addItem);

  const product = products.find((p) => p.id === Number(id));

  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">
          Product not found
        </h1>
        <button
          onClick={() => router.push("/")}
          className="text-blue-600 hover:underline flex items-center gap-2 mx-auto"
        >
          <ArrowLeft size={16} /> Back to products
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const decrement = () => setQuantity((q) => Math.max(1, q - 1));
  const increment = () => setQuantity((q) => Math.min(99, q + 1));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
      {/* Breadcrumb */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-1 text-sm text-gray-500 hover:text-blue-700 mb-6 transition-colors"
        id="back-btn"
      >
        <ArrowLeft size={14} />
        Back to products
      </button>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Image Section */}
          <div className="relative aspect-square md:aspect-auto md:min-h-[480px] bg-gray-50">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Details Section */}
          <div className="p-6 md:p-10 flex flex-col">
            {/* Category badge */}
            <div className="flex items-center gap-2 mb-3">
              <Tag size={13} className="text-blue-600" />
              <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                {product.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              {product.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <StarRating
                rating={product.rating}
                size={16}
                showCount
                reviewCount={product.reviewCount}
              />
              <span className="text-sm text-gray-500">
                {product.rating.toFixed(1)} / 5
              </span>
            </div>

            {/* Price */}
            <p
              className="text-3xl font-extrabold mb-4"
              style={{ color: "var(--primary)" }}
            >
              ${product.price}
            </p>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Category detail row */}
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
              <span className="font-medium text-gray-800">Category</span>
              <span className="text-gray-400">·</span>
              <span>{product.category}</span>
            </div>

            {/* Quantity selector */}
            <div className="mb-6">
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                Quantity
              </label>
              <div className="flex items-center gap-0 border border-gray-200 rounded-lg w-fit overflow-hidden">
                <button
                  id="qty-decrement"
                  onClick={decrement}
                  disabled={quantity <= 1}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <Minus size={14} />
                </button>
                <span
                  id="qty-display"
                  className="px-5 py-2 text-sm font-semibold text-gray-800 border-x border-gray-200 min-w-[3rem] text-center"
                >
                  {quantity}
                </span>
                <button
                  id="qty-increment"
                  onClick={increment}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to Cart button */}
            <button
              id="add-to-cart-detail"
              onClick={handleAddToCart}
              className="flex items-center justify-center gap-2 w-full md:w-auto px-8 py-3 rounded-lg text-white font-semibold transition-all duration-200 active:scale-95"
              style={{ backgroundColor: added ? "#16a34a" : "var(--primary)" }}
            >
              {added ? (
                <>
                  <Check size={18} />
                  Added to Cart!
                </>
              ) : (
                <>
                  <ShoppingCart size={18} />
                  Add to Cart
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4">
          Customer Reviews
        </h2>
        <div className="space-y-4">
          {[
            {
              name: "Alex M.",
              rating: 5,
              comment:
                "Absolutely love this product! Great quality and fast shipping.",
            },
            {
              name: "Sarah K.",
              rating: 4,
              comment: "Very good value for money. Would definitely buy again.",
            },
            {
              name: "James R.",
              rating: product.rating,
              comment: "Solid build quality. Exactly as described.",
            },
          ].map((review, i) => (
            <div
              key={i}
              className="border-b border-gray-100 last:border-0 pb-4 last:pb-0"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-semibold text-gray-800">
                  {review.name}
                </span>
                <StarRating rating={review.rating} size={12} />
              </div>
              <p className="text-sm text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

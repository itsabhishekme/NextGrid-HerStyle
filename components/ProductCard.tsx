"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export default function ProductCard({ product }: { product: Product }) {
  const [liked, setLiked] = useState(false);
  const [adding, setAdding] = useState(false);

  // ✅ Safe values
  const price = product?.price ?? 0;
  const image = product?.image || "/placeholder.png";

  // 🛒 Add to cart simulation
  const handleAdd = () => {
    setAdding(true);
    setTimeout(() => setAdding(false), 800);
  };

  return (
    <div className="group relative bg-white rounded-2xl shadow-sm overflow-hidden transition hover:shadow-xl hover:-translate-y-1">

      {/* 🖼️ IMAGE */}
      <Link href={`/product/${product.id}`} className="block relative">
        <div className="relative w-full h-64 overflow-hidden">
          <Image
            src={image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className="object-cover transition duration-500 group-hover:scale-110"
          />

          {/* 🔥 HOVER OVERLAY */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
        </div>
      </Link>

      {/* ❤️ WISHLIST */}
      <button
        onClick={() => setLiked(!liked)}
        aria-label="Add to wishlist"
        className="absolute top-3 right-3 bg-white/80 backdrop-blur-md p-2 rounded-full shadow hover:scale-110 transition"
      >
        {liked ? "💖" : "🤍"}
      </button>

      {/* 🔥 BADGE */}
      <div className="absolute top-3 left-3 bg-pink-600 text-white text-xs px-2 py-1 rounded">
        New
      </div>

      {/* 📄 DETAILS */}
      <div className="p-4">

        <h3 className="font-semibold text-lg line-clamp-1">
          {product.name}
        </h3>

        <p className="text-pink-600 font-bold mt-1">
          ₹{price.toLocaleString()}
        </p>

        {/* ⭐ RATING */}
        <div className="flex items-center gap-1 text-sm mt-1">
          <span className="text-yellow-500">★★★★☆</span>
          <span className="text-gray-400">(120)</span>
        </div>

        {/* 🎯 BUTTONS */}
        <div className="mt-4 flex gap-2">

          <Link
            href={`/product/${product.id}`}
            className="flex-1 text-center bg-pink-600 text-white py-2 rounded-xl hover:bg-pink-500 transition"
          >
            View
          </Link>

          <button
            onClick={handleAdd}
            disabled={adding}
            aria-label="Add to cart"
            className="px-3 py-2 border rounded-xl hover:bg-gray-100 transition disabled:opacity-50"
          >
            {adding ? "..." : "🛒"}
          </button>
        </div>
      </div>

      {/* ✨ QUICK ACTION OVERLAY */}
      <div className="absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur-md p-3 translate-y-full group-hover:translate-y-0 transition">
        <button
          onClick={handleAdd}
          className="w-full bg-black text-white py-2 rounded-lg text-sm hover:bg-gray-800 transition"
        >
          Quick Add to Cart
        </button>
      </div>
    </div>
  );
}
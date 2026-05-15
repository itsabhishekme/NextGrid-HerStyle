"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";

import {
  Heart,
  Eye,
  ShoppingBag,
  Star,
  Sparkles,
  ShieldCheck,
  Truck,
  BadgeCheck,
  Flame,
} from "lucide-react";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  oldPrice?: number;
  rating?: number;
  reviews?: number;
  category?: string;
  isNew?: boolean;
  isTrending?: boolean;
};

export default function ProductCard({
  product,
}: {
  product: Product;
}) {
  const [liked, setLiked] = useState(false);

  const [adding, setAdding] = useState(false);

  const [hovered, setHovered] = useState(false);

  // ✅ SAFE VALUES
  const price = product?.price ?? 0;

  const image = product?.image || "/placeholder.png";

  const rating = product?.rating ?? 4.8;

  const reviews = product?.reviews ?? 120;

  const oldPrice = product?.oldPrice ?? price + 1200;

  const category = product?.category ?? "Luxury Fashion";

  const discount = useMemo(() => {
    return Math.round(
      ((oldPrice - price) / oldPrice) * 100
    );
  }, [oldPrice, price]);

  // 🛒 ADD TO CART
  const handleAdd = () => {
    setAdding(true);

    setTimeout(() => {
      setAdding(false);
    }, 1000);
  };

  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-[32px]
        bg-white
        border
        border-gray-100
        shadow-sm
        hover:shadow-2xl
        transition-all
        duration-500
        hover:-translate-y-3
      "
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >

      {/* 🌈 BACKGROUND GLOW */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">

        <div className="absolute top-0 right-0 w-40 h-40 bg-pink-200/40 blur-3xl rounded-full"></div>

        <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-200/40 blur-3xl rounded-full"></div>
      </div>

      {/* 🌸 IMAGE SECTION */}
      <div className="relative overflow-hidden">

        {/* IMAGE CONTAINER */}
        <Link
          href={`/product/${product.id}`}
          className="block relative"
        >
          <div className="relative w-full h-[360px] overflow-hidden bg-gray-100">

            {/* IMAGE */}
            <Image
              src={image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className="
                object-cover
                transition-all
                duration-700
                group-hover:scale-110
              "
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent opacity-60"></div>

            {/* HOVER OVERLAY */}
            <div
              className={`
                absolute
                inset-0
                bg-black/20
                backdrop-blur-[2px]
                transition-all
                duration-500
                ${
                  hovered
                    ? "opacity-100"
                    : "opacity-0"
                }
              `}
            ></div>
          </div>
        </Link>

        {/* 🔥 TOP BADGES */}
        <div className="absolute top-4 left-4 flex flex-col gap-3 z-20">

          {/* NEW */}
          {product?.isNew !== false && (
            <div className="inline-flex items-center gap-1 bg-pink-600 text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg">
              <Sparkles size={12} />

              NEW
            </div>
          )}

          {/* TRENDING */}
          {product?.isTrending !== false && (
            <div className="inline-flex items-center gap-1 bg-black/70 backdrop-blur-xl text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg border border-white/10">
              <Flame size={12} className="text-orange-400" />

              TRENDING
            </div>
          )}
        </div>

        {/* ❤️ WISHLIST */}
        <button
          onClick={() => setLiked(!liked)}
          aria-label="Add to wishlist"
          className="
            absolute
            top-4
            right-4
            z-20
            w-12
            h-12
            rounded-full
            bg-white/80
            backdrop-blur-xl
            border
            border-white/20
            flex
            items-center
            justify-center
            shadow-lg
            hover:scale-110
            transition-all
            duration-300
          "
        >
          <Heart
            size={20}
            className={`
              transition-all
              duration-300
              ${
                liked
                  ? "fill-pink-500 text-pink-500 scale-110"
                  : "text-gray-700"
              }
            `}
          />
        </button>

        {/* QUICK ACTIONS */}
        <div
          className={`
            absolute
            left-1/2
            -translate-x-1/2
            bottom-6
            flex
            items-center
            gap-3
            transition-all
            duration-500
            ${
              hovered
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }
          `}
        >

          {/* VIEW */}
          <Link
            href={`/product/${product.id}`}
            className="
              w-12
              h-12
              rounded-full
              bg-white
              shadow-xl
              flex
              items-center
              justify-center
              hover:bg-pink-600
              hover:text-white
              transition-all
              duration-300
            "
          >
            <Eye size={18} />
          </Link>

          {/* CART */}
          <button
            onClick={handleAdd}
            className="
              flex
              items-center
              gap-2
              bg-black
              text-white
              px-6
              py-3
              rounded-full
              shadow-2xl
              hover:bg-pink-600
              transition-all
              duration-300
            "
          >
            <ShoppingBag size={18} />

            {adding ? "Adding..." : "Quick Add"}
          </button>
        </div>
      </div>

      {/* 📄 CONTENT */}
      <div className="relative p-6">

        {/* CATEGORY */}
        <div className="flex items-center justify-between mb-3">

          <span className="text-xs uppercase tracking-[3px] text-gray-400 font-medium">
            {category}
          </span>

          <div className="flex items-center gap-1 text-yellow-500">
            <Star
              size={14}
              className="fill-yellow-500"
            />

            <span className="text-sm font-semibold text-gray-700">
              {rating}
            </span>
          </div>
        </div>

        {/* PRODUCT NAME */}
        <Link href={`/product/${product.id}`}>
          <h3
            className="
              text-xl
              font-bold
              leading-snug
              line-clamp-2
              hover:text-pink-600
              transition
              min-h-[60px]
            "
          >
            {product.name}
          </h3>
        </Link>

        {/* REVIEWS */}
        <div className="flex items-center gap-2 mt-3">

          <div className="flex items-center text-yellow-500">

            {[1, 2, 3, 4, 5].map((i) => (
              <Star
                key={i}
                size={14}
                className="fill-yellow-500"
              />
            ))}
          </div>

          <span className="text-sm text-gray-400">
            ({reviews} reviews)
          </span>
        </div>

        {/* PRICE */}
        <div className="flex items-end gap-3 mt-5">

          <h4 className="text-3xl font-black text-pink-600">
            ₹{price.toLocaleString()}
          </h4>

          <span className="text-gray-400 line-through text-lg mb-1">
            ₹{oldPrice.toLocaleString()}
          </span>

          <span className="mb-1 text-sm font-semibold text-green-600">
            {discount}% OFF
          </span>
        </div>

        {/* FEATURES */}
        <div className="grid grid-cols-3 gap-3 mt-6">

          <div className="bg-pink-50 rounded-2xl p-3 text-center">

            <Truck
              size={18}
              className="mx-auto text-pink-600 mb-2"
            />

            <p className="text-[11px] font-medium text-gray-600">
              Fast Delivery
            </p>
          </div>

          <div className="bg-purple-50 rounded-2xl p-3 text-center">

            <ShieldCheck
              size={18}
              className="mx-auto text-purple-600 mb-2"
            />

            <p className="text-[11px] font-medium text-gray-600">
              Secure
            </p>
          </div>

          <div className="bg-indigo-50 rounded-2xl p-3 text-center">

            <BadgeCheck
              size={18}
              className="mx-auto text-indigo-600 mb-2"
            />

            <p className="text-[11px] font-medium text-gray-600">
              Premium
            </p>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex gap-3 mt-7">

          {/* VIEW */}
          <Link
            href={`/product/${product.id}`}
            className="
              flex-1
              text-center
              bg-gradient-to-r
              from-pink-600
              to-purple-600
              text-white
              py-4
              rounded-2xl
              font-semibold
              hover:shadow-xl
              hover:scale-[1.02]
              transition-all
              duration-300
            "
          >
            View Product
          </Link>

          {/* CART */}
          <button
            onClick={handleAdd}
            disabled={adding}
            aria-label="Add to cart"
            className="
              w-16
              rounded-2xl
              border
              border-gray-200
              bg-white
              flex
              items-center
              justify-center
              hover:bg-black
              hover:text-white
              transition-all
              duration-300
              disabled:opacity-50
            "
          >
            {adding ? (
              <div className="w-5 h-5 border-2 border-gray-300 border-t-black rounded-full animate-spin"></div>
            ) : (
              <ShoppingBag size={20} />
            )}
          </button>
        </div>
      </div>

      {/* ✨ BOTTOM SHINE */}
      <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </div>
  );
}
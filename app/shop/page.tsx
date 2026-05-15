"use client";

import { useMemo, useState } from "react";

import ProductCard from "@/components/ProductCard";

import { products } from "@/data/products";

import {
  ArrowRight,
  Filter,
  Grid3X3,
  LayoutGrid,
  Search,
  SlidersHorizontal,
  Sparkles,
  Star,
  Tag,
  X,
  Flame,
  Crown,
  ChevronDown,
} from "lucide-react";

export default function Shop() {
  const [search, setSearch] =
    useState("");

  const [category, setCategory] =
    useState("All");

  const [sort, setSort] =
    useState("default");

  const [maxPrice, setMaxPrice] =
    useState(5000);

  const [size, setSize] =
    useState<string | null>(null);

  const [showFilters, setShowFilters] =
    useState(false);

  const [grid, setGrid] =
    useState("grid");

  // 🎯 FILTER
  const filteredProducts = useMemo(() => {
    let filtered = products;

    // CATEGORY
    if (category !== "All") {
      filtered = filtered.filter(
        (p) =>
          ((p as any).category ??
            "All") === category
      );
    }

    // SEARCH
    if (search) {
      filtered = filtered.filter(
        (p) =>
          p.name
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )
      );
    }

    // PRICE
    filtered = filtered.filter(
      (p) => p.price <= maxPrice
    );

    // SORT
    if (sort === "low") {
      filtered = [...filtered].sort(
        (a, b) =>
          a.price - b.price
      );
    }

    if (sort === "high") {
      filtered = [...filtered].sort(
        (a, b) =>
          b.price - a.price
      );
    }

    return filtered;
  }, [
    search,
    category,
    sort,
    maxPrice,
  ]);

  return (
    <div className="relative overflow-hidden">

      {/* 🌈 GLOBAL BACKGROUND */}
      <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">

        <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-pink-300 opacity-20 blur-3xl rounded-full animate-pulse"></div>

        <div className="absolute bottom-[-140px] right-[-140px] w-[420px] h-[420px] bg-purple-300 opacity-20 blur-3xl rounded-full animate-pulse"></div>

        <div className="absolute top-[40%] left-[40%] w-[250px] h-[250px] bg-indigo-300 opacity-10 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">

        {/* 🌸 HERO */}
        <section className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 p-10 md:p-16 shadow-2xl mb-12">

          {/* Glow */}
          <div className="absolute top-[-80px] left-[-80px] w-[240px] h-[240px] bg-pink-400/20 blur-3xl rounded-full"></div>

          <div className="absolute bottom-[-80px] right-[-80px] w-[240px] h-[240px] bg-purple-400/20 blur-3xl rounded-full"></div>

          <div className="relative z-10 text-center">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-xl border border-white/40 px-5 py-2 rounded-full text-sm font-medium shadow-lg mb-8">

              <Sparkles
                size={16}
                className="text-pink-600"
              />

              Premium Fashion Collection
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">

              Discover Your
              <span className="block bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Luxury Style
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore curated premium collections designed
              for elegance, confidence, and timeless beauty.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">

              {[
                {
                  value: "500+",
                  label: "Luxury Products",
                },

                {
                  value: "25K+",
                  label: "Happy Customers",
                },

                {
                  value: "4.9★",
                  label: "Customer Rating",
                },

                {
                  value: "24/7",
                  label: "Premium Support",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="
                    bg-white/60
                    backdrop-blur-xl
                    border
                    border-white/30
                    rounded-3xl
                    p-6
                    shadow-lg
                  "
                >

                  <h3 className="text-3xl font-black text-gray-900 mb-2">
                    {item.value}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MOBILE FILTER BUTTON */}
        <button
          onClick={() =>
            setShowFilters(
              !showFilters
            )
          }
          className="
            md:hidden
            mb-6
            w-full
            flex
            items-center
            justify-center
            gap-2
            bg-black
            text-white
            py-4
            rounded-2xl
            shadow-xl
          "
        >

          <Filter size={18} />

          Filters
        </button>

        <div className="grid lg:grid-cols-4 gap-10">

          {/* 🎯 SIDEBAR */}
          <aside
            className={`
              space-y-8
              ${
                showFilters
                  ? "block"
                  : "hidden lg:block"
              }
            `}
          >

            {/* FILTER CARD */}
            <div
              className="
                sticky
                top-24
                space-y-8
              "
            >

              {/* HEADER */}
              <div className="bg-white/80 backdrop-blur-xl border border-gray-100 rounded-[35px] p-8 shadow-xl">

                <div className="flex items-center justify-between mb-6">

                  <div className="flex items-center gap-3">

                    <div className="w-12 h-12 rounded-2xl bg-pink-100 flex items-center justify-center">

                      <SlidersHorizontal className="text-pink-600" />
                    </div>

                    <div>

                      <h2 className="text-2xl font-black">
                        Filters
                      </h2>

                      <p className="text-sm text-gray-500">
                        Refine products
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() =>
                      setShowFilters(
                        false
                      )
                    }
                    className="lg:hidden"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* CATEGORY */}
                <div className="mb-10">

                  <h3 className="font-bold text-lg mb-5">
                    Categories
                  </h3>

                  <div className="space-y-3">

                    {[
                      "All",
                      "Shirts",
                      "Dresses",
                      "Jackets",
                    ].map((c) => (
                      <button
                        key={c}
                        onClick={() =>
                          setCategory(c)
                        }
                        className={`
                          w-full
                          flex
                          items-center
                          justify-between
                          px-5
                          py-4
                          rounded-2xl
                          transition-all
                          duration-300
                          ${
                            category === c
                              ? "bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-xl"
                              : "bg-gray-50 hover:bg-pink-50"
                          }
                        `}
                      >

                        <span className="font-medium">
                          {c}
                        </span>

                        <ChevronDown
                          size={16}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* PRICE */}
                <div className="mb-10">

                  <div className="flex items-center justify-between mb-5">

                    <h3 className="font-bold text-lg">
                      Max Price
                    </h3>

                    <span className="text-pink-600 font-semibold">
                      ₹
                      {maxPrice.toLocaleString()}
                    </span>
                  </div>

                  <input
                    type="range"
                    min="500"
                    max="5000"
                    value={maxPrice}
                    onChange={(e) =>
                      setMaxPrice(
                        Number(
                          e.target.value
                        )
                      )
                    }
                    className="
                      w-full
                      accent-pink-600
                    "
                  />

                  <div className="flex justify-between text-xs text-gray-400 mt-3">

                    <span>₹500</span>

                    <span>₹5000</span>
                  </div>
                </div>

                {/* SIZE */}
                <div className="mb-10">

                  <h3 className="font-bold text-lg mb-5">
                    Size
                  </h3>

                  <div className="grid grid-cols-4 gap-3">

                    {[
                      "S",
                      "M",
                      "L",
                      "XL",
                    ].map((s) => (
                      <button
                        key={s}
                        onClick={() =>
                          setSize(s)
                        }
                        className={`
                          h-14
                          rounded-2xl
                          border
                          font-semibold
                          transition-all
                          duration-300
                          ${
                            size === s
                              ? "bg-black text-white border-black"
                              : "hover:border-pink-500"
                          }
                        `}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* CLEAR */}
                <button
                  onClick={() => {
                    setCategory(
                      "All"
                    );

                    setSearch("");

                    setSort(
                      "default"
                    );

                    setMaxPrice(
                      5000
                    );

                    setSize(null);
                  }}
                  className="
                    w-full
                    bg-gray-100
                    hover:bg-red-50
                    hover:text-red-500
                    py-4
                    rounded-2xl
                    font-medium
                    transition-all
                  "
                >
                  Clear Filters
                </button>
              </div>

              {/* PROMO */}
              <div className="relative overflow-hidden rounded-[35px] bg-gradient-to-br from-black via-gray-900 to-black p-8 text-white shadow-2xl">

                {/* Glow */}
                <div className="absolute top-[-60px] right-[-60px] w-[180px] h-[180px] bg-pink-500/20 blur-3xl rounded-full"></div>

                <div className="relative">

                  <div className="w-16 h-16 rounded-3xl bg-white/10 border border-white/10 flex items-center justify-center mb-6">

                    <Crown size={30} />
                  </div>

                  <h3 className="text-3xl font-black leading-tight mb-5">
                    Premium
                    <span className="block text-pink-400">
                      Collection
                    </span>
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-8">
                    Discover luxury fashion crafted for elegance.
                  </p>

                  <button
                    className="
                      inline-flex
                      items-center
                      gap-2
                      bg-white
                      text-black
                      px-6
                      py-3
                      rounded-2xl
                      font-semibold
                    "
                  >
                    Explore

                    <ArrowRight
                      size={18}
                    />
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* 🛍️ PRODUCTS */}
          <div className="lg:col-span-3">

            {/* TOP BAR */}
            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6 mb-10">

              {/* SEARCH */}
              <div className="relative w-full xl:w-[420px]">

                <Search
                  size={20}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="text"
                  placeholder="Search premium fashion..."
                  value={search}
                  onChange={(e) =>
                    setSearch(
                      e.target.value
                    )
                  }
                  className="
                    w-full
                    bg-white/80
                    backdrop-blur-xl
                    border
                    border-gray-100
                    rounded-2xl
                    pl-14
                    pr-5
                    py-5
                    shadow-sm
                    outline-none
                    focus:ring-2
                    focus:ring-pink-500
                  "
                />
              </div>

              {/* RIGHT */}
              <div className="flex flex-wrap items-center gap-4">

                {/* SORT */}
                <select
                  value={sort}
                  onChange={(e) =>
                    setSort(
                      e.target.value
                    )
                  }
                  className="
                    bg-white/80
                    backdrop-blur-xl
                    border
                    border-gray-100
                    rounded-2xl
                    px-5
                    py-4
                    shadow-sm
                    outline-none
                  "
                >

                  <option value="default">
                    Sort Products
                  </option>

                  <option value="low">
                    Price Low → High
                  </option>

                  <option value="high">
                    Price High → Low
                  </option>
                </select>

                {/* GRID */}
                <div className="flex items-center gap-3">

                  <button
                    onClick={() =>
                      setGrid(
                        "grid"
                      )
                    }
                    className={`
                      w-14
                      h-14
                      rounded-2xl
                      flex
                      items-center
                      justify-center
                      transition-all
                      ${
                        grid ===
                        "grid"
                          ? "bg-black text-white"
                          : "bg-white border"
                      }
                    `}
                  >

                    <Grid3X3
                      size={20}
                    />
                  </button>

                  <button
                    onClick={() =>
                      setGrid(
                        "large"
                      )
                    }
                    className={`
                      w-14
                      h-14
                      rounded-2xl
                      flex
                      items-center
                      justify-center
                      transition-all
                      ${
                        grid ===
                        "large"
                          ? "bg-black text-white"
                          : "bg-white border"
                      }
                    `}
                  >

                    <LayoutGrid
                      size={20}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* FILTER CHIPS */}
            <div className="flex flex-wrap gap-3 mb-8">

              {[
                "Trending",
                "Luxury",
                "Premium",
                "New Arrival",
                "Best Seller",
              ].map((chip, i) => (
                <button
                  key={i}
                  className="
                    inline-flex
                    items-center
                    gap-2
                    bg-white/80
                    backdrop-blur-xl
                    border
                    border-gray-100
                    px-5
                    py-3
                    rounded-full
                    text-sm
                    font-medium
                    hover:bg-pink-50
                    hover:text-pink-600
                    transition-all
                  "
                >

                  {i === 0 && (
                    <Flame
                      size={15}
                    />
                  )}

                  {i === 1 && (
                    <Crown
                      size={15}
                    />
                  )}

                  {i === 2 && (
                    <Star
                      size={15}
                    />
                  )}

                  {i === 3 && (
                    <Sparkles
                      size={15}
                    />
                  )}

                  {i === 4 && (
                    <Tag
                      size={15}
                    />
                  )}

                  {chip}
                </button>
              ))}
            </div>

            {/* RESULT */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">

              <div>

                <h2 className="text-3xl font-black mb-2">
                  Premium Products
                </h2>

                <p className="text-gray-500">
                  Showing{" "}
                  {
                    filteredProducts.length
                  }{" "}
                  luxury products
                </p>
              </div>

              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-xl border border-gray-100 px-5 py-3 rounded-2xl shadow-sm">

                <Sparkles
                  size={16}
                  className="text-pink-600"
                />

                <span className="text-sm font-medium">
                  Curated Luxury Collection
                </span>
              </div>
            </div>

            {/* EMPTY */}
            {filteredProducts.length ===
            0 ? (
              <div className="relative overflow-hidden rounded-[40px] bg-white border border-gray-100 shadow-2xl py-28 px-8 text-center">

                {/* Glow */}
                <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-pink-200/30 blur-3xl rounded-full"></div>

                <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-purple-200/30 blur-3xl rounded-full"></div>

                <div className="relative">

                  <div className="w-28 h-28 rounded-full bg-pink-100 flex items-center justify-center mx-auto mb-8">

                    <Search
                      size={48}
                      className="text-pink-600"
                    />
                  </div>

                  <h2 className="text-4xl font-black mb-5">
                    No Products Found 😢
                  </h2>

                  <p className="text-gray-500 max-w-xl mx-auto leading-relaxed mb-10">
                    Try adjusting your filters or search to discover premium collections.
                  </p>

                  <button
                    onClick={() => {
                      setCategory(
                        "All"
                      );

                      setSearch("");

                      setSort(
                        "default"
                      );

                      setMaxPrice(
                        5000
                      );

                      setSize(null);
                    }}
                    className="
                      bg-black
                      text-white
                      px-8
                      py-4
                      rounded-2xl
                      hover:bg-pink-600
                      transition-all
                      duration-300
                    "
                  >
                    Reset Filters
                  </button>
                </div>
              </div>
            ) : (
              <>
                {/* GRID */}
                <div
                  className={`
                    grid
                    ${
                      grid ===
                      "large"
                        ? "md:grid-cols-2"
                        : "sm:grid-cols-2 xl:grid-cols-3"
                    }
                    gap-8
                  `}
                >

                  {filteredProducts.map(
                    (p) => (
                      <div
                        key={p.id}
                        className="
                          group
                          hover:-translate-y-2
                          transition-all
                          duration-500
                        "
                      >
                        <ProductCard
                          product={
                            p
                          }
                        />
                      </div>
                    )
                  )}
                </div>

                {/* LOAD MORE */}
                <div className="text-center mt-16">

                  <button
                    className="
                      group
                      inline-flex
                      items-center
                      gap-2
                      bg-gradient-to-r
                      from-pink-600
                      via-purple-600
                      to-indigo-600
                      text-white
                      px-10
                      py-5
                      rounded-2xl
                      font-semibold
                      shadow-2xl
                      hover:scale-105
                      transition-all
                      duration-300
                    "
                  >
                    Load More Products

                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition"
                    />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
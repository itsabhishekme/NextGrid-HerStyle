"use client";

import { useState, useMemo } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function Shop() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");
  const [maxPrice, setMaxPrice] = useState(5000);
  const [size, setSize] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  // 🔍 Filter Logic
  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (category !== "All") {
      filtered = filtered.filter((p) => ((p as any).category ?? "All") === category);
    }

    if (search) {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    filtered = filtered.filter((p) => p.price <= maxPrice);

    if (sort === "low") {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [search, category, sort, maxPrice]);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">

      {/* 🌸 HERO */}
      <div className="bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 p-10 rounded-3xl mb-10 text-center shadow-sm">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          Discover Your Style
        </h1>
        <p className="text-gray-600">
          Explore curated collections designed for elegance
        </p>
      </div>

      {/* 🔘 MOBILE FILTER BUTTON */}
      <button
        onClick={() => setShowFilters(!showFilters)}
        className="md:hidden mb-4 px-4 py-2 border rounded-xl"
      >
        Filters ⚙️
      </button>

      <div className="grid md:grid-cols-4 gap-8">

        {/* 🎯 SIDEBAR FILTER */}
        <div className={`space-y-6 ${showFilters ? "block" : "hidden md:block"}`}>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-semibold mb-4">Category</h3>
            {["All", "Shirts", "Dresses", "Jackets"].map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`block w-full text-left mb-2 ${
                  category === c ? "text-pink-600 font-semibold" : ""
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 id="max-price-label" className="font-semibold mb-4">Max Price ₹{maxPrice}</h3>
            <input
              type="range"
              min="500"
              max="5000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full"
              aria-labelledby="max-price-label"
            />
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-semibold mb-4">Size</h3>
            <div className="flex gap-2 flex-wrap">
              {["S", "M", "L", "XL"].map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`px-3 py-1 border rounded ${
                    size === s ? "bg-pink-600 text-white" : ""
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* CLEAR */}
          <button
            onClick={() => {
              setCategory("All");
              setSearch("");
              setSort("default");
              setMaxPrice(5000);
              setSize(null);
            }}
            className="text-sm text-gray-500 hover:text-red-500"
          >
            Clear Filters
          </button>
        </div>

        {/* 🛍️ MAIN CONTENT */}
        <div className="md:col-span-3">

          {/* 🔍 TOP BAR */}
          <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">

            <div className="w-full md:w-1/2">
              <label htmlFor="search" className="sr-only">Search products</label>
              <input
                id="search"
                type="text"
                placeholder="Search..."
                className="border p-3 rounded-xl w-full"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <select
              aria-label="Sort products"
              className="border p-3 rounded-xl"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="default">Sort</option>
              <option value="low">Price Low → High</option>
              <option value="high">Price High → Low</option>
            </select>
          </div>

          {/* 🧾 RESULT */}
          <p className="text-sm text-gray-500 mb-4">
            {filteredProducts.length} items found
          </p>

          {/* 🛍️ GRID */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <h2 className="text-xl font-semibold">
                No products found 😢
              </h2>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((p) => (
                <div
                  key={p.id}
                  className="group transition hover:-translate-y-1"
                >
                  <ProductCard product={p} />
                </div>
              ))}
            </div>
          )}

          {/* LOAD MORE */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-pink-600 text-white rounded-xl hover:bg-pink-500 transition shadow-lg">
              Load More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
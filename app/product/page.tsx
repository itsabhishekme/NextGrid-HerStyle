"use client";

import { useState } from "react";
import { products } from "@/data/products";
import Link from "next/link";

export default function ProductPage({ params }: any) {
  const product = products.find(
    (p) => p.id === Number(params.id)
  );

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState("pink");
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState("desc");

  if (!product)
    return (
      <div className="text-center py-20 text-xl">
        Product Not Found ❌
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">

      {/* 🔙 Back */}
      <Link href="/shop" className="text-sm text-gray-500 hover:text-pink-600">
        ← Back to Shop
      </Link>

      <div className="grid md:grid-cols-2 gap-14 mt-6">

        {/* 🖼️ IMAGE SECTION */}
        <div className="space-y-4">

          <div className="overflow-hidden rounded-3xl">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[520px] object-cover hover:scale-110 transition duration-700"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3">
            {[1, 2, 3, 4].map((i) => (
              <img
                key={i}
                alt={`Thumbnail ${i} of ${product.name}`}
                src={product.image}
                className="w-20 h-20 object-cover rounded-xl border hover:scale-105 cursor-pointer"
              />
            ))}
          </div>
        </div>

        {/* 📄 DETAILS */}
        <div className="sticky top-24 h-fit">

          <h1 className="text-4xl font-bold mb-2">{product.name}</h1>

          <p className="text-yellow-500 text-sm mb-3">
            ★★★★☆ (120 reviews)
          </p>

          <p className="text-pink-600 text-3xl font-bold mb-6">
            ₹{product.price}
          </p>

          {/* COLOR */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Color</h3>
            <div className="flex gap-3">
              {["pink", "black", "white"].map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedColor(c)}
                  className={`w-8 h-8 rounded-full border-2 ${
                    selectedColor === c ? "border-black scale-110" : ""
                  }`}
                  style={{ backgroundColor: c }}
                  aria-label={`Select ${c} color`}
                  title={`Select ${c} color`}
                />
              ))}
            </div>
          </div>

          {/* SIZE */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Size</h3>
            <div className="flex gap-3">
              {["S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-lg ${
                    selectedSize === size
                      ? "bg-pink-600 text-white"
                      : "hover:border-pink-500"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* QUANTITY */}
          <div className="flex items-center gap-4 mb-6">
            <h3 className="font-semibold">Qty</h3>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="w-8 h-8 bg-gray-200 rounded-full"
              >
                -
              </button>
              <span>{qty}</span>
              <button
                onClick={() => setQty(qty + 1)}
                className="w-8 h-8 bg-gray-200 rounded-full"
              >
                +
              </button>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4 mb-6">
            <button className="flex-1 bg-pink-600 text-white py-3 rounded-xl hover:bg-pink-500 transition shadow-lg">
              Add to Cart
            </button>

            <button className="flex-1 border py-3 rounded-xl hover:bg-gray-100">
              Buy Now ⚡
            </button>
          </div>

          <button className="text-sm text-gray-500 hover:text-pink-600 mb-6">
            ❤️ Add to Wishlist
          </button>

          {/* TRUST */}
          <div className="space-y-2 text-sm text-gray-500">
            <p>✔ Free delivery above ₹4000</p>
            <p>✔ Easy returns</p>
            <p>✔ Secure payment</p>
          </div>

          {/* TABS */}
          <div className="mt-10">
            <div className="flex gap-6 border-b pb-2 mb-4">
              {["desc", "shipping", "care"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-sm ${
                    activeTab === tab
                      ? "text-pink-600 border-b-2 border-pink-600"
                      : "text-gray-500"
                  }`}
                >
                  {tab.toUpperCase()}
                </button>
              ))}
            </div>

            {activeTab === "desc" && (
              <p className="text-gray-600 text-sm">
                Crafted with premium fabric for elegance and comfort.
              </p>
            )}

            {activeTab === "shipping" && (
              <p className="text-gray-600 text-sm">
                Delivery in 3–5 days across India.
              </p>
            )}

            {activeTab === "care" && (
              <p className="text-gray-600 text-sm">
                Machine wash cold. Do not bleach.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* 🔥 RELATED */}
      <section className="mt-24">
        <h2 className="text-3xl font-bold mb-6">
          Similar Styles
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {products.slice(0, 4).map((p) => (
            <Link
              key={p.id}
              href={`/product/${p.id}`}
              className="group"
            >
              <div className="overflow-hidden rounded-2xl shadow">
                <img
                  alt={p.name}
                  src={p.image}
                  className="w-full h-56 object-cover group-hover:scale-110 transition"
                />
              </div>
              <h3 className="mt-2 font-semibold">{p.name}</h3>
              <p className="text-pink-600 font-bold">
                ₹{p.price}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* 💬 REVIEWS */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold mb-6">
          Reviews
        </h2>

        <div className="space-y-4">
          {["Perfect fit!", "Amazing quality!", "Loved it ❤️"].map(
            (r, i) => (
              <div
                key={i}
                className="bg-gray-50 p-6 rounded-xl shadow-sm"
              >
                <p className="text-yellow-500">★★★★★</p>
                <p className="text-gray-600 mt-2">{r}</p>
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
}
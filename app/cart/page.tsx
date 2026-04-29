"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

export default function Cart() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  // 🔥 Load from localStorage (real feel)
  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) setCart(JSON.parse(stored));
    else {
      setCart([
        {
          id: 1,
          name: "Elegant Dress",
          price: 2999,
          image: "/dress.jpg",
          quantity: 1,
        },
      ]);
    }
  }, []);

  // 💾 Save cart
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ➕➖ Quantity
  const updateQty = (id: number, type: "inc" | "dec") => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === "inc"
                  ? item.quantity + 1
                  : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  // ❌ Remove
  const removeItem = (id: number) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  // 🧹 Clear cart
  const clearCart = () => {
    setCart([]);
  };

  // 💰 Pricing
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 4000 ? 0 : 149;
  const discountAmount = subtotal * (discount / 100);
  const total = subtotal + shipping - discountAmount;

  // 🎟️ Apply coupon
  const applyCoupon = () => {
    if (coupon === "HERSTYLE10") {
      setDiscount(10);
    } else if (coupon === "VIP20") {
      setDiscount(20);
    } else {
      alert("Invalid coupon");
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-10 px-4 md:px-8">

      {/* 🧾 Title */}
      <h1 className="text-4xl font-bold text-center mb-10">
        Your Cart
      </h1>

      {cart.length === 0 ? (
        /* EMPTY */
        <div className="text-center py-24">
          <h2 className="text-2xl font-semibold mb-4">
            Your cart feels lonely 🛍️
          </h2>
          <p className="text-gray-500 mb-6">
            Add something beautiful to it.
          </p>

          <Link
            href="/shop"
            className="bg-pink-600 text-white px-8 py-3 rounded-xl hover:bg-pink-500 transition"
          >
            Explore Collection
          </Link>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-10">

          {/* 🛍️ ITEMS */}
          <div className="lg:col-span-2 space-y-6">

            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row gap-6 bg-white/70 backdrop-blur-md border border-gray-200 p-6 rounded-3xl shadow-sm hover:shadow-xl transition"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full md:w-32 h-32 object-cover rounded-xl"
                />

                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-pink-600 font-bold mt-1">
                    ₹{item.price}
                  </p>

                  {/* Qty */}
                  <div className="flex items-center gap-3 mt-4">
                    <button
                      onClick={() => updateQty(item.id, "dec")}
                      className="w-8 h-8 bg-gray-200 rounded-full"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQty(item.id, "inc")}
                      className="w-8 h-8 bg-gray-200 rounded-full"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex flex-col justify-between">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 text-sm hover:underline"
                  >
                    Remove
                  </button>

                  <button className="text-gray-400 text-xs hover:text-pink-600">
                    Move to Wishlist ❤️
                  </button>
                </div>
              </div>
            ))}

            {/* Clear Cart */}
            <button
              onClick={clearCart}
              className="text-sm text-gray-500 hover:text-red-500"
            >
              Clear Cart
            </button>
          </div>

          {/* 💳 SUMMARY */}
          <div className="bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-lg border border-gray-200">

            <h2 className="text-2xl font-bold mb-6">
              Order Summary
            </h2>

            {/* Coupon */}
            <div className="flex mb-4">
              <input
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                placeholder="Coupon code"
                className="flex-1 border p-2 rounded-l-xl"
              />
              <button
                onClick={applyCoupon}
                className="bg-black text-white px-4 rounded-r-xl"
              >
                Apply
              </button>
            </div>

            {/* Price */}
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{shipping === 0 ? "Free" : `₹${shipping}`}</span>
              </div>

              {discount > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>Discount ({discount}%)</span>
                  <span>-₹{discountAmount}</span>
                </div>
              )}

              <div className="border-t pt-3 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </div>

            {/* Checkout */}
            <button className="mt-6 w-full bg-pink-600 text-white py-3 rounded-xl hover:bg-pink-500 transition">
              Secure Checkout 🔒
            </button>

            {/* Extra Info */}
            <p className="text-xs text-gray-400 mt-4 text-center">
              Free delivery on orders above ₹4000
            </p>

            <Link
              href="/shop"
              className="block text-center mt-4 text-sm text-gray-500 hover:text-pink-600"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
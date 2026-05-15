"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";

import {
  ArrowRight,
  BadgeCheck,
  Heart,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Trash2,
  Truck,
  Plus,
  Minus,
  Tag,
  Lock,
  Gift,
} from "lucide-react";

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

  const [loadingCoupon, setLoadingCoupon] = useState(false);

  // ✅ LOAD CART
  useEffect(() => {
    const stored = localStorage.getItem("cart");

    if (stored) {
      setCart(JSON.parse(stored));
    } else {
      setCart([
        {
          id: 1,
          name: "Elegant Luxury Dress",
          price: 2999,
          image: "/dress.jpg",
          quantity: 1,
        },

        {
          id: 2,
          name: "Premium Fashion Jacket",
          price: 4599,
          image: "/hero2.jpg",
          quantity: 1,
        },
      ]);
    }
  }, []);

  // ✅ SAVE CART
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ➕➖ QUANTITY
  const updateQty = (
    id: number,
    type: "inc" | "dec"
  ) => {
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

  // ❌ REMOVE
  const removeItem = (id: number) => {
    setCart((prev) =>
      prev.filter((i) => i.id !== id)
    );
  };

  // 🧹 CLEAR CART
  const clearCart = () => {
    setCart([]);
  };

  // 💰 PRICE
  const subtotal = cart.reduce(
    (acc, item) =>
      acc + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 4000 ? 0 : 149;

  const discountAmount =
    subtotal * (discount / 100);

  const total =
    subtotal + shipping - discountAmount;

  // 🎟️ COUPON
  const applyCoupon = () => {
    setLoadingCoupon(true);

    setTimeout(() => {
      if (coupon === "HERSTYLE10") {
        setDiscount(10);
      } else if (coupon === "VIP20") {
        setDiscount(20);
      } else {
        alert("Invalid Coupon");
      }

      setLoadingCoupon(false);
    }, 1000);
  };

  return (
    <div className="relative overflow-hidden">

      {/* 🌈 BACKGROUND */}
      <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">

        <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-pink-300 opacity-20 blur-3xl rounded-full animate-pulse"></div>

        <div className="absolute bottom-[-140px] right-[-140px] w-[420px] h-[420px] bg-purple-300 opacity-20 blur-3xl rounded-full animate-pulse"></div>

        <div className="absolute top-[40%] left-[40%] w-[250px] h-[250px] bg-indigo-300 opacity-10 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-14">

        {/* 🌸 HERO */}
        <div className="text-center mb-16">

          <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 px-5 py-2 rounded-full text-sm font-medium mb-6">

            <ShoppingBag size={16} />

            Luxury Shopping Cart
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">

            Your Fashion
            <span className="block bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Cart Collection
            </span>
          </h1>

          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Review your premium fashion selections before checkout.
          </p>
        </div>

        {/* EMPTY */}
        {cart.length === 0 ? (
          <div className="relative overflow-hidden rounded-[40px] bg-white border border-gray-100 shadow-2xl py-28 px-8 text-center">

            {/* Glow */}
            <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-pink-200/30 blur-3xl rounded-full"></div>

            <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-purple-200/30 blur-3xl rounded-full"></div>

            <div className="relative">

              <div className="w-28 h-28 rounded-full bg-pink-100 flex items-center justify-center mx-auto mb-8">

                <ShoppingBag
                  size={48}
                  className="text-pink-600"
                />
              </div>

              <h2 className="text-4xl font-black mb-5">
                Your Cart Feels Empty 🛍️
              </h2>

              <p className="text-gray-500 max-w-xl mx-auto leading-relaxed mb-10">
                Add premium fashion collections to experience luxury elegance.
              </p>

              <Link
                href="/shop"
                className="
                  inline-flex
                  items-center
                  gap-2
                  bg-black
                  text-white
                  px-8
                  py-4
                  rounded-2xl
                  hover:bg-pink-600
                  transition-all
                  duration-300
                  shadow-xl
                "
              >
                Explore Collection

                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-10">

            {/* 🛍️ ITEMS */}
            <div className="lg:col-span-2 space-y-8">

              {/* TOP BAR */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">

                <div>
                  <h2 className="text-3xl font-black">
                    Cart Items
                  </h2>

                  <p className="text-gray-500 mt-2">
                    {cart.length} premium products added
                  </p>
                </div>

                <button
                  onClick={clearCart}
                  className="
                    inline-flex
                    items-center
                    gap-2
                    text-red-500
                    hover:text-red-600
                    font-medium
                  "
                >
                  <Trash2 size={16} />

                  Clear Cart
                </button>
              </div>

              {/* ITEMS */}
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[35px]
                    bg-white/80
                    backdrop-blur-xl
                    border
                    border-gray-100
                    shadow-sm
                    hover:shadow-2xl
                    transition-all
                    duration-500
                    p-6
                  "
                >

                  {/* Glow */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-pink-100/30 blur-3xl rounded-full"></div>

                  <div className="relative flex flex-col md:flex-row gap-8">

                    {/* IMAGE */}
                    <div className="relative w-full md:w-[180px] h-[220px] overflow-hidden rounded-[28px] bg-gray-100">

                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-105 transition duration-700"
                      />

                      {/* Badge */}
                      <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-xl text-white px-4 py-2 rounded-full text-xs font-semibold">
                        Premium
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="flex-1 flex flex-col justify-between">

                      <div>

                        {/* Category */}
                        <p className="uppercase tracking-[3px] text-xs text-gray-400 mb-3">
                          Luxury Fashion
                        </p>

                        {/* Name */}
                        <h3 className="text-2xl font-bold leading-snug">
                          {item.name}
                        </h3>

                        {/* Rating */}
                        <div className="flex items-center gap-2 mt-4">

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
                            (120 reviews)
                          </span>
                        </div>

                        {/* Price */}
                        <div className="flex items-end gap-3 mt-5">

                          <h4 className="text-3xl font-black text-pink-600">
                            ₹
                            {item.price.toLocaleString()}
                          </h4>

                          <span className="text-gray-400 line-through text-lg mb-1">
                            ₹
                            {(
                              item.price + 1200
                            ).toLocaleString()}
                          </span>
                        </div>
                      </div>

                      {/* Bottom */}
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mt-8">

                        {/* Qty */}
                        <div className="flex items-center gap-4">

                          <button
                            onClick={() =>
                              updateQty(
                                item.id,
                                "dec"
                              )
                            }
                            className="
                              w-12
                              h-12
                              rounded-full
                              bg-gray-100
                              hover:bg-pink-100
                              flex
                              items-center
                              justify-center
                              transition
                            "
                          >
                            <Minus size={18} />
                          </button>

                          <span className="text-xl font-bold min-w-[30px] text-center">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() =>
                              updateQty(
                                item.id,
                                "inc"
                              )
                            }
                            className="
                              w-12
                              h-12
                              rounded-full
                              bg-gray-100
                              hover:bg-pink-100
                              flex
                              items-center
                              justify-center
                              transition
                            "
                          >
                            <Plus size={18} />
                          </button>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-6">

                          <button
                            className="
                              inline-flex
                              items-center
                              gap-2
                              text-gray-500
                              hover:text-pink-600
                              transition
                            "
                          >
                            <Heart size={18} />

                            Wishlist
                          </button>

                          <button
                            onClick={() =>
                              removeItem(item.id)
                            }
                            className="
                              inline-flex
                              items-center
                              gap-2
                              text-red-500
                              hover:text-red-600
                              transition
                            "
                          >
                            <Trash2 size={18} />

                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* BENEFITS */}
              <div className="grid sm:grid-cols-3 gap-6">

                {[
                  {
                    icon: Truck,
                    title: "Free Shipping",
                    desc: "Orders above ₹4000",
                  },

                  {
                    icon: ShieldCheck,
                    title: "Secure Payment",
                    desc: "100% protected checkout",
                  },

                  {
                    icon: BadgeCheck,
                    title: "Premium Quality",
                    desc: "Luxury fashion products",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="
                      bg-white/80
                      backdrop-blur-xl
                      border
                      border-gray-100
                      rounded-[30px]
                      p-6
                      shadow-sm
                    "
                  >

                    <div className="w-14 h-14 rounded-2xl bg-pink-100 flex items-center justify-center mb-5">

                      <item.icon className="text-pink-600" />
                    </div>

                    <h3 className="font-bold text-lg mb-2">
                      {item.title}
                    </h3>

                    <p className="text-gray-500 text-sm">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 💳 SUMMARY */}
            <div className="relative">

              <div
                className="
                  sticky
                  top-24
                  overflow-hidden
                  rounded-[35px]
                  bg-white/90
                  backdrop-blur-xl
                  border
                  border-gray-100
                  shadow-2xl
                  p-8
                "
              >

                {/* Glow */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-pink-100/30 blur-3xl rounded-full"></div>

                <div className="relative">

                  {/* Title */}
                  <div className="flex items-center gap-3 mb-8">

                    <div className="w-14 h-14 rounded-2xl bg-pink-100 flex items-center justify-center">

                      <Sparkles className="text-pink-600" />
                    </div>

                    <div>
                      <h2 className="text-3xl font-black">
                        Order Summary
                      </h2>

                      <p className="text-gray-500 text-sm">
                        Premium Checkout
                      </p>
                    </div>
                  </div>

                  {/* Coupon */}
                  <div className="mb-8">

                    <label className="text-sm font-medium mb-3 block">
                      Coupon Code
                    </label>

                    <div className="flex">

                      <div className="relative flex-1">

                        <Tag
                          size={18}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        />

                        <input
                          value={coupon}
                          onChange={(e) =>
                            setCoupon(
                              e.target.value
                            )
                          }
                          placeholder="Enter coupon"
                          className="
                            w-full
                            border
                            border-gray-200
                            bg-white
                            rounded-l-2xl
                            pl-12
                            pr-4
                            py-4
                            outline-none
                            focus:border-pink-500
                          "
                        />
                      </div>

                      <button
                        onClick={applyCoupon}
                        className="
                          bg-black
                          text-white
                          px-6
                          rounded-r-2xl
                          hover:bg-pink-600
                          transition
                        "
                      >
                        {loadingCoupon
                          ? "..."
                          : "Apply"}
                      </button>
                    </div>

                    {/* Suggested */}
                    <div className="flex flex-wrap gap-3 mt-4">

                      {[
                        "HERSTYLE10",
                        "VIP20",
                      ].map((code, i) => (
                        <button
                          key={i}
                          onClick={() =>
                            setCoupon(code)
                          }
                          className="
                            text-xs
                            bg-pink-50
                            text-pink-600
                            px-4
                            py-2
                            rounded-full
                            hover:bg-pink-100
                            transition
                          "
                        >
                          {code}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* PRICE */}
                  <div className="space-y-5 border-b border-gray-200 pb-8">

                    <div className="flex justify-between text-gray-600">

                      <span>
                        Subtotal
                      </span>

                      <span>
                        ₹
                        {subtotal.toLocaleString()}
                      </span>
                    </div>

                    <div className="flex justify-between text-gray-600">

                      <span>
                        Shipping
                      </span>

                      <span>
                        {shipping === 0
                          ? "Free"
                          : `₹${shipping}`}
                      </span>
                    </div>

                    {discount > 0 && (
                      <div className="flex justify-between text-green-600 font-medium">

                        <span>
                          Discount ({discount}%)
                        </span>

                        <span>
                          -₹
                          {discountAmount.toLocaleString()}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* TOTAL */}
                  <div className="flex justify-between items-center py-8">

                    <div>
                      <p className="text-gray-500 text-sm">
                        Total Amount
                      </p>

                      <h3 className="text-4xl font-black text-pink-600">
                        ₹
                        {total.toLocaleString()}
                      </h3>
                    </div>

                    <Gift
                      size={34}
                      className="text-pink-500"
                    />
                  </div>

                  {/* CHECKOUT */}
                  <button
                    className="
                      group
                      w-full
                      bg-gradient-to-r
                      from-pink-600
                      via-purple-600
                      to-indigo-600
                      text-white
                      py-5
                      rounded-2xl
                      font-semibold
                      shadow-2xl
                      hover:scale-[1.02]
                      transition-all
                      duration-300
                    "
                  >

                    <span className="flex items-center justify-center gap-2">

                      <Lock size={18} />

                      Secure Checkout

                      <ArrowRight
                        size={18}
                        className="group-hover:translate-x-1 transition"
                      />
                    </span>
                  </button>

                  {/* INFO */}
                  <div className="mt-8 space-y-4 text-sm">

                    <div className="flex items-center gap-3 text-gray-500">

                      <ShieldCheck
                        size={18}
                        className="text-green-500"
                      />

                      100% Secure Checkout
                    </div>

                    <div className="flex items-center gap-3 text-gray-500">

                      <Truck
                        size={18}
                        className="text-pink-500"
                      />

                      Free delivery above ₹4000
                    </div>

                    <div className="flex items-center gap-3 text-gray-500">

                      <BadgeCheck
                        size={18}
                        className="text-indigo-500"
                      />

                      Premium quality assurance
                    </div>
                  </div>

                  {/* CONTINUE */}
                  <Link
                    href="/shop"
                    className="
                      block
                      text-center
                      mt-8
                      text-sm
                      text-gray-500
                      hover:text-pink-600
                      transition
                    "
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";

import { products } from "@/data/products";

import Link from "next/link";
import Image from "next/image";

import {
  ArrowRight,
  Crown,
  Gem,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
  BadgeCheck,
  HeartHandshake,
} from "lucide-react";

const categories = [
  {
    name: "Luxury Dresses",
    img: "/cat1.jpg",
    desc: "Elegant premium outfits",
  },

  {
    name: "Modern Tops",
    img: "/cat2.jpg",
    desc: "Everyday luxury fashion",
  },

  {
    name: "Designer Jackets",
    img: "/cat3.jpg",
    desc: "Bold statement collections",
  },

  {
    name: "Accessories",
    img: "/cat4.jpg",
    desc: "Luxury finishing touch",
  },
];

const gallery = [
  "/g1.jpg",
  "/g2.jpg",
  "/g3.jpg",
  "/g4.jpg",
  "/g1.jpg",
  "/g2.jpg",
];

export default function Home() {
  return (
    <div className="relative overflow-hidden">

      {/* 🌈 BACKGROUND */}
      <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">

        <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-pink-300 opacity-20 blur-3xl rounded-full animate-pulse"></div>

        <div className="absolute bottom-[-140px] right-[-140px] w-[420px] h-[420px] bg-purple-300 opacity-20 blur-3xl rounded-full animate-pulse"></div>

        <div className="absolute top-[40%] left-[40%] w-[250px] h-[250px] bg-indigo-300 opacity-10 blur-3xl rounded-full"></div>
      </div>

      <div className="space-y-32">

        {/* 🌟 ANNOUNCEMENT */}
        <section className="relative overflow-hidden rounded-[30px] bg-black text-white px-6 py-5 shadow-2xl">

          {/* Glow */}
          <div className="absolute inset-0 opacity-20">

            <div className="absolute top-0 left-0 w-40 h-40 bg-pink-500 blur-3xl rounded-full"></div>

            <div className="absolute right-0 top-0 w-40 h-40 bg-purple-500 blur-3xl rounded-full"></div>
          </div>

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-4">

            <div className="flex items-center gap-3">

              <Sparkles className="text-pink-400" />

              <p className="tracking-wide text-sm md:text-base">
                Summer Sale Live — Flat 30% OFF Premium Collections
              </p>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-300">

              <div className="flex items-center gap-2">
                <Truck size={16} />
                Free Shipping
              </div>

              <div className="flex items-center gap-2">
                <ShieldCheck size={16} />
                Secure Checkout
              </div>
            </div>
          </div>
        </section>

        {/* 🌸 HERO */}
        <Hero />

        {/* 💎 TRUST SECTION */}
        <section className="max-w-7xl mx-auto">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              {
                icon: Truck,
                title: "Free Delivery",
                desc: "Fast delivery across India",
                color: "bg-pink-100 text-pink-600",
              },

              {
                icon: ShieldCheck,
                title: "Secure Payment",
                desc: "100% protected checkout",
                color: "bg-purple-100 text-purple-600",
              },

              {
                icon: BadgeCheck,
                title: "Premium Quality",
                desc: "Luxury fashion products",
                color: "bg-indigo-100 text-indigo-600",
              },

              {
                icon: HeartHandshake,
                title: "Easy Returns",
                desc: "Simple return process",
                color: "bg-rose-100 text-rose-600",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-gray-100
                  bg-white/80
                  backdrop-blur-xl
                  p-8
                  shadow-sm
                  hover:shadow-2xl
                  transition-all
                  duration-500
                  hover:-translate-y-2
                "
              >

                <div className="absolute top-0 right-0 w-32 h-32 bg-pink-100/30 rounded-full blur-3xl"></div>

                <div className="relative">

                  <div
                    className={`
                      w-16
                      h-16
                      rounded-3xl
                      flex
                      items-center
                      justify-center
                      mb-6
                      ${item.color}
                    `}
                  >
                    <item.icon size={28} />
                  </div>

                  <h3 className="text-xl font-bold mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 🧭 CATEGORY SECTION */}
        <section className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-16">

            <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 px-5 py-2 rounded-full text-sm font-medium mb-5">
              <Crown size={16} />
              Explore Categories
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-5">
              Shop by
              <span className="block bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Luxury Categories
              </span>
            </h2>

            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Discover curated premium fashion collections designed
              for elegance, confidence, and timeless style.
            </p>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {categories.map((c, i) => (
              <Link
                key={i}
                href="/shop"
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[35px]
                  shadow-xl
                  h-[380px]
                "
              >

                {/* Image */}
                <Image
                  src={c.img}
                  alt={c.name}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">

                  <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl flex items-center justify-center mb-5">
                    <Gem className="text-pink-200" />
                  </div>

                  <h3 className="text-2xl font-bold mb-2">
                    {c.name}
                  </h3>

                  <p className="text-white/70 text-sm mb-5">
                    {c.desc}
                  </p>

                  <div className="inline-flex items-center gap-2 font-medium">
                    Explore

                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 🔥 NEW ARRIVALS */}
        <section className="max-w-7xl mx-auto">

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">

            <div>

              <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-5 py-2 rounded-full text-sm font-medium mb-5">
                <Sparkles size={16} />
                Latest Collection
              </div>

              <h2 className="text-4xl md:text-5xl font-black mb-4">
                New Arrivals ✨
              </h2>

              <p className="text-gray-500 max-w-xl">
                Fresh premium collections crafted with elegance and luxury aesthetics.
              </p>
            </div>

            <Link
              href="/shop"
              className="
                group
                inline-flex
                items-center
                gap-2
                bg-black
                text-white
                px-7
                py-4
                rounded-2xl
                hover:bg-pink-600
                transition
              "
            >
              View Collection

              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition"
              />
            </Link>
          </div>

          {/* Products */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {products.slice(0, 4).map((p) => (
              <div
                key={p.id}
                className="
                  group
                  hover:-translate-y-3
                  transition-all
                  duration-500
                "
              >
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </section>

        {/* 🌟 PROMO SECTION */}
        <section className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-8">

            {/* CARD 1 */}
            <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-pink-100 to-rose-100 p-10 md:p-14 shadow-xl">

              <div className="absolute top-0 right-0 w-60 h-60 bg-pink-300/30 rounded-full blur-3xl"></div>

              <div className="relative">

                <div className="inline-flex items-center gap-2 bg-white px-5 py-2 rounded-full text-sm font-medium text-pink-600 mb-6">
                  <Sparkles size={16} />
                  Elegant Essentials
                </div>

                <h3 className="text-4xl font-black mb-5">
                  Everyday Fashion
                  <span className="block text-pink-600">
                    Premium Touch
                  </span>
                </h3>

                <p className="text-gray-600 leading-relaxed mb-8 max-w-md">
                  Discover minimalist luxury outfits designed for
                  modern women who love elegance.
                </p>

                <Link
                  href="/shop"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    bg-black
                    text-white
                    px-7
                    py-4
                    rounded-2xl
                    hover:bg-pink-600
                    transition
                  "
                >
                  Shop Now

                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-purple-100 to-indigo-100 p-10 md:p-14 shadow-xl">

              <div className="absolute top-0 right-0 w-60 h-60 bg-purple-300/30 rounded-full blur-3xl"></div>

              <div className="relative">

                <div className="inline-flex items-center gap-2 bg-white px-5 py-2 rounded-full text-sm font-medium text-purple-600 mb-6">
                  <Crown size={16} />
                  Luxury Collection
                </div>

                <h3 className="text-4xl font-black mb-5">
                  Redefine Modern
                  <span className="block text-purple-600">
                    Elegance
                  </span>
                </h3>

                <p className="text-gray-600 leading-relaxed mb-8 max-w-md">
                  Statement luxury collections inspired by timeless beauty and confidence.
                </p>

                <Link
                  href="/shop"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    bg-black
                    text-white
                    px-7
                    py-4
                    rounded-2xl
                    hover:bg-purple-600
                    transition
                  "
                >
                  Explore Collection

                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 🔥 FEATURED PRODUCTS */}
        <section className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-14">

            <div>

              <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-600 px-5 py-2 rounded-full text-sm font-medium mb-5">
                <Star size={16} />
                Featured Products
              </div>

              <h2 className="text-4xl md:text-5xl font-black">
                Trending Fashion
              </h2>
            </div>

            <Link
              href="/shop"
              className="
                group
                inline-flex
                items-center
                gap-2
                text-pink-600
                font-semibold
              "
            >
              View All Products

              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition"
              />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {products.slice(0, 8).map((p) => (
              <div
                key={p.id}
                className="group hover:-translate-y-3 transition-all duration-500"
              >
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </section>

        {/* 👗 STORY SECTION */}
        <section className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* IMAGE */}
            <div className="relative h-[600px] rounded-[40px] overflow-hidden shadow-2xl">

              <Image
                src="/style.jpg"
                alt="Fashion Style"
                fill
                className="object-cover hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

              <div className="absolute bottom-8 left-8 right-8 bg-white/10 border border-white/20 backdrop-blur-xl rounded-3xl p-6 text-white">

                <h3 className="text-2xl font-bold mb-2">
                  Crafted for Confidence
                </h3>

                <p className="text-white/70">
                  Luxury aesthetics blended with modern fashion elegance.
                </p>
              </div>
            </div>

            {/* CONTENT */}
            <div>

              <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 px-5 py-2 rounded-full text-sm font-medium mb-6">
                <Gem size={16} />
                Our Fashion Story
              </div>

              <h2 className="text-5xl font-black leading-tight mb-6">
                Fashion Crafted
                <span className="block bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  With Elegance
                </span>
              </h2>

              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                Our collections blend modern trends with timeless sophistication,
                creating fashion experiences that inspire confidence and individuality.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-10">

                <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-4xl font-black text-pink-600">
                    25K+
                  </h3>

                  <p className="text-gray-500 mt-2">
                    Happy Customers
                  </p>
                </div>

                <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-4xl font-black text-purple-600">
                    500+
                  </h3>

                  <p className="text-gray-500 mt-2">
                    Premium Products
                  </p>
                </div>
              </div>

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
                  transition
                "
              >
                Explore Collection

                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* 📸 GALLERY */}
        <section className="max-w-7xl mx-auto">

          <div className="text-center mb-14">

            <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-600 px-5 py-2 rounded-full text-sm font-medium mb-5">
              <Sparkles size={16} />
              Style Inspiration
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-5">
              Fashion Gallery 📸
            </h2>

            <p className="text-gray-500 max-w-2xl mx-auto">
              Discover premium fashion inspiration curated with modern elegance.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

            {gallery.map((img, i) => (
              <div
                key={i}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[30px]
                  h-[280px]
                  shadow-xl
                "
              >

                <Image
                  src={img}
                  alt="Fashion"
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition"></div>
              </div>
            ))}
          </div>
        </section>

        {/* 💬 TESTIMONIAL */}
        <section className="relative overflow-hidden rounded-[40px] bg-black text-white py-24 px-8 shadow-2xl">

          {/* Glow */}
          <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-pink-500/20 blur-3xl rounded-full"></div>

          <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-purple-500/20 blur-3xl rounded-full"></div>

          <div className="relative max-w-4xl mx-auto text-center">

            <div className="flex justify-center gap-1 mb-6">

              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className="text-yellow-400 fill-yellow-400"
                  size={22}
                />
              ))}
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-8">
              Loved by Thousands 💖
            </h2>

            <p className="text-xl text-gray-300 italic leading-relaxed">
              “NextGrid HerStyle is more than fashion — it’s elegance,
              confidence, and modern luxury beautifully crafted for women.”
            </p>

            <div className="mt-10">
              <h3 className="font-bold text-lg">
                Sophia Williams
              </h3>

              <p className="text-gray-500 text-sm">
                Fashion Enthusiast
              </p>
            </div>
          </div>
        </section>

        {/* 🚀 CTA */}
        <section className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-700 py-24 px-8 shadow-2xl">

          {/* Glow */}
          <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-white/10 blur-3xl rounded-full"></div>

          <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-white/10 blur-3xl rounded-full"></div>

          <div className="relative max-w-4xl mx-auto text-center text-white">

            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-xl px-5 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles size={16} />
              Luxury Fashion Experience
            </div>

            <h2 className="text-5xl md:text-6xl font-black leading-tight mb-6">
              Elevate Your
              <span className="block">
                Wardrobe Today
              </span>
            </h2>

            <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              Explore premium luxury collections crafted with timeless elegance
              and modern sophistication.
            </p>

            <Link
              href="/shop"
              className="
                inline-flex
                items-center
                gap-2
                bg-white
                text-pink-600
                px-10
                py-5
                rounded-2xl
                text-lg
                font-semibold
                shadow-2xl
                hover:scale-105
                transition-all
                duration-300
              "
            >
              Shop Collection

              <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
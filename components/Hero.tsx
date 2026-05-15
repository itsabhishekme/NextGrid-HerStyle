"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Heart,
  Play,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Truck,
  BadgeCheck,
  Gem,
  Clock3,
} from "lucide-react";

type Slide = {
  id: number;
  title: string;
  subtitle: string;
  desc: string;
  image: string;
  badge: string;
  button: string;
  stats: string;
};

const slides: Slide[] = [
  {
    id: 1,
    title: "Luxury Fashion",
    subtitle: "Designed For Modern Women ✨",
    desc: "Discover timeless collections crafted with elegance, confidence, and premium aesthetics for every season.",

    image: "/hero-model.jpg",

    badge: "New Collection",

    button: "Explore Collection",

    stats: "20K+ Happy Customers",
  },

  {
    id: 2,
    title: "Elegant Comfort",
    subtitle: "Where Style Meets Luxury 💎",
    desc: "Premium outfits tailored with comfort, beauty, and modern trends for confident everyday styling.",

    image: "/hero2.jpg",

    badge: "Trending Styles",

    button: "Shop Trending",

    stats: "15K+ Orders Delivered",
  },

  {
    id: 3,
    title: "Premium Wardrobe",
    subtitle: "Fashion Beyond Expectations 👗",
    desc: "Elevate your wardrobe with curated luxury fashion collections inspired by elegance and confidence.",

    image: "/hero3.jpg",

    badge: "Best Sellers",

    button: "View Best Sellers",

    stats: "Top Rated Fashion Brand",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const [paused, setPaused] = useState(false);

  const [loaded, setLoaded] = useState(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const slide = slides[current];

  // ✅ AUTO SLIDER
  useEffect(() => {
    if (paused) return;

    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [paused]);

  // ✅ PAGE LOAD ANIMATION
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-[45px]
        border
        border-white/10
        mt-8
        shadow-[0_25px_80px_rgba(0,0,0,0.25)]
      "
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >

      {/* 🌈 BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-600 via-purple-700 to-indigo-800" />

      {/* 🌌 OVERLAY */}
      <div className="absolute inset-0 bg-black/20" />

      {/* ✨ GRID PATTERN */}
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]" />

      {/* 🌸 GLOW EFFECTS */}
      <div className="absolute top-[-120px] left-[-120px] w-[450px] h-[450px] rounded-full bg-pink-300 opacity-20 blur-3xl animate-pulse" />

      <div className="absolute bottom-[-140px] right-[-140px] w-[450px] h-[450px] rounded-full bg-purple-400 opacity-20 blur-3xl animate-pulse" />

      <div className="absolute top-[40%] left-[50%] w-[280px] h-[280px] rounded-full bg-indigo-300 opacity-10 blur-3xl" />

      {/* 🌟 FLOATING CARDS */}
      <div className="absolute top-12 left-12 hidden xl:flex items-center gap-3 bg-white/10 border border-white/20 backdrop-blur-2xl px-5 py-4 rounded-2xl text-white shadow-xl animate-float">

        <Sparkles size={18} className="text-yellow-300" />

        <div>
          <h4 className="font-semibold">
            Premium Collection
          </h4>

          <p className="text-xs text-white/70">
            New arrivals every week
          </p>
        </div>
      </div>

      <div className="absolute top-16 right-16 hidden xl:flex items-center gap-3 bg-white/10 border border-white/20 backdrop-blur-2xl px-5 py-4 rounded-2xl text-white shadow-xl animate-float delay-300">

        <Star
          size={18}
          className="text-yellow-300 fill-yellow-300"
        />

        <div>
          <h4 className="font-semibold">
            Rated 4.9/5
          </h4>

          <p className="text-xs text-white/70">
            Trusted by thousands
          </p>
        </div>
      </div>

      {/* 🌿 MAIN CONTENT */}
      <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center px-8 md:px-14 lg:px-20 py-16 lg:py-24">

        {/* ✨ LEFT CONTENT */}
        <div
          key={slide.id}
          className={`
            text-white
            transition-all
            duration-700
            ${
              loaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }
          `}
        >

          {/* BADGE */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-xl px-5 py-2 rounded-full text-sm font-medium mb-7 shadow-lg">

            <Sparkles
              size={16}
              className="text-yellow-300"
            />

            {slide.badge}
          </div>

          {/* SUBTITLE */}
          <p className="uppercase tracking-[5px] text-pink-100 text-sm font-medium mb-4">
            Premium Women's Fashion
          </p>

          {/* TITLE */}
          <h1 className="text-5xl md:text-6xl xl:text-7xl font-black leading-tight mb-6">

            <span className="block">
              {slide.title}
            </span>

            <span className="block bg-gradient-to-r from-pink-100 via-white to-indigo-100 bg-clip-text text-transparent">
              {slide.subtitle}
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed mb-10">
            {slide.desc}
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-5 items-center mb-10">

            {/* PRIMARY BUTTON */}
            <Link
              href="/shop"
              className="
                group
                relative
                overflow-hidden
                bg-white
                text-pink-600
                px-8
                py-4
                rounded-2xl
                font-semibold
                shadow-2xl
                hover:scale-105
                transition-all
                duration-300
              "
            >
              <span className="relative flex items-center gap-2">
                <ShoppingBag size={18} />

                {slide.button}

                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />
              </span>
            </Link>

            {/* SECONDARY BUTTON */}
            <button
              className="
                group
                flex
                items-center
                gap-3
                border
                border-white/20
                bg-white/10
                backdrop-blur-xl
                px-7
                py-4
                rounded-2xl
                hover:bg-white
                hover:text-pink-600
                transition-all
                duration-300
              "
            >

              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-pink-100 transition">
                <Play size={16} className="ml-1" />
              </div>

              Watch Lookbook
            </button>
          </div>

          {/* FEATURES */}
          <div className="flex flex-wrap gap-4 mb-12">

            <div className="flex items-center gap-3 bg-white/10 border border-white/20 backdrop-blur-xl px-5 py-3 rounded-2xl">
              <Truck size={20} className="text-pink-200" />

              <span className="text-sm font-medium">
                Free Shipping
              </span>
            </div>

            <div className="flex items-center gap-3 bg-white/10 border border-white/20 backdrop-blur-xl px-5 py-3 rounded-2xl">
              <ShieldCheck
                size={20}
                className="text-green-300"
              />

              <span className="text-sm font-medium">
                Secure Checkout
              </span>
            </div>

            <div className="flex items-center gap-3 bg-white/10 border border-white/20 backdrop-blur-xl px-5 py-3 rounded-2xl">
              <BadgeCheck
                size={20}
                className="text-yellow-300"
              />

              <span className="text-sm font-medium">
                Premium Quality
              </span>
            </div>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

            <div className="bg-white/10 border border-white/20 backdrop-blur-xl rounded-3xl p-5 shadow-lg">
              <h3 className="text-3xl font-black">
                25K+
              </h3>

              <p className="text-sm text-white/70 mt-2">
                Happy Customers
              </p>
            </div>

            <div className="bg-white/10 border border-white/20 backdrop-blur-xl rounded-3xl p-5 shadow-lg">
              <h3 className="text-3xl font-black">
                500+
              </h3>

              <p className="text-sm text-white/70 mt-2">
                Fashion Products
              </p>
            </div>

            <div className="bg-white/10 border border-white/20 backdrop-blur-xl rounded-3xl p-5 shadow-lg">
              <h3 className="text-3xl font-black">
                4.9★
              </h3>

              <p className="text-sm text-white/70 mt-2">
                Customer Rating
              </p>
            </div>

            <div className="bg-white/10 border border-white/20 backdrop-blur-xl rounded-3xl p-5 shadow-lg">
              <h3 className="text-3xl font-black">
                24/7
              </h3>

              <p className="text-sm text-white/70 mt-2">
                Support Team
              </p>
            </div>
          </div>
        </div>

        {/* 🌸 RIGHT SIDE */}
        <div className="relative hidden lg:block">

          {/* IMAGE CARD */}
          <div className="relative h-[760px] rounded-[45px] overflow-hidden border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">

            <Image
              key={slide.image}
              src={slide.image}
              alt="Fashion Model"
              fill
              priority
              className="object-cover transition-all duration-700 hover:scale-105"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

            {/* BADGE */}
            <div className="absolute top-6 left-6 bg-white/10 border border-white/20 backdrop-blur-xl rounded-2xl px-5 py-3 text-white shadow-lg">

              <div className="flex items-center gap-3">

                <Gem size={18} className="text-pink-200" />

                <div>
                  <p className="text-xs text-white/70">
                    Luxury Fashion
                  </p>

                  <h4 className="font-semibold">
                    Premium Quality
                  </h4>
                </div>
              </div>
            </div>

            {/* BOTTOM INFO CARD */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/10 border border-white/20 backdrop-blur-2xl rounded-3xl p-6 shadow-2xl">

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-white/70 text-sm mb-1">
                    Fashion Insights
                  </p>

                  <h3 className="text-white text-2xl font-bold">
                    {slide.stats}
                  </h3>
                </div>

                <div className="w-16 h-16 rounded-2xl bg-white text-pink-600 flex items-center justify-center shadow-lg">
                  <Sparkles size={26} />
                </div>
              </div>
            </div>
          </div>

          {/* FLOATING MINI CARD */}
          <div className="absolute -left-10 bottom-20 bg-white rounded-3xl shadow-2xl p-5 w-64 animate-float">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl bg-pink-100 flex items-center justify-center">
                <Heart className="text-pink-600 fill-pink-600" />
              </div>

              <div>
                <h4 className="font-bold text-gray-900">
                  Loved By Customers
                </h4>

                <p className="text-sm text-gray-500">
                  Thousands trust our collections
                </p>
              </div>
            </div>
          </div>

          {/* EXTRA FLOATING CARD */}
          <div className="absolute -right-8 top-20 bg-white rounded-3xl shadow-2xl p-5 w-56 animate-float delay-500">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl bg-indigo-100 flex items-center justify-center">
                <Clock3 className="text-indigo-600" />
              </div>

              <div>
                <h4 className="font-bold text-gray-900">
                  Fast Delivery
                </h4>

                <p className="text-sm text-gray-500">
                  Quick shipping worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🔘 DOTS */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">

        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setCurrent(i)}
            className={`
              transition-all
              duration-300
              rounded-full
              ${
                current === i
                  ? "w-12 h-3 bg-white"
                  : "w-3 h-3 bg-white/40 hover:bg-white/70"
              }
            `}
          />
        ))}
      </div>

      {/* ⬅️ PREVIOUS */}
      <button
        aria-label="Previous Slide"
        onClick={() =>
          setCurrent((prev) =>
            prev === 0
              ? slides.length - 1
              : prev - 1
          )
        }
        className="
          absolute
          left-5
          top-1/2
          -translate-y-1/2
          w-14
          h-14
          rounded-full
          bg-white/10
          border
          border-white/20
          backdrop-blur-xl
          text-white
          flex
          items-center
          justify-center
          hover:bg-white
          hover:text-pink-600
          transition-all
          duration-300
        "
      >
        <ChevronLeft size={24} />
      </button>

      {/* ➡️ NEXT */}
      <button
        aria-label="Next Slide"
        onClick={() =>
          setCurrent((prev) =>
            (prev + 1) % slides.length
          )
        }
        className="
          absolute
          right-5
          top-1/2
          -translate-y-1/2
          w-14
          h-14
          rounded-full
          bg-white/10
          border
          border-white/20
          backdrop-blur-xl
          text-white
          flex
          items-center
          justify-center
          hover:bg-white
          hover:text-pink-600
          transition-all
          duration-300
        "
      >
        <ChevronRight size={24} />
      </button>

      {/* 🔽 SCROLL INDICATOR */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/70 text-xs tracking-[4px] uppercase animate-bounce">

        <span>Scroll</span>

        <div className="w-[1px] h-6 bg-white/50"></div>
      </div>
    </section>
  );
}
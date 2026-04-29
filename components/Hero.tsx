"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const slides = [
  {
    title: "Elevate Your Style ✨",
    desc: "Discover premium women’s fashion curated for elegance and confidence.",
    image: "/hero-model.jpg",
    badge: "New Collection 🔥",
  },
  {
    title: "Luxury Meets Comfort 💎",
    desc: "Experience fashion that blends elegance with everyday comfort.",
    image: "/hero2.jpg",
    badge: "Trending Now ⚡",
  },
  {
    title: "Redefine Your Wardrobe 👗",
    desc: "Step into confidence with our latest curated styles.",
    image: "/hero3.jpg",
    badge: "Best Sellers 💖",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // ✅ Safe Auto Slide
  useEffect(() => {
    if (paused) return;

    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused]);

  const slide = slides[current];

  return (
    <section
      className="relative overflow-hidden rounded-3xl mt-6"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >

      {/* 🌈 BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 opacity-95" />

      {/* ✨ GLOW */}
      <div className="absolute top-[-100px] left-[-100px] w-80 h-80 bg-pink-300 opacity-20 blur-3xl rounded-full" />
      <div className="absolute bottom-[-120px] right-[-120px] w-80 h-80 bg-purple-300 opacity-20 blur-3xl rounded-full" />

      {/* 🌸 CONTENT */}
      <div className="relative z-10 grid md:grid-cols-2 items-center gap-10 p-8 md:p-16 text-white">

        {/* TEXT */}
        <div key={current} className="animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {slide.title}
          </h1>

          <p className="text-lg text-white/90 mb-6 max-w-lg">
            {slide.desc}
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/shop"
              className="bg-white text-pink-600 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition shadow-lg"
            >
              Shop Now
            </Link>

            <Link
              href="/about"
              className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-pink-600 transition"
            >
              Learn More
            </Link>
          </div>

          {/* TRUST */}
          <div className="flex gap-4 mt-6 text-sm text-white/80 flex-wrap">
            <span>🚚 Free Delivery</span>
            <span>💳 Secure Payment</span>
            <span>↩️ Easy Returns</span>
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative hidden md:block">
          <div className="relative w-full h-[420px] rounded-3xl overflow-hidden shadow-xl">
            <Image
              key={slide.image}
              src={slide.image}
              alt="Fashion model"
              fill
              priority
              className="object-cover transition duration-700"
            />
          </div>

          {/* BADGE */}
          <div className="absolute bottom-4 left-4 bg-white text-pink-600 px-4 py-2 rounded-xl shadow-md text-sm font-semibold">
            {slide.badge}
          </div>
        </div>
      </div>

      {/* 🔘 DOTS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition ${
              current === i ? "bg-white scale-125" : "bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* ⬅️➡️ NAV */}
      <button
        aria-label="Previous Slide"
        onClick={() =>
          setCurrent((prev) =>
            prev === 0 ? slides.length - 1 : prev - 1
          )
        }
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md px-3 py-2 rounded-full hover:bg-white/30 transition"
      >
        ←
      </button>

      <button
        aria-label="Next Slide"
        onClick={() =>
          setCurrent((prev) => (prev + 1) % slides.length)
        }
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md px-3 py-2 rounded-full hover:bg-white/30 transition"
      >
        →
      </button>

      {/* 🔽 SCROLL */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white text-xs animate-bounce">
        ↓ Scroll
      </div>
    </section>
  );
}
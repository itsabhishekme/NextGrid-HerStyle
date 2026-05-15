"use client";

import { ArrowUp } from "lucide-react";

export default function FloatingButtons() {
  return (
    <>
      {/* 🛍️ SHOP BUTTON */}
      <button
        className="
          fixed
          bottom-6
          right-6
          z-50
          group
          bg-gradient-to-r
          from-pink-600
          to-purple-600
          text-white
          p-4
          rounded-full
          shadow-2xl
          hover:scale-110
          transition-all
          duration-300
        "
        aria-label="Shop Now"
      >
        <div className="absolute inset-0 rounded-full bg-pink-500 blur-xl opacity-40 group-hover:opacity-70 transition"></div>

        <div className="relative flex items-center justify-center text-2xl">
          🛍️
        </div>
      </button>

      {/* ⬆️ SCROLL TO TOP */}
      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="
          fixed
          bottom-24
          right-6
          z-50
          w-12
          h-12
          rounded-full
          bg-white
          border
          border-gray-200
          shadow-lg
          hover:shadow-2xl
          hover:-translate-y-1
          transition-all
          duration-300
          flex
          items-center
          justify-center
        "
        aria-label="Scroll To Top"
      >
        <ArrowUp size={20} />
      </button>
    </>
  );
}
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const cartCount = 2; // replace with Zustand later

  // 🔥 Scroll Effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔒 Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-lg"
            : "bg-white shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

          {/* 🌸 LOGO */}
          <Link
            href="/"
            className="text-2xl font-bold text-pink-600 tracking-wide"
          >
            NextGrid HerStyle
          </Link>

          {/* 🧭 DESKTOP */}
          <div className="hidden md:flex items-center gap-8 font-medium">

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative hover:text-pink-600 transition ${
                  pathname === link.href ? "text-pink-600" : ""
                }`}
              >
                {link.name}
                {pathname === link.href && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-pink-600 rounded"></span>
                )}
              </Link>
            ))}

            {/* 🔍 SEARCH */}
            <div className="relative">
              <input
                placeholder="Search..."
                className="px-3 py-1 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            {/* ❤️ Wishlist */}
            <button
              aria-label="Wishlist"
              className="text-lg hover:text-pink-600 transition"
            >
              ❤️
            </button>

            {/* 🛍️ CART */}
            <Link href="/cart" className="relative">
              🛒
              <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs px-1.5 rounded-full">
                {cartCount}
              </span>
            </Link>
          </div>

          {/* 📱 MOBILE BUTTON */}
          <button
            aria-label="Toggle Menu"
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* 📱 MOBILE OVERLAY */}
      {menuOpen && (
        <div className="fixed inset-0 z-50">

          {/* BACKDROP */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMenuOpen(false)}
          />

          {/* MENU PANEL */}
          <div className="absolute right-0 top-0 h-full w-72 bg-white shadow-xl p-6 flex flex-col gap-6 animate-slideIn">

            {/* CLOSE */}
            <button
              className="text-right text-xl"
              onClick={() => setMenuOpen(false)}
            >
              ✕
            </button>

            {/* LINKS */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-lg font-medium hover:text-pink-600"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/cart"
              onClick={() => setMenuOpen(false)}
              className="text-lg"
            >
              Cart 🛒 ({cartCount})
            </Link>

            {/* SEARCH */}
            <input
              placeholder="Search..."
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}
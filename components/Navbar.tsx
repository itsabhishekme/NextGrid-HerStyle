"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  ShoppingCart,
  Heart,
  Search,
  Menu,
  X,
  User,
  ChevronDown,
  Sparkles,
} from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const pathname = usePathname();

  // 🛒 Demo cart count
  const cartCount = 2;

  // 🌟 Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔒 Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  // 🧭 Navigation Links
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Collections", href: "/collections" },
    { name: "New Arrivals", href: "/new-arrivals" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>


      {/* 🌟 MAIN NAVBAR */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-2xl shadow-2xl border-b border-pink-100"
            : "bg-white shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* 🌸 LOGO */}
            <Link
              href="/"
              className="flex items-center gap-3 group"
            >
              {/* LOGO IMAGE */}
              <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-lg border border-pink-100 group-hover:scale-110 transition duration-300 bg-white">
                <Image
                  src="/favicon.ico"
                  alt="Logo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* BRAND TEXT */}
              <div>
                <h1 className="text-2xl font-black tracking-tight bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                  NextGrid
                </h1>

                <p className="text-xs text-gray-500 -mt-1 tracking-[3px] uppercase">
                  HerStyle
                </p>
              </div>
            </Link>

            {/* 🖥️ DESKTOP NAV */}
            <div className="hidden lg:flex items-center gap-8">

              {/* LINKS */}
              <div className="flex items-center gap-7 font-medium">
                {navLinks.map((link) => {
                  const active = pathname === link.href;

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`relative transition-all duration-300 hover:text-pink-600 group ${
                        active
                          ? "text-pink-600"
                          : "text-gray-700"
                      }`}
                    >
                      <span className="flex items-center gap-1">
                        {link.name}

                        {link.name === "Collections" && (
                          <ChevronDown size={15} />
                        )}
                      </span>

                      <span
                        className={`absolute left-0 -bottom-2 h-[2px] bg-pink-600 transition-all duration-300 rounded-full ${
                          active
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                        }`}
                      />
                    </Link>
                  );
                })}
              </div>

              {/* 🔍 SEARCH */}
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  searchOpen
                    ? "w-72"
                    : "w-11"
                }`}
              >
                <div className="flex items-center bg-gray-100 border border-gray-200 rounded-full px-3 py-2 hover:border-pink-300 transition">
                  <Search
                    size={18}
                    className="text-gray-500 cursor-pointer"
                    onClick={() => setSearchOpen(!searchOpen)}
                  />

                  <input
                    type="text"
                    placeholder="Search products..."
                    className={`bg-transparent outline-none text-sm ml-2 w-full transition-all ${
                      searchOpen
                        ? "opacity-100"
                        : "opacity-0 w-0"
                    }`}
                  />
                </div>
              </div>

              {/* ❤️ 🛒 👤 */}
              <div className="flex items-center gap-5">

                {/* USER */}
                <button className="relative hover:text-pink-600 transition">
                  <User size={22} />
                </button>

                {/* WISHLIST */}
                <button className="relative hover:text-pink-600 transition">
                  <Heart size={22} />

                  <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-pink-600 text-white text-[10px] flex items-center justify-center">
                    3
                  </span>
                </button>

                {/* CART */}
                <Link
                  href="/cart"
                  className="relative hover:text-pink-600 transition"
                >
                  <ShoppingCart size={23} />

                  <span className="absolute -top-2 -right-2 min-w-[20px] h-5 px-1 rounded-full bg-gradient-to-r from-pink-600 to-rose-500 text-white text-[10px] flex items-center justify-center shadow-md">
                    {cartCount}
                  </span>
                </Link>

                {/* BUTTON */}
                <Link
                  href="/shop"
                  className="bg-gradient-to-r from-pink-600 to-rose-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg hover:scale-105 hover:shadow-pink-300 transition duration-300"
                >
                  Shop Now
                </Link>
              </div>
            </div>

            {/* 📱 MOBILE BUTTON */}
            <button
              aria-label="Toggle Menu"
              className="lg:hidden p-2 rounded-lg hover:bg-pink-50 transition"
              onClick={() => setMenuOpen(true)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* 📱 MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-[999]">

          {/* BACKDROP */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />

          {/* SIDEBAR */}
          <div className="absolute top-0 right-0 w-[85%] max-w-sm h-full bg-white shadow-2xl overflow-y-auto animate-slideIn">

            {/* HEADER */}
            <div className="flex items-center justify-between p-6 border-b">
              <div className="flex items-center gap-3">

                {/* MOBILE LOGO */}
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-pink-100 shadow-md">
                  <Image
                    src="/favicon.ico"
                    alt="Logo"
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h2 className="text-2xl font-black text-pink-600">
                    NextGrid
                  </h2>

                  <p className="text-xs text-gray-500 tracking-[4px] uppercase">
                    HerStyle
                  </p>
                </div>
              </div>

              <button
                onClick={() => setMenuOpen(false)}
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-pink-100 transition"
              >
                <X size={22} />
              </button>
            </div>

            {/* SEARCH */}
            <div className="p-6 border-b">
              <div className="flex items-center bg-gray-100 rounded-xl px-4 py-3 border border-gray-200">
                <Search size={18} className="text-gray-500" />

                <input
                  type="text"
                  placeholder="Search products..."
                  className="bg-transparent outline-none ml-3 text-sm w-full"
                />
              </div>
            </div>

            {/* LINKS */}
            <div className="flex flex-col p-6 gap-2">
              {navLinks.map((link) => {
                const active = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-4 rounded-2xl font-medium transition-all duration-300 ${
                      active
                        ? "bg-gradient-to-r from-pink-600 to-rose-500 text-white shadow-lg"
                        : "hover:bg-pink-50 text-gray-700"
                    }`}
                  >
                    {link.name}

                    <ChevronDown
                      size={18}
                      className={`transition ${
                        active
                          ? "rotate-180"
                          : ""
                      }`}
                    />
                  </Link>
                );
              })}
            </div>

            {/* ACTIONS */}
            <div className="p-6 border-t mt-4">

              <div className="grid grid-cols-3 gap-4">

                {/* ACCOUNT */}
                <button className="flex flex-col items-center justify-center bg-gray-100 rounded-2xl py-4 hover:bg-pink-50 transition">
                  <User size={22} />
                  <span className="text-xs mt-2">Account</span>
                </button>

                {/* WISHLIST */}
                <button className="flex flex-col items-center justify-center bg-gray-100 rounded-2xl py-4 hover:bg-pink-50 transition relative">
                  <Heart size={22} />

                  <span className="absolute top-2 right-3 w-5 h-5 rounded-full bg-pink-600 text-white text-[10px] flex items-center justify-center">
                    3
                  </span>

                  <span className="text-xs mt-2">Wishlist</span>
                </button>

                {/* CART */}
                <Link
                  href="/cart"
                  onClick={() => setMenuOpen(false)}
                  className="flex flex-col items-center justify-center bg-gray-100 rounded-2xl py-4 hover:bg-pink-50 transition relative"
                >
                  <ShoppingCart size={22} />

                  <span className="absolute top-2 right-3 w-5 h-5 rounded-full bg-pink-600 text-white text-[10px] flex items-center justify-center">
                    {cartCount}
                  </span>

                  <span className="text-xs mt-2">Cart</span>
                </Link>
              </div>

              {/* CTA */}
              <Link
                href="/shop"
                onClick={() => setMenuOpen(false)}
                className="mt-6 flex items-center justify-center w-full bg-gradient-to-r from-pink-600 to-rose-500 text-white py-4 rounded-2xl font-semibold shadow-lg hover:scale-[1.02] transition"
              >
                Explore Collection
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
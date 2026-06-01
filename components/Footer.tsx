"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  Send,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Truck,
  CreditCard,
  BadgeCheck,
  Heart,
  Clock3,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // ✅ Email Validation
  const validateEmail = (value: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  // ✅ Newsletter Submit
  const handleSubscribe = () => {
    setError("");

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setEmail("");
    }, 1500);
  };

  // 🔗 Links
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Collections", href: "/collections" },
    { name: "New Arrivals", href: "/new-arrivals" },
    { name: "Trending", href: "/trending" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const customerLinks = [
    { name: "My Account", href: "#" },
    { name: "Wishlist", href: "#" },
    { name: "Track Order", href: "#" },
    { name: "Shipping Info", href: "#" },
    { name: "Return Policy", href: "#" },
    { name: "Exchange Policy", href: "#" },
    { name: "FAQs", href: "#" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Refund Policy", href: "#" },
    { name: "Cookies Policy", href: "#" },
    { name: "Security", href: "#" },
  ];

  return (
    <footer className="relative mt-32 overflow-hidden bg-black text-gray-300">

      {/* 🌈 BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] rounded-full bg-pink-600/20 blur-3xl"></div>

        <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] rounded-full bg-purple-600/20 blur-3xl"></div>

        <div className="absolute top-[40%] left-[40%] w-[250px] h-[250px] rounded-full bg-indigo-600/10 blur-3xl"></div>
      </div>

      {/* ✨ TOP FEATURE STRIP */}
      <div className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-8">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-xl">
              <Truck className="text-pink-500" size={28} />

              <div>
                <h3 className="font-semibold text-white">
                  Free Shipping
                </h3>

                <p className="text-sm text-gray-400">
                  On all orders above ₹999
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-xl">
              <ShieldCheck className="text-green-500" size={28} />

              <div>
                <h3 className="font-semibold text-white">
                  Secure Payment
                </h3>

                <p className="text-sm text-gray-400">
                  100% protected checkout
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-xl">
              <BadgeCheck className="text-yellow-500" size={28} />

              <div>
                <h3 className="font-semibold text-white">
                  Premium Quality
                </h3>

                <p className="text-sm text-gray-400">
                  Trusted fashion products
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-xl">
              <Clock3 className="text-purple-500" size={28} />

              <div>
                <h3 className="font-semibold text-white">
                  Fast Support
                </h3>

                <p className="text-sm text-gray-400">
                  24/7 customer assistance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🌟 NEWSLETTER */}
      <div className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* LEFT */}
            <div>

              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-pink-500/20 border border-pink-500/20 text-pink-400 text-sm font-medium mb-6">
                <Sparkles size={16} />
                Fashion Newsletter
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                Discover Fashion
                <span className="block bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                  Trends Before Everyone
                </span>
              </h2>

              <p className="mt-6 text-gray-400 leading-relaxed max-w-xl">
                Stay connected with the latest fashion collections,
                exclusive launches, special discounts, and styling inspiration.
              </p>
            </div>

            {/* RIGHT */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-2xl">

              {success ? (
                <div className="text-center py-8">

                  <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-5">
                    <Heart className="text-green-400" size={30} />
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-3">
                    Thank You 🎉
                  </h3>

                  <p className="text-gray-400">
                    You have successfully subscribed to our newsletter.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Subscribe Now
                  </h3>

                  <p className="text-gray-400 mb-6">
                    Get exclusive updates and premium offers directly in your inbox.
                  </p>

                  <div className="space-y-5">

                    <div>
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-pink-500 transition"
                      />

                      {error && (
                        <p className="text-red-400 text-sm mt-2">
                          {error}
                        </p>
                      )}
                    </div>

                    <button
                      onClick={handleSubscribe}
                      disabled={loading}
                      className="group w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-4 rounded-2xl font-semibold hover:scale-[1.02] transition-all duration-300 shadow-lg disabled:opacity-50"
                    >
                      <span className="flex items-center justify-center gap-2">
                        {loading ? "Subscribing..." : "Subscribe Newsletter"}

                        {!loading && (
                          <Send
                            size={18}
                            className="group-hover:translate-x-1 transition"
                          />
                        )}
                      </span>
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 🌸 MAIN FOOTER */}
      <div className="relative max-w-7xl mx-auto px-6 py-24">

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* BRAND */}
          <div className="lg:col-span-2">

            {/* LOGO */}
            <div className="flex items-center gap-4 mb-8">

              {/* FAVICON LOGO */}
              <div className="relative w-16 h-16 rounded-full overflow-hidden border border-white/10 shadow-2xl bg-white">
                <Image
                  src="/logo.png"
                  alt="NextGrid Logo"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* BRAND TEXT */}
              <div>
                <h2 className="text-3xl font-black text-white">
                  NextGrid
                </h2>

                <p className="text-xs tracking-[5px] uppercase text-pink-400">
                  HerStyle
                </p>
              </div>
            </div>

            {/* DESCRIPTION */}
            <p className="text-gray-400 leading-relaxed max-w-md">
              NextGrid HerStyle creates modern fashion experiences
              with elegance, confidence, and timeless beauty.
              Crafted for women who love style and individuality.
            </p>

            {/* CONTACT */}
            <div className="mt-10 space-y-5">

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <MapPin className="text-pink-500" size={18} />
                </div>

                <span className="text-gray-400">
                  Bangalore, Karnataka, India
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <Phone className="text-pink-500" size={18} />
                </div>

                <span className="text-gray-400">
                  +91 98765 43210
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <Mail className="text-pink-500" size={18} />
                </div>

                <span className="text-gray-400">
                  support@nextgrid.com
                </span>
              </div>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-white text-xl font-bold mb-8">
              Quick Links
            </h3>

            <ul className="space-y-5">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-gray-400 hover:text-pink-400 transition"
                  >
                    <ArrowRight
                      size={15}
                      className="group-hover:translate-x-1 transition"
                    />

                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CUSTOMER */}
          <div>
            <h3 className="text-white text-xl font-bold mb-8">
              Customer Care
            </h3>

            <ul className="space-y-5">
              {customerLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-gray-400 hover:text-pink-400 transition"
                  >
                    <ArrowRight
                      size={15}
                      className="group-hover:translate-x-1 transition"
                    />

                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h3 className="text-white text-xl font-bold mb-8">
              Legal
            </h3>

            <ul className="space-y-5">
              {legalLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-gray-400 hover:text-pink-400 transition"
                  >
                    <ArrowRight
                      size={15}
                      className="group-hover:translate-x-1 transition"
                    />

                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 💳 PAYMENT + COPYRIGHT */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-8">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

            {/* PAYMENT */}
            <div className="flex flex-wrap items-center gap-4">

              <div className="flex items-center gap-2 text-white font-medium">
                <CreditCard size={18} />
                Payment Methods:
              </div>

              {[
                "Visa",
                "MasterCard",
                "UPI",
                "Paytm",
                "Razorpay",
              ].map((item, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* COPYRIGHT */}
            <div className="text-center lg:text-right">
              <p className="text-sm text-gray-500">
                © 2026 NextGrid HerStyle. All rights reserved.
              </p>

              <p className="text-xs text-gray-600 mt-1">
                Designed with elegance & modern fashion aesthetics.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 🌈 BOTTOM LINE */}
      <div className="h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"></div>
    </footer>
  );
}
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // ✅ Email validation
  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubscribe = () => {
    setError("");

    if (!validateEmail(email)) {
      setError("Enter a valid email");
      return;
    }

    setLoading(true);

    // Simulate API
    setTimeout(() => {
      setSuccess(true);
      setLoading(false);
      setEmail("");
    }, 1200);
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-300 mt-24 overflow-hidden">

      {/* ✨ Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-100px] left-[-100px] w-72 h-72 bg-pink-500 opacity-10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-[-120px] right-[-120px] w-72 h-72 bg-purple-500 opacity-10 blur-3xl rounded-full"></div>
      </div>

      {/* 🔝 TOP */}
      <div className="relative max-w-7xl mx-auto px-6 py-16 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">

        {/* BRAND */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold text-pink-500 mb-4">
            NextGrid HerStyle
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Elevating everyday fashion with elegance and confidence.
            Designed for modern women who express themselves boldly.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-4 mt-6 text-lg">
            {["🌸", "📸", "🐦", "💼"].map((icon, i) => (
              <span
                key={i}
                className="cursor-pointer hover:text-pink-500 hover:scale-110 transition"
              >
                {icon}
              </span>
            ))}
          </div>
        </div>

        {/* SHOP */}
        <div>
          <h3 className="text-white font-semibold mb-4">Shop</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/shop" className="hover:text-pink-500">All Products</Link></li>
            <li><Link href="/shop?category=dress" className="hover:text-pink-500">Dresses</Link></li>
            <li><Link href="/shop?category=top" className="hover:text-pink-500">Tops</Link></li>
            <li><Link href="/shop?category=jackets" className="hover:text-pink-500">Jackets</Link></li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="text-white font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/contact" className="hover:text-pink-500">Help Center</Link></li>
            <li><Link href="#" className="hover:text-pink-500">Shipping</Link></li>
            <li><Link href="#" className="hover:text-pink-500">Returns</Link></li>
            <li><Link href="#" className="hover:text-pink-500">Track Order</Link></li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Stay Updated
          </h3>

          <p className="text-sm text-gray-400 mb-3">
            Get exclusive offers & trends.
          </p>

          {success ? (
            <p className="text-green-500 text-sm">
              Subscribed successfully 🎉
            </p>
          ) : (
            <>
              <div className="flex items-center bg-gray-800 rounded-xl overflow-hidden border border-gray-700">
                <input
                  type="email"
                  placeholder="Enter email"
                  aria-label="Email"
                  className="bg-transparent px-4 py-3 w-full outline-none text-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  onClick={handleSubscribe}
                  disabled={loading}
                  className="bg-pink-600 px-5 py-3 text-white text-sm hover:bg-pink-500 transition disabled:opacity-50"
                >
                  {loading ? "..." : "Subscribe"}
                </button>
              </div>

              {error && (
                <p className="text-red-500 text-xs mt-2">{error}</p>
              )}
            </>
          )}
        </div>
      </div>

      {/* 💳 PAYMENT */}
      <div className="max-w-7xl mx-auto px-6 pb-6 flex flex-wrap justify-center gap-4 text-sm text-gray-400">
        <span>💳 Visa</span>
        <span>💳 MasterCard</span>
        <span>💳 UPI</span>
        <span>💳 Paytm</span>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-800"></div>

      {/* 🔻 BOTTOM */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>© 2026 NextGrid HerStyle. All rights reserved.</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="#" className="hover:text-pink-500">Terms</Link>
          <Link href="#" className="hover:text-pink-500">Privacy</Link>
          <Link href="#" className="hover:text-pink-500">Cookies</Link>
        </div>
      </div>

      {/* 🌈 GRADIENT LINE */}
      <div className="h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"></div>
    </footer>
  );
}
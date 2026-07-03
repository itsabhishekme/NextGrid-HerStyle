import "./globals.css";

import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

import {
  Playfair_Display,
  Inter,
  Poppins,
} from "next/font/google";

import { Analytics } from "@vercel/analytics/next";

import {
  Sparkles,
  ShieldCheck,
  Truck,
  Headphones,
  Star,
  Gem,
  Crown,
  BadgeCheck,
} from "lucide-react";

// 🌸 PREMIUM DISPLAY FONT
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

// ✨ CLEAN BODY FONT
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// 🔥 MODERN UI FONT
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// 🌍 ADVANCED SEO
export const metadata: Metadata = {
  metadataBase: new URL("https://herstyle.com"),

  title: {
    default: "NextGrid HerStyle | Luxury Fashion",
    template: "%s | NextGrid HerStyle",
  },

  description:
    "Luxury women's fashion ecommerce experience crafted with premium aesthetics, elegance, and modern style.",

  keywords: [
    "women fashion",
    "luxury clothing",
    "premium fashion",
    "nextgrid herstyle",
    "designer outfits",
    "fashion ecommerce",
    "modern women clothing",

    // Women's Fashion
    "Women's Clothing",
    "Women's Apparel",
    "Women's Wear",
    "Ladies Fashion",
    "Ladies Clothing",
    "Women's Style",
    "Women's Boutique",
    "Women's Wardrobe",
    "Modern Women's Fashion",
    "Elegant Women's Clothing",
    "Stylish Women's Wear",
    "Contemporary Fashion",
    "Trendy Women's Clothing",
    "Fashion for Women",
    "Women's Outfit Ideas",
    "Women's Lifestyle",
    "Premium Women's Wear",
    "Luxury Women's Fashion",
    "Women's Clothing Brand",
    "Women's Fashion Collection",

    // Luxury Fashion
    "Luxury Clothing",
    "Luxury Fashion Brand",
    "Luxury Designer Clothing",
    "Luxury Boutique",
    "Luxury Apparel",
    "Luxury Women's Wear",
    "Premium Designer Fashion",
    "Exclusive Fashion",
    "High End Fashion",
    "Luxury Dresses",
    "Luxury Wardrobe",
    "Timeless Fashion",
    "Elegant Fashion",
    "Sophisticated Style",
    "Premium Fashion Collection",
    "Luxury Lifestyle",
    "Designer Boutique",
    "Luxury Online Store",
    "Luxury Fashion Online",
    "Luxury Fashion Trends",

    // Premium Fashion
    "Premium Clothing",
    "Premium Women's Clothing",
    "Premium Apparel",
    "Premium Fashion Brand",
    "Quality Women's Wear",
    "Fine Fashion",
    "Modern Luxury Fashion",
    "Boutique Fashion",
    "Signature Collection",
    "Exclusive Collection",
    "Fashion Essentials",
    "Capsule Wardrobe",
    "Minimalist Fashion",
    "Refined Style",
    "Luxury Basics",
    "Premium Wardrobe",
    "Curated Fashion",
    "Designer Fashion",
    "Luxury Fashion Pieces",
    "Premium Fashion Online",

    // Clothing Categories
    "Women's Dresses",
    "Maxi Dresses",
    "Midi Dresses",
    "Mini Dresses",
    "Evening Dresses",
    "Cocktail Dresses",
    "Party Wear",
    "Formal Wear",
    "Casual Wear",
    "Office Wear",
    "Workwear for Women",
    "Women's Tops",
    "Blouses",
    "Shirts for Women",
    "T-Shirts for Women",
    "Women's Jeans",
    "Women's Pants",
    "Trousers",
    "Skirts",
    "Shorts",
    "Jumpsuits",
    "Co-ord Sets",
    "Women's Jackets",
    "Blazers",
    "Sweaters",
    "Cardigans",
    "Hoodies",
    "Outerwear",
    "Loungewear",
    "Nightwear",
    "Activewear",
    "Gym Wear",
    "Yoga Clothing",
    "Swimwear",
    "Beachwear",
    "Ethnic Wear",
    "Fusion Wear",
    "Wedding Guest Dresses",
    "Bridal Fashion",
    "Festive Wear",

    // Designer Outfits
    "Designer Dresses",
    "Designer Clothing",
    "Designer Collection",
    "Runway Fashion",
    "Fashion Designer Collection",
    "Luxury Designer Outfits",
    "Boutique Dresses",
    "Couture Fashion",
    "Exclusive Designer Wear",
    "Signature Style",
    "Fashion Week Trends",
    "Celebrity Style",
    "Red Carpet Fashion",
    "Premium Designer Dresses",
    "Luxury Evening Wear",
    "Elegant Outfits",
    "Statement Pieces",
    "Fashion Forward",
    "Limited Edition Fashion",
    "Contemporary Couture",

    // Fashion Ecommerce
    "Online Fashion Store",
    "Women's Fashion Online",
    "Buy Women's Clothing Online",
    "Online Boutique",
    "Luxury Fashion Store",
    "Fashion Marketplace",
    "Ecommerce Fashion",
    "Fashion Shopping",
    "Online Clothing Store",
    "Premium Fashion Ecommerce",
    "Digital Fashion Store",
    "Fashion Retail",
    "Fashion Marketplace Online",
    "Fashion Deals",
    "New Arrivals",
    "Latest Fashion Collection",
    "Seasonal Fashion",
    "Fashion Sale",
    "Online Designer Boutique",
    "Fashion Shopping Platform",

    // Modern Women's Clothing
    "Smart Casual Fashion",
    "Minimalist Women's Fashion",
    "Chic Fashion",
    "Everyday Style",
    "Urban Fashion",
    "Street Style",
    "Classic Fashion",
    "Business Casual",
    "Elegant Office Wear",
    "Modern Wardrobe",
    "Timeless Style",
    "Seasonal Wardrobe",
    "Fashion Essentials",
    "Versatile Clothing",
    "Contemporary Women's Wear",
    "Effortless Style",
    "Everyday Luxury",
    "Modern Elegance",
    "Power Dressing",
    "Confident Style",

    // Accessories
    "Women's Handbags",
    "Luxury Bags",
    "Fashion Accessories",
    "Jewelry for Women",
    "Luxury Jewelry",
    "Women's Shoes",
    "Designer Footwear",
    "High Heels",
    "Sneakers for Women",
    "Scarves",
    "Belts",
    "Sunglasses",
    "Luxury Watches",
    "Hair Accessories",
    "Fashion Essentials",

    // Sustainable Fashion
    "Sustainable Women's Fashion",
    "Ethical Fashion",
    "Eco Friendly Clothing",
    "Organic Cotton Clothing",
    "Responsible Fashion",
    "Slow Fashion",
    "Conscious Fashion",
    "Recycled Fabrics",
    "Sustainable Luxury",
    "Green Fashion",
    "Eco Chic",
    "Ethically Made Clothing",
    "Minimal Fashion",
    "Timeless Wardrobe",
    "Sustainable Style",

    // Lifestyle
    "Fashion Inspiration",
    "Style Guide",
    "Fashion Trends",
    "Wardrobe Essentials",
    "Capsule Collection",
    "Personal Style",
    "Luxury Lifestyle",
    "Beauty and Fashion",
    "Confident Women",
    "Elegant Living",
    "Fashion Influencer",
    "Women's Lifestyle",
    "Style Inspiration",
    "Fashion Blog",
    "Fashion Community",

    // Brand Keywords
    "NextGrid HerStyle",
    "HerStyle Collection",
    "HerStyle Boutique",
    "HerStyle Fashion",
    "HerStyle Luxury",
    "HerStyle Premium",
    "HerStyle Online Store",
    "HerStyle Clothing",
    "HerStyle Designer Collection",
    "HerStyle Women's Boutique",

    "NextGrid",
    "NextGrid Fashion",
    "NextGrid Commerce",
    "NextGrid Boutique",
    "NextGrid Luxury",
    "NextGrid Marketplace",
    "NextGrid Women's Store",
    "NextGrid Fashion Collection",
    "NextGrid Ecommerce",
    "NextGrid Premium Fashion",

    // SEO & Discoverability
    "Best Women's Fashion Brand",
    "Luxury Women's Clothing Online",
    "Premium Women's Boutique",
    "Designer Fashion Online",
    "Affordable Luxury Fashion",
    "High Quality Women's Clothing",
    "Luxury Fashion Boutique",
    "Women's Clothing Sale",
    "Exclusive Women's Fashion",
    "Luxury Fashion Collection",
    "Modern Women's Boutique",
    "Premium Fashion Marketplace",
    "Women's Designer Clothing",
    "Elegant Women's Boutique",
    "Luxury Fashion Shopping"
  ],

  authors: [
    {
      name: "NextGrid HerStyle",
    },
  ],

  creator: "NextGrid HerStyle",

  publisher: "NextGrid HerStyle",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "NextGrid HerStyle",
    description:
      "Luxury fashion collections crafted for modern confident women.",

    url: "https://herstyle.com",

    siteName: "NextGrid HerStyle",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NextGrid HerStyle",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "NextGrid HerStyle",

    description:
      "Premium fashion collections crafted with elegance.",

    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`
        ${playfair.variable}
        ${inter.variable}
        ${poppins.variable}
      `}
    >
      <body
        className="
          bg-[#fafafa]
          text-gray-900
          antialiased
          overflow-x-hidden
          scroll-smooth
          font-[family:var(--font-inter)]
        "
      >

        {/* 🌈 GLOBAL BACKGROUND */}
        <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">

          {/* Pink Glow */}
          <div className="absolute top-[-140px] left-[-140px] w-[450px] h-[450px] rounded-full bg-pink-300 opacity-20 blur-3xl animate-pulse"></div>

          {/* Purple Glow */}
          <div className="absolute bottom-[-140px] right-[-140px] w-[450px] h-[450px] rounded-full bg-purple-400 opacity-20 blur-3xl animate-pulse"></div>

          {/* Indigo Glow */}
          <div className="absolute top-[35%] left-[40%] w-[260px] h-[260px] rounded-full bg-indigo-300 opacity-10 blur-3xl"></div>

          {/* Rose Glow */}
          <div className="absolute top-[70%] left-[10%] w-[220px] h-[220px] rounded-full bg-rose-300 opacity-10 blur-3xl"></div>

          {/* Gradient Mesh */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.2),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.12),transparent_30%)]"></div>
        </div>

        {/* 🔝 NAVBAR */}
        <Navbar />

        {/* 🌸 MAIN WRAPPER */}
        <div className="relative min-h-screen">

          {/* GRID PATTERN */}
          <div className="absolute inset-0 -z-10 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:90px_90px]"></div>

          {/* 🌟 TOP GRADIENT BAR */}
          <div className="h-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"></div>

          {/* 🌿 MAIN */}
          <main className="relative min-h-screen">

            {/* MAIN CONTAINER */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-14 py-10">

              {/* PAGE TRANSITION */}
              <div className="animate-fadeIn duration-700">
                {children}
              </div>
            </div>
          </main>

          {/* 🌟 FEATURE SECTION */}
          <section className="relative mt-24">

            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/80"></div>

            <div className="relative max-w-7xl mx-auto px-6 py-20">

              {/* Heading */}
              <div className="text-center mb-16">

                <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 px-5 py-2 rounded-full text-sm font-medium mb-5">
                  <Crown size={16} />
                  Why Choose Us
                </div>

                <h2 className="text-4xl md:text-5xl font-black mb-5 font-[family:var(--font-playfair)]">
                  Premium Fashion
                  <span className="block bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    Luxury Experience
                  </span>
                </h2>

                <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
                  Crafted with elegance, luxury aesthetics, and modern design
                  to deliver an unforgettable fashion experience.
                </p>
              </div>

              {/* GRID */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

                {/* CARD 1 */}
                <div className="group relative overflow-hidden rounded-[30px] bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 p-8">

                  <div className="absolute top-0 right-0 w-32 h-32 bg-pink-100 rounded-full blur-3xl opacity-50"></div>

                  <div className="relative">

                    <div className="w-16 h-16 rounded-3xl bg-pink-100 flex items-center justify-center mb-6 group-hover:scale-110 transition">
                      <Truck className="text-pink-600" />
                    </div>

                    <h3 className="text-xl font-bold mb-3">
                      Fast Delivery
                    </h3>

                    <p className="text-gray-500 leading-relaxed text-sm">
                      Lightning-fast shipping across India with secure luxury packaging.
                    </p>
                  </div>
                </div>

                {/* CARD 2 */}
                <div className="group relative overflow-hidden rounded-[30px] bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 p-8">

                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 rounded-full blur-3xl opacity-50"></div>

                  <div className="relative">

                    <div className="w-16 h-16 rounded-3xl bg-purple-100 flex items-center justify-center mb-6 group-hover:scale-110 transition">
                      <ShieldCheck className="text-purple-600" />
                    </div>

                    <h3 className="text-xl font-bold mb-3">
                      Secure Checkout
                    </h3>

                    <p className="text-gray-500 leading-relaxed text-sm">
                      Trusted payment gateway with advanced security protection.
                    </p>
                  </div>
                </div>

                {/* CARD 3 */}
                <div className="group relative overflow-hidden rounded-[30px] bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 p-8">

                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>

                  <div className="relative">

                    <div className="w-16 h-16 rounded-3xl bg-indigo-100 flex items-center justify-center mb-6 group-hover:scale-110 transition">
                      <Star className="text-indigo-600" />
                    </div>

                    <h3 className="text-xl font-bold mb-3">
                      Premium Quality
                    </h3>

                    <p className="text-gray-500 leading-relaxed text-sm">
                      Carefully curated luxury fashion collections with elegance.
                    </p>
                  </div>
                </div>

                {/* CARD 4 */}
                <div className="group relative overflow-hidden rounded-[30px] bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 p-8">

                  <div className="absolute top-0 right-0 w-32 h-32 bg-rose-100 rounded-full blur-3xl opacity-50"></div>

                  <div className="relative">

                    <div className="w-16 h-16 rounded-3xl bg-rose-100 flex items-center justify-center mb-6 group-hover:scale-110 transition">
                      <BadgeCheck className="text-rose-600" />
                    </div>

                    <h3 className="text-xl font-bold mb-3">
                      Trusted Brand
                    </h3>

                    <p className="text-gray-500 leading-relaxed text-sm">
                      Loved by thousands of customers for luxury fashion experiences.
                    </p>
                  </div>
                </div>
              </div>

              {/* EXTRA SECTION */}
              <div className="mt-24 relative overflow-hidden rounded-[40px] bg-gradient-to-r from-black via-gray-900 to-black p-10 md:p-16 shadow-2xl">

                {/* Glow */}
                <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-pink-500/20 blur-3xl rounded-full"></div>

                <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-purple-500/20 blur-3xl rounded-full"></div>

                <div className="relative grid lg:grid-cols-2 gap-12 items-center">

                  {/* LEFT */}
                  <div>

                    <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-5 py-2 rounded-full text-white text-sm mb-6">
                      <Sparkles size={16} />
                      Fashion Excellence
                    </div>

                    <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6 font-[family:var(--font-playfair)]">
                      Redefining Modern
                      <span className="block bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                        Luxury Fashion
                      </span>
                    </h2>

                    <p className="text-gray-400 leading-relaxed max-w-xl">
                      Experience premium fashion collections designed with
                      elegance, luxury craftsmanship, and modern confidence.
                    </p>
                  </div>

                  {/* RIGHT */}
                  <div className="grid grid-cols-2 gap-6">

                    <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
                      <h3 className="text-4xl font-black text-white">
                        25K+
                      </h3>

                      <p className="text-gray-400 mt-2">
                        Happy Customers
                      </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
                      <h3 className="text-4xl font-black text-white">
                        500+
                      </h3>

                      <p className="text-gray-400 mt-2">
                        Premium Products
                      </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
                      <h3 className="text-4xl font-black text-white">
                        4.9★
                      </h3>

                      <p className="text-gray-400 mt-2">
                        Customer Rating
                      </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
                      <h3 className="text-4xl font-black text-white">
                        24/7
                      </h3>

                      <p className="text-gray-400 mt-2">
                        Customer Support
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* 🔻 FOOTER */}
        <Footer />

        {/* 🌟 FLOATING BUTTONS */}
        <FloatingButtons />

        {/* 🔥 ANALYTICS */}
        <Analytics />
      </body>
    </html>
  );
}
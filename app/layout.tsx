import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

// 🌸 Premium fonts (Fashion aesthetic)
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// 🔥 Advanced SEO + Social Sharing
export const metadata: Metadata = {
  title: "NextGrid HerStyle | Premium Women's Fashion",
  description:
    "Elevate your wardrobe with NextGrid HerStyle. Discover modern, elegant, and timeless fashion curated for confident women.",
  keywords: [
    "women fashion",
    "premium clothing",
    "indian fashion brand",
    "nextgrid herstyle",
    "online boutique",
  ],
  openGraph: {
    title: "NextGrid HerStyle",
    description: "Premium Women's Fashion Store",
    url: "https://herstyle.com",
    siteName: "NextGrid HerStyle",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NextGrid HerStyle",
    description: "Luxury Women's Fashion",
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
      className={`${playfair.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-gray-50 text-gray-900 antialiased scroll-smooth">

        {/* 🌟 Announcement Bar */}
        <div className="bg-black text-white text-center text-xs md:text-sm py-2 tracking-wide">
          ✨ Summer Sale is Live — Flat 30% OFF on New Arrivals
        </div>

        {/* 🔝 Navbar (sticky handled inside component) */}
        <Navbar />

        {/* 🌸 Page Wrapper */}
        <div className="relative">

          {/* ✨ Decorative Background Layers */}
          <div className="fixed inset-0 -z-10 overflow-hidden">
            <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-pink-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-[-140px] right-[-140px] w-[350px] h-[350px] bg-purple-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute top-[40%] left-[30%] w-[200px] h-[200px] bg-indigo-300 rounded-full blur-2xl opacity-10"></div>
          </div>

          {/* 🌿 MAIN CONTENT */}
          <main className="min-h-screen">

            {/* Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-14 py-8">
              
              {/* ✨ Page Transition Wrapper */}
              <div className="animate-fadeIn">
                {children}
              </div>

            </div>
          </main>
        </div>

        {/* 🔻 Footer */}
        <Footer />

        {/* 🔥 Floating Action Button (Quick UX boost) */}
        <button className="fixed bottom-6 right-6 bg-pink-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition">
          🛍️
        </button>

        {/* ✅ Vercel Analytics */}
        <Analytics />

      </body>
    </html>
  );
}
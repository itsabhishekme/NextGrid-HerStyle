import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";

const categories = [
  { name: "Dresses", img: "/cat1.jpg" },
  { name: "Tops", img: "/cat2.jpg" },
  { name: "Jackets", img: "/cat3.jpg" },
  { name: "Accessories", img: "/cat4.jpg" },
];

const gallery = ["/g1.jpg", "/g2.jpg", "/g3.jpg", "/g4.jpg"];

export default function Home() {
  return (
    <>
      <div className="space-y-24">

        {/* 🔥 ANNOUNCEMENT */}
        <div className="bg-black text-white text-center py-2 text-sm tracking-wide">
          ✨ Free Shipping Above ₹4000 | 30% OFF Summer Sale
        </div>

        {/* 🌸 HERO */}
        <Hero />

        {/* 💎 TRUST */}
        <section className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            "🚚 Free Delivery",
            "🔒 Secure Payment",
            "💖 Premium Quality",
            "↩️ Easy Returns",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <p className="text-sm font-medium">{item}</p>
            </div>
          ))}
        </section>

        {/* 🧭 CATEGORY */}
        <section className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Shop by Category
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((c, i) => (
              <Link
                key={i}
                href="/shop"
                className="group relative overflow-hidden rounded-2xl shadow"
              >
                <img
                  src={c.img}
                  alt={c.name}
                  loading="lazy"
                  className="w-full h-44 object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h3 className="text-white font-semibold text-lg tracking-wide">
                    {c.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 🔥 NEW ARRIVALS */}
        <section className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-6">
            New Arrivals ✨
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {products.slice(0, 4).map((p) => (
              <div
                key={p.id}
                className="hover:-translate-y-2 transition duration-300"
              >
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </section>

        {/* 💎 PROMO */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Elegant Essentials",
              desc: "Everyday fashion with a premium touch.",
              color: "bg-pink-100",
            },
            {
              title: "Luxury Collection",
              desc: "Redefine elegance with statement pieces.",
              color: "bg-purple-100",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`${item.color} p-10 rounded-3xl hover:scale-[1.02] transition`}
            >
              <h3 className="text-2xl font-bold mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {item.desc}
              </p>
              <Link href="/shop" className="font-semibold text-pink-600">
                Shop Now →
              </Link>
            </div>
          ))}
        </section>

        {/* 🔥 FEATURED */}
        <section className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex justify-between mb-6 items-center">
            <h2 className="text-3xl font-bold">Featured</h2>
            <Link href="/shop" className="text-pink-600 hover:underline">
              View All →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.slice(0, 8).map((p) => (
              <div
                key={p.id}
                className="group hover:-translate-y-2 transition duration-300"
              >
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </section>

        {/* 👗 STORY */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-10 items-center">
          <img
            src="/style.jpg"
            alt="Fashion style"
            loading="lazy"
            className="rounded-3xl shadow-lg h-[420px] object-cover hover:scale-105 transition"
          />

          <div>
            <h2 className="text-4xl font-bold mb-4">
              Crafted for Confidence
            </h2>
            <p className="text-gray-600 mb-6">
              Our collections blend modern trends with timeless elegance.
            </p>

            <Link
              href="/shop"
              className="bg-pink-600 text-white px-6 py-3 rounded-xl hover:bg-pink-500 shadow"
            >
              Explore Collection
            </Link>
          </div>
        </section>

        {/* 📸 GALLERY */}
        <section className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Style Inspiration 📸
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="style"
                loading="lazy"
                className="rounded-xl h-40 w-full object-cover hover:scale-105 transition"
              />
            ))}
          </div>
        </section>

        {/* 💬 TESTIMONIAL */}
        <section className="bg-gray-50 py-20 text-center px-6">
          <h2 className="text-3xl font-bold mb-6">
            Loved by Thousands 💖
          </h2>

          <p className="max-w-2xl mx-auto text-gray-600 italic">
            “HerStyle is not just fashion — it's confidence and elegance.”
          </p>
        </section>

        {/* 🚀 CTA */}
        <section className="text-center py-24">
          <h2 className="text-4xl font-bold mb-4">
            Elevate Your Wardrobe Today
          </h2>

          <Link
            href="/shop"
            className="bg-pink-600 text-white px-10 py-4 rounded-xl text-lg shadow-lg hover:bg-pink-500 transition"
          >
            Shop Now
          </Link>
        </section>
      </div>

      {/* ✅ Vercel Analytics */}
      <Analytics />
    </>
  );
}
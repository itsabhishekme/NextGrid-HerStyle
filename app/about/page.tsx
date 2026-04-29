"use client";

import Link from "next/link";

export default function About() {
  return (
    <div className="bg-white overflow-hidden">

      {/* 🌸 HERO */}
      <section className="relative py-24 text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 opacity-50"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            About HerStyle
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fashion is not just clothing — it’s identity, confidence, and expression.
            At HerStyle, we design experiences that empower women every day.
          </p>
        </div>
      </section>

      {/* 🧵 STORY */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
        <img
          src="/fashion-story.jpg"
          alt="Our Story"
          className="rounded-3xl shadow-xl object-cover w-full h-[450px] hover:scale-105 transition duration-500"
        />

        <div>
          <h2 className="text-4xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            NextGrid HerStyle started with a vision — to redefine modern women's fashion.
            We believe style is a language, and every outfit tells a story.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to blend global fashion trends with timeless elegance,
            creating collections that inspire confidence in every woman.
          </p>
        </div>
      </section>

      {/* 📊 STATS */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center px-6">
          {[
            { value: "50K+", label: "Happy Customers" },
            { value: "120+", label: "Designs Launched" },
            { value: "25+", label: "Cities Served" },
            { value: "4.9★", label: "Customer Rating" },
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-3xl font-bold text-pink-600">{item.value}</h3>
              <p className="text-gray-600 mt-2 text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ✨ VALUES */}
      <section className="py-20 text-center max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">Our Values</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            { title: "Elegance", icon: "✨", desc: "Timeless beauty in every design." },
            { title: "Confidence", icon: "🔥", desc: "Empowering bold expression." },
            { title: "Sustainability", icon: "🌍", desc: "Responsible fashion choices." },
          ].map((v, i) => (
            <div key={i} className="bg-gray-50 p-8 rounded-3xl hover:bg-white hover:shadow-xl transition">
              <div className="text-3xl mb-4">{v.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{v.title}</h3>
              <p className="text-gray-600 text-sm">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 👗 GALLERY */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Style Moments
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "/g1.jpg",
            "/g2.jpg",
            "/g3.jpg",
            "/g4.jpg",
          ].map((img, i) => (
            <div key={i} className="overflow-hidden rounded-2xl">
              <img
                src={img}
                alt={`Style moment ${i + 1}`}
                className="w-full h-[250px] object-cover hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* 🌍 SUSTAINABILITY */}
      <section className="bg-gradient-to-r from-green-100 to-emerald-100 py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">
            Sustainable Fashion
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We are committed to building a future where fashion respects both people and the planet.
            Our goal is to create ethical, responsible, and eco-conscious collections.
          </p>
        </div>
      </section>

      {/* 💬 TESTIMONIAL */}
      <section className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-20 text-center px-6">
        <h2 className="text-3xl font-bold mb-6">
          Loved by Thousands
        </h2>
        <p className="max-w-2xl mx-auto text-lg italic">
          “HerStyle changed how I see fashion. It’s not just clothing — it’s confidence.”
        </p>
        <p className="mt-4 font-semibold">— Verified Customer 💖</p>
      </section>

      {/* 🚀 CTA */}
      <section className="text-center py-24 px-6">
        <h2 className="text-5xl font-bold mb-6">
          Elevate Your Style Today
        </h2>
        <p className="text-gray-600 mb-8">
          Step into confidence with our latest collection.
        </p>

        <Link
          href="/shop"
          className="bg-pink-600 text-white px-10 py-4 rounded-xl text-lg hover:bg-pink-500 transition shadow-lg"
        >
          Explore Collection
        </Link>
      </section>

    </div>
  );
}
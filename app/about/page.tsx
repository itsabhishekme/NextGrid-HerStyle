"use client";

import Link from "next/link";
import Image from "next/image";

import {
  Sparkles,
  Crown,
  Gem,
  Heart,
  Star,
  ShieldCheck,
  Truck,
  Globe,
  ArrowRight,
  BadgeCheck,
  HeartHandshake,
} from "lucide-react";

export default function About() {
  return (
    <div className="relative overflow-hidden bg-white">

      {/* 🌈 GLOBAL BACKGROUND */}
      <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">

        <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-pink-300 opacity-20 blur-3xl rounded-full animate-pulse"></div>

        <div className="absolute bottom-[-140px] right-[-140px] w-[420px] h-[420px] bg-purple-300 opacity-20 blur-3xl rounded-full animate-pulse"></div>

        <div className="absolute top-[40%] left-[40%] w-[250px] h-[250px] bg-indigo-300 opacity-10 blur-3xl rounded-full"></div>
      </div>

      {/* 🌸 HERO */}
      <section className="relative overflow-hidden py-32">

        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100/70 via-purple-100/60 to-indigo-100/70"></div>

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:80px_80px]"></div>

        {/* Glow */}
        <div className="absolute top-[-100px] left-[-100px] w-[320px] h-[320px] bg-pink-400/30 blur-3xl rounded-full"></div>

        <div className="absolute bottom-[-100px] right-[-100px] w-[320px] h-[320px] bg-purple-400/30 blur-3xl rounded-full"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/70 border border-white/40 backdrop-blur-xl px-6 py-3 rounded-full text-sm font-medium shadow-lg mb-8">

            <Sparkles
              size={16}
              className="text-pink-600"
            />

            Premium Fashion Brand
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl xl:text-8xl font-black leading-tight mb-8">

            About
            <span className="block bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              NextGrid HerStyle
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Fashion is not just clothing — it’s confidence, identity,
            elegance, and expression. At NextGrid HerStyle,
            we create luxury fashion experiences designed to empower women.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-5 mt-12">

            <Link
              href="/shop"
              className="
                group
                inline-flex
                items-center
                gap-2
                bg-black
                text-white
                px-8
                py-4
                rounded-2xl
                hover:bg-pink-600
                transition-all
                duration-300
                shadow-xl
              "
            >
              Explore Collection

              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition"
              />
            </Link>

            <Link
              href="/contact"
              className="
                inline-flex
                items-center
                gap-2
                bg-white/70
                border
                border-white/40
                backdrop-blur-xl
                px-8
                py-4
                rounded-2xl
                hover:bg-white
                transition-all
                duration-300
                shadow-lg
              "
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* 🌟 TRUST BAR */}
      <section className="max-w-7xl mx-auto px-6 -mt-14 relative z-20">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

          {[
            {
              icon: Truck,
              title: "Fast Delivery",
              desc: "Quick shipping across India",
              color: "bg-pink-100 text-pink-600",
            },

            {
              icon: ShieldCheck,
              title: "Secure Checkout",
              desc: "Protected payment systems",
              color: "bg-purple-100 text-purple-600",
            },

            {
              icon: BadgeCheck,
              title: "Premium Quality",
              desc: "Luxury curated products",
              color: "bg-indigo-100 text-indigo-600",
            },

            {
              icon: HeartHandshake,
              title: "Customer Support",
              desc: "24/7 premium support",
              color: "bg-rose-100 text-rose-600",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="
                group
                relative
                overflow-hidden
                rounded-[30px]
                bg-white/80
                backdrop-blur-xl
                border
                border-white/30
                p-8
                shadow-xl
                hover:-translate-y-2
                hover:shadow-2xl
                transition-all
                duration-500
              "
            >

              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-100/30 rounded-full blur-3xl"></div>

              <div className="relative">

                <div
                  className={`
                    w-16
                    h-16
                    rounded-3xl
                    flex
                    items-center
                    justify-center
                    mb-6
                    ${item.color}
                  `}
                >
                  <item.icon size={28} />
                </div>

                <h3 className="text-xl font-bold mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🧵 STORY */}
      <section className="max-w-7xl mx-auto px-6 py-32">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* IMAGE */}
          <div className="relative">

            <div className="relative overflow-hidden rounded-[40px] shadow-2xl h-[650px]">

              <Image
                src="/fashion-story.jpg"
                alt="Our Story"
                fill
                className="object-cover hover:scale-105 transition duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

              {/* Floating Card */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 border border-white/20 backdrop-blur-xl rounded-3xl p-6 text-white">

                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                    <Crown size={28} />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold">
                      Crafted With Elegance
                    </h3>

                    <p className="text-white/70">
                      Premium luxury fashion collections
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -right-10 top-14 bg-white rounded-3xl shadow-2xl p-6 animate-float">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-2xl bg-pink-100 flex items-center justify-center">
                  <Star className="text-pink-600 fill-pink-600" />
                </div>

                <div>
                  <h4 className="font-bold text-gray-900">
                    Rated 4.9★
                  </h4>

                  <p className="text-sm text-gray-500">
                    Trusted by thousands
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div>

            <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 px-5 py-2 rounded-full text-sm font-medium mb-6">

              <Gem size={16} />

              Our Story
            </div>

            <h2 className="text-5xl md:text-6xl font-black leading-tight mb-8">

              Redefining
              <span className="block bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Modern Fashion
              </span>
            </h2>

            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              NextGrid HerStyle started with a vision — to create premium fashion experiences that empower confidence and individuality.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg mb-10">
              We blend global fashion trends with timeless elegance,
              crafting collections that inspire modern women to feel bold,
              elegant, and confident every day.
            </p>

            {/* FEATURES */}
            <div className="space-y-5 mb-10">

              {[
                "Luxury premium fashion collections",
                "Modern & timeless design aesthetics",
                "Curated fashion experiences",
                "Empowering women through style",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4"
                >

                  <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
                    <BadgeCheck
                      size={18}
                      className="text-pink-600"
                    />
                  </div>

                  <p className="text-gray-700 font-medium">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/shop"
              className="
                inline-flex
                items-center
                gap-2
                bg-black
                text-white
                px-8
                py-4
                rounded-2xl
                hover:bg-pink-600
                transition-all
                duration-300
                shadow-xl
              "
            >
              Explore Collection

              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 📊 STATS */}
      <section className="relative py-28 bg-gradient-to-r from-black via-gray-900 to-black overflow-hidden">

        {/* Glow */}
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-pink-500/20 blur-3xl rounded-full"></div>

        <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-purple-500/20 blur-3xl rounded-full"></div>

        <div className="relative max-w-7xl mx-auto px-6">

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                value: "50K+",
                label: "Happy Customers",
              },

              {
                value: "120+",
                label: "Designs Launched",
              },

              {
                value: "25+",
                label: "Cities Served",
              },

              {
                value: "4.9★",
                label: "Customer Rating",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="
                  bg-white/10
                  border
                  border-white/10
                  backdrop-blur-xl
                  rounded-[35px]
                  p-10
                  text-center
                  shadow-2xl
                "
              >

                <h3 className="text-5xl font-black text-white mb-3">
                  {item.value}
                </h3>

                <p className="text-gray-400">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✨ VALUES */}
      <section className="max-w-7xl mx-auto px-6 py-32">

        <div className="text-center mb-20">

          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-5 py-2 rounded-full text-sm font-medium mb-6">

            <Heart size={16} />

            Our Values
          </div>

          <h2 className="text-5xl font-black mb-6">
            What Drives Us
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            We believe fashion should inspire confidence, celebrate elegance,
            and empower individuality.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">

          {[
            {
              title: "Elegance",
              icon: "✨",
              desc: "Timeless beauty in every luxury design.",
            },

            {
              title: "Confidence",
              icon: "🔥",
              desc: "Empowering women through fashion expression.",
            },

            {
              title: "Sustainability",
              icon: "🌍",
              desc: "Responsible and eco-conscious fashion choices.",
            },
          ].map((v, i) => (
            <div
              key={i}
              className="
                group
                relative
                overflow-hidden
                rounded-[35px]
                bg-white
                border
                border-gray-100
                p-10
                shadow-sm
                hover:shadow-2xl
                hover:-translate-y-3
                transition-all
                duration-500
              "
            >

              <div className="absolute top-0 right-0 w-40 h-40 bg-pink-100/30 blur-3xl rounded-full"></div>

              <div className="relative">

                <div className="text-5xl mb-6">
                  {v.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {v.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 📸 GALLERY */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center mb-16">

          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-600 px-5 py-2 rounded-full text-sm font-medium mb-6">

            <Sparkles size={16} />

            Style Moments
          </div>

          <h2 className="text-5xl font-black mb-6">
            Fashion Gallery
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {[
            "/g1.jpg",
            "/g2.jpg",
            "/g3.jpg",
            "/g4.jpg",
          ].map((img, i) => (
            <div
              key={i}
              className="
                group
                relative
                overflow-hidden
                rounded-[30px]
                h-[320px]
                shadow-xl
              "
            >

              <Image
                src={img}
                alt={`Gallery ${i + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition"></div>
            </div>
          ))}
        </div>
      </section>

      {/* 🌍 SUSTAINABILITY */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-100 to-emerald-100 py-28">

        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-green-300/30 blur-3xl rounded-full"></div>

        <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-emerald-300/30 blur-3xl rounded-full"></div>

        <div className="relative max-w-5xl mx-auto text-center px-6">

          <div className="inline-flex items-center gap-2 bg-white/70 border border-white/40 backdrop-blur-xl px-5 py-2 rounded-full text-sm font-medium mb-6">

            <Globe
              size={16}
              className="text-green-600"
            />

            Sustainable Fashion
          </div>

          <h2 className="text-5xl font-black mb-8">
            Fashion With Purpose 🌍
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            We are committed to building a future where fashion respects both people and the planet.
            Our mission is to create ethical, responsible, and eco-conscious collections.
          </p>
        </div>
      </section>

      {/* 💬 TESTIMONIAL */}
      <section className="relative overflow-hidden bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-700 py-28 text-white">

        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-white/10 blur-3xl rounded-full"></div>

        <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-white/10 blur-3xl rounded-full"></div>

        <div className="relative max-w-4xl mx-auto text-center px-6">

          <div className="flex justify-center gap-1 mb-8">

            {[1, 2, 3, 4, 5].map((i) => (
              <Star
                key={i}
                className="text-yellow-300 fill-yellow-300"
                size={24}
              />
            ))}
          </div>

          <h2 className="text-5xl font-black mb-8">
            Loved by Thousands 💖
          </h2>

          <p className="text-2xl text-white/80 italic leading-relaxed">
            “NextGrid HerStyle transformed how I experience fashion.
            It’s not just clothing — it’s confidence and elegance.”
          </p>

          <div className="mt-10">

            <h3 className="font-bold text-xl">
              Sophia Williams
            </h3>

            <p className="text-white/60 mt-1">
              Verified Customer
            </p>
          </div>
        </div>
      </section>

      {/* 🚀 CTA */}
      <section className="relative overflow-hidden py-32">

        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50"></div>

        <div className="relative max-w-5xl mx-auto text-center px-6">

          <div className="inline-flex items-center gap-2 bg-white border border-gray-100 px-5 py-2 rounded-full text-sm font-medium shadow-lg mb-8">

            <Sparkles
              size={16}
              className="text-pink-600"
            />

            Luxury Fashion Experience
          </div>

          <h2 className="text-5xl md:text-7xl font-black leading-tight mb-8">

            Elevate Your
            <span className="block bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Style Today
            </span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
            Step into confidence with premium collections crafted for elegance,
            luxury, and timeless beauty.
          </p>

          <Link
            href="/shop"
            className="
              inline-flex
              items-center
              gap-2
              bg-black
              text-white
              px-10
              py-5
              rounded-2xl
              text-lg
              font-semibold
              shadow-2xl
              hover:bg-pink-600
              hover:scale-105
              transition-all
              duration-300
            "
          >
            Explore Collection

            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
"use client";

import { useState } from "react";

import Link from "next/link";

import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  Globe,
  Headphones,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  // ✅ VALIDATE
  const validate = () => {
    let newErrors: {
      name?: string;
      email?: string;
      message?: string;
    } = {};

    if (!form.name.trim()) {
      newErrors.name =
        "Name is required";
    }

    if (
      !form.email.includes("@")
    ) {
      newErrors.email =
        "Valid email required";
    }

    if (
      !form.message.trim()
    ) {
      newErrors.message =
        "Message cannot be empty";
    }

    setErrors(newErrors);

    return (
      Object.keys(newErrors).length === 0
    );
  };

  // 🚀 SUBMIT
  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    // Simulated API
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1500);
  };

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

            Premium Support
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl xl:text-8xl font-black leading-tight mb-8">

            Get In
            <span className="block bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>

          {/* Text */}
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Questions, feedback, or fashion inquiries —
            our luxury support team is always ready
            to help you.
          </p>

          {/* CTA */}
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

            <button
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
              Live Support
            </button>
          </div>
        </div>
      </section>

      {/* 🌟 CONTACT CARDS */}
      <section className="max-w-7xl mx-auto px-6 -mt-14 relative z-20">

        <div className="grid md:grid-cols-3 gap-8">

          {[
            {
              icon: Mail,
              title: "Email Support",
              value: "support@herstyle.com",
              desc: "24/7 premium support",
              color:
                "bg-pink-100 text-pink-600",
            },

            {
              icon: Phone,
              title: "Phone Support",
              value: "+91 98765 43210",
              desc: "Mon - Sat 9AM to 8PM",
              color:
                "bg-purple-100 text-purple-600",
            },

            {
              icon: MapPin,
              title: "Our Location",
              value: "India",
              desc: "Worldwide luxury delivery",
              color:
                "bg-indigo-100 text-indigo-600",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="
                group
                relative
                overflow-hidden
                rounded-[35px]
                bg-white/80
                backdrop-blur-xl
                border
                border-white/30
                p-10
                shadow-xl
                hover:-translate-y-3
                hover:shadow-2xl
                transition-all
                duration-500
              "
            >

              {/* Glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-pink-100/30 rounded-full blur-3xl"></div>

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
                  <item.icon size={30} />
                </div>

                <h3 className="text-2xl font-bold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-900 font-medium mb-2">
                  {item.value}
                </p>

                <p className="text-gray-500 text-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🧾 FORM SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-32">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT */}
          <div>

            <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 px-5 py-2 rounded-full text-sm font-medium mb-6">

              <MessageCircle size={16} />

              Contact Form
            </div>

            <h2 className="text-5xl md:text-6xl font-black leading-tight mb-8">

              Let’s Start
              <span className="block bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                A Conversation
              </span>
            </h2>

            <p className="text-gray-600 leading-relaxed text-lg mb-10">
              Whether you need support, styling advice,
              or product assistance — we are always here
              to help.
            </p>

            {/* Features */}
            <div className="space-y-6">

              {[
                {
                  icon: Headphones,
                  title:
                    "24/7 Premium Support",
                },

                {
                  icon: ShieldCheck,
                  title:
                    "Secure Communication",
                },

                {
                  icon: BadgeCheck,
                  title:
                    "Trusted Luxury Brand",
                },

                {
                  icon: Globe,
                  title:
                    "Worldwide Customer Reach",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-5"
                >

                  <div className="w-14 h-14 rounded-2xl bg-pink-100 flex items-center justify-center">

                    <item.icon className="text-pink-600" />
                  </div>

                  <h3 className="font-semibold text-lg">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative overflow-hidden rounded-[40px] bg-white/80 backdrop-blur-xl border border-white/30 shadow-2xl p-10">

            {/* Glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-pink-100/30 blur-3xl rounded-full"></div>

            <div className="relative">

              {submitted ? (
                <div className="text-center py-16 animate-fadeIn">

                  <div className="w-28 h-28 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-8">

                    <BadgeCheck
                      size={48}
                      className="text-green-600"
                    />
                  </div>

                  <h2 className="text-4xl font-black text-green-600 mb-5">
                    Message Sent 🎉
                  </h2>

                  <p className="text-gray-500 leading-relaxed mb-10 max-w-md mx-auto">
                    Thank you for contacting us.
                    Our team will reply shortly.
                  </p>

                  <button
                    onClick={() => {
                      setSubmitted(false);

                      setForm({
                        name: "",
                        email: "",
                        message: "",
                      });
                    }}
                    className="
                      bg-black
                      text-white
                      px-8
                      py-4
                      rounded-2xl
                      hover:bg-pink-600
                      transition-all
                      duration-300
                    "
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >

                  {/* NAME */}
                  <div>

                    <label className="block text-sm font-medium mb-3">
                      Full Name
                    </label>

                    <input
                      value={form.name}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          name:
                            e.target.value,
                        })
                      }
                      placeholder="Enter your full name"
                      className="
                        w-full
                        p-5
                        rounded-2xl
                        border
                        border-gray-200
                        bg-white
                        outline-none
                        focus:ring-2
                        focus:ring-pink-500
                      "
                    />

                    {errors.name && (
                      <p className="text-red-500 text-sm mt-2">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* EMAIL */}
                  <div>

                    <label className="block text-sm font-medium mb-3">
                      Email Address
                    </label>

                    <input
                      value={form.email}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          email:
                            e.target.value,
                        })
                      }
                      placeholder="Enter your email"
                      className="
                        w-full
                        p-5
                        rounded-2xl
                        border
                        border-gray-200
                        bg-white
                        outline-none
                        focus:ring-2
                        focus:ring-pink-500
                      "
                    />

                    {errors.email && (
                      <p className="text-red-500 text-sm mt-2">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* MESSAGE */}
                  <div>

                    <label className="block text-sm font-medium mb-3">
                      Your Message
                    </label>

                    <textarea
                      value={form.message}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          message:
                            e.target.value,
                        })
                      }
                      placeholder="Write your message..."
                      rows={6}
                      className="
                        w-full
                        p-5
                        rounded-2xl
                        border
                        border-gray-200
                        bg-white
                        outline-none
                        resize-none
                        focus:ring-2
                        focus:ring-pink-500
                      "
                    />

                    {errors.message && (
                      <p className="text-red-500 text-sm mt-2">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* BUTTON */}
                  <button
                    disabled={loading}
                    className="
                      group
                      w-full
                      bg-gradient-to-r
                      from-pink-600
                      via-purple-600
                      to-indigo-600
                      text-white
                      py-5
                      rounded-2xl
                      font-semibold
                      shadow-2xl
                      hover:scale-[1.02]
                      transition-all
                      duration-300
                      disabled:opacity-50
                    "
                  >

                    <span className="flex items-center justify-center gap-2">

                      {loading
                        ? "Sending..."
                        : "Send Message"}

                      {!loading && (
                        <ArrowRight
                          size={18}
                          className="group-hover:translate-x-1 transition"
                        />
                      )}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 🌟 FAQ */}
      <section className="max-w-6xl mx-auto px-6 pb-28">

        <div className="text-center mb-16">

          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-5 py-2 rounded-full text-sm font-medium mb-6">

            <Sparkles size={16} />

            Quick Answers
          </div>

          <h2 className="text-5xl font-black mb-6">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {[
            {
              q: "How long does delivery take?",
              a: "Usually within 3-7 business days across India.",
            },

            {
              q: "Do you offer international shipping?",
              a: "Yes, we deliver worldwide with premium packaging.",
            },

            {
              q: "Can I return products?",
              a: "Yes, easy returns are available within 7 days.",
            },

            {
              q: "Are payments secure?",
              a: "Absolutely. All transactions are fully encrypted.",
            },
          ].map((faq, i) => (
            <div
              key={i}
              className="
                bg-white/80
                backdrop-blur-xl
                border
                border-gray-100
                rounded-[30px]
                p-8
                shadow-sm
                hover:shadow-xl
                transition-all
                duration-500
              "
            >

              <h3 className="text-xl font-bold mb-4">
                {faq.q}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 📍 MAP */}
      <section className="max-w-7xl mx-auto px-6 pb-32">

        <div className="relative overflow-hidden rounded-[40px] shadow-2xl border border-gray-100">

          {/* Top Overlay */}
          <div className="absolute top-6 left-6 z-10 bg-white/80 backdrop-blur-xl border border-white/40 rounded-2xl px-6 py-4 shadow-lg">

            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center">

                <MapPin className="text-pink-600" />
              </div>

              <div>

                <h3 className="font-bold">
                  NextGrid HerStyle
                </h3>

                <p className="text-sm text-gray-500">
                  India
                </p>
              </div>
            </div>
          </div>

          {/* MAP */}
          <iframe
            src="https://maps.google.com/maps?q=india&t=&z=5&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[550px]"
            title="Google Map showing India location"
          ></iframe>
        </div>
      </section>

      {/* 🚀 CTA */}
      <section className="relative overflow-hidden bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-700 py-28 text-white">

        {/* Glow */}
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-white/10 blur-3xl rounded-full"></div>

        <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-white/10 blur-3xl rounded-full"></div>

        <div className="relative max-w-5xl mx-auto text-center px-6">

          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-xl px-5 py-2 rounded-full text-sm font-medium mb-6">

            <Star size={16} />

            Luxury Fashion Experience
          </div>

          <h2 className="text-5xl md:text-7xl font-black leading-tight mb-8">

            Let’s Create
            <span className="block">
              Something Beautiful
            </span>
          </h2>

          <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
            Experience premium support and luxury fashion designed for modern elegance.
          </p>

          <Link
            href="/shop"
            className="
              inline-flex
              items-center
              gap-2
              bg-white
              text-pink-600
              px-10
              py-5
              rounded-2xl
              text-lg
              font-semibold
              shadow-2xl
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
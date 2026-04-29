"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({});

  // 🔍 Validation
  const validate = () => {
    let newErrors: any = {};

    if (!form.name) newErrors.name = "Name is required";
    if (!form.email.includes("@")) newErrors.email = "Valid email required";
    if (!form.message) newErrors.message = "Message cannot be empty";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 🚀 Submit
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    // Simulate API
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="bg-white overflow-hidden">

      {/* 🌸 HERO */}
      <section className="relative text-center py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 opacity-50"></div>

        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Get In Touch
          </h1>
          <p className="text-gray-600">
            Questions, feedback, or just want to say hello 💖
          </p>
        </div>
      </section>

      {/* 📞 CONTACT INFO */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6 text-center">
        {[
          { title: "Email", value: "support@herstyle.com", icon: "📧" },
          { title: "Phone", value: "+91 98765 43210", icon: "📞" },
          { title: "Location", value: "India", icon: "📍" },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white/80 backdrop-blur-md border p-6 rounded-2xl shadow hover:shadow-xl transition"
          >
            <div className="text-2xl mb-2">{item.icon}</div>
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-gray-500 text-sm">{item.value}</p>
          </div>
        ))}
      </section>

      {/* 🧾 FORM */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white/70 backdrop-blur-lg border shadow-xl rounded-3xl p-10">

          {submitted ? (
            <div className="text-center py-12 animate-fadeIn">
              <h2 className="text-3xl font-bold text-green-600 mb-4">
                🎉 Message Sent!
              </h2>
              <p className="text-gray-500 mb-6">
                Thank you for reaching out. We'll reply soon.
              </p>

              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: "", email: "", message: "" });
                }}
                className="bg-pink-600 text-white px-6 py-3 rounded-xl hover:bg-pink-500"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">

              {/* NAME */}
              <div>
                <input
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  placeholder="Your Name"
                  className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-pink-500 outline-none"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* EMAIL */}
              <div>
                <input
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  placeholder="Email Address"
                  className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-pink-500 outline-none"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* MESSAGE */}
              <div>
                <textarea
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="Write your message..."
                  rows={5}
                  className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-pink-500 outline-none"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* BUTTON */}
              <button
                disabled={loading}
                className="w-full bg-pink-600 text-white py-4 rounded-xl hover:bg-pink-500 transition shadow-md disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 🌐 SOCIAL LINKS */}
      <section className="text-center pb-16">
        <h3 className="text-lg font-semibold mb-4">
          Connect With Us
        </h3>

        <div className="flex justify-center gap-6 text-2xl">
          <span className="hover:scale-110 transition cursor-pointer">📸</span>
          <span className="hover:scale-110 transition cursor-pointer">🐦</span>
          <span className="hover:scale-110 transition cursor-pointer">💼</span>
        </div>
      </section>

      {/* 📍 MAP */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="rounded-3xl overflow-hidden shadow-xl">
          <iframe
            src="https://maps.google.com/maps?q=india&t=&z=5&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[350px]"
            title="Google Map showing India location"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
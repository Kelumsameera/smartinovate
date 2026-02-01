'use client';

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Check,
  ArrowRight,
  Star,
  Shield,
  TrendingUp,
  CreditCard,
  Smartphone,
  ChevronDown,
} from "lucide-react";

export default function EcommerceClient() {
  const [showAll, setShowAll] = useState(false);

  const industries = [
    "Food & Beverage",
    "Consumer Electronics",
    "Beauty & Personal Care",
    "Fashion & Apparel",
    "Grocery Stores",
    "Jewelry & Luxury Goods",
    "Furniture & Household",
    "Auto Parts",
    "Healthcare & Fitness",
    "Watches & Accessories",
    "Stationery & Office Supplies",
    "Sports & Outdoor",
  ];

  return (
    <main className="bg-white text-slate-900 overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="py-28 px-6 bg-gradient-to-b from-white to-slate-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              eCommerce Website Development
            </h1>

            <p className="mt-6 text-xl max-w-xl text-slate-600">
              Get your online store built by SmartInnovate — scalable, secure,
              and designed to convert visitors into customers.
            </p>

            <div className="flex flex-wrap gap-6 mt-8 text-sm text-slate-600">
              {["Custom-built", "Mobile-first", "Revenue-driven"].map((t, i) => (
                <span key={i} className="flex items-center gap-2">
                  <Check className="text-green-500" size={18} /> {t}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-10 flex-wrap">
              <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold flex items-center gap-2 hover:scale-105 transition">
                Request a Quote <ArrowRight size={18} />
              </button>
              <button className="px-8 py-4 rounded-lg border border-slate-300 hover:bg-slate-100 transition">
                Talk to an Expert
              </button>
            </div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <Image
              src="/images/hero-ecommerce.png"
              alt="SmartInnovate eCommerce Development"
              width={720}
              height={520}
              priority
              className="rounded-xl shadow-2xl"
            />
            <div className="absolute -z-10 -top-12 -right-12 w-72 h-72 bg-purple-300/40 blur-3xl rounded-full"></div>
          </motion.div>

        </div>
      </section>

      {/* ================= TRUST BADGES ================= */}
      <section className="border-y py-10">
        <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-600">
          <span className="flex items-center gap-2">
            <Star className="text-yellow-500" /> Top eCommerce Developers – Sri Lanka
          </span>
          <span className="flex items-center gap-2">
            <Shield className="text-blue-500" /> Leading Web Design & Development Company
          </span>
          <span className="flex items-center gap-2">
            <Check className="text-green-500" /> Trusted eCommerce Solution Provider
          </span>
        </div>
      </section>

      {/* ================= CUSTOM SOLUTIONS ================= */}
      <motion.section
        className="py-24 px-6 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl lg:text-5xl font-bold mb-8">
          Custom eCommerce Solutions for Your Business
        </h2>

        <p className="text-slate-600 mb-4">
          At <strong>SmartInnovate</strong>, we specialize in custom eCommerce
          solutions designed for modern businesses and global markets.
        </p>

        <ul className="grid md:grid-cols-2 gap-4 mb-10 text-slate-600">
          {[
            "Custom-built eCommerce platforms",
            "SEO-ready architecture",
            "High performance & security",
            "Conversion-focused UX/UI",
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-3">
              <Check className="text-green-500" /> {item}
            </li>
          ))}
        </ul>

        <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:scale-105 transition">
          Launch My Online Store
        </button>
      </motion.section>

      {/* ================= FEATURES ================= */}
      <section className="bg-slate-100 py-24 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Conversion-Focused Features & CTA Strategies
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "UX-driven UI design",
            "SEO-friendly development",
            "Secure payment gateway integrations",
            "Inventory & order management",
            "Multilingual support",
            "Analytics & performance reporting",
            "Quality assurance & security checks",
          ].map((f, i) => (
            <motion.div
              key={i}
              className="bg-white border rounded-xl p-6"
              whileHover={{ y: -6 }}
            >
              <Check className="text-green-500 mb-2" /> {f}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= MOBILE FIRST ================= */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <Smartphone className="w-40 h-40 mx-auto text-blue-500" />
        <div>
          <h2 className="text-4xl font-bold mb-4">
            Mobile-First eCommerce That Converts
          </h2>
          <ul className="space-y-3 text-slate-600 mb-6">
            <li>✔ Load faster</li>
            <li>✔ Improve engagement</li>
            <li>✔ Increase conversion rates</li>
          </ul>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:scale-105 transition">
            Get a Mobile-Optimized Store
          </button>
        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}
      <section className="py-24 px-6 bg-slate-100">
        <h2 className="text-4xl font-bold text-center mb-12">
          eCommerce Solutions Across Industries
        </h2>

        <div className="grid md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {(showAll ? industries : industries.slice(0, 8)).map((ind, i) => (
            <div key={i} className="bg-white border rounded-lg p-4 text-center">
              {ind}
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-6">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 px-6 py-3 border rounded-lg"
            >
              View More Industries <ChevronDown />
            </button>
          </div>
        )}
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-28 text-center px-6">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
          Ready to Build a High-Converting eCommerce Platform?
        </h2>
        <p className="text-slate-600 mt-6">
          Partner with SmartInnovate to launch an online store that scales with your business.
        </p>
        <button className="mt-10 px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:scale-105 transition">
          Request a Free Consultation
        </button>
      </section>

    </main>
  );
}

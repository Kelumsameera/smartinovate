"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Check,
  ArrowRight,
  Smartphone,
  ChevronDown,
} from "lucide-react";

export default function EcommerceClient() {
  const [showAll, setShowAll] = useState(false);

  const industries = [
    "Fashion & Apparel",
    "Electronics",
    "Beauty",
    "Grocery",
    "Healthcare",
    "Jewelry",
    "Furniture",
    "Auto Parts",
    "Sports",
    "Luxury Goods",
    "Fitness",
    "Stationery",
  ];

  return (
    <main className="bg-white text-slate-900 py-10">

      {/* HERO */}
      <section className="flex ">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

          <div>
            <h1 className="text-5xl lg:text-7xl font-bold">
              eCommerce Website Development in Sri Lanka
            </h1>

            <p className="mt-6 text-xl text-slate-600">
              SmartInnovate builds secure, scalable and high-converting
              eCommerce websites for businesses in Sri Lanka and globally.
            </p>

            <div className="flex gap-4 mt-10 flex-wrap">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-4xl flex gap-2">
                Request Quote <ArrowRight size={18} />
              </button>

              <Link
                href="/contact"
                className="px-8 py-4 border rounded-4xl flex gap-2 text-blue-600"
              >
                Talk to Expert
              </Link>
            </div>
          </div>

          <Image
            src="/images/hero-ecommerce.png"
            alt="eCommerce website development Sri Lanka"
            width={720}
            height={520}
            className="rounded-xl shadow-xl"
          />

        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-slate-100 py-24 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          eCommerce Features That Increase Sales
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "SEO-friendly architecture",
            "Fast loading speed",
            "Secure payment gateways",
            "Mobile-first design",
            "Analytics integration",
            "Inventory management",
          ].map((f, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border">
              <Check className="text-green-500 mb-2" />
              {f}
            </div>
          ))}
        </div>
      </section>

      {/* MOBILE */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
        <Image
          src="/images/ecommerce-mobile.png"
          alt="eCommerce website development Sri Lanka"
          width={720}
          height={520}
          className="rounded-xl shadow-xl"
        />
        <div>
          <h2 className="text-4xl font-bold mb-4">
            Mobile-First eCommerce Development
          </h2>

          <p className="text-slate-600 mb-6">
            Over 70% of online shoppers use mobile. Our stores are optimized
            for speed, UX and conversions. We ensure seamless shopping
            experiences across all devices. 
          </p>

          <button className="px-8 py-4 bg-blue-600 text-white rounded-4xl flex gap-2">
            Get Mobile Store
          </button>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-24 px-6 bg-slate-100">
        <h2 className="text-4xl font-bold text-center mb-12">
          Industries We Serve
        </h2>

        <div className="grid md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {(showAll ? industries : industries.slice(0, 8)).map((ind, i) => (
            <div key={i} className="bg-white p-4 border rounded-lg text-center">
              {ind}
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-6">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-3 border rounded-lg flex gap-2 mx-auto"
            >
              View More <ChevronDown />
            </button>
          </div>
        )}
      </section>

      {/* FAQ (SEO GOLD) */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">

          <div>
            <h3 className="font-semibold text-xl">
              How much does an eCommerce website cost in Sri Lanka?
            </h3>
            <p className="text-slate-600">
              Costs typically range from $800–$5000+ depending on features,
              design and integrations.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl">
              Which platform is best for eCommerce?
            </h3>
            <p className="text-slate-600">
              Shopify is great for quick launch. WooCommerce offers flexibility.
              Custom builds suit large businesses.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl">
              Do you provide SEO for online stores?
            </h3>
            <p className="text-slate-600">
              Yes. All our stores are SEO-ready and optimized for Google.
            </p>
          </div>

        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Explore More Services
        </h2>

        <div className="flex gap-6 justify-center">
          <Link href="/services/web-development" className="text-blue-600">
            Web Development
          </Link>
          <Link href="/services/mobile-app-development" className="text-blue-600">
            Mobile App Development
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-28 text-center">
        <h2 className="text-5xl font-bold">
          Ready to Launch Your Online Store?
        </h2>

        <p className="text-slate-600 mt-6">
          Partner with SmartInnovate — a leading eCommerce development company in Sri Lanka.
        </p>

        <button className="mt-10 px-10 py-5 bg-blue-600 text-white rounded-lg">
          Request Free Consultation
        </button>
      </section>

    </main>
  );
}

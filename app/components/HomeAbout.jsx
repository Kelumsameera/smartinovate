"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaEye, FaRocket } from "react-icons/fa";

export default function HomeAbout() {
  return (
    <section className="relative py-24 overflow-hidden bg-linear-to-br from-blue-50 via-white to-green-50">
      
      {/* 🔵 Gradient Blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">

        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* BIG LABEL */}
          <h2 className="text-3xl font-bold tracking-wide text-gray-500 mb-10">
            About{" "}
            <span className="text-blue-600">Smart</span>
            <span className="text-green-500">Innovate</span>
          </h2>

          {/* MAIN HEADING (REDUCED SIZE) */}
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6 leading-relaxed">
            Building Smart Digital Solutions
            <br />
            <span className="text-blue-600">
              That Drive Business Growth
            </span>
          </h3>

          <p className="text-gray-700 mb-6 leading-relaxed">
            <strong>SmartInnovate</strong> is a technology-driven digital
            solutions company delivering scalable web, mobile, cloud, and
            automation solutions for startups, SMEs, and enterprises.
          </p>

          <p className="text-gray-600 mb-8 leading-relaxed">
            We solve real business challenges through intelligent technology,
            clean system architecture, and long-term partnerships that empower
            organizations to grow with confidence.
          </p>

          <ul className="space-y-3 mb-10 text-gray-700">
            <li>✔ Web, Mobile & Custom Software Development</li>
            <li>✔ Cloud, IoT & Automation Solutions</li>
            <li>✔ Secure, Scalable & High-Performance Systems</li>
            <li>✔ Trusted Digital Partner for Global Clients</li>
          </ul>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/about"
              className="bg-blue-600 text-white px-7 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Learn More About Us
            </Link>

            <Link
              href="/contact"
              className="border border-blue-600 text-blue-600 px-7 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>

        {/* ================= RIGHT CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="grid gap-8"
        >
          {/* ===== VISION CARD ===== */}
          <div className="bg-white/90 backdrop-blur rounded-2xl p-8 shadow-xl border border-white/60 hover:shadow-2xl transition">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-xl">
                <FaEye className="text-2xl" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900">
                Our Vision
              </h4>
            </div>

            <p className="text-gray-600 leading-relaxed">
              To become a globally trusted technology partner, empowering
              businesses through intelligent, scalable, and future-ready
              digital solutions that shape the next generation of innovation.
            </p>
          </div>

          {/* ===== MISSION CARD ===== */}
          <div className="bg-white/90 backdrop-blur rounded-2xl p-8 shadow-xl border border-white/60 hover:shadow-2xl transition">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-green-100 text-green-600 p-3 rounded-xl">
                <FaRocket className="text-2xl" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900">
                Our Mission
              </h4>
            </div>

            <p className="text-gray-600 leading-relaxed">
              To bridge business challenges with cutting-edge web, mobile,
              cloud, and automation technologies by delivering secure,
              high-performance software solutions while creating long-term
              value for our clients and stakeholders.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaWhatsapp,
  FaGlobe,
  FaMobileAlt,
  FaCloud,
  FaRobot,
} from "react-icons/fa";

/* 🔁 A/B TEST VARIANT
   change this value to "B" if you want alternate CTA copy */
const VARIANT = "A";

export default function ServiceCTA() {
  const heading =
    VARIANT === "A"
      ? "Ready to Build Something Smart?"
      : "Let’s Turn Your Idea Into a Scalable Product";

  const description =
    VARIANT === "A"
      ? "Partner with SmartInnovate to design secure, scalable, and future-ready digital solutions tailored to your business."
      : "From concept to deployment, SmartInnovate helps businesses build high-performance software that drives growth.";

  return (
    <section className="mt-32 px-4">
      {/* ===== GRADIENT BORDER WRAPPER ===== */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto rounded-4xl p-0.5
                   bg-linear-to-r from-blue-500 via-blue-400 to-green-400"
      >
        {/* ===== INNER CARD ===== */}
        <div className="bg-white rounded-[30px] px-6 py-20 text-center shadow-xl">
          {/* HEADING */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {heading}
          </h2>

          {/* DESCRIPTION */}
          <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-12">
            {description}
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-14">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2
                         bg-blue-600 text-white px-9 py-4 rounded-xl
                         font-semibold hover:bg-blue-700 transition"
            >
              Start Your Project
              <FaArrowRight />
            </Link>

            <a
              href="https://wa.me/94767785300"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2
                        bg-green-500 text-white px-9 py-4 rounded-xl
                        font-semibold transition
                        hover:bg-green-600 hover:text-white"
            >
              <FaWhatsapp className="text-xl" />
              Chat on WhatsApp
            </a>

          </div>

          {/* ===== SERVICE ICONS ===== */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto text-gray-600">
            <IconItem icon={<FaGlobe />} label="Web Solutions" />
            <IconItem icon={<FaMobileAlt />} label="Mobile Apps" />
            <IconItem icon={<FaCloud />} label="Cloud Systems" />
            <IconItem icon={<FaRobot />} label="IoT & Automation" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ===== ICON ITEM COMPONENT ===== */
function IconItem({ icon, label }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="text-3xl text-blue-600">{icon}</div>
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
}

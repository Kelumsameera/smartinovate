"use client";

import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Nimal Perera",
    role: "Founder",
    company: "Lanka Retail Solutions",
    message:
      "SmartInnovate delivered exactly what we needed. Their team understood our business challenges and built a scalable solution that helped us grow faster.",
    rating: 5,
  },
  {
    name: "Shashika Fernando",
    role: "Operations Manager",
    company: "GreenTech Manufacturing",
    message:
      "From industrial automation to real-time dashboards, SmartInnovate exceeded expectations. Professional, reliable, and future-focused.",
    rating: 5,
  },
  {
    name: "Kevin Thomas",
    role: "CTO",
    company: "GlobalSoft UK",
    message:
      "An excellent technology partner. Clean code, clear communication, and strong delivery timelines. Highly recommended for software projects.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[index];

  return (
    <section className="py-24 bg-linear-to-br from-white via-blue-50 to-green-50 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 text-center">

        {/* SECTION TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-900 mb-4"
        >
          What Our <span className="text-blue-600">Clients Say</span>
        </motion.h2>

        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Trusted by startups, enterprises, and global businesses for delivering
          reliable, scalable, and intelligent digital solutions.
        </p>

        {/* TESTIMONIAL CARD */}
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white/90 backdrop-blur rounded-2xl shadow-xl p-10 border border-white/60"
        >
          {/* STARS */}
          <div className="flex justify-center mb-4">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <FaStar
                key={i}
                className="text-yellow-400 text-xl mx-0.5"
              />
            ))}
          </div>

          {/* MESSAGE */}
          <p className="text-lg text-gray-700 italic mb-8 leading-relaxed">
            “{testimonial.message}”
          </p>

          {/* CLIENT INFO */}
          <div className="text-gray-900 font-semibold">
            {testimonial.name}
          </div>
          <div className="text-sm text-gray-500">
            {testimonial.role} — {testimonial.company}
          </div>
        </motion.div>

        {/* INDICATORS */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition ${
                i === index
                  ? "bg-blue-600"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Show testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

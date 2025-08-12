"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex flex-col md:flex-row items-center justify-center overflow-hidden px-6 md:px-20">
      {/* Left side: Image (40% width) */}
      <motion.div
        className="relative w-full md:w-2/5 h-64 md:h-full"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/hero-image.jpeg"
          alt="Smart Innovation"
          fill
          style={{ objectFit: "hero" }}
          priority 
          className="rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg pointer-events-none"></div>
      </motion.div>

      {/* Right side: Text (60% width) */}
      <motion.div
        className="relative w-full md:w-3/5 text-white px-4 md:px-12 mt-10 md:mt-0 max-w-xl"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">
          Empowering Innovation with Smart Solutions
        </h1>
        <p className="text-base md:text-lg mb-8 drop-shadow-md">
          Transform your business with intelligent IoT systems, industrial automation, and expert tech consultancy.
        </p>
        <a
          href="#services"
          className="inline-block bg-blue-600 hover:bg-blue-700 transition px-8 py-3 rounded-full font-semibold drop-shadow-md focus:outline-none focus:ring-4 focus:ring-blue-400"
        >
          Explore Services
        </a>
      </motion.div>
    </section>
  );
}

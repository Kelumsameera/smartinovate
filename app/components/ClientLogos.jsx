"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  { name: "AWS", src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
  { name: "Google Cloud", src: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" },
  { name: "Microsoft Azure", src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" },
  { name: "React", src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
  { name: "Next.js", src: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" },
  { name: "Node.js", src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
  { name: "Vercel", src: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Vercel_logo_black.svg" },
  { name: "Python", src: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
  { name: "Flutter", src: "https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png" },
  { name: "Stripe", src: "https://woinupcbvkriufpyhwtm.supabase.co/storage/v1/object/public/images/Stripe%20wordmark%20-%20Blurple.svg" },
  { name: "GoDaddy", src: "https://woinupcbvkriufpyhwtm.supabase.co/storage/v1/object/public/images/GoDaddy_logo.svg.png" },
  { name: "LankaHosting", src: "https://woinupcbvkriufpyhwtm.supabase.co/storage/v1/object/public/images/lankahost-authorized-lk-domain-reseller-logo.png" },
  { name: "PayHere", src: "https://www.payhere.lk/downloads/images/payhere_short_banner.png" },
];

export default function ClientLogos() {
  return (
    <section className="py-20 bg-linear-to-r from-gray-50 via-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* TITLE */}
        <h2 className="text-center text-3xl font-bold text-gray-900 mb-4">
          Trusted <span className="text-blue-600">Technology Partners</span>
        </h2>

        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We build secure, scalable solutions using world-class platforms trusted
          by global technology leaders.
        </p>

        {/* CAROUSEL */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex w-max gap-16"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 35,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {/* DUPLICATED LIST (CRITICAL PART) */}
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-45"
              >
                <Image
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  width={160}
                  height={80}
                  className="object-contain g transition duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

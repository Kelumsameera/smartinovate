"use client";

import { motion } from "framer-motion";

export default function AnimatedIcon({ children }) {
  return (
    <motion.div
      className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        y: [0, -6, 0],
      }}
      transition={{
        duration: 2.5,
        ease: "easeInOut",
        repeat: Infinity,
      }}
      whileHover={{
        scale: 1.15,
        rotate: 6,
      }}
    >
      {children}
    </motion.div>
  );
}

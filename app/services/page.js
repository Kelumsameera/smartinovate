"use client";

import { motion } from "framer-motion";
import { Wrench, Cpu, Smartphone } from "lucide-react";

const services = [
  {
    icon: <Wrench className="w-10 h-10 text-green-400" />,
    title: "Industrial Automation",
    desc: "We design and implement smart automation solutions to optimize production efficiency and reduce costs.",
  },
  {
    icon: <Cpu className="w-10 h-10 text-green-400" />,
    title: "IoT Solutions",
    desc: "Our IoT systems connect devices and data for smarter monitoring, control, and analytics.",
  },
  {
    icon: <Smartphone className="w-10 h-10 text-green-400" />,
    title: "App Development",
    desc: "Custom mobile and web applications tailored to your business needs.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-blue-900"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>

        <motion.p
          className="mt-4 text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          We deliver technology-driven solutions that transform your business.
        </motion.p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold text-blue-900">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

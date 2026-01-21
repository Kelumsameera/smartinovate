"use client";

import { motion } from "framer-motion";
import { services } from "../data/services";
import AnimatedIcon from "../components/AnimatedIcon";

export default function ServicesClient() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-2xl border hover:shadow-xl transition"
            >
              {/* 🔥 Animated Icon */}
              <AnimatedIcon>
                <Icon size={28} />
              </AnimatedIcon>

              <h3 className="text-2xl font-semibold mt-6 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-5">
                {service.description}
              </p>

              <div className="mb-6">
                <h4 className="font-semibold mb-2">
                  Industry Use-Cases
                </h4>
                <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                  {service.useCases.map((useCase) => (
                    <li key={useCase}>{useCase}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl p-4 border">
                <h4 className="font-semibold mb-2">Pricing</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>Starter: {service.pricing.starter}</li>
                  <li>Pro: {service.pricing.pro}</li>
                  <li>Enterprise: {service.pricing.enterprise}</li>
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

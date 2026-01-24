"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaCode,
  FaMobileAlt,
  FaGlobe,
  FaBolt,
  FaCog,
  FaRobot,
  FaCloud,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa";
import ServiceCTA from "./ServiceCTA";

/* 🎬 Motion variants */
const fadeLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0 },
};

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

export default function ServicesPage() {
  const services = [
    {
      slug: "custom-software-development",
      title: "Custom Software Development",
      icon: <FaCode className="w-14 h-14 text-blue-600" />,
      description:
        "Bespoke software solutions built for scalability, security, and long-term growth.",
      features: [
        "Enterprise Applications",
        "Legacy System Modernization",
        "API Integration",
        "Microservices Architecture",
      ],
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80",
    },
    {
      slug: "web-development",
      title: "Web Development",
      icon: <FaGlobe className="w-14 h-14 text-blue-600" />,
      description:
        "High-performance, SEO-friendly websites that convert visitors into customers.",
      features: [
        "Responsive Design",
        "E-commerce Solutions",
        "CMS Development",
        "Progressive Web Apps",
      ],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    },
    {
      slug: "mobile-app-development",
      title: "Mobile App Development",
      icon: <FaMobileAlt className="w-14 h-14 text-blue-600" />,
      description:
        "Native and cross-platform mobile apps with seamless user experience.",
      features: [
        "iOS & Android Apps",
        "React Native / Flutter",
        "App Store Optimization",
        "UI / UX Design",
      ],
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80",
    },
    {
      slug: "industrial-automation",
      title: "Industrial Automation",
      icon: <FaCog className="w-14 h-14 text-blue-600" />,
      description:
        "Smart automation systems that improve productivity and efficiency.",
      features: [
        "PLC Programming",
        "SCADA Systems",
        "Process Automation",
        "Robotics Integration",
      ],
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80",
    },
    {
      slug: "iot-home-automation",
      title: "IoT & Home Automation",
      icon: <FaRobot className="w-14 h-14 text-blue-600" />,
      description:
        "Connected smart systems for monitoring, automation, and control.",
      features: [
        "Smart Home Systems",
        "IoT Device Integration",
        "Sensor Networks",
        "Remote Monitoring",
      ],
      image:
        "https://images.unsplash.com/photo-1558002038-1055907df827?w=1200&q=80",
    },
    {
      slug: "cloud-solutions",
      title: "Cloud Solutions",
      icon: <FaCloud className="w-14 h-14 text-blue-600" />,
      description:
        "Secure and scalable cloud infrastructure with DevOps excellence.",
      features: [
        "Cloud Migration",
        "AWS / Azure / GCP",
        "CI/CD Pipelines",
        "Cloud Security",
      ],
      image:
        "https://woinupcbvkriufpyhwtm.supabase.co/storage/v1/object/public/images/cloud.jpg",
    },
    {
      slug: "it-consulting",
      title: "IT Consulting",
      icon: <FaBolt className="w-14 h-14 text-blue-600" />,
      description:
        "Strategic guidance to align technology with your business goals.",
      features: [
        "Technology Strategy",
        "System Audits",
        "Digital Transformation",
        "Business Continuity Planning",
      ],
      image:
        "https://woinupcbvkriufpyhwtm.supabase.co/storage/v1/object/public/images/consult.png",
    },
  ];

  return (
    <div className="bg-white">
      {/* HERO */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8 }}
        className="pt-32 pb-20 bg-linear-to-br from-blue-50 via-white to-blue-100"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            End-to-end technology solutions crafted to accelerate innovation and
            business growth.
          </p>
        </div>
      </motion.section>

      {/* SERVICES */}
      {services.map((service, index) => {
        const reverse = index % 2 !== 0;

        return (
          <section
            key={service.slug}
            className={`py-24 ${
              index % 2 === 0
                ? "bg-linear-to-r from-white via-blue-50 to-white"
                : "bg-linear-to-r from-white via-gray-50 to-white"
            }`}
          >
            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-14 items-center">
              {/* DETAILS */}
              <motion.div
                variants={reverse ? fadeRight : fadeLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className={reverse ? "md:order-2" : "md:order-1"}
              >
                {service.icon}
                <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-4">
                  {service.title}
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  {service.description}
                </p>

                <div className="space-y-3 mb-8">
                  {service.features.map((f, i) => (
                    <div key={i} className="flex gap-3">
                      <FaCheck className="text-green-600 mt-1" />
                      <span className="text-gray-700">{f}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  Learn more
                  <FaArrowRight className="ml-2" />
                </Link>
              </motion.div>

              {/* IMAGE */}
              <motion.div
                variants={reverse ? fadeLeft : fadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
                className={reverse ? "md:order-1" : "md:order-2"}
              >
                <Image
                  src={service.image}
                  alt={`${service.title} illustration`}
                  width={900}
                  height={520}
                  className="rounded-2xl shadow-xl object-cover"
                />
              </motion.div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <div className="px-4 pb-24">
        <ServiceCTA />
      </div>
    </div>
  );
}

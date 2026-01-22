"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
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

export default function ServicesPage() {
  const [visibleSections, setVisibleSections] = useState([]);
  const sectionRefs = useRef([]);

  /* ✅ SERVICES WITH STABLE SLUGS */
  const services = [
    {
      id: 1,
      slug: "custom-software-development",
      icon: <FaCode className="w-16 h-16 text-blue-600" />,
      title: "Custom Software Development",
      description:
        "Transform your business processes with bespoke software solutions tailored to your unique requirements.",
      features: [
        "Enterprise Application Development",
        "Legacy System Modernization",
        "API Integration & Development",
        "Microservices Architecture",
      ],
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80",
    },
    {
      id: 2,
      slug: "web-development",
      icon: <FaGlobe className="w-16 h-16 text-blue-600" />,
      title: "Web Development",
      description:
        "Create stunning, responsive websites that captivate your audience and convert visitors into customers.",
      features: [
        "Responsive Web Design",
        "E-commerce Solutions",
        "Content Management Systems",
        "Progressive Web Apps (PWA)",
      ],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    },
    {
      id: 3,
      slug: "mobile-apps",
      icon: <FaMobileAlt className="w-16 h-16 text-blue-600" />,
      title: "Mobile App Development",
      description:
        "Reach your customers anywhere with powerful native and cross-platform mobile applications.",
      features: [
        "Native iOS & Android Apps",
        "Cross-Platform Development",
        "App Store Optimization",
        "Mobile UI/UX Design",
      ],
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80",
    },
    {
      id: 4,
      slug: "industrial-automation",
      icon: <FaCog className="w-16 h-16 text-blue-600" />,
      title: "Industrial Automation",
      description:
        "Increase efficiency and reduce costs with smart industrial automation solutions.",
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
      id: 5,
      slug: "iot-home-automation",
      icon: <FaRobot className="w-16 h-16 text-blue-600" />,
      title: "IoT & Home Automation",
      description:
        "Connect your world with intelligent IoT and smart home automation systems.",
      features: [
        "Smart Home Systems",
        "IoT Device Integration",
        "Sensor Networks",
        "Remote Monitoring & Control",
      ],
      image:
        "https://images.unsplash.com/photo-1558002038-1055907df827?w=1200&q=80",
    },
    {
      id: 6,
      slug: "cloud-solutions",
      icon: <FaCloud className="w-16 h-16 text-blue-600" />,
      title: "Cloud Solutions",
      description:
        "Scale your business effortlessly with secure and reliable cloud solutions.",
      features: [
        "Cloud Migration",
        "AWS, Azure & Google Cloud",
        "DevOps & CI/CD",
        "Cloud Security & Compliance",
      ],
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
    },
    {
      id: 7,
      slug: "consulting",
      icon: <FaBolt className="w-16 h-16 text-blue-600" />,
      title: "IT Consulting",
      description:
        "Strategic IT consulting to guide your digital transformation and growth.",
      features: [
        "Technology Strategy",
        "System Audits",
        "Digital Transformation",
        "Business Continuity Planning",
      ],
      image:
        "https://images.unsplash.com/photo-1661418164801-4eb1fd33d5d4?w=1200&q=80",
    },
  ];

  /* ✅ SCROLL ANIMATION */
  useEffect(() => {
    const observers = sectionRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSections((prev) =>
                prev.includes(index) ? prev : [...prev, index]
              );
            }
          });
        },
        { threshold: 0.2 }
      );
      if (ref) observer.observe(ref);
      return observer;
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="pt-32 pb-16 px-4 bg-linear-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to transform your
            business and drive innovation.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto space-y-32">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => (sectionRefs.current[index] = el)}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              {/* CONTENT */}
              <div
                className={`transition-all duration-1000 ${
                  visibleSections.includes(index)
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-20"
                }`}
              >
                {service.icon}
                <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-4">
                  {service.title}
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  {service.description}
                </p>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex gap-3">
                      <FaCheck className="text-green-600 mt-1" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* ✅ SEO FRIENDLY LINK */}
                <Link
                  href={`/services/${service.slug}`}
                  aria-label={`Learn more about ${service.title}`}
                  className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  Learn more about {service.title}
                  <FaArrowRight className="ml-2" />
                </Link>
              </div>

              {/* IMAGE */}
              <div
                className={`transition-all duration-1000 delay-200 ${
                  visibleSections.includes(index)
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-20"
                }`}
              >
                <Image
                  src={service.image}
                  alt={`${service.title} service illustration`}
                  width={800}
                  height={500}
                  className="rounded-xl shadow-xl object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="px-4 pb-20">
        <ServiceCTA />
      </div>
    </div>
  );
}

// import { FaCode, FaMobileAlt, FaGlobe, FaBolt } from "react-icons/fa";

// const services = [
//   {
//     icon: <FaCode />,
//     title: "Custom Software",
//     desc: "Tailored business solutions"
//   },
//   {
//     icon: <FaGlobe />,
//     title: "Web Development",
//     desc: "Fast & SEO friendly websites"
//   },
//   {
//     icon: <FaMobileAlt />,
//     title: "Mobile Apps",
//     desc: "iOS & Android apps"
//   },
//   {
//     icon: <FaBolt />,
//     title: "Cloud Solutions",
//     desc: "Scalable cloud infrastructure"
//   }
// ];

// export default function Services() {
//   return (
//     <section id="services" className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-4">
//         <h2 className="text-4xl font-bold text-center mb-12">
//           Our Services
//         </h2>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {services.map((s, i) => (
//             <div key={i} className="p-6 border rounded-lg">
//               <div className="text-blue-600 text-3xl mb-4">{s.icon}</div>
//               <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
//               <p className="text-gray-600">{s.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// 

'use client';

import React, { useState, useEffect, useRef } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaCode, FaMobileAlt, FaGlobe, FaBolt, FaCog, FaRobot, FaDatabase, FaCloud, FaArrowRight, FaCheck } from 'react-icons/fa';

export default function ServicesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState([]);
  const sectionRefs = useRef([]);

  const services = [
    {
      id: 1,
      icon: <FaCode className="w-16 h-16 text-blue-600" />,
      title: "Custom Software Development",
      description: "Transform your business processes with bespoke software solutions tailored to your unique requirements. We build scalable, efficient, and user-friendly applications that drive growth and innovation.",
      features: [
        "Enterprise Application Development",
        "Legacy System Modernization",
        "API Integration & Development",
        "Microservices Architecture"
      ],
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop"
    },
    {
      id: 2,
      icon: <FaGlobe className="w-16 h-16 text-blue-600" />,
      title: "Web Development",
      description: "Create stunning, responsive websites that captivate your audience and convert visitors into customers. Our web solutions are built with the latest technologies for optimal performance and SEO.",
      features: [
        "Responsive Web Design",
        "E-commerce Solutions",
        "Content Management Systems",
        "Progressive Web Apps (PWA)"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      icon: <FaMobileAlt className="w-16 h-16 text-blue-600" />,
      title: "Mobile App Development",
      description: "Reach your customers wherever they are with powerful mobile applications. We develop native and cross-platform apps that deliver exceptional user experiences on iOS and Android.",
      features: [
        "Native iOS & Android Apps",
        "Cross-Platform Development",
        "App Store Optimization",
        "Mobile UI/UX Design"
      ],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop"
    },
    {
      id: 4,
      icon: <FaCog className="w-16 h-16 text-blue-600" />,
      title: "Industrial Automation",
      description: "Streamline your manufacturing and industrial processes with cutting-edge automation solutions. Increase efficiency, reduce costs, and improve quality with smart automation systems.",
      features: [
        "PLC Programming",
        "SCADA Systems",
        "Process Automation",
        "Robotics Integration"
      ],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop"
    },
    {
      id: 5,
      icon: <FaRobot className="w-16 h-16 text-blue-600" />,
      title: "IoT & Home Automation",
      description: "Connect your world with intelligent IoT solutions and smart home automation. From smart sensors to fully integrated home systems, we bring innovation to your fingertips.",
      features: [
        "Smart Home Systems",
        "IoT Device Integration",
        "Sensor Networks",
        "Remote Monitoring & Control"
      ],
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop"
    },
    {
      id: 6,
      icon: <FaCloud className="w-16 h-16 text-blue-600" />,
      title: "Cloud Solutions",
      description: "Leverage the power of cloud computing to scale your business effortlessly. We provide comprehensive cloud migration, deployment, and management services for optimal performance.",
      features: [
        "Cloud Migration Services",
        "AWS, Azure & Google Cloud",
        "DevOps & CI/CD",
        "Cloud Security & Compliance"
      ],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
    }
  ];

  useEffect(() => {
    const observers = sectionRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSections((prev) => [...new Set([...prev, index])]);
            }
          });
        },
        { threshold: 0.2 }
      );

      if (ref) observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
     

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to transform your business and drive innovation. From software development to IoT integration, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Zigzag Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-32">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => (sectionRefs.current[index] = el)}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 0 ? '' : 'md:flex-row-reverse'
              }`}
            >
              {/* Content Side */}
              <div
                className={`${
                  index % 2 === 0 ? 'md:order-1' : 'md:order-2'
                } transform transition-all duration-1000 ${
                  visibleSections.includes(index)
                    ? 'translate-x-0 opacity-100'
                    : index % 2 === 0
                    ? '-translate-x-20 opacity-0'
                    : 'translate-x-20 opacity-0'
                }`}
              >
                <div className="mb-6">{service.icon}</div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  {service.description}
                </p>
                
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <FaCheck className="w-5 h-5 text-green-600 mt-1 shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition flex items-center">
                  Learn More <FaArrowRight className="ml-2" />
                </button>
              </div>

              {/* Image Side */}
              <div
                className={`${
                  index % 2 === 0 ? 'md:order-2' : 'md:order-1'
                } transform transition-all duration-1000 delay-200 ${
                  visibleSections.includes(index)
                    ? 'translate-x-0 opacity-100'
                    : index % 2 === 0
                    ? 'translate-x-20 opacity-0'
                    : '-translate-x-20 opacity-0'
                }`}
              >
                <div className="relative rounded-lg overflow-hidden shadow-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-blue-600/20 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss how our services can help you achieve your goals. Get in touch with our team today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition font-semibold">
              Get Started
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition font-semibold">
              View Portfolio
            </button>
          </div>
        </div>
      </section>

      
    </div>
  );
}
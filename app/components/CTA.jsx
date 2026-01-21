"use client";

import { CheckCircle } from "lucide-react";

const features = [
  "Expert Development Team",
  "Agile Methodology",
  "24/7 Support",
  "Scalable Solutions",
  "On-Time Delivery",
  "Competitive Pricing",
];

export default function CTA() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose SmartInnovate?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We combine technical expertise with creative innovation to deliver
              solutions that exceed expectations.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Ready to Start Your Project?
            </h3>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
              />

              <textarea
                rows={4}
                placeholder="Tell us about your project"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
              />

              <button className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
                Send Message
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

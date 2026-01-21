import ServicesClient from "./ServicesClient";

export const metadata = {
  title: "Our Services | Smartinovate",
  description:
    "Explore Smartinovate services including IoT, industrial automation, smart systems, and custom software development in Sri Lanka.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Our <span className="text-blue-600">Services</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We deliver intelligent, scalable, and future-ready technology
            solutions across industries.
          </p>
        </div>
      </section>

      {/* Animated Services */}
      <ServicesClient />

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Build Something Smart?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Contact Smartinovate to discuss a custom solution tailored to your
            industry.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Contact Us
            </a>
            <a
              href="https://wa.me/94704685300"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

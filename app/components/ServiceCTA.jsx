import Link from "next/link";

export default function ServiceCTA() {
  return (
    <section className="mt-24 py-16 bg-blue-600 text-white text-center rounded-2xl">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Build Something Smart?
        </h2>

        <p className="text-lg mb-8 opacity-90">
          Contact SmartInnovate to discuss a custom solution tailored to your
          industry.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Contact Us
          </Link>

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
  );
}

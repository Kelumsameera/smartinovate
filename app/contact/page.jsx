import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact SmartInnovate | Web & Software Company Sri Lanka",
  description:
    "Contact SmartInnovate in Panadura, Sri Lanka for web development, software solutions, IoT and automation services.",

  keywords: [
    "contact software company Sri Lanka",
    "web development Panadura",
    "SmartInnovate contact",
  ],

  openGraph: {
    title: "Contact SmartInnovate",
    description:
      "Get in touch with SmartInnovate for web, software and automation solutions.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <section className="pt-28 pb-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold mb-4">
            Contact <span className="text-blue-600">SmartInnovate</span>
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Talk to Sri Lanka’s trusted software and web development team.
            Let’s build your next digital solution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left Info */}
          <div className="space-y-6">

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">
                Contact Information
              </h3>

              <p>
                📧 info@smartinnovate.com
              </p>

              <p>
                📞 +94 76 778 5300
              </p>

              <p>
                📍 150/1 Deniya Road, Kuruppumulla,
                Panadura, Sri Lanka
              </p>
            </div>

            {/* Real Google Map */}
            <iframe
              title="SmartInnovate Panadura Location"
              src="https://www.google.com/maps?q=150/1+Deniya+Road+Panadura&output=embed"
              className="w-full h-64 rounded-lg border"
              loading="lazy"
            />
          </div>

          {/* Right Form */}
          <ContactForm />

        </div>
      </div>
    </section>
  );
}

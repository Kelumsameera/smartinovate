import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact Us | SmartInnovate",
  description: "Contact SmartInnovate for web, software, and automation solutions.",
};

export default function ContactPage() {
  return (
    <section className="pt-28 pb-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold mb-4">
            Contact <span className="text-blue-600">Us</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Let’s discuss your project and build something impactful together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Left */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Contact Info</h3>
              <p>Email: info@smartinnovate.com</p>
              <p>Phone: +94 70 468 5300</p>
              <p>Location: Sri Lanka</p>
            </div>

            {/* Google Map */}
            <iframe
              title="SmartInnovate Location"
              src="https://www.google.com/maps?q=Sri%20Lanka&output=embed"
              className="w-full h-64 rounded-lg border"
              loading="lazy"
            />
          </div>

          {/* Right */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

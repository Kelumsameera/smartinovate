import ServiceCTA from "@/app/components/ServiceCTA";

export const metadata = {
  title: "Custom Software Development | SmartInnovate",
  description:
    "Bespoke software solutions tailored to your business needs. We build scalable, secure, and high-performance applications.",
};

export default function CustomSoftwarePage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-6">
        Custom Software Development
      </h1>

      <p className="text-lg text-gray-600 mb-10">
        Transform your business processes with bespoke software solutions
        designed specifically for your organization. We build scalable,
        efficient, and user-friendly applications that drive growth and
        innovation.
      </p>

      <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
      <ul className="list-disc pl-6 space-y-3 mb-10">
        <li>Enterprise Application Development</li>
        <li>Legacy System Modernization</li>
        <li>API Integration & Development</li>
        <li>Microservices Architecture</li>
        <li>Secure & Scalable Backend Systems</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
      <p className="mb-16 text-gray-600">
        Our team combines technical expertise with business understanding to
        deliver software that aligns perfectly with your goals.
      </p>

      <ServiceCTA />
    </section>
  );
}

import ServiceCTA from "@/app/components/ServiceCTA";

export const metadata = {
  title: "Mobile App Development | SmartInnovate",
  description:
    "Professional mobile app development services for iOS and Android. We build high-performance, scalable, and user-friendly mobile applications.",
};

export default function MobileAppsPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-24">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-6">
        Mobile App Development
      </h1>

      <p className="text-lg text-gray-600 mb-10">
        Reach your customers wherever they are with powerful, intuitive mobile
        applications. We design and develop high-quality mobile apps that deliver
        exceptional user experiences on both iOS and Android platforms.
      </p>

      {/* What we offer */}
      <h2 className="text-2xl font-semibold mb-4">
        What We Offer
      </h2>
      <ul className="list-disc pl-6 space-y-3 mb-10 text-gray-700">
        <li>Native iOS & Android App Development</li>
        <li>Cross-Platform Apps (React Native / Flutter)</li>
        <li>Mobile UI/UX Design</li>
        <li>App Store Optimization (ASO)</li>
        <li>Maintenance & Performance Optimization</li>
      </ul>

      {/* Why choose us */}
      <h2 className="text-2xl font-semibold mb-4">
        Why Choose SmartInnovate
      </h2>
      <p className="mb-16 text-gray-600">
        We combine modern technologies, clean architecture, and user-centered
        design to build mobile apps that are fast, secure, scalable, and ready
        for growth.
      </p>

      {/* CTA */}
      <ServiceCTA />
    </section>
  );
}

import ServiceCTA from "@/app/components/ServiceCTA";
import { FaApple, FaAndroid, FaReact, FaCheckCircle } from "react-icons/fa";

export const metadata = {
  title: "Mobile App Development | SmartInnovate",
  description:
    "Professional mobile app development services for iOS and Android. We build scalable, secure, and high-performance mobile applications.",
};

export default function MobileAppsPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-20 bg-linear-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Mobile App <span className="text-blue-600">Development</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We design and build high-performance mobile applications that deliver
            exceptional user experiences across iOS and Android platforms.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-6">
          Build Apps Your Users Love
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl">
          Our mobile solutions are engineered for performance, scalability, and
          security. From idea to app store launch, we handle the complete mobile
          app lifecycle.
        </p>
      </section>

      {/* FEATURES */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What We Offer
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Native iOS & Android Development",
              "Cross-Platform Apps (React Native / Flutter)",
              "Mobile UI/UX Design",
              "App Store Optimization (ASO)",
              "Performance & Security Optimization",
              "Ongoing Maintenance & Support",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <FaCheckCircle className="text-blue-600 mb-4 text-xl" />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Technologies We Use
          </h2>
          <p className="text-gray-600 mb-10">
            We leverage modern frameworks and proven technologies to build
            reliable mobile apps.
          </p>

          <div className="flex flex-wrap justify-center gap-8 text-4xl text-blue-600">
            <FaApple title="iOS" />
            <FaAndroid title="Android" />
            <FaReact title="React Native" />
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Development Process
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              "Requirement Analysis",
              "UI/UX Design",
              "App Development",
              "Testing & Deployment",
            ].map((step, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-blue-600 text-2xl font-bold mb-2">
                  {i + 1}
                </div>
                <p className="text-gray-700 font-medium">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 pb-24">
        <ServiceCTA />
      </section>
    </>
  );
}

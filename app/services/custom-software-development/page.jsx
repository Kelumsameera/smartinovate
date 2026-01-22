import ServiceCTA from "@/app/components/ServiceCTA";
import {
  FaCode,
  FaLayerGroup,
  FaServer,
  FaLock,
  FaCheckCircle,
  FaChartLine,
} from "react-icons/fa";

export const metadata = {
  title: "Custom Software Development | SmartInnovate",
  description:
    "Bespoke software solutions tailored to your business needs. We build scalable, secure, and high-performance applications.",
};

export default function CustomSoftwarePage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-20 bg-linear-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Custom <span className="text-blue-600">Software Development</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bespoke software engineered to solve real business problems, improve
            efficiency, and scale seamlessly as your organization grows.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-6">
          Software Built Around Your Business
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl">
          We design and develop custom software solutions tailored precisely to
          your workflows, industry requirements, and long term goals  not
          off the shelf compromises.
        </p>
      </section>

      {/* SERVICES */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What We Offer
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Enterprise Application Development",
              "Legacy System Modernization",
              "API Integration & Development",
              "Microservices Architecture",
              "Secure & Scalable Backend Systems",
              "Cloud-Ready Software Solutions",
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

      {/* TECHNOLOGIES */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Architecture & Technologies
          </h2>
          <p className="text-gray-600 mb-10">
            We use proven architectures and modern technologies to build
            reliable, maintainable, and future-ready software.
          </p>

          <div className="flex flex-wrap justify-center gap-10 text-blue-600 text-4xl">
            <FaCode title="Clean Code" />
            <FaLayerGroup title="Modular Architecture" />
            <FaServer title="Backend Systems" />
            <FaLock title="Security & Compliance" />
            <FaChartLine title="Scalability & Performance" />
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
              "Discovery & Planning",
              "System Design",
              "Agile Development",
              "Testing & Deployment",
            ].map((step, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
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

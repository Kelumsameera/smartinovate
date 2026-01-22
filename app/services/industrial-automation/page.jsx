import ServiceCTA from "@/app/components/ServiceCTA";
import {
  FaIndustry,
  FaCogs,
  FaRobot,
  FaChartLine,
  FaCheckCircle,
  FaShieldAlt,
} from "react-icons/fa";

export const metadata = {
  title: "Industrial Automation | SmartInnovate",
  description:
    "Advanced industrial automation solutions to improve efficiency, reduce costs, and enhance productivity through smart control systems.",
};

export default function IndustrialAutomationPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-20 bg-linear-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Industrial <span className="text-blue-600">Automation</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Smart automation solutions that modernize industrial operations,
            improve efficiency, and ensure reliable, scalable production systems.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-6">
          Automate. Optimize. Scale.
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl">
          We design and implement intelligent industrial automation systems that
          help organizations streamline operations, reduce downtime, and gain
          real-time visibility into production processes.
        </p>
      </section>

      {/* SERVICES */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Automation Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "PLC Programming & Control Systems",
              "SCADA Design & Implementation",
              "Process Automation Solutions",
              "Robotics & Motion Control",
              "Industrial IoT Integration",
              "Predictive Maintenance Systems",
            ].map((service, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <FaCheckCircle className="text-blue-600 mb-4 text-xl" />
                <p className="text-gray-700">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Technologies & Capabilities
          </h2>
          <p className="text-gray-600 mb-10">
            We work with industry proven platforms and modern automation tools.
          </p>

          <div className="flex flex-wrap justify-center gap-10 text-blue-600 text-4xl">
            <FaIndustry title="Industrial Systems" />
            <FaCogs title="Control & Automation" />
            <FaRobot title="Robotics Integration" />
            <FaChartLine title="Data & Analytics" />
            <FaShieldAlt title="Safety & Reliability" />
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Industries We Serve
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              "Manufacturing",
              "Energy & Utilities",
              "Logistics & Warehousing",
              "Industrial Operations",
            ].map((industry, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <p className="font-medium text-gray-700">{industry}</p>
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

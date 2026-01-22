import ServiceCTA from "../../components/ServiceCTA";
import {
  FaWifi,
  FaHome,
  FaCloud,
  FaShieldAlt,
  FaCheckCircle,
} from "react-icons/fa";

export const metadata = {
  title: "IoT & Home Automation | SmartInnovate",
  description:
    "Smart IoT and home automation solutions that connect devices, enhance security, improve comfort, and enable remote control.",
};

export default function IoTHomeAutomationPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-20 bg-linear-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            IoT & <span className="text-blue-600">Home Automation</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect, monitor, and control your environment with intelligent IoT
            and smart automation solutions built for modern living and industry.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-6">
          Smarter Living. Smarter Operations.
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl">
          We design and deploy secure, scalable IoT ecosystems that connect
          devices, collect real-time data, and enable intelligent automation 
          from smart homes to enterprise grade IoT platforms.
        </p>
      </section>

      {/* SOLUTIONS */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Solutions We Provide
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Smart Home Automation Systems",
              "IoT Device & Sensor Integration",
              "Real-Time Monitoring Dashboards",
              "Remote Control & Automation",
              "Cloud-Connected IoT Platforms",
              "Data Analytics & Alerts",
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
            Technologies & Capabilities
          </h2>
          <p className="text-gray-600 mb-10">
            We use reliable hardware, secure protocols, and scalable cloud
            infrastructure.
          </p>

          <div className="flex flex-wrap justify-center gap-10 text-blue-600 text-4xl">
            <FaWifi title="IoT Connectivity" />
            <FaHome title="Smart Home Systems" />
            <FaCloud title="Cloud Platforms" />
            <FaShieldAlt title="Security & Encryption" />
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Key Benefits
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              "Remote Monitoring & Control",
              "Improved Energy Efficiency",
              "Enhanced Security & Safety",
              "Scalable & Future-Ready Systems",
            ].map((benefit, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <p className="font-medium text-gray-700">{benefit}</p>
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

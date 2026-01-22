import ServiceCTA from "@/app/components/ServiceCTA";

export const metadata = {
  title: "Industrial Automation | SmartInnovate",
  description:
    "Advanced industrial automation solutions to improve efficiency, reduce costs, and enhance productivity.",
};

export default function IndustrialAutomationPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-6">
        Industrial Automation
      </h1>

      <p className="text-lg text-gray-600 mb-10">
        Streamline your manufacturing and industrial processes with cutting-edge
        automation solutions. We help businesses increase efficiency, reduce
        operational costs, and improve quality through smart automation systems.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Our Automation Services</h2>
      <ul className="list-disc pl-6 space-y-3 mb-10">
        <li>PLC Programming</li>
        <li>SCADA Systems</li>
        <li>Process Automation</li>
        <li>Robotics Integration</li>
        <li>Industrial IoT Integration</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Industries We Serve</h2>
      <p className="mb-16 text-gray-600">
        Manufacturing, Energy, Utilities, Logistics, and Industrial Operations.
      </p>

      <ServiceCTA />
    </section>
  );
}

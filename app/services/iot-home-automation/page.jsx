
import ServiceCTA from "../../components/ServiceCTA";


export const metadata = {
  title: "IoT & Home Automation | SmartInnovate",
  description:
    "Smart IoT and home automation solutions that connect devices, improve comfort, and enable remote control.",
};

export default function IoTHomeAutomationPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-6">
        IoT & Home Automation
      </h1>

      <p className="text-lg text-gray-600 mb-10">
        Connect your world with intelligent IoT solutions and smart home
        automation. From smart sensors to fully integrated systems, we bring
        innovation directly to your fingertips.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Solutions We Provide</h2>
      <ul className="list-disc pl-6 space-y-3 mb-10">
        <li>Smart Home Systems</li>
        <li>IoT Device Integration</li>
        <li>Sensor Networks</li>
        <li>Remote Monitoring & Control</li>
        <li>Cloud-Connected IoT Platforms</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
      <p className="mb-16 text-gray-600">
        Improved efficiency, enhanced security, energy savings, and complete
        control from anywhere.
      </p>

      <ServiceCTA />
    </section>
  );
}

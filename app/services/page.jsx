export const metadata = {
  title: "Our Services | Smartinovate",
  description:
    "Explore Smartinovate's range of services — IoT, industrial automation, smart home systems, and software development in Sri Lanka.",
};

const services = [
  {
    title: "Customized Software Development",
    desc: "Tailor-made software solutions that align with your business goals and workflow.",
  },
  {
    title: "Web, Mobile & Desktop Applications",
    desc: "Cross-platform applications that are functional, fast, and user-friendly.",
  },
  {
    title: "Industrial Automation Systems",
    desc: "Smart automation systems to increase production efficiency and reliability.",
  },
  {
    title: "IoT & Smart Home Automation",
    desc: "Connected systems for real-time monitoring and control of your environment.",
  },
  {
    title: "Environment Monitoring Solutions",
    desc: "Systems for tracking temperature, humidity, and air quality for industrial and agricultural use.",
  },
];

export default function ServicesPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
      <p className="text-lg text-gray-700 text-center mb-16">
        At Smartinovate, we craft intelligent solutions that empower innovation
        — from IoT-based automation systems to customized software development.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        {services.map((s) => (
          <div key={s.title} className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{s.title}</h3>
            <p className="text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

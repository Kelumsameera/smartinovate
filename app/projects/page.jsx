export const metadata = {
  title: "Projects | Smartinovate",
  description:
    "Explore Smartinovate’s real-world projects — IoT systems, automation, and smart monitoring solutions built for Sri Lanka and beyond.",
};

const projects = [
  {
    title: "Clean Room Monitoring System",
    img: "/projects/cleanroom.svg",
    desc: "Monitors air quality, temperature, and humidity in sterile environments.",
  },
  {
    title: "Smart Greenhouse Monitoring System",
    img: "/projects/greenhouse.svg",
    desc: "Automated control of temperature, humidity, and irrigation for optimal crop growth.",
  },
  {
    title: "Power Generator Remote Monitoring System",
    img: "/projects/Genarator.svg",
    desc: "Real-time monitoring of fuel, battery, and operational status of industrial generators.",
  },
];

export default function ProjectsPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-center mb-8">Our Projects</h1>
      <p className="text-lg text-gray-700 text-center mb-16">
        Each Smartinovate project is designed with precision, innovation, and reliability — 
        combining IoT, automation, and data-driven intelligence.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p) => (
          <div
            key={p.title}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
          >
            <img src={p.img} alt={p.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{p.title}</h3>
              <p className="text-gray-600 text-sm">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Services() {
  const services = [
    { title: "Customized Software Development", icon: "🖥️", description: "Tailor-made software solutions that align with your business goals and workflow." },
    { title: "Web, Mobile & Desktop Apps", icon: "📱", description: "Cross-platform applications that are functional, fast, and user-friendly." },
    { title: "Industrial Automation Systems", icon: "⚙️", description: "Smart automation systems to increase production efficiency and reliability." },
    { title: "Environment Monitoring Systems", icon: "🌿", description: "Solutions to monitor, log, and respond to environmental parameters in real time." },
  ];

  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

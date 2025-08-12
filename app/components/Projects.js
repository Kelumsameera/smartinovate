export default function Projects() {
  const projects = [
    { title: "Clean Room Monitoring System", image: "/projects/clean-room.jpg", link: "/projects/clean-room" },
    { title: "Smart Greenhouse Monitoring System", image: "/projects/smart-greenhouse.jpg", link: "/projects/smart-greenhouse" },
    { title: "Power Generator Remote Monitoring System", image: "/projects/power-generator.jpg", link: "/projects/power-generator" },
  ];

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Completed Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover mb-4 rounded-lg" />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <a href={project.link} className="text-blue-600 hover:underline">Read More →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

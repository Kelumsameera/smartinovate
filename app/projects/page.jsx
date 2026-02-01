import Image from "next/image";

export const metadata = {
  title: "Projects | SmartInnovate",
  description:
    "Explore SmartInnovate’s eCommerce, business websites, and booking platforms developed for Sri Lankan companies.",
};

const projects = [
  {
    title: "eCommerce Website Platform",
    img: "/projects/ecommerce.png",
    desc: "Custom eCommerce platform with online payments, order tracking, and SEO optimization for online businesses.",
    url: "https://i-computers-frontend-chi.vercel.app/",
  },
  {
    title: "CCTV Camera Service Website (camx.lk)",
    img: "/projects/cctv.png",
    desc: "Professional business website for a CCTV and security service company with service listings and inquiry system.",
    url: "https://camx.lk/",
  },
  {
    title: "Sri Lanka Tour & Driver Booking Website",
    img: "/projects/tour.png",
    desc: "Online booking platform for tours and private drivers in Sri Lanka with itinerary management and contact system.",
    url: "https://best-sri-lanka-tours-guide.vercel.app/",
  },
];

export default function ProjectsPage() {
  return (
    <section className="max-w-6xl mt-10 mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-center mb-8">
        Our Recent Projects
      </h1>

      <p className="text-lg text-gray-700 text-center mb-16 max-w-3xl mx-auto">
        We create modern, high-performing websites and platforms for Sri Lankan
        businesses from powerful eCommerce solutions to professional service
        websites and smart booking systems for tours and transport providers.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden group block"
          >
            <Image
              src={p.img}
              alt={`${p.title} by SmartInnovate`}
              width={600}
              height={400}
              className="w-full h-48 object-cover group-hover:scale-105 transition"
            />

            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600">
                {p.title}
              </h3>

              <p className="text-gray-600 text-sm">{p.desc}</p>

              <span className="inline-block mt-3 text-blue-600 text-sm font-medium">
                Visit Website →
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

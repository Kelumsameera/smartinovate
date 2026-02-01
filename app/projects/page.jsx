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
  },
  {
    title: "CCTV Camera Service Website (camx.lk)",
    img: "/projects/cctv.png",
    desc: "Professional business website for a CCTV and security service company with service listings and inquiry system.",
  },
  {
    title: "Sri Lanka Tour & Driver Booking Website",
    img: "/projects/tour.png",
    desc: "Online booking platform for tours and private drivers in Sri Lanka with itinerary management and contact system.",
  },
];

export default function ProjectsPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">

      <h1 className="text-4xl font-bold text-center mb-8">
        Our Recent Projects
      </h1>

      <p className="text-lg text-gray-700 text-center mb-16 max-w-3xl mx-auto">
        We build high-quality websites and platforms for Sri Lankan
        businesses — from eCommerce to service and booking systems.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p) => (
          <div
            key={p.title}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
          >
            <Image
              src={p.img}
              alt={p.title}
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {p.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {p.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

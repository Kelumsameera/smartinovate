import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";

/* SEO */
export const metadata = {
  title: "About Us | SmartInnovate",
  description:
    "Learn about SmartInnovate – a technology company delivering scalable software, automation, IoT, and cloud solutions for modern businesses.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Integrity",
      desc: "We operate with honesty, transparency, and accountability.",
    },
    {
      title: "Innovation",
      desc: "We continuously explore new technologies to deliver better solutions.",
    },
    {
      title: "Quality",
      desc: "We maintain high standards in every product we deliver.",
    },
    {
      title: "Client Success",
      desc: "Our success is measured by the success of our clients.",
    },
  ];

  const stats = [
    { label: "Projects Delivered", value: "1000+" },
    { label: "Happy Clients", value: "500+" },
    { label: "Years of Experience", value: "6+" },
    { label: "Team Members", value: "25+" },
  ];

  const team = [
    {
      name: "Sameera Kelum",
      role: "Founder & Lead Developer",
      image:
        "https://woinupcbvkriufpyhwtm.supabase.co/storage/v1/object/public/images/sameera.jpg",
      linkedin: "https://www.linkedin.com/",
      bio: "Founder of SmartInnovate with expertise in full-stack development, IoT systems, and scalable cloud architectures.",
    },
    {
      name: "Chanaka Madushan",
      role: "Automation Engineer",
      image:
        "https://woinupcbvkriufpyhwtm.supabase.co/storage/v1/object/public/images/madushan.jpg",
      linkedin: "https://www.linkedin.com/",
      bio: "Specialist in industrial automation, PLC programming, SCADA systems, and smart manufacturing solutions.",
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="pt-28 pb-20 bg-linear-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">SmartInnovate</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a technology-driven company focused on building secure,
            scalable, and innovative digital solutions for businesses worldwide.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              SmartInnovate is a professional technology company specializing in
              software development, industrial automation, IoT systems, and
              cloud-based solutions.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our team combines engineering expertise with strategic thinking to
              help organizations achieve digital transformation and long-term
              success.
            </p>
          </div>

          <div className="bg-gray-100 rounded-lg p-8">
            <ul className="space-y-3 text-gray-700">
              <li>✔ 6+ Years Industry Experience</li>
              <li>✔ Agile & Transparent Process</li>
              <li>✔ Enterprise-grade Security</li>
              <li>✔ Long-term Client Partnerships</li>
            </ul>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <p className="text-4xl font-bold text-blue-600">
                {stat.value}
              </p>
              <p className="mt-2 text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Leadership Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Meet the people driving innovation and delivering smart solutions at
            SmartInnovate.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 justify-center">
            {team.map((member, i) => (
              <div
                key={i}
                className="group bg-white border rounded-xl p-8 hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={128}
                      height={128}
                      unoptimized
                      className="w-full h-full rounded-full object-cover"
                      priority={i === 0}
                    />


                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition"
                    >
                      <FaLinkedin className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-blue-600 text-sm font-medium mb-3">
                  {member.role}
                </p>

                <p className="text-gray-600 text-sm opacity-0 group-hover:opacity-100 transition">
                  {member.bio}
                </p>

                {member.role.includes("Founder") && (
                  <span className="inline-block mt-4 px-4 py-1 text-xs font-semibold bg-blue-100 text-blue-600 rounded-full">
                    Founder
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">
            Let’s Build Something Great Together
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Partner with SmartInnovate to transform your ideas into reliable
            digital solutions.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}

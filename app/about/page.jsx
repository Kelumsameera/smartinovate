// export const metadata = {
//   title: "About Us | Smartinovate",
//   description:
//     "Learn about Smartinovate – Sri Lanka's innovative technology partner for IoT, automation, and smart software solutions.",
// };

// export default function AboutPage() {
//   return (
//     <section className="max-w-5xl mx-auto px-4 py-20 text-gray-800">
//       <h1 className="text-4xl font-bold mb-8 text-center">About Smartinovate</h1>

//       <p className="text-lg mb-6">
//         <strong>Smartinovate</strong> is a Sri Lanka–based technology company
//         focused on delivering smart, connected, and automated solutions that
//         empower businesses and individuals. We specialize in
//         <strong> IoT systems, industrial automation, and custom software development</strong>.
//       </p>

//       <p className="text-lg mb-6">
//         Our mission is to transform everyday challenges into intelligent systems
//         through the power of innovation. We collaborate with businesses to
//         design and implement solutions that enhance efficiency, sustainability,
//         and scalability.
//       </p>

//       <p className="text-lg mb-6">
//         From concept to deployment, Smartinovate ensures that every product or
//         service we deliver is built on the foundation of quality, security, and
//         performance. Our vision is to become the leading provider of smart
//         technology solutions in Sri Lanka and beyond.
//       </p>

//       <p className="text-lg mt-10 font-semibold text-center">
//         “Empowering Innovation — where technology meets intelligence.”
//       </p>
//     </section>
//   );
// }
export const metadata = {
  title: "About Us | SmartInnovate",
  description:
    "SmartInnovate is a technology company delivering scalable software, web, and cloud solutions for modern businesses.",
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
    { name: "Sameera Kelum", role: "Founder & Lead Developer" },
    { name: "UI/UX Designer", role: "Design Lead" },
    { name: "Backend Engineer", role: "System Architect" },
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
              SmartInnovate is a professional software development company
              specializing in web applications, mobile solutions, and cloud
              technologies.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our team combines technical expertise with strategic thinking to
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
                className="bg-white p-6 rounded-lg shadow-sm"
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">Leadership Team</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div
                key={i}
                className="bg-white border rounded-lg p-6 hover:shadow-lg transition"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-blue-100 mb-4" />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
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

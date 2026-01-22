import PageWrapper from "../../components/PageWrapper";
import ServiceCTA from "../../components/ServiceCTA";
import {
  FaUserTie,
  FaLightbulb,
  FaProjectDiagram,
  FaChartLine,
  FaCheckCircle,
} from "react-icons/fa";

export const metadata = {
  title: "IT Consulting | SmartInnovate",
  description:
    "Expert IT consulting services to guide your technology strategy, improve performance, and support digital transformation.",
};

export default function ConsultingPage() {
  return (
    <PageWrapper>
      <>
        {/* HERO */}
        <section className="pt-32 pb-20 bg-linear-to-br from-blue-50 to-white">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              IT <span className="text-blue-600">Consulting</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic technology consulting to help businesses make smarter
              decisions, reduce risk, and accelerate digital growth.
            </p>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="max-w-6xl mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold mb-6">
            Technology Decisions Made Simple
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            Our consulting services help organizations align technology with
            business goals. Whether you are launching a startup, scaling an
            enterprise system, or modernizing legacy platforms, we provide
            clear, actionable guidance.
          </p>
        </section>

        {/* SERVICES */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Consulting Services
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Startup & Product Consulting",
                "Technology & Architecture Planning",
                "System & Codebase Audits",
                "Cloud & Infrastructure Strategy",
                "Digital Transformation Roadmaps",
                "Risk & Performance Assessments",
              ].map((service, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
                >
                  <FaCheckCircle className="text-blue-600 mb-4 text-xl" />
                  <p className="text-gray-700">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* APPROACH */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Our Consulting Approach
            </h2>
            <p className="text-gray-600 mb-12">
              We focus on clarity, practicality, and long-term value.
            </p>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  icon: <FaUserTie />,
                  title: "Understand",
                  desc: "We analyze your business goals and challenges.",
                },
                {
                  icon: <FaLightbulb />,
                  title: "Strategize",
                  desc: "We design clear, actionable technology strategies.",
                },
                {
                  icon: <FaProjectDiagram />,
                  title: "Plan",
                  desc: "We create realistic implementation roadmaps.",
                },
                {
                  icon: <FaChartLine />,
                  title: "Optimize",
                  desc: "We help improve performance and scalability.",
                },
              ].map((step, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-xl shadow-sm"
                >
                  <div className="text-blue-600 text-3xl mb-4 flex justify-center">
                    {step.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-6xl mx-auto px-4 pb-24">
          <ServiceCTA />
        </section>
      </>
    </PageWrapper>
  );
}

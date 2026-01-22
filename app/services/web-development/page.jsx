import PageWrapper from "../../components/PageWrapper";
import ServiceCTA from "../../components/ServiceCTA";
import { FaLaptopCode } from "react-icons/fa";

export const metadata = {
  title: "Web Development Services | SmartInnovate",
  description:
    "Professional web development services using modern technologies like Next.js, React, and Tailwind CSS.",
};

export default function WebDevelopmentPage() {
  return (
    <PageWrapper>
      <section className="max-w-5xl mx-auto px-4 py-20">
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <FaLaptopCode className="text-4xl text-green-500" />
          <h1 className="text-4xl font-bold">Web Development</h1>
        </div>

        <p className="text-lg mb-10">
          We build fast, secure, and scalable websites tailored to your business goals.
        </p>

        {/* Details */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">What we offer</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Custom websites & web apps</li>
              <li>Next.js & React development</li>
              <li>SEO-optimized architecture</li>
              <li>Performance & security optimization</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Technologies</h3>
            <p>React, Next.js, Tailwind CSS, Node.js, REST APIs</p>
          </div>
        </div>

        <ServiceCTA />
      </section>
    </PageWrapper>
  );
}

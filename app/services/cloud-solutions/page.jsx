import PageWrapper from "../../components/PageWrapper";
import ServiceCTA from "../../components/ServiceCTA";
import { FaCloud } from "react-icons/fa";

export const metadata = {
  title: "Cloud Solutions | SmartInnovate",
  description:
    "Scalable cloud solutions, DevOps, and infrastructure optimization.",
};

export default function CloudSolutionsPage() {
  return (
    <PageWrapper>
      <section className="max-w-5xl mx-auto px-4 py-20">
        <div className="flex items-center gap-4 mb-6">
          <FaCloud className="text-4xl text-green-500" />
          <h1 className="text-4xl font-bold">Cloud Solutions</h1>
        </div>

        <p className="text-lg mb-10">
          Secure, scalable, and cost-effective cloud infrastructure.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>AWS, Azure, GCP</li>
          <li>Cloud migration</li>
          <li>CI/CD pipelines</li>
          <li>Infrastructure automation</li>
        </ul>

        <ServiceCTA />
      </section>
    </PageWrapper>
  );
}

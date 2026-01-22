import PageWrapper from "../../components/PageWrapper";
import ServiceCTA from "../../components/ServiceCTA";
import { FaUserTie } from "react-icons/fa";

export const metadata = {
  title: "IT Consulting | SmartInnovate",
  description:
    "Expert consulting to guide your technology and digital strategy.",
};

export default function ConsultingPage() {
  return (
    <PageWrapper>
      <section className="max-w-5xl mx-auto px-4 py-20">
        <div className="flex items-center gap-4 mb-6">
          <FaUserTie className="text-4xl text-green-500" />
          <h1 className="text-4xl font-bold">Consulting</h1>
        </div>

        <p className="text-lg mb-10">
          Strategic guidance to help your business grow with technology.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Startup & product consulting</li>
          <li>Architecture planning</li>
          <li>Technical audits</li>
        </ul>

        <ServiceCTA />
      </section>
    </PageWrapper>
  );
}

// 

import { FaAward, FaUsers, FaBolt, FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-24 pb-16 bg-linear-to-br from-blue-50 to-white"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-4">
        <div>
          <h1 className="text-5xl font-bold mb-6">
            Transform Your Business with
            <span className="text-blue-600"> Smart Solutions</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            We deliver cutting-edge software solutions.
          </p>

          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg flex items-center">
              Get Started <FaArrowRight className="ml-2" />
            </button>
            <button className="border-2 border-blue-600 px-8 py-3 rounded-lg">
              View Our Work
            </button>
          </div>
        </div>

        <div className="hidden md:block bg-blue-700 text-white p-8 rounded-lg">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaAward /> Award Winning Team
            </div>
            <div className="flex items-center gap-3">
              <FaUsers /> 500+ Clients
            </div>
            <div className="flex items-center gap-3">
              <FaBolt /> 1000+ Projects
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { FaAward, FaUsers, FaBolt, FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-24 pb-16 bg-linear-to-br from-blue-50 to-white"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-4 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Transform Your Business with
            <span className="text-blue-600"> Smart Solutions</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            We deliver cutting-edge software solutions that help your business grow faster.
          </p>

          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg flex items-center hover:bg-blue-700 transition">
              Get Started <FaArrowRight className="ml-2" />
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition">
              View Our Work
            </button>
          </div>
        </div>

        {/* Right Image + Stats */}
        <div className="hidden md:flex flex-col gap-6">
          
          {/* Hero Image */}
          <div className="relative w-full h-80  overflow-hidden">
            <Image
              src="https://woinupcbvkriufpyhwtm.supabase.co/storage/v1/object/public/images/Hero_Image.svg.png"
              alt="SmartInnovate Hero Illustration"
              fill
              className="object-cover"
              priority
            />
          </div>

          
        </div>
      </div>
    </section>
  );
}

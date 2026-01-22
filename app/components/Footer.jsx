import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-10 text-sm text-gray-400 relative">
      
      {/* Main container */}
      <div className="max-w-6xl mx-auto px-4 flex flex-col gap-10">
        
        {/* Top section */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
          
          {/* Brand */}
          <div className="flex flex-col items-start max-w-sm">
            <Image
              src="https://woinupcbvkriufpyhwtm.supabase.co/storage/v1/object/public/images/footerBrand.png"
              alt="SmartInnovate Logo"
              width={1280}
              height={720}
              className="object-contain h-28 w-auto mb-3"
              priority
            />
            <p>
              Transforming ideas into innovative digital solutions.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-10 flex-wrap">
            
            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/services/web-development" className="hover:text-white transition">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="/services/mobile-app-development" className="hover:text-white transition">
                    Mobile Apps
                  </Link>
                </li>
                <li>
                  <Link href="/services/cloud-solutions" className="hover:text-white transition">
                    Cloud Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/services/consulting" className="hover:text-white transition">
                    Consulting
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-2">
                <li className="hover:text-white cursor-pointer">About</li>
                <li className="hover:text-white cursor-pointer">Careers</li>
                <li className="hover:text-white cursor-pointer">Portfolio</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Contact</h4>
              <ul className="space-y-2">
                <li>info@smartinnovate.com</li>
                <li>+94 76 778 5300</li>
                <li>No 150/1, Kuruppumulla,</li>
                <li>Panadura 12500, Sri Lanka</li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Follow Us</h4>
              <div className="flex gap-4 text-xl">
                <a href="#" aria-label="Facebook" className="hover:text-blue-500 transition">
                  <FaFacebook />
                </a>
                <a href="#" aria-label="LinkedIn" className="hover:text-blue-400 transition">
                  <FaLinkedin />
                </a>
                <a href="#" aria-label="GitHub" className="hover:text-white transition">
                  <FaGithub />
                </a>
                <a
                  href="https://wa.me/947676785300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="hover:text-green-500 transition"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-center text-xs text-gray-500 mt-10">
        © {new Date().getFullYear()} SmartInnovate. All rights reserved.
      </p>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/947676785300"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="
          fixed bottom-6 right-6 z-50
          bg-green-500 text-white
          w-14 h-14 rounded-full
          flex items-center justify-center
          shadow-lg
          hover:bg-green-600
          hover:scale-110
          transition-all
        "
      >
        <FaWhatsapp className="w-7 h-7" />
      </a>
    </footer>
  );
}

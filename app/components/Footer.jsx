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
      
      <div className="max-w-6xl mx-auto px-4 flex flex-col gap-10">

        <div className="flex flex-col lg:flex-row lg:justify-between gap-10">

          {/* Brand */}
          <div className="max-w-sm">
            <Image
              src="https://woinupcbvkriufpyhwtm.supabase.co/storage/v1/object/public/images/footerBrand.png"
              alt="SmartInnovate Sri Lanka Software Company Logo"
              width={1280}
              height={720}
              className="object-contain h-20 w-auto mb-3"
            />

            <p>
              SmartInnovate is a Sri Lanka-based software company delivering web,
              mobile, IoT and automation solutions for modern businesses.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/services/web-development" className="hover:text-white">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="/services/mobile-app-development" className="hover:text-white">
                    Mobile Apps
                  </Link>
                </li>
                <li>
                  <Link href="/services/cloud-solutions" className="hover:text-white">
                    Cloud Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/services/it-consulting" className="hover:text-white">
                    IT Consulting
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-2">
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/projects">Projects</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Contact</h4>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:info@smartinnovate.com">
                    info@smartinnovate.com
                  </a>
                </li>
                <li>
                  <a href="tel:+94767785300">
                    +94 76 778 5300
                  </a>
                </li>
                <li>
                  150/1 Deniya Road, Kuruppumulla,
                  Panadura, Sri Lanka
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Follow Us</h4>
              <div className="flex gap-4 text-xl">
                <a
                  href="https://www.facebook.com/smartinnovate"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://wa.me/94767785300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
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

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/94767785300"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
      >
        <FaWhatsapp className="w-7 h-7" />
      </a>
    </footer>
  );
}

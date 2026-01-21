import { FaFacebook, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-10 text-sm text-gray-400">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        
        {/* Brand */}
        <div className="lg:col-span-1">
          <h3 className="text-2xl font-bold mb-4 text-white">
            <span className="text-blue-400">Smart</span>Innovate
          </h3>
          <p>
            Transforming ideas into innovative digital solutions.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-4 text-white">Services</h4>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">Web Development</li>
            <li className="hover:text-white cursor-pointer">Mobile Apps</li>
            <li className="hover:text-white cursor-pointer">Cloud Solutions</li>
            <li className="hover:text-white cursor-pointer">Consulting</li>
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
            <li>+1 (555) 123-4567</li>
            <li>123 Tech Street</li>
            <li>Silicon Valley, CA</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-semibold mb-4 text-white">Follow Us</h4>
          <div className="flex gap-4 text-xl">
            <FaFacebook className="hover:text-blue-500 cursor-pointer" />
            <FaLinkedin className="hover:text-blue-400 cursor-pointer" />
            <FaGithub className="hover:text-white cursor-pointer" />
            <FaWhatsapp className="hover:text-green-500 cursor-pointer" />
          </div>
        </div>

      </div>

      {/* Copyright */}
      <p className="text-center text-xs text-gray-500 mt-10">
        © {new Date().getFullYear()} SmartInnovate. All rights reserved.
      </p>
      {/* Floating WhatsApp Button */}
<a
  href="https://wa.me/15551234567"
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
    transition-transform
  "
>
  <FaWhatsapp className="w-7 h-7" />
</a>

    </footer>
  );
}

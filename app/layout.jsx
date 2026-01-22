import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: {
    default: "SmartInnovate – Smart Solutions",
    template: "%s | SmartInnovate",
  },
  description:
    "SmartInnovate provides web development, custom software, mobile apps, cloud solutions, IoT and industrial automation services in Sri Lanka.",

  keywords: [
    // Brand
    "SmartInnovate",
    "Smart Innovate Sri Lanka",

    // Core services
    "web development Sri Lanka",
    "custom software development Sri Lanka",
    "mobile app development Sri Lanka",
    "cloud solutions Sri Lanka",
    "IT consulting Sri Lanka",

    // Advanced services
    "IoT solutions Sri Lanka",
    "industrial automation Sri Lanka",
    "home automation Sri Lanka",

    // Business intent
    "software company Sri Lanka",
    "technology solutions Sri Lanka",
    "business automation Sri Lanka",
  ],

  metadataBase: new URL("https://smartinnovate.com"),
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-linear-to-br from-blue-900 via-black to-gray-900 text-white">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

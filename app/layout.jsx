import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Smart Innovate - Smart Solutions",
  description: "Web, Software, IoT and Business Automation in Sri Lanka",
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

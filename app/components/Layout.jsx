import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Smartinovate | Empowering Innovation",
  description:
    "Smartinovate empowers businesses in Sri Lanka with IoT, automation, and software development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="pt-20"> {/* Space for fixed header */}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

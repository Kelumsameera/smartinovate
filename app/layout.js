import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>SmartInovate</title>
      </head>
      <body>
        <Navbar />
        <main style={{ padding: "1rem 2rem" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

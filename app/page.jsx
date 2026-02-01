
import ClientLogos from "./components/ClientLogos";
import CTA from "./components/CTA";
import Hero from "./components/Hero";
import HomeAbout from "./components/HomeAbout";
import ServicesPage from "./components/Services";
import Testimonials from "./components/Testimonials";



export default function Page() {
  return (
    <>
      <div className="py-10">
        {/* <Navbar /> */}
      <Hero />
      <HomeAbout />
      <ServicesPage />
      <Testimonials />
      <ClientLogos />
      <CTA />
      </div>

      
    </>

  );
}

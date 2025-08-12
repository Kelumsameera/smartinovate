import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Projects from "./components/Projects";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <Services />
      <Projects />
      <AboutUs />
      <Contact />
    </div>
  );
}

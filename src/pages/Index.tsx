import Hero from "@/components/Hero";
import About from "@/components/About";
import Ventures from "@/components/Ventures";
import Vision from "@/components/Vision";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen">
      <div className="absolute top-4 right-4 md:top-6 md:right-6 z-50">
        <ThemeToggle />
      </div>
      <Hero />
      <About />
      <Ventures />
      <Vision />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Hero background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 gradient-hero" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-24 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I'm <span className="text-primary">Habeeb</span>.
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            Student • Entrepreneur • Builder of the Future
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 animate-fade-in-slow">
            <Button 
              size="lg" 
              variant="hero"
              className="group"
              asChild
            >
              <a 
                href="https://www.linkedin.com/in/habeeb-muhammed-44715a309" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                Connect on LinkedIn
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              asChild
            >
              <a href="#ventures">
                Explore My Work
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-foreground/40 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

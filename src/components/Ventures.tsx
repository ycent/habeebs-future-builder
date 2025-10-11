import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import eventnavLogo from "@/assets/eventnav-logo.png";
import gdgBabcockLogo from "@/assets/gdg-babcock-logo.png";
import h3Logo from "@/assets/h3-logo.png";
import techhubLogo from "@/assets/techhub-logo.png";
import habeebAdvisoryLogo from "@/assets/consulting-logo.png";


const ventures = [
  {
    title: "EventNav",
    subtitle: "SaaS Company",
    description: "A software company building digital platforms for events, culture, and communities.",
    link: "https://eventnavltd.com",
    logo: eventnavLogo,
  },
  {
    title: "Babcock New Horizon Techub",
    subtitle: "Innovation Hub",
    description: "A technology and innovation hub fostering entrepreneurship and digital skills development.",
    link: "#",
    logo: techhubLogo,
  },
  {
    title: "GDG Babcock",
    subtitle: "Community Leadership",
    description: "A developer community where I help connect talent, foster innovation, and create opportunities.",
    link: "https://gdgbabcock.com",
    logo: gdgBabcockLogo,
  },
  {
    title: "H3 Initiative",
    subtitle: "In Development",
    description: "An upcoming project currently in the building phase, focused on innovation and impact.",
    link: "https://h3initiative.org",
    logo: h3Logo,
  },
  {
    title: "Habeeb Consulting",
    subtitle: "Consulting & Strategy",
    description: "Advisory and strategy services for startups and businesses. Focused on technology, innovation, and helping companies grow.",
    link: "https://habeebadvisory.com",
    logo: habeebAdvisoryLogo,
  },
];

const Ventures = () => {
  return (
    <section id="ventures" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12 animate-fade-in">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight">
              What I'm Building
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From innovative software to transformative ventures
            </p>
          </div>
          

          {/* Ventures Carousel */}
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {ventures.map((venture, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <a
                    href={venture.link}
                    target={venture.link.startsWith('http') ? '_blank' : '_self'}
                    rel={venture.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block h-full"
                  >
                    <Card 
                      variant="elevated"
                      className="p-8 h-full group cursor-pointer relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative space-y-5">
                        {venture.logo && (
                          <div className="h-14 flex items-center">
                            <img 
                              src={venture.logo} 
                              alt={`${venture.title} logo`}
                              className="h-full w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                            />
                          </div>
                        )}
                        
                        <div className="space-y-2">
                          <div className="flex items-start justify-between gap-2">
                            <h3 className="text-2xl font-display font-bold group-hover:text-primary transition-smooth leading-tight">
                              {venture.title}
                            </h3>
                            <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-smooth flex-shrink-0 mt-1" />
                          </div>
                          <span className="inline-block text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 py-1 bg-muted rounded-full">
                            {venture.subtitle}
                          </span>
                        </div>
                        
                        <p className="text-muted-foreground leading-relaxed text-[15px]">
                          {venture.description}
                        </p>
                      </div>
                    </Card>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Ventures;

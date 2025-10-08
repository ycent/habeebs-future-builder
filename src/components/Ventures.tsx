import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import eventnavLogo from "@/assets/eventnav-logo.png";
import gdgBabcockLogo from "@/assets/gdg-babcock-logo.png";
import h3Logo from "@/assets/h3-logo.png";

const parentCompany = {
  title: "Centz Group",
  subtitle: "Parent Company",
  description: "The umbrella company for EventNav and future ventures in SaaS, real estate, agriculture, and technology.",
};

const ventures = [
  {
    title: "EventNav",
    subtitle: "SaaS Company",
    description: "A software company building digital platforms for events, culture, and communities.",
    link: "https://eventnavltd.com",
    logo: eventnavLogo,
  },
  {
    title: "Nexspot",
    subtitle: "Product",
    description: "Discover hangouts, nightlife, and experiences across Africa.",
    link: "https://nexspot.com.ng",
  },
  {
    title: "Threadbase",
    subtitle: "Product",
    description: "Tools that help tailors manage clients, track jobs, and learn new skills.",
    link: "#",
  },
  {
    title: "GDG Babcock",
    subtitle: "Community Leadership",
    description: "A developer community where I help connect talent, foster innovation, and create opportunities.",
    link: "https://gdgbabcock.com",
    logo: gdgBabcockLogo,
  },
  {
    title: "H³ Initiative",
    subtitle: "In Development",
    description: "An upcoming project currently in the building phase, focused on innovation and impact.",
    link: "https://h3initiative.org",
    logo: h3Logo,
  },
  {
    title: "Habeeb Advisory",
    subtitle: "Consulting & Strategy",
    description: "Advisory and strategy services for startups and businesses. Focused on technology, innovation, and helping companies grow.",
    link: "https://habeebadvisory.com",
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
          
          {/* Parent Company - Centz Group */}
          <Card variant="gradient" className="p-10 md:p-12 bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/20 animate-scale-in overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/5 rounded-full blur-3xl"></div>
            <div className="relative text-center space-y-6">
              <div className="inline-block">
                <span className="text-xs font-semibold text-primary/70 uppercase tracking-widest px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20">
                  {parentCompany.subtitle}
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-primary tracking-tight">
                {parentCompany.title}
              </h3>
              <p className="text-foreground/80 text-lg leading-relaxed max-w-3xl mx-auto">
                {parentCompany.description}
              </p>
            </div>
          </Card>

          {/* Ventures Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ventures.map((venture, index) => (
              <a
                key={index}
                href={venture.link}
                target={venture.link.startsWith('http') ? '_blank' : '_self'}
                rel={venture.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="block"
              >
                <Card 
                  variant="elevated"
                  className="p-8 h-full group cursor-pointer animate-scale-in relative overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ventures;

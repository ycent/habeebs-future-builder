import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import eventnavLogo from "@/assets/eventnav-logo.png";
import gdgBabcockLogo from "@/assets/gdg-babcock-logo.png";

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
    link: "#",
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
    title: "H3 Initiative",
    subtitle: "In Development",
    description: "An upcoming project currently in the building phase, focused on innovation and impact.",
    link: "#",
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
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            What I'm Building
          </h2>
          
          {/* Parent Company - Centz Group */}
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/20 shadow-hover animate-scale-in">
            <div className="text-center space-y-4">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-primary">
                  {parentCompany.title}
                </h3>
                <p className="text-sm font-semibold text-primary/70 uppercase tracking-wider mt-2">
                  {parentCompany.subtitle}
                </p>
              </div>
              <p className="text-foreground/80 leading-relaxed max-w-3xl mx-auto">
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
                  className="p-6 h-full gradient-card shadow-soft hover:shadow-hover transition-smooth group cursor-pointer animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="space-y-4">
                    {venture.logo && (
                      <div className="h-12 flex items-center">
                        <img 
                          src={venture.logo} 
                          alt={`${venture.title} logo`}
                          className="h-full w-auto object-contain"
                        />
                      </div>
                    )}
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-semibold group-hover:text-primary transition-smooth">
                          {venture.title}
                        </h3>
                        <p className="text-sm text-muted-foreground font-medium">
                          {venture.subtitle}
                        </p>
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-smooth" />
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
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

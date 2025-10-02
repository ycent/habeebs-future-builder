import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

const ventures = [
  {
    title: "EventNav",
    subtitle: "SaaS Company",
    description: "A software company building digital platforms for events, culture, and communities.",
    link: "#",
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
    title: "Centz Group",
    subtitle: "Parent Company",
    description: "The umbrella company for EventNav and future ventures in SaaS, real estate, agriculture, and technology.",
    link: "#",
  },
  {
    title: "GDG Babcock",
    subtitle: "Community Leadership",
    description: "A developer community where I help connect talent, foster innovation, and create opportunities.",
    link: "#",
  },
  {
    title: "H3 Initiative",
    subtitle: "In Development",
    description: "An upcoming project currently in the building phase, focused on innovation and impact.",
    link: "#",
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ventures.map((venture, index) => (
              <Card 
                key={index} 
                className="p-6 gradient-card shadow-soft hover:shadow-hover transition-smooth group cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-4">
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ventures;

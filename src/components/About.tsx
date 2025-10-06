const About = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-8 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            About Me
          </h2>
          
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg md:text-xl">
              I'm Habeeb, a computer scientist, entrepreneur, and project manager passionate about technology, innovation, and building Africa's biggest multinational conglomerate.
            </p>
            
            <p className="text-lg md:text-xl mt-6">
              I'm the founder of <span className="font-semibold text-foreground">EventNav</span>, a SaaS company under <span className="font-semibold text-foreground">Centz Group</span>, which powers products like <span className="font-semibold text-foreground">Nexspot</span> and <span className="font-semibold text-foreground">Threadbase</span>.
            </p>
            
            <p className="text-lg md:text-xl mt-6">
              I also lead <span className="font-semibold text-foreground">GDG Babcock</span> and <span className="font-semibold text-foreground">New-Horizon Tech Hub</span>, connecting developers and fostering innovation, and I'm building the <span className="font-semibold text-foreground">H3</span>, an upcoming initiative focused on impact and growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

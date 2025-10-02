const Vision = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-8 text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            My Vision
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>
              My mission is to build the biggest multinational conglomerate in Africa.
            </p>
            
            <p>
              <span className="font-semibold text-foreground">EventNav</span> is my starting point, creating software that empowers events and communities, but my ambitions extend across industries like SaaS, real estate, agriculture, and energy.
            </p>
            
            <p>
              Africa has the creativity, the talent, and the drive — I want to build the companies that unlock it.
            </p>
          </div>
          
          <div className="pt-8">
            <div className="inline-block px-6 py-3 bg-accent/50 rounded-lg">
              <p className="text-primary font-semibold text-lg">
                Building the future, one venture at a time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;

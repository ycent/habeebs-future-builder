import h3Logo from "@/assets/h3-logo.png";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img src={h3Logo} alt="H³ Initiative Logo" className="h-12 w-12 object-contain" />
            <div>
              <p className="text-sm text-muted-foreground">
                © 2025 H³. All rights reserved.
              </p>
            </div>
          </div>
          
          <div className="flex gap-6 text-sm text-muted-foreground">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-foreground transition-smooth"
            >
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

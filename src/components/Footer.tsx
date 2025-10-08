import hLogo from "@/assets/h-logo.jpg";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img src={hLogo} alt="H Logo" className="h-12 w-12 rounded-lg shadow-soft object-cover" />
            <div>
              <p className="text-sm text-muted-foreground">
                © 2025 Habeeb. All rights reserved.
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

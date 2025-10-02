const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-lg bg-primary flex items-center justify-center shadow-soft">
              <span className="text-2xl font-bold text-primary-foreground">H</span>
            </div>
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

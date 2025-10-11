import { Lightbulb } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    setTheme(theme === "dark" ? "light" : "dark");
    setTimeout(() => setIsAnimating(false), 800);
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleClick}
      className="rounded-full h-10 w-10 md:h-12 md:w-12 border-2 hover:scale-110 active:scale-95 transition-all duration-500 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 backdrop-blur-sm shadow-md hover:shadow-xl group overflow-visible relative"
    >
      {/* Burst effect on click */}
      <div className={`absolute inset-0 transition-all duration-700 ${isAnimating ? 'opacity-100 scale-[3]' : 'opacity-0 scale-100'}`}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-2 h-16 md:h-20 bg-gradient-to-t from-primary via-secondary to-accent rounded-full"
              style={{
                transform: `rotate(${i * 30}deg) translateY(-30px)`,
                transformOrigin: '50% 30px',
                opacity: isAnimating ? 0 : 1,
                transition: 'all 0.8s ease-out',
              }}
            />
          ))}
        </div>
      </div>

      {/* Hover light rays */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-1 h-8 md:h-12 bg-gradient-to-t from-primary/60 to-transparent rounded-full animate-pulse"
              style={{
                transform: `rotate(${i * 45}deg) translateY(-20px)`,
                transformOrigin: '50% 20px',
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Lightbulb icon with animations */}
      <Lightbulb 
        className={`h-5 w-5 md:h-6 md:w-6 relative z-10 transition-all duration-500 group-hover:text-primary group-hover:drop-shadow-[0_0_8px_rgba(var(--primary),0.8)] dark:text-primary/80 dark:group-hover:text-primary ${
          isAnimating ? 'animate-[spin_0.4s_ease-in-out,pulse_0.4s_ease-in-out] scale-125' : ''
        }`}
        fill={theme === "dark" ? "transparent" : "currentColor"}
      />
      
      {/* Click ripple effect */}
      {isAnimating && (
        <div className="absolute inset-0 rounded-full border-4 border-primary animate-ping" />
      )}
      
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeToggle;

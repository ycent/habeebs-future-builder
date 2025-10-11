import { Lightbulb } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full h-10 w-10 md:h-12 md:w-12 border-2 hover:scale-110 active:scale-95 transition-all duration-500 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 backdrop-blur-sm shadow-md hover:shadow-xl group overflow-visible relative"
    >
      {/* Light rays emanating from bulb */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
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
      
      {/* Lightbulb icon with glow effect */}
      <Lightbulb 
        className="h-5 w-5 md:h-6 md:w-6 relative z-10 transition-all duration-500 group-hover:text-primary group-hover:drop-shadow-[0_0_8px_rgba(var(--primary),0.8)] dark:text-primary/80 dark:group-hover:text-primary" 
        fill={theme === "dark" ? "transparent" : "currentColor"}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeToggle;

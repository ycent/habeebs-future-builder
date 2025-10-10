import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed top-6 right-6 z-50 rounded-full h-16 w-16 border-2 hover:scale-150 hover:rotate-[360deg] active:scale-90 transition-all duration-700 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 backdrop-blur-md shadow-elegant hover:shadow-[0_0_50px_rgba(var(--primary),0.6),0_0_100px_rgba(var(--secondary),0.3)] group overflow-hidden animate-pulse hover:animate-none cursor-pointer"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-secondary/30 to-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full animate-spin-slow group-hover:animate-none" />
      <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-primary/10 to-transparent group-hover:animate-pulse rounded-full" />
      <Sun className="h-7 w-7 rotate-0 scale-100 transition-all duration-700 dark:-rotate-180 dark:scale-0 text-primary relative z-10 drop-shadow-lg group-hover:drop-shadow-[0_0_15px_rgba(var(--primary),0.8)]" />
      <Moon className="absolute h-7 w-7 rotate-180 scale-0 transition-all duration-700 dark:rotate-0 dark:scale-100 text-primary relative z-10 drop-shadow-lg group-hover:drop-shadow-[0_0_15px_rgba(var(--primary),0.8)]" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeToggle;

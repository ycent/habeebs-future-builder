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
      className="fixed top-6 right-6 z-50 rounded-full h-14 w-14 border-2 hover:scale-125 hover:rotate-12 transition-all duration-500 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm shadow-elegant hover:shadow-[0_0_30px_rgba(var(--primary),0.4)] group overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
      <Sun className="h-6 w-6 rotate-0 scale-100 transition-all duration-500 dark:-rotate-180 dark:scale-0 text-primary relative z-10" />
      <Moon className="absolute h-6 w-6 rotate-180 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100 text-primary relative z-10" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeToggle;

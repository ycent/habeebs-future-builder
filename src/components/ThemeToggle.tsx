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
      className="rounded-full h-10 w-10 md:h-12 md:w-12 transition-transform hover:scale-105"
    >
      <Lightbulb 
        className="h-5 w-5 md:h-6 md:w-6 transition-colors"
        fill={theme === "dark" ? "transparent" : "currentColor"}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeToggle;

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: "Story", id: "story" },
    { label: "How It Works", id: "how-it-works" },
    { label: "Features", id: "features" },
    { label: "Roadmap", id: "roadmap" },
    { label: "FAQ", id: "faq" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-foreground/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center space-x-3 group"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-md flex items-center justify-center border border-primary/30">
              <span className="text-white font-display font-bold text-sm">Z</span>
            </div>
            <span className="font-display text-xl font-bold tracking-widest bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              ZXORA
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 relative group tracking-wide"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("cta")}
              className="bg-primary hover:bg-primary/80 text-primary-foreground font-display tracking-wider text-xs transition-all duration-300"
              size="sm"
            >
              JOIN EARLY ACCESS
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted/30 rounded-lg transition-all duration-300 tracking-wide"
              >
                {item.label}
              </button>
            ))}
            <div className="px-4">
              <Button
                onClick={() => scrollToSection("cta")}
                className="w-full bg-primary hover:bg-primary/80 text-primary-foreground font-display tracking-wider text-xs"
              >
                JOIN EARLY ACCESS
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

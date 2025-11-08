import logo from "@/assets/header-logo.png";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button onClick={() => scrollToSection('home')} className="flex items-center">
            <img src={logo} alt="Whizbangs" className="h-8 w-auto" />
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              HOME
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              ABOUT
            </button>
            <button
              onClick={() => scrollToSection('locations')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              LOCATIONS
            </button>
            <Button
              variant="hero"
              size="sm"
              onClick={() => scrollToSection('contact')}
            >
              GET IN TOUCH
            </Button>
          </div>

        </div>
      </div>
    </nav>
  );
};

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import logo from "@/assets/logo.png";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Whizbangs" className="h-8 w-auto" />
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
              HOME
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors font-medium">
              ABOUT
            </Link>
            <Link to="/locations" className="text-foreground hover:text-primary transition-colors font-medium">
              LOCATIONS
            </Link>
            <Link to="/social" className="text-foreground hover:text-primary transition-colors font-medium">
              SOCIAL MEDIA
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 hover:bg-muted rounded-full transition-colors">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                0
              </span>
            </button>
            <Button variant="hero" size="sm">
              CONTACT NOW →
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

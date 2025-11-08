import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/90 via-secondary/70 to-background/50" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Be the first to try,<br />taste, and explore
        </h1>
        <Button 
          variant="hero" 
          size="lg"
          className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300"
        >
          SCHEDULE A CALL
        </Button>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

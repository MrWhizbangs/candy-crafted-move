import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.mp4";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroBg} type="video/mp4" />
      </video>
      
      <div className="absolute inset-0 bg-black/30" />
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          WHIZBANGS
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Curated Treats For Curious Tastes
        </p>
        <Button 
          variant="hero" 
          size="lg"
          onClick={() => {
            const element = document.getElementById('about');
            if (element) element.scrollIntoView({ behavior: 'smooth' });
          }}
          className="animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          DISCOVER MORE
        </Button>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

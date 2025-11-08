import { Button } from "@/components/ui/button";

export const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold text-primary mb-4 tracking-wider">ABOUT US</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Curated Treats<br />For Curious Tastes
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            At Whizbangs, we don't just make candy — we make moments. From bold flavors to bright packaging, 
            every Whizbangs product is crafted to surprise and delight. With locations popping up in select malls, 
            we're on a mission to bring back the magic of the candy shop — one sweet experience at a time.
          </p>
          <Button variant="hero" size="lg">
            WHERE TO FIND US
          </Button>
        </div>
      </div>
    </section>
  );
};

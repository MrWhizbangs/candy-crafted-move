import { Button } from "@/components/ui/button";
import packaging from "@/assets/packaging.png";

export const ComingSoon = () => {
  return (
    <section className="py-20 bg-secondary text-white">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-semibold mb-4 tracking-wider opacity-90">DISCOVER YOUR FAVORITE CANDY</p>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 md:order-1">
            <img
              src={packaging}
              alt="Whizbangs Packaging"
              className="w-full h-auto rounded-lg shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Discover Your<br />Favorite Candy
            </h2>
            <p className="text-lg mb-8 leading-relaxed opacity-90">
              Finding a new favorite candy is an adventure! Our interactive candy discovery game lets you explore
              bold flavors and bright packaging in a fun, engaging way. Swipe through unique treats from around the globe,
              discover what delights your taste buds, and experience the joy of candy discovery — one sweet match at a time.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="bg-white text-secondary hover:bg-white/90"
              onClick={() => window.open('https://candyswipe.whizbangscandy.com', '_blank')}
            >
              EXPLORE THE GAME
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

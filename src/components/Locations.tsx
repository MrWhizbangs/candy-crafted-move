import { Card, CardContent } from "@/components/ui/card";
import miamiStore from "@/assets/miami-store.jpg";
import burlingtonStore from "@/assets/burlington-store.jpg";

const locations = [
  {
    image: miamiStore,
    title: "Dolphin Mall, Miami",
    description: "Located at Ramblas 3, discover exclusive candies and snacks from around the globe and unique makers you won't find anywhere else. Our playful, wonder-filled store invites families and candy lovers to explore, indulge, and create joyful memories. Visit us for a delightful experience that's as fun as it is delicious!"
  },
  {
    image: burlingtonStore,
    title: "Burlington, Vermont",
    description: "Whizbangs Burlington is located in the Church Street Open Air Mall where you'll find historical architecture, year-round festivals, and of course your favorite treat at Whizbangs!"
  },
  {
    image: miamiStore,
    title: "More coming soon",
    description: "We are working hard to bring Whizbangs to more cities. Want us to open close to you? Send us a message and let us know!"
  }
];

export const Locations = () => {
  return (
    <section id="locations" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary mb-4 tracking-wider">LOCATIONS</p>
          <h2 className="text-4xl md:text-5xl font-bold">Where to find us</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {locations.map((location, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={location.image} 
                  alt={location.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">{location.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {location.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

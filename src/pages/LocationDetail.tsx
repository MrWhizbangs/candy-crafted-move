import { useParams, Navigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { getLocationById } from "@/data/locations";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// TypeScript declaration for Google Maps
declare global {
  interface Window {
    google: any;
  }
  const google: any;
}

export default function LocationDetail() {
  const { locationId } = useParams<{ locationId: string }>();
  const mapRef = useRef<HTMLDivElement>(null);
  const location = locationId ? getLocationById(locationId) : undefined;

  // Scroll to top when component mounts or location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [locationId]);

  useEffect(() => {
    if (!location || !mapRef.current) return;

    // Wait for Google Maps API to load asynchronously
    const initMap = async () => {
      // Check if google maps is available
      if (typeof window.google === "undefined" || !window.google?.maps) {
        // Retry after a short delay
        setTimeout(initMap, 100);
        return;
      }

      try {
        // Use the standard Maps JavaScript API with async importLibrary
        const { Map } = await window.google.maps.importLibrary("maps");
        const { AdvancedMarkerElement } = await window.google.maps.importLibrary("marker");

        if (!mapRef.current) return;

        // Create the map
        const map = new Map(mapRef.current, {
          center: { lat: location.coordinates.lat, lng: location.coordinates.lng },
          zoom: 14,
          mapId: "DEMO_MAP_ID",
        });

        // Add the marker
        new AdvancedMarkerElement({
          map,
          position: { lat: location.coordinates.lat, lng: location.coordinates.lng },
          title: location.title,
        });
      } catch (error) {
        console.error("Error loading Google Maps:", error);
      }
    };

    initMap();
  }, [location]);

  if (!location) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        {/* Hero Section with Title */}
        <section className="bg-gradient-to-r from-primary to-secondary py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
              {location.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 text-center mt-4">
              {location.address}
            </p>
          </div>
        </section>

        {/* Description and Map Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Description - Left Side */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  About Our Store
                </h2>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  {location.description}
                </p>
                <div className="pt-4">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Visit Us
                  </h3>
                  <p className="text-foreground/70">
                    {location.address}
                  </p>
                </div>
              </div>

              {/* Map - Right Side */}
              <div className="w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg border border-border">
                <div ref={mapRef} className="w-full h-full bg-gray-100" />
              </div>
            </div>
          </div>
        </section>

        {/* Image Carousel Section */}
        <section className="py-12 md:py-20 bg-secondary/5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-8 md:mb-12">
              Gallery
            </h2>
            <div className="max-w-5xl mx-auto">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {location.images.map((image, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-2">
                        <div className="aspect-square rounded-lg overflow-hidden bg-gray-200 border border-border shadow-md">
                          <img
                            src={image}
                            alt={`${location.title} - Image ${index + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect width='400' height='400' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='18' fill='%239ca3af'%3EImage ${index + 1}%3C/text%3E%3C/svg%3E";
                            }}
                          />
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
              </Carousel>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

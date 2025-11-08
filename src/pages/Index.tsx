import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ComingSoon } from "@/components/ComingSoon";
import { Locations } from "@/components/Locations";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <ComingSoon />
      <Locations />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;

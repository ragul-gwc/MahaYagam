import heroImage from "@/assets/hero-shiva.jpg";
import { Button } from "@/components/ui/button";
import { Sparkles, Calendar, MapPin } from "lucide-react";

interface HeroSectionProps {
  onRegisterClick: () => void;
  onPreBookClick: () => void;
}

const HeroSection = ({ onRegisterClick, onPreBookClick }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Lord Shiva in divine meditation"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="animate-float mb-6">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary border border-gold/30 text-gold text-sm font-medium">
            <Sparkles className="inline w-4 h-4 mr-2" />
            Guinness World Record Attempt
          </span>
        </div>

        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 gold-text-gradient animate-shimmer">
          Maha Yagam 2026
        </h1>
        
        <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground mb-1">
          The world’s longest non stop pooja
        </h2>
        <h3 className="mb-6 text-gold text-lg">25 Purohits • 25 Purohits • 1 Million Chant of Lord Shiva’s Name • 1,00,000 Rudraksh</h3>

        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
          On Maha Shivarathri, Oh My God – (OMG) presents Maha Yaagam a{" "}
          <span className="text-gold font-semibold">34 hour</span> non stop pooja where{" "}
          <span className="text-gold font-semibold">25 purohits</span> chant Rudhram 3400 times, echoing Lord Shiva’s name 1 million times while {" "}
          <span className="text-gold font-semibold">100,000</span> sacred Rudraksh beads are prayed upon. Register free to join this epic celebration of devotion and unity.
        </p>

        {/* Event Details */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <div className="flex items-center gap-2 px-4 py-2 bg-card-gradient rounded-lg border border-gold/20">
            <Calendar className="w-5 h-5 text-gold" />
            <span className="text-foreground">February 26, 2026</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-card-gradient rounded-lg border border-gold/20">
            <MapPin className="w-5 h-5 text-gold" />
            <span className="text-foreground">Hotel Hills, Hosur</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="divine" 
            size="xl" 
            onClick={onRegisterClick}
            className="animate-glow"
          >
            Register for Free
          </Button>
          <Button 
            variant="divine-outline" 
            size="xl"
            onClick={onPreBookClick}
          >
            Pre-Book Blessed Rudraksha
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gold rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import CountdownTimer from "@/components/CountdownTimer";
import VideoSection from "@/components/VideoSection";
import RudrakshaShowcase from "@/components/RudrakshaShowcase";
import WhyParticipateSection from "@/components/WhyParticipateSection";
import EventHighlights from "@/components/EventHighlights";
import RegistrationForm from "@/components/RegistrationForm";
import RudrakshaBooking from "@/components/RudrakshaBooking";
import CelebritySection from "@/components/CelebritySection";
import AttractionsSection from "@/components/AttractionsSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-glass border-b border-gold/10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="font-display text-lg md:text-xl font-bold gold-text-gradient tracking-wider">
            Maha Yagam 2026
          </h1>
          <div className="flex gap-3">
            <Button 
              variant="ghost" 
              size="sm"
              className="text-foreground hover:text-gold hover:bg-gold/10"
              onClick={() => setIsRegistrationOpen(true)}
            >
              Register
            </Button>
            <Button 
              variant="divine" 
              size="sm"
              onClick={() => setIsBookingOpen(true)}
            >
              Pre-Book
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <HeroSection
        onRegisterClick={() => setIsRegistrationOpen(true)}
        onPreBookClick={() => setIsBookingOpen(true)}
      />

      {/* Countdown Timer */}
      <CountdownTimer />

      {/* Promotional Video */}
      <VideoSection />

      {/* Rudraksha Showcase with Image & Price */}
      <RudrakshaShowcase onPreBookClick={() => setIsBookingOpen(true)} />

      {/* Why Participate */}
      <WhyParticipateSection />

      {/* Event Highlights */}
      <EventHighlights />

      {/* Celebrity Section */}
      <CelebritySection />

      {/* Attractions */}
      <AttractionsSection />

      {/* Final CTA */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-divine-purple/10 via-transparent to-transparent" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs uppercase tracking-widest mb-6">
            Join The Movement
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Be Part of <span className="gold-text-gradient">History</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-lg">
            Don&apos;t miss this once-in-a-lifetime divine opportunity. Register now and receive Lord Shiva&apos;s eternal blessings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="divine" 
              size="xl"
              onClick={() => setIsRegistrationOpen(true)}
              className="animate-glow-pulse"
            >
              Register for Free
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              onClick={() => setIsBookingOpen(true)}
              className="border-gold/30 text-gold hover:bg-gold/10 hover:border-gold/50"
            >
              Pre-Book Blessed Rudraksha
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <RegistrationForm
        isOpen={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
      />
      <RudrakshaBooking
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
};

export default Index;

import rudrakshaImage from "@/assets/rudraksha-divine.jpg";
import { Button } from "@/components/ui/button";
import { Sparkles, Shield, Star } from "lucide-react";

interface RudrakshaShowcaseProps {
  onPreBookClick: () => void;
}

const RudrakshaShowcase = ({ onPreBookClick }: RudrakshaShowcaseProps) => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-divine-purple/5 via-transparent to-divine-purple/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs uppercase tracking-widest mb-4">
            The Special Sacred Seed
          </span>
          <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-4">
            A special pooja on the Rudraksh with <span className="gold-text-gradient">1 million chants of Lord Shiva</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            On Maha Shivarathri, 25 purohits will chant Lord Shiva’s name 1 million times over 34 non stop hours, sanctifying each Rudraksh through powerful mantric purification by chanting the Rudhram 3300 times. This rare spiritual offering makes every Rudhraksh bead a symbol of divine energy and devotion. Pre book your Special Sacred Rudraksh NOW and own this very special divine blessing that has been prayed upon with lord shiva’s name for 1 million times!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Image with Animation */}
          <div className="relative group order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-to-r from-gold/30 via-divine-purple/30 to-gold/30 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity animate-pulse-slow" />
            <div className="relative rounded-3xl overflow-hidden border border-gold/30 shadow-divine">
              <img
                src={rudrakshaImage}
                alt="Divine blessed Rudraksha with sacred energy"
                className="w-full h-auto object-cover animate-float"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 text-gold">
                  <Sparkles className="w-5 h-5" />
                  <span className="font-display text-lg">100,000 Mantra Chants</span>
                </div>
              </div>
            </div>
          </div>

          {/* Details Card */}
          <div className="order-1 lg:order-2">
            <div className="bg-card/60 backdrop-blur-xl rounded-3xl border border-gold/20 p-6 md:p-8">
              <div className="space-y-6">
                {/* Price Display */}
                <div className="text-center pb-6 border-b border-gold/20">
                  <p className="text-muted-foreground text-sm mb-2">Pre-booking Price</p>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="font-display text-5xl md:text-6xl font-bold gold-text-gradient">₹999</span>
                    <span className="text-muted-foreground">/each</span>
                  </div>
                  <p className="text-gold text-sm mt-2">Token advance: ₹251 only</p>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                      <Sparkles className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="text-foreground font-semibold">34-Hour Continuous Chanting</h4>
                      <p className="text-muted-foreground text-sm">Non-stop sacred mantras by 25 Pandithars</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                      <Shield className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="text-foreground font-semibold">Authentic Certification</h4>
                      <p className="text-muted-foreground text-sm">Certificate of blessing included</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                      <Star className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="text-foreground font-semibold">100% Refundable</h4>
                      <p className="text-muted-foreground text-sm">Cancel anytime before event starts</p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <Button
                  variant="divine"
                  size="xl"
                  className="w-full animate-glow"
                  onClick={onPreBookClick}
                >
                  Pre-Book Now
                </Button>

                <p className="text-center text-muted-foreground text-xs">
                  Limited quantity available • Secure your blessing today
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RudrakshaShowcase;

import { Heart, Shield, Sparkles, Users, Star, Zap } from "lucide-react";

const reasons = [
  {
    icon: Sparkles,
    title: "Divine Transformation",
    description: "Experience a profound spiritual awakening that will transform your consciousness and connect you to the divine energy of Lord Shiva.",
  },
  {
    icon: Shield,
    title: "Sacred Protection",
    description: "Receive the protective blessings of 100,000 mantras chanted by 26 Pandithars, creating a powerful shield of divine grace around you.",
  },
  {
    icon: Heart,
    title: "Inner Peace",
    description: "Find lasting peace and harmony as the sacred vibrations cleanse your mind, body, and soul from negativity and stress.",
  },
  {
    icon: Users,
    title: "Collective Energy",
    description: "Be part of a massive gathering of devotees, amplifying the spiritual energy and creating a once-in-a-lifetime experience.",
  },
  {
    icon: Star,
    title: "Historic Moment",
    description: "Witness and be part of a Guinness World Record attempt - a historic event that will be remembered for generations.",
  },
  {
    icon: Zap,
    title: "Life-Changing Blessings",
    description: "Carry home the divine energy through blessed Rudraksha beads, infused with 100,000 powerful mantras for eternal prosperity.",
  },
];

const WhyParticipateSection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-divine-purple/5 via-background to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Why We Are Doing This */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs uppercase tracking-widest mb-4">
            Our Sacred Mission
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Why <span className="gold-text-gradient">Maha Yagam</span>?
          </h2>
          <div className="max-w-3xl mx-auto space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>
              In this age of turmoil and uncertainty, humanity seeks divine intervention and spiritual upliftment. 
              <span className="text-gold font-medium"> Maha Yagam 2026</span> is our humble offering to Lord Shiva — 
              a sacred ceremony designed to channel cosmic energy for the welfare of all beings.
            </p>
            <p>
              We believe that when <span className="text-gold font-medium">100,000 sacred mantras</span> are chanted 
              over <span className="text-gold font-medium">100,000 Rudraksha beads</span> by devoted Pandithars, 
              it creates a powerful vortex of divine energy that can heal, protect, and transform lives.
            </p>
          </div>
        </div>

        {/* Why You Should Participate */}
        <div className="mb-12">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-center text-foreground mb-10">
            Why <span className="gold-text-gradient">You</span> Should Be There
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-gold/10 hover:border-gold/30 transition-all duration-500 hover:shadow-lg hover:shadow-gold/5"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-divine-purple/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <reason.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                    {reason.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divine Quote */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-gold/5 via-card/50 to-divine-purple/5 border border-gold/20">
            <p className="font-display text-xl md:text-2xl text-foreground italic mb-4">
              "When devotion meets divine grace, miracles happen."
            </p>
            <p className="text-gold text-sm uppercase tracking-widest">
              — Ancient Wisdom
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyParticipateSection;

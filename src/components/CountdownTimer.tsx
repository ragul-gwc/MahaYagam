import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const eventDate = new Date("2026-02-26T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-gold/20 via-gold/40 to-gold/20 rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity" />
        <div className="relative w-20 h-24 md:w-28 md:h-32 bg-card/80 backdrop-blur-xl rounded-2xl border border-gold/30 flex items-center justify-center shadow-lg">
          <span className="font-display text-3xl md:text-5xl font-bold gold-text-gradient">
            {value.toString().padStart(2, "0")}
          </span>
        </div>
      </div>
      <span className="text-muted-foreground text-xs md:text-sm mt-3 uppercase tracking-widest font-medium">
        {label}
      </span>
    </div>
  );

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-divine-purple/10 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs uppercase tracking-widest mb-4">
            Event Begins In
          </span>
          <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground">
            The Divine Moment <span className="gold-text-gradient">Awaits</span>
          </h2>
        </div>

        <div className="flex justify-center gap-3 md:gap-6">
          <TimeBlock value={timeLeft.days} label="Days" />
          <div className="flex items-center text-gold/50 text-3xl md:text-5xl font-light self-start mt-8 md:mt-10">:</div>
          <TimeBlock value={timeLeft.hours} label="Hours" />
          <div className="flex items-center text-gold/50 text-3xl md:text-5xl font-light self-start mt-8 md:mt-10">:</div>
          <TimeBlock value={timeLeft.minutes} label="Minutes" />
          <div className="hidden md:flex items-center text-gold/50 text-5xl font-light self-start mt-10">:</div>
          <div className="hidden md:block">
            <TimeBlock value={timeLeft.seconds} label="Seconds" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;

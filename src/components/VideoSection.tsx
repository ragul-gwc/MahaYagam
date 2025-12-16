import { Play, Volume2, VolumeX } from "lucide-react";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs uppercase tracking-widest mb-4">
            Experience The Divine
          </span>
          <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-4">
            A Glimpse Into <span className="gold-text-gradient">Sacred Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Watch and feel the spiritual energy that awaits you at this historic event
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden border border-gold/20 shadow-2xl group">
            <div className="absolute -inset-1 bg-gradient-to-r from-gold/20 via-divine-purple/20 to-gold/20 rounded-3xl blur-xl opacity-40" />
            
            <div className="relative aspect-video bg-card">
              {/* Placeholder video - replace with actual promotional video */}
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                poster="https://images.unsplash.com/photo-1609619385002-f40f1df9b7eb?w=1920&q=80"
                muted={isMuted}
                loop
                playsInline
              >
                <source src="https://assets.mixkit.co/videos/preview/mixkit-candles-in-dark-4449-large.mp4" type="video/mp4" />
              </video>

              {/* Play Button Overlay */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-background/40 backdrop-blur-sm">
                  <button
                    onClick={handlePlayPause}
                    className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-gold/90 hover:bg-gold flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-divine"
                  >
                    <Play className="w-8 h-8 md:w-12 md:h-12 text-background ml-1" fill="currentColor" />
                  </button>
                </div>
              )}

              {/* Controls */}
              {isPlaying && (
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={handlePlayPause}
                    className="bg-background/80 backdrop-blur-sm"
                  >
                    Pause
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={toggleMute}
                    className="bg-background/80 backdrop-blur-sm"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Video Caption */}
          <p className="text-center text-muted-foreground text-sm mt-4">
            Preview of the divine ceremony experience
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

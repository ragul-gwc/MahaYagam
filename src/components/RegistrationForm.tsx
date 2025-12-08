import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, User, Phone, MapPin } from "lucide-react";

interface RegistrationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegistrationForm = ({ isOpen, onClose }: RegistrationFormProps) => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.address) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required for registration",
        variant: "destructive",
      });
      return;
    }

    // Simulate registration
    setIsSubmitted(true);
    toast({
      title: "🙏 Registration Successful!",
      description: "You are now registered for Maha Shivaratri 2025",
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
      <div className="w-full max-w-md bg-card-gradient rounded-2xl border border-gold/30 p-6 shadow-divine animate-in fade-in zoom-in duration-300">
        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-divine-gradient flex items-center justify-center animate-glow">
              <CheckCircle className="w-10 h-10 text-primary-foreground" />
            </div>
            <h3 className="font-display text-2xl font-bold text-gold mb-2">
              Om Namah Shivaya!
            </h3>
            <p className="text-muted-foreground mb-6">
              Your registration is confirmed. We will contact you with event details.
            </p>
            <Button variant="divine" onClick={() => { setIsSubmitted(false); onClose(); }}>
              Close
            </Button>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <h3 className="font-display text-2xl font-bold text-gold mb-2">
                Free Registration
              </h3>
              <p className="text-muted-foreground text-sm">
                Join us for the divine Maha Shivaratri experience
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground flex items-center gap-2">
                  <User className="w-4 h-4 text-gold" /> Full Name
                </Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-input border-gold/30 focus:border-gold text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gold" /> Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-input border-gold/30 focus:border-gold text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address" className="text-foreground flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gold" /> Address
                </Label>
                <Textarea
                  id="address"
                  placeholder="Enter your full address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="bg-input border-gold/30 focus:border-gold text-foreground placeholder:text-muted-foreground min-h-[80px]"
                />
              </div>

              <p className="text-xs text-muted-foreground text-center">
                No entry fees • Registration is required • Limited slots available
              </p>

              <div className="flex gap-3 pt-2">
                <Button type="button" variant="cosmic" className="flex-1" onClick={onClose}>
                  Cancel
                </Button>
                <Button type="submit" variant="divine" className="flex-1">
                  Register Now
                </Button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default RegistrationForm;

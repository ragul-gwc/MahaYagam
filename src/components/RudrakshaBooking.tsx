import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Gem, Phone, User, MapPin, Package, CreditCard, ArrowLeft, CheckCircle } from "lucide-react";
import rudrakshaImage from "@/assets/rudraksha-divine.jpg";

interface RudrakshaBookingProps {
  isOpen: boolean;
  onClose: () => void;
}

type Step = "login" | "details" | "payment" | "success";

const RUDRAKSHA_PRICE = 1100; // Price per Rudraksha
const TOKEN_AMOUNT = 251; // Token advance per Rudraksha

const RudrakshaBooking = ({ isOpen, onClose }: RudrakshaBookingProps) => {
  const { toast } = useToast();
  const [step, setStep] = useState<Step>("login");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    quantity: 1,
  });

  const handleSendOtp = () => {
    if (!phoneNumber || phoneNumber.length < 10) {
      toast({
        title: "Invalid phone number",
        description: "Please enter a valid 10-digit phone number",
        variant: "destructive",
      });
      return;
    }
    setIsOtpSent(true);
    toast({
      title: "OTP Sent!",
      description: "Please enter the OTP sent to your phone",
    });
  };

  const handleVerifyOtp = () => {
    if (otp.length < 4) {
      toast({
        title: "Invalid OTP",
        description: "Please enter a valid OTP",
        variant: "destructive",
      });
      return;
    }
    setStep("details");
  };

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.address || formData.quantity < 1) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required",
        variant: "destructive",
      });
      return;
    }
    setStep("payment");
  };

  const handlePayment = () => {
    // Simulate payment
    toast({
      title: "Processing Payment...",
      description: "Please wait while we process your token advance",
    });
    setTimeout(() => {
      setStep("success");
    }, 1500);
  };

  const totalTokenAmount = TOKEN_AMOUNT * formData.quantity;
  const totalFullAmount = RUDRAKSHA_PRICE * formData.quantity;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
      <div className="w-full max-w-md bg-card-gradient rounded-2xl border border-gold/30 p-6 shadow-divine animate-in fade-in zoom-in duration-300 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          {step !== "login" && step !== "success" && (
            <button
              onClick={() => setStep(step === "payment" ? "details" : "login")}
              className="p-2 rounded-full hover:bg-secondary transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gold" />
            </button>
          )}
          <div className="flex-1 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-gold/30">
              <Gem className="w-4 h-4 text-gold" />
              <span className="text-sm text-gold">Pre-Book Blessed Rudraksha</span>
            </div>
          </div>
          {step !== "success" && (
            <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
              ✕
            </button>
          )}
        </div>

        {/* Login Step */}
        {step === "login" && (
          <div className="space-y-4">
            {/* Rudraksha Preview */}
            <div className="relative rounded-xl overflow-hidden mb-4">
              <img 
                src={rudrakshaImage} 
                alt="Blessed Rudraksha" 
                className="w-full h-32 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                <div>
                  <p className="text-xs text-muted-foreground">Price per Rudraksha</p>
                  <p className="font-display text-2xl font-bold gold-text-gradient">₹1,100</p>
                </div>
                <span className="text-xs bg-gold/20 text-gold px-2 py-1 rounded-full">Token: ₹251</span>
              </div>
            </div>

            <div className="text-center mb-4">
              <h3 className="font-display text-xl font-bold text-gold">
                Login with Mobile
              </h3>
              <p className="text-muted-foreground text-sm mt-1">
                Verify your number to pre-book blessed Rudraksha
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-foreground flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold" /> Mobile Number
              </Label>
              <div className="flex gap-2">
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter 10-digit number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="bg-input border-gold/30 focus:border-gold text-foreground"
                  maxLength={10}
                />
                <Button
                  variant="divine"
                  onClick={handleSendOtp}
                  disabled={isOtpSent}
                >
                  {isOtpSent ? "Sent" : "Get OTP"}
                </Button>
              </div>
            </div>

            {isOtpSent && (
              <div className="space-y-2 animate-in fade-in">
                <Label htmlFor="otp" className="text-foreground">Enter OTP</Label>
                <Input
                  id="otp"
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="bg-input border-gold/30 focus:border-gold text-foreground"
                  maxLength={6}
                />
                <Button variant="divine" className="w-full" onClick={handleVerifyOtp}>
                  Verify & Continue
                </Button>
              </div>
            )}

            <Button variant="cosmic" className="w-full" onClick={onClose}>
              Cancel
            </Button>
          </div>
        )}

        {/* Details Step */}
        {step === "details" && (
          <form onSubmit={handleDetailsSubmit} className="space-y-4">
            <div className="text-center mb-4">
              <h3 className="font-display text-xl font-bold text-gold">
                Booking Details
              </h3>
            </div>

            <div className="space-y-2">
              <Label className="text-foreground flex items-center gap-2">
                <User className="w-4 h-4 text-gold" /> Full Name
              </Label>
              <Input
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-input border-gold/30 focus:border-gold text-foreground"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-foreground flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold" /> Delivery Address
              </Label>
              <Textarea
                placeholder="Enter full address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="bg-input border-gold/30 focus:border-gold text-foreground min-h-[80px]"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-foreground flex items-center gap-2">
                <Package className="w-4 h-4 text-gold" /> Quantity
              </Label>
              <Input
                type="number"
                min={1}
                max={10}
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) || 1 })}
                className="bg-input border-gold/30 focus:border-gold text-foreground"
              />
            </div>

            <div className="p-4 bg-secondary rounded-lg border border-gold/20">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted-foreground">Price per Rudraksha</span>
                <span className="text-foreground">₹{RUDRAKSHA_PRICE}</span>
              </div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted-foreground">Token Advance (per unit)</span>
                <span className="text-foreground">₹{TOKEN_AMOUNT}</span>
              </div>
              <div className="border-t border-gold/20 pt-2 mt-2">
                <div className="flex justify-between font-semibold">
                  <span className="text-gold">Token Amount Now</span>
                  <span className="text-gold">₹{totalTokenAmount}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Balance ₹{totalFullAmount - totalTokenAmount} payable when Rudraksha is ready
                </p>
              </div>
            </div>

            <p className="text-xs text-muted-foreground text-center">
              Cancel anytime before the event starts for full refund
            </p>

            <Button type="submit" variant="divine" className="w-full">
              Proceed to Payment
            </Button>
          </form>
        )}

        {/* Payment Step */}
        {step === "payment" && (
          <div className="space-y-4">
            <div className="text-center mb-4">
              <h3 className="font-display text-xl font-bold text-gold">
                Token Payment
              </h3>
            </div>

            <div className="p-4 bg-secondary rounded-lg border border-gold/20">
              <div className="text-center mb-4">
                <p className="text-muted-foreground text-sm">Amount to Pay</p>
                <p className="font-display text-3xl font-bold text-gold">₹{totalTokenAmount}</p>
              </div>
              <div className="text-sm text-muted-foreground">
                <p>• {formData.quantity} Blessed Rudraksha</p>
                <p>• Chanted 100,000 times</p>
                <p>• Balance payable later</p>
              </div>
            </div>

            <Button variant="divine" className="w-full" onClick={handlePayment}>
              <CreditCard className="w-4 h-4 mr-2" />
              Pay ₹{totalTokenAmount}
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              Secure payment powered by Razorpay
            </p>
          </div>
        )}

        {/* Success Step */}
        {step === "success" && (
          <div className="text-center py-6">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-divine-gradient flex items-center justify-center animate-glow">
              <CheckCircle className="w-10 h-10 text-primary-foreground" />
            </div>
            <h3 className="font-display text-2xl font-bold text-gold mb-2">
              Booking Confirmed!
            </h3>
            <p className="text-muted-foreground mb-4">
              Your blessed Rudraksha has been pre-booked. We will contact you with further details.
            </p>
            <div className="p-4 bg-secondary rounded-lg border border-gold/20 mb-6 text-left">
              <p className="text-sm text-muted-foreground">Order Summary</p>
              <p className="text-foreground">{formData.quantity} Rudraksha × ₹{RUDRAKSHA_PRICE}</p>
              <p className="text-gold font-semibold">Token Paid: ₹{totalTokenAmount}</p>
            </div>
            <Button variant="divine" onClick={() => { setStep("login"); setIsOtpSent(false); setOtp(""); onClose(); }}>
              Done
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RudrakshaBooking;

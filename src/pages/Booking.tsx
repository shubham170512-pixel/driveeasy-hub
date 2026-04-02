import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { MapPin, Calendar, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cars } from "@/lib/carData";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const Booking = () => {
  const { carId } = useParams();
  const car = cars.find((c) => c.id === carId);

  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    pickup: "",
    drop: "",
    date: "",
    distance: "",
  });

  if (!car) {
    return (
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 text-center py-20">
          <h1 className="font-display text-2xl font-bold mb-4">Car not found</h1>
          <Link to="/fleet"><Button>Browse Fleet</Button></Link>
        </div>
      </main>
    );
  }

  const distanceNum = Number(form.distance) || 0;
  const fare = distanceNum * car.pricePerKm;

  const [confirming, setConfirming] = useState(false);

  const handleConfirm = async () => {
    if (!form.name || !form.phone || !form.pickup || !form.date || !form.distance) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setConfirming(true);
    try {
      const { error } = await supabase.from("bookings").insert({
        car_id: car.id,
        car_name: car.name,
        name: form.name,
        phone: form.phone,
        email: form.email || null,
        pickup: form.pickup,
        drop_location: form.drop || null,
        trip_date: form.date,
        distance: distanceNum,
        fare,
      });
      if (error) throw error;
      setStep(3);
      toast.success("Booking confirmed! We'll contact you shortly.");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setConfirming(false);
    }
  };

  return (
    <main className="pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link to="/fleet" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Fleet
        </Link>

        {/* Car summary */}
        <div className="bg-card rounded-lg border border-border p-5 flex flex-col sm:flex-row gap-5 mb-8">
          <img src={car.image} alt={car.name} className="w-full sm:w-48 h-32 object-cover rounded-md" loading="lazy" width={800} height={512} />
          <div>
            <h1 className="font-display text-xl font-bold">{car.name}</h1>
            <p className="text-sm text-muted-foreground">{car.type} · {car.seats} Seats · {car.ac ? "AC" : "Non-AC"}</p>
            <p className="mt-2 font-display text-lg font-bold text-primary">₹{car.pricePerKm}/km <span className="text-sm font-normal text-muted-foreground">or ₹{car.pricePerDay}/day</span></p>
          </div>
        </div>

        {/* Step indicators */}
        <div className="flex items-center gap-2 mb-8">
          {["Trip Details", "Review & Fare", "Confirmed"].map((label, i) => (
            <div key={label} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                step > i + 1 ? "bg-primary text-primary-foreground" :
                step === i + 1 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              }`}>
                {step > i + 1 ? <CheckCircle2 className="w-4 h-4" /> : i + 1}
              </div>
              <span className={`text-sm hidden sm:block ${step === i + 1 ? "font-medium" : "text-muted-foreground"}`}>{label}</span>
              {i < 2 && <div className="w-8 h-px bg-border" />}
            </div>
          ))}
        </div>

        {step === 1 && (
          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-1.5 block">Full Name *</label>
                <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="John Doe" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Phone *</label>
                <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 98765 43210" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Email</label>
              <Input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="john@example.com" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-1.5 block">Pickup Location *</label>
                <Input value={form.pickup} onChange={(e) => setForm({ ...form, pickup: e.target.value })} placeholder="City / Address" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Drop Location</label>
                <Input value={form.drop} onChange={(e) => setForm({ ...form, drop: e.target.value })} placeholder="City / Address" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-1.5 block">Date *</label>
                <Input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Estimated Distance (km) *</label>
                <Input type="number" value={form.distance} onChange={(e) => setForm({ ...form, distance: e.target.value })} placeholder="100" />
              </div>
            </div>
            <Button size="lg" className="mt-4" onClick={() => {
              if (!form.name || !form.phone || !form.pickup || !form.date || !form.distance) {
                toast.error("Please fill in all required fields."); return;
              }
              setStep(2);
            }}>
              Continue to Review
            </Button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div className="bg-muted/50 rounded-lg p-6 space-y-3">
              <h3 className="font-display font-semibold mb-3">Trip Summary</h3>
              <div className="grid sm:grid-cols-2 gap-2 text-sm">
                <p><span className="text-muted-foreground">Name:</span> {form.name}</p>
                <p><span className="text-muted-foreground">Phone:</span> {form.phone}</p>
                <p><span className="text-muted-foreground">Pickup:</span> {form.pickup}</p>
                <p><span className="text-muted-foreground">Drop:</span> {form.drop || "—"}</p>
                <p><span className="text-muted-foreground">Date:</span> {form.date}</p>
                <p><span className="text-muted-foreground">Distance:</span> {form.distance} km</p>
              </div>
            </div>
            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="font-display font-semibold mb-3">Fare Breakdown</h3>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted-foreground">{form.distance} km × ₹{car.pricePerKm}/km</span>
                <span>₹{fare.toLocaleString()}</span>
              </div>
              <div className="border-t border-border pt-2 mt-2 flex justify-between font-semibold">
                <span>Estimated Total</span>
                <span className="text-primary text-lg">₹{fare.toLocaleString()}</span>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" onClick={() => setStep(1)}>Back</Button>
              <Button size="lg" onClick={handleConfirm} disabled={confirming}>{confirming ? "Confirming..." : "Confirm Booking"}</Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="text-center py-12">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-primary" />
            </div>
            <h2 className="font-display text-2xl font-bold mb-2">Booking Confirmed!</h2>
            <p className="text-muted-foreground mb-1">Thank you, {form.name}. Your {car.name} has been booked.</p>
            <p className="text-sm text-muted-foreground mb-8">We'll send a confirmation to {form.phone}. Our team will contact you shortly.</p>
            <Link to="/"><Button>Back to Home</Button></Link>
          </div>
        )}
      </div>
    </main>
  );
};

export default Booking;

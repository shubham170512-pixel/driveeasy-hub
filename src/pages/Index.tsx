import { Link } from "react-router-dom";
import { MapPin, Calendar, Clock, Car, Shield, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CarCard from "@/components/CarCard";
import { cars } from "@/lib/carData";
import heroImage from "@/assets/hero-car.jpg";

const quickOptions = [
  { label: "Local", icon: Car, desc: "City rides" },
  { label: "Outstation", icon: MapPin, desc: "Long distance" },
  { label: "Airport", icon: ArrowRight, desc: "Pickup & drop" },
];

const stats = [
  { value: "10K+", label: "Happy Customers" },
  { value: "500+", label: "Cars Available" },
  { value: "50+", label: "Cities Covered" },
  { value: "24/7", label: "Support" },
];

const Index = () => (
  <main>
    {/* Hero */}
    <section className="relative min-h-[90vh] flex items-center">
      <img src={heroImage} alt="Luxury car on highway" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative container mx-auto px-4 py-32">
        <div className="max-w-2xl animate-fade-in-up">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
            Your Journey, <br />
            <span className="text-gradient-gold">Our Priority</span>
          </h1>
          <p className="text-lg text-white/70 mb-8 max-w-lg">
            Premium car rental & cab booking for local rides, outstation trips, and airport transfers across India.
          </p>
          <div className="flex flex-wrap gap-3 mb-10">
            {quickOptions.map((o) => (
              <Link
                key={o.label}
                to="/fleet"
                className="flex items-center gap-2 px-5 py-3 rounded-lg bg-white/10 backdrop-blur border border-white/20 text-white hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              >
                <o.icon className="w-4 h-4" />
                <span className="font-medium text-sm">{o.label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Booking form */}
        <div className="glass-card rounded-xl p-6 max-w-4xl backdrop-blur-lg border border-white/20 bg-popover-foreground">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="text-xs font-medium text-white/60 mb-1.5 block">Pickup Location</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <Input placeholder="Enter city" className="pl-9 bg-white/10 border-white/20 text-white placeholder:text-white/40" />
              </div>
            </div>
            <div>
              <label className="text-xs font-medium text-white/60 mb-1.5 block">Drop Location</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <Input placeholder="Enter city" className="pl-9 bg-white/10 border-white/20 text-white placeholder:text-white/40" />
              </div>
            </div>
            <div>
              <label className="text-xs font-medium text-white/60 mb-1.5 block">Date</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <Input type="date" className="pl-9 bg-white/10 border-white/20 text-white" />
              </div>
            </div>
            <div>
              <label className="text-xs font-medium text-white/60 mb-1.5 block">Time</label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <Input type="time" className="pl-9 bg-white/10 border-white/20 text-white" />
              </div>
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <Link to="/fleet">
              <Button size="lg">Search Cars</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="bg-accent py-12">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-display text-3xl font-bold text-primary">{s.value}</p>
            <p className="text-sm text-accent-foreground/60 mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Featured cars */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">Our Featured Fleet</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">Choose from a wide range of well-maintained cars for every budget and occasion.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cars.slice(0, 4).map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/fleet">
            <Button variant="outline" size="lg">
              View All Cars <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Why choose us */}
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">Why Choose DriveEasy?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Shield, title: "Safe & Reliable", desc: "All cars are regularly serviced with verified, professional drivers." },
            { icon: Star, title: "Best Prices", desc: "Transparent pricing with no hidden charges. Pay only for what you use." },
            { icon: Clock, title: "24/7 Availability", desc: "Round-the-clock booking and support for all your travel needs." },
          ].map((item) => (
            <div key={item.title} className="bg-card rounded-lg p-8 border border-border text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-dark-gradient text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Ready to Hit the Road?</h2>
        <p className="text-white/60 max-w-md mx-auto mb-8">Book your car in minutes and enjoy a comfortable, hassle-free journey.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/fleet"><Button size="lg">Book a Car</Button></Link>
          <Link to="/contact"><Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">Contact Us</Button></Link>
        </div>
      </div>
    </section>
  </main>
);

export default Index;

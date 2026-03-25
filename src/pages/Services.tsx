import { Link } from "react-router-dom";
import { MapPin, Navigation, Plane, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: MapPin,
    title: "Local Rides",
    desc: "Comfortable city rides for daily commutes, shopping trips, and errands. Flexible hourly and km-based packages.",
    features: ["Hourly packages", "Multi-stop rides", "Flexible timing", "AC & Non-AC options"],
  },
  {
    icon: Navigation,
    title: "Outstation Trips",
    desc: "Travel between cities in comfort. One-way and round-trip options with experienced drivers.",
    features: ["One-way & round trip", "Multi-day packages", "Highway-ready cars", "Toll included"],
  },
  {
    icon: Plane,
    title: "Airport Transfer",
    desc: "Reliable airport pickup and drop services. Flight tracking and on-time guarantee.",
    features: ["Flight tracking", "Meet & greet", "24/7 availability", "Luggage assistance"],
  },
  {
    icon: Building2,
    title: "Corporate Travel",
    desc: "Dedicated fleet solutions for businesses. Monthly billing, priority booking, and dedicated account manager.",
    features: ["Monthly billing", "Priority booking", "Dedicated fleet", "Custom SLAs"],
  },
];

const Services = () => (
  <main className="pt-24 pb-20">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-3">Our Services</h1>
        <p className="text-muted-foreground max-w-lg mx-auto">From daily commutes to long-distance travel, we've got every ride covered.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {services.map((s) => (
          <div key={s.title} className="bg-card rounded-lg border border-border p-8 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
              <s.icon className="w-7 h-7 text-primary" />
            </div>
            <h2 className="font-display text-xl font-semibold mb-2">{s.title}</h2>
            <p className="text-sm text-muted-foreground mb-5">{s.desc}</p>
            <ul className="space-y-2 mb-6">
              {s.features.map((f) => (
                <li key={f} className="text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Link to="/fleet"><Button variant="outline" size="sm">Book Now</Button></Link>
          </div>
        ))}
      </div>
    </div>
  </main>
);

export default Services;

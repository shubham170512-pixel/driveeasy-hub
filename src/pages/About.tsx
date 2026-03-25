import { Shield, Users, Award, Clock } from "lucide-react";

const trustPoints = [
  { icon: Shield, title: "Verified Drivers", desc: "All drivers undergo thorough background checks and regular training." },
  { icon: Users, title: "10,000+ Customers", desc: "Trusted by thousands of travelers across 50+ cities in India." },
  { icon: Award, title: "5 Years of Excellence", desc: "Delivering premium travel experiences since 2020." },
  { icon: Clock, title: "On-Time Guarantee", desc: "We value your time. Late pickup? Get a discount on your next ride." },
];

const About = () => (
  <main className="pt-24 pb-20">
    <div className="container mx-auto px-4 max-w-4xl">
      <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">About DriveEasy Travels</h1>
      <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
        We are a passionate team dedicated to making car travel easy, affordable, and enjoyable for everyone. Whether it's a quick city ride or a cross-country journey, DriveEasy has you covered.
      </p>

      <div className="bg-card rounded-lg border border-border p-8 mb-12">
        <h2 className="font-display text-xl font-semibold mb-3">Our Mission</h2>
        <p className="text-muted-foreground leading-relaxed">
          To provide safe, reliable, and affordable car rental services that make every journey memorable. We believe in transparent pricing, professional service, and putting our customers first — every single time.
        </p>
      </div>

      <h2 className="font-display text-2xl font-bold mb-8 text-center">Why Travelers Trust Us</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {trustPoints.map((t) => (
          <div key={t.title} className="flex gap-4 p-5 rounded-lg bg-muted/50">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <t.icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-display font-semibold mb-1">{t.title}</h3>
              <p className="text-sm text-muted-foreground">{t.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </main>
);

export default About;

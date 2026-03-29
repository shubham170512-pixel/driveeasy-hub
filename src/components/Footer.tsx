import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-accent text-accent-foreground">
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-display text-xl font-bold mb-4">
            Drive<span className="text-primary">Easy</span>
          </h3>
          <p className="text-sm text-accent-foreground/60 leading-relaxed">
            Premium car rental & cab booking services for every journey. Reliable, affordable, and always on time.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {[
              { to: "/fleet", label: "Our Fleet" },
              { to: "/services", label: "Services" },
              { to: "/about", label: "About Us" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="text-sm text-accent-foreground/60 hover:text-primary transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4">Services</h4>
          <div className="flex flex-col gap-2 text-sm text-accent-foreground/60">
            <span>Local Rides</span>
            <span>Outstation Trips</span>
            <span>Airport Transfer</span>
            <span>Corporate Travel</span>
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4">Contact Info</h4>
          <div className="flex flex-col gap-3 text-sm text-accent-foreground/60">
            <a href="tel:+91 9075744097" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" /> +91 90757 44097
            </a>
            <a href="mailto:driveeasy0317@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" /> driveeasy0317@gmail.com
            </a>
            <span className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" /> Pimpri Chinchwad,Pune,Maharashtra 411018
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-accent-foreground/10 mt-8 pt-6 text-center text-sm text-accent-foreground/40">
        © {new Date().getFullYear()} DriveEasy Travels. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;

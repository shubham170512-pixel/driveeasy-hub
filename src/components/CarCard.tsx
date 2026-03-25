import { Link } from "react-router-dom";
import { Users, Fuel } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Car } from "@/lib/carData";

const CarCard = ({ car }: { car: Car }) => (
  <div className="group bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-all duration-300">
    <div className="aspect-[16/10] overflow-hidden bg-muted">
      <img
        src={car.image}
        alt={car.name}
        loading="lazy"
        width={800}
        height={512}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="p-5">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-display font-semibold text-lg">{car.name}</h3>
        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">{car.type}</span>
      </div>
      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
        <span className="flex items-center gap-1"><Users className="w-4 h-4" /> {car.seats} Seats</span>
        <span className="flex items-center gap-1"><Fuel className="w-4 h-4" /> {car.ac ? "AC" : "Non-AC"}</span>
      </div>
      <div className="flex items-end justify-between">
        <div>
          <p className="text-xs text-muted-foreground">Starting from</p>
          <p className="font-display font-bold text-lg">₹{car.pricePerKm}<span className="text-sm font-normal text-muted-foreground">/km</span></p>
        </div>
        <Link to={`/booking/${car.id}`}>
          <Button size="sm">Book Now</Button>
        </Link>
      </div>
    </div>
  </div>
);

export default CarCard;

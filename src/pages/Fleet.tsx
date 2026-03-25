import { useState } from "react";
import { cars } from "@/lib/carData";
import CarCard from "@/components/CarCard";

const carTypes = ["All", "Sedan", "SUV", "Hatchback", "Luxury"] as const;

const Fleet = () => {
  const [type, setType] = useState<string>("All");
  const [maxBudget, setMaxBudget] = useState<number>(50);

  const filtered = cars.filter((c) => {
    if (type !== "All" && c.type !== type) return false;
    if (c.pricePerKm > maxBudget) return false;
    return true;
  });

  return (
    <main className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">Our Fleet</h1>
        <p className="text-muted-foreground mb-8">Browse and book from our wide range of vehicles.</p>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {carTypes.map((t) => (
              <button
                key={t}
                onClick={() => setType(t)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  type === t ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 ml-auto">
            <label className="text-sm text-muted-foreground">Max ₹/km:</label>
            <input
              type="range"
              min={5}
              max={50}
              value={maxBudget}
              onChange={(e) => setMaxBudget(Number(e.target.value))}
              className="w-28 accent-[hsl(38,95%,50%)]"
            />
            <span className="text-sm font-medium w-8">₹{maxBudget}</span>
          </div>
        </div>

        {filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-muted-foreground">
            No cars match your filters. Try adjusting your criteria.
          </div>
        )}
      </div>
    </main>
  );
};

export default Fleet;

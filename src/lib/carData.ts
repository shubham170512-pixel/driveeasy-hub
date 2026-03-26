import carSedan from "@/assets/car-sedan.jpg";
import carSuv from "@/assets/car-suv.jpg";
import carHatchback from "@/assets/car-hatchback.jpg";
import carErtiga from "@/assets/car-ertiga.jpg";
import carLuxury from "@/assets/car-luxury.jpg";
import carInnovaCrysta from "@/assets/car-innova-crysta.jpg";
import carXuv700 from "@/assets/car-xuv700.jpg";

export interface Car {
  id: string;
  name: string;
  type: "Sedan" | "SUV" | "Hatchback" | "Luxury";
  image: string;
  seats: number;
  pricePerKm: number;
  pricePerDay: number;
  ac: boolean;
  features: string[];
}

export const cars: Car[] = [
  {
    id: "1",
    name: "Toyota Etios",
    type: "Sedan",
    image: carSedan,
    seats: 4,
    pricePerKm: 12,
    pricePerDay: 2200,
    ac: true,
    features: ["AC", "Music System", "GPS", "4 Seats"],
  },
  {
    id: "2",
    name: "Honda City",
    type: "Sedan",
    image: carSedan,
    seats: 4,
    pricePerKm: 14,
    pricePerDay: 2800,
    ac: true,
    features: ["AC", "Leather Seats", "GPS", "4 Seats"],
  },
  {
    id: "3",
    name: "Toyota Innova Crysta",
    type: "SUV",
    image: carInnovaCrysta,
    seats: 7,
    pricePerKm: 18,
    pricePerDay: 3500,
    ac: true,
    features: ["AC", "Spacious", "GPS", "7 Seats"],
  },
  {
    id: "4",
    name: "Mahindra XUV700",
    type: "SUV",
    image: carXuv700,
    seats: 7,
    pricePerKm: 20,
    pricePerDay: 4000,
    ac: true,
    features: ["AC", "Sunroof", "GPS", "7 Seats"],
  },
  {
    id: "5",
    name: "Maruti Ertiga",
    type: "SUV",
    image: carErtiga,
    seats: 7,
    pricePerKm: 15,
    pricePerDay: 2800,
    ac: true,
    features: ["AC", "Music System", "GPS", "7 Seats"],
  },
  {
    id: "6",
    name: "Hyundai i20",
    type: "Hatchback",
    image: carHatchback,
    seats: 4,
    pricePerKm: 10,
    pricePerDay: 1800,
    ac: true,
    features: ["AC", "Touchscreen", "4 Seats"],
  },
  {
    id: "7",
    name: "Mercedes E-Class",
    type: "Luxury",
    image: carLuxury,
    seats: 4,
    pricePerKm: 35,
    pricePerDay: 8000,
    ac: true,
    features: ["AC", "Leather Seats", "Premium Sound", "Chauffeur"],
  },
  {
    id: "8",
    name: "BMW 5 Series",
    type: "Luxury",
    image: carLuxury,
    seats: 4,
    pricePerKm: 40,
    pricePerDay: 9500,
    ac: true,
    features: ["AC", "Massage Seats", "WiFi", "Chauffeur"],
  },
];

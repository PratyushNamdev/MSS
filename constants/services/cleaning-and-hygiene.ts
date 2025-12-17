import { Sparkles, Building2, Users, Factory, ShieldCheck } from "lucide-react";

export const cleaningAndHygieneServices = [
  {
    name: "Deep Cleaning",
    icon: Sparkles,
    description:
      "Our deep cleaning services ensure thorough sanitation of residential, commercial, and industrial spaces. This includes detailed cleaning of floors, surfaces, fixtures, washrooms, and high-contact areas. The focus is on removing deep-seated dirt, bacteria, and contaminants to maintain high hygiene standards.",
    image:
      "https://res.cloudinary.com/dggdpeaw4/image/upload/v1765977595/unnamed_xpve7y.jpg",
  },
  {
    name: "Facade Cleaning",
    icon: Building2,
    description:
      "Facade cleaning services focus on maintaining the cleanliness and appearance of building exteriors, including glass, cladding, and external surfaces. Regular facade maintenance helps preserve structural materials while ensuring a professional and well-maintained exterior.",
    image:
      "https://res.cloudinary.com/dggdpeaw4/image/upload/v1765977693/unnamed_m43nyj.jpg",
  },
  {
    name: "Floor Maintenance",
    icon: Building2,
    description:
      "Our floor maintenance services include cleaning, scrubbing, polishing, and surface treatment for various flooring types such as marble, tiles, granite, and concrete. The objective is to enhance durability, safety, and appearance in high-traffic areas.",
    image:
      "https://res.cloudinary.com/dggdpeaw4/image/upload/v1765979278/unnamed_akws9u.jpg",
  },
  {
    name: "Housekeeping Services",
    icon: Users,
    description:
      "We provide trained housekeeping staff for offices, residential complexes, hotels, hospitals, and commercial facilities. Services include daily cleaning routines, washroom maintenance, waste handling, and general upkeep to ensure consistent hygiene standards.",
    image:
      "https://res.cloudinary.com/dggdpeaw4/image/upload/v1765978101/unnamed_ydvtfl.jpg",
  },
  {
    name: "Pressure Cleaning",
    icon: Sparkles,
    description:
      "Pressure cleaning services use high-pressure water systems to remove stubborn dirt, grease, stains, and algae from driveways, parking areas, pavements, terraces, and exterior surfaces. This method ensures effective cleaning without surface damage.",
    image:
      "https://res.cloudinary.com/dggdpeaw4/image/upload/v1765978998/unnamed_p7dd0b.jpg",
  },
  {
    name: "Waste Management",
    icon: Factory,
    description:
      "Our waste management services include segregation, collection, handling, and disposal of waste in compliance with hygiene and environmental standards. This ensures safe, efficient, and responsible waste handling across residential and commercial premises.",
    image:
      "https://res.cloudinary.com/dggdpeaw4/image/upload/v1765978294/unnamed_av9pdh.jpg",
  },
  {
    name: "Pest Control",
    icon: ShieldCheck,
    description:
      "Pest control services are designed to prevent and eliminate infestations such as insects, rodents, and termites. Treatments are carried out using approved methods with a focus on safety, hygiene, and long-term prevention.",
    image:
      "https://res.cloudinary.com/dggdpeaw4/image/upload/v1765978867/unnamed_pkkjcs.jpg",
  },
];
export const cleaningAndHygieneCategories = [
  {
    title: "Routine & Daily Cleaning",
    description:
      "Regular cleaning services focused on maintaining hygiene, cleanliness, and day-to-day facility upkeep.",
    services: [
      {
        name: "Housekeeping Services",
        icon: Users,
        description:
          "Trained housekeeping staff for daily cleaning, washroom maintenance, and general facility upkeep.",
      },
      {
        name: "Deep Cleaning",
        icon: Sparkles,
        description:
          "Detailed cleaning of floors, surfaces, fixtures, and high-contact areas to ensure deep sanitation.",
      },
    ],
  },
  {
    title: "Structural & Surface Maintenance",
    description:
      "Cleaning and maintenance services for building structures, floors, and external surfaces.",
    services: [
      {
        name: "Facade Cleaning",
        icon: Building2,
        description:
          "Exterior building cleaning including glass, cladding, and structural surfaces.",
      },
      {
        name: "Floor Maintenance",
        icon: Building2,
        description:
          "Scrubbing, polishing, and treatment of various floor types to maintain durability and appearance.",
      },
      {
        name: "Pressure Cleaning",
        icon: Sparkles,
        description:
          "High-pressure cleaning for driveways, parking areas, pavements, and outdoor surfaces.",
      },
    ],
  },
  {
    title: "Environmental & Hygiene Control",
    description:
      "Services focused on sanitation, waste handling, and pest prevention to maintain healthy environments.",
    services: [
      {
        name: "Waste Management",
        icon: Factory,
        description:
          "Segregation, collection, and responsible disposal of waste in compliance with hygiene standards.",
      },
      {
        name: "Pest Control",
        icon: ShieldCheck,
        description:
          "Preventive and corrective pest control services to eliminate insects, rodents, and infestations.",
      },
    ],
  },
];

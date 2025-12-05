import {
  ShieldCheck,
  Building2,
  Users,
  Sparkles,
  Factory,
  ClipboardCheck,
  MapPinCheck,
  UserCheck,
  CalendarCheck,
  Home,
  DoorClosed,
  BadgeCheck,
} from "lucide-react";

export const serviceData = [
  // ============================================================
  // SECURITY SERVICES
  // ============================================================
  {
    title: "Security Services",
    description: (
      <p className="text-gray-300 leading-relaxed mb-6">
        We provide end-to-end professional security services designed to protect
        people, property, and organizational assets. Our guards are
        background-verified, trained in real-time threat response, and
        supervised with strict SOPs for discipline and reliability. We deploy
        tailored manpower for residential societies, corporate offices, VIP
        protection, events, and industrial sites.
      </p>
    ),
    content: (
      <img
        src="https://res.cloudinary.com/dggdpeaw4/image/upload/v1764945039/portrait-male-security-guard-with-radio-station-camera-screens_1_fxebua.jpg"
        alt="Security Services"
        className="w-full h-full object-cover rounded-2xl shadow-lg"
      />
    ),
    skills: [
      { name: "Residential Security", icon: <Home size={14} /> },
      { name: "Event Security", icon: <Users size={14} /> },
      { name: "Private Security Guards", icon: <UserCheck size={14} /> },
      { name: "Bodyguard / CPO", icon: <ShieldCheck size={14} /> },
      { name: "Corporate & Industrial Security", icon: <Factory size={14} /> },
      { name: "Bouncer Security", icon: <Users size={14} /> },
      { name: "High-Security Sites", icon: <BadgeCheck size={14} /> },
      { name: "Intelligence Security", icon: <ClipboardCheck size={14} /> },
      { name: "Night Checking", icon: <CalendarCheck size={14} /> },
      { name: "Security Gates", icon: <DoorClosed size={14} /> },
    ],
    links: [{ label: "Explore Security Services", href: "/security-services" }],
  },

  // ============================================================
  // CLEANING & HYGIENE SERVICES
  // ============================================================
  {
    title: "Cleaning & Hygiene Services",
    description: (
      <p className="text-gray-300 leading-relaxed mb-6">
        Our cleaning division ensures spotless, hygienic, and professionally
        maintained spaces. From deep cleaning to daily housekeeping, façade
        cleaning to waste management — we deliver a systematic hygiene program
        that enhances safety, appearance, and user experience across homes,
        offices, industrial plants, and commercial environments.
      </p>
    ),
    content: (
      <img
        src="https://res.cloudinary.com/dggdpeaw4/image/upload/v1764946675/medium-shot-smiley-man-with-cleaning-cart_1_1_thsrmu.jpg"
        alt="Cleaning Services"
        className="w-full h-full object-cover rounded-2xl shadow-lg"
      />
    ),
    skills: [
      { name: "Deep Cleaning", icon: <Sparkles size={14} /> },
      { name: "Facade Cleaning", icon: <Building2 size={14} /> },
      { name: "Floor Maintenance", icon: <Building2 size={14} /> },
      { name: "Housekeeping Services", icon: <Users size={14} /> },
      { name: "Pressure Cleaning", icon: <Sparkles size={14} /> },
      { name: "Waste Management", icon: <Factory size={14} /> },
      { name: "Pest Control", icon: <ShieldCheck size={14} /> },
    ],
    links: [
      {
        label: "Explore Cleaning & Hygiene Services",
        href: "/cleaning-and-hygiene-services",
      },
    ],
  },

  // ============================================================
  // FACILITY & SUPPORT MANAGEMENT
  // ============================================================
  {
    title: "Facility & Support Management",
    description: (
      <p className="text-gray-300 leading-relaxed mb-6">
        Beyond security and cleaning, organizations need smooth operational
        support. We provide trained manpower for guest houses, pantry,
        administration, logistics, and on-site coordination. With flexible
        staffing, supervision, and performance tracking — we help your facility
        run efficiently and professionally.
      </p>
    ),
    content: (
      <img
        src="https://res.cloudinary.com/dggdpeaw4/image/upload/v1764949441/corporate-manager-talking-group-manual-workers-while-having-staff-meeting-factory_1_1_hlb6z9.jpg"
        alt="Facility Management"
        className="w-full h-full object-cover rounded-2xl shadow-lg"
      />
    ),
    skills: [
      { name: "Guest House Management", icon: <Home size={14} /> },
      { name: "Pantry & Office Support", icon: <Users size={14} /> },
      { name: "Manpower Solutions", icon: <Users size={14} /> },
      { name: "Specialized Services", icon: <ClipboardCheck size={14} /> },
      { name: "General Support Staff", icon: <MapPinCheck size={14} /> },
    ],
    links: [
      {
        label: "Explore Facility & Support Management",
        href: "/facility-and-support-services",
      },
    ],
  },
];

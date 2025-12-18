import { Home, Users, ClipboardCheck, MapPinCheck } from "lucide-react";

export const facilityAndManagementServices = [
  {
    name: "Guest House Management",
    icon: Home,
    description:
      "Our guest house management services handle the complete operation and upkeep of guest accommodations. This includes housekeeping coordination, staff supervision, inventory management, and overall facility maintenance to ensure comfortable, organized, and well-managed guest stays.",
    image:
      "https://res.cloudinary.com/dggdpeaw4/image/upload/v1766058898/unnamed_gnwhbb.jpg",
  },
  {
    name: "Pantry & Office Support",
    icon: Users,
    description:
      "We provide pantry and office support services to ensure smooth day-to-day workplace operations. Responsibilities include pantry management, refreshment services, cleanliness support, and coordination of basic office assistance tasks to maintain an efficient work environment.",
    image:
      "https://res.cloudinary.com/dggdpeaw4/image/upload/v1766058981/unnamed_igfshy.jpg",
  },
  {
    name: "Manpower Solutions",
    icon: Users,
    description:
      "Our manpower solutions supply trained and reliable personnel for facility operations, administrative support, and on-site assistance. Staff deployment is aligned with operational requirements to ensure continuity, productivity, and workforce efficiency.",
    image:
      "https://res.cloudinary.com/dggdpeaw4/image/upload/v1766059096/unnamed_emiorw.jpg",
  },
  {
    name: "Specialized Services",
    icon: ClipboardCheck,
    description:
      "Specialized facility services are tailored to specific operational needs, including supervision, compliance support, coordination tasks, and custom facility requirements. These services are structured to address unique site-specific challenges efficiently.",
    image:
      "https://res.cloudinary.com/dggdpeaw4/image/upload/v1766059166/unnamed_m4bylp.jpg",
  },
  {
    name: "General Support Staff",
    icon: MapPinCheck,
    description:
      "We provide general support staff for routine facility operations, including helpers, attendants, and on-ground assistants. Their role is to support daily activities, maintain order, and assist in the smooth functioning of facilities across locations.",
    image:
      "https://res.cloudinary.com/dggdpeaw4/image/upload/v1766059173/unnamed_xmapoe.jpg",
  },
];

export const facilityAndManagementCategories = [
  {
    title: "Accommodation & Workplace Operations",
    description:
      "Management services focused on maintaining accommodation facilities and supporting daily workplace operations.",
    services: [
      {
        name: "Guest House Management",
        icon: Home,
        description:
          "End-to-end management of guest houses including upkeep, coordination, and operational supervision.",
      },
      {
        name: "Pantry & Office Support",
        icon: Users,
        description:
          "Pantry operations and office assistance services ensuring smooth day-to-day workplace functioning.",
      },
    ],
  },
  {
    title: "Staffing & Workforce Support",
    description:
      "Deployment and management of trained manpower to support facility operations and on-site requirements.",
    services: [
      {
        name: "Manpower Solutions",
        icon: Users,
        description:
          "Provision of trained personnel for administrative, operational, and on-ground facility roles.",
      },
      {
        name: "General Support Staff",
        icon: MapPinCheck,
        description:
          "Support staff for routine facility activities, assistance tasks, and on-site coordination.",
      },
    ],
  },
  {
    title: "Specialized Facility Services",
    description:
      "Customized services designed to address specific operational and facility management requirements.",
    services: [
      {
        name: "Specialized Services",
        icon: ClipboardCheck,
        description:
          "Tailored facility solutions for supervision, compliance support, and site-specific needs.",
      },
    ],
  },
];

"use client";

import React from "react";
import Image from "next/image";
import {
  Home,
  Users,
  UserCheck,
  ShieldCheck,
  Factory,
  BadgeCheck,
  ClipboardCheck,
  CalendarCheck,
  DoorClosed,
} from "lucide-react";
import { ContactForm } from "@Molecules";

const categories = [
  {
    title: "Personal Security",
    description:
      "Focused protection services for individuals, personal assets, and controlled environments.",
    services: [
      {
        name: "Bodyguard / CPO",
        icon: ShieldCheck,
        description:
          "Close Protection Officers trained for discreet personal security and threat mitigation.",
      },
      {
        name: "Private Security Guards",
        icon: UserCheck,
        description:
          "Professionally trained guards for individuals, residences, and private properties.",
      },
      {
        name: "Bouncer Security",
        icon: Users,
        description:
          "Physically trained personnel for crowd control and access discipline at private venues.",
      },
    ],
  },
  {
    title: "Property & Infrastructure Security",
    description:
      "Comprehensive security coverage for residential, corporate, and high-risk premises.",
    services: [
      {
        name: "Residential Security",
        icon: Home,
        description:
          "Security personnel and access control for housing societies and private residences.",
      },
      {
        name: "Corporate & Industrial Security",
        icon: Factory,
        description:
          "End-to-end protection for offices, factories, warehouses, and industrial facilities.",
      },
      {
        name: "High-Security Sites",
        icon: BadgeCheck,
        description:
          "Layered security deployment for sensitive and restricted locations.",
      },
      {
        name: "Security Gates",
        icon: DoorClosed,
        description:
          "Manned entry points with visitor management and vehicle verification.",
      },
    ],
  },
  {
    title: "Operational & Intelligence Security",
    description:
      "Monitoring, supervision, and intelligence-led services ensuring continuous control.",
    services: [
      {
        name: "Event Security",
        icon: Users,
        description:
          "Crowd management and on-ground security for public and private events.",
      },
      {
        name: "Night Checking",
        icon: CalendarCheck,
        description:
          "Supervisory night patrols and surprise checks to ensure alertness and compliance.",
      },
      {
        name: "Intelligence Security",
        icon: ClipboardCheck,
        description:
          "Risk assessment and intelligence gathering to prevent security incidents.",
      },
    ],
  },
];
const services = [
  {
    name: "Residential Security",
    icon: Home,
    description:
      "Our residential security services are designed to ensure a safe and controlled living environment for housing societies, apartments, villas, and private homes. Trained security personnel manage access control, visitor verification, vehicle monitoring, and routine patrols, while remaining alert to unusual activity. The focus is on preventive security, resident safety, and maintaining a calm, secure atmosphere at all times.",
    image:
      "https://res.cloudinary.com/dggdpeaw4/image/upload/v1765715148/Gemini_Generated_Image_rt1pcjrt1pcjrt1p_c4zlys.png",
  },
  {
    name: "Event Security",
    icon: Users,
    description:
      "Our event security services provide complete on-ground protection for public and private events such as concerts, weddings, exhibitions, and corporate gatherings. This includes crowd management, entry screening, access regulation, and rapid response to disturbances. Our teams are trained to manage large crowds professionally while ensuring guest safety without disrupting the flow or experience of the event.",
    image:
      "https://res.cloudinary.com/dggdpeaw4/image/upload/v1765715568/Gemini_Generated_Image_og7wcsog7wcsog7w_nbhebt.png",
  },
  {
    name: "Private Security Guards",
    icon: UserCheck,
    description:
      "We deploy professionally trained private security guards for individuals, properties, offices, and assets requiring constant supervision. These guards are trained in vigilance, access control, patrolling, and incident handling. Their role is to deter threats, monitor activity, and respond promptly to security concerns while maintaining a disciplined and professional presence.",
    image:
      "https://res.cloudinary.com/dggdpeaw4/image/upload/v1765715648/Gemini_Generated_Image_ulb5v8ulb5v8ulb5_mngj0i.png",
  },
  {
    name: "Bodyguard / CPO",
    icon: ShieldCheck,
    description:
      "Our Close Protection Officers (CPOs) and bodyguards are trained to provide discreet and effective personal security for high-profile individuals, executives, and VIPs. Services include threat assessment, movement planning, situational awareness, and immediate response to potential risks. Protection is delivered professionally without drawing unnecessary attention, ensuring both safety and privacy.",
    image:
      "https://res.cloudinary.com/dggdpeaw4/image/upload/v1765715774/Gemini_Generated_Image_8pflvd8pflvd8pfl_th9xlf.png",
  },
  {
    name: "Corporate & Industrial Security",
    icon: Factory,
    description:
      "Our corporate and industrial security solutions are structured to protect offices, factories, warehouses, and industrial facilities. Services include perimeter security, access control, employee and visitor management, surveillance coordination, and loss prevention. The objective is to ensure operational continuity, asset protection, and a secure working environment across all business operations.",
    image:
      "https://res.cloudinary.com/dggdpeaw4/image/upload/v1765715921/Gemini_Generated_Image_hpw1k3hpw1k3hpw1_flh6hh.png",
  },
  {
    name: "Bouncer Security",
    icon: Users,
    description:
      "We provide physically trained and disciplined bouncers for clubs, bars, private parties, and high-traffic venues. Their responsibilities include entry control, crowd discipline, conflict management, and maintaining order within the premises. Our bouncers act decisively when required while maintaining professionalism and respect toward guests.",
    image:
      "https://res.cloudinary.com/dggdpeaw4/image/upload/v1765716061/Gemini_Generated_Image_x5w5q5x5w5q5x5w5_fhojbt.png",
  },
  {
    name: "High-Security Sites",
    icon: BadgeCheck,
    description:
      "High-security site services are designed for sensitive locations such as critical infrastructure, restricted zones, and facilities requiring heightened vigilance. This includes layered security deployment, strict access protocols, continuous monitoring, and rapid response readiness. Personnel are trained to follow advanced security procedures and handle high-risk environments with precision.",
    image:
      "https://res.cloudinary.com/dggdpeaw4/image/upload/v1765716395/unnamed_wvfmew.jpg",
  },
  {
    name: "Intelligence Security",
    icon: ClipboardCheck,
    description:
      "Our intelligence security services focus on risk assessment, information gathering, and preventive analysis to identify potential threats before they escalate. This includes site evaluations, behavioral observation, vulnerability assessment, and security planning. The goal is proactive prevention rather than reactive response, strengthening overall security readiness.",
    image:
      "https://res.cloudinary.com/dggdpeaw4/image/upload/v1765716499/unnamed_w7hmnq.jpg",
  },
  {
    name: "Night Checking",
    icon: CalendarCheck,
    description:
      "Night checking services involve supervisory patrols and surprise inspections during night hours to ensure guards remain alert and security protocols are strictly followed. These checks help prevent negligence, ensure discipline, and maintain continuous security coverage during high-risk nighttime periods.",
    image:
      "https://res.cloudinary.com/dggdpeaw4/image/upload/v1765716615/unnamed_scsvdf.jpg",
  },
  {
    name: "Security Gates",
    icon: DoorClosed,
    description:
      "Our manned security gate services provide controlled entry and exit management for residential, commercial, and industrial premises. Guards handle visitor verification, vehicle checks, logging, and access authorization. This ensures only approved individuals and vehicles are allowed entry, strengthening perimeter security and accountability.",
    image:
      "https://res.cloudinary.com/dggdpeaw4/image/upload/v1765716713/unnamed_ltdhpr.jpg",
  },
];

export default function SecurityServicesNarrative() {
  return (
    <>
      <section className="relative py-6 sm:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 sm:mb-20 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              Security Services
            </h2>
            <p className="mt-4 text-gray-300">
              Our services are structured to provide complete security coverage
              — from personal protection to large-scale infrastructure and
              intelligence-driven operations.
            </p>
          </div>

          <div className="space-y-24">
            {services.map((service, idx) => {
              const Icon = service.icon;
              const reverse = idx % 2 !== 0;

              return (
                <div
                  key={service.name}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    reverse ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`relative h-80 rounded-2xl overflow-hidden ${
                      reverse ? "lg:order-2" : ""
                    }`}
                  >
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
                  </div>

                  <div className="max-w-xl">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-teal-300/10 text-teal-300">
                        <Icon size={18} />
                      </div>
                      <h3 className="text-2xl font-medium text-white">
                        {service.name}
                      </h3>
                    </div>

                    <div className="h-px w-16 bg-teal-300/40 mb-6" />

                    <p className="text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="relative py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {categories.map((category) => (
              <div key={category.title} className="space-y-8">
                <div>
                  <h3 className="text-xl font-medium text-white">
                    {category.title}
                  </h3>
                  <div className="h-px w-12 bg-teal-300/40 my-4" />
                  <p className="text-sm text-gray-400">
                    {category.description}
                  </p>
                </div>

                <ul className="space-y-6">
                  {category.services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <li key={service.name} className="flex items-start gap-4">
                        <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-teal-300/10 text-teal-300">
                          <Icon size={18} />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">
                            {service.name}
                          </p>
                          <p className="mt-1 text-sm text-gray-400 leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactForm />
    </>
  );
}
// "use client";

// import React from "react";
// import {
//   Home,
//   Users,
//   UserCheck,
//   ShieldCheck,
//   Factory,
//   BadgeCheck,
//   ClipboardCheck,
//   CalendarCheck,
//   DoorClosed,
// } from "lucide-react";

// export default function SecurityServicesCategorized() {
//   return (

//   );
// }

// "use client";

// import Image from "next/image";
// import {
//   Home,
//   Users,
//   UserCheck,
//   ShieldCheck,
//   Factory,
//   BadgeCheck,
//   ClipboardCheck,
//   CalendarCheck,
//   DoorClosed,
// } from "lucide-react";
// import { motion } from "framer-motion";
// import { cn } from "@/lib/utils";

// export default function SecurityServicesGrid() {
//   return (
//     <section className="relative py-24 bg-gray-900">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="mb-14 max-w-2xl">
//           <h2 className="text-3xl md:text-4xl font-semibold text-white">
//             Our Security Services
//           </h2>
//           <p className="mt-4 text-gray-300">
//             Comprehensive, reliable, and professionally managed security
//             solutions tailored to residential, corporate, and high-risk
//             environments.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, idx) => {
//             const Icon = service.icon;
//             return (
//               <motion.div
//                 key={service.name}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: idx * 0.05 }}
//                 className={cn(
//                   "group relative overflow-hidden rounded-2xl",
//                   "bg-[rgba(26,26,26,0.6)] border border-white/10",
//                   "hover:border-teal-300/40 transition"
//                 )}
//               >
//                 <div className="relative h-52 w-full overflow-hidden">
//                   <Image
//                     src={service.image}
//                     alt={service.name}
//                     fill
//                     className="object-cover transition-transform duration-500 group-hover:scale-105"
//                   />
//                   <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
//                 </div>

//                 <div className="p-6">
//                   <div className="flex items-center gap-3 mb-3">
//                     <div className="flex h-9 w-9 items-center justify-center rounded-md bg-teal-300/10 text-teal-300">
//                       <Icon size={18} />
//                     </div>
//                     <h3 className="text-lg font-medium text-white">
//                       {service.name}
//                     </h3>
//                   </div>
//                   <p className="text-sm text-gray-300 leading-relaxed">
//                     {service.description}
//                   </p>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

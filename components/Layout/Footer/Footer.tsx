"use client";
import { PhoneCall } from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import { serviceLinks } from "@Constants";
const COLORS = {
  primary: "#2dd4bf", // teal-300
  accent: "#22d3ee", // cyan-400
  bg: "#0f1724", // bg dark
  muted: "#d1d5db", // muted text
};

export default function Footer() {
  const securityServices = [
    "Residential Security",
    "Event Security",
    "Private Security Guards",
    "Bodyguard / CPO",
    "Corporate & Industrial Security",
    "Bouncer Security",
    "High-Security Sites",
    "Intelligence Security",
    "Night Checking",
    "Security Gates",
  ];

  const cleaningServices = [
    "Deep Cleaning",
    "Facade Cleaning",
    "Floor Maintenance",
    "Housekeeping Services",
    "Pressure Cleaning",
    "Waste Management",
    "Pest Control",
  ];

  const facilityServices = [
    "Guest House Management",
    "Pantry & Office Support",
    "Manpower Solutions",
    "Specialized Services",
    "General Support Staff",
  ];
  const WP_NUMBER = process.env.NEXT_PUBLIC_WP_NUMBER;
  const wpLink = `https://wa.me/${WP_NUMBER}?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20MSS%20Group%27s%20Security%20and%20Facility%20Management%20services.`;

  return (
    <footer
      aria-label="Site footer"
      className="relative text-gray-300"
      style={{ background: COLORS.bg }}
    >
      {/* slim accent line to visually continue contact header */}
      <div
        aria-hidden
        className="h-0.5 w-full"
        style={{
          background: `linear-gradient(90deg, ${COLORS.accent}22 0%, ${COLORS.primary}33 50%, ${COLORS.accent}22 100%)`,
          boxShadow: `0 6px 30px -20px ${COLORS.primary}`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left: subtle contact strip (not a card) */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              {/* circular logo badge */}
              <div
                className="
      relative
      flex items-center justify-center
      rounded-full
      h-11 w-11
      sm:h-10 sm:w-10
      shrink-0
    "
                aria-hidden
              >
                <Image
                  src="/main.png"
                  alt="Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <div>
                <h3
                  className="text-lg font-semibold"
                  style={{ color: COLORS.primary }}
                >
                  MSS Group
                </h3>
                <p className="text-sm" style={{ color: "#9aa3ad" }}>
                  Managed security & hygiene. Trusted across residential and
                  industry.
                </p>
              </div>
            </div>

            {/* contact lines laid out like inline rows with subtle divider */}
            <div
              className="flex flex-col gap-2 text-sm"
              style={{ color: COLORS.muted }}
            >
              {/* Phone */}
              <div className="flex items-start gap-3">
                <span className="w-24 text-xs text-gray-400 shrink-0">
                  Phone
                </span>
                <div className="flex-1">
                  <a
                    href={`tel:+${WP_NUMBER}`}
                    className="hover:text-white transition"
                  >
                    +{WP_NUMBER}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-24 text-xs text-gray-400 shrink-0">
                  Email
                </span>
                <div className="flex-1">
                  <a
                    href="mailto:contact@mssgroup.com"
                    className="hover:text-white transition"
                  >
                    contact@mssgroup.com
                  </a>
                </div>
              </div>

              {/* Address (multiline fix) */}
              <div className="flex items-start gap-3">
                <span className="w-24 text-xs text-gray-400 shrink-0">
                  Address
                </span>
                <div className="flex-1">
                  <address className="not-italic text-sm leading-relaxed">
                    MSS Group HQ, Prayagraj Uttar Pradesh.
                  </address>
                </div>
              </div>
            </div>

            {/* soft CTA row */}
            <div className="flex items-center gap-3 mt-2">
              <Link
                href="#contact"
                className="flex items-center gap-2 rounded-md p-2 py-3 text-xs font-medium transition"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(45,212,191,0.14), rgba(34,211,238,0.08))",
                  color: "#eafffa",
                  boxShadow: "inset 0 -1px 0 rgba(255,255,255,0.02)",
                }}
              >
                Request a callback
                <PhoneCall className="h-4 w-4" />
              </Link>

              <Link
                href={wpLink}
                aria-label="Chat on WhatsApp"
                target="_blank"
                className="inline-flex items-center gap-2 justify-center h-9 px-3 rounded-md text-sm font-medium transition hover:brightness-110 active:scale-[0.98]"
                style={{
                  background: "#25D366",
                  color: "#ffffff",
                }}
              >
                {/* WhatsApp Icon (SVG) */}
                <FaWhatsapp className="h-5 w-5" />
                WhatsApp Us
              </Link>
            </div>
          </div>

          {/* Middle + Right: compact service lists with subtle separators */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wide mb-3 text-teal-300">
                Security Services
              </h4>
              <ul
                className="space-y-1 sm:space-y-2 text-sm"
                style={{ color: COLORS.muted }}
              >
                {securityServices.map((s) => (
                  <li key={s}>
                    <Link
                      href={`${serviceLinks.security}/#${s
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="hover:text-cyan-300 transition"
                    >
                      {s}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wide mb-3 text-teal-300">
                Cleaning & Hygiene
              </h4>
              <ul className="space-y-2 text-sm" style={{ color: COLORS.muted }}>
                {cleaningServices.map((s) => (
                  <li key={s}>
                    <Link
                      href={`${serviceLinks.cleaningAndHygiene}/#${s
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="hover:text-cyan-300 transition"
                    >
                      {s}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wide mb-3 text-teal-300">
                Facility Management
              </h4>
              <ul className="space-y-2 text-sm" style={{ color: COLORS.muted }}>
                {facilityServices.map((s) => (
                  <li key={s}>
                    <Link
                      href={`${serviceLinks.facilityManagement}/#${s
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="hover:text-cyan-300 transition"
                    >
                      {s}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* subtle divider */}
        <div className="mt-8 border-t border-white/6" />

        {/* bottom low-contrast bar */}
        <div
          className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm"
          style={{ color: "#9aa3ad" }}
        >
          <div>
            © {new Date().getFullYear()} MSS Group. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <nav className="flex items-center gap-4">
              <Link href="#" className="hover:text-white transition hidden">
                Privacy
              </Link>
              <Link href="#" className="hover:text-white transition hidden">
                Terms
              </Link>
              <Link href="#" className="hover:text-white transition hidden">
                Sitemap
              </Link>
            </nav>

            {/* tiny social icons (replace with svg icons if you want) */}
            <div className="flex items-center gap-2">
              <a
                href="#"
                aria-label="LinkedIn"
                className="h-8 w-8 flex items-center justify-center rounded-md bg-white/3 hover:bg-white/6 transition text-xs"
              >
                in
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="h-8 w-8 flex items-center justify-center rounded-md bg-white/3 hover:bg-white/6 transition text-xs"
              >
                ig
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="h-8 w-8 flex items-center justify-center rounded-md bg-white/3 hover:bg-white/6 transition text-xs"
              >
                f
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

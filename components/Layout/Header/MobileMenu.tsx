"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Phone,
  ToolCase,
  BrushCleaning,
  HelpingHand,
  ShieldCheck,
} from "lucide-react";

import { useState } from "react";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";
import { serviceLinks } from "@Constants";
const WP_NUMBER = process.env.NEXT_PUBLIC_WP_NUMBER;
const wpLink = `https://wa.me/${WP_NUMBER}?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20MSS%20Group%27s%20Security%20and%20Facility%20Management%20services.`;

interface MobileMenuProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function MobileMenu({ open, onOpenChange }: MobileMenuProps) {
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = [
    {
      href: serviceLinks.security,
      label: "Security Services",
      icon: <ShieldCheck className="inline-block mr-2 size-4" />,
    },
    {
      href: serviceLinks.cleaningAndHygiene,
      label: "Cleaning & Hygiene",
      icon: <BrushCleaning className="inline-block mr-2 size-4" />,
    },
    {
      href: serviceLinks.facilityManagement,
      label: "Facility & Management",
      icon: <HelpingHand className="inline-block mr-2 size-4" />,
    },
  ];

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="w-[85%] sm:w-[400px] max-w-full h-full bg-[#0f1724] text-gray-100 flex flex-col p-5 border-none"
      >
        <SheetHeader className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 rounded-md overflow-hidden">
              <Image
                src="/logo1.png"
                alt="Logo"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <SheetTitle className="text-lg font-semibold text-white">
                MSS Security & Solutions
              </SheetTitle>
              <p className="text-xs text-gray-400">
                Trusted facility & security partner
              </p>
            </div>
          </div>
        </SheetHeader>

        <nav className="mt-6 flex-1 overflow-x-hidden">
          <ul className="space-y-4">
            {/* Home */}
            <li>
              <Link
                href="/"
                onClick={() => onOpenChange(false)}
                className="flex items-center gap-3 text-base font-medium hover:text-teal-300 transition-colors"
              >
                Home
              </Link>
            </li>

            <li>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`w-full flex items-center justify-between text-base font-medium py-2 rounded-md transition-colors ${
                  servicesOpen ? "text-teal-300" : "text-gray-100"
                } hover:text-teal-300`}
              >
                <span className="flex items-center gap-3">
                  <ToolCase className="size-4" />
                  Services
                </span>

                <svg
                  className={`size-4 transition-transform ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {servicesOpen && (
                <ul className="mt-2 ml-6 space-y-2">
                  {services.map((s) => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        onClick={() => onOpenChange(false)}
                        className="flex items-center gap-3 text-sm text-gray-300 hover:text-teal-300 transition-colors"
                      >
                        {s.icon}
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <Link
                href={serviceLinks.about}
                onClick={() => onOpenChange(false)}
                className="flex items-center gap-3 text-base font-medium hover:text-teal-300 transition-colors"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href={serviceLinks.team}
                onClick={() => onOpenChange(false)}
                className="flex items-center gap-3 text-base font-medium hover:text-teal-300 transition-colors"
              >
                Team
              </Link>
            </li>

            <li>
              <Link
                href="/#contact"
                onClick={() => onOpenChange(false)}
                className="flex items-center gap-3 text-base font-medium hover:text-teal-300 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="mt-auto pt-6 border-t border-white/10">
          <div className="flex flex-col gap-3">
            {/* Call CTA */}
            <a
              href={`tel:+${WP_NUMBER}`}
              className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-linear-to-r from-teal-400 to-cyan-400 text-black font-semibold py-3 hover:opacity-95 transition"
            >
              <Phone className="h-4 w-4" />
              Call Us
            </a>

            <Link
              href={wpLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => onOpenChange(false)}
              className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-green-400 text-black font-semibold py-3 hover:opacity-95 transition"
            >
              <FaWhatsapp className="h-5 w-5" />
              WhatsApp Us
            </Link>

            <div className="flex items-center justify-between pt-3">
              <div>
                <p className="text-xs text-gray-400">Email us</p>
                <a
                  href="mailto:info@example.com"
                  className="text-sm text-gray-300 hover:text-teal-300"
                >
                  info@example.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <a className="p-2 hover:bg-white/5 rounded-md">
                  <FaInstagram className="size-5 text-gray-300 hover:text-cyan-300" />
                </a>
                <a className="p-2 hover:bg-white/5 rounded-md">
                  <FaLinkedin className="size-5 text-gray-300 hover:text-teal-300" />
                </a>
              </div>
            </div>

            <div className="pt-4 text-xs text-gray-500 flex items-center justify-between">
              <span>© {new Date().getFullYear()} MSS</span>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import { Menu } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-[#101828] backdrop-blur-md transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 py-3">
        {/* Left: Logo + Name */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo1.png"
            alt="Company Logo"
            width={40}
            height={40}
            className="rounded-md"
          />
          <span className="text-sm md:text-lg font-semibold tracking-tight text-white">
            MSS & Facility Management
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <DesktopNav />
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <MobileMenu open={isOpen} onOpenChange={setIsOpen} />
          <button onClick={() => setIsOpen(true)}>
            <Menu className="text-cyan-300" />
          </button>
        </div>
      </div>
    </header>
  );
}

function DesktopNav() {
  return (
    <NavigationMenu className="text-white">
      <NavigationMenuList>
        {/* HOME */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/"
              className="px-3 py-2 rounded-md hover:text-teal-300 transition"
            >
              Home
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-white hover:text-teal-300 bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-teal-300">
            Services
          </NavigationMenuTrigger>

          <NavigationMenuContent className="bg-[#101828]! shadow-xl! rounded-md! p-3 min-w-[260px]">
            <ul className="flex flex-col gap-2 text-sm text-gray-300">
              <li>
                <Link
                  href="/services/security"
                  className="block px-2 py-1 rounded hover:text-teal-300 hover:bg-white/5 transition"
                >
                  Security Services
                </Link>
              </li>

              <li>
                <Link
                  href="/services/cleaning"
                  className="block px-2 py-1 rounded hover:text-teal-300 hover:bg-white/5 transition"
                >
                  Cleaning & Hygiene
                </Link>
              </li>

              <li>
                <Link
                  href="/services/facility"
                  className="block px-2 py-1 rounded hover:text-teal-300 hover:bg-white/5 transition"
                >
                  Facility & Management
                </Link>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* TEAM */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/team"
              className="px-3 py-2 rounded-md hover:text-teal-300 transition"
            >
              Team
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* CONTACT */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/contact"
              className="px-3 py-2 rounded-md hover:text-teal-300 transition"
            >
              Contact
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* ABOUT */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/about"
              className="px-3 py-2 rounded-md hover:text-teal-300 transition"
            >
              About
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>

      <NavigationMenuViewport className="border-teal-300! border!" />
    </NavigationMenu>
  );
}

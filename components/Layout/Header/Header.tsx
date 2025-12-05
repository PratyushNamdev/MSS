"use client";

import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="w-full bg-[#101828] backdrop-blur-md transition-colors duration-300 ">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <Image
            src="/logo1.png"
            alt="Company Logo"
            width={40}
            height={40}
            className="rounded-md"
          />
          <span className="text-sm md:text-lg font-semibold tracking-tight text-white">
            MSS & Faculty Management
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <NavLinks />
        </nav>

        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

function NavLinks({ onClick }: { onClick?: () => void }) {
  const links = [
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/career", label: "Career" },
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={onClick}
          className="text-white hover:text-[#05c2c9] transition-colors duration-200 text-base"
        >
          {link.label}
        </Link>
      ))}
    </>
  );
}

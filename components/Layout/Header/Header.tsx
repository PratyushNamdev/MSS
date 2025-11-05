"use client"

import Link from "next/link"

import Image from "next/image"
import { useState } from "react"
import { ToggleTheme } from "@/components/atoms"
import MobileMenu from "./MobileMenu"

export default function Header() {
  return (
    <header className=" w-full bg-background/70 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo1.jpg"
            alt="Company Logo"
            width={40}
            height={40}
            className="rounded-md"
          />
          <span className="text-sm md:text-lg font-semibold tracking-tight text-light dark:text-dark">
            MSS & Faculty Management
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <NavLinks />
          <ToggleTheme />
        </nav>

        {/* Mobile Menu (Sheet) */}
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}


function NavLinks({ onClick }: { onClick?: () => void }) {
  const links = [
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/career", label: "Career" },
  ]

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={onClick}
          className="hover:text-primary transition-colors text-light dark:text-dark duration-200 text-base"
        >
          {link.label}
        </Link>
      ))}
    </>
  )
}

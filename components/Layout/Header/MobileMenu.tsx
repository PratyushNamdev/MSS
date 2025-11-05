"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { ToggleTheme } from "@/components/atoms";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="md:hidden p-2 rounded-md  transition-colors">
          <Menu className="h-5 w-5 text-teal-300 hover:text-teal-300 cursor-pointer" />
        </button>
      </SheetTrigger>

      <SheetContent side="right" className="w-[80%] sm:w-[350px] flex flex-col">
        <SheetHeader>
          <SheetTitle className="text-xl font-semibold text-foreground">
            SecureGuard
          </SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col mt-6 space-y-4 text-lg font-medium">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <Link
            href="/services"
            className="hover:text-primary transition-colors"
          >
            Services
          </Link>
          <Link href="/about" className="hover:text-primary transition-colors">
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </nav>

        <div className="mt-auto pt-6 border-t border-border flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Theme</span>
          <ToggleTheme />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;

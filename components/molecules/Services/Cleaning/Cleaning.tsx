"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { serviceLinks } from "@Constants";

export default function Cleaning() {
  return (
    <div className="flex flex-col md:flex-row gap-10 items-start justify-center max-w-[1440px] bg-[#101828] mt-10 py-4 md:p-0 sticky lg:hidden top-16 z-30">
      <div className="w-full md:w-1/2 flex lg:items-start justify-center max-h-[300px]">
        <Link
          href={serviceLinks.cleaningAndHygiene}
          className="w-full rounded-xl overflow-hidden shadow-md"
        >
          <Image
            src="https://res.cloudinary.com/dggdpeaw4/image/upload/v1764946675/medium-shot-smiley-man-with-cleaning-cart_1_1_thsrmu.jpg"
            alt="Cleaning Services"
            width={1200}
            height={400}
            className="w-full h-auto object-contain"
          />
        </Link>
      </div>

      {/* Info */}
      <div className="w-full md:w-1/2 font-mono text-white">
        <h3 className="text-teal-300 text-lg font-semibold mb-3">
          Cleaning & Hygiene Services
        </h3>

        <p className="text-gray-300 text-sm mb-6">
          Our cleaning division ensures spotless, hygienic, and professionally
          maintained spaces. From deep cleaning to daily housekeeping, facade
          cleaning to waste management — we deliver a systematic hygiene program
          that enhances safety, appearance, and user experience across homes,
          offices, industrial plants, and commercial environments.
        </p>

        {/* Popover Buttons */}
        <div className="mt-4 flex gap-4 text-sm items-center">
          <Link href={serviceLinks.cleaningAndHygiene} className="text-sm">
            <div
              className="
                    bg-teal-500 hover:bg-teal-600 text-gray-900 font-bold 
                    py-3 px-6 md:px-8 
                    rounded-xl
                    transition duration-300 transform hover:scale-[1.02] 
                    uppercase tracking-wider text-xs md:text-sm cursor-pointer
                  "
            >
              <span className="inline-flex items-center gap-2">
                <ExternalLink size={14} />
                Explore Cleaning & Hygiene Services
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

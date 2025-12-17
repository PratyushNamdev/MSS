"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { serviceLinks } from "@Constants";

export default function Management() {
  return (
    <div className="lg:hidden flex flex-col md:flex-row gap-10 items-start justify-center max-w-[1440px] mt-10 z-50 bg-[#101828] py-4 md:p-0 relative">
      <div className="w-full md:w-1/2 flex lg:items-start justify-center max-h-[300px]">
        <Link
          href={serviceLinks.facilityManagement}
          className="w-full rounded-xl overflow-hidden shadow-md"
        >
          <Image
            src="https://res.cloudinary.com/dggdpeaw4/image/upload/v1764949441/corporate-manager-talking-group-manual-workers-while-having-staff-meeting-factory_1_1_hlb6z9.jpg"
            alt="WhatsApp Web Clone Screenshot"
            width={1200}
            height={400}
            className="w-full h-auto object-contain"
          />
        </Link>
      </div>

      {/* Info */}
      <div className="w-full md:w-1/2 font-mono text-white bg-[#101828]">
        <h3 className="text-teal-300 text-xl font-semibold mb-3">
          Facility & Support Management
        </h3>

        <p className="text-gray-300 mb-6 text-sm">
          Beyond security and cleaning, organizations need smooth operational
          support. We provide trained manpower for guest houses, pantry,
          administration, logistics, and on-site coordination. With flexible
          staffing, supervision, and performance tracking — we help your
          facility run efficiently and professionally.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-4 text-sm items-center">
          <Link href={serviceLinks.facilityManagement} className="text-sm">
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
                Explore Facility & Support Management
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

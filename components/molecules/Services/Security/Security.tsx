"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
export default function SecurityServices() {
  return (
    <div className="flex flex-col md:flex-row gap-10 items-start justify-center max-w-[1442px] bg-[#101828] mx-auto sticky lg:hidden top-16 z-20">
      {/* Image */}
      <div className="w-full md:w-1/2 flex lg:items-start justify-center">
        <Link
          href="https://mealbridge-demo.vercel.app"
          rel="noopener noreferrer"
          className="w-full rounded-xl overflow-hidden shadow-md max-h-[300px]"
        >
          <Image
            src="https://res.cloudinary.com/dggdpeaw4/image/upload/v1764945039/portrait-male-security-guard-with-radio-station-camera-screens_1_fxebua.jpg"
            alt="Security Screenshot"
            width={1200}
            height={800}
            className="w-full h-auto object-contain"
          />
        </Link>
      </div>

      {/* Info */}
      <div className="w-full md:w-1/2 font-mono text-white">
        <h3 className="text-teal-300 text-lg font-semibold mb-3">
          Security Services
        </h3>

        <p className="text-gray-300 text-sm mb-6">
          We provide end-to-end professional security services designed to
          protect people, property, and organizational assets. Our guards are
          background-verified, trained in real-time threat response, and
          supervised with strict SOPs for discipline and reliability. We deploy
          tailored manpower for residential societies, corporate offices, VIP
          protection, events, and industrial sites.
        </p>

        {/* Buttons */}
        <div className="mt-4 flex gap-4 text-sm items-center">
          <Link href={"/security-services"} className="text-sm">
            <div
              className="
                    bg-teal-500 hover:bg-teal-600 text-gray-900 font-semibold 
                    py-3 px-6 md:px-8 
                    rounded-xl
                    transition duration-300 transform hover:scale-[1.02] 
                    uppercase tracking-wider text-xs md:text-sm cursor-pointer
                  "
            >
              <span className="inline-flex items-center gap-2">
                <ExternalLink size={14} />
                Explore Security Services
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

function InfoRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start">
      <span className="w-[110px] text-white shrink-0">{label}</span>
      <span className="sm:ml-6 mt-1 sm:mt-0">{children}</span>
    </div>
  );
}

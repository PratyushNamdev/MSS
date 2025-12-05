"use client";

import Image from "next/image";
import Link from "next/link";
import { Button, Popover, PopoverTrigger, PopoverContent } from "@UI";
import { ExternalLink } from "lucide-react";
export default function MealBridge() {
  return (
    <div className="flex flex-col md:flex-row gap-10 items-start justify-center max-w-[1442px] bg-[#111111] mx-auto sticky lg:hidden top-16 z-20">
      {/* Image */}
      <div className="w-full md:w-1/2 flex lg:items-start justify-center">
        <Link
          href="https://mealbridge-demo.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full rounded-xl overflow-hidden shadow-md"
        >
          <Image
            src="https://res.cloudinary.com/dgxvtemh2/image/upload/v1750820823/mealbeidge-1_ngs4ld.png"
            alt="MealBridge Screenshot"
            width={1200}
            height={800}
            className="w-full h-auto object-contain"
          />
        </Link>
      </div>

      {/* Info */}
      <div className="w-full md:w-1/2 font-mono text-white">
        <h3 className="text-green-500 text-xl font-semibold mb-4">
          MealBridge
        </h3>

        <p className="text-gray-300 leading-relaxed mb-6">
          A 3-app ecosystem built for secure, real-time food donation.
          MealBridge includes a donor and collector frontend (
          <span className="text-blue-400">Next.js</span>) and a backend (
          <span className="text-yellow-400">Express</span>). It features live
          meal booking, real-time updates via{" "}
          <span className="text-green-400">Socket.IO</span>, OTP verification,
          OAuth login, and smart food suggestions. Built to be fully responsive
          with modern UI.
        </p>

        {/* Info Table */}
        <div className="space-y-4 text-sm hidden lg:block sm:text-base text-gray-300">
          <InfoRow label="Platform">Web App (Next.js + Express)</InfoRow>
          <InfoRow label="Features">
            OTP, OAuth, Suggestions, Realtime, Filters
          </InfoRow>
          <InfoRow label="Security">OAuth + OTP Validation</InfoRow>
          <InfoRow label="Tech Stack">
            Next.js, TypeScript, Tailwind, Shadcn, Express, Cloudinary,
            TanStack, Socket.IO
          </InfoRow>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-6 text-sm">
          {/* Live Demo Popover */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="link"
                className="text-green-400 p-0 h-auto cursor-pointer hover:text-green-300 transition-colors"
              >
                Live Demo
              </Button>
            </PopoverTrigger>
            <PopoverContent className="bg-[#0e0e0e] border border-[#2f2f2f] text-white w-60 rounded-xl shadow-lg px-4 py-3">
              <p className="text-sm text-gray-400 mb-2">
                Choose an app to open:
              </p>
              <div className="flex flex-col space-y-2 text-sm">
                <a
                  href="https://mealbridge-donate.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between hover:text-green-400 transition-colors"
                >
                  Donor App <ExternalLink size={14} />
                </a>
                <a
                  href="https://mealbridge-collect.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between hover:text-green-400 transition-colors"
                >
                  Collector App <ExternalLink size={14} />
                </a>
                <a
                  href="https://mealbridge-backend-ovbm.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between hover:text-green-400 transition-colors"
                >
                  Backend <ExternalLink size={14} />
                </a>
              </div>
            </PopoverContent>
          </Popover>

          {/* GitHub Popover */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="link"
                className="text-blue-400 p-0 h-auto cursor-pointer hover:text-blue-300 transition-colors"
              >
                View on GitHub
              </Button>
            </PopoverTrigger>
            <PopoverContent className="bg-[#0e0e0e] border border-[#2f2f2f] text-white w-64 rounded-xl shadow-lg px-4 py-3">
              <p className="text-sm text-gray-400 mb-2">
                Explore the source code:
              </p>
              <div className="flex flex-col space-y-2 text-sm">
                <a
                  href="https://github.com/PratyushNamdev/mealbride-donate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between hover:text-blue-400 transition-colors"
                >
                  Donor App <ExternalLink size={14} />
                </a>
                <a
                  href="https://github.com/anushka30aug/mealbridge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between hover:text-blue-400 transition-colors"
                >
                  Collector App <ExternalLink size={14} />
                </a>
                <a
                  href="https://github.com/anushka30aug/mealbridge_backend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between hover:text-blue-400 transition-colors"
                >
                  Backend (Express) <ExternalLink size={14} />
                </a>
              </div>
            </PopoverContent>
          </Popover>
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

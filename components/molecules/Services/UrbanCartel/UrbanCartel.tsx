"use client";

import Image from "next/image";
import Link from "next/link";
import { Button, Popover, PopoverTrigger, PopoverContent } from "@UI";
import { ExternalLink } from "lucide-react";

export default function UrbanCartel() {
  return (
    <div className="flex flex-col md:flex-row gap-10 items-start justify-center max-w-[1440px] mt-10 bg-[#111111] py-4 md:p-0 sticky lg:hidden top-16 z-30">
      <div className="w-full md:w-1/2 flex lg:items-start justify-center ">
        <Link
          href="https://urbancartel.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full rounded-xl overflow-hidden shadow-md"
        >
          <Image
            src="https://res.cloudinary.com/dgxvtemh2/image/upload/v1750829668/UC-1_cniga3.png"
            alt="Urban Cartel Screenshot"
            width={1200}
            height={800}
            className="w-full h-auto object-contain"
          />
        </Link>
      </div>

      {/* Info */}
      <div className="w-full md:w-1/2 font-mono text-white bg-[#111111]">
        <h3 className="text-green-500 text-xl font-semibold mb-4">
          UrbanCartel
        </h3>

        <p className="text-gray-300 leading-relaxed mb-6">
          A modern <span className="text-blue-400">MERN</span> stack shopping
          platform with real-time cart management and secure user experience.
          UrbanCartel features responsive design, payment integration via{" "}
          <span className="text-pink-400">Stripe</span>, secure authentication,
          and a rich feature set including search, filter, profile & order
          management. <span className="text-yellow-400">Redux</span> was used
          for state management, with image uploads powered by{" "}
          <span className="text-purple-400">Cloudinary</span>, and order emails
          sent via <span className="text-blue-300">NodeMailer</span>.
        </p>

        {/* Info Table */}
        <div className="space-y-4 text-sm hidden lg:block sm:text-base text-gray-300">
          <InfoRow label="Platform">
            E-commerce Web App (React + Express)
          </InfoRow>
          <InfoRow label="Features">
            Search, Filter, Cart, Auth, Orders, Stripe Pay
          </InfoRow>
          <InfoRow label="Security">
            JWT Authentication + Encrypted Storage
          </InfoRow>
          <InfoRow label="Tech Stack">
            React, Redux, Node.js, Express, MongoDB, Cloudinary, Stripe,
            NodeMailer
          </InfoRow>
        </div>

        {/* Popover Buttons */}
        <div className="mt-6 flex gap-6 text-sm">
          {/* Live Demo */}
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
              <p className="text-sm text-gray-400 mb-2">Hosted Links:</p>
              <div className="flex flex-col space-y-2 text-sm">
                <a
                  href="https://urbancartel.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between hover:text-green-400 transition-colors"
                >
                  Frontend <ExternalLink size={14} />
                </a>
                <a
                  href="https://urbancartel-backend.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between hover:text-green-400 transition-colors"
                >
                  Backend <ExternalLink size={14} />
                </a>
              </div>
            </PopoverContent>
          </Popover>

          {/* GitHub */}
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
              <p className="text-sm text-gray-400 mb-2">Source Code:</p>
              <div className="flex flex-col space-y-2 text-sm">
                <a
                  href="https://github.com/PratyushNamdev/UrbanCartel/tree/master/Frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between hover:text-blue-400 transition-colors"
                >
                  Frontend (React) <ExternalLink size={14} />
                </a>
                <a
                  href="https://github.com/PratyushNamdev/UrbanCartel/tree/master/Backend"
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

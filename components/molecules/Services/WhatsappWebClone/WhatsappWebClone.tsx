"use client";

import Image from "next/image";
import Link from "next/link";
import { Button, Popover, PopoverTrigger, PopoverContent } from "@UI";
import { ExternalLink } from "lucide-react";

export default function WhatsappWebClone() {
  return (
    <div className="lg:hidden flex flex-col md:flex-row gap-10 items-start justify-center max-w-[1440px] mt-10 z-50 bg-[#111111] py-4 md:p-0 relative">
      <div className="w-full md:w-1/2 flex lg:items-start justify-center">
        <Link
          href="https://what-sappwebclone.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full rounded-xl overflow-hidden shadow-md"
        >
          <Image
            src="https://res.cloudinary.com/dgxvtemh2/image/upload/v1750832710/wp-1_gctqag.png"
            alt="WhatsApp Web Clone Screenshot"
            width={1200}
            height={800}
            className="w-full h-auto object-contain"
          />
        </Link>
      </div>

      {/* Info */}
      <div className="w-full md:w-1/2 font-mono text-white bg-[#111111]">
        <h3 className="text-green-500 text-xl font-semibold mb-4">
          WhatsApp Web Clone
        </h3>

        <p className="text-gray-300 leading-relaxed mb-6">
          A real-time chat application built with the{" "}
          <span className="text-blue-400">MERN</span> stack and{" "}
          <span className="text-green-400">Socket.IO</span>. This clone supports
          secure email authentication via{" "}
          <span className="text-yellow-400">JWT</span> and{" "}
          <span className="text-purple-400">bcrypt</span>, and features
          real-time personal and group chats, read receipts, typing indicators,
          emoji support, and user search — all wrapped in a responsive and sleek
          interface.Inspired by WhatsApp Web, it showcases clean architecture,
          modular code organization, and modern UI design principles.
        </p>

        {/* Info Table */}
        <div className="space-y-4 text-sm hidden lg:block sm:text-base text-gray-300">
          <InfoRow label="Platform">Real-Time Chat Web App</InfoRow>
          <InfoRow label="Features">
            Realtime Chat, Groups, Typing, Read Receipts, Emojis
          </InfoRow>
          <InfoRow label="Security">JWT Auth + bcrypt Hashing</InfoRow>
          <InfoRow label="Tech Stack">
            MongoDB, Express, React, Node.js, Socket.IO, JWT, bcrypt
          </InfoRow>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-6 text-sm">
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
              <p className="text-sm text-gray-400 mb-2">Hosted Link:</p>
              <div className="flex flex-col space-y-2 text-sm">
                <a
                  href="https://what-sappwebclone.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between hover:text-green-400 transition-colors"
                >
                  Frontend <ExternalLink size={14} />
                </a>
                <a
                  href="https://whatsapp-clone-4n6c.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between hover:text-green-400 transition-colors"
                >
                  Backend <ExternalLink size={14} />
                </a>
              </div>
            </PopoverContent>
          </Popover>

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
                  href="https://github.com/PratyushNamdev/WhatsApp-Clone/tree/main/Frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between hover:text-blue-400 transition-colors"
                >
                  Frontend <ExternalLink size={14} />
                </a>
                <a
                  href="https://github.com/PratyushNamdev/WhatsApp-Clone/tree/main/Backend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between hover:text-blue-400 transition-colors"
                >
                  Backend <ExternalLink size={14} />
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

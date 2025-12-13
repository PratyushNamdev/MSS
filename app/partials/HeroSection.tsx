"use client";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
export function HeroSection() {
  const heroImage =
    "https://res.cloudinary.com/dggdpeaw4/image/upload/v1762336972/unnamed_fujqaz.jpg";

  const words = [
    {
      text: "MURTI",
      className: "text-teal-300 text-sm md:text-lg tracking-widest",
    },
    {
      text: "ENTERPRISES",
      className: "text-teal-300 text-sm md:text-lg tracking-widest",
    },
  ];
  return (
    <div>
      {/* Large screens: horizontal split. Small screens: stacked, but we show a full-bleed BG hero */}
      <section className="w-full">
        {/* Small screen hero: background image with overlay + text on top */}
        <div className="relative md:hidden h-[90vh] sm:h-[65vh]">
          <Image
            src={heroImage}
            alt="Security hero"
            fill
            className="object-cover"
            priority={true}
          />
          {/* Overlay for contrast */}
          <div className="absolute inset-0 bg-linear-to-b from-black/45 via-black/30 to-black/50"></div>

          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div className="max-w-xl text-center space-y-6">
              <TypewriterEffect
                words={words}
                className="text-sm font-bold uppercase text-teal-300 tracking-widest inline-block border-b-2 border-teal-400 pb-1"
                cursorClassName="bg-teal-300"
              />

              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-4xl font-extrabold leading-tight"
              >
                <span className="text-white">Integrated</span>{" "}
                <span className="block bg-clip-text text-transparent bg-linear-to-r from-teal-300 to-cyan-400">
                  Security &amp;
                </span>{" "}
                <span className="text-white">Management Solutions</span>
              </motion.h1>

              <motion.p
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="text-base text-gray-200"
              >
                Your partner for Manpower Solutions (MSS), Corporate Security,
                VIP Protection and Facility Services like Deep Cleaning & Waste
                Management.
              </motion.p>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-3 justify-center"
              >
                <Link
                  href="#contact"
                  className="inline-block bg-teal-500 hover:bg-teal-600 text-black font-bold py-3 px-6 rounded-lg shadow-lg shadow-teal-700/30 transition-transform transform hover:scale-[1.02] uppercase tracking-wider text-sm"
                >
                  Get a Free Consultation
                </Link>
                <Link
                  href="#services"
                  className="inline-block border-2 border-white/30 hover:border-cyan-300 text-white py-3 px-6 rounded-lg transition-colors text-sm"
                >
                  View All Services
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* md+ layout: split image + text */}
        <div className="hidden md:flex md:h-[91dvh]">
          {/* Left image half */}
          <div className="w-1/2 relative">
            <Image
              src={heroImage}
              alt="Security hero"
              fill
              className="object-cover"
              priority={true}
            />
            {/* subtle overlay so text on the right remains legible if image bleeds */}
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

          {/* Right text half */}
          <div className="w-1/2 flex items-center justify-center p-8 lg:p-16 bg-gray-900 text-white">
            <div className="max-w-xl space-y-6">
              {/* <p className="text-lg font-bold uppercase text-teal-400 tracking-widest border-b-2 border-teal-500 pb-2 inline-block">
                Murti Enterprises
              </p> */}
              <TypewriterEffect
                words={words}
                className="text-lg font-bold uppercase text-teal-400 tracking-widest border-b-2 border-teal-500 pb-2 inline-block"
                cursorClassName="max-h-4 bg-teal-300"
              />

              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-3xl md:text-5xl xl:text-7xl font-extrabold leading-tight"
              >
                <span className="text-white">Integrated</span>{" "}
                <span className="block bg-clip-text text-transparent bg-linear-to-r from-teal-300 to-cyan-400">
                  Security &amp;
                </span>{" "}
                <span className="text-white">Management Solutions</span>
              </motion.h1>

              <motion.p
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="text-xl text-gray-300 font-light"
              >
                Your single partner for comprehensive Manpower Solutions (MSS),
                Corporate Security, VIP Protection, and specialized Facility
                Services like Deep Cleaning &amp; Waste Management.
              </motion.p>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                className="pt-8 flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/#contact"
                  className="bg-teal-500 hover:bg-teal-600 text-gray-900 font-extrabold py-4 md:px-5 lg:px-10 rounded-xl shadow-2xl shadow-teal-700/50 transition duration-300 transform hover:scale-[1.02] uppercase tracking-wider text-sm"
                >
                  Get a Free Consultation
                </Link>
                <Link
                  href="/#services"
                  className="bg-transparent border-2 border-gray-600 hover:border-cyan-500 text-white font-semibold py-4 px-10 rounded-xl transition duration-300 hover:text-cyan-500 text-sm flex items-center justify-center"
                >
                  View All Services
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import Image from "next/image";
import { murtiTeam } from "@Constants";
import { motion, Variants } from "framer-motion";
import { FollowerPointerCard } from "@Atoms";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const containerStagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const imageAnim: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};


export default function MurtiTeamPage() {
  return (
    <main className="bg-gray-900 text-gray-300">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-28 pb-20">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="
            text-4xl md:text-5xl font-semibold
            bg-linear-to-r from-teal-300 to-cyan-400
            bg-clip-text text-transparent
          "
        >
          Leadership & Core Team
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
          className="mt-6 max-w-2xl text-gray-400 leading-relaxed"
        >
          MSS is led by professionals with deep military, operational, and
          execution expertise. This page outlines who they are, what they do,
          and how they shape the organization.
        </motion.p>
      </section>

      {/* Team Members */}
      <section className="max-w-7xl mx-auto px-6 pb-32 space-y-28">
        {murtiTeam.map((member) => (
          <motion.div
            key={member.id}
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-5 gap-10 items-start"
          >
            {/* Image */}
            <FollowerPointerCard
              title={
                <span className="font-medium tracking-wide">
                  {member.designation}
                </span>
              }
              className="md:col-span-2"
            >
              <motion.div
                variants={imageAnim}
                className="relative aspect-3/4 rounded-xl overflow-hidden border border-white/10"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </FollowerPointerCard>

            {/* Content */}
            <motion.div variants={containerStagger} className="md:col-span-3">
              <motion.h2
                variants={fadeUp}
                className="text-3xl font-medium text-white"
              >
                {member.name}
              </motion.h2>

              <motion.p variants={fadeUp} className="mt-1 text-teal-300">
                {member.designation}
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="mt-6 leading-relaxed text-gray-400"
              >
                {member.intro}
              </motion.p>

              {/* Role */}
              <motion.div variants={fadeUp} className="mt-8">
                <h3 className="text-lg text-white font-medium">
                  Role & Mandate
                </h3>
                <ul className="mt-4 space-y-2 list-disc list-inside">
                  {member.role.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.div>

              {/* Responsibilities */}
              <motion.div variants={fadeUp} className="mt-8">
                <h3 className="text-lg text-white font-medium">
                  Key Responsibilities
                </h3>
                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {member.responsibilities.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-white/10 px-3 py-2"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Philosophy */}
              <motion.blockquote
                variants={fadeUp}
                className="mt-8 border-l-2 border-teal-300 pl-4 text-gray-400 italic"
              >
                “{member.philosophy}”
              </motion.blockquote>
            </motion.div>
          </motion.div>
        ))}
      </section>
    </main>
  );
}

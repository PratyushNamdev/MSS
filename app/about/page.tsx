"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Users, Target, Eye, Globe } from "lucide-react";
import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

export default function AboutMSS() {
  return (
    <section className="bg-[#101828] text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-24">
        {/* Hero */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight bg-linear-to-r from-teal-300 to-cyan-400 bg-clip-text text-transparent">
            Managed Support Services
          </h1>
          <p className="mt-2 text-sm uppercase tracking-widest text-gray-400">
            (MSS)
          </p>
          <div className="mt-4 h-px w-24 bg-linear-to-r from-teal-300 to-cyan-400" />
          <p className="mt-6 text-gray-300 leading-relaxed">
            Managed Support Services (MSS) is built to deliver disciplined,
            reliable, and scalable workforce and facility solutions. We operate
            at the intersection of people, process, and accountability —
            ensuring environments remain secure, efficient, and professionally
            managed.
          </p>
        </motion.div>

        {/* Stats / Philosophy */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            "Operational Excellence",
            "People-First Execution",
            "Measured Accountability",
          ].map((item, i) => (
            <motion.div
              key={item}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <p className="text-lg font-medium text-teal-300">{item}</p>
              <p className="mt-3 text-sm text-gray-300">
                Our systems are designed to reduce uncertainty and increase
                reliability through structured execution and continuous
                monitoring.
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-16">
          {[
            {
              title: "Our Mission",
              icon: <Target size={20} />,
              text: "To provide dependable, compliant, and scalable services that enable organizations to focus on growth while we manage the ground realities.",
            },
            {
              title: "Our Vision",
              icon: <Eye size={20} />,
              text: "To become a benchmark for professional support services by combining human discipline with modern operational systems.",
            },
          ].map((block, i) => (
            <motion.div
              key={block.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-teal-300/10 text-teal-300">
                  {block.icon}
                </div>
                <h2 className="text-2xl font-semibold">{block.title}</h2>
              </div>
              <p className="mt-4 text-gray-300 leading-relaxed">{block.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Core Values */}
        <div className="mt-28">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-3xl font-semibold"
          >
            Core Values
          </motion.h2>
          <div className="mt-4 h-px w-16 bg-linear-to-r from-teal-300 to-cyan-400" />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Integrity",
                icon: <ShieldCheck size={18} />,
              },
              {
                title: "Professionalism",
                icon: <Users size={18} />,
              },
              {
                title: "Precision",
                icon: <Target size={18} />,
              },
              {
                title: "Responsibility",
                icon: <Globe size={18} />,
              },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="rounded-xl border border-white/10 bg-white/5 p-6"
              >
                <div className="flex items-center gap-3 text-teal-300">
                  {value.icon}
                  <p className="font-medium">{value.title}</p>
                </div>
                <p className="mt-3 text-sm text-gray-300">
                  Every engagement is governed by discipline, clarity, and
                  responsibility at all levels.
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-28 max-w-3xl"
        >
          <h3 className="text-2xl font-semibold">
            Built for Long-Term, Mission-Critical Partnerships
          </h3>
          <p className="mt-4 text-gray-300 leading-relaxed">
            MSS is not a short-term vendor. We are an operational partner
            focused on consistency, compliance, and trust — delivering services
            that hold up under real-world pressure.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

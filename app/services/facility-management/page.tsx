"use client";
import { ContactForm } from "@Molecules";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Image from "next/image";
import {
  facilityAndManagementServices,
  facilityAndManagementCategories,
} from "@Constants";
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function page() {
  return (
    <>
      <section className=" py-6 sm:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12 sm:mb-20 max-w-3xl"
          >
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight bg-linear-to-r from-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Facility & Management Services
            </h2>

            <div className="mt-3 h-px w-20 bg-linear-to-r from-teal-300 to-cyan-400" />

            <p className="mt-5 text-gray-300">
              Our facility and management services are structured to support
              smooth day-to-day operations across workplaces and accommodations,
              covering guest house management, manpower deployment, office
              support, and specialized facility services.
            </p>
          </motion.div>

          {/* Narrative rows */}
          <div className="space-y-24">
            {facilityAndManagementServices.map((service, idx) => {
              const Icon = service.icon;
              const reverse = idx % 2 !== 0;

              return (
                <motion.div
                  key={service.name}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  id={service.name.replace(/\s+/g, "-").toLowerCase()}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}
                >
                  {/* Image */}
                  <motion.div
                    variants={fadeIn}
                    className={`relative h-80 rounded-2xl overflow-hidden ${
                      reverse ? "lg:order-2" : ""
                    }`}
                  >
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover "
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
                  </motion.div>

                  {/* Text */}
                  <motion.div variants={fadeUp} className="max-w-xl">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-teal-300/10 text-teal-300">
                        <Icon size={18} />
                      </div>
                      <h3 className="text-2xl font-medium text-teal-300">
                        {service.name}
                      </h3>
                    </div>

                    <div className="h-px w-16 bg-teal-300/40 mb-6" />

                    <p className="text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────────── Categorized Overview Section ───────────── */}
      <section className="relative py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {facilityAndManagementCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-xl font-medium text-teal-300">
                    {category.title}
                  </h3>
                  <div className="h-px w-12 bg-teal-300/40 my-4" />
                  <p className="text-sm text-gray-400">
                    {category.description}
                  </p>
                </div>

                <motion.ul
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ staggerChildren: 0.08 }}
                  className="space-y-6"
                >
                  {category.services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <motion.li
                        key={service.name}
                        variants={fadeUp}
                        className="flex items-start gap-4"
                      >
                        <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-teal-300/10 text-teal-300">
                          <Icon size={18} />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">
                            {service.name}
                          </p>
                          <p className="mt-1 text-sm text-gray-400 leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </motion.li>
                    );
                  })}
                </motion.ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <ContactForm />
    </>
  );
}

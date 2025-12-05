"use client";
import { motion } from "framer-motion";
import { Counter } from "@Atoms";
import { Building2, CalendarCheck, MapPinCheck, Users } from "lucide-react";
import React from "react";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 60,
      damping: 14,
    },
  },
};

const statsData = [
  {
    id: "clients",
    icon: <Building2 className="text-teal-300 w-5 h-5 lg:w-6 lg:h-6" />,
    to: 10,
    label: "Clients Served",
  },
  {
    id: "sites",
    icon: <MapPinCheck className="text-teal-300 w-5 h-5 lg:w-6 lg:h-6" />,
    to: 20,
    label: "Sites Managed",
  },
  {
    id: "staff",
    icon: <Users className="text-teal-300 w-5 h-5 lg:w-6 lg:h-6" />,
    to: 40,
    label: "Trained Staff",
  },
  {
    id: "years",
    icon: <CalendarCheck className="text-teal-300 w-5 h-5 lg:w-6 lg:h-6" />,
    to: 2,
    label: "Years of Experience",
  },
];

export default function StatsStrip() {
  return (
    <div className="bg-[#101828] flex justify-center pt-8 lg:pt-18 px-4 not-lg:pb-8">
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-6 lg:gap-14 w-full max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {statsData.map((stat) => (
          <motion.div
            key={stat.id}
            variants={cardVariants}
            className="p-4 lg:p-6 flex flex-col items-center text-center sm:text-left rounded-xl border border-transparent transition-all duration-300 group hover:backdrop-blur-md hover:border-b-teal-500"
          >
            <div className="mb-2">{stat.icon}</div>

            <span className="text-2xl lg:text-3xl font-semibold mb-2 text-teal-300">
              <Counter
                from={0}
                to={stat.to}
                separator=","
                direction="up"
                duration={1}
                className=""
              />
              +
            </span>

            <p className="text-sm md:text-base lg:text-lg text-gray-300">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

// "use client";
// import { motion } from "framer-motion";
// import { Counter } from "@Atoms";
// import { Building2, CalendarCheck, MapPinCheck, Users } from "lucide-react";

// const containerVariants = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.2,
//     },
//   },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 10 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       type: "spring" as const,
//       stiffness: 60,
//       damping: 14,
//     },
//   },
// };

// export default function StatsStrip() {
//   return (
//     <div className="bg-[#101828] flex justify-center py-8 px-4">
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-14 w-full max-w-7xl">
//         <div className="p-4 flex flex-col items-center text-center sm:text-left rounded-xl border border-transparent transition-all duration-300 group hover:backdrop-blur-md hover:border-b-teal-500">
//           <div className="mb-2">
//             <Building2  className="text-teal-300 w-5 h-5" />
//           </div>
//           <span className="text-2xl font-semibold mb-2 text-teal-300">
//             <Counter
//               from={0}
//               to={10}
//               separator=","
//               direction="up"
//               duration={1}
//               className=""
//             />
//             +
//           </span>
//           <p className="text-xs md:text-base text-gray-300">Clients Served</p>
//         </div>

//         <div className="p-4 flex flex-col items-center text-center sm:text-left rounded-xl border border-transparent transition-all duration-300 group hover:backdrop-blur-md hover:border-b-teal-500">
//           <div className="mb-2">
//             <MapPinCheck  className="text-teal-300 w-5 h-5" />
//           </div>
//           <span className="text-2xl font-semibold mb-2 text-teal-300">
//             <Counter
//               from={0}
//               to={20}
//               separator=","
//               direction="up"
//               duration={1}
//               className=""
//             />
//             +
//           </span>
//           <p className="text-xs md:text-base text-gray-300">Sites Managed</p>
//         </div>

//         <div className="p-4 flex flex-col items-center text-center sm:text-left rounded-xl border border-transparent transition-all duration-300 group hover:backdrop-blur-md hover:border-b-teal-500">
//           <div className="mb-2">
//             <Users   className="text-teal-300 w-5 h-5" />
//           </div>
//           <span className="text-2xl font-semibold mb-2 text-teal-300">
//             <Counter
//               from={0}
//               to={40}
//               separator=","
//               direction="up"
//               duration={1}
//               className=""
//             />
//             +
//           </span>
//           <p className="text-xs md:text-base text-gray-300">Trained Staff</p>
//         </div>

//         <div className="p-4 flex flex-col items-center text-center sm:text-left rounded-xl border border-transparent transition-all duration-300 group hover:backdrop-blur-md hover:border-b-teal-500">
//           <div className="mb-2">
//             <CalendarCheck   className="text-teal-300 w-5 h-5" />
//           </div>
//           <span className="text-2xl font-semibold mb-2 text-teal-300">
//             <Counter
//               from={0}
//               to={2}
//               separator=","
//               direction="up"
//               duration={1}
//               className=""
//             />
//             +
//           </span>
//           <p className="text-xs md:text-base text-gray-300">
//             Years of Experience
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

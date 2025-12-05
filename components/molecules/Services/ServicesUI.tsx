/* eslint-disable */
"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion, Variants } from "motion/react";
import { cn } from "@/lib/utils";
// Removed: Popover, PopoverContent, PopoverTrigger
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

type Skill = {
  name: string;
  icon?: React.ReactNode;
};

// Modified: Removed 'group' property
type LinkItem = {
  label: string;
  href: string;
};

type Card = {
  title: string;
  description: React.ReactNode | string;
  content?: React.ReactNode;
  skills?: Skill[];
  links?: LinkItem[]; // Now expects an array of LinkItem with just label and href
};

export const ServicesUI = ({
  content,
  contentClassName,
}: {
  content: Card[];
  contentClassName?: string;
}) => {
  const ref = useRef<HTMLElement | null>(null);
  const [activeCard, setActiveCard] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const cardLength = Math.max(content.length, 1);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const breakpoints = content.map((_, i) => (i + 0.5) / cardLength);
    const closestIndex = breakpoints.reduce(
      (acc, bp, i) =>
        Math.abs(latest - bp) < Math.abs(latest - breakpoints[acc]) ? i : acc,
      0
    );
    setActiveCard(closestIndex);
  });

  const contentBackgrounds = ["#E6F3EF", "#F7E1D4", "#121A1E"];
  const linearGradients = [
    "linear-gradient(135deg, #142235 0%, #142235 35%, #2dd4bf 35%, #2dd4bf 100%)",
    "linear-gradient(150deg, #142235 0%, #142235 35%, #2dd4bf 35%, #2dd4bf 100%)",
    "linear-gradient(155deg, #142235 0%, #142235 35%, #2dd4bf 35%, #2dd4bf 100%)",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(
      linearGradients[activeCard % linearGradients.length] ?? linearGradients[0]
    );
  }, [activeCard]);

  const renderClonedImageIfNeeded = (node: React.ReactNode) => {
    if (
      React.isValidElement(node) &&
      typeof (node.type as any) === "string" &&
      (node.type as any) === "img"
    ) {
      const imgElement = node as React.ReactElement<
        React.ImgHTMLAttributes<HTMLImageElement>
      >;

      const incomingClass = imgElement.props.className ?? "";
      const incomingStyle = imgElement.props.style ?? {};

      return React.cloneElement(imgElement, {
        className: cn(incomingClass, "w-full h-auto object-cover"),
        style: {
          maxHeight: "60vh",
          width: "100%",
          objectFit: "cover",
          ...incomingStyle,
        },
      });
    }

    return node;
  };

  const renderDescription = (
    desc: React.ReactNode | string,
    baseClass = "text-lg text-slate-300"
  ) => {
    if (typeof desc === "string") {
      const looksLikeHtml = /<[^>]+>/.test(desc);
      if (looksLikeHtml) {
        return (
          <div
            className={baseClass}
            dangerouslySetInnerHTML={{ __html: desc }}
          />
        );
      }
      return <p className={baseClass}>{desc}</p>;
    }
    return <div className={baseClass}>{desc}</div>;
  };

  const renderSkills = (skills?: Skill[]) => {
    if (!skills || skills.length === 0) return null;

    const container: Variants = {
      hidden: {},
      show: {
        transition: {
          staggerChildren: 0.12,
          delayChildren: 0.06,
        },
      },
    };

    const item: Variants = {
      hidden: { opacity: 0, y: 8, scale: 0.92 },
      show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.42,
          ease: "easeOut",
        },
      },
    };

    return (
      <motion.div
        className="mt-6 flex flex-wrap gap-3"
        variants={container}
        initial="hidden"
        animate="show"
        role="list"
        aria-label="skills"
      >
        {skills.map((s) => (
          <motion.div
            key={s.name}
            variants={item}
            role="listitem"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-slate-700 bg-transparent text-sm text-slate-200"
            whileHover={{ scale: 1.05, transition: { duration: 0.15 } }} // ✨ subtle hover pop
          >
            {s.icon ? <span className="w-4 h-4">{s.icon}</span> : null}
            <span className="select-none">{s.name}</span>
          </motion.div>
        ))}
      </motion.div>
    );
  };

  // Refactored: Only renders a single button for the first link in the array
  const renderSingleLinkButton = (links?: LinkItem[]) => {
    if (!links || links.length === 0) return null;
    const link = links[0];

    return (
      <div className="mt-6 flex gap-4 text-sm items-center">
        <Link
          key={link.href}
          href={link.href}
          className="text-sm"
        >
          <div
            className="
            bg-teal-500 hover:bg-teal-600 text-gray-900 font-bold 
            py-3 px-6 md:px-8 
            rounded-xl shadow-2xl shadow-teal-700/50 
            transition duration-300 transform hover:scale-[1.02] 
            uppercase tracking-wider text-sm cursor-pointer
          "
          >
            <span className="inline-flex items-center gap-2">
              <ExternalLink size={14} />
              {link.label}
            </span>
          </div>
        </Link>
      </div>
    );
  };
  return (
    <motion.section
      ref={ref}
      animate={{ backgroundColor: "transparent" }}
      className="relative w-full text-slate-100"
    >
      <div className="hidden lg:flex lg:flex-row min-h-dvh">
        <div className="w-[60%]">
          {content.map((item, index) => (
            <div
              key={item.title + index}
              className="min-h-dvh flex items-center justify-center px-8"
            >
              <div
                style={{
                  background:
                    linearGradients[index % linearGradients.length] ??
                    linearGradients[0],
                }}
                className={cn(
                  "relative w-full max-w-[900px] px-6 py-6 overflow-hidden rounded-2xl shadow-2xl flex items-center justify-center",
                  contentClassName
                )}
              >
                <div className="w-full flex items-center justify-center">
                  <div className="w-full max-w-[820px]">
                    <div
                      className="rounded-2xl overflow-hidden flex items-center justify-center"
                      style={{
                        backgroundColor:
                          contentBackgrounds[index % contentBackgrounds.length],
                      }}
                    >
                      {renderClonedImageIfNeeded(item.content ?? null)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[40%] sticky top-0 h-screen flex items-center px-8">
          <div className="max-w-xl">
            <motion.h2
              key={content[activeCard]?.title}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="text-4xl font-semibold leading-tight mb-6 text-teal-400"
            >
              {content[activeCard]?.title}
            </motion.h2>

            <motion.div
              key={content[activeCard]?.title + "-desc"}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              {renderDescription(
                content[activeCard]?.description ?? "",
                "text-md xl:text-lg text-slate-300 leading-relaxed mb-6"
              )}
              {renderSkills(content[activeCard]?.skills)}
              {/* Used the new, single-button renderer */}
              {renderSingleLinkButton(content[activeCard]?.links)}
            </motion.div>
          </div>
        </div>
      </div>
      <div className="lg:hidden flex flex-col">
        {content.map((item, index) => (
          <div
            key={item.title + index}
            className="min-h-dvh flex flex-col items-stretch justify-start"
          >
            <div
              className="h-[60dvh] w-full flex items-center justify-center p-4"
              style={{ background: backgroundGradient }}
            >
              <div className="h-full w-full max-w-3xl overflow-hidden rounded-2xl bg-white">
                {item.content ?? null}
              </div>
            </div>

            <div className="flex-1 px-6 py-8">
              <h3 className="text-3xl font-semibold mb-4">{item.title}</h3>
              {renderDescription(item.description, "text-slate-300")}
              {renderSkills(item.skills)}
              {/* Used the new, single-button renderer */}
              {renderSingleLinkButton(item.links)}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};
// /* eslint-disable */
// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import { useMotionValueEvent, useScroll, motion, Variants } from "motion/react";
// import { cn } from "@/lib/utils";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { Button } from "@/components/ui/button";
// import { ExternalLink, Github } from "lucide-react";

// type Skill = {
//   name: string;
//   icon?: React.ReactNode;
// };

// type LinkItem = {
//   label: string;
//   href: string;
//   group?: "live" | "code" | "other" | string;
// };

// type Card = {
//   title: string;
//   description: React.ReactNode | string;
//   content?: React.ReactNode;
//   skills?: Skill[];
//   links?: LinkItem[];
// };

// export const ServicesUI = ({
//   content,
//   contentClassName,
// }: {
//   content: Card[];
//   contentClassName?: string;
// }) => {
//   const ref = useRef<HTMLElement | null>(null);
//   const [activeCard, setActiveCard] = useState(0);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });

//   const cardLength = Math.max(content.length, 1);

//   useMotionValueEvent(scrollYProgress, "change", (latest) => {
//     const breakpoints = content.map((_, i) => (i + 0.5) / cardLength);
//     const closestIndex = breakpoints.reduce(
//       (acc, bp, i) =>
//         Math.abs(latest - bp) < Math.abs(latest - breakpoints[acc]) ? i : acc,
//       0
//     );
//     setActiveCard(closestIndex);
//   });

//   const contentBackgrounds = ["#E6F3EF", "#F7E1D4", "#121A1E"];
//   const linearGradients = [
//     "linear-gradient(135deg, #142235 0%, #142235 35%, #2dd4bf 35%, #2dd4bf 100%)",
//     "linear-gradient(150deg, #142235 0%, #142235 35%, #2dd4bf 35%, #2dd4bf 100%)",
//     "linear-gradient(155deg, #142235 0%, #142235 35%, #2dd4bf 35%, #2dd4bf 100%)",
//   ];

//   const [backgroundGradient, setBackgroundGradient] = useState(
//     linearGradients[0]
//   );

//   useEffect(() => {
//     setBackgroundGradient(
//       linearGradients[activeCard % linearGradients.length] ?? linearGradients[0]
//     );
//   }, [activeCard]);

//   const renderClonedImageIfNeeded = (node: React.ReactNode) => {
//     if (
//       React.isValidElement(node) &&
//       typeof (node.type as any) === "string" &&
//       (node.type as any) === "img"
//     ) {
//       const imgElement = node as React.ReactElement<
//         React.ImgHTMLAttributes<HTMLImageElement>
//       >;

//       const incomingClass = imgElement.props.className ?? "";
//       const incomingStyle = imgElement.props.style ?? {};

//       return React.cloneElement(imgElement, {
//         className: cn(incomingClass, "w-full h-auto object-cover"),
//         style: {
//           maxHeight: "60vh",
//           width: "100%",
//           objectFit: "cover",
//           ...incomingStyle,
//         },
//       });
//     }

//     return node;
//   };

//   const renderDescription = (
//     desc: React.ReactNode | string,
//     baseClass = "text-lg text-slate-300"
//   ) => {
//     if (typeof desc === "string") {
//       const looksLikeHtml = /<[^>]+>/.test(desc);
//       if (looksLikeHtml) {
//         return (
//           <div
//             className={baseClass}
//             dangerouslySetInnerHTML={{ __html: desc }}
//           />
//         );
//       }
//       return <p className={baseClass}>{desc}</p>;
//     }
//     return <div className={baseClass}>{desc}</div>;
//   };

//   const renderSkills = (skills?: Skill[]) => {
//     if (!skills || skills.length === 0) return null;

//     const container: Variants = {
//       hidden: {},
//       show: {
//         transition: {
//           staggerChildren: 0.12,
//           delayChildren: 0.06,
//         },
//       },
//     };

//     const item: Variants = {
//       hidden: { opacity: 0, y: 8, scale: 0.92 },
//       show: {
//         opacity: 1,
//         y: 0,
//         scale: 1,
//         transition: {
//           duration: 0.42,
//           ease: "easeOut",
//         },
//       },
//     };

//     return (
//       <motion.div
//         className="mt-6 flex flex-wrap gap-3"
//         variants={container}
//         initial="hidden"
//         animate="show"
//         role="list"
//         aria-label="skills"
//       >
//         {skills.map((s) => (
//           <motion.div
//             key={s.name}
//             variants={item}
//             role="listitem"
//             className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-slate-700 bg-transparent text-sm text-slate-200"
//             whileHover={{ scale: 1.05, transition: { duration: 0.15 } }} // ✨ subtle hover pop
//           >
//             {s.icon ? <span className="w-4 h-4">{s.icon}</span> : null}
//             <span className="select-none">{s.name}</span>
//           </motion.div>
//         ))}
//       </motion.div>
//     );
//   };

//   const renderLinkPopovers = (links?: LinkItem[]) => {
//     if (!links || links.length === 0) return null;
//     const liveLinks = links.filter((l) => l.group === "live");
//     const codeLinks = links.filter((l) => l.group === "code");
//     const otherLinks = links.filter((l) => !l.group || l.group === "other");

//     return (
//       <div className="mt-6 flex gap-4 text-sm items-center">
//         {liveLinks.length > 0 && (
//           <Popover>
//             <PopoverTrigger asChild>
//               <div className="px-8 py-2 rounded-full relative bg-slate-700 text-white text-sm hover:shadow-2xl hover:shadow-white/10 transition duration-200 border border-slate-600 cursor-pointer">
//                 <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl bg-linear-to-r from-transparent via-teal-500 to-transparent" />
//                 <span className="relative z-20 inline-flex items-center gap-2">
//                   <ExternalLink size={14} />
//                   Live
//                 </span>
//               </div>
//             </PopoverTrigger>
//             <PopoverContent className="bg-[#0e0e0e] border border-[#2f2f2f] text-white w-60 rounded-xl shadow-lg px-4 py-3">
//               <p className="text-sm text-gray-400 mb-2">
//                 Choose an app to open:
//               </p>
//               <div className="flex flex-col space-y-2 text-sm">
//                 {liveLinks.map((l) => (
//                   <a
//                     key={l.href}
//                     href={l.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center justify-between hover:text-green-400 transition-colors"
//                   >
//                     {l.label} <ExternalLink size={14} />
//                   </a>
//                 ))}
//               </div>
//             </PopoverContent>
//           </Popover>
//         )}

//         {codeLinks.length > 0 && (
//           <Popover>
//             <PopoverTrigger asChild>
//               <div className="px-8 py-2 rounded-full relative bg-slate-700 text-white text-sm hover:shadow-2xl hover:shadow-white/10 transition duration-200 border border-slate-600 cursor-pointer">
//                 <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl bg-linear-to-r from-transparent via-teal-500 to-transparent" />
//                 <span className="relative z-20 inline-flex items-center gap-2">
//                   <Github size={14} />
//                   GitHub
//                 </span>
//               </div>
//             </PopoverTrigger>
//             <PopoverContent className="bg-[#0e0e0e] border border-[#2f2f2f] text-white w-64 rounded-xl shadow-lg px-4 py-3">
//               <p className="text-sm text-gray-400 mb-2">
//                 Explore the source code:
//               </p>
//               <div className="flex flex-col space-y-2 text-sm">
//                 {codeLinks.map((l) => (
//                   <a
//                     key={l.href}
//                     href={l.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center justify-between hover:text-blue-400 transition-colors"
//                   >
//                     {l.label} <ExternalLink size={14} />
//                   </a>
//                 ))}
//               </div>
//             </PopoverContent>
//           </Popover>
//         )}

//         {otherLinks.map((l) => (
//           <a
//             key={l.href}
//             href={l.href}
//             target="_blank"
//             rel="noreferrer"
//             className="text-sm"
//           >
//             <Button variant="outline" className="px-3 py-1">
//               {l.label} <ExternalLink className="ml-2" size={14} />
//             </Button>
//           </a>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <motion.section
//       ref={ref}
//       animate={{ backgroundColor: "transparent" }}
//       className="relative w-full text-slate-100"
//     >
//       {/* Desktop: image column scrolls, text column sticky */}
//       <div className="hidden lg:flex lg:flex-row min-h-dvh">
//         {/* LEFT: Scrolling image list */}
//         <div className="w-[60%]">
//           {content.map((item, index) => (
//             <div
//               key={item.title + index}
//               className="min-h-dvh flex items-center justify-center px-8"
//             >
//               <div
//                 style={{
//                   background:
//                     linearGradients[index % linearGradients.length] ??
//                     linearGradients[0],
//                 }}
//                 className={cn(
//                   "relative w-full max-w-[900px] px-6 py-6 overflow-hidden rounded-2xl shadow-2xl flex items-center justify-center",
//                   contentClassName
//                 )}
//               >
//                 <div className="w-full flex items-center justify-center">
//                   <div className="w-full max-w-[820px]">
//                     <div
//                       className="rounded-2xl overflow-hidden flex items-center justify-center"
//                       style={{
//                         backgroundColor:
//                           contentBackgrounds[index % contentBackgrounds.length],
//                       }}
//                     >
//                       {renderClonedImageIfNeeded(item.content ?? null)}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* RIGHT: sticky text column */}
//         <div className="w-[40%] sticky top-0 h-screen flex items-center px-8">
//           <div className="max-w-xl">
//             <motion.h2
//               key={content[activeCard]?.title}
//               initial={{ opacity: 0, y: 8 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.45 }}
//               className="text-4xl font-semibold leading-tight mb-6 text-teal-400"
//             >
//               {content[activeCard]?.title}
//             </motion.h2>

//             <motion.div
//               key={content[activeCard]?.title + "-desc"}
//               initial={{ opacity: 0, y: 6 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.45 }}
//             >
//               {renderDescription(
//                 content[activeCard]?.description ?? "",
//                 "text-md xl:text-lg text-slate-300 leading-relaxed mb-6"
//               )}
//               {renderSkills(content[activeCard]?.skills)}
//               {renderLinkPopovers(content[activeCard]?.links)}
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile layout unchanged */}
//       <div className="lg:hidden flex flex-col">
//         {content.map((item, index) => (
//           <div
//             key={item.title + index}
//             className="min-h-dvh flex flex-col items-stretch justify-start"
//           >
//             <div
//               className="h-[60dvh] w-full flex items-center justify-center p-4"
//               style={{ background: backgroundGradient }}
//             >
//               <div className="h-full w-full max-w-3xl overflow-hidden rounded-2xl bg-white">
//                 {item.content ?? null}
//               </div>
//             </div>

//             <div className="flex-1 px-6 py-8">
//               <h3 className="text-3xl font-semibold mb-4">{item.title}</h3>
//               {renderDescription(item.description, "text-slate-300")}
//               {renderSkills(item.skills)}
//               {renderLinkPopovers(item.links)}
//             </div>
//           </div>
//         ))}
//       </div>
//     </motion.section>
//   );
// };

// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import { useMotionValueEvent, useScroll, motion } from "motion/react";
// import { cn } from "@/lib/utils";

// // shadcn UI components (assumes these paths/components are available in your project)
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { Button } from "@/components/ui/button";
// import { ExternalLink, Github } from "lucide-react";

// type Skill = {
//   name: string;
//   // optional icon (use react-icons when constructing your card objects)
//   icon?: React.ReactNode;
// };

// type LinkItem = {
//   label: string; // shown text in popover
//   href: string; // URL
//   // group helps us split into Live / Code popovers. If omitted, goes under 'other'.
//   // accept union literals but also allow plain strings from existing data to avoid TS errors
//   group?: "live" | "code" | "other" | string;
// };

// type Card = {
//   title: string;
//   // Accept React nodes (JSX), plain text strings, or HTML strings (will be rendered via dangerouslySetInnerHTML).
//   description: React.ReactNode | string;
//   content?: React.ReactNode;
//   skills?: Skill[]; // small skill cards
//   links?: LinkItem[]; // optional links to render via Popovers / buttons
// };

// export const StickyScroll = ({
//   content,
//   contentClassName,
// }: {
//   content: Card[];
//   contentClassName?: string;
// }) => {
//   const ref = useRef<HTMLElement | null>(null);
//   const [activeCard, setActiveCard] = useState(0);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });

//   const cardLength = Math.max(content.length, 1);

//   useMotionValueEvent(scrollYProgress, "change", (latest) => {
//     const breakpoints = content.map((_, i) => (i + 0.5) / cardLength);
//     const closestIndex = breakpoints.reduce(
//       (acc, bp, i) =>
//         Math.abs(latest - bp) < Math.abs(latest - breakpoints[acc]) ? i : acc,
//       0
//     );
//     setActiveCard(closestIndex);
//   });
//   // inner "card" backgrounds (the div that currently has bg-white)
//   const contentBackgrounds = [
//     // Project 1 — light mint tone from #68BCA1 & white blend
//     "#E6F3EF",
//     // Project 2 — soft peachy beige blend of #FFC39F & #C49F89
//     "#F7E1D4",
//     // Project 3 — near-charcoal neutral to match dark theme
//     "#121A1E",
//   ];

//   const backgroundColors = ["#042b25", "#5c4038", "#070a0c"];
//   const linearGradients = [
//     // *Project 1 — deep teal → mint with a soft highlight
//     "linear-gradient(135deg, #003228 0%, #68BCA1 65%, rgba(255,255,255,0.12) 100%)",

//     // *Project 2 — warm peach → muted rose → soft taupe
//     "linear-gradient(135deg, #FFC39F 0%, #DFA2AE 45%, #C49F89 85%, rgba(255,255,255,0.06) 100%)",

//     // *Project 3 — restrained dark frame (very subtle sheen for depth)
//     "linear-gradient(135deg, #0B131A 0%, #101B20 90%, rgba(255,255,255,0.02) 100%)",
//   ];

//   const [backgroundGradient, setBackgroundGradient] = useState(
//     linearGradients[0]
//   );
//   useEffect(() => {
//     setBackgroundGradient(
//       linearGradients[activeCard % linearGradients.length] ?? linearGradients[0]
//     );
//   }, [activeCard]);

//   // Helper: if content is an <img />, clone it and override sizing so it doesn't fill full height.
//   const renderClonedImageIfNeeded = (node: React.ReactNode) => {
//     if (
//       React.isValidElement(node) &&
//       typeof (node.type as any) === "string" && // ensures it's a native tag like 'img'
//       (node.type as any) === "img"
//     ) {
//       const imgElement = node as React.ReactElement<
//         React.ImgHTMLAttributes<HTMLImageElement>
//       >;

//       const incomingClass = imgElement.props.className ?? "";
//       const incomingStyle = imgElement.props.style ?? {};

//       return React.cloneElement(imgElement, {
//         className: cn(incomingClass, "w-full h-auto object-contain"),
//         style: {
//           maxHeight: "60vh",
//           width: "100%",
//           objectFit: "contain",
//           ...incomingStyle,
//         },
//       });
//     }

//     // If not an image, just return the node as-is
//     return node;
//   };

//   // Helper to render description which might be JSX, plain text or an HTML string.
//   const renderDescription = (
//     desc: React.ReactNode | string,
//     baseClass = "text-lg text-slate-300"
//   ) => {
//     // If it's a plain string that contains HTML tags, render as HTML (dangerouslySetInnerHTML).
//     if (typeof desc === "string") {
//       const looksLikeHtml = /<[^>]+>/.test(desc);
//       if (looksLikeHtml) {
//         // render HTML string safely inside a wrapper with the provided className
//         return (
//           <div
//             className={baseClass}
//             dangerouslySetInnerHTML={{ __html: desc }}
//           />
//         );
//       }
//       // plain text string
//       return <p className={baseClass}>{desc}</p>;
//     }

//     // It's already JSX / React node — wrap in a p/div so spacing and classes are preserved
//     return <div className={baseClass}>{desc}</div>;
//   };

//   const renderSkills = (skills?: Skill[]) => {
//     if (!skills || skills.length === 0) return null;

//     return (
//       <div className="mt-6 flex flex-wrap gap-3">
//         {skills.map((s) => (
//           <div
//             key={s.name}
//             className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-slate-700 bg-transparent text-sm text-slate-200"
//           >
//             {s.icon ? <span className="w-4 h-4">{s.icon}</span> : null}
//             <span className="select-none">{s.name}</span>
//           </div>
//         ))}
//       </div>
//     );
//   };

//   // Render link popovers/buttons. Splits by group: live, code, other.
//   const renderLinkPopovers = (links?: LinkItem[]) => {
//     if (!links || links.length === 0) return null;

//     const liveLinks = links.filter((l) => l.group === "live");
//     const codeLinks = links.filter((l) => l.group === "code");
//     const otherLinks = links.filter((l) => !l.group || l.group === "other");

//     return (
//       <div className="mt-6 flex gap-4 text-sm items-center">
//         {/* Live Demo Popover */}
//         {liveLinks.length > 0 && (
//           <Popover>
//             <PopoverTrigger asChild>
//               <div className="px-8 py-2 rounded-full relative bg-slate-700 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600 cursor-pointer">
//                 <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
//                 <span className="relative z-20 inline-flex items-center gap-2">
//                   <ExternalLink size={14} />
//                   Live
//                 </span>
//               </div>
//             </PopoverTrigger>
//             <PopoverContent className="bg-[#0e0e0e] border border-[#2f2f2f] text-white w-60 rounded-xl shadow-lg px-4 py-3">
//               <p className="text-sm text-gray-400 mb-2">
//                 Choose an app to open:
//               </p>
//               <div className="flex flex-col space-y-2 text-sm">
//                 {liveLinks.map((l) => (
//                   <a
//                     key={l.href}
//                     href={l.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center justify-between hover:text-green-400 transition-colors"
//                   >
//                     {l.label} <ExternalLink size={14} />
//                   </a>
//                 ))}
//               </div>
//             </PopoverContent>
//           </Popover>
//         )}

//         {/* GitHub / Code Popover */}
//         {codeLinks.length > 0 && (
//           <Popover>
//             <PopoverTrigger asChild>
//               <div className="px-8 py-2 rounded-full relative bg-slate-700 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600 cursor-pointer">
//                 <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
//                 <span className="relative z-20 inline-flex items-center gap-2 ">
//                   <Github size={14} />
//                   GitHub
//                 </span>
//               </div>
//             </PopoverTrigger>
//             <PopoverContent className="bg-[#0e0e0e] border border-[#2f2f2f] text-white w-64 rounded-xl shadow-lg px-4 py-3">
//               <p className="text-sm text-gray-400 mb-2">
//                 Explore the source code:
//               </p>
//               <div className="flex flex-col space-y-2 text-sm">
//                 {codeLinks.map((l) => (
//                   <a
//                     key={l.href}
//                     href={l.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center justify-between hover:text-blue-400 transition-colors"
//                   >
//                     {l.label} <ExternalLink size={14} />
//                   </a>
//                 ))}
//               </div>
//             </PopoverContent>
//           </Popover>
//         )}

//         {/* Any other miscellaneous links rendered as direct small buttons */}
//         {otherLinks.map((l) => (
//           <a
//             key={l.href}
//             href={l.href}
//             target="_blank"
//             rel="noreferrer"
//             className="text-sm"
//           >
//             <Button variant="outline" className="px-3 py-1">
//               {l.label} <ExternalLink className="ml-2" size={14} />
//             </Button>
//           </a>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <motion.section
//       ref={ref}
//       // Make the top-level background transparent so parent's bg (#111111) shows through
//       animate={{
//         backgroundColor: "transparent",
//       }}
//       className="relative w-full text-slate-100"
//     >
//       {/* Desktop: two-column. image is sticky but image itself won't stretch full height. */}
//       <div className="hidden lg:flex lg:flex-row min-h-[100dvh]">
//         {/* LEFT: text column */}
//         <div className="w-full lg:w-[40%] px-8">
//           {content.map((item, index) => (
//             <div
//               key={item.title + index}
//               className="min-h-[100dvh] flex items-center"
//             >
//               <div className="max-w-xl">
//                 <motion.h2
//                   initial={{ opacity: 0, y: 8 }}
//                   animate={{
//                     opacity: activeCard === index ? 1 : 0.35,
//                     y: activeCard === index ? 0 : 8,
//                   }}
//                   transition={{ duration: 0.35 }}
//                   className="text-4xl font-semibold leading-tight mb-6 text-green-400"
//                 >
//                   {item.title}
//                 </motion.h2>

//                 {/* Render description (supports JSX nodes, plain text or HTML strings) */}
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: activeCard === index ? 1 : 0.45 }}
//                   transition={{ duration: 0.35 }}
//                 >
//                   {renderDescription(
//                     item.description,
//                     "text-lg text-slate-300 leading-relaxed mb-6"
//                   )}

//                   {/* new: render skill badges beneath the description */}
//                   {renderSkills(item.skills)}

//                   {/* new: render links (Live Demo / GitHub / others) */}
//                   {renderLinkPopovers(item.links)}
//                 </motion.div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* RIGHT: sticky image column (centered vertically) */}
//         <div className="w-[60%] sticky top-0 h-screen flex items-center justify-center px-8">
//           <div
//             style={{ background: backgroundGradient }}
//             className={cn(
//               // container sizes are width-first so the image has natural aspect
//               "relative w-full max-w-[900px] px-6 py-6 overflow-hidden rounded-2xl shadow-2xl flex items-center justify-center",
//               contentClassName
//             )}
//           >
//             {/* Inner white card to host image; removed padding so gradient won't show as a colored border. */}
//             <div className="w-full flex items-center justify-center">
//               <div className="w-full max-w-[820px]">
//                 <div
//                   className="rounded-xl overflow-hidden flex items-center justify-center"
//                   style={{
//                     backgroundColor:
//                       contentBackgrounds[
//                         activeCard % contentBackgrounds.length
//                       ],
//                   }}
//                 >
//                   {/* clone image if it's an img element so we can force width & max-height */}
//                   {renderClonedImageIfNeeded(
//                     content[activeCard]?.content ?? null
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile / Tablet: stacked layout (image then text) */}
//       <div className="lg:hidden flex flex-col">
//         {content.map((item, index) => (
//           <div
//             key={item.title + index}
//             className="min-h-[100dvh] flex flex-col items-stretch justify-start"
//           >
//             <div
//               className="h-[60dvh] w-full flex items-center justify-center p-4"
//               style={{ background: backgroundGradient }}
//             >
//               <div className="h-full w-full max-w-3xl overflow-hidden rounded-2xl bg-white">
//                 {item.content ?? null}
//               </div>
//             </div>

//             <div className="flex-1 px-6 py-8">
//               <h3 className="text-3xl font-semibold mb-4">{item.title}</h3>

//               {/* Mobile description rendering */}
//               {renderDescription(item.description, "text-slate-300")}

//               {/* Mobile skills rendering */}
//               {renderSkills(item.skills)}

//               {/* Mobile links rendering */}
//               {renderLinkPopovers(item.links)}
//             </div>
//           </div>
//         ))}
//       </div>
//     </motion.section>
//   );
// };

"use client";

import { MovingCards, SectionHeading } from "@/components/atoms";

export function Testimonials() {
  return (
    <div className="rounded-md flex flex-col antialiase items-center justify-center relative overflow-hidden w-full">
      <div className="w-full mb-6 md:mb-10 px-4 md:px-0 text-left md:text-center">
        <h2 className="hidden md:block text-2xl md:text-4xl font-semibold text-teal-300">
          Testimonials
        </h2>
        <SectionHeading
          text="Testimonials"
          showDot={false}
          className="text-2xl font-semibold md:text-center text-teal-300 md:hidden"
        />
        <p className="mt-2 text-sm md:mt-4 md:text-base text-gray-400">
          Trusted by professionals for reliable, high-quality, and consistent
          service
        </p>
      </div>

      <MovingCards items={testimonials} direction="right" speed="slow" />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "MSS has transformed our facility operations. Their security team is disciplined, responsive, and highly professional. We now operate with complete confidence and peace of mind.",
    name: "Amit Verma",
    title: "Vertex Industrial Solutions",
  },
  {
    quote:
      "From housekeeping to pantry services, the quality has been consistently excellent. The staff is well-trained and management is extremely proactive.",
    name: "Neha Kapoor",
    title: "BlueWave Corporate Park",
  },
  {
    quote:
      "Their facility management services helped us streamline maintenance, reduce downtime, and improve overall efficiency across our premises.",
    name: "Rohit Mehra",
    title: "Mehra Logistics Pvt. Ltd.",
  },
  {
    quote:
      "MSS provided reliable manpower and support staff for our commercial complex. Their professionalism and coordination stand out in every interaction.",
    name: "Sonal Deshpande",
    title: "Apex Business Hub",
  },
  {
    quote:
      "We rely on MSS for end-to-end security and general support services. Their team understands operational discipline better than any vendor we’ve worked with.",
    name: "Karan Malhotra",
    title: "Orion Tech Systems",
  },
];

export default Testimonials;

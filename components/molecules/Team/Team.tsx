import { AnimatedCards } from "@/components/atoms";

const Team = () => {
  const cards = [
    {
      quote:
        "A retired Nayeb Subedar from the Indian Army, Mr. Mishra founded MSS Security with a vision to bring military-grade discipline, integrity, and professionalism into the security industry.",
      name: "Retd. Nayeb Subedar, Mr. Pramod Kumar Mishra, Indian Army",
      designation: "Founder & Managing Director",
      src: "https://res.cloudinary.com/dggdpeaw4/image/upload/v1765707804/Gemini_Generated_Image_mrf82umrf82umrf8_boen9b.png",
    },
    {
      quote:
        "From secure infrastructure design to real-time incident response, our focus has always been building resilient systems that protect businesses against evolving cyber threats.",
      name: "Mr. Prashant Mishra",
      designation: "Director – Operations & Business Growth",
      src: "https://res.cloudinary.com/dggdpeaw4/image/upload/v1765706967/WhatsApp_Image_2025-12-14_at_09.25.31_deadcc67_jbbr8s.jpg",
    },
    {
      quote:
        "Our operations team leverages automation, continuous monitoring, and strict governance controls to ensure every client environment remains protected and performant at scale.",
      name: "Mr. Sanjay Mishra",
      designation: "Advisor & Head of Field Operations",
      src: "https://res.cloudinary.com/dggdpeaw4/image/upload/v1765268429/WhatsApp_Image_2025-12-09_at_12.50.48_d1dedf9c_jacw6b.jpg",
    },
  ];

  return (
    <div>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative mt-12 mx-auto max-w-7xl mb-14 flex flex-col gap-6 pt-10">
          {/* Gradient Glow Border */}
          <div
            className="pointer-events-none absolute top-0 left-0 w-full h-px 
    bg-linear-to-r from-transparent via-teal-300 to-transparent 
    shadow-[0_0_12px_rgba(45,212,191,0.6)] opacity-80"
          />
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-300">
              Leadership
            </p>

            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight text-white">
              The team behind your{" "}
              <span className="bg-linear-to-r from-teal-300 to-cyan-400 bg-clip-text text-transparent">
                managed security
              </span>
            </h2>
          </div>

          <p className="max-w-3xl text-sm md:text-[15px] leading-relaxed text-gray-300/90">
            A focused leadership group combining MSS operations, security
            engineering and governance experience to keep your environment
            resilient and always-on.
          </p>
        </div>
      </div>

      <AnimatedCards cards={cards} />
    </div>
  );
};

export default Team;

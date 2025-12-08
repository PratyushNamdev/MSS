import { AnimatedCards } from "@/components/atoms";

const Team = () => {
  const cards = [
    {
      quote:
        "We designed our MSS platform with one core mission — to give organizations complete visibility, continuous threat monitoring, and absolute confidence in their security posture, 24/7.",
      name: "Prashant Mishra",
      designation: "Founder & CEO",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "From secure infrastructure design to real-time incident response, our focus has always been building resilient systems that protect businesses against evolving cyber threats.",
      name: "Prashant Mishra",
      designation: "Co-Founder & CTO",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "Our operations team leverages automation, continuous monitoring, and strict governance controls to ensure every client environment remains protected and performant at scale.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "Scalability, performance, and security must grow together. Our engineering philosophy ensures secure architectures that never compromise speed, reliability, or compliance.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
  ];

  return (
    <div>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative mt-12 mx-auto max-w-6xl mb-14 flex flex-col gap-6 pt-10">
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

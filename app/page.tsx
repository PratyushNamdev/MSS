import { ToggleTheme } from "@/components/atoms";
import Image from "next/image";
export default function Home() {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:h-[93dvh]">
        <div className="w-full md:w-1/2">
          <Image
          src={"https://res.cloudinary.com/dggdpeaw4/image/upload/v1762336972/unnamed_fujqaz.jpg"}
          width={500}
          height={500}
          alt="HeroImage"
          className="h-full w-full "
          />
        </div>
         <div className="w-full md:w-1/2 flex items-center justify-center p-8 lg:p-16 bg-gray-900 text-white">
          <div className="max-w-xl space-y-6 text-center md:text-left">
            <p className="text-lg font-bold uppercase text-teal-400 tracking-widest border-b-2 border-teal-500 pb-2 inline-block">
              Murti Enterprises
            </p>

           
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tighter">
              Integrated
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-teal-400 to-cyan-500">
                Security &
              </span>
              Management Solutions
            </h1>

           
            <p className="text-xl text-gray-300 font-light">
              Your single partner for comprehensive Manpower Solutions (MSS), Corporate Security, VIP Protection, and specialized Facility Services like Deep Cleaning & Waste Management.
            </p>

           
            <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-teal-500 hover:bg-teal-600 text-gray-900 font-extrabold py-4 px-10 rounded-xl shadow-2xl shadow-teal-700/50 transition duration-300 transform hover:scale-[1.02] uppercase tracking-wider">
                Get a Free Consultation
              </button>
              <button className="bg-transparent border-2 border-gray-600 hover:border-cyan-500 text-white font-semibold py-4 px-10 rounded-xl transition duration-300 hover:text-cyan-500">
                View All Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

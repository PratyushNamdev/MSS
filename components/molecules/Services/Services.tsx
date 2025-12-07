import SecurityServices from "./Security";
import Cleaning from "./Cleaning";
import Management from "./Management";
import { ServicesUI } from "./ServicesUI";
import { serviceData } from "@/constants";
import { SectionHeading } from "@/components/atoms";
export default function Services() {
  return (
    <div
      className="w-full bg-[#101828] pb-16 border-[#067B56]/20 px-6 md:px-10"
      id="services"
    >
      <SectionHeading
        text="Our Services"
        className="text-xl sm:text-2xl font-semibold md:text-center text-teal-300 mb-12 sticky lg:hidden top-0 lg:pt-4 lg:pb-6"
        showDot={false}
      />
      <SecurityServices />
      <Cleaning />
      <Management />
      <div className="hidden lg:block">
        <div className="w-full max-w-[1440px] mx-auto">
          {/* <SectionHeading
            text="Our Services"
            showDot={false}
            className="text-3xl font-semibold text-center text-teal-300 my-6 lg:pt-4 lg:pb-6"
          /> */}
          <ServicesUI content={serviceData} />
        </div>
      </div>
    </div>
  );
}

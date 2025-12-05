// import { SectionHeading } from "@Atoms";
import MealBridge from "./MealBridge";
import UrbanCartel from "./UrbanCartel";
import WhatsappWebClone from "./WhatsappWebClone";
import { ServicesUI } from "./ServicesUI";
import { serviceData } from "@/constants";
export default function Services() {
  return (
    <div
      className="w-full bg-[#101828] pb-16 border-[#067B56]/20 px-6 md:px-10"
      id="projects"
    >
      {/* <SectionHeading
        text="Projects"
        className="text-xl sm:text-2xl font-semibold md:text-center text-green-400 mb-12 sticky lg:hidden top-0 lg:pt-4 lg:pb-6"
      /> */}
      <MealBridge />
      <UrbanCartel />
      <WhatsappWebClone />
      <div className="hidden lg:block">
        <div className="w-full max-w-[1440px] mx-auto">
          {/* <SectionHeading
            text="Projects"
            className="text-2xl font-semibold text-center text-green-400 mb-6 lg:pt-4 lg:pb-6"
          /> */}
          <ServicesUI content={serviceData} />
        </div>
      </div>
    </div>
  );
}

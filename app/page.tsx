import { HeroSection } from "./partials";
import { Services, StatsStrip, Testimonials } from "@/components/molecules";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <StatsStrip />
      <Services />
      <Testimonials />
      <div className="h-60"></div>
      <div className="h-60"></div>
    </div>
  );
}

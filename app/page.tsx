import { HeroSection } from "./partials";
import {
  Services,
  StatsStrip,
  Testimonials,
  Team,
} from "@/components/molecules";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <StatsStrip />
      <Services />
      <Testimonials />
      <Team />
      <div className="h-60"></div>
      <div className="h-60"></div>
    </div>
  );
}

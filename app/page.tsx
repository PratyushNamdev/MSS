import { HeroSection } from "./partials";
import { Services, StatsStrip } from "@/components/molecules";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <StatsStrip />
      <Services />
    </div>
  );
}

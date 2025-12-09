import { HeroSection } from "./partials";
import {
  Services,
  StatsStrip,
  Testimonials,
  Team,
  ContactForm,
} from "@/components/molecules";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <StatsStrip />
      <Services />
      <Testimonials />
      <Team />
      <ContactForm />
      <div className="h-60"></div>
    </div>
  );
}

import { Hero } from "./components/Hero";
import { EventOverview } from "./components/EventOverview";
import { PillarsSection } from "./components/PillarsSection";
import { Audience } from "./components/Audience";
import { StakeholderValue } from "./components/StakeholderValue";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <EventOverview />
      <PillarsSection />
      <Audience />
      <StakeholderValue />
      <Footer />
    </div>
  );
}

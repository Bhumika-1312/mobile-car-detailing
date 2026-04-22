import AboutHeroSection from "../sections/about/AboutHeroSection";
import MissionSection from "../sections/about/MissionSection";
import TrustSection from "../sections/about/TrustSection";
import StandardsSection from "../sections/about/StandardsSection";
import StatsSection from "../sections/about/StatsSection";
import ContactSection from "../sections/about/ContactSection"

export default function Page() {
  return (
    <>
      <AboutHeroSection />
      <MissionSection />
      <TrustSection />
      <StandardsSection />
      <StatsSection />
      <ContactSection/>
    </>
  );
}
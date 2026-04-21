import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/Hero";
import CTASection from "./sections/home/CTASection";
import OurProcess from "./sections/home/OurProcess";
import ShowcaseSection from "./sections/home/ShowcaseSection";
import PricingSection from "./sections/home/PricingSection";
import ContactSection from "./sections/home/ContactSection";
import WorkSection from "./sections/home/WorkSection";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <CTASection />
      <OurProcess />
      <ShowcaseSection
        image="/images/wheels.jpg"
        title="Wheels"
        step="03"
        description="Deep wheel decontamination that enhances both appearance and longevity."
      />

      <ShowcaseSection
        image="/images/windows.jpg"
        title="Windows"
        step="04"
        description="Crystal-clear glass treatment for improved visibility and shine."
      />

      <PricingSection />
      <ContactSection />
      <WorkSection />
      <Footer />
    </div>
  );
}

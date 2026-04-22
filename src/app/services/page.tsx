import ServicesSection from "../sections/services/ServicesSection";
import ResultsSection from "@/app/sections/services/ResultsSection";
import WhyChooseUsSection from "@/app/sections/services/WhyChooseUsSection";
import ContactSection from "@/app/sections/services/ContactSection";
export default function Page() {
  return (
    <>
      <ServicesSection />
      <ResultsSection />
      <WhyChooseUsSection />
      <ContactSection/>
    </>
  );
}
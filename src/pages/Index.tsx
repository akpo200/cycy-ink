import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import AboutNancySection from "@/components/AboutNancySection";
import PricingSection from "@/components/PricingSection";
import UrgencySection from "@/components/UrgencySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <AboutNancySection />
      <PricingSection />
      <UrgencySection />
      <Footer />
    </div>
  );
};

export default Index;

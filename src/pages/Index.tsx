import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SpotlightSection from "@/components/SpotlightSection";
import SkillsSection from "@/components/SkillsSection";
import MilestonesSection from "@/components/MilestonesSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <HeroSection />
        <SpotlightSection />
        <SkillsSection />
        <MilestonesSection />
        <PortfolioSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;

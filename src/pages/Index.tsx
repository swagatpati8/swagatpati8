import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SpotlightSection from "@/components/SpotlightSection";
import SkillsSection from "@/components/SkillsSection";
import MilestonesSection from "@/components/MilestonesSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import universityImg from "@/assets/university.jpg";
import developerImg from "@/assets/developer.jpg";
import chessImg from "@/assets/chess.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      
      <SpotlightSection
        title="Student"
        content={
          <div className="space-y-2">
            <p><strong>Rutgers University--New Brunswick</strong></p>
            <p>Major: Computer Science</p>
            <p>Minor: Data Science</p>
            <p>Expected Graduation: May 2026</p>
            <p>Clubs: USACS, RUCP, Rutgers Chess Club, RUBJJ</p>
          </div>
        }
        image={universityImg}
        imageAlt="Rutgers University Campus"
      />
      
      <SpotlightSection
        title="Developer"
        content="I possess a wide knowledge of various tech stacks and am currently expanding my expertise by learning machine learning and automation. I am incredibly versatile, quickly adapting to new technologies and effectively integrating them into my work."
        image={developerImg}
        imageAlt="Developer Workspace"
        reverse
        showButton
        buttonText="View Projects"
        buttonHref="#portfolio"
      />
      
      <SpotlightSection
        title="Analytical Thinker"
        content="I constantly seek opportunities to challenge myself and sharpen my skills. My passion for chess, a game that demands both strategic thinking and adaptability, fuels my ability to solve problems creatively and innovatively."
        image={chessImg}
        imageAlt="Chess Strategy"
      />
      
      <SkillsSection />
      <MilestonesSection />
      <PortfolioSection />
      <ContactSection />
    </div>
  );
};

export default Index;

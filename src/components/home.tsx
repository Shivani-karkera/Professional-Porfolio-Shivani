import React, { useState } from "react";
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import FeaturedProjects from "./FeaturedProjects";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import SkillsSection from "./SkillsSection";
import Footer from "./Footer";
import ContactSection from "./ContactSection";
import ProfessionalSummary from "./ProfessionalSummary";

function Home() {
  const [showProfessionalSummary, setShowProfessionalSummary] = useState(false);

  const handleHireMe = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleKnowMore = () => {
    setShowProfessionalSummary(true);
    setTimeout(() => {
      const element = document.getElementById("professional-summary");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="w-full min-h-screen bg-gray-900">
      <Navigation />
      <div className="pt-20">
        <HeroSection
          onPrimaryClick={handleHireMe}
          onSecondaryClick={handleKnowMore}
        />
        {showProfessionalSummary && (
          <div id="professional-summary">
            <ProfessionalSummary />
          </div>
        )}
        <div id="projects">
          <FeaturedProjects />
        </div>
        <EducationSection />
        <ExperienceSection />
        <div id="skills">
          <SkillsSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;

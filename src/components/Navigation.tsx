import React from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface NavigationProps {
  onSectionClick?: (section: string) => void;
}

const Navigation = ({ onSectionClick = () => {} }: NavigationProps) => {
  const menuItems = [
    "Projects",
    "Education",
    "Experience",
    "Skills",
    "Contact",
  ];

  const handleSectionClick = (section: string) => {
    if (section === "Contact") {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      const element = document.getElementById(section.toLowerCase());
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    onSectionClick(section);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">Build.Solve.Evolve</div>

        {/* Menu Items */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => handleSectionClick(item)}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

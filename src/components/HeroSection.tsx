import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroSectionProps {
  headline?: string;
  subheadline?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

const HeroSection = ({
  headline = "SHIVANI",
  subheadline = "Hi, I'm Shivani — a Software Developer passionate about crafting scalable and meaningful digital experiences.",
  primaryButtonText = "Hire Me",
  secondaryButtonText = "Know More",
  onPrimaryClick = () => {},
  onSecondaryClick = () => {},
}: HeroSectionProps) => {
  return (
    <section className="relative w-full h-[600px] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/src/images/bg1.jpg')] bg-cover bg-center opacity-10"></div>

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-2xl">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {headline}
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {subheadline}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              onClick={onPrimaryClick}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-6 h-auto text-lg"
            >
              {primaryButtonText}
            </Button>

            <Button
              onClick={onSecondaryClick}
              variant="outline"
              className="border-cyan-500 text-cyan-400 hover:bg-cyan-950/30 px-8 py-6 h-auto text-lg"
            >
              {secondaryButtonText}
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Floating project cards */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className="relative w-[500px] h-[400px]">
          {/* Project Card 1 */}
          <motion.div
            className="absolute top-0 right-20 w-64 h-64 bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ boxShadow: "0 0 20px rgba(45, 212, 191, 0.2)" }}
          >
            <img
              src="/src/images/bg2.jpg"
              alt="Technology Background"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Project Card 2 */}
          <motion.div
            className="absolute top-20 right-64 w-64 h-64 bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{ boxShadow: "0 0 20px rgba(45, 212, 191, 0.2)" }}
          >
            <img
              src="/src/images/bg3.jpg"
              alt="Technology Background"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Project Card 3 */}
          <motion.div
            className="absolute top-40 right-0 w-64 h-64 bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            style={{ boxShadow: "0 0 20px rgba(45, 212, 191, 0.2)" }}
          >
            <img
              src="/src/images/bg4.jpg"
              alt="Technology Background"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

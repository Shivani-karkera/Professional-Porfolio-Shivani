import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Zap, Users, Award } from "lucide-react";

interface ProfessionalSummaryProps {
  isVisible?: boolean;
}

const ProfessionalSummary = ({
  isVisible = true,
}: ProfessionalSummaryProps) => {
  if (!isVisible) return null;

  return (
    <section className="w-full py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cyan-400">
              Professional Summary
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Passionate Software Engineer with 3+ years of experience in
              full-stack development, specializing in building scalable web
              applications and optimizing system performance. Proven expertise
              in modern technologies including Java, Spring Boot, ReactJS, and
              cloud platforms.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfessionalSummary;

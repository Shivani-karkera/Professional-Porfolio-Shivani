import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  grade: string;
  icon?: React.ReactNode;
}

const EducationSection = () => {
  const educationData: EducationItem[] = [
    {
      degree: "Bachelor of Engineering – ECE",
      institution: "Mangalore Institute of Technology",
      duration: "2018–2022",
      grade: "CGPA: 8.7",
      icon: <GraduationCap className="h-6 w-6 text-cyan-400" />,
    },
    {
      degree: "PU (Pre-University)",
      institution: "St. Aloysius College",
      duration: "2016–2018",
      grade: "Percentage: 87.67%",
      icon: <Award className="h-6 w-6 text-cyan-400" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section id="education" className="w-full py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>

        <motion.div
          className="max-w-4xl mx-auto space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {educationData.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-gray-800 border-gray-700 hover:shadow-[0_0_15px_rgba(56,182,255,0.3)] transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-white">
                    {item.icon}
                    <div>
                      <h3 className="text-xl font-semibold">{item.degree}</h3>
                      <p className="text-cyan-400 text-lg font-medium">
                        {item.institution}
                      </p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">{item.duration}</span>
                    <span className="text-cyan-300 font-semibold">
                      {item.grade}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, Calendar, ChevronDown, ChevronUp } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  type: "full-time" | "internship";
  achievements: string[];
  technologies?: string[];
}

const ExperienceSection = () => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleExpanded = (index: number) => {
    setExpandedItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };
  const experienceData: ExperienceItem[] = [
    {
      title: "Software Engineer",
      company: "TietoEVRY Fintech India Pvt Ltd",
      duration: "04/2024–Present",
      type: "full-time",
      achievements: [
        "By adeptly coordinating cross-functional teams and conducting meticulous root cause analysis, swiftly resolved a critical asynchronization issues between frontend and backend integration, saving 20hrs of potential application downtime.",
        "Effectively resolved and managed complex production incidents within the banking application used in Sweden, by promptly addressing the urgent requirements impacting a user base of 3000+ bank officers within a tight timeframe of 3-4 hours.",
        "Demonstrated exceptional leadership skills by guiding and mentoring 3 new team members, facilitating smooth transition into the workplace environment.",
        "Coordinated on CI/CD pipeline migration from Bitbucket to Azure DevOps, enabling faster and more reliable deployments.",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "REST APIs",
        "Microservices",
        "Azure DevOps",
        "CI/CD",
        "Banking",
        "Security",
      ],
    },
    {
      title: "Junior Software Engineer",
      company: "TietoEVRY Fintech India Pvt Ltd",
      duration: "08/2022–03/2024",
      type: "full-time",
      achievements: [
        "Contributed significantly to all phases of SDLC, including business requirements gathering, analysis, design, development, maintenance of code within an Agile environment.",
        "Developed and deployed scalable RESTful services. Implemented caching mechanisms and multithreading to reducing response time by 60%.",
        "Enhanced application security to modern banking standards, protecting sensitive data including accounts, loan processing, payments, and insurance procedures, thereby strengthening system resilience and enhancing customer trust.",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "REST APIs",
        "Microservices",
        "Azure DevOps",
        "CI/CD",
        "Banking",
        "Security",
      ],
    },
    {
      title: "Intern",
      company: "Microsoft – Future Ready Talent Virtual Internship",
      duration: "March 2022",
      type: "internship",
      achievements: [
        "Developed an E-commerce website utilizing front-end technologies such as HTML, CSS, and JavaScript.",
        "Employed Microsoft Azure for seamless deployment and hosting of the website, ensuring optimal performance and scalability.",
        "Azure Services used: QnA Maker, Azure Static Apps, Azure Bot Service, App Service, Microsoft Azure portal.",
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Azure",
        "QnA Maker",
        "Azure Bot Service",
      ],
    },
    {
      title: "Intern",
      company: "MESCOM",
      duration: "April 2022",
      type: "internship",
      achievements: [
        "Gained comprehensive exposure to SCADA systems extensively employed for monitoring power supply across multiple cities.",
        "Actively participated in field visits to substations throughout the Mangalore region, acquiring hands-on training on the equipment deployed for effective electricity supply monitoring.",
      ],
      technologies: ["SCADA", "Power Systems", "Monitoring"],
    },
    {
      title: "Computer Vision and IoT Intern",
      company: "The Sparks Foundation",
      duration: "August 2021",
      type: "internship",
      achievements: [
        "Developed an object detector using Python. This detector effectively identifies and classifies objects within images, enhancing object recognition capabilities and enabling better visual understanding.",
      ],
      technologies: ["Python", "Computer Vision", "Machine Learning", "IoT"],
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section id="experience" className="w-full py-16 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>

        <motion.div
          className="max-w-6xl mx-auto space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {experienceData.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-gray-900 border-gray-700 hover:shadow-[0_0_15px_rgba(56,182,255,0.3)] transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Briefcase className="h-6 w-6 text-cyan-400 mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          {item.title}
                        </h3>
                        <p className="text-cyan-400 text-lg font-medium">
                          {item.company}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-gray-300">
                        <Calendar className="h-4 w-4" />
                        <span>{item.duration}</span>
                      </div>
                      <Badge
                        variant={
                          item.type === "full-time" ? "default" : "secondary"
                        }
                        className="mt-2"
                      >
                        {item.type === "full-time" ? "Full-time" : "Internship"}
                      </Badge>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button
                      variant="ghost"
                      onClick={() => toggleExpanded(index)}
                      className="w-full justify-between text-cyan-400 hover:text-cyan-300 hover:bg-cyan-900/20 p-2"
                    >
                      <span>Know More</span>
                      {expandedItems.includes(index) ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </Button>

                    {expandedItems.includes(index) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ul className="space-y-2 mt-4">
                          {item.achievements.map((achievement, achIndex) => (
                            <li
                              key={achIndex}
                              className="flex items-start gap-2"
                            >
                              <span className="text-cyan-400 mt-1">•</span>
                              <span className="text-gray-300">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}

                    {item.technologies && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {item.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="border-cyan-500/30 bg-cyan-900/20 text-cyan-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    )}
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

export default ExperienceSection;

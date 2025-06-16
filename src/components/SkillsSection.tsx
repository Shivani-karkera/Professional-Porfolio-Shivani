import React from "react";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface SkillCategory {
  name: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  level?: number;
  description?: string;
  icon?: string;
}

const SkillsSection = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: "Languages",
      skills: [
        {
          name: "Java",
          level: 4,
          description: "Primary language for backend development",
          icon: "java",
        },
        {
          name: "C",
          level: 4,
          description: "Used for system programming",
          icon: "c",
        },
        {
          name: "TypeScript",
          level: 2.5,
          description: "Typed superset of JavaScript",
          icon: "typescript",
        },
        {
          name: "JavaScript",
          level: 2.5,
          description: "Programming language for web development",
          icon: "javascript",
        },
        {
          name: "HTML",
          level: 2.5,
          description: "Markup language for web pages",
          icon: "html",
        },
        {
          name: "CSS",
          level: 2.5,
          description: "Styling language for web pages",
          icon: "css",
        },
        {
          name: "Python",
          level: 3,
          description: "Used for data analysis and automation",
          icon: "python",
        },
        {
          name: "SQL",
          level: 3,
          description: "Database query language",
          icon: "sql",
        },
      ],
    },
    {
      name: "Frameworks",
      skills: [
        {
          name: "Spring Boot",
          level: 4,
          description: "Java-based framework for building web applications",
          icon: "springboot",
        },
        {
          name: "ReactJS",
          level: 3,
          description: "JavaScript library for building user interfaces",
          icon: "react",
        },
        {
          name: "Node.js",
          level: 2.5,
          description: "JavaScript runtime for server-side development",
          icon: "nodejs",
        },
        {
          name: "JSP",
          level: 4,
          description: "JavaServer Pages for dynamic web content",
          icon: "jsp",
        },
      ],
    },
    {
      name: "DevOps/Tools",
      skills: [
        {
          name: "Azure",
          level: 3,
          description: "Cloud computing service",
          icon: "azure",
        },
        {
          name: "Docker",
          level: 3,
          description:
            "Platform for developing, shipping, and running applications",
          icon: "docker",
        },
        {
          name: "Jenkins",
          level: 3,
          description: "Open-source automation server",
          icon: "jenkins",
        },
        {
          name: "Bitbucket",
          level: 3,
          description: "Git-based source code repository hosting service",
          icon: "bitbucket",
        },
        {
          name: "Git",
          level: 3,
          description: "Distributed version control system",
          icon: "git",
        },
        {
          name: "JIRA",
          level: 3,
          description: "Issue tracking product",
          icon: "jira",
        },
        {
          name: "CI/CD",
          level: 3,
          description: "Continuous Integration and Continuous Deployment",
          icon: "cicd",
        },
      ],
    },
    {
      name: "Database & Servers",
      skills: [
        {
          name: "Oracle Database",
          level: 3,
          description: "Enterprise database management system",
          icon: "oracle",
        },
        {
          name: "JBoss Server",
          level: 3,
          description: "Java application server",
          icon: "jboss",
        },
        {
          name: "Hibernate",
          level: 3,
          description: "Object-relational mapping tool for Java",
          icon: "hibernate",
        },
        {
          name: "JDBC",
          level: 3,
          description: "Java Database Connectivity API",
          icon: "jdbc",
        },
      ],
    },
    {
      name: "APIs & Architecture",
      skills: [
        {
          name: "REST APIs",
          level: 3,
          description: "Representational State Transfer APIs",
          icon: "rest",
        },
        {
          name: "Microservices",
          level: 3,
          description: "Architectural approach for building applications",
          icon: "microservices",
        },
      ],
    },
    {
      name: "IoT & Hardware",
      skills: [
        {
          name: "IoT",
          level: 3,
          description: "Internet of Things development",
          icon: "iot",
        },
        {
          name: "Arduino",
          level: 3,
          description: "Microcontroller platform for IoT projects",
          icon: "arduino",
        },
        {
          name: "Raspberry Pi",
          level: 3,
          description: "Single-board computer for IoT applications",
          icon: "raspberrypi",
        },
        {
          name: "GSM Module",
          level: 3,
          description: "Global System for Mobile communications module",
          icon: "gsm",
        },
      ],
    },
    {
      name: "Other Tools",
      skills: [
        {
          name: "JUnit",
          level: 3,
          description: "Unit testing framework for Java",
          icon: "junit",
        },
        {
          name: "Splunk",
          level: 3,
          description:
            "Software for searching, monitoring, and analyzing machine-generated data",
          icon: "splunk",
        },
        {
          name: "Confluence",
          level: 3,
          description: "Team collaboration software",
          icon: "confluence",
        },
        {
          name: "Maven",
          level: 3,
          description: "Build automation tool for Java projects",
          icon: "maven",
        },
      ],
    },
  ];

  const renderStars = (level: number) => {
    const fullStars = Math.floor(level);
    const hasHalfStar = level % 1 !== 0;
    const emptyStars = 5 - Math.ceil(level);

    return (
      <div className="flex items-center gap-1">
        {[...Array(fullStars)].map((_, i) => (
          <span key={i} className="text-yellow-400">
            ★
          </span>
        ))}
        {hasHalfStar && <span className="text-yellow-400">☆</span>}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={i} className="text-gray-500">
            ☆
          </span>
        ))}
      </div>
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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
    <section id="skills" className="w-full py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-gray-800 border-gray-700 overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-cyan-400">
                    {category.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <TooltipProvider key={skillIndex}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div>
                              <Badge
                                className="px-3 py-1 text-l font-bold mb-4 text-cyan-500 hover:bg-cyan-900 transition-all duration-300 cursor-pointer flex items-center gap-2"
                                variant="outline"
                              >
                                <img
                                  src={`/images/icons/${skill.icon}.png`}
                                  alt={skill.name}
                                  className="w-4 h-4"
                                  onError={(e) => {
                                    e.currentTarget.style.display = "none";
                                  }}
                                />
                                {skill.name}
                              </Badge>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent className="bg-gray-800 border-cyan-500 text-white p-3 max-w-xs">
                            <p className="font-semibold">{skill.name}</p>
                            {skill.level &&
                              (category.name === "Languages" ||
                                category.name === "Frameworks") && (
                                <div className="mt-2">
                                  <p className="text-xs text-cyan-400 mb-1">
                                    Level:
                                  </p>
                                  {renderStars(skill.level)}
                                </div>
                              )}
                            <p className="text-xs mt-1">{skill.description}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ))}
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

export default SkillsSection;

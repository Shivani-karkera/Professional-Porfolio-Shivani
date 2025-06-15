import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

interface Project {
  id: string;
  title: string;
  techStack: string;
  image: string;
  owner: string;
  githubUrl?: string;
  caseStudyUrl?: string;
}

interface FeaturedProjectsProps {
  projects?: Project[];
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  projects = defaultProjects,
}) => {
  return (
    <section className="w-full py-16 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ProjectCard
                title={project.title}
                techStack={project.techStack}
                image={project.image}
                githubUrl={project.githubUrl}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const defaultProjects: Project[] = [
  {
    id: "1",
    title: "Digital Fault Detection System",
    techStack: "Arduino, GSM, MERN",
    image: "/src/images/FaultDetection.png",
    githubUrl:
      "https://github.com/Shivani-karkera/Digital-Mapping-of-Faulty-Transmission-Lines",
  },
  {
    id: "2",
    title: "Smart Safety Locket",
    techStack: "Raspberry Pi, Emergency Alert System",
    image: "/src/images/SmartSafetyLocket.png",
    githubUrl: "https://github.com/Shivani-karkera/Smart-Safety-Locket",
  },
  {
    id: "3",
    title: "Echo Clone",
    techStack: "Alexa Voice, IoT with Raspberry Pi",
    image: "/src/images/EchoClone.png",
    githubUrl: "https://github.com/Shivani-karkera/Echo-Clone",
  },
  {
    id: "4",
    title: "E-commerce Website",
    techStack: "HTML, CSS, JavaScript, Azure",
    image: "/src/images/Ecommerce.png",
    githubUrl: "https://github.com/Shivani-karkera/FRT-Project",
  },
  {
    id: "5",
    title: "Object Detection using Python",
    techStack: "Python, OpenCV, Machine Learning",
    image: "/src/images/ObjectDetector.png",
    githubUrl: "https://github.com/Shivani-karkera/GRIP_AUG-21",
  },
];

export default FeaturedProjects;

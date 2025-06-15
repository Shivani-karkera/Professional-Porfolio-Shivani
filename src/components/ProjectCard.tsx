import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ProjectCardProps {
  title?: string;
  image?: string;
  techStack?: string | string[];
  owner?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
}

const ProjectCard = ({
  title = "Project Title",
  image = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
  techStack = ["React", "TypeScript", "Tailwind"],
  owner = "shivani",
  githubUrl = "#",
  caseStudyUrl = "#",
}: ProjectCardProps) => {
  return (
    <Card
      className="w-full max-w-[380px] overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_15px_rgba(56,182,255,0.3)] hover:transform hover:-translate-y-1 cursor-pointer"
      onClick={() => window.open(githubUrl, "_blank")}
    >
      <div className="relative h-[220px] w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <CardContent className="p-5">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <Avatar className="h-8 w-8 border border-cyan-500/30">
            <AvatarFallback className="bg-cyan-900/30 text-cyan-300">
              {owner.substring(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </div>

        <div className="mb-3 flex flex-wrap gap-2">
          {(Array.isArray(techStack) ? techStack : [techStack]).map(
            (tech, index) => (
              <Badge
                key={index}
                variant="outline"
                className="border-cyan-500/30 bg-cyan-900/20 text-cyan-300"
              >
                {tech}
              </Badge>
            ),
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;

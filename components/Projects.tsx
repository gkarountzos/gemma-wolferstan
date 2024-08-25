import { projects } from "@/lib/projects";
import React from "react";
import ProjectCard from "./ProjectCard";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="max-w-4xl mx-auto">
      <h2 className="text-4xl text-[#FEF8EE] mb-8">Projects</h2>
      <div className="space-y-16">
        <div className="relative px-8 py-6 bg-black/20 backdrop-blur-sm rounded-lg overflow-hidden">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

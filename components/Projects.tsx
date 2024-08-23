import { projects } from "@/lib/projects";
import React from "react";
import ProjectCard from "./ProjectCard";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-[#FEF8EE] mb-8">Projects</h2>
      <div className="space-y-16">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

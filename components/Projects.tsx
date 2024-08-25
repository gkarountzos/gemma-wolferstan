"use client";
import { projects } from "@/lib/projects";
import React from "react";
import ProjectCard from "./ProjectCard";
import { useEffect, useState } from "react";
import { FaFolderOpen } from "react-icons/fa";

const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="projects" className="max-w-4xl mx-auto">
      <h2 className={`text-4xl text-[#FEF8EE] mb-8`}>
        <FaFolderOpen className="inline-block text-[#FEF8EE]" size={24} />
        Projects
      </h2>

      <div className={`space-y-16`}>
        <div className="relative px-8 py-6 bg-black/20 backdrop-blur-sm rounded-lg overflow-hidden">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`transform transition-transform duration-1000 ease-out ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-[200%] opacity-0"
              }`}
              style={{
                transitionDelay: `${1200 + index * 100}ms`,
              }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

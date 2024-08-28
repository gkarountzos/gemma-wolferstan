"use client";
import { projects } from "@/lib/content/projects";
import React from "react";
import ProjectCard from "./ProjectCard";
import { useEffect, useState } from "react";
import { FaFolderOpen } from "react-icons/fa";

const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="projects"
      className="scroll-mt-28 sm:scroll-mt-24 xxl:scroll-mt-32 xxxl:scroll-mt-52 w-full mx-auto"
    >
      <div className="flex gap-4 items-center pb-8">
        <FaFolderOpen className="inline-block text-[#FEF8EE]" size={24} />
        <h2 className={`xs:text-2xl sm:text-4xl text-[#FEF8EE]`}>Projects</h2>
      </div>

      <div className="space-y-16">
        <div className="w-full p-2 sm:p-8 bg-black/20 backdrop-blur-sm rounded-lg overflow-hidden">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`transform transition-transform duration-1000 ease-out ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-[200%] opacity-0"
              }`}
              style={{
                transitionDelay: `${100 + index * 200}ms`,
              }}
            >
              <div className="py-2">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

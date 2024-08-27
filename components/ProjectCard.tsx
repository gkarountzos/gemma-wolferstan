import { Project } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div
        key={project.title}
        className="flex flex-col md:flex-row md:space-x-8 items-center p-4 rounded-xl transition-transform transform md:hover:scale-[102%]"
      >
        <div className="flex-shrink-0">
          <Image
            src={project.image}
            alt={project.title}
            width={256}
            height={160}
            className="rounded-lg object-cover w-full md:w-64 h-40 transition-transform duration-300 ease-in-out"
          />
        </div>
        <div className="text-center md:text-left md:flex-grow">
          <h3 className="text-lg font-semibold text-[#FEF8EE] mb-2">
            {project.title}
          </h3>
          <p className="text-sm text-[#FEF8EE] mb-4">{project.description}</p>
          <div className="inline-flex items-center font-medium text-[#e0dcd6] hover:text-[#D1A1D8] group/link text-base">
            View Project
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;

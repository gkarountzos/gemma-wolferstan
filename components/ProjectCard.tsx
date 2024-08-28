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
        className="flex flex-col xl:flex-row lg:flex-col tablet:flex-row tablet:space-x-8 items-center p-4 rounded-xl transition-transform transform md:hover:scale-[102%]"
      >
        <div className="flex-shrink-0">
          <h3 className="block tablet:hidden lg:block xl:hidden text-center text-lg font-semibold text-[#FEF8EE] py-2 ">
            {project.title}
          </h3>
          <Image
            src={project.image}
            alt={project.title}
            width={256}
            height={160}
            className="rounded-lg object-cover w-full md:w-64 h-40 transition-transform duration-300 ease-in-out"
          />
        </div>
        <div>
          <h3 className="hidden tablet:block lg:hidden xl:block text-lg font-semibold text-[#FEF8EE] py-2 ">
            {project.title}
          </h3>
          <p className="text-sm text-[#FEF8EE] py-4">{project.description}</p>
        </div>
        <button
          type="button"
          className="tablet:hidden w-fit mx-auto px-4 py-2 rounded-full  bg-gradient-to-tl from-[#743ca8] to-[#4351ce] text-white transition duration-200"
        >
          View Project
        </button>
      </div>
    </Link>
  );
};

export default ProjectCard;

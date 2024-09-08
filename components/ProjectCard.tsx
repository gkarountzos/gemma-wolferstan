import { Project } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className=" rounded-xl hover:bg-black/15 transition-all transform md:hover:scale-[102%]">
      <Link href={`/projects/${project.slug}`}>
        <div className="flex flex-col xl:flex-row lg:flex-col tablet:flex-row tablet:space-x-8 xl:space-x-8 lg:space-x-0 items-center sm:p-4">
          <div className="flex-shrink-0">
            <h3 className="text-center text-lg font-semibold text-[#FEF8EE] py-2  xl:hidden lg:block tablet:hidden block">
              {project.title}
            </h3>
            <Image
              src={project.image}
              alt={project.title}
              width={256}
              height={160}
              className="rounded-lg object-cover md:w-64 h-40"
              priority
            />
          </div>
          <div className="w-full">
            <h3 className="text-lg font-semibold text-[#FEF8EE] py-2 hidden tablet:block lg:hidden xl:block">
              {project.title}
            </h3>
            <p className="text-sm text-[#FEF8EE] py-4">{project.description}</p>
          </div>
          <button
            type="button"
            className="tablet:hidden w-fit mx-auto px-4 py-2 rounded-full bg-gradient-to-tl from-[#743ca8] to-[#4351ce] text-white transition duration-200"
          >
            View Project
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;

import { Project } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className=" rounded-xl md:hover:bg-black/15 transition-all transform md:hover:scale-[102%]">
      <Link href={`/projects/${project.slug}`}>
        <div className="flex flex-col xl:flex-row lg:flex-col tablet:flex-row tablet:space-x-8 xl:space-x-8 lg:space-x-0 items-center sm:px-4 sm:py-2">
          <div className="flex-shrink-0 flex flex-col items-center sm:py-4">
            <h3 className="text-center text-lg font-semibold text-[#FEF8EE] py-2  xl:hidden lg:block tablet:hidden block md:text-left">
              {project.title}
            </h3>
            <Image
              src={project.image}
              alt={project.title}
              width={256}
              height={160}
              className="rounded-lg object-cover md:w-64 h-40"
              quality={100}
              priority
            />
          </div>
          <div className="w-full">
            <h3 className="text-lg font-semibold text-[#FEF8EE] py-2 hidden tablet:block lg:hidden xl:block text-center md:text-left">
              {project.title}
            </h3>
            <p className="text-sm text-[#FEF8EE] py-2">{project.description}</p>
          </div>
          <div className="flex justify-center items-center w-fit mx-auto px-4 py-2 rounded-full bg-[#4e2780] text-white transition duration-200 shadow-md md:hover:shadow-[0_0_15px_#ffffff] tablet:hidden">
            View Project
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;

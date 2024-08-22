import { Project } from "@/types/types";
import Image from "next/image";
import React from "react";

const projects: Project[] = [
  {
    title: "Ascension Dude",
    description:
      "A 2D, time survival game made in a team of three over eight weeks. The player takes control of the ‘dude,’ picking various abilities as they level up which help them fight off hordes of monsters. This project showcases the breadth of my design and technical knowledge, and ability to work in a team.",
    link: "https://gemma-wolferstan.itch.io/ascension-dude",
    image: "/project-images/AD.png",
  },
  {
    title: "Roly-Holey",
    description:
      "A minimalist prototype made alone during a short game jam. Simple mechanics result in a surprisingly deep gameplay experience where careful navigation of the maze design, critical thinking, and precision with the controls are paramount to success.",
    link: "https://gemma-wolferstan.itch.io/roly-holey",
    image: "/project-images/RH.png",
  },
  // add more projects if needed
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-[#FEF8EE] mb-8">Projects</h2>
      <div className="space-y-16">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col md:flex-row md:space-x-8 items-center p-4 rounded-xl transition-transform transform hover:scale-105"
          >
            <div className="flex-shrink-0">
              <Image
                src={project.image}
                alt={project.title}
                width={256}
                height={160}
                className="rounded-lg object-cover w-full md:w-64 h-40 transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>
            <div className="text-center md:text-left md:flex-grow">
              <h3 className="text-lg font-semibold text-[#FEF8EE] mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-[#FEF8EE] mb-4">
                {project.description}
              </p>
              <a
                href={project.link}
                className="inline-flex items-center font-medium text-[#e0dcd6] hover:text-[#D1A1D8] focus-visible:text-teal-300 group/link text-base"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

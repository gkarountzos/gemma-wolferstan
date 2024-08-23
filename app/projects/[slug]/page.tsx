import { projects } from "@/lib/projects";
import { ProjectProps } from "@/types/types";
import { notFound } from "next/navigation";
import Image from "next/image";

const ProjectPage = ({ params }: ProjectProps) => {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return notFound();
  }

  return (
    <section className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-[#FEF8EE] mb-8">
        {project.title}
      </h1>
      <Image
        src={project.image}
        alt={project.title}
        width={512}
        height={320}
        className="rounded-lg object-cover w-full md:w-64 h-40"
      />
      <div
        className="text-lg text-[#FEF8EE] mt-4"
        dangerouslySetInnerHTML={{ __html: project.content || "" }}
      />
      <a
        href={project.link}
        className="inline-flex items-center font-medium text-[#e0dcd6] hover:text-[#D1A1D8] focus-visible:text-teal-300 text-base mt-4"
        target="_blank"
        rel="noopener noreferrer"
      >
        Play the Game
      </a>
    </section>
  );
};

export default ProjectPage;

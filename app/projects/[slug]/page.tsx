import { projects } from "@/lib/projects";
import { ProjectProps } from "@/types/types";
import { notFound } from "next/navigation";
import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import ScreenshotSlider from "@/components/ScreenshotSlider";

const ProjectPage = ({ params }: ProjectProps) => {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return notFound();
  }

  return (
    <>
      <div className="flex justify-center gap-4">
        <div className="w-1/2">
          <Sidebar />
        </div>
        <div className="w-1/2 py-24">
          <section className="max-w-4xl mx-auto flex flex-col ">
            <h2 className="text-4xl font-medium text-[#FEF8EE] mb-8 ">
              {project.title}
            </h2>
            <Image
              src={project.image}
              alt={project.title}
              width={512}
              height={320}
              className="rounded-lg object-cover w-full md:w-64 h-40"
            />
            <div className="text-lg text-[#FEF8EE] mt-4">
              {project.content.map((paragraph, index) => (
                <p key={index} className={`${index > 0 ? "pt-2" : ""}`}>
                  {paragraph}
                </p>
              ))}
            </div>
            {project.screenshots.length > 0 && (
              <div className="mt-8">
                <h2 className="text-2xl text-center font-medium text-[#FEF8EE] mb-4">
                  Screenshots
                </h2>
                <ScreenshotSlider images={project.screenshots} />
              </div>
            )}
            <a
              href={project.link}
              className=" flex justify-center font-semibold text-[#FEF8EE] hover:text-[#D1A1D8] focus-visible:text-teal-300 text-base mt-8"
              target="_blank"
              rel="noopener noreferrer"
            >
              Play the Game
            </a>
          </section>
        </div>
      </div>
    </>
  );
};

export default ProjectPage;

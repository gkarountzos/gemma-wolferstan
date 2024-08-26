"use client";
import { projects } from "@/lib/projects";
import { ProjectProps } from "@/types/types";
import { notFound } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import ScreenshotSlider from "@/components/ScreenshotSlider";
import Video from "@/components/Video";
import { useEffect, useState } from "react";

const ProjectPage = ({ params }: ProjectProps) => {
  const project = projects.find((p) => p.slug === params.slug);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay visibility change by 1200ms
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  if (!project) {
    return notFound();
  }

  return (
    <div
      className={`transform transition-transform duration-1000 ease-out ${
        isVisible
          ? "translate-x-0 opacity-100"
          : "translate-x-[100px] opacity-0"
      }`}
    >
      <div className="flex justify-center gap-4">
        <div className="py-24">
          <section className="max-w-4xl mx-auto flex flex-col">
            <h2 className="text-4xl font-medium text-[#FEF8EE] mb-8">
              {project.title}
            </h2>
            {project.video && (
              <div className="pb-8">
                <Video src={project.video} title={project.title} />
              </div>
            )}
            <div className="relative px-8 py-4 bg-black/20 backdrop-blur-sm rounded-lg overflow-hidden">
              <div className="text-lg text-[#FEF8EE]">
                {project.content.map((paragraph, index) => (
                  <p key={index} className={`${index > 0 ? "pt-2" : ""}`}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            {project.screenshots.length > 0 && (
              <div className="mt-8">
                <h2 className="text-2xl text-center font-medium text-[#FEF8EE] mb-4">
                  Screenshots
                </h2>
                <ScreenshotSlider images={project.screenshots} />
              </div>
            )}
            {project.link && (
              <a
                href={project.link}
                className="w-fit h-fit mx-auto font-semibold text-[#FEF8EE] hover:text-[#D1A1D8] focus-visible:text-teal-300 text-base mt-8"
                target="_blank"
                rel="noopener noreferrer"
              >
                Play the Game
              </a>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;

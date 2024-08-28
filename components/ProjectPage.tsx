"use client";

import { useEffect, useState } from "react";
import ScreenshotSlider from "@/components/ScreenshotSlider";
import Video from "@/components/Video";
import Footer from "@/components/Footer";
import { Project } from "@/types/types";

const ProjectPage = ({ project }: { project: Project }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div
        className={`transform transition-transform duration-1000 ease-out ${
          isVisible
            ? "translate-x-0 opacity-100"
            : "translate-x-[100px] opacity-0"
        }`}
      >
        <div className="pb-24">
          <div className="flex justify-center gap-4">
            <section className="mx-auto flex flex-col">
              <h2 className="text-4xl font-medium text-[#FEF8EE] mb-8">
                {project.title}
              </h2>
              {project.video && (
                <div className="pb-8 w-full max-w-3xl mx-auto">
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
                <div className="py-4">
                  <h2 className="text-2xl text-center font-medium text-[#FEF8EE] mb-4">
                    Screenshots
                  </h2>
                  <ScreenshotSlider images={project.screenshots} />
                </div>
              )}
              {project.link && (
                <a
                  href={project.link}
                  className="mx-auto px-4 py-2 rounded-full bg-gradient-to-tl from-[#743ca8] to-[#4351ce] text-white transition duration-200"
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
      <Footer className="text-center lg:text-left" />
    </>
  );
};

export default ProjectPage;

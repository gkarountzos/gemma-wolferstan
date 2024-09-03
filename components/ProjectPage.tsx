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
          <section className="flex flex-col items-center gap-8">
            <h2 className="text-left text-3xl sm:text-4xl font-medium text-[#FEF8EE]">
              {project.title}
            </h2>
            {project.video && (
              <div className="pb-8 w-full max-w-3xl">
                <Video src={project.video} title={project.title} />
              </div>
            )}
            <div className="relative px-8 pt-2 pb-8 bg-black/20 backdrop-blur-sm rounded-lg overflow-hidden w-full max-w-3xl">
              <div className="text-lg text-[#FEF8EE]">
                {project.content.map((section, index) => (
                  <div key={index} className="pt-6">
                    <h3 className="text-2xl font-semibold text-[#FEF8EE]">
                      {section.title}
                    </h3>
                    {section.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="pt-2 text-md">
                        {detail}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            {project.screenshots && (
              <div className="py-4 w-full">
                <h2 className="text-2xl text-center font-medium text-[#FEF8EE] mb-4">
                  Screenshots
                </h2>
                <ScreenshotSlider images={project.screenshots} />
              </div>
            )}
            {project.link && (
              <a
                href={project.link}
                className="mx-auto px-4 grid place-items-center py-2 h-12 rounded-full bg-gradient-to-tl from-[#743ca8] to-[#4351ce] hover:border hover:shadow-lg hover:border-bg-white text-white transition-all duration-100 ease-out"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Play the game: ${project.title}`}
              >
                Play the Game
              </a>
            )}
          </section>
        </div>
      </div>
      <Footer className="text-center lg:text-left" />
    </>
  );
};

export default ProjectPage;

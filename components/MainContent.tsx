"use client";

import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Projects from "./Projects";
import { TracingBeam } from "./ui/tracing-beam";
import AboutSection from "./AboutSection";
import { aboutData, experienceData } from "@/lib/content/sections";
import ExperienceSection from "./ExperienceSection";

const MainContent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transform transition-transform duration-1000 ease-out ${
        isVisible
          ? "translate-x-0 opacity-100"
          : "translate-x-[100px] opacity-0"
      }`}
    >
      <TracingBeam>
        <section className="space-y-16 sm:space-y-24 xxxl:space-y-40">
          {aboutData.map((section) => (
            <React.Fragment key={section.id}>
              <AboutSection
                id={section.id}
                icon={section.icon}
                title={section.title}
                content={section.content}
                className="relative mx-auto scroll-mt-28 sm:scroll-mt-24 xxl:scroll-mt-32 xxxl:scroll-mt-52 "
              />
            </React.Fragment>
          ))}
          {experienceData.map((section) => (
            <ExperienceSection
              key={section.id}
              id={section.id}
              icon={section.icon}
              title={section.title}
              content={section.content}
              className="relative mx-auto scroll-mt-28 sm:scroll-mt-24 xxl:scroll-mt-32 xxxl:scroll-mt-52"
            />
          ))}
          <Projects />
          <Footer />
        </section>
      </TracingBeam>
    </div>
  );
};

export default MainContent;

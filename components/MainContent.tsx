"use client";
import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Projects from "./Projects";
import { TracingBeam } from "./ui/tracing-beam";
import Section from "./Sections";
import { sectionsData } from "@/lib/sections";

const MainContent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay visibility change by 1200ms
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const slimLine = " h-px w-3/6 bg-[#FEF8EE]";

  return (
    <div
      className={`transform transition-transform duration-1000 ease-out ${
        isVisible
          ? "translate-x-0 opacity-100"
          : "translate-x-[100px] opacity-0"
      }`}
    >
      <TracingBeam className="flex gap-4">
        <div className="space-y-28">
          {sectionsData.map((section) => (
            <React.Fragment key={section.id}>
              <Section
                id={section.id}
                icon={section.icon}
                title={section.title}
                content={section.content}
              />
              <div className={slimLine}></div>
            </React.Fragment>
          ))}
          <Projects />
          <Footer />
        </div>
      </TracingBeam>
    </div>
  );
};

export default MainContent;

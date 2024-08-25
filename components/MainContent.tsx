"use client";
import React from "react";
import Footer from "./Footer";
import Projects from "./Projects";
import { TracingBeam } from "./ui/tracing-beam";
import Section from "./Sections";
import { sectionsData } from "@/lib/sections";
import { useEffect, useState } from "react";

const MainContent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const slimLine = " h-px w-3/6 bg-[#FEF8EE]";

  return (
    <TracingBeam className="flex gap-4">
      <div
        className={`transform transition-transform duration-1000 ease-out ${
          isVisible
            ? "translate-x-0 opacity-100"
            : "translate-x-[200%] opacity-0"
        }`}
        style={{
          transitionDelay: `1200ms`,
        }}
      >
        <div className="space-y-28">
          {sectionsData.map((section) => (
            <React.Fragment key={section.id}>
              <Section
                id={section.id}
                title={section.title}
                content={section.content}
              />
              <div className={slimLine}></div>
            </React.Fragment>
          ))}
          <Projects />
          <Footer />
        </div>
      </div>
    </TracingBeam>
  );
};

export default MainContent;

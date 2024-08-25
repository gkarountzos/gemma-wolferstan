import React from "react";
import Footer from "./Footer";
import Projects from "./Projects";
import { TracingBeam } from "./ui/tracing-beam";
import Section from "./Sections";
import { sectionsData } from "@/lib/sections";

const MainContent = () => {
  const slimLine = " h-px w-3/6 bg-[#FEF8EE]";

  return (
    <TracingBeam className="flex gap-4">
      <div className="space-y-28">
        {sectionsData.map((section) => (
          <React.Fragment key={section.id}>
            <Section
              id={section.id}
              title={section.title}
              content={section.content}
            />
          </React.Fragment>
        ))}
        <Projects />
        <Footer />
      </div>
    </TracingBeam>
  );
};

export default MainContent;

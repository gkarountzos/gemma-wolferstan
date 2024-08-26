import React from "react";
import { SectionProps } from "@/types/types";

const Section: React.FC<SectionProps> = ({
  id,
  icon: Icon,
  title,
  content,
}) => {
  return (
    <>
      <section id={id} className="relative max-w-4xl mx-auto">
        <div className="flex gap-4 items-center pb-8">
          <Icon className="text-[#FEF8EE] " size={24} />
          <h2 className={`xs:text-2xl sm:text-4xl text-[#FEF8EE] `}>{title}</h2>
        </div>

        <div
          className={`relative p-4 sm:p-8 bg-black/20 backdrop-blur-sm rounded-lg overflow-hidden `}
        >
          <div className="relative z-10">
            {content.map((paragraph, index) => (
              <p
                key={index}
                className={`text-base sm:text-lg ${
                  index > 0 ? "pt-2" : ""
                } text-[#FEF8EE]`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Section;

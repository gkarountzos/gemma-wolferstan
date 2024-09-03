import React from "react";
import { ExperienceDataProps, ContentItem } from "@/types/types";

const ExperienceSection: React.FC<ExperienceDataProps> = ({
  id,
  icon: Icon,
  title,
  content,
  className,
}) => {
  return (
    <>
      <section id={id} className={className}>
        <div className="flex gap-4 items-center pb-8">
          <Icon className="text-[#FEF8EE]" size={24} />
          <h2 className="xs:text-2xl sm:text-4xl text-[#FEF8EE]">{title}</h2>
        </div>

        <div className="">
          <div className="relative z-10 flex flex-col gap-6">
            {content.map((item: ContentItem, index) => (
              <div
                key={index}
                className=" p-2 sm:p-8 bg-black/20 backdrop-blur-sm rounded-lg overflow-hidden"
              >
                {item.title && (
                  <h3 className="text-xl font-semibold text-[#FEF8EE]">
                    {item.title}
                  </h3>
                )}
                {item.details && (
                  <ul className="list-disc pl-5 text-[#FEF8EE]">
                    {item.details.map((detail, i) => (
                      <li key={i} className="text-base sm:text-lg">
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
                {item.text && (
                  <p className="text-base sm:text-lg text-[#FEF8EE]">
                    {item.text}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ExperienceSection;

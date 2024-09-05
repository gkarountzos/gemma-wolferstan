import React from "react";
import Image from "next/image";
import { AboutDataProps } from "@/types/types";

const AboutSection: React.FC<AboutDataProps> = ({
  id,
  icon: Icon,
  title,
  content,
  className,
}) => {
  return (
    <section id={id} className={className}>
      <div className="flex gap-4 items-center pb-8">
        <Icon className="text-[#FEF8EE]" size={24} />
        <h2 className="xs:text-2xl sm:text-4xl text-[#FEF8EE]">{title}</h2>
      </div>

      <div className="relative p-4 sm:p-8 bg-black/20 backdrop-blur-sm rounded-lg overflow-hidden">
        <div className="relative z-10">
          {content.map((paragraph, index) => (
            <div key={index} className="flex gap-4 items-center">
              {index === 0 && (
                <div className="flex-shrink-0">
                  <Image
                    src="/theface.png"
                    alt="Profile"
                    width={96}
                    height={96}
                    className="rounded-full object-cover w-[150px] h-[150px]"
                  />
                </div>
              )}
              <p className="text-base sm:text-lg text-[#FEF8EE]">{paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

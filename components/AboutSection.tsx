import React from "react";
import Image from "next/image";
import { AboutContent, AboutDataProps } from "@/types/types";

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
          <div className="flex-shrink-0 float-left pr-4 pt-2">
            <Image
              src={content[0].image}
              alt="Profile"
              width={128}
              height={128}
              quality={100}
              priority
              className="rounded-lg object-cover w-32 h-32"
            />
          </div>

          {/* First paragraph wraps around the image */}
          <p className="text-base sm:text-lg text-[#FEF8EE] mb-4">
            {content[0].paragraph[0]}
          </p>

          {/* Remaining paragraphs go below the image */}
          {content[0].paragraph.slice(1).map((para, index) => (
            <p key={index} className="text-base sm:text-lg text-[#FEF8EE] mb-4">
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import React from "react";
import Image from "next/image";
import { AboutDataProps } from "@/types/types";
import ScreenshotSlider from "./ScreenshotSlider";
import tigaImage from "@/public/TIGA.png";

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

      <div className="relative p-4 sm:p-8 bg-black/15 backdrop-blur-sm rounded-lg overflow-hidden">
        <div className="relative z-10">
          {/* First paragraph with image on the left */}
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

          <p className="text-base sm:text-lg text-[#FEF8EE] mb-4">
            {content[0].paragraph[0]}
          </p>

          {/* Second paragraph with slider on the right */}
          <div className="flex-shrink-0 float-right pl-4 pt-2 pb-2 w-48 sm:w-72">
            <ScreenshotSlider
              images={[tigaImage]}
              showArrows={false}
              showInicators={false}
            />
          </div>

          <p className="text-base sm:text-lg text-[#FEF8EE] mb-4">
            {content[0].paragraph[1]}
          </p>

          {/* Remaining paragraphs go below */}
          {content[0].paragraph.slice(2).map((para, index) => (
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

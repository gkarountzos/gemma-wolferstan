"use client";

import React from "react";
import { SectionProps } from "@/types/types";
import { useEffect, useState } from "react";

const Section: React.FC<SectionProps> = ({ id, title, content }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section id={id} className="relative max-w-4xl mx-auto">
        <div></div>
        <h2
          className={`text-4xl text-[#FEF8EE] mb-4 pt-2 transform transition-transform duration-1000 ease-out ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-x-[200%] opacity-0"
          }`}
          style={{
            transitionDelay: `1200ms`, // Starts after a short delay for the heading
          }}
        >
          {title}
        </h2>

        <div
          className={`relative p-8 bg-black/20 backdrop-blur-sm rounded-lg overflow-hidden transform transition-transform duration-1000 ease-out ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-[200%] opacity-0"
          }`}
          style={{
            transitionDelay: `1200ms`, // Container animates after the heading
          }}
        >
          <div className="relative z-10">
            {content.map((paragraph, index) => (
              <p
                key={index}
                className={`text-lg ${index > 0 ? "pt-2" : ""} text-[#FEF8EE]`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>
      <div
        className={`h-px w-3/6 bg-[#FEF8EE] transform transition-transform duration-1000 ease-out mx-auto mt-4 ${
          isVisible
            ? "translate-x-[-50%] opacity-100"
            : "translate-x-[500%] opacity-0"
        }`}
        style={{
          transitionDelay: `1200ms`, // Delayed slightly more than the container
        }}
      />
    </>
  );
};

export default Section;

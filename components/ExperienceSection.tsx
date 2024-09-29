import React from "react";
import { ExperienceDataProps, ExperienceContent } from "@/types/types";
import { FiLink } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

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

        <div>
          <div className="relative z-10 flex flex-col gap-6">
            {content.map((item: ExperienceContent, index) => (
              <div
                key={index}
                className="p-4 sm:p-6 bg-black/20 backdrop-blur-sm rounded-lg overflow-hidden"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 sm:gap-4">
                    {item.companyIcon && (
                      <Image
                        src={item.companyIcon}
                        alt={item.company}
                        width={64}
                        height={64}
                        className="rounded-full object-cover"
                        quality={100}
                      />
                    )}
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        {item.url ? (
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg sm:text-xl font-semibold text-[#FEF8EE]"
                          >
                            {item.company}
                          </a>
                        ) : (
                          <h3 className="text-xl font-semibold text-[#FEF8EE]">
                            {item.company}
                          </h3>
                        )}
                        {item.linkIcon && (
                          <FiLink className="text-[#FEF8EE] w-3 h-3" />
                        )}
                      </div>
                      {item.title && (
                        <h4 className="text-sm sm:text-md font-light italic text-[#FEF8EE]">
                          {item.title}
                        </h4>
                      )}
                    </div>
                  </div>

                  {item.year && (
                    <span className="text-md italic text-[#FEF8EE]">
                      {item.year}
                    </span>
                  )}
                </div>

                <div className="py-4">
                  <hr className="border-t-2 border-[#FEF8EE]" />
                </div>

                {item.details && (
                  <ul className="list-disc pl-5 text-[#FEF8EE]">
                    {item.details.map((detail, i) => (
                      <li key={i} className="text-base sm:text-lg">
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Add "View Resume" button below */}
        <div className="mt-6">
          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center just w-fit mx-auto px-4 py-2 rounded-full bg-gradient-to-tl from-[#743ca8] to-[#4351ce] text-white transition duration-200"
          >
            View Résumé
          </Link>
        </div>
      </section>
    </>
  );
};

export default ExperienceSection;

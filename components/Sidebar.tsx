"use client";

import { usePathname, useRouter } from "next/navigation";
import { FaGithub, FaLinkedin, FaItchIo, FaYoutube } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Section, SocialLink } from "@/types/types";
import { projects } from "@/lib/content/projects";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

const sections: Section[] = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
];

const socialLinks: SocialLink[] = [
  {
    href: "https://www.linkedin.com/in/gemma-wolferstan-8727982b0/",
    icon: FaLinkedin,
  },
  { href: "https://gemma-wolferstan.itch.io/", icon: FaItchIo },
  { href: "https://github.com/Gemma-Wolferstan", icon: FaGithub },
  {
    href: "https://www.youtube.com/channel/UCpiF_8l6y212ZxKuF0sy4Xw",
    icon: FaYoutube,
  },
  {
    href: "mailto:g.wolferstan@gmail.com",
    icon: TbMailFilled,
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [activeSection, setActiveSection] = useState<string>(sections[0].href);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const sectionIds = useMemo(
    () => sections.map((section) => section.href.substring(1)),
    []
  );

  const isProjectPage = useMemo(() => {
    if (!pathname) return false;
    return (
      pathname.startsWith("/projects") ||
      projects.some((p) => pathname.includes(p.slug))
    );
  }, [pathname]);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      if (isProjectPage) return;
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (visibleEntry) {
        const matchedSection = sections.find(
          (section) => section.href === `#${visibleEntry.target.id}`
        );
        if (matchedSection) setActiveSection(matchedSection.href);
      }
    },
    [isProjectPage]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: [0.7, 1],
    });
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds, handleIntersection]);

  const handleNavClick = (href: string) => async (e: React.MouseEvent) => {
    e.preventDefault();
    const targetElement = document.getElementById(href.substring(1));

    if (targetElement) {
      // Scroll to the section if on the same page
      targetElement.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to the home page with a hash if not on the same page
      router.push(`/${href}`);
      // Ensure the scroll happens after the page load
      const checkTargetElement = document.getElementById(href.substring(1));
      if (checkTargetElement) {
        checkTargetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const renderLinks = <
    T extends { href: string; icon?: React.ComponentType<{ size: number }> }
  >(
    items: T[],
    renderFn: (item: T, index: number) => React.ReactNode
  ) => {
    return items.map((item, index) => renderFn(item, index));
  };

  return (
    <div className="sticky py-24 lg:top-0 lg:flex lg:max-h-screen lg:flex-col lg:justify-between lg:py-24">
      <div className="flex flex-col h-screen justify-between">
        <div>
          <TypewriterEffectSmooth
            words={[{ text: "Gemma Wolferstan" }]}
            className="font-roboto text-main"
          />
          <h3
            className={`text-2xl mt-2 text-[#FEF8EE] transform transition-transform duration-1000 ease-out ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-[-100px] opacity-0"
            }`}
          >
            Junior Game Designer
          </h3>
          <nav
            className={`text-lg space-y-4 pt-16 transform transition-transform duration-700 ease-out ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-[-100px] opacity-0"
            }`}
          >
            {renderLinks(sections, (section, index) => (
              <a
                key={section.name}
                href={section.href}
                onClick={handleNavClick(section.href)}
                className={`relative w-fit h-fit block py-1 text-xl transform transition-transform duration-1000 ease-out ${
                  (isProjectPage && section.href === "#projects") ||
                  (!isProjectPage && activeSection === section.href)
                    ? "text-[#FEF8EE] font-extrabold"
                    : "text-[#FEF8EE] hover:translate-x-1.5"
                } ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-[-100%] opacity-0"
                } before:content-[''] before:absolute before:left-0 before:right-0 before:bottom-0 before:h-[2px] before:bg-[#FEF8EE] before:scale-x-0 before:origin-left before:transition-transform before:duration-200 hover:before:scale-x-100 ${
                  (!isProjectPage && activeSection === section.href) ||
                  (isProjectPage && section.href === "#projects")
                    ? "before:scale-x-100"
                    : ""
                }`}
              >
                {section.name}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex space-x-6">
          {renderLinks(socialLinks, ({ href, icon: Icon }, index) => (
            <div className="w-8 h-8 flex justify-center items-center transition-transform duration-200 ease-out hover:-translate-y-2">
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span
                  className={`inline-block transform transition-transform duration-1000 ease-out ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-[700%] opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${
                      100 + sections.length * 100 + index * 100
                    }ms`,
                  }}
                >
                  <Icon className="text-[#FEF8EE] " size={24} />
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

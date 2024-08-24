"use client";

import { usePathname, useRouter } from "next/navigation";
import { FaGithub, FaLinkedin, FaItchIo, FaYoutube } from "react-icons/fa";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Section, SocialLink } from "@/types/types";
import { projects } from "@/lib/projects"; // Import the projects list to check paths

const sections: Section[] = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  // add more categories to the sidebar here if needed
];

const socialLinks: SocialLink[] = [
  { href: "https://github.com/Gemma-Wolferstan", icon: FaGithub },
  {
    href: "https://www.linkedin.com/in/gemma-wolferstan-8727982b0/",
    icon: FaLinkedin,
  },
  { href: "https://gemma-wolferstan.itch.io/", icon: FaItchIo },
  {
    href: "https://www.youtube.com/channel/UCpiF_8l6y212ZxKuF0sy4Xw",
    icon: FaYoutube,
  },
  // add more links here if needed
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [activeSection, setActiveSection] = useState<string>(sections[0].href);

  const sectionIds = useMemo(
    () => sections.map((section) => section.href.substring(1)),
    []
  );

  // Determine if the current path is a project page
  const isProjectPage = useMemo(() => {
    if (!pathname) return false; // Return false if pathname is undefined
    return (
      pathname.startsWith("/projects") ||
      projects.some((p) => pathname.includes(p.slug))
    );
  }, [pathname]);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      if (isProjectPage) return; // Prevent intersection observer from changing active section on project pages

      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];

      if (visibleEntry) {
        const matchedSection = sections.find(
          (section) => section.href === `#${visibleEntry.target.id}`
        );
        if (matchedSection) {
          setActiveSection(matchedSection.href);
        }
      }
    },
    [isProjectPage] // Add isProjectPage to dependency array
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: [0.7, 1],
    });

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [sectionIds, handleIntersection]);

  const handleNavClick = (href: string) => (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      document.getElementById(href.substring(1))?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      e.preventDefault();
      router.push(`/${href}`);
    }
  };

  return (
    <div className="flex flex-col h-screen justify-between">
      <div>
        <h1 className="text-5xl font-bold">Gemma Wolferstan</h1>
        <p className="text-2xl mt-2 text-[#FEF8EE]">Junior Game Designer</p>
        <nav className="text-lg space-y-4 pt-16">
          {sections.map((section) => (
            <a
              key={section.name}
              href={section.href}
              onClick={handleNavClick(section.href)}
              className={`w-fit h-fit block py-1 text-lg transition-all duration-150 ease-in-out ${
                (isProjectPage && section.href === "#projects") ||
                (!isProjectPage && activeSection === section.href)
                  ? "text-[#FEF8EE] font-bold"
                  : "text-[#FEF8EE] hover:text-[#e6c9eb] transition-transform duration-150 hover:-translate-y-0.5"
              }`}
            >
              {section.name}
            </a>
          ))}
        </nav>
      </div>
      <div className="flex space-x-6 ">
        {socialLinks.map(({ href, icon: Icon }) => (
          <a key={href} href={href} target="_blank" rel="noopener noreferrer">
            <Icon
              className="text-[#FEF8EE] hover:text-[#e6c9eb] transition-transform duration-200 hover:-translate-y-1"
              size={24}
            />
          </a>
        ))}
      </div>
    </div>
  );
}

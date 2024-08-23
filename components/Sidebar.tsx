"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub, FaLinkedin, FaItchIo, FaYoutube } from "react-icons/fa";
import React from "react";
import { Section, SocialLink } from "@/types/types";

const sections: Section[] = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  //add more categories to the sidebar here if needed
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
  //add more links here if needed
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div>
      <div>
        <h1 className="text-5xl font-bold">Gemma Wolferstan</h1>
        <p className="text-2xl mt-2 text-[#FEF8EE]">Junior Game Designer</p>
        <nav className="text-lg space-y-4 my-16">
          {sections.map((section) => (
            <Link
              key={section.name}
              href={section.href}
              className={`block py-1 text-lg  ${
                pathname === section.href
                  ? "text-[#FEF8EE]"
                  : "w-fit h-fit text-[#FEF8EE] hover:text-[#e6c9eb] transition-transform duration-150 hover:-translate-y-1 "
              }`}
            >
              {section.name}
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex space-x-6 my-60 py-20">
        {socialLinks.map(({ href, icon: Icon }) => (
          <a key={href} href={href} target="_blank" rel="noopener noreferrer">
            <Icon
              className="text-[#ccd6f6] hover:text-[#e6c9eb] transition-transform duration-200 hover:-translate-y-1"
              size={24}
            />
          </a>
        ))}
      </div>
    </div>
  );
}

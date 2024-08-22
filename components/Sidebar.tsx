"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const sections = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
];

const socialLinks = [
  { href: "https://github.com/", icon: FaGithub },
  { href: "https://linkedin.com/", icon: FaLinkedin },
  { href: "https://instagram.com/", icon: FaInstagram },
  { href: "https://twitter.com/", icon: FaTwitter },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold">Gemma Wolferstan</h1>
        <p className="text-xl mt-2 text-[#ccd6f6]">Junior Game Designer</p>
        <nav className="text-lg space-y-4 mt-16">
          {sections.map((section) => (
            <Link
              key={section.name}
              href={section.href}
              className={`block py-1 text-lg tracking-wide ${
                pathname === section.href
                  ? "text-[#64ffda]"
                  : "text-[#8892b0] hover:text-[#64ffda]"
              }`}
            >
              {section.name}
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex space-x-6 mt-60 pt-60">
        {socialLinks.map(({ href, icon: Icon }, index) => (
          <a key={index} href={href} target="_blank" rel="noopener noreferrer">
            <Icon className="text-[#ccd6f6] hover:text-[#64ffda]" size={24} />
          </a>
        ))}
      </div>
    </div>
  );
}

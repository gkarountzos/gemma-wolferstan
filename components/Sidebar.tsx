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
        <h1 className="text-5xl font-bold">Gemma Wolferstan</h1>
        <p className="text-2xl mt-2 text-[#FEF8EE]">Junior Game Designer</p>
        <nav className="text-lg space-y-4 mt-16">
          {sections.map((section) => (
            <Link
              key={section.name}
              href={section.href}
              className={`block py-1 text-lg tracking-wide ${
                pathname === section.href
                  ? "text-[#FEF8EE]"
                  : "text-[#FEF8EE] hover:text-[#e6c9eb] transition-transform duration-150 hover:-translate-y-0.5 w-fit h-fit"
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

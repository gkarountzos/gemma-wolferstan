import { StaticImageData } from "next/image";

export interface ProjectContent {
  title: string;
  details: string[];
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  content: ProjectContent[];
  screenshots: string[];
  link?: string;
  video?: string;
}

export interface ProjectProps {
  params: { slug: string };
}
export interface AboutDataProps {
  id: string;
  icon: React.ComponentType<{ size: number; className?: string }>;
  title: string;
  content: string[];
  className?: string;
}

export interface ExperienceContent {
  company: string;
  companyIcon?: StaticImageData;
  linkIcon: boolean;
  url?: string;
  title?: string;
  year?: string;
  details?: string[];
  text?: string;
}

export interface ExperienceDataProps {
  id: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement> & { size?: number }>;
  title: string;
  content: ExperienceContent[];
  className?: string;
}

export interface SocialLink {
  href: string;
  icon: React.ComponentType<{ size: number; className?: string }>;
}

export interface Section {
  name: string;
  href: string;
}

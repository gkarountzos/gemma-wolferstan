export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  content: string[];
  screenshots: string[];
  link?: string;
  video?: string;
}

export interface ProjectProps {
  params: { slug: string };
}
export interface SectionProps {
  id: string;
  icon: React.ComponentType<{ size: number; className?: string }>;
  picture?: string;
  title: string;
  content: string[];
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

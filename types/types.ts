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
  title: string;
  content: string[];
}

export interface SocialLink {
  href: string;
  icon: React.ComponentType<{ size: number; className?: string }>;
}

export interface sectionsDataProps {
  id: string;
  title: string;
  content: string[];
}

export interface Project {
  title: string;
  description: string;
  link: string;
  image: string;
  slug: string;
  content?: string;
}

export interface ProjectProps {
  params: { slug: string };
}

export interface Section {
  name: string;
  href: string;
}

export interface SocialLink {
  href: string;
  icon: React.ComponentType<{ size: number; className?: string }>;
}

export interface BackgroundGradientAnimationProps {
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  fifthColor?: string;
  pointerColor?: string;
  size?: string;
  blendingValue?: string;
  children?: React.ReactNode;
  className?: string;
  interactive?: boolean;
  containerClassName?: string;
}

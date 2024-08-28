import { notFound } from "next/navigation";
import { Metadata } from "next";

import { projects } from "@/lib/content/projects";
import { ProjectProps } from "@/types/types";
import ProjectPage from "@/components/ProjectPage";

// Helper function to find a project by slug
function findProject(slug: string) {
  return projects.find((item) => item.slug === slug);
}

// Generate dynamic metadata based on the project
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = findProject(params.slug);

  if (!project) {
    return {
      title: "Project Not Found - Gemma Wolferstan",
      description: "The requested project could not be found.",
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

const ProjectPageContainer = ({ params }: ProjectProps) => {
  const project = findProject(params.slug);

  if (!project) {
    return notFound();
  }

  return <ProjectPage project={project} />;
};

export default ProjectPageContainer;

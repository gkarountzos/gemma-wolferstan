import { Project } from "@/types/types";

export const projects: Project[] = [
  {
    slug: "ascension-dude",
    title: "Ascension Dude",
    description:
      "A 2D, time survival game made in a team of three over eight weeks...",
    link: "https://gemma-wolferstan.itch.io/ascension-dude",
    image: "/project-images/AD.png",
    content: `
      <h2>Overview</h2>
      <p>Ascension Dude is a 2D, time survival game...</p>
      <h2>Development Process</h2>
      <p>This project was developed over eight weeks...</p>
      <h2>Features</h2>
      <ul>
        <li>Multiple abilities to choose from</li>
        <li>Hordes of monsters</li>
        <li>Unique pixel art style</li>
      </ul>
    `,
  },
  {
    slug: "roly-holey",
    title: "Roly-Holey",
    description: "A minimalist prototype made alone during a short game jam...",
    link: "https://gemma-wolferstan.itch.io/roly-holey",
    image: "/project-images/RH.png",
    content: `
      <h2>Game Concept</h2>
      <p>Roly-Holey is a minimalist game where...</p>
      <h2>Development Insights</h2>
      <p>This game was created during a short game jam...</p>
      <h2>Core Mechanics</h2>
      <ul>
        <li>Maze navigation</li>
        <li>Precision controls</li>
        <li>Minimalist design</li>
      </ul>
    `,
  },
  // Add more projects as needed
];

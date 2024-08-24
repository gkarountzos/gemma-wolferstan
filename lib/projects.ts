import { Project } from "@/types/types";

export const projects: Project[] = [
  {
    slug: "ascension-dude",
    title: "Ascension Dude",
    image: "/project-images/asc-dude/AD.png",
    description:
      "A 2D, time survival game made in a team of three over eight weeks. The player takes control of the ‘dude,’ picking various abilities as they level up which help them fight off hordes of monsters. This project showcases the breadth of my design and technical knowledge, and ability to work in a team.",
    content: [
      "Ascension Dude is a top down, pixel graphics, 2D, endless shoot ‘em up game in which endless waves of monsters charge at the player, whose purpose is to survive their attacks for as long as possible using an arsenal of skills and upgrades.",
      "The player takes control of the 'dude' by moving through the game level and choose between a number of magic abilities as they level up from XP drops from destroyed enemies. The game takes place in a magic-driven world during a medieval time period, in the middle of an open plain infested by incoming waves of monsters during daylight. The level is set in an open circle shaped plain that houses ruins in the middle of a forest. There are several paths that players can follow to various points of interest.",
      "I successfully pitched my game design for this project to my teammates and we began prototyping the core game systems, first on paper, then by implementation into our game engine of choice (Unity).",
      "Beyond the initial design, I was also responsible for many elements of the final product, including all animations and audio, UI and HUD elements, various C# scripts and bug fixes, and the design and balancing of enemy types, attack patterns, and player abilities.",
      "Good management of version control was essential to this project, and I oversaw this by introducing my teammates to Plastic SCM (a version control software built in to Unity) while also making regular backups via GitHub. Likewise, we also made good use of Trello to track bugs and features left to implement or fix, and continually updated our game design document as the project went through iterations.",
      "A major requirement of this project was to work under the agile method, producing a working prototype within a week and then to continually update with playable builds to be showcased at weekly meetings. We met these deadlines without fail over the two month process.",
      "This project demonstrates my overall competency with the game development process, design understanding, technical experience, and ability to work in a team.",
    ],
    screenshots: [
      "/project-images/asc-dude/1.png",
      "/project-images/asc-dude/2.png",
      "/project-images/asc-dude/3.png",
      "/project-images/asc-dude/4.png",
      "/project-images/asc-dude/5.png",
    ],
    link: "https://gemma-wolferstan.itch.io/ascension-dude",
  },
  {
    slug: "roly-holey",
    title: "Roly-Holey",
    image: "/project-images/roly/RH.png",
    description:
      "A minimalist prototype made alone during a short game jam. Simple mechanics result in a surprisingly deep gameplay experience where careful navigation of the maze design, critical thinking, and precision with the controls are paramount to success.",
    content: [
      "This page showcases a game prototype I designed and programmed during a short game jam, in which the theme was 'minimalist'. My university chose to upload this project to their official Itch.io page as a showcase of student talent.",
      "Mechanically this game is very simple; the player must guide a ball through a simple 'maze' into a hole, bomb balls will result in a game over if they touch the player ball, skull balls will result in a game over if they touch the hole. ",
      "These simple mechanics result in a surprisingly deep gameplay experience where careful navigation of the maze design, critical thinking, and precision with the controls are paramount to success (at least by the higher, more difficult levels).",
      "I particularly enjoyed designing the main menu to also act as a basic tutorial for the game's controls and core mechanic, as well as balancing the difficulty progression across the ten levels. The next stage of this prototype would be to port it to mobile so that it could be played with gyroscopic controls, some refinement of the visual design and addition of 'game juice', as well as development of an automated program that could produce endless levels.",
    ],
    screenshots: [
      "/project-images/roly/1.png",
      "/project-images/roly/2.png",
      "/project-images/roly/3.png",
      "/project-images/roly/4.png",
      "/project-images/roly/5.png",
    ],
    link: "https://gemma-wolferstan.itch.io/roly-holey",
  },
  // Add more projects as needed
];

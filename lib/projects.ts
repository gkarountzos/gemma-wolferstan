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
    video:
      "https://drive.google.com/file/d/1JecXLpIe4icMBWd46b1bfsQXnpz8JZVa/preview",
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
    video:
      "https://drive.google.com/file/d/1Z0840ppBOAji1WBsaScZFUFPQ4s2Qqf7/preview",
  },
  {
    slug: "queen-of-hearts",
    title: "Queen of Hearts",
    image: "/project-images/queen/SS2.png",
    description:
      "A simple 2D platformer made in the early days of my degree which showcases my technical ability with programming and use of an engine to create a game experience, while also demonstrating use of level design techniques to communicate the game's goal without using words.",
    content: [
      "Queen of Hearts is a simple 2D platformer made in the early days of my degree which showcases my technical ability with programming and use of an engine to create a game experience, while also demonstrating use of level design techniques to communicate the game's goal without text-based exposition.",
      "At the beginning of the level, I have provided a couple of small pits which the player must jump over to progress. This gives them an early understanding of how the jump feels, how far it goes, the strength of the game's gravity, etc.",
      "They then encounter their first enemy and must use what they just learned - i.e. to jump to get past it. I made the ceiling low, so the player will likely take damage.",
      "I then present the first health potion, which will heal the player and thus teach them their effect.",
      "Shortly after, the player climbs a ladder and encounters the first heart pick up. They do not know what it is yet, but they will have it in mind as they descend the ladder and immediately meet the queen.",
      "The queen does not use words, but has an animated speech bubble with some hearts in it that look identical to the pickup.",
      "The level design funnels the player to the left, where they will encounter some challenges in the form of patrolling skeleton enemies and minor platforming, but will soon find another heart and some health potion pickups.",
      "The level design loops back around to the queen so that the player does not have to backtrack.",
      "The player will have found all 3 hearts by now and hopefully has realised that the queen requires them. They bring the hearts back to the queen and the game's goal is met, completing the experience.",
    ],
    screenshots: [
      "/project-images/queen/SS1.png",
      "/project-images/queen/SS3.png",
      "/project-images/queen/SS4.png",
      "/project-images/queen/SS5.png",
      "/project-images/queen/SS6.png",
    ],
    link: "https://gemma-wolferstan.itch.io/queen-of-hearts",
    video:
      "https://drive.google.com/file/d/1zyBvxuaerC0KiJNgZ06476SdPOjKCfKS/preview",
  },
  {
    slug: "tilted",
    title: "Tilted",
    image: "/project-images/Tilted/SS2.png",
    description:
      "A small game made during a game jam with the theme “10 seconds”. The player must balance the circus ball on the board while the board tips and tilts erratically. This demonstrates my ability to create a full, polished game experience quickly.",
    content: [
      " A small game made during a game jam with the theme “10 seconds”.",
      "The player must balance the circus ball on the board for 10 consecutive seconds while the board tips and tilts erratically. A drum roll accompanies the gameplay to signify how much longer the player needs to balance the ball.",
      "This project demonstrates my ability to create a full, polished game experience quickly.",
    ],
    screenshots: [],
    link: "https://gemma-wolferstan.itch.io/tilted",
    video:
      "https://drive.google.com/file/d/1LXALZP2GdHQkvxXXgwmVVaCYno89UKQw/preview",
  },
  // {
  //   slug: "r6s-lvl-design",
  //   title: "Rainbow Six Siege Level Design",
  //   image: "/project-images/R6S/Key-Legend.png",
  //   description:
  //     "Three original level design sketches and one greybox for Rainbow 6 Siege. The design caters to the different classes of weaponry and creates spaces which allow for inventive plays with tools and gadgets.",
  //   content: [
  //     "I made three 2D top-down sketches of original map concepts for Ubisoft's Rainbow 6 Siege's 'Secure Area' game mode",
  //     "I focused on creating spaces that would cater to the different classes of weaponry; for example, by creating spaces with long line of sight (snipers), spaces that force proximity to 'danger zones' (shotguns), and spaces which allow for creative plays with the various tools and gadgets operators are given.",
  //   ],
  //   screenshots: [
  //     "/project-images/R6S/Sketch 1 Attic.jpg",
  //     "/project-images/R6S/Sketch 1 Basement.jpg",
  //     "/project-images/R6S/Sketch 1 Ground Floor.jpg",
  //     "/project-images/R6S/Sketch 1.png",
  //     "/project-images/R6S/Sketch 2 1st Floor.jpg",
  //     "/project-images/R6S/Sketch 2 Ground Floor A.jpg",
  //     "/project-images/R6S/Sketch 2 Ground Floor B.jpg",
  //     "/project-images/R6S/Sketch 2.png",
  //     "/project-images/R6S/Sketch 3 1st Floor.jpg",
  //     "/project-images/R6S/Sketch 3 Ground Floor.jpg",
  //     "/project-images/R6S/Sketch 3.png",
  //   ],
  // },
  // Add more projects as needed
];

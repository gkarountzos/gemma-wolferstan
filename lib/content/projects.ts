import { Project } from "@/types/types";

export const projects: Project[] = [
  // {
  //   slug: "scrimshaw",
  //   title: "Project Scrimshaw",
  //   subtitle: "A blend of classic genres",
  //   image: "/project-images/scrimshaw/scrimshaw.png",
  //   description:
  //     "A work-in-progress project showcasing my ability to combine turn-based combat, intricate level design, and narrative elements inspired by some of my favourite games. This project is a testament to my skills in game design, coding, and project management.",
  //   content: [
  //     {
  //       title: "Project Overview",
  //       details: [
  //         "Project Scrimshaw is a work-in-progress game that I began after completing my degree. It serves as a platform to showcase my abilities without the constraints of short-term academic deadlines and to further develop my skills in game design, coding, project management, and more.",
  //       ],
  //     },
  //     {
  //       title: "Project Details",
  //       details: [
  //         "This project blends elements from various genres, including turn-based combat inspired by games like Darkest Dungeon and Gwent, with level design influenced by classic survival horror titles like those of the Resident Evil franchise and more recent Crow Country.",
  //         "The narrative design takes cues from games like Dark Souls, with minimal hand-holding and a focus on environmental storytelling. This project demonstrates my versatility as a game designer and my ability to integrate various design elements into a cohesive and engaging experience.",
  //       ],
  //     },
  //     {
  //       title: "My Contributions",
  //       details: [
  //         "Design: Conceptualisation and development of the core gameplay mechanics, balancing turn-based combat with strategic depth.",
  //         "Development: Using both the Unity engine and paper prototyping to iterate on mechanical systems and refine gameplay.",
  //         "Project Management: Managing the entire development process, iterating on feedback and making continuous improvements to the game.",
  //       ],
  //     },
  //   ],
  //   screenshots: ["/project-images/scrimshaw/scrimshaw.png"],
  // },
  {
    slug: "ascension-dude",
    title: "Ascension Dude",
    subtitle: "Endless waves, endless fun",
    image: "/project-images/asc-dude/AD.png",
    description:
      "A 2D endless shoot 'em up where players must survive waves of enemies using a variety of magical abilities. This project highlights my skills in design, programming, animation, UI creation, teamwork, and project management.",
    content: [
      {
        title: "Project Overview",
        details: [
          "Ascension Dude is a top-down, pixel-art, 2D endless shoot 'em up game where players must survive increasingly difficult waves of enemies.",
          "The game features a dynamic, skill-based progression system where players choose abilities as they level up. Ascension Dude showcases my ability to design and develop a complete game, balancing creativity with technical execution.",
        ],
      },
      {
        title: "Project Details",
        details: [
          "Set in a magic-driven medieval world, the game places the player in an open plain, battling monsters that spawn in waves.",
          "The level design focuses on giving players the freedom to navigate the space while strategically choosing upgrades to match their play style.",
        ],
      },
      {
        title: "My Contributions",
        details: [
          "Game Design: Pitched the initial concept and led the design process, from paper prototyping to implementation in Unity.",
          "Animation and Audio: Implemented all animations, sound effects, and music, enhancing the game's atmosphere.",
          "Technical Implementation: Wrote C# scripts for implementations such as player movement, enemy behaviors, player abilities, and UI elements. Managed version control and team collaboration using Plastic SCM and GitHub.",
          "Project Management: Oversaw the project’s progress using agile methods, ensuring timely delivery of weekly builds and meeting all deadlines.",
        ],
      },
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
    subtitle: "Minimal mechanics, maximal depth",
    image: "/project-images/roly/RH.png",
    description:
      "A physics-based puzzle prototype created during a game jam for the mobile platform. Simple mechanics lead to surprisingly deep gameplay, demonstrating my strengths in mechanical and level design, and ability to prototype quickly.",
    content: [
      {
        title: "Project Overview",
        details: [
          "Roly-Holey is a minimalist, physics-based puzzle game prototype created during a game jam, intended for use on the mobile platform.",
          "The game challenges players to guide a ball through a maze while avoiding hazards, with gameplay that becomes increasingly complex as levels progress.",
          "Roly-Holey highlights my ability to create engaging gameplay experiences with streamlined, elegant mechanical design.",
        ],
      },
      {
        title: "Project Details",
        details: [
          "The core mechanics are simple: players navigate a ball through a maze to a goal, while avoiding bomb and skull balls that can trigger a game over.",
          "Despite its simplicity, the game offers a deep and challenging experience, especially in the higher levels.",
        ],
      },
      {
        title: "My Contributions",
        details: [
          "Design and Programming: Designed the game’s mechanics and levels, programmed the core gameplay in Unity, and created a seamless difficulty curve across ten levels.",
          "User Experience: Developed the main menu to double as a tutorial, easing players into the game mechanics.",
          "Future Development: Planned enhancements include porting to mobile, introducing gyroscopic controls, refining the visual design, and developing an endless level generator, along with increasing complexity in the form of new hazards the player must avoid.",
        ],
      },
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
    slug: "designers-toolkit",
    title: "A Strategic Theatre for Survival – Designer’s Toolkit",
    subtitle: "PLACEHOLDER",
    image: "/project-images/designers-toolkit/thumbnail.jpg",
    description:
      "A designer’s toolkit providing modular strategies to enhance horror game level design by leveraging human survival instincts. These strategies aim to boost challenge, engagement, tension, and overall enjoyment of scary encounters within the context of a horror game.",
    content: [
      {
        title: "Project Overview",
        details: [
          "A Strategic Theatre for Survival is a toolkit I developed during my dissertation which explore how human survival instincts can be harnessed to enhance horror game level design. Grounded in psychological and design theories like Csikszentmihalyi’s Flow Theory, Maslow’s Hierarchy of Needs, and Jay Appleton’s Prospect-Refuge theory, the toolkit provides game designers with modular strategies to evoke deeper emotional engagement and more immersive survival experiences. These theories highlight how human behaviour can be influenced by environmental stressors, which in turn can be co-opted by designers to shape player responses in games.",
          "The toolkit offers a flexible, modular approach, allowing designers to select and apply various techniques to suit their specific project needs. For instance, manipulating player line of sight or creating spaces which dynamically swing between danger and refuge can heighten tension, while designing tight, restrictive spaces or using environmental hazards increases the challenge and vulnerability players feel. These modular techniques ensure that the toolkit is adaptable to different scenarios, making it valuable for crafting everything from subtle tension to intense survival situations.",
          "Ultimately, A Strategic Theatre for Survival equips game designers with the tools to build more dynamic and emotionally charged gameplay. Whether the goal is to create a gradual buildup of fear or a constant sense of peril, this toolkit provides insights that enhance player immersion and elevate the psychological impact of survival horror games.",
          "I am currently working with my university to formally publish this dissertation, but in the meantime, if you wish to read the piece for yourself, please request a copy via my email (g.wolferstan@gmail.com).",
        ],
      },
    ],
    screenshots: [
      "/project-images/designers-toolkit/1.png",
      "/project-images/designers-toolkit/2.png",
      "/project-images/designers-toolkit/3.png",
      "/project-images/designers-toolkit/4.png",
      "/project-images/designers-toolkit/5.jpg",
      "/project-images/designers-toolkit/6.png",
      "/project-images/designers-toolkit/7.png",
      "/project-images/designers-toolkit/8.png",
      "/project-images/designers-toolkit/9.png",
      "/project-images/designers-toolkit/10.png",
    ],
  },
  {
    slug: "quick-smith-reward",
    title: "Quick Smith – Reward System",
    subtitle: "PLACEHOLDER",
    image: "/project-images/quicksmith/thumbnail.png",
    description:
      "A reward system for the upcoming roguelike Quick Smith, a blacksmithing game inspired by Overcooked. The system includes unlockable new game+ modes, VIP customers, and evolving challenges to enhance player engagement and progression.",
    content: [
      {
        title: "Project Overview",
        details: [
          "Quick Smith is a roguelike game that blends blacksmithing and Overcooked-inspired gameplay, where players take on the role of an apprentice learning from a legendary ex-adventurer. As they craft weapons and armour, players navigate talent trees and challenges to refine their skills. For more information, the game’s webpage can be found here: https://www.elementalglyphstudio.com/quick-smith",
          "I worked with the studio over a number of weeks to iteratively develop a reward system for the game that enhances player engagement by introducing new game+ modifier cards, VIP customers with high-reward orders, challenges offering tokens for cosmetic items, and an array of Steam achievements to unlock.",
          "The system was designed to encourage ongoing player progression and replayability. Feedback from the Managing Director of Elemental Glyph Studio was extremely positive, with particular praise for my “attention to detail” and “going the extra mile”, noting that the work I put in was “extremely impressive, effective and concise” and that “it was an absolute pleasure working with [me]”. The managing director can be reached at his LinkedIn page for further reference if required: https://www.linkedin.com/in/jason-green-829713162/",
          "Below are a few screenshots of the game design document I wrote containing the reward system, shared with permission from Elemental Glyph Studio (the full document is under NDA).",
        ],
      },
    ],
    screenshots: [
      "/project-images/quicksmith/1.png",
      "/project-images/quicksmith/2.png",
      "/project-images/quicksmith/3.png",
      "/project-images/quicksmith/4.png",
    ],
    link: "https://www.elementalglyphstudio.com/quick-smith",
  },
  {
    slug: "queen-of-hearts",
    title: "Queen of Hearts",
    subtitle: "A streamlined 2D platformer",
    image: "/project-images/queen/SS2.png",
    description:
      "An early project that showcases my ability to create engaging gameplay without relying on text-based exposition. Includes dynamic health systems, collectibles, and intuitive level design.",
    content: [
      {
        title: "Project Overview",
        details: [
          "Queen of Hearts is a 2D platformer developed early in my degree. The game focuses on intuitive level design that communicates goals and mechanics without relying on text-based exposition, and showcases both my technical and design skills.",
        ],
      },
      {
        title: "Project Details",
        details: [
          "The game features a dynamic health system, collectible items, climbable ladders, patrolling enemies, and a final objective of collecting hearts to bring to the queen.",
          "The level design is carefully crafted to teach the player the mechanics through gameplay alone.",
          "Queen of Hearts demonstrates my ability to create engaging gameplay with well-thought-out level design and solid technical execution.",
        ],
      },
      {
        title: "My Contributions",
        details: [
          "Programming: Developed key gameplay systems, including the health bar, enemy AI, collectible items, and player abilities such as jumping and climbing.",
          "Level Design: Designed levels to intuitively teach players game mechanics, with a focus on natural progression and challenge.",
          "Sound and UI: Implemented a full UI system, along with sound effects and a custom soundtrack to enhance immersion.",
        ],
      },
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
    subtitle: "Balance or die!",
    image: "/project-images/Tilted/SS2.png",
    description:
      "A challenging game jam entry where players must balance a circus ball for 10 seconds. A polished experience demonstrating my ability to produce complete games under tight deadlines.",
    content: [
      {
        title: "Project Overview",
        details: [
          "Tilted is a game jam project where players must balance a circus ball on a tilting board for 10 seconds.",
          "The game is simple yet challenging, with erratic board movements and a drum roll to heighten tension as the player nears success.",
        ],
      },
      {
        title: "Project Details",
        details: [
          "The gameplay is straightforward but requires precision and timing. The player must keep the ball balanced for 10 seconds as the board tilts unpredictably.",
          "The challenge lies in the player's ability to react quickly to the shifting board. Tilted highlights my efficiency in game development and my ability to create a fully realized, polished game in a limited time frame.",
        ],
      },
      {
        title: "My Contributions",
        details: [
          "Design and Implementation: Designed the core gameplay loop and implemented the game in Unity, ensuring a polished and challenging experience.",
          "Time Management: Completed the entire game, from concept to final product, within the short time frame of a game jam, showcasing my ability to deliver under pressure.",
        ],
      },
    ],
    screenshots: [
      "/project-images/Tilted/SS1.png",
      "/project-images/Tilted/SS3.png",
      "/project-images/Tilted/SS4.png",
      "/project-images/Tilted/SS5.png",
      "/project-images/Tilted/SS6.png",
    ],
    link: "https://gemma-wolferstan.itch.io/tilted",
    video:
      "https://drive.google.com/file/d/1LXALZP2GdHQkvxXXgwmVVaCYno89UKQw/preview",
  },
  {
    slug: "gamejam",
    title: "Global Game Jam 2020 Merchandise ",
    subtitle: "Designing for the Global Game Jam",
    image: "/project-images/ggj/ggj.png",
    description:
      "Winner of an in-house competition to design promotional materials for the GGJ 2020. This project showcases my emotive design capabilities and my ability to see a project through from concept to final production.",
    content: [
      {
        title: "Project Overview",
        details: [
          "The GGJ 2020 Merchandise Design project involved creating promotional materials for the University of Suffolk’s participation in the Global Game Jam 2020.",
          "My design won an in-house competition and was used on posters, T-shirts, and mugs.",
        ],
      },
      {
        title: "Project Details",
        details: [
          "My design was selected from several entries to be the face of the university's GGJ 2020 involvement.",
          "I coordinated with a production company to bring the designs to life, ensuring they were applied consistently across various merchandise.",
          "This project showcases my design skills and my ability to see a creative vision through from concept to final production.",
        ],
      },
      {
        title: "My Contributions",
        details: [
          "Design: Created the winning design that was featured on promotional materials, demonstrating my strong design principles and creative vision.",
          "Project Coordination: Worked with a production company to produce the final products, overseeing quality control and ensuring the designs met the intended vision.",
          "Documentation: Provided detailed notes on my design process, showcasing my methodical approach and understanding of design theory.",
        ],
      },
    ],
    screenshots: [
      "/project-images/ggj/posterfinal.png",
      "/project-images/ggj/poster.png",
      "/project-images/ggj/mug.png",
      "/project-images/ggj/tshirt.png",
    ],
  },
  // Add more projects as needed
];

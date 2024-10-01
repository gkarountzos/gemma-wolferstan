import { FaUserCircle } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { AboutDataProps, ExperienceDataProps } from "@/types/types";
import currys from "@/public/currys.svg";
import egs from "@/public/egs2.png";
import gemmaImg from "@/public/theface.png";

export const aboutData: AboutDataProps[] = [
  {
    id: "about",
    icon: FaUserCircle,
    title: "About",
    content: [
      {
        image: gemmaImg,
        paragraph: [
          "Hi! I’m Gemma, a recent graduate from the University of Suffolk with a 1st-class degree in Game Development (Design). As part of my dissertation, I developed a designer’s toolkit titled ‘A Strategic Theatre for Survival’. This toolkit focuses on how survival instinct psychology can enhance horror game level design, creating more tense, challenging, and engaging experiences for players. In recognition of my work, I was honoured to receive the TIGA Graduate of the Year (Designer) 2024 award. I was also shortlisted for the more prestigious Outstanding Graduate of the Year (Designer) award – fingers crossed for the results in November!",
          "While my main strengths are in designing mechanical systems and level design, I’m well-versed in all aspects of the game design process. My work is driven by a desire to create emotionally impactful games that offer players unique, memorable, and engaging experiences.",
          "I am capable with a range of development tools, programming languages, and methods including Unity and C#, Unreal Engine and Blueprint, 3ds Max, and Adobe Photoshop. Additionally, I am also experienced with project management solutions like Trello, Agile methodology, and various version control solutions, helping me stay organized and collaborative in any development environment.",
          "Currently based in the UK, I’m open to opportunities both here and abroad, whether remote, in-office, or hybrid. I am excited to work together and get started on a major studio project!",
        ],
      },
    ],
  },
];

export const experienceData: ExperienceDataProps[] = [
  {
    id: "experience",
    icon: BsFillBriefcaseFill,
    title: "Experience",
    content: [
      {
        company: "Elemental Glyph Studios",
        companyIcon: egs,
        linkIcon: true,
        url: "https://www.elementalglyphstudio.com/",
        title: "Game Designer",
        year: "2024",
        details: [
          "Developed a reward system for the upcoming game ‘Quick Smith’ that retains player engagement without relying on traditional live service models.",
          "Designed daily and weekly challenges with token-based rewards for purchasing in-game skins.",
          "Designed unlockable 'new game+ modifier cards' to improve the game’s replayability.",
          "Created a variety of Steam achievements to further enhance player engagement.",
          "Received high praise and strong recommendations from the studio head for my contributions.",
        ],
      },
      {
        company: "Currys PC World",
        companyIcon: currys,
        linkIcon: true,
        url: "https://www.currys.co.uk/",
        title: "Computer Technician",
        year: "2019",
        details: [
          "Provided customer service and technical support, including computer repairs, demonstrating a high level of competency with technology. This experience reinforces my technical aptitude, a crucial asset in game development.",
        ],
      },
      {
        company: "Previous Roles",
        linkIcon: false,
        details: [
          "Held positions as a shop assistant, waitress, and fire warden. While not directly related to game design, these roles helped develop strong soft skills like teamwork, communication, and working under pressure.",
        ],
      },
    ],
  },
];

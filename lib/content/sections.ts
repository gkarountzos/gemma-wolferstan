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
          "Hi, I'm Gemma! I am a passionate Junior Game Designer with a love for crafting immersive and memorable gaming experiences. As a recent graduate with a first-class degree in Computer Game Design, I am eager to apply my skills to the mechanical systems and level designs of a major studio project. My work is driven by a desire to create emotionally impactful games that offer players unique and engaging experiences.",
          "I am proficient with Unity and Adobe Photoshop, with additional experience in Unreal Engine 4 and 3ds Max. While I'm not primarily a programmer, I continue to develop my coding skills to complement my design work, with a focus on C#. I also have experience using Trello, Visual Studio, and various version control solutions, all of which I use to streamline and manage the game development process.",
          "I'm excited to share my portfolio with you and look forward to the opportunity to collaborate on future projects!",
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
          "Developed a reward system for the upcoming game ‘Quick Smith’ that retains player engagement without relying on live service models.",
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

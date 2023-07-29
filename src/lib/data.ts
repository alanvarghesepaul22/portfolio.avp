import { RiJavascriptFill, RiReactjsFill } from "react-icons/ri";
import { SiNextdotjs, SiPhp, SiFigma } from "react-icons/si";
import { BiLogoNodejs, BiLogoMongodb, BiLogoGit } from "react-icons/bi";

export const links = [
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: "",
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: "",
  },
] as const;

export const skillsData = [
  {
    name: "JavaScript",
    Icon: RiJavascriptFill,
    bgColor: "#F0DB4F",
  },
  {
    name: "React",
    Icon: RiReactjsFill,
    bgColor: "#61DBFB",
  },
  {
    name: "Next",
    Icon: SiNextdotjs,
    bgColor: "#003862",
  },
  {
    name: "Node",
    Icon: BiLogoNodejs,
    bgColor: "#68A063",
  },
  {
    name: "MongoDB",
    Icon: BiLogoMongodb,
    bgColor: "#4DB33D",
  },
  {
    name: "Git",
    Icon: BiLogoGit,
    bgColor: "#F1502F",
  },
  {
    name: "PHP",
    Icon: SiPhp,
    bgColor: "#474A8A",
  },
  {
    name: "Figma",
    Icon: SiFigma,
    bgColor: " #ff00bf",
  },
] as const;

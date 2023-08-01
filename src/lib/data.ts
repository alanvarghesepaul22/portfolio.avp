import { RiJavascriptFill, RiReactjsFill } from "react-icons/ri";
import { SiNextdotjs, SiPhp, SiFigma } from "react-icons/si";
import {
  BiLogoNodejs,
  BiLogoMongodb,
  BiLogoGit,
  BiLogoTailwindCss,
  BiLogoCss3,
} from "react-icons/bi";

import { AiFillHtml5 } from "react-icons/ai";

import nssImage from "../../public/nssproject.png";
import cineworldImage from "../../public/cineworldproject.png";

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
    id: 1,
    title: "Cineworld- Movie API",
    description:
      "CineWorld is a movie and tv shows streaming website created using TMDB API in React-Next JS Framework and Tailwind CSS.",
    Icon: [RiReactjsFill, SiNextdotjs, RiJavascriptFill, BiLogoTailwindCss],
    imageUrl: cineworldImage,
    githubLink: "https://github.com/alanvarghesepaul22/CINEWORLD-NextJS",
    liveSiteLink: "https://cineworld-swart.vercel.app/",
  },
  {
    id: 2,
    title: "NSS Website with Blood Management System",
    description:
      "This is a website developed by the students of SCMS School of Engineering and Technology (SSET) for the National Service Scheme (NSS) Units of the college as a part of the micro project(42 Silicon valley). This website also contains a hyperlink to another website which is a E-Blood donation management system ",
    Icon: [AiFillHtml5, BiLogoCss3, RiJavascriptFill, SiPhp],
    imageUrl: nssImage,
    githubLink: "https://github.com/alanvarghesepaul22/nss-sset-website",
    liveSiteLink: "https://nss-sset.000webhostapp.com/",
  },
] as const;

export const skillsData = [
  {
    id: 1,
    name: "JavaScript",
    Icon: RiJavascriptFill,
    bgColor: "#F0DB4F",
  },
  {
    id: 2,
    name: "React",
    Icon: RiReactjsFill,
    bgColor: "#61DBFB",
  },
  {
    id: 3,
    name: "Next",
    Icon: SiNextdotjs,
    bgColor: "#003862",
  },
  {
    id: 4,
    name: "Node",
    Icon: BiLogoNodejs,
    bgColor: "#68A063",
  },
  {
    id: 5,
    name: "MongoDB",
    Icon: BiLogoMongodb,
    bgColor: "#4DB33D",
  },
  {
    id: 6,
    name: "Git",
    Icon: BiLogoGit,
    bgColor: "#F1502F",
  },
  {
    id: 7,
    name: "PHP",
    Icon: SiPhp,
    bgColor: "#474A8A",
  },
  {
    id: 8,
    name: "Figma",
    Icon: SiFigma,
    bgColor: " #ff00bf",
  },
] as const;

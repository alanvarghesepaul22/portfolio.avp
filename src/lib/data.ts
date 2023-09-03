import { RiJavascriptFill, RiReactjsFill } from "react-icons/ri";
import {
  SiNextdotjs,
  SiPhp,
  SiFigma,
  SiVite,
  SiRedux,
  SiOpenai,
} from "react-icons/si";
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
import articleEaserImage from "../../public/articleEaserBannerImg.png";

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
    Icon: [
      {
        Iconfile: RiReactjsFill,
        iconTooltip: "React JS",
      },
      {
        Iconfile: SiNextdotjs,
        iconTooltip: "Next JS",
      },
      {
        Iconfile: RiJavascriptFill,
        iconTooltip: "JavaScript",
      },
      {
        Iconfile: BiLogoTailwindCss,
        iconTooltip: "Tailwindcss",
      },
    ],
    imageUrl: cineworldImage,
    githubLink: "https://github.com/alanvarghesepaul22/CINEWORLD-NextJS",
    liveSiteLink: "https://cineworld-swart.vercel.app/",
  },
  {
    id: 2,
    title: "NSS Website with Blood Management System",
    description:
      "This is a website developed by the students of SCMS School of Engineering and Technology (SSET) for the National Service Scheme (NSS) Units of the college as a part of the micro project(42 Silicon valley). This website also contains a hyperlink to another website which is a E-Blood donation management system ",
    Icon: [
      {
        Iconfile: AiFillHtml5,
        iconTooltip: "Html",
      },
      {
        Iconfile: BiLogoCss3,
        iconTooltip: "Css",
      },
      {
        Iconfile: RiJavascriptFill,
        iconTooltip: "JavaScript",
      },
      {
        Iconfile: SiPhp,
        iconTooltip: "Php",
      },
    ],
    imageUrl: nssImage,
    githubLink: "https://github.com/alanvarghesepaul22/nss-sset-website",
    liveSiteLink: "https://nss-sset.000webhostapp.com/",
  },
  {
    id: 3,
    title: "ArticleEaser - An Article Summarization platform using OpenAI",
    description:
      "ArticleEaser is a cutting-edge online platform powered by OpenAI's ChatGPT 4, designed to simplify the process of summarizing lengthy articles. With the integration of RapidApi's API, it offers users a seamless and efficient way to generate concise, coherent summaries of complex articles, making information digestion a breeze.",
    Icon: [
      {
        Iconfile: SiVite,
        iconTooltip: "Vite JS",
      },
      {
        Iconfile: SiOpenai,
        iconTooltip: "OpenAI",
      },
      {
        Iconfile: SiRedux,
        iconTooltip: "Redux",
      },
      {
        Iconfile: BiLogoTailwindCss,
        iconTooltip: "Tailwindcss",
      },
    ],
    imageUrl: articleEaserImage,
    githubLink: "https://github.com/alanvarghesepaul22/ArticleEaser-AI",
    liveSiteLink: "https://article-easer-ai.vercel.app/",
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

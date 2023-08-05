"use client";
import React from "react";
import imageLogo from "../../public/avatar.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../../public/heroportfolio.json";
import darkAnimationData from "../../public/heroportfoliodark.json";
import { AiFillLinkedin, AiFillGithub, AiFillWechat } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { useTheme } from "../../context/theme";

export default function Intro() {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <section
        id="intro"
        className="w-full flex flex-wrap-reverse justify-center 
      items-center mt-6 sm:mt-[-2rem] lg:mt-24 py-5 scroll-mt-28"
      >
        <div>
          <div className="relative w-fit ml-10 lg:ml-0 sm:mt-[-4rem]">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "tween",
                duration: 0.2,
              }}
            >
              {" "}
              <Image
                src={imageLogo}
                height="192"
                width="192"
                alt="imageLogo"
                className="h-auto w-14 lg:w-20 rounded-full border-[.35rem] object-cover border-white dark:border-gray-400 shadow-xl"
              />
            </motion.div>

            <motion.span
              className="absolute bottom-0 right-0 text-xl lg:text-2xl animate-bounce"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}
            >
              👋
            </motion.span>
          </div>
          <motion.div
            className="mt-6 px-10 lg:px-2"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-lg sm:text-xl lg:text-2xl">
              Hey, my name is Alan.
            </p>
            <p className="text-xl sm:text-3xl lg:text-4xl mt-3">
              I’m a <span className="font-semibold">Full Stack Developer.</span>
            </p>
            <p className="mt-3 text-sm sm:text-base text-gray-700 dark:text-gray-300 sm:w-[30rem] md:w-[45rem] lg:w-[30rem] text-justify">
              Crafting captivating digital experiences, I transform ideas into
              elegant web solutions that engage and inspire users, one line of
              code at a time.
            </p>
            <div className="mt-6 flex items-center space-x-4">
              <Link
                href="https://www.linkedin.com/in/alan-varghese-paul-1676ba23a/"
                target="__blank"
              >
                <AiFillLinkedin className="text-3xl lg:text-4xl hover:text-blue-800" />
              </Link>

              <Link
                href="https://github.com/alanvarghesepaul22"
                target="__blank"
              >
                <AiFillGithub className="text-3xl lg:text-4xl hover:text-violet-800" />
              </Link>

              <Link
                href="#contact"
                className="text-sm md:text-base lg:text-lg font-medium border border-gray-900 space-x-2 flex items-center 
              rounded px-3 lg:px-5 py-1 shadow-sm hover:bg-gray-950 dark:hover:bg-gray-900 hover:text-white  transition-all"
              >
                <AiFillWechat className="text-xl lg:text-2xl" />
                <p>Get in touch</p>
              </Link>
            </div>
            <div className="flex items-center space-x-2 mt-6">
              <BsArrowRight className="text-xl text-gray-700 dark:text-gray-400" />
              <p className="md:text-lg">
                Download my{" "}
                <Link
                  href="../../public/Alan_Varghese_Paul_Resume.pdf"
                  download={true}
                  target="_blank"
                  className="underline font-semibold hover:text-blue-600"
                >
                  resume
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="lg:mt-[-5rem]"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
        >
          {theme == "light" ? (
            <Lottie
              animationData={animationData}
              className="w-[17rem] sm:w-[30rem] md:w-[30rem] lg:w-[35rem]"
            />
          ) : (
            <Lottie
              animationData={darkAnimationData}
              className="w-[17rem] sm:w-[30rem] md:w-[30rem] lg:w-[35rem]"
            />
          )}
        </motion.div>
      </section>
    </>
  );
}

"use client";
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.195,
      }}
      id="about"
      className=" flex flex-col items-center justify-center scroll-mt-24"
    >
      <div className="flex flex-col items-center justify-center w-full bg-gray-200 dark:bg-slate-950 py-14">
        <p className="text-lg md:text-2xl font-bold mt-1 mb-4">ABOUT ME</p>
        <p className="w-4/5 lg:w-3/5  md:text-[17px] text-justify md:mt-8 font-medium text-gray-900 dark:text-gray-300">
          Hello! I'm Alan Varghese Paul, currently pursuing B. Tech in Computer
          Science and Engineering at SCMS School of Engineering and Technology
          (SSET), Kerala, India. I’m a passionate and creative web developer
          with a strong love for crafting engaging and user-friendly websites. I
          have a strong foundation in front-end and back-end development, and I
          thrive on turning innovative ideas into functional, beautiful, and
          intuitive digital experiences. <br />
          <br /> My journey as a web developer began during my college years. I
          constantly seek to expand my knowledge and stay up-to-date with the
          latest trends and technologies in the fast-paced world of web
          development.
          <br /> <br /> Thank you for visiting my portfolio! I look forward to
          creating innovative web solutions together.
        </p>
      </div>
    </motion.section>
  );
}

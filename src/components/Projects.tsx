"use client"
import React from "react";
import Project from "./Project";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="mb-20  flex flex-col items-center 
      justify-center md:mt-10 lg:mt-12 scroll-mt-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.185,
      }}
    >
      <p className="text-lg md:text-2xl font-bold mt-1 mb-5">PROJECTS</p>
      <Project />
    </motion.section>
  );
}

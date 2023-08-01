"use client";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { useTheme } from "../../context/theme";
import { motion } from "framer-motion";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "tween",
        duration: 0.2,
      }}
      className="fixed bottom-5 right-5 bg-white dark:bg-slate-800 w-[3rem] h-[3rem] 
    bg-opacity-80 backdrop-blur-[0.5rem] border border-gray-400 dark:border-gray-700 border-opacity-40 
    shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] 
    active:scale-105 transition-all"
      onClick={toggleTheme}
    >
      {theme == "light" ? <BsSun /> : <BsMoon />}
    </motion.button>
  );
}

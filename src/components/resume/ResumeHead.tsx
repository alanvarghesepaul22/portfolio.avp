"use client"
import React from "react";
import { motion } from "framer-motion";

export default function ResumeHead() {
  return (
    <motion.header
      initial={{ y: -100, x: "0%", opacity: 0 }}
      animate={{ y: 0, x: "0%", opacity: 1 }}
      className="py-1 bg-zinc-800 text-gray-200"
    >
      <p className="text-center font-semibold">My Resume</p>
    </motion.header>
  );
}

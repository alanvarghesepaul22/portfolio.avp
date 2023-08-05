"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ResumeFooter() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.195,
      }}
      className="py-1 bg-zinc-800"
    >
      <p className="text-center text-gray-400">
        &copy; {new Date().getFullYear()} AVP. All rights reserved.
      </p>
    </motion.div>
  );
}

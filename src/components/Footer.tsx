"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.div
      className="py-7"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.195,
      }}
    >
      <p className="text-center text-gray-500">
        &copy; {new Date().getFullYear()} AVP. All rights reserved.
      </p>
    </motion.div>
  );
}

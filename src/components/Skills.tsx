"use client";
import React, { useState } from "react";
import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";

export default function Skills() {
  const [hoveredColor, setHoveredColor] = useState(null);

  function handleMouseEnter(color: any) {
    setHoveredColor(color);
  }

  const handleMouseLeave = () => {
    setHoveredColor(null);
  };

  return (
    <motion.section
      id="skills"
      className="w-full mb-10 md:mb-0  flex items-center justify-center scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
    >
      <div
        className="w-full bg-gray-200 py-8 mt-2 md:mt-0 md:py-16 
      lg:py-10 flex flex-col items-center justify-center"
      >
        <p className="text-lg md:text-2xl font-bold mt-1">SKILLS</p>

        <div className="w-4/5 sm:w-4/5 md:w-3/5 grid grid-cols-2 sm:grid-cols-4 mt-4">
          {skillsData.map((skill) => {
            const { id, name, Icon, bgColor } = skill;
            return (
              <div
                key={id}
                className="flex flex-col items-center px-4 sm:px-10 md:px-12 lg:px-6 
              py-2 md:py-5 border hover:border-gray-100 hover:shadow-sm transition-all"
              >
                <Icon
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                  style={{
                    color: hoveredColor === bgColor ? bgColor : null,
                    transition: "opacity 0.3s ease",
                  }}
                  onMouseEnter={() => handleMouseEnter(bgColor)}
                  onMouseLeave={handleMouseLeave}
                />
                <p className="font-semibold  md:text-lg mt-3">{name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

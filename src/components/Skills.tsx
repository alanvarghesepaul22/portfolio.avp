"use client";
import React, { useState } from "react";
import { skillsData } from "@/lib/data";

export default function Skills() {
  const [hoveredColor, setHoveredColor] = useState(null);

  function handleMouseEnter(color: any) {
    setHoveredColor(color);
  }

  const handleMouseLeave = () => {
    setHoveredColor(null);
  };

  return (
    <section className="w-full h-screen flex items-center justify-center">
      <div className="w-full bg-gray-200  py-16 flex flex-col items-center justify-center">
        <p className="text-xl font-semibold">SKILLS</p>

        <div className="flex flex-wrap w-[40rem] justify-center mt-4">
          {skillsData.map((skill) => {
            const { name, Icon, bgColor } = skill;
            return (
              <div className="flex flex-col items-center px-8 py-5">
                <Icon
                  className="text-6xl"
                  style={{
                    color: hoveredColor === bgColor ? bgColor : null,
                    transition: "opacity 0.3s ease",
                  }}
                  onMouseEnter={() => handleMouseEnter(bgColor)}
                  onMouseLeave={handleMouseLeave}
                />
                <p className="font-semibold text-lg mt-3">{name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { projectsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";

export default function Project() {
  return (
    <>
      <div className="w-4/5 flex flex-col items-center space-y-20 mt-10">
        {projectsData.map((project) => {
          const {
            id,
            title,
            description,
            Icon,
            imageUrl,
            githubLink,
            liveSiteLink,
          } = project;
          return (
            <div
              className="lg:w-4/5 flex flex-wrap md:flex-nowrap items-center justify-center"
              key={id}
            >
              <div className="w-2/4 md:w-3/5">
                <Image src={imageUrl} height={400} width={400} alt="image" />
              </div>
              <div className="flex flex-col items-center md:items-start w-fit space-y-4 md:ml-5">
                <p className="font-semibold  text-lg md:text-xl text-center">
                  {title}
                </p>

                <div className="w-4/5 sm:w-3/5 md:w-3/5 grid grid-cols-4 sm:grid-cols-4 ">
                  {Icon.map((Icon) => {
                    return (
                      <div
                        key={Icon}
                        className="flex flex-col items-center justify-center px-4 sm:px-10 md:px-12 lg:px-6 
              py-2 md:py-1"
                      >
                        <Icon className="text-3xl sm:text-4xl md:text-3xl" />
                      </div>
                    );
                  })}
                </div>

                <p className="w-full text-justify">{description}</p>

                <div className="grid sm:grid-cols-2 space-y-3 sm:space-y-0 sm:space-x-4 w-fit">
                  <Link
                    href={githubLink}
                    target="_blank"
                    className="flex items-center justify-center space-x-2 bg-gray-200 hover:bg-gray-300 dark:hover:bg-gray-400 px-4 rounded text-gray-950 transition-all py-1"
                  >
                    <AiFillGithub />
                    <p>Source code</p>
                  </Link>

                  <Link
                    href={liveSiteLink}
                    target="_blank"
                    className="flex items-center justify-center space-x-2 bg-gray-800 dark:bg-gray-800 hover:bg-gray-950 dark:hover:bg-gray-900  px-4 rounded text-white transition-all py-1"
                  >
                    <BsGlobe />
                    <p>Live Site</p>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

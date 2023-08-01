"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { links } from "@/lib/data";
import { motion } from "framer-motion";
let logoString = "<avp/>";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavShadow, setNavShadow] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const setShadow = () => {
      if (window.pageYOffset > 0) {
        setNavShadow(true);
      } else {
        setNavShadow(false);
      }
    };
    window.addEventListener("scroll", setShadow);
    return () => {
      window.removeEventListener("scroll", setShadow);
    };
  }, []);

  return (
    <motion.header
      className="w-full h-16 bg-gray-50 fixed top-0 z-[100]"
      initial={{ y: -100, x: "0%", opacity: 0 }}
      animate={{ y: 0, x: "0%", opacity: 1 }}
    >
      <nav
        className={`h-full flex flex-row items-center justify-between px-6 lg:px-10 py-4 ${
          isNavShadow ? "shadow" : null
        }`}
      >
        <Link
          href="#intro"
          className="font-semibold text-xl sm:text-2xl lg:text-3xl cursor-default"
        >
          {logoString}
        </Link>
        <div className="text-center hidden md:block">
          {links.map((link) => (
            <Link
              href={link.hash}
              key={link.hash}
              className="mx-5 px-1 font-medium hover:text-gray-950 text-gray-700"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="-mr-2 flex md:hidden">
          <button
            onClick={toggleNavbar}
            type="button"
            className="inline-flex items-center justify-center  text-gray-950 hover:text-light-white focus:outline-none"
          >
            <span className="sr-only">Menu</span>
            {!isOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden mt-5 px-3 ">
          <div>
            <ul className="list-none text-gray-200 space-y-1 mx-0 mb-3 text-base bg-zinc-900 py-1 rounded-md">
              {links.map((link) => (
                <li
                  className="py-2 px-5 rounded hover:text-primary hover:bg-zinc-800 border-b border-zinc-800 transition-all font-medium"
                  key={link.hash}
                >
                  <Link href={link.hash}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </motion.header>
  );
}

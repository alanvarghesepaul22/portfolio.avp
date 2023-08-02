"use client";
import React from "react";
import Lottie from "lottie-react";
import ContactMeLottie from "../../public/contactme.json";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
import Link from "next/link";
import { motion } from "framer-motion";
import { sendEmail } from "../../actions/sendEmail";
import ContactBtn from "./ContactBtn";
import toast from "react-hot-toast";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className=" mb-3 md:mb-20 flex flex-col items-center justify-center scroll-mt-16"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.195,
      }}
    >
      <div className=" flex flex-col justify-center items-center">
        <p className="text-lg md:text-2xl font-bold mt-10 mb-4 text-center">
          GET IN TOUCH
        </p>
        <div className="w-full grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-14 md:gap-20  md:mt-10 lg:mt-2 md:px-10">
          {/* left div */}
          <div className="flex flex-col justify-center items-start mt-4">
            {/* heading */}
            <div className=" w-full flex flex-col items-center md:items-start">
              <p className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
                Hey! Let’s Talk.
              </p>
              <p className=" md:text-xl text-gray-600 dark:text-gray-400">Send me a message.</p>
            </div>

            {/* form */}
            <div className="w-full sm:w-[23rem]">
              <form
                action={async (FormData) => {
                  const { data, error } = await sendEmail(FormData);

                  if (error) {
                    toast.error(error);
                    return;
                  }

                  toast.success("Email sent successfully!")
                }}
                className="mx-auto mb-0 mt-8 max-w-md space-y-4"
                autoComplete="off"
              >
                {/* name */}
                <div>
                  <div className="relative">
                    <input
                      name="senderName"
                      type="text"
                      required
                      maxLength={500}
                      className="w-full rounded bg-white dark:bg-gray-900 border
                       border-gray-300 dark:border-gray-700 placeholder:text-gray-400
                        dark:placeholder:text-gray-500 p-3 pe-12 text-base shadow"
                      placeholder="Your name"
                    />
                  </div>
                </div>
                {/* email */}
                <div>
                  <div className="relative">
                    <input
                      name="senderEmail"
                      type="email"
                      required
                      maxLength={500}
                      className="w-full rounded bg-white dark:bg-gray-900 border
                       border-gray-300 dark:border-gray-700 placeholder:text-gray-400
                        dark:placeholder:text-gray-500 p-3 pe-12 text-base shadow"
                      placeholder="Your email"
                    />
                  </div>
                </div>

                {/* textarea */}
                <div>
                  <div className="relative">
                    <textarea
                      name="senderMessage"
                      rows={5}
                      className="w-full rounded bg-white dark:bg-gray-900 border border-gray-300
                       dark:border-gray-700 placeholder:text-gray-400
                       dark:placeholder:text-gray-500 p-3 pe-12 text-base shadow resize-none"
                      placeholder="Your message goes here...."
                    ></textarea>
                  </div>
                </div>

                {/* button */}
                <ContactBtn />
              </form>
            </div>
          </div>

          {/* right div */}
          <div className=" flex  flex-col items-center ">
            {/* lottie file */}
            <div>
              <Lottie
                animationData={ContactMeLottie}
                className="w-[12rem] sm:w-[13rem] md:w-[18rem] lg:w-[18rem] dark:stroke-gray-400"
              />
            </div>
            {/* or contact */}
            <div className="flex flex-col items-center">
              <p className="font-medium text-xl text-gray-600 dark:text-gray-100">
                or say hello here!
              </p>

              <div className="flex flex-col mt-8 space-y-3">
                <Link
                  href="mailto:alanvarghesepaul29@gmail.com?subject=Portfolio Feedback"
                  className="flex items-center rounded bg-gray-200 dark:bg-gray-900 hover:bg-gray-300 dark:hover:bg-gray-800 px-4 py-2 space-x-4"
                >
                  <IoMdMail className="text-3xl text-yellow-600" />
                  <p className="font-medium text-gray-700 dark:text-gray-300">
                    alanvarghesepaul29@gmail.com
                  </p>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/alan-varghese-paul-1676ba23a/"
                  target="_blank"
                  className="flex items-center rounded bg-gray-200 dark:bg-gray-900 hover:bg-gray-300 dark:hover:bg-gray-800 px-4 py-2 space-x-4"
                >
                  <AiFillLinkedin className="text-3xl text-blue-800" />
                  <p className="font-medium text-gray-700 dark:text-gray-300">
                    alan-varghese-paul-1676ba23a
                  </p>
                </Link>
                <Link
                  href="https://github.com/alanvarghesepaul22"
                  target="_blank"
                  className="flex items-center rounded bg-gray-200 dark:bg-gray-900 hover:bg-gray-300 dark:hover:bg-gray-800 px-4 py-2 space-x-4"
                >
                  <AiFillGithub className="text-3xl text-gray-600" />
                  <p className="font-medium text-gray-700 dark:text-gray-300">
                    alanvarghesepaul22
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

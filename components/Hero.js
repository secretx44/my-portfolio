import { motion } from "framer-motion";
import React from "react";
import { GrDownload } from 'react-icons/gr';
import { IoIosChatbubbles } from "react-icons/io";
import About from "./About";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Hero = ( {children}) => {
  return (
    <div
    >
      <Navbar />
      <div className="h-full bg-lighter dark:bg-darker md:h-full">
        <motion.div className="container items-center max-w-6xl mx-auto xl:px-5 mb-52 sm:mb-auto"
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{  opacity: 0, 
                    transform: 'scale(0.5)', 
                    transition: { ease: 'easeIn', duration: 10 }  }}
                    transition={{
                    type: "spring", stiffness: 200,
                    ease: "easeInOut",
                    duration: 1.1
          }}
        >
          <div className="flex flex-wrap items-center sm:-mx-3">
            <div className="w-full md:w-1/2 md:px-3">
              <div className="w-full text-center md:text-left pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-10 md:pb-0">
                <motion.h1 className="-mb-6 text-4xl text-center md:text-left md:text-5xl text-gray-900 sm:text-4xl  dark:text-gray-200">
                  Hi, I'm  <span className="w-10 h-20 pt-2 font-mono font-bold animate-wiggle whitespace-nowrap text-brand-accent">
                    Jian Godito
                  </span>
                </motion.h1>
                 <p className="mx-auto text-sm text-gray-700 sm:text-base dark:text-gray-200 sm:max-w-md lg:text-xl md:max-w-3xl">
                  A 23 year old{" "}
                  <span className="font-bold ">Front-end Developer </span>
                  based in Laspinas, Philippines.
                </p>
                <div className="flex justify-center md:justify-start">
                  <button className="px-3 w-44 py-1 mr-2 text-center rounded-full dark:bg-lighter bg-darker hover:opacity-75 hover:dark:opacity-25 dark:text-darker text-lighter ">
                    <a
                        href="/files/myResumeJG.pdf"
                        alt="alt text"
                        target="_blank"
                      rel="noopener noreferrer"
                      className="flex my-auto font-poppins"
                    >Download CV <GrDownload className="flex m-auto" />
                    </a>
                  </button>
                 
                  <button className="px-3 py-1 rounded-full text-center dark:bg-lighter bg-darker hover:opacity-75 hover:dark:opacity-25 dark:text-darker text-lighter  ">
                    <a href="/contact" className="flex my-auto font-mono">
                      Contact Me
                      <IoIosChatbubbles className="flex my-auto ml-2" />
                    </a>
                  </button>
                </div>

                <div className="relative flex flex-col sm:flex-row sm:space-x-4"></div>
              </div>
            </div>
            <div className="order-first sm:w-1/1 mb-12 sm:order-last">
              <div className="hidden md:flex md:w-full h-auto overflow-hidden">
                <img
                  src="/Jian.jpg"
                  alt="profileImage"
                  className="rounded-3xl drop-shadow-6xl "
                />
              </div>
            </div>
          </div>
        </motion.div>
        <About />
        <Footer />
      </div>
    </div>
  );
};

export default Hero;

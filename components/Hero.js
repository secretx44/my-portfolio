import React from "react";
import Navbar from "./Navbar";
import About from "./About";
import Footer from "./Footer";
import { IoMdDownload, IoIosChatbubbles } from "react-icons/io";

const Hero = () => {
  return (
    <>
      <Navbar />
      <div className="h-full mt-24 bg-lighter dark:bg-darker md:h-full">
        <div className="container items-center max-w-6xl mx-auto xl:px-5 mb-52 sm:mb-auto">
          <div className="flex flex-wrap items-center sm:-mx-3">
            <div className="w-full md:w-1/2 md:px-3">
              <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                <h1 className="-mb-6 text-base text-gray-900 sm:text-4xl dark:text-gray-200">
                  Hi, I'm{" "}
                  <span className="w-10 h-20 pt-2 font-mono font-bold animate-wiggle whitespace-nowrap text-brand-accent">
                    Jian Godito
                  </span>
                </h1>
                <p className="mx-auto text-sm text-gray-700 sm:text-base dark:text-gray-200 sm:max-w-md lg:text-xl md:max-w-3xl">
                  A 23 year old{" "}
                  <span className="font-bold ">Front-end Developer </span>
                  based in Laspinas, Philippines.
                </p>
                <div className="flex">
                 
                  <button className="px-3 py-1 text-center bg-gray-500 rounded-full hover:opacity-50 text-lighter dark:text-darker ">
                    <a href="/contact" className="flex my-auto ">
                      Contact Me
                      <IoIosChatbubbles className="flex my-auto ml-2" />
                    </a>
                  </button>
                </div>

                <div className="relative flex flex-col sm:flex-row sm:space-x-4"></div>
              </div>
            </div>
            <div className="order-first w-full mb-12 md:w-1/2 sm:order-last ">
              <div className="w-full h-auto overflow-hidden">
                <img
                  src="/Jian.jpg"
                  alt="profileImage"
                  className="rounded-3xl drop-shadow-6xl "
                />
              </div>
            </div>
          </div>
        </div>
        <About />
        <Footer />
      </div>
    </>
  );
};

export default Hero;

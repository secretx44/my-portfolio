import React from "react";
import Navbar from "./Navbar";
import Layout from "./Layout";
import About from "./About";
import Footer from "./Footer";
const Hero = () => {
  return (
    <>
      <Navbar />

      <div className="bg-lighter dark:bg-darker  h-full md:h-full mt-24">
        <div className="text-start">
          <div className="py-12 mx-4 md:ml-24">
            <h1 className="font-Ubunt pt-44 text-2xl md:text-4xl ">
              Hi, I 'm a Frontend Developer{" "}
            </h1>
            <p className="font-fira pt-2">
              22 year old Frontend Developer based in Laspinas City.{" "}
            </p>
          </div>
          <img
            src="/Jian.jpg"
            alt="Jian"
            className="absolute drop-shadow-lg top-40 mx-32 w-1/2 md:w-auto md:top-36 -z-1 md:right-0 rounded-xl"
          />{" "}
        </div>{" "}
        <About />
        <Footer />
      </div>
    </>
  );
};

export default Hero;

import React from "react";
import { FaFacebookF, FaAngleDown, FaGithub, FaLinkedin } from "react-icons/fa";
const About = () => {
  return (
    <div>
      <div className="bg-lighter dark:bg-darker mt-24 md:h-screen md:max-w-9xl">
        <div className="px-4 ">
          <h2 className="py-8 font-mono text-6xl text-center md:text-9xl">
            About
          </h2>
          <h3 className="my-4 text-2xl md:text-start md:text-2xl ">
            Hello! I'm a Frontend Developer, Specializing in developing with
            HTML, CSS, JavaScript, and currently working PHP, Python.{" "}
          </h3>
        </div>
        <div className="block mx-auto md:flex md:justify-center ">
          <div className="mx-auto md:w-1/2 md:px-4 md:py-4 md:text-start md:text-left ">
            <h1 className="my-2 text-2xl text-center md:text-justify ">
              Contact
            </h1>{" "}
            <p className="mx-4 text-xl text-start md:mx-auto ">
              {" "}
              Feel free to ask me any questions you may have. I'm always open to
              new ideas and opportunities, Send me an{" "}
              <a href="mailto:Jgodito27@gmail.com" className="underline">
                Email
              </a>{" "}
            </p>{" "}
            <div className=" block text-xl space-y-6">
              <h1 className="my-12 text-2xl text-center md:text-justify ">
                Social Links{" "}
                <FaAngleDown className="animate-bounce mx-4 md:mx-1 my-1" />
              </h1>{" "}
              <p className="font-poppins">
                <a href="https://www.facebook.com/Gyaaannn " className="flex">
                  <FaFacebookF className="mx-4 md:mx-1 my-1" />
                  Facebook
                </a>
              </p>{" "}
              <p className="font-poppins">
                <a
                  href="https://www.linkedin.com/in/jian-godito-472345211/ "
                  className="flex"
                >
                  <FaLinkedin className="mx-4 md:mx-1 my-1" /> LinkedIn{" "}
                </a>{" "}
              </p>{" "}
              <p className="font-poppins">
                <a href="https://github.com/Jianuu " className="flex">
                  <FaGithub className="mx-4 md:mx-1 my-1" /> Github{" "}
                </a>{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
          <div className=" md:w-1/2 md:px-5 md:py-4 md:text-start">
            <p className="mx-4 my-4 text-justify  md:text-justify md:mx-auto">
              {" "}
              IT student from STI College Las Piñas.I took IT course because I
              want to make my own websites and I get excited and happy when I
              make my own websites And during this pandemic I decided to study
              by self learning to gain more knowledge about programming, Design
              and then after coding. I’ve read more books about programming and
              sometimes I’ll watch some videos that related about programming. I
              am proficient in Microsoft Word, Excel, Powerpoint and Frontend
              Developer. And as of now, i 'm still working and learning some
              language to improve my skills and to develop more skills to become
              a Frontend Developer.
            </p>
            <h1 className="px-2 py-2 mx-4 mt-12 text-xl font-extrabold text-center rounded-md dark:bg-lighter dark:text-darker text-lighter bg-darker w-43 ">
              Tech Stack
            </h1>
            <div className="flex flex-row flex-wrap justify-center gap-3  mt-8 ">
              <img
                src="/HTML.png"
                alt="HTML"
                className="px-2 py-2 rounded-md dark:bg-light bg-darker "
              />
              <img
                src="/CSS.png "
                alt="CSS"
                className="px-2 py-2 ml-2 rounded-md dark:bg-light bg-darker "
              />
              <img
                src="/JS.png "
                alt="JS"
                className="px-2 py-2 ml-2 rounded-md dark:bg-light bg-darker "
              />
              <img
                src="/tailwindcss.png"
                alt="Tailwind CSS"
                className="px-2 py-2 ml-2 rounded-md dark:bg-light bg-darker "
              />

              <img
                src="/react.png"
                alt="react"
                className="px-2 py-2 ml-2 rounded-md dark:bg-light bg-darker "
              />

              <img
                src="/nextjs.png"
                alt="Tailwind CSS"
                className="px-2 py-2 ml-2 rounded-md dark:bg-light bg-darker "
              />
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default About;

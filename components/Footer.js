import React from "react";
import { FaFacebookSquare, FaLinkedin, FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <div className="bg-lighter dark:bg-darker ">
        <div className="text-2xl mx-auto border-t-2 md:flex md:justify-around md:text-right md:max-w-6xl justify-center items-center">
          <h1 className="py-2 text-md md:text-2xl font-mono text-center md:mr-36 ">
            {" "}
            Jian G.{" "}
          </h1>{" "}
          <p className="text-center  text-sm md:text-right py-2 md:py-4 font-cutiv">
            &copy; 2022. JIAN G. All Rights Reserved.{" "}
          </p>{" "}
          <div className="flex py-2 md:py-4 justify-center gap-6 md:flex md:gap-4 ">
            <a href="https://www.facebook.com/Gyaaannn ">
              <FaFacebookSquare />
            </a>{" "}
            <a href="https://www.linkedin.com/in/jian-godito-472345211/ ">
              <FaLinkedin />
            </a>{" "}
            <a href="https://github.com/Jianuu ">
              <FaGithub />
            </a>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </footer>
  );
};

export default Footer;

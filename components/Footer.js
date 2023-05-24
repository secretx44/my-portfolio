import React from "react"
import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa"
const Footer = () => {
  return (
    <footer>
      <div className="bg-lighter dark:bg-darker ">
        <div className="text-2xl mx-auto border-t-2 border-darker dark:border-lighter md:flex md:justify-around md:text-right md:max-w-6xl justify-center items-center">
          <h1 className="py-2 text-md md:text-2xl font-quick text-center md:mr-36 ">
            {" "}
            JnGdt
          </h1>{" "}
          <p className="text-center  text-sm md:text-right py-2 md:py-4 font-quick">
            2023 Design and Developed by JnGdt
          </p>{" "}
          <div className="flex py-2 md:py-4 justify-center gap-6 md:flex md:gap-4 ">
            <a href="https://www.facebook.com/Gyaaannn">
              <FaFacebookSquare />
            </a>{" "}
            <a href="https://www.linkedin.com/in/jn-gdt/">
              <FaLinkedin />
            </a>{" "}
            <a href="https://github.com/secretx44 ">
              <FaGithub />
            </a>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </footer>
  )
}

export default Footer

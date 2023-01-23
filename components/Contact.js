import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="bg-lighter dark:bg-darker h-screen text-center">
        <h1 className="text-6xl md:text-9xl text-center font-mono">Contact</h1>
        <p className="mt-36 md:mt-36 mx-auto  text-4xl py-4 ">Get in touch</p>
        <p className="">
          {" "}
          Feel free to ask me any questions you may have. I'm always open to new
          ideas and opportunities, Send me an{" "}
          <a
            href="mailto:Jgodito27@gmail.com "
            class="border-b-2 border-cyan dark:border-b-2 dark:border-rose hover:animate-bounce"
          >
            Email
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;

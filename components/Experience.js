import React from "react";

const Experience = () => {
  return (
    <div>
      <section className="dark:bg-darker bg-lighter h-full md:h-full mt-24">
        <div>
          <h1 className="py-8 font-mono text-6xl text-center  md:text-9xl">
            Experience
          </h1>
        </div>
        <div className="grid grid-cols-1 max-w-xl mx-auto pt-40">
          <div className="relative z-10 border p-12 rounded-lg bg-darker dark:bg-lighter text-light dark:text-darker">
            <h1 className="font-mono text-2xl text-start">Graduated</h1>
            <p>STI College</p>
            <p>Bachelor of science in Information technology</p>
          </div>
          <div className="w-2 h-2 bg-dark -mt-2  dark:bg-lighter rounded-full relative z-10 animate-ping">
            <div className="w-2 h-2 bg-dark  dark:bg-lighter rounded-full relative z-10 animate-ping"></div>
          </div>
          <div className="w-1 h-24 bg-darker dark:bg-lighter -mt-2"></div>
        </div>
      </section>
    </div>
  );
};

export default Experience;

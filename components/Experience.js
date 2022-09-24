import React from "react";

const Experience = () => {
  return (
    <>
      <section className="h-full mt-24 dark:bg-darker bg-lighter md:h-full">
        <div>
          <h1 className="relative py-8 font-mono text-6xl text-center md:text-9xl">
            Experience
          </h1>
        </div>

        <div className="grid max-w-xl grid-cols-1 pt-40 mx-auto ">
          <div className="relative z-10 p-12 border rounded-lg bg-darker dark:bg-lighter text-light dark:text-darker ">
            <div className="">
              <h2 className="absolute px-1 py-1 mx-auto bg-gray-500 rounded-lg -bottom-3 text-light">
                2018-2022
              </h2>
            </div>
            <h1 className="font-mono text-2xl text-start ">Graduated</h1>
            <p>STI College, Laspinas City</p>
            <p>Bachelor of science in Information technology</p>
          </div>
          <div className="relative z-10 w-2 h-2 -mt-2 rounded-full bg-dark dark:bg-lighter animate-ping">
            <div className="relative z-10 w-2 h-2 rounded-full bg-dark dark:bg-lighter animate-ping"></div>
          </div>
          <div className="w-1 h-32 -mt-2 bg-darker dark:bg-lighter"></div>
        </div>

        {/* second card */}

        <div className="grid max-w-xl grid-cols-1 mx-auto ">
          <div className="relative z-10 p-12 border rounded-lg -top-2 bg-darker dark:bg-lighter text-light dark:text-darker ">
            <div className="">
              <h2 className="absolute px-1 py-1 mx-auto bg-gray-500 rounded-lg -bottom-3 text-light">
                2022
              </h2>
            </div>
            <h1 className="font-mono text-2xl text-start ">OJT</h1>
            <p>HUAWEI Technologies Co.</p>
            <p>Bachelor of science in Information technology</p>
          </div>
          <div className="relative z-10 w-2 h-2 -mt-2 rounded-full bg-dark dark:bg-lighter animate-ping">
            <div className="relative z-10 w-2 h-2 rounded-full bg-dark dark:bg-lighter animate-ping"></div>
          </div>
          <div className="w-1 h-24 -mt-3 bg-darker dark:bg-lighter"></div>
        </div>
             <div className="grid max-w-xl grid-cols-1 mx-auto ">
          <div className="relative z-10 p-12 border rounded-lg -top-2 bg-darker dark:bg-lighter text-light dark:text-darker ">
            <div className="">
              <h2 className="absolute px-1 py-1 mx-auto bg-gray-500 rounded-lg -bottom-3 text-light">
                2022
              </h2>
            </div>
            <h1 className="font-mono text-2xl text-start ">Front-end Developer</h1>
            <p>Dynamic Solutions</p>
            <p>Pasay City</p>
          </div>
          <div className="relative z-10 w-2 h-2 -mt-2 rounded-full bg-dark dark:bg-lighter animate-ping">
            <div className="relative z-10 w-2 h-2 rounded-full bg-dark dark:bg-lighter animate-ping"></div>
          </div>
          <div className="w-1 h-24 -mt-3 bg-darker dark:bg-lighter"></div>
        </div>
        
      </section>



    </>
  );
};

export default Experience;

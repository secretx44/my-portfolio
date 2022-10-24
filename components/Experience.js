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
            <div>
              <h2 className="absolute px-1 py-1 mx-auto bg-gray-500 rounded-lg -bottom-3 text-light">
                June - Current
              </h2>
            </div>
            <h1 className="font-mono text-2xl text-start ">Frontend Developer</h1>
            <p className="py-4 underline">Innovations Group</p>
            <p>As a Frontend Developer of that company, located at pasay city, 
            I am responsible for maintaining and Fixing errors of the websites or company projects. 
            there are almost 100 websites to develop and need to maintain. 
            And we use the Agile method in our company first we need the requirements, Design, Implementation, and Verification. Maintenance. 
            And System Testing and Deployment, Once you verify that your app is working, you’re ready to deploy it.
            That's why i need to communicate to the tester to do the testing phase before we deploy the projects.  And we used HTML, CSS3/Sass, 
            JavaScript, ReactJS, And TypeScript to develop the projects.</p>
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
                January - April 2022
              </h2>
            </div>
            <h1 className="font-mono text-2xl text-start ">OJT</h1>
            <p className="py-4 underline">HUAWEI Technologies Co.</p>
            <p>I learned about the AWS or Amazon Web Services. And how it works. AWS responsibility to managing the guest operating system, 
            And the MySQL engine on it.</p>
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
               July 2022
              </h2>
            </div>
            <h1 className="font-mono text-2xl text-start ">Graduated</h1>
            <p className="py-4">STI Laspinas</p>
            <p>Bachelor of science in Information technology</p>
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

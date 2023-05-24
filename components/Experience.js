import { motion } from "framer-motion"
import React from "react"
const Experience = () => {
  return (
    <>
      <section className="h-full dark:bg-darker bg-lighter md:h-full">
        <div>
          <h1 className="relative py-8 font-quick text-6xl text-center md:text-9xl">
            Experience
          </h1>
        </div>
        <motion.div
          className="grid max-w-xl grid-cols-1 pt-40 mx-auto px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        >
          <div className="grid max-w-xl grid-cols-1 mx-auto ">
            <div className="relative z-10 p-12 border rounded-lg -top-2 bg-darker dark:bg-lighter text-light dark:text-darker ">
              <div className="">
                <h2 className="absolute px-1 py-1 mx-auto bg-gray-500 rounded-lg -bottom-3 text-light">
                  March 2023 – Current
                </h2>
              </div>
              <h1 className="font-quick text-2xl text-start ">
                Front-end Developer
              </h1>
              <p className="py-4 text-4xl md:whitespace-nowrap">
                Ri-rance Realty Corporation
              </p>
              <ol className="list-disc">
                <li>
                  Optimize and add a new design for our existing projects.
                </li>
                <li>
                  Bug fix and adding a new features, to our existing projects.
                </li>
                <li>
                  Ensuring that the code is readable by other developers,
                  maintainable, and clean
                </li>
                <li>
                  Develop the some pages or component and fetch the API from the
                  backend to get the data of the third game party.
                </li>
                <li>
                  Collaboration with other teams like the backend, Product
                  designer, and QA's
                </li>
              </ol>
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
                  December - February 2023
                </h2>
              </div>
              <h1 className="font-quick text-2xl text-start ">
                Front-end Developer
              </h1>
              <p className="py-4 text-4xl">VavaSoftware Corp.</p>
              <ol className="list-disc">
                <li>
                  Maintain an existing website for Web applications Responsively
                  using vue.js and bootstrap
                </li>
                <li>Implementing new features and new themes for the Web</li>
                <li>
                  Add new pages on our projects and connect the Third Game party
                  from backend
                </li>
                <li>
                  Ensuring that the code is readable by other developers,
                  maintainable, and clean.
                </li>
                <li>Modify some part of the admin site of our project.</li>
                <li>
                  Develop a landing page for our web application using
                  Wordpress. ( Elementor )
                </li>
                <li>
                  We used a bitbucket and JIRA to track our commits or tasks.
                </li>
              </ol>
            </div>
            <div className="relative z-10 w-2 h-2 -mt-2 rounded-full bg-dark dark:bg-lighter animate-ping">
              <div className="relative z-10 w-2 h-2 rounded-full bg-dark dark:bg-lighter animate-ping"></div>
            </div>
            <div className="w-1 h-24 -mt-3 bg-darker dark:bg-lighter"></div>
          </div>
          <div className="relative z-10 p-12 border rounded-lg bg-darker dark:bg-lighter text-light dark:text-darker ">
            <div>
              <h2 className="absolute px-1 py-1 mx-auto bg-gray-500 rounded-lg -bottom-3 text-light">
                April - December 2022
              </h2>
            </div>
            <h1 className="font-quick text-2xl text-start ">
              Front-end Developer
            </h1>
            <p className="py-4 text-4xl">Innovations Group</p>
            <ol className="list-disc">
              <li>
                Built REST API that served data, Java for the backend, and
                ReactJS for the front end. And Jenkins for the testing, Build,
                and Deployment of the projects. And JIRA for the scrum or tasks
                management, where tasks log or mapped to customize the workflows
              </li>
              <li>
                Maintain the quality of the projects, making sure that the
                project is easy to use and easy to understand
              </li>
              <li>
                Update the User Interface, Fixing the bugs/Errors of the
                projects.
              </li>
              <li>
                Implementation, and Methodrification. Maintenance. System
                Testing and Deployment: Once you verify that the project is
                working.
              </li>
              <li>
                Reviewed code and conducted testing for additional features.
              </li>
              <li>Weekly Meetings about the progress of the projects.</li>
            </ol>
          </div>
          <div className="relative z-10 w-2 h-2 -mt-2 rounded-full bg-dark dark:bg-lighter animate-ping">
            <div className="relative z-10 w-2 h-2 rounded-full bg-dark dark:bg-lighter animate-ping"></div>
          </div>
          <div className="w-1 h-32 -mt-2 bg-darker dark:bg-lighter"></div>

          {/* second card */}

          <div className="grid max-w-xl grid-cols-1 mx-auto ">
            <div className="relative z-10 p-12 border rounded-lg -top-2 bg-darker dark:bg-lighter text-light dark:text-darker ">
              <div className="">
                <h2 className="absolute px-1 py-1 mx-auto bg-gray-500 rounded-lg -bottom-3 text-light">
                  January - April 2022
                </h2>
              </div>
              <h1 className="font-quick text-2xl text-start ">Internship</h1>
              <p className="py-4 underline">HUAWEI Technologies Co.</p>
              <p>
                I learned about the AWS or Amazon Web Services. And how it
                works. AWS responsibility to managing the guest operating
                system.
              </p>
            </div>
            <div className="relative z-10 w-2 h-2 -mt-2 rounded-full bg-dark dark:bg-lighter animate-ping">
              <div className="relative z-10 w-2 h-2 rounded-full bg-dark dark:bg-lighter animate-ping"></div>
            </div>
            <div className="w-1 h-24 -mt-3 bg-darker dark:bg-lighter"></div>
          </div>

          {/* third card */}

          <div className="grid max-w-xl grid-cols-1 mx-auto ">
            <div className="relative z-10 p-12 border rounded-lg -top-2 bg-darker dark:bg-lighter text-light dark:text-darker ">
              <div className="">
                <h2 className="absolute px-1 py-1 mx-auto bg-gray-500 rounded-lg -bottom-3 text-light">
                  July 2022
                </h2>
              </div>
              <h1 className="font-quick text-2xl text-start ">Graduated</h1>
              <p className="py-4 underline">STI Laspinas</p>
              <p>
                Bachelor of Science in Information Technology. Major in Web and
                Mobile Application Development.
              </p>
            </div>
            <div className="relative z-10 w-2 h-2 -mt-2 rounded-full bg-dark dark:bg-lighter animate-ping">
              <div className="relative z-10 w-2 h-2 rounded-full bg-dark dark:bg-lighter animate-ping"></div>
            </div>
            <div className="w-1 h-24 -mt-3 bg-darker dark:bg-lighter"></div>
          </div>
        </motion.div>
      </section>
    </>
  )
}

export default Experience

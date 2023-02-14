import { motion } from "framer-motion";
import React from "react";
import Tilt from "react-parallax-tilt";
function Project() {
  return (
    <div>
      <div className=" dark:bg-darker bg-lighter">
        <div className="">
          <h1 className="py-8 font-mono text-6xl text-center md:text-9xl">
            Projects
          </h1>
        </div>
        <motion.div className="grid max-w-6xl grid-cols-1 gap-12 px-8 py-8 mx-auto md:grid md:grid-cols-2 md:pb-40"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{  opacity: 0, 
            transform: 'scale(0.5)', 
            transition: { ease: 'easeIn', duration: 10 }  }}
            transition={{
            type: "spring", stiffness: 200,
            ease: "easeInOut",
            duration: 1.1
    }}
        >
             
          {/* GithubUsers */}

          <Tilt>
          <a
            className="block w-full drop-shadow-2xl"
            href="https://githubusers-mauve.vercel.app/"
          >
            <div className="relative overflow-hidden">
              <div className="object-cover h-72">
                <img
                  className="object-cover w-full h-full transition ease-out transform hover:scale-125 duration-2000 rounded-xl"
                  src="/githubUsers.png"
                />
              </div>
              <h1 className="absolute px-2 py-1 text-xl font-bold rounded-md top-1 left-5 text-cyan bg-darker">
                GithubUsers
              </h1>
            </div>
          </a>  
          </Tilt>

          {/* Shopiyey */}

        <Tilt>
          <a
            className="relative overflow-hidden"
            href="https://shopiyey-jngdt.vercel.app/"
          >
            <div className="relative overflow-hidden">
              <div className="object-cover h-72">
                <img
                  className="object-cover w-full transition ease-out transform hover:scale-125 duration-2000 rounded-xl"
                  src="/ecom.png"
                />
              </div>
              <h1 className="absolute px-2 py-1 text-xl font-bold rounded-md top-1 left-5 text-cyan bg-darker">
                SHOPIYEY
              </h1>
            </div>
          </a>
          </Tilt>

          {/* Countdown */}

          <Tilt>
          <a
            className="block w-full drop-shadow-2xl"
            href="https://count-down-nine.vercel.app/"
          >
            <div className="relative overflow-hidden">
              <div className="object-cover h-72">
                <img
                  className="object-cover w-full transition ease-out transform hover:scale-125 duration-2000 rounded-xl"
                  src="/countdown.jpg"
                />
              </div>
              <h1 className="absolute px-2 py-1 text-xl font-bold rounded-md top-1 left-5 text-cyan bg-darker">
                Countdown
              </h1>
            </div>
          </a>
          </Tilt>

          {/* WeatherApp */}

          <Tilt>
          <a
            className="block w-full drop-shadow-2xl"
            href="https://weather-app-six-blush.vercel.app/"
          >
            <div className="relative overflow-hidden">
              <div className="object-cover h-72">
                <img
                  className="object-cover w-full transition ease-out transform hover:scale-125 duration-2000 rounded-xl"
                  src="/weatherApp.png"
                />
              </div>
              <h1 className="absolute px-2 py-1 text-xl font-bold rounded-md top-1 left-5 text-cyan bg-darker">
                WeatherApp
              </h1>
            </div>
          </a>
          </Tilt>

          {/* Tictactoe */}
          
          <Tilt>
          <a
            className="block w-full drop-shadow-2xl"
            href="https://tictactoe-murex-theta.vercel.app/"
          >
            <div className="relative overflow-hidden">
              <div className="object-cover h-72">
                <img
                  className="object-cover w-full h-full transition ease-out transform hover:scale-125 duration-2000 rounded-xl"
                  src="/tictactoe.jpg"
                />
              </div>
              <h1 className="absolute px-2 py-1 text-xl font-bold rounded-md top-1 left-5 text-cyan bg-darker">
                Tictactoe
              </h1>
            </div>
          </a>
          </Tilt>


          {/* Food Recipes */}

          <Tilt>
              <a
            className="block w-full drop-shadow-2xl"
            href="https://food-recipes-rosy.vercel.app/"
          >
            <div className="relative overflow-hidden">
              <div className="object-cover h-72">
                <img
                  className="object-cover w-full h-full transition ease-out transform hover:scale-125 duration-2000 rounded-xl"
                  src="/foodRecipe.png"
                />
              </div>
              <h1 className="absolute px-2 py-1 text-xl font-bold rounded-md top-1 left-5 text-cyan bg-darker">
                FoodRecipes
              </h1>
            </div>
            </a>
            </Tilt>
        </motion.div>
      </div>
    </div>
  );
}

export default Project;

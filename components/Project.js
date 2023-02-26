import { motion } from "framer-motion"
import React from "react"

function Project() {
  return (
    <div>
      <div className=" dark:bg-darker bg-lighter">
        <div className="">
          <h1 className="py-8 font-mono text-6xl text-center md:text-9xl">
            Projects{" "}
          </h1>{" "}
        </div>{" "}
        <motion.div
          className="grid max-w-6xl grid-cols-1 gap-12 px-8 py-8 mx-auto md:grid md:grid-cols-2 md:pb-40"
          // whileHover={{ scale: 1.1, boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)" }}
          // whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        >
          {/* GithubUsers */}{" "}
          <motion.a
            className="block w-full drop-shadow-2xl"
            href="https://githubusers-mauve.vercel.app/"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2, ease: "easeInOut" },
              boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              borderRadius: 10,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <motion.div
              className="relative overflow-hidden"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0))",
                zIndex: 1,
                opacity: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transition: { duration: 0.2 },
              }}
              animate={{ opacity: 1 }}
            >
              <div className="object-cover h-72">
                <img
                  className="object-cover w-full h-full transition ease-out transform hover:scale-125 duration-2000 rounded-xl"
                  src="/githubUsers.png"
                />
              </div>{" "}
              <h1 className="absolute px-2 py-1 text-xl font-bold rounded-md top-1 left-5 text-cyan bg-darker">
                GithubUsers{" "}
              </h1>{" "}
            </motion.div>{" "}
          </motion.a>{" "}
          {/* Shopiyey */}{" "}
          <motion.a
            className="relative overflow-hidden"
            href="https://shopiyey-jngdt.vercel.app/"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2, ease: "easeInOut" },
              boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              borderRadius: 10,
              background: "#fff",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div className="relative overflow-hidden">
              <div className="object-cover h-72">
                <img
                  className="object-cover w-full transition ease-out transform hover:scale-125 duration-2000 rounded-xl"
                  src="/ecom.png"
                />
              </div>{" "}
              <h1 className="absolute px-2 py-1 text-xl font-bold rounded-md top-1 left-5 text-cyan bg-darker">
                SHOPIYEY{" "}
              </h1>{" "}
            </div>{" "}
          </motion.a>{" "}
          {/* Countdown */}{" "}
          <motion.a
            className="block w-full drop-shadow-2xl"
            href="https://imovie-three.vercel.app/"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2, ease: "easeInOut" },
              boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              borderRadius: 10,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div className="relative overflow-hidden">
              <div className="object-cover h-72">
                <img
                  className="object-cover w-full transition ease-out transform hover:scale-125 duration-2000 rounded-xl"
                  src="/imovie.png"
                />
              </div>{" "}
              <h1 className="absolute px-2 py-1 text-xl font-bold rounded-md top-1 left-5 text-cyan bg-darker">
                iMovie{" "}
              </h1>{" "}
            </div>{" "}
          </motion.a>{" "}
          {/* WeatherApp */}{" "}
          <motion.a
            className="block w-full drop-shadow-2xl"
            href="https://weather-app-six-blush.vercel.app/"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2, ease: "easeInOut" },
              boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              borderRadius: 10,
              // background: "#fff",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div className="relative overflow-hidden">
              <div className="object-cover h-72">
                <img
                  className="object-cover w-full transition ease-out transform hover:scale-125 duration-2000 rounded-xl"
                  src="/weatherApp.png"
                />
              </div>{" "}
              <h1 className="absolute px-2 py-1 text-xl font-bold rounded-md top-1 left-5 text-cyan bg-darker">
                WeatherApp{" "}
              </h1>{" "}
            </div>{" "}
          </motion.a>{" "}
          {/* Tictactoe */}{" "}
          <motion.a
            className="block w-full drop-shadow-2xl"
            href="https://tictactoe-murex-theta.vercel.app/"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2, ease: "easeInOut" },
              boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              borderRadius: 10,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div className="relative overflow-hidden">
              <div className="object-cover h-72">
                <img
                  className="object-cover w-full h-full transition ease-out transform hover:scale-125 duration-2000 rounded-xl"
                  src="/tictactoe.jpg"
                />
              </div>{" "}
              <h1 className="absolute px-2 py-1 text-xl font-bold rounded-md top-1 left-5 text-cyan bg-darker">
                Tictactoe{" "}
              </h1>{" "}
            </div>{" "}
          </motion.a>{" "}
          {/* Food Recipes */}{" "}
          <motion.a
            className="block w-full drop-shadow-2xl"
            href="https://food-recipes-rosy.vercel.app/"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2, ease: "easeInOut" },
              boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              borderRadius: 10,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div className="relative overflow-hidden">
              <div className="object-cover h-72">
                <img
                  className="object-cover w-full h-full transition ease-out transform hover:scale-125 duration-2000 rounded-xl"
                  src="/foodRecipe.png"
                />
              </div>{" "}
              <h1 className="absolute px-2 py-1 text-xl font-bold rounded-md top-1 left-5 text-cyan bg-darker">
                FoodRecipes{" "}
              </h1>{" "}
            </div>{" "}
          </motion.a>{" "}
        </motion.div>{" "}
      </div>{" "}
    </div>
  )
}

export default Project

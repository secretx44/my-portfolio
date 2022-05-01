import React from "react";
import Layout from "./Layout";
function Project() {
  return (
    <div>
      <div className="dark:bg-darker bg-lighter mt-24">
        <div className="">
          <h1 className="py-8 font-mono text-6xl text-center  md:text-9xl">
            Projects
          </h1>
        </div>
        <div className="grid max-w-6xl grid-cols-1 gap-12 px-8 py-8 mx-auto md:grid md:grid-cols-2 md:pb-40">
          <a
            className="block w-full drop-shadow-2xl"
            href="https://jgportfolio.vercel.app/"
          >
            <div className="relative overflow-hidden">
              <div className="object-cover h-72">
                <img
                  className="object-cover w-full h-full transition ease-out transform hover:scale-125 duration-2000 rounded-xl"
                  src="/JGportfolio.jpg"
                />
              </div>
              <h1 class="absolute px-2 py-1 text-xl font-bold rounded-md top-1 left-5 text-cyan bg-darker">
                2nd portfolio
              </h1>
            </div>
          </a>

          <a
            className="relative overflow-hidden"
            href="https://todo-lists-omega.vercel.app/"
          >
            <div className="relative overflow-hidden">
              <div className="object-cover h-72">
                <img
                  className="object-cover w-full transition ease-out transform hover:scale-125 duration-2000 rounded-xl"
                  src="/TodoLists.jpg"
                />
              </div>
              <h1 className="absolute px-2 py-1 text-xl font-bold rounded-md top-1 left-5 text-cyan bg-darker">
                Task Lists
              </h1>
            </div>
          </a>

          <a
            className="block w-full drop-shadow-2xl"
            href="https://countddown.vercel.app/"
          >
            <div className="relative overflow-hidden">
              <div className="object-cover h-72">
                <img
                  className="object-cover w-full  transition ease-out transform hover:scale-125 duration-2000 rounded-xl"
                  src="/countdown.jpg"
                />
              </div>
              <h1 className="absolute px-2 py-1 text-xl font-bold rounded-md top-1 left-5 text-cyan bg-darker">
                Countdown
              </h1>
            </div>
          </a>

          <a
            className="block w-full drop-shadow-2xl"
            href="https://weather-app-hazel-three.vercel.app/"
          >
            <div className="relative overflow-hidden">
              <div className="object-cover h-72">
                <img
                  className="object-cover w-full transition ease-out transform hover:scale-125 duration-2000 rounded-xl"
                  src="/weatherApp.jpg"
                />
              </div>
              <h1 className="absolute px-2 py-1 text-xl font-bold rounded-md top-1 left-5 text-cyan bg-darker">
                WeatherApp
              </h1>
            </div>
          </a>

          <a
            className="block w-full drop-shadow-2xl"
            href="https://tictactoe-livid.vercel.app/"
          >
            <div className="relative overflow-hidden">
              <div className="object-cover h-72">
                <img
                  className="object-cover w-full  transition ease-out transform hover:scale-125 duration-2000 rounded-xl"
                  src="/tictactor.jpg"
                />
              </div>
              <h1 className="absolute px-2 py-1 text-xl font-bold rounded-md top-1 left-5 text-cyan bg-darker">
                Tictactoe
              </h1>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="container mx-auto  max-w-9xl p-12 block md:flex justify-around">
      <Link href="/">
        <a className="font-Lato hover:opacity-50">
          <h1> JianGodito </h1>
          <p> Frontend Developer </p>
        </a>
      </Link>
      <div className="font-Fira flex space-x-4 items-center">
        <div className="hover:opacity-50">
          <Link href="/about">
            <a>About</a>
          </Link>
        </div>
        <div className="hover:opacity-50">
          <Link href="/project">
            <a>Projects</a>
          </Link>
        </div>
        <div className="hover:opacity-50">
          <Link href="/experience">
            <a>Experience</a>
          </Link>
        </div>
        <div className="hover:opacity-50">
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </div>
        <button
          label="Toggle Dark Mode"
          type="button"
          className=" p-3 rounded focus:outline-none"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {mounted && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              className="animate-bounce w-5 h-5 text-darker dark:text-yellow"
            >
              {theme === "dark" ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              )}{" "}
            </svg>
          )}{" "}
        </button>{" "}
      </div>
    </div>
  );
}

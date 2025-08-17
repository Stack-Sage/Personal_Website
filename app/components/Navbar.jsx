"use client";

import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation"; // <— for active link

const Navbar = () => {
  const [active, setActive] = useState(null);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname(); // <— get current route

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <header className=" w-fit mx-auto fixed top-0 z-50 bg-transparent min-w-screen flex items-center ">
      <div className="w-fit  mx-auto hover:-hue-rotate-15 transition-transform duration-300 ease-out delay-150  flex items-center mt-1  justify-between">
        
        {/* Nav Items */}
        <nav className="flex justify-center items-center lg:gap-16  md:gap:10 lg:space-x-5  outline-none bg-gradient-to-bl from-indigo-300 via-indigo-100 to-violet-300 dark:bg-gradient-to-bl dark:from-indigo-950 dark:via-black dark:to-indigo-900 hover:ring-1 hover:ring-indigo-900 dark:text-indigo-200 left text:sm md:text-md font-bold lg:text-lg lg:px-14 px-2 md:px-10 py-1  rounded-full text-indigo-900">
          
          <Link
            href="/"
            className={` px-3 py-1 rounded-3xl ${
              pathname === "/" ? "bg-indigo-950  text-white dark:bg-indigo-700 dark:text-indigo-100" : ""
            }`}
          >
            Home
          </Link>

          <Link
            href="/samples"
            className={` px-3 py-1 rounded-3xl ${
              pathname === "/samples" ? "bg-indigo-950 text-white dark:bg-indigo-700 dark:text-indigo-100" : ""
            }`}
          >
            Work
          </Link>

          <Link
            href="/services"
            className={` px-3 py-2 rounded-3xl ${
              pathname === "/services" ? "bg-indigo-950 text-white dark:bg-indigo-800 dark:text-indigo-100" : ""
            }`}
          >
            Services
          </Link>

          <Link
            href="/contact"
            className={` px-3 py-1 rounded-3xl ${
              pathname === "/contact" ? "bg-indigo-950 text-white dark:bg-indigo-700 dark:text-indigo-100" : ""
            }`}
          >
            Contact
          </Link>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="ml-4 p-2 rounded-full bg-gray-800 text-gray-100 hover:bg-gray-700 transition-colors duration-300"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>

        </nav>
      </div>
    </header>
  );
};

export default Navbar;

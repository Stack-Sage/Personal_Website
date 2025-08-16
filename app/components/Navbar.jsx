"use client";

import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

const Navbar = () => {
  const [active, setActive] = useState(null);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <header className="w-full fixed z-50 bg-transparent">
      <div className="w-fit hover:scale-[1.02] transition-transform duration-300 mx-auto px-2 py-3 flex items-center justify-between">
        
        {/* Nav Items */}
        <nav className="flex lg:gap-16 gap-4 md:gap:10 lg:space-x-5 bg-gradient-to-bl from-indigo-400 via-cyan-200 to-indigo-400 dark:bg-gradient-to-bl dark:from-indigo-950 dark:via-black dark:to-indigo-900 ring-1 ring-indigo-900 dark:text-indigo-200 left text:md font-bold lg:text-lg   px-10 py-2 rounded-full text-indigo-900  ">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-indigo-400  transition-colors">
            Home
          </Link>
          <Link href="/samples" className="hover:text-blue-600 dark:hover:text-indigo-400  transition-colors">
            Work
          </Link>
          <Link href="/services" className="dark:hover:text-indigo-400   hover:text-blue-600 transition-colors">
            Services
          </Link>
          <Link href="/contact" className="hover:text-blue-600 dark:hover:text-indigo-400  transition-colors">
            Contact
          </Link>
        </nav>

        {/* Theme Toggle */}
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="ml-6 p-2 rounded-full bg-gray-800 text-gray-100 hover:bg-gray-700 transition-colors duration-300"
          aria-label="Toggle Theme"
        >
          {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;

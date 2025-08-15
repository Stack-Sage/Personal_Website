"use client";
import Link from "next/link";
import { Cover } from "../ui/cover";
import { FlipWords } from "../ui/flip-words";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Card from "./Cube";

const Hero = () => {
  const [showContent, setShowContent] = useState(false);
  const words = ["React JS", "Next JS", "3D UI"];

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (

    <div className="flex justify-around md:flex-row flex-col lg:flex-row  lg:w-full max-w-screen gap-10 ">

    <div className="relative w-fit min-h-fit lg:mt-10 md:mt-10 flex flex-col lg:flex-col -mt-28 items-center justify-center text-center gap-10 px-6 lg:px-20 text-white overflow-hidden">
      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className=" flex justify-center items-center perspective-1000"
        >
        <img
          src="/images/bg-removed.png"
          alt="Hero Visual"
          className="w-full rounded-full object-top shadow-2xl contrast-125 brightness-110 transition-all duration-500 transform hover:scale-110 hover:rotate-1 -rotate-3 hover:shadow-3xl cursor-pointer"
          />
      </motion.div>

      {/* Content Section */}
      {showContent && (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col justify-center items-center  space-y-6 max-w-xl"
        >
          <h1 className="lg:text-5xl text-3xl md:text-4xl font-extrabold tracking-wide text-neutral-200">
            Hi, I'm Adarsh
          </h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col md:flex-row items-center justify-center text-2xl md:text-3xl lg:text-4xl font-semibold gap-2 text-neutral-200 "
          >
            I Develop
            <span className=" flex font-bold lg:text-4xl md:text-4xl    text-3xl">
              <FlipWords words={words} />
            </span>
            <span className="text-neutral-300">Websites...</span>
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-lg lg:text-2xl md:text-xl text-cyan-300 italic"
            >
            <Cover>
              Build amazing websites  at warp speed
            </Cover>
          </motion.h3>

          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/samples">
                <button className="px-6 cursor-pointer py-3 bg-cyan-500 text-black font-bold rounded-full shadow-lg hover:bg-cyan-400 transition-all text-lg">
                  View Projects
                </button>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact">
                <button
                  className="px-6 py-3 border cursor-pointer border-gray-600 rounded-full text-white font-bold 
                     bg-slate-950 hover:contrast-125 text-lg transition-all"
                >
                  Contact Me
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-10 mt-2">
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://github.com/Stack-Sage"
              target="_blank"
              >
              <FaGithub size={28} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://linkedin.com/in/adarsh-pathania177/"
              target="_blank"
              >
              <FaLinkedin size={28} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://twitter.com/yourusername"
              target="_blank"
              >
              <FaTwitter size={28} />
            </motion.a>
          </div>
        </motion.div>
      )}



    </div>
        {/* Card Section */}
      <div className="flex items-center justify-center mt-10 lg:mt-0 md:mt-0 lg:scale-125 md:scale-90 scale-80 fade-up">
        <Card />
      </div>
      </div>
  );
};

export default Hero;

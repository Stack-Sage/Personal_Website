"use client";
import React from "react";
import { HeroParallaxDemo } from "./Parallax";

import SkillsGrid from "./ImgCard";
import { useScrollAnimations } from "../scrollAnimations"; // Import hook
import Hero from "./Hero"

const Body = () => {
  // Trigger animations
  useScrollAnimations();

  return (
    <div>
      <div className="flex scale-90">
        <Hero/>
      </div>
    

      {/* Skills Grid Section */}
      <div className="flex items-center justify-center mt-20 scale-in">
        <SkillsGrid />
      </div>
    </div>
  );
};

export default Body;

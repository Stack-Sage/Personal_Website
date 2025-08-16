"use client";
import React from "react";

import { PinContainer } from "../ui/3d-pin";

export function AnimatedPinDemo() {
  return (
    (<div className="h-full lg:pt-[100px] gap-20 flex-col  w-full lg:w-fit flex items-center justify-center invert hue-rotate-180  ">
      <PinContainer title="Visit LinkedIn " href="https://www.linkedin.com/in/adarsh-pathania177/">
        <div
          className="flex  dark:invert dark:hue-rotate-180  dark:bg-black basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Linkedin Account
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Connect with me and let us collaborate
            </span>
          </div>
          <img src="https://www.jbg.org.uk/wp-content/uploads/2023/09/linkedin3.jpg" alt="LinkedIn Image" className=" mt-4"/>
        </div>
      </PinContainer>
      <PinContainer title="Visit GitHub" href="https://github.com/Stack-Sage">
        <div
          className="flex basis-full flex-col p-4 tracking-tight dark:invert dark:hue-rotate-180 dark:bg-black text-slate-300 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            GitHub Account
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-400 ">
              Check out my projects and code experiments
            </span>
          </div>
        
          <img src="https://www.legitsecurity.com/hs-fs/hubfs/GithubSecurity.webp?width=2100&height=1200&name=GithubSecurity.webp" alt="Github Image" className="mt-4 "/>
          
        </div>
      </PinContainer>

    </div>)
  );
}

'use client'
import Image from "next/image";


import { Button } from "./components/ui/button";


import AnimatedWrapper from "./components/homeCom/AnimatedWrapper";
import AnimatedWrapper2 from "./components/homeCom/AnimatedWrapper2";

import Body from "./components/homeCom/Body"
import {TracingBeam} from "./components/ui/tracing-beam"




export default function Home() {
  
  return (
    <>
      <div className="z-10 min-h-screen  max-w-screen min-w-[100vw] ">
        <div className=" flex  pt-[100px] lg:pt-[0px] flex-col dark:bg-gradient-to-b dark:from-[#05011e] dark:via-black dark:to-[#070122] theme-bg
 ">
          <div className=" min-w-[100vw]  ">
            <AnimatedWrapper2>
         
           
            <Body/>
           
        
            </AnimatedWrapper2>
          </div>
          
          
        </div>
      </div>
    </>
  );
}

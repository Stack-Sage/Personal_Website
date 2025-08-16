'use client'
import React from 'react'

import { AnimatedPinDemo } from '../components/contactCom/Social'
import { GlobeDemo } from '../components/contactCom/Globe'
import ContactForm from '../components/contactCom/ContactForm'

const Contact = () => {
  return (
    <div className="relative w-full min-h-screen dark:bg-gradient-to-br dark:from-blue-950 via-black to-blue-950
     overflow-hidden  ">
      
      {/* Globe Background */}
      <div className="absolute lg:top-52  left-0 -top-28 items-center justify-center dark:invert lg:left-4/12  w-full lg:h-fit lg:z-30   z-20 dark:-hue-rotate-180 saturate-100 hover:saturate-150  contrast-100 hover:contrast-150 hover:hue-rotate-180  
  transition-[transform,filter] duration-1000 delay-100 ease-in-out  lg:w-fit ">
        <GlobeDemo />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 w-full h-full flex flex-col lg:flex-row items-center lg:items-start justify-start p-6 lg:p-12 pt-10 gap-12">

        {/* Form */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <ContactForm />
        </div>

        {/* Pin Demo */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-6 lg:mt-0">
          <AnimatedPinDemo />
        </div>

      </div>
    </div>
  )
}

export default Contact

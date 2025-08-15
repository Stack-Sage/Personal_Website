"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimations() {
  useEffect(() => {
    // Kill old triggers to avoid duplicates
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    // Fade Up
    gsap.utils.toArray(".fade-up").forEach((el) => {
      gsap.fromTo(el,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Scale In
    gsap.utils.toArray(".scale-in").forEach((el) => {
      gsap.fromTo(el,
        { scale: 0.85, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Parallax
    gsap.utils.toArray(".parallax").forEach((el) => {
      gsap.to(el, {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          scrub: true,
        },
      });
    });
  }, []);
}

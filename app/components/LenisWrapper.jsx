"use client";

import { ReactLenis, useLenis } from "lenis/react";

export default function LenisWrapper({ children }) {
  const lenis = useLenis((l) => {
    console.log(l);
  });

  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        lerp: 0.1,
        smoothWheel: true,
        smoothTouch: false,
        direction: "vertical",
      }}
    >
      {children}
    </ReactLenis>
  );
}

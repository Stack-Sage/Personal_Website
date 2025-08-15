import React from "react";
import Link from "next/link";

import { MacbookScroll } from "../ui/macbook-scroll";

export function MacbookScrollDemo() {
  return (
    (<div className="overflow-hidden  w-full">
      <MacbookScroll
        title={
          <span>
            Wanna See Something cool. <br /> Scroll Down.
          </span>
        }
        badge={
          <Link href="https://adarsh-v1.onrender.com">
            <Badge className="h-10 w-10 transform -rotate-12" />
          </Link>
        }
        src={`/images/anihive.png`}
        showGradient={true} />
    </div>)
  );
}
// Peerlist logo
const Badge = ({
  className
}) => {
  return (
    (<svg
      width="24"
      height="24"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}>
     
    </svg>)
  );
};

"use client";

import { useScrollAnimations } from "../components/scrollAnimations";

export default function ScrollAnimationWrapper({ children }) {
  useScrollAnimations();
  return <>{children}</>;
}

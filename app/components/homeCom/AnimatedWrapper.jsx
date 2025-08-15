"use client";
import { motion } from "framer-motion";

const AnimatedWrapper = ({ children, className }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: 50, }}
    
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease:"easeIn" }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedWrapper;

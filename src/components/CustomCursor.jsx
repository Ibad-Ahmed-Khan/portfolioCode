import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Loader1 from "../assets/Loader1.png";

const spinVariants = {
  animate: {
    rotate: [0, 360],
    transition: {
      repeat: Infinity,
      duration: 2,
      ease: "linear",
    },
  },
};

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        width: "24px", // Resizing the cursor
        height: "24px",
        backgroundImage: `url(${Loader1})`,
        backgroundSize: "cover",
        pointerEvents: "none",
      }}
      variants={spinVariants}
      animate="animate"
    />
  );
};

export default CustomCursor;

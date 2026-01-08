"use client";
import { Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionImage = motion.create(Image);

export default function AnimatedLogo() {
  return (
    <MotionImage
      src="/KpopRoad.png"
      alt="KPOP ROAD"
      w={{ base: "200px", sm: "250px", md: "400px", lg: "500px" }}
      animate={{
        y: ["-10px", "10px", "-10px"],
        filter: [
          "drop-shadow(0 0 8px rgba(200, 117, 255, 0.4))",
          "drop-shadow(0 0 15px rgba(200, 117, 255, 0.6))",
          "drop-shadow(0 0 8px rgba(200, 117, 255, 0.4))",
        ],
      }}
      transition={{
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
      }}
    />
  );
}

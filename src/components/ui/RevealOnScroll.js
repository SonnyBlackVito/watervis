"use client";

import { Box } from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const MotionDiv = motion.create(Box);

export default function RevealOnScroll({
  children,
  initialY = 24,
  duration = 0.5,
  delay = 0,
  ...props
}) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px 0px -100px 0px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const variants = {
    hidden: { opacity: 0, y: initialY, filter: "blur(4px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  };

  return (
    <MotionDiv
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration, ease: "easeOut", delay }}
      {...props}
    >
      {children}
    </MotionDiv>
  );
}

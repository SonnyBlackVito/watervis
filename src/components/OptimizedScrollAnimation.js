// components/OptimizedScrollAnimation.js (FINAL - RECOMMENDED)
"use client";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, useMemo } from "react";

// Static animation definitions (prevents re-creation)
const animations = {

  fadeInUp: { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } },
  fadeInDown: { hidden: { opacity: 0, y: -24 }, visible: { opacity: 1, y: 0 } },
  fadeInLeft: { hidden: { opacity: 0, x: -24 }, visible: { opacity: 1, x: 0 } },
  fadeInRight: { hidden: { opacity: 0, x: 24 }, visible: { opacity: 1, x: 0 } },
  fadeIn: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  scaleIn: { hidden: { opacity: 0, scale: 0.96 }, visible: { opacity: 1, scale: 1 } },
  slideInUp: { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } }
};

const OptimizedScrollAnimation = ({ 
  children, 
  animation = "fadeInUp", 
  duration = 0.4,
  delay = 0,
  className = "",
  ...props 
}) => {
  const ref = useRef(null);
  // const prefersReducedMotion = useReducedmotion.create();
  const prefersReducedMotion = useReducedMotion();
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  // Memoized animation and transition
  const variant = animations[animation] || animations.fadeInUp;
  const transition = useMemo(() => 
    prefersReducedMotion 
      ? { duration: 0.01 } 
      : { duration, delay, ease: [0.23, 1, 0.32, 1] }
  , [duration, delay, prefersReducedMotion]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variant}
      transition={transition}
      style={{ willChange: isInView ? "auto" : "transform, opacity" }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default OptimizedScrollAnimation;
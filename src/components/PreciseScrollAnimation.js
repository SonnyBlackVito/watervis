// components/PreciseScrollAnimation.js (Fixed trigger timing)
"use client";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, useMemo, use } from "react";

// Static animation definitions
const animations = {
  fadeInUp: { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } },
  fadeInDown: { hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } },
  fadeInLeft: { hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } },
  fadeInRight: { hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } },
  fadeIn: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  scaleIn: { hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } },
  slideInUp: { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }
};

const PreciseScrollAnimation = ({ 
  children, 
  animation = "fadeInUp", 
  duration = 0.5,
  delay = 0,
  threshold = 0.2, 
  triggerMargin = "0px",
  className = "",
  ...props 
}) => {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const isInView = useInView(ref, {
    once: true,
    amount: threshold,
    margin: triggerMargin
  });

  // Memoized animation and transition
  const variant = animations[animation] || animations.fadeInUp;
  const transition = useMemo(() => 
    prefersReducedMotion 
      ? { duration: 0.01 } 
      : { 
          duration, 
          delay, 
          ease: [0.25, 0.46, 0.45, 0.94],
          type: "tween"
        }
  , [duration, delay, prefersReducedMotion]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variant}
      transition={transition}
      style={{ 
        willChange: isInView ? "auto" : "transform, opacity"
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default PreciseScrollAnimation;
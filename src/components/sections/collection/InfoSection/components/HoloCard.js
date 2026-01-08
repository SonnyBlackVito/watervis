"use client";

import { useRef, useState } from "react";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import styles from "./HoloCard.module.css";

export default function HoloCard({ 
  animated = false, 
  className = "", 
  variant = "default",
  src = "/collection/fearless-bulls.webp",
  alt = "Fearless Bulls"
}) {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);

  const applyPos = (clientX, clientY) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    
    const l = clientX - r.left;
    const t = clientY - r.top;
    const h = r.height;
    const w = r.width;
    
    const px = Math.abs(Math.floor(100 / w * l) - 100);
    const py = Math.abs(Math.floor(100 / h * t) - 100);
    const pa = (50 - px) + (50 - py);
    
    const lp = 50 + (px - 50) / 1.5;
    const tp = 50 + (py - 50) / 1.5;
    const px_spark = 50 + (px - 50) / 7;
    const py_spark = 50 + (py - 50) / 7;
    const p_opc = 20 + (Math.abs(pa) * 1.5);
    
    const ty = ((tp - 50) / 2) * -1;
    const tx = ((lp - 50) / 1.5) * 0.5;

    el.style.setProperty("--gradX", `${lp}%`);
    el.style.setProperty("--gradY", `${tp}%`);
    el.style.setProperty("--sparkX", `${px_spark}%`);
    el.style.setProperty("--sparkY", `${py_spark}%`);
    el.style.setProperty("--opacity", `${p_opc / 100}`);
    
    el.style.transform = `rotateX(${ty}deg) rotateY(${tx}deg)`;
  };

  const onEnter = () => {
    setHovered(true);
    const el = ref.current;
    if (el) {
      el.classList.remove("animated");
    }
  };
  const onLeave = () => {
    setHovered(false);
    const el = ref.current;
    if (!el) return;
    
    el.style.transform = "rotateX(0deg) rotateY(0deg)";
    el.style.setProperty("--gradX", "50%");
    el.style.setProperty("--gradY", "50%");
    el.style.setProperty("--sparkX", "50%");
    el.style.setProperty("--sparkY", "50%");
    el.style.setProperty("--opacity", "0.75");
    
    setTimeout(() => {
      if (el) {
        el.classList.add("animated");
      }
    }, 2500);
  };

  return (
    <Box className={styles.cardFrame}>
      <Box
        ref={ref}
        className={`${styles.card} ${hovered ? styles.isHovered : ""} ${animated ? styles.animated : ""} ${variant !== "default" ? styles[variant] : ""} ${className}`}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        onMouseMove={(e) => applyPos(e.clientX, e.clientY)}
        onTouchStart={(e) => {
          setHovered(true);
          const t = e.touches[0];
          applyPos(t.clientX, t.clientY);
        }}
        onTouchMove={(e) => {
          const t = e.touches[0];
          applyPos(t.clientX, t.clientY);
        }}
        onTouchEnd={onLeave}
      >
        <Image
          src={src}
          alt={alt}
          width={560}
          height={700}
          sizes="(max-width: 768px) 100vw, 560px"
          style={{ width: "100%", height: "auto", display: "block" }}
          priority
        />
      </Box>
    </Box>
  );
}

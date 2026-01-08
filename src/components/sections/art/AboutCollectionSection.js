"use client";

import Picture1 from "../../../../public/art/02.webp";
import Picture2 from "../../../../public/art/026.webp";
import Picture3 from "../../../../public/art/012.webp";
import Picture4 from "../../../../public/art/01.webp";
import Picture5 from "../../../../public/art/020.webp";
import Picture6 from "../../../../public/art/06.webp";
import Picture7 from "../../../../public/art/08.webp";
import Picture8 from "../../../../public/art/010.webp";

import Image from "next/image";
import { Box, Text } from "@chakra-ui/react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionTemplate,
} from "framer-motion";
import { useRef, useMemo, useEffect } from "react";

const MotionBox = motion(Box);
const MotionText = motion(Text);

export default function AboutCollectionSection() {
  const container = useRef(null);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);
  const scale10 = useTransform(scrollYProgress, [0, 1], [1, 10]);

  const opacityImg = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const smoothOpacity = useSpring(opacityImg, {
    stiffness: 80,
    damping: 30,
    mass: 0.5,
  });

  const blurPx = useTransform(scrollYProgress, [0, 0.5], [0, 10]);
  const smoothBlur = useSpring(blurPx, {
    stiffness: 70,
    damping: 30,
    mass: 0.5,
  });
  const blurFilter = useMotionTemplate`blur(${smoothBlur}px)`;

  const opacityText = useTransform(
    scrollYProgress,
    [0.25, 0.4, 0.85, 1],
    [0, 1, 1, 0]
  );
  const translateYText = useTransform(
    scrollYProgress,
    [0.25, 0.4],
    ["40px", "0px"]
  );
  const smoothTextOpacity = useSpring(opacityText, {
    stiffness: 80,
    damping: 30,
    mass: 0.5,
  });
  const smoothTextY = useSpring(translateYText, {
    stiffness: 80,
    damping: 30,
    mass: 0.5,
  });

  const sectionOpacity = useTransform(scrollYProgress, [0.85, 1], [1, 0]);
  const smoothSectionOpacity = useSpring(sectionOpacity, {
    stiffness: 60,
    damping: 40,
    mass: 1,
  });

  const pictures = useMemo(
    () => [
      {
        src: Picture1,
        scale: scale4,
        pos: { top: "0vh", left: "0vw", w: "25vw", h: "25vh" },
        alt: "NFT Art 1",
      },
      {
        src: Picture2,
        scale: scale5,
        pos: { top: "-30vh", left: "5vw", w: "35vw", h: "30vh" },
        alt: "NFT Art 2",
      },
      {
        src: Picture3,
        scale: scale6,
        pos: { top: "-10vh", left: "-25vw", w: "20vw", h: "45vh" },
        alt: "NFT Art 3",
      },
      {
        src: Picture4,
        scale: scale5,
        pos: { top: "0vh", left: "27.5vw", w: "25vw", h: "25vh" },
        alt: "NFT Art 4",
      },
      {
        src: Picture5,
        scale: scale6,
        pos: { top: "27.5vh", left: "5vw", w: "20vw", h: "25vh" },
        alt: "NFT Art 5",
      },
      {
        src: Picture6,
        scale: scale8,
        pos: { top: "27.5vh", left: "-22.5vw", w: "30vw", h: "25vh" },
        alt: "NFT Art 6",
      },
      {
        src: Picture7,
        scale: scale9,
        pos: { top: "22.5vh", left: "25vw", w: "15vw", h: "15vh" },
        alt: "NFT Art 7",
      },
      {
        src: Picture8,
        scale: scale10,
        pos: { top: "10vh", left: "-10vw", w: "22vw", h: "22vh" },
        alt: "NFT Art 8",
      },
    ],
    [scale4, scale5, scale6, scale8, scale9, scale10]
  );

  const itemAnimation = {
    hidden: {
      opacity: 0,
      scale: 0.85,
      rotate: -6,
    },
    show: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <Box
      ref={container}
      h="300vh"
      pos="relative"
      bg="black"
      sx={{
        scrollSnapType: "y proximity",
      }}>
      <MotionBox
        variants={containerVariants}
        initial="hidden"
        animate="show"
        pos="sticky"
        top={0}
        h="100vh"
        overflow="hidden"
        display="flex"
        alignItems="center"
        justifyContent="center"
        zIndex={1}
        willChange="transform, opacity"
        style={{ opacity: smoothSectionOpacity }}
        sx={{
          WebkitBackfaceVisibility: "hidden",
          WebkitPerspective: 1000,
          WebkitTransform: "translateZ(0)",
          backfaceVisibility: "hidden",
          perspective: 1000,
        }}>
        {pictures.map(({ src, scale, pos, alt }, idx) => (
          <MotionBox
            key={idx}
            variants={itemAnimation}
            style={{
              scale,
              opacity: smoothOpacity,
              filter: blurFilter,
            }}
            pos="absolute"
            w="100%"
            h="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            willChange="transform, opacity, filter"
            sx={{
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
            }}>
            <Box
              pos="relative"
              w={pos.w}
              h={pos.h}
              top={pos.top}
              left={pos.left}
              filter="drop-shadow(0px 0px 12px rgba(255,255,255,0.25))"
              transform="translateZ(0)">
              <Image
                src={src}
                fill
                alt={alt}
                sizes="(max-width: 768px) 50vw, 35vw"
                quality={90}
                priority={idx < 4}
                placeholder="blur"
                style={{
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />
            </Box>
          </MotionBox>
        ))}

        <MotionText
          style={{
            opacity: smoothTextOpacity,
            y: smoothTextY,
          }}
          fontSize={{ base: "3xl", md: "6xl" }}
          fontWeight="extrabold"
          textAlign="center"
          zIndex={20}
          letterSpacing="0.2em"
          bgGradient="linear(to-r, purple.300, pink.300, purple.200)"
          bgClip="text"
          color="white"
          sx={{
            WebkitFontSmoothing: "antialiased",
            MozOsxFontSmoothing: "grayscale",
            "@keyframes mysticGlow": {
              "0%, 100%": {
                filter: "drop-shadow(0px 0px 12px rgba(180, 80, 255, 0.65))",
              },
              "50%": {
                filter: "drop-shadow(0px 0px 24px rgba(150, 20, 255, 0.8))",
              },
            },
            animation: "mysticGlow 4s ease-in-out infinite",
          }}>
          THE COLLECTION
        </MotionText>
      </MotionBox>
    </Box>
  );
}

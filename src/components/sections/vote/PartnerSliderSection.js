"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Box, Image } from "@chakra-ui/react";

const partnerLogos = [
  { src: "/logo/kpop_road_logo.webp", alt: "Partner 1", link: "https://kpoproad.com" },
  { src: "/logo/kpop_road_logo_white.webp", alt: "Partner 2", link: "https://google.com" },
  { src: "/logo/kpop_road_logo.webp", alt: "Partner 3", link: "https://facebook.com" },
  { src: "/logo/kpop_road_logo_white.webp", alt: "Partner 4", link: "https://twitter.com" },
  { src: "/logo/kpop_road_logo.webp", alt: "Partner 5", link: "https://youtube.com" },
  { src: "/logo/kpop_road_logo_white.webp", alt: "Partner 6", link: "https://naver.com" },
  { src: "/logo/kpop_road_logo.webp", alt: "Partner 7", link: "https://kakao.com" },
];

export default function PartnerSliderSection() {
  const logos = [...partnerLogos, ...partnerLogos];
  const controls = useAnimation();
  const [isPaused, setIsPaused] = useState(false);
  const [currentX, setCurrentX] = useState(0);
  const motionRef = useRef();

  useEffect(() => {
    if (!isPaused) {
      controls.start({ x: [currentX, "-50%"] }, {
        duration: 20 * (1 - parseFloat(currentX) / 100 / 0.5),
        repeat: Infinity,
        ease: "linear"
      });
    }
    // eslint-disable-next-line
  }, [isPaused]);

  const handlePause = () => {
    setIsPaused(true);
    controls.stop();
  };

  const handleResume = () => {
    setIsPaused(false);
  };

  const handleUpdate = (latest) => {
    if (typeof latest.x === "number") {
      // px
      const container = motionRef.current?.parentElement;
      const width = container?.scrollWidth || 1;
      const percent = (latest.x / width) * 100;
      setCurrentX(`${percent}%`);
    } else {
      setCurrentX(latest.x);
    }
  };

  return (
    <Box overflow="hidden" w="100%" py={{ base: 5, md: 10 }} bg="transparent">
      <Box position="relative" w="100%" h={{ base: "60px", md: "100px" }}>
        <motion.div
          ref={motionRef}
          style={{
            display: "flex",
            alignItems: "center",
            width: "max-content",
            gap: 48,
            height: "100%"
          }}
          animate={controls}
          onUpdate={handleUpdate}
        >
          {logos.map((logo, idx) => (
            <Box
              key={idx}
              px={{ base: 3, md: 6 }}
              display="flex"
              alignItems="center"
              height="100%"
              onMouseEnter={handlePause}
              onMouseLeave={handleResume}
            >
              <a href={logo.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  w={{ base: "80px", md: "120px" }}
                  h={{ base: "40px", md: "80px" }}
                  objectFit="contain"
                  filter="brightness(0.95)"
                  transition="filter 0.2s"
                  _hover={{ filter: "brightness(1.1)" }}
                  draggable={false}
                  userSelect="none"
                  cursor="pointer"
                />
              </a>
            </Box>
          ))}
        </motion.div>
      </Box>
    </Box>
  );
}
"use client";
import { Box, Text, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
const MotionImage = motion.create(Image);
const MotionBox = motion.create(Box);
const MotionText = motion.create(Text);

export default function PartnerSection() {
  const partners = [
    {
      id: 1,
      name: "The Hana",
      logo: "/the-hana-logo.png",
      alt: "The Hana Logo",
      link: "https://thehana.co.kr",
    },
    {
      id: 2,
      name: "TikTok",
      logo: "/tiktok-logo.png",
      alt: "TikTok Logo",
      link: "https://www.tiktok.com/@kpop.road?_t=ZS-8xxX9NCJexY&_r=1",
    },
    {
      id: 3,
      name: "NPay",
      logo: "/npay-logo.png",
      alt: "NPay Logo",
      link: "https://nid.naver.com/nidlogin.login?url=http%3A%2F%2Fpay.naver.com%2Fpc%2Fhistory",
    },
  ];

  const logos = [...partners, ...partners, ...partners];
  const [isPaused, setIsPaused] = useState(false);

  return (
    <Box
      w="100vw"
      h="70vh"
      bg="#12131A"
      position="relative"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      {[...Array(8)].map((_, i) => (
        <MotionBox
          key={i}
          position="absolute"
          width="2px"
          height="2px"
          bg="rgba(14, 254, 33, 0.4)"
          borderRadius="50%"
          top={`${20 + ((i * 12) % 60)}%`}
          left={`${10 + ((i * 15) % 80)}%`}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3 + (i % 3),
            repeat: Infinity,
            delay: i * 0.4,
          }}
        />
      ))}

      {/* Main container */}
      <MotionBox
        w="100%"
        h={"50vh"}
        maxW="none"
        px={{ base: 4, md: 8, lg: 12 }}
        py={{ base: 6, md: 12 }}
        position="relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Title */}
        <MotionText
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          fontWeight="bold"
          color="white"
          textAlign="center"
          mb={12}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Partners{" "}
          <Text as="span" color="#0EFE21">
            &
          </Text>{" "}
          Collaborators
        </MotionText>

        {/* Partners container with scrolling animation */}
        <MotionBox
          w="100%"
          p={{ base: 8, md: 12 }}
          bg="black"
          backdropFilter="blur(10px)"
          borderRadius="xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          position="relative"
        >
          {/* Partner Slider */}
          <Box overflow="hidden" w="100%" py={4}>
            <Box position="relative" w="100%" h={{ base: "80px", md: "100px" }}>
              <MotionBox
                display="flex"
                alignItems="center"
                height="100%"
                gap="48px"
                animate={{
                  x: [0, "-100%"],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                  },
                }}
                style={{
                  width: "max-content",
                }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {logos.map((partner, idx) => (
                  <Box
                    key={`${partner.id}-${idx}`}
                    px={{ base: 3, md: 6 }}
                    display="flex"
                    alignItems="center"
                    height="100%"
                    flexShrink={0}
                  >
                    <a
                      href={partner.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={partner.logo}
                        alt={partner.alt}
                        w={{ base: "120px", md: "150px" }}
                        h="auto"
                        maxHeight="60px"
                        objectFit="contain"
                        filter="brightness(0.9)"
                        _hover={{ filter: "brightness(1.1)" }}
                        draggable={false}
                        userSelect="none"
                        transition="all 0.3s ease"
                      />
                    </a>
                  </Box>
                ))}
              </MotionBox>
            </Box>
          </Box>

          {/* Gradient overlays để tạo fade effect ở 2 bên */}
          <Box
            position="absolute"
            top={0}
            left={0}
            width="100px"
            height="100%"
            background="linear-gradient(to right, rgba(0, 0, 0, 0.8), transparent)"
            pointerEvents="none"
            zIndex={2}
          />
          <Box
            position="absolute"
            top={0}
            right={0}
            width="100px"
            height="100%"
            background="linear-gradient(to left, rgba(0, 0, 0, 0.8), transparent)"
            pointerEvents="none"
            zIndex={2}
          />
        </MotionBox>
      </MotionBox>

      <MotionBox
        position="absolute"
        top={{ base: "50px", md: "80px", lg: "120px" }}
        right={{ base: "10px", md: "50px", lg: "80px" }}
        animate={{
          rotate: [10, -10, 5, -5, 0],

          scale: [1, 1.05, 0.98, 1.02, 1],
          x: [0, 5, -5, 3, 0],
          y: [0, -3, 3, -2, 0],
          opacity: [0.8, 1, 0.7, 0.9, 0.8],
        }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          times: [0, 0.25, 0.5, 0.75, 1],
          repeat: Infinity,
          repeatType: "reverse",
          delay: 0.5,
        }}
        zIndex={1000}
      >
        <MotionImage
          src="/k-2.png"
          alt="Decorative Star Icon"
          loading="lazy"
          width={{ base: "80px", sm: "120px", md: "180px", lg: "250px" }}
          height={{ base: "80px", sm: "120px", md: "180px", lg: "250px" }}
          opacity={{ base: 0.4, md: 0.6, lg: 0.8 }}
          pointerEvents="none"
          animate={{
            filter: [
              "drop-shadow(0 0 30px rgba(152, 25, 171, 0.5)) brightness(1.1) blur(1px)",
              "drop-shadow(0 0 50px rgba(152, 25, 171, 0.7)) brightness(1.2) blur(2px)",
              "drop-shadow(0 0 20px rgba(152, 25, 171, 0.4)) brightness(1.0) blur(0.5px)",
              "drop-shadow(0 0 40px rgba(152, 25, 171, 0.6)) brightness(1.15) blur(1.5px)",
            ],
          }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </MotionBox>

      {/* Background glow effects */}
      <MotionBox
        position="absolute"
        top="30%"
        left="20%"
        width="100px"
        height="100px"
        borderRadius="50%"
        bg="radial-gradient(circle, rgba(14, 254, 33, 0.1), transparent)"
        filter="blur(20px)"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />

      <MotionBox
        position="absolute"
        bottom="20%"
        right="15%"
        width="80px"
        height="80px"
        borderRadius="50%"
        bg="radial-gradient(circle, rgba(139, 92, 246, 0.1), transparent)"
        filter="blur(15px)"
        animate={{
          scale: [1.2, 0.8, 1.2],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          delay: 1,
        }}
      />
    </Box>
  );
}

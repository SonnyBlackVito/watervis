"use client";
import {
  Box,
  Text,
  Container,
  SimpleGrid,
  Image,
  Button,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const MotionBox = motion.create(Box);
const MotionText = motion.create(Text);

const starColors = [
  "linear-gradient(135deg, #FFFFFF 0%, #F0F0F0 100%)",
  "linear-gradient(135deg, #6750FF 0%, #9819AB 100%)",
  "linear-gradient(135deg, #0EFE21 0%, #00D4AA 100%)",
  "linear-gradient(135deg, #FF6B9D 0%, #C44569 100%)",
  "linear-gradient(135deg, #FFD700 0%, #FFA500 100%)",
];

export default function OurWebsiteSection() {
  const [stars, setStars] = useState([]);
  let starCount = 150;
  useEffect(() => {
    const newStars = Array.from({ length: starCount }, (_, i) => ({
      id: i,
      size: 1 + (i % 5),
      x: Math.random() * 100,
      y: Math.random() * 100,
      colorIndex: i % 5,
      animationDelay: i * 0.15,
      animationDuration: 4 + (i % 6),
      animationOffset: {
        y: -10 + (i % 15),
        x: 3 + (i % 7),
      },
    }));
    setStars(newStars);
  }, [starCount]);

  const websites = [
    {
      id: 1,
      title: "KPOPROAD.KR",
      description:
        "KPOP ROAD is a platform dedicated to posting and updating the latest content related to K-POP.",
      image: "kpoproad1.png",
      url: "https://kpoproad.kr",
    },
    {
      id: 2,
      title: "KPOPROAD.COM",
      description:
        "A platform that posts official trainee recruitments and auditions from leading entertainment companies in Korea",
      image: "kpoproad2.png",
      url: "https://kpoproad.com",
    },
    {
      id: 3,
      title: "AUDITION.KPOPROAD.COM",
      description:
        "A platform that allows you to vote for top idols and trainees. Own NFT Rody and get rewards ",
      image: "kpoproad3.png",
      url: "https://audition.kpoproad.com",
    },
  ];

  return (
    <Box
      w="100vw"
      minH="100vh"
      bg="#12131A"
      py={20}
      position="relative"
      overflow="hidden"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {stars.map((star) => (
        <MotionBox
          key={star.id}
          position="absolute"
          width={`${star.size}px`}
          height={`${star.size}px`}
          background={starColors[star.colorIndex]}
          borderRadius="50%"
          top={`${star.y}%`}
          left={`${star.x}%`}
          filter="blur(0.1px)"
          boxShadow={
            star.colorIndex === 0
              ? "0 0 12px rgba(255, 255, 255, 0.9), 0 0 6px rgba(255, 255, 255, 0.6)"
              : "0 0 8px rgba(255, 255, 255, 0.7)"
          }
          initial={{ opacity: 0.3, scale: 0.5 }}
          animate={{
            y: [0, star.animationOffset.y, 0],
            x: [0, star.animationOffset.x, -star.animationOffset.x, 0],
            opacity: [0.3, 1, 0.3],
            scale: [0.7, 1.6, 0.7],
          }}
          transition={{
            duration: star.animationDuration,
            repeat: Infinity,
            delay: star.animationDelay,
            ease: "easeInOut",
            times: [0, 0.5, 1],
          }}
          style={{
            willChange: "transform, opacity",
            backfaceVisibility: "hidden",
          }}
        />
      ))}

      <MotionBox
        position="absolute"
        bottom="25%"
        left="5%"
        width="60px"
        height="60px"
        animate={{
          rotate: [0, -360],
          scale: [0.8, 1.3, 0.8],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}>
      </MotionBox>

      <Container maxW="7xl" position="relative" zIndex={2}>
        {/* Enhanced title with gradient text */}
        <MotionText
          fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
          fontWeight="800"
          bgGradient="linear(to-r, #FFFFFF, #6750FF, #9819AB)"
          bgClip="text"
          textAlign="center"
          color="white"
          mb={20}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          filter="drop-shadow(0 4px 12px rgba(255, 255, 255, 0.1))">
          Our Website
        </MotionText>

        {/* Enhanced websites grid */}
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          columnGap={12}
          rowGap={16}
          maxW="6xl"
          mx="auto">
          {websites.map((website, index) => (
            <MotionBox
              key={website.id}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: index * 0.3,
                ease: "easeOut",
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}>
              <VStack
                align="stretch"
                spacing={6}
                bg="rgba(255, 255, 255, 0.03)"
                backdropFilter="blur(20px)"
                p={10}
                borderRadius="2xl"
                border="1px solid rgba(255, 255, 255, 0.1)"
                position="relative"
                overflow="hidden"
                minH="500px"
                _hover={{
                  bg: "rgba(255, 255, 255, 0.08)",
                  borderColor: "rgba(103, 80, 255, 0.4)",
                  boxShadow:
                    "0 20px 60px rgba(103, 80, 255, 0.2), 0 0 0 1px rgba(103, 80, 255, 0.1)",
                }}
                transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                _before={{
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  bg: "linear-gradient(135deg, rgba(103, 80, 255, 0.05) 0%, rgba(152, 25, 171, 0.05) 100%)",
                  opacity: 0,
                  transition: "opacity 0.4s ease",
                }}
              >
                {/* Enhanced website mockup image */}
                <Box
                  position="relative"
                  overflow="hidden"
                  borderRadius="xl"
                  bg="linear-gradient(135deg, rgba(103, 80, 255, 0.1), rgba(152, 25, 171, 0.1))"
                  _before={{
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    bg: "linear-gradient(135deg, rgba(103, 80, 255, 0.2), transparent)",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                    zIndex: 1,
                  }}
                  _hover={{
                    _before: {
                      opacity: 1,
                    },
                  }}>
                  <Image
                    src={website.image}
                    alt={`${website.title} mockup`}
                    width="100%"
                    height="220px"
                    objectFit="cover"
                    loading="lazy"
                    filter="brightness(0.85) contrast(1.1)"
                    _hover={{
                      filter: "brightness(1) contrast(1.2)",
                      transform: "scale(1.05)",
                    }}
                    transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                  />
                </Box>

                {/* Enhanced website info */}
                <VStack
                  align="start"
                  spacing={4}
                  position="relative"
                  zIndex={2}
                  flex="1"
                  justify="space-between"
                >
                  <VStack align="start" spacing={4} flex="1">
                    <Text
                      fontSize={{ base: "xl", md: "2xl" }}
                      fontWeight="bold"
                      bgGradient="linear(to-r, #FFFFFF, #E2E8F0)"
                      bgClip="text"
                      lineHeight="short"
                      noOfLines={2}
                    >
                      {website.title}
                    </Text>

                    <Text
                      fontSize={{ base: "md", md: "lg" }}
                      color="rgba(255, 255, 255, 0.8)"
                      lineHeight="tall"
                      letterSpacing="wide"
                      noOfLines={3}
                    >
                      {website.description}
                    </Text>
                  </VStack>
                  <Button
                    bg="linear-gradient(135deg, #6750FF 0%, #9819AB 50%, #8B45C7 100%)"
                    color="white"
                    fontWeight="bold"
                    fontSize="md"
                    px={10}
                    py={4}
                    h="auto"
                    borderRadius="full"
                    border="none"
                    position="relative"
                    overflow="hidden"
                    alignSelf="flex-start"
                    _before={{
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: "-100%",
                      width: "100%",
                      height: "100%",
                      bg: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
                      transition: "left 0.5s ease",
                    }}
                    _hover={{
                      bg: "linear-gradient(135deg, #5a42e6 0%, #8515a0 50%, #7a3bb8 100%)",
                      transform: "translateY(-3px) scale(1.05)",
                      boxShadow:
                        "0 12px 40px rgba(103, 80, 255, 0.4), 0 0 0 1px rgba(103, 80, 255, 0.3)",
                      _before: {
                        left: "100%",
                      },
                    }}
                    _active={{
                      transform: "translateY(-1px) scale(1.02)",
                      boxShadow: "0 6px 20px rgba(103, 80, 255, 0.3)",
                    }}
                    transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                    onClick={() => window.open(website.url, "_blank")}
                  >
                    Learn More
                  </Button>
                </VStack>
              </VStack>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>

      {/* Enhanced background glow effects */}
      <MotionBox
        position="absolute"
        top="30%"
        left="10%"
        width="200px"
        height="200px"
        borderRadius="50%"
        bg="radial-gradient(circle, rgba(103, 80, 255, 0.15), rgba(152, 25, 171, 0.08), transparent)"
        filter="blur(40px)"
        animate={{
          scale: [1, 1.4, 1.2, 1],
          opacity: [0.3, 0.7, 0.5, 0.3],
          x: [0, 20, -10, 0],
          y: [0, -15, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <MotionBox
        position="absolute"
        bottom="20%"
        right="15%"
        width="150px"
        height="150px"
        borderRadius="50%"
        bg="radial-gradient(circle, rgba(14, 254, 33, 0.12), rgba(0, 212, 170, 0.08), transparent)"
        filter="blur(35px)"
        animate={{
          scale: [1.2, 0.8, 1.3, 1.2],
          opacity: [0.4, 0.8, 0.6, 0.4],
          x: [0, -25, 15, 0],
          y: [0, 20, -10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Additional decorative elements */}
      <MotionBox
        position="absolute"
        top="60%"
        right="3%"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          ease: "linear",
          repeat: Infinity,
        }}
        zIndex={1}>
        <Image
          src="/star-right.png"
          alt="Decorative Star Icon"
          loading="lazy"
          width={{ base: "120px", md: "150px", lg: "200px" }}
          height={{ base: "120px", md: "150px", lg: "200px" }}
          filter="drop-shadow(0 0 20px rgba(103, 80, 255, 0.3))"
          pointerEvents="none"
        />
      </MotionBox>
    </Box>
  );
};

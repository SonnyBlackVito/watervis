"use client";
import {
  Box,
  Text,
  Container,
  SimpleGrid,
  Link,
  Image,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { keyframes } from "@emotion/react";

const MotionBox = motion.create(Box);
const MotionText = motion.create(Text);

// Floating animation
const floatAnimation = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(5deg); }
`;

// Wire animation
const wireGlow = keyframes`
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
`;

export default function StayTunedSection() {
  const socialPlatforms = [
    {
      id: 1,
      url: "https://x.com/kpop_road",
      image: "Frame-social1_.png",
    },
    {
      id: 2,
      url: "https://www.instagram.com/kpoproad/?igsh=MTU3cGg1ZWFnNjJnYg%3D%3D#",
      image: "Frame-social2_.png",
    },
    {
      id: 3,
      url: "https://www.tiktok.com/@kpop.road?_t=ZS-8xxX9NCJexY&_r=1",
      image: "Frame-social3_.png",
    },
    {
      id:4,
      url: "https://www.youtube.com/@kpoproad",
      image: "Frame-social4_.png",
    }
  ];

  return (
    <Box
      w="full"
      minH="50vh"
      bg="black"
      py={10}
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center">
      {/* Background floating particles */}
      {[...Array(12)].map((_, i) => (
        <MotionBox
          key={i}
          position="absolute"
          width="3px"
          height="3px"
          bg="rgba(255, 255, 255, 0.2)"
          borderRadius="50%"
          top={`${10 + ((i * 8) % 80)}%`}
          left={`${5 + ((i * 12) % 90)}%`}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4 + (i % 3),
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}

      <Container maxW="7xl">
        {/* Main Title */}
        <MotionText
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          fontWeight="black"
          color="white"
          textAlign="center"
          mb={12}
          letterSpacing="tight"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          STAY TUNED WITH EVERYTHING
        </MotionText>

        {/* Social Media Grid */}
        <SimpleGrid
          columns={{ base: 2, md: 4 }}
          spacing={{ base: 12, md: 16 }}
          maxW="24xl"
          mx="auto"
          textAlign="center">
          {socialPlatforms.map((platform, index) => (
            <Box
              key={platform.id}
              display="flex"
              justifyContent="center"
              alignItems="center">
              <MotionBox
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.2 + 0.3,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.05,
                }}
                cursor="pointer">
                <Link
                  passHref
                  target="_blank"
                  rel="noopener noreferrer"
                  href={platform.url}
                  isExternal
                  _hover={{ textDecoration: "none" }}
                  display="flex"
                  justifyContent="center">
                  {/* Icon Container with Image */}
                  <MotionBox
                    animation={`${floatAnimation} 6s ease-in-out infinite`}
                    style={{
                      animationDelay: `${index * 0.5}s`,
                    }}
                    _hover={{
                      animation: "none",
                      transform: "scale(1.1)",
                    }}
                    transition="all 0.3s ease">
                    <Box
                      position="relative"
                      p={4}
                      animation={`${wireGlow} 3s ease-in-out infinite`}
                      style={{
                        animationDelay: `${index * 0.3}s`,
                      }}>
                      <Image
                        src={platform.image}
                        alt={`Social platform ${platform.id}`}
                        width={{ base: "100px", md: "120px" ,lg:"200px"}}
                        height={{ base: "100px", md: "120px" ,lg:"200px"}}
                        objectFit="contain"
                        loading="lazy" 
                        filter="brightness(2)"
                        _hover={{
                          filter: "brightness(2.4)",
                        }}
                        transition="all 0.3s ease"
                        mx="auto"
                      />
                    </Box>
                  </MotionBox>
                </Link>
              </MotionBox>
            </Box>
          ))}
        </SimpleGrid>
      </Container>

      {/* Background Gradient Effects */}
      <MotionBox
        position="absolute"
        top="20%"
        left="10%"
        width="150px"
        height="150px"
        borderRadius="50%"
        bg="radial-gradient(circle, rgba(139, 92, 246, 0.1), transparent)"
        filter="blur(30px)"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
      />

      <MotionBox
        position="absolute"
        bottom="30%"
        right="15%"
        width="100px"
        height="100px"
        borderRadius="50%"
        bg="radial-gradient(circle, rgba(225, 48, 108, 0.08), transparent)"
        filter="blur(25px)"
        animate={{
          scale: [1.3, 0.8, 1.3],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          delay: 2,
        }}
      />

      <MotionBox
        position="absolute"
        top="60%"
        right="20%"
        width="80px"
        height="80px"
        borderRadius="50%"
        bg="radial-gradient(circle, rgba(0, 242, 234, 0.1), transparent)"
        filter="blur(20px)"
        animate={{
          scale: [0.9, 1.4, 0.9],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          delay: 4,
        }}
      />
    </Box>
  );
};

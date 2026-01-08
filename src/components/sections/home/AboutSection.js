"use client";
import { Box, Flex, Text, Button, Container, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);
const MotionText = motion.create(Text);
const MotionFlex = motion.create(Flex);

// Animation variants
const contentVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.3,
      ease: "easeOut",
    },
  }),
};

// Floating Orbs Component
const FloatingOrbs = () => (
  <>
    <MotionBox
      display={{ base: "none", md: "block" }}
      position="absolute"
      width={{ md: "120px", lg: "180px" }}
      height={{ md: "120px", lg: "180px" }}
      borderRadius="50%"
      background="radial-gradient(circle, rgba(103, 80, 255, 0.2), rgba(152, 25, 171, 0.08), transparent)"
      filter="blur(25px)"
      animate={{
        x: [-120, 250, -180, 120, -120],
        y: [-100, 60, -120, 100, -100],
        scale: [1, 1.4, 0.7, 1.2, 1],
        opacity: [0.3, 0.8, 0.4, 0.7, 0.3],
      }}
      transition={{ duration: 20, ease: "easeInOut", repeat: Infinity }}
    />

    <MotionBox
      display={{ base: "none", md: "block" }}
      position="absolute"
      top="15%"
      right="10%"
      width={{ md: "80px", lg: "120px" }}
      height={{ md: "80px", lg: "120px" }}
      borderRadius="50%"
      background="radial-gradient(circle, rgba(152, 25, 171, 0.25), rgba(139, 69, 199, 0.1), transparent)"
      filter="blur(20px)"
      animate={{
        x: [100, -150, 80, -100, 100],
        y: [80, -60, 100, -80, 80],
        rotate: [0, 360],
        opacity: [0.4, 0.9, 0.3, 0.7, 0.4],
      }}
      transition={{ duration: 25, ease: "easeInOut", repeat: Infinity }}
    />

    <MotionBox
      display={{ base: "none", lg: "block" }}
      position="absolute"
      width="500px"
      height="250px"
      background="radial-gradient(ellipse, rgba(103, 80, 255, 0.12), rgba(152, 25, 171, 0.06), transparent)"
      filter="blur(35px)"
      animate={{
        x: [-250, 350, -300, 250, -250],
        y: [120, -70, 150, -100, 120],
        scaleX: [1, 1.6, 0.7, 1.4, 1],
        scaleY: [1, 0.6, 1.3, 0.8, 1],
        opacity: [0.2, 0.5, 0.1, 0.4, 0.2],
      }}
      transition={{ duration: 28, ease: "easeInOut", repeat: Infinity }}
    />
  </>
);

// Light Rays Component
const LightRays = () => (
  <>
    <MotionBox
      display={{ base: "none", lg: "block" }}
      position="absolute"
      top="8%"
      left="15%"
      width="3px"
      height="250px"
      background="linear-gradient(180deg, transparent, rgba(103, 80, 255, 0.4), rgba(152, 25, 171, 0.2), transparent)"
      filter="blur(3px)"
      animate={{
        opacity: [0, 0.8, 0],
        scaleY: [0.4, 1.3, 0.4],
        rotate: [0, 8, -8, 0],
      }}
      transition={{
        duration: 9,
        ease: "easeInOut",
        repeat: Infinity,
        delay: 1.5,
      }}
    />

    <MotionBox
      display={{ base: "none", lg: "block" }}
      position="absolute"
      bottom="15%"
      right="20%"
      width="2px"
      height="180px"
      background="linear-gradient(180deg, transparent, rgba(152, 25, 171, 0.5), rgba(139, 69, 199, 0.3), transparent)"
      filter="blur(2px)"
      animate={{
        opacity: [0, 1, 0],
        scaleY: [0.2, 1.6, 0.2],
        rotate: [0, -5, 5, 0],
      }}
      transition={{
        duration: 11,
        ease: "easeInOut",
        repeat: Infinity,
        delay: 4,
      }}
    />
  </>
);

export default function AboutSection() {
  return (
    <Box
      id="about-section"
      w="full"
      // minH={{ base: "100vh", lg: "" }}
      bgImage="url('/background_section1.png')"
      bgSize="200%"
      backgroundPosition="center"
      position="relative"
      bgRepeat="no-repeat"
      sx={
        {
          // backgroundPositionY: "200%",
        }
      }>
      <MotionFlex
        w="full"
        direction="column"
        alignItems="center"
        textAlign={{ base: "center", lg: "left" }}
        position="relative"
        zIndex={2}>
        {/* Background Effects */}
        {/* <FloatingOrbs />
        <LightRays /> */}

        {/* Main Content */}
        <Container
          maxW={{
            base: "100%",
            sm: "540px",
            md: "720px",
            lg: "960px",
            xl: "1200px",
            "2xl": "1400px",
          }}
          px={{ base: 4, md: 6, lg: 8 }}
          py={{ base: 8, md: 12, lg: 32 }}
          // position="relative"
          zIndex={10}>
          <Flex
            direction={{ base: "column-reverse", lg: "row" }}
            align="center"
            justify="center"
            gap={{ base: 8, md: 10, lg: 12 }}>
            {/* Text Content */}
            <MotionBox
              flex="1"
              maxW={{ base: "100%", lg: "1400px" }}
              textAlign="center"
              variants={contentVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={0}>
              {/* Title */}
              <MotionText
                fontSize={{ base: "20px", sm: "24px", md: "28px", lg: "32px" }}
                fontWeight="bold"
                background="linear-gradient(270deg, #6750FF 0%, #a458b0ff 50%, #7e2d8aff 100%)"
                bgClip="text"
                color="transparent"
                py={{ base: 4, md: 12, lg: 16 }}
                sx={{
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                textShadow="0 0 30px rgba(103, 80, 255, 0.4), 0 0 60px rgba(152, 25, 171, 0.2)"
                whileInView={{
                  textShadow: [
                    "0 0 30px rgba(103, 80, 255, 0.4), 0 0 60px rgba(152, 25, 171, 0.2)",
                    "0 0 40px rgba(103, 80, 255, 0.6), 0 0 80px rgba(152, 25, 171, 0.3)",
                    "0 0 30px rgba(103, 80, 255, 0.4), 0 0 60px rgba(152, 25, 171, 0.2)",
                  ],
                }}
                transition={{
                  textShadow: {
                    duration: 4,
                    ease: "easeInOut",
                    repeat: Infinity,
                  },
                }}>
                REVOLUTIONIZING ENTERTAINMENT
              </MotionText>

              {/* Description */}
              <Box maxW={{ base: "100%", lg: "100%" }} mx="auto">
                <Text
                  fontSize={{
                    base: "14px",
                    sm: "15px",
                    md: "16px",
                    lg: "24px",
                  }}
                  color="rgba(255,255,255,0.85)"
                  lineHeight={{ base: "1.6", md: "1.7" }}
                  fontWeight={400}
                  mb={{ base: 4, md: 5 }}>
                  NEXST integrates AI, RWA and Blockchain to make entertainment
                  even more accessible and immersive for fans worldwide.
                </Text>

                <Text
                  fontSize={{
                    base: "14px",
                    sm: "15px",
                    md: "16px",
                    lg: "24px",
                  }}
                  color="rgba(255,255,255,0.85)"
                  lineHeight={{ base: "1.6", md: "1.7" }}
                  fontWeight={400}
                  mb={{ base: 6, md: 8 }}>
                  We aim to transform the global entertainment landscape by
                  leveraging cutting-edge technologies in innovative formats.
                </Text>
              </Box>

              {/* CTA Button */}
              <Box w="full" textAlign="center" pt={{ base: 6, md: 8 }}>
                <Button
                  bg="linear-gradient(90deg, #7537FF 0%, #EAA9F4 100%)"
                  borderRadius="99px"
                  w="240px"
                  h="50px"
                  px="24px"
                  py="8px"
                  boxShadow="inset 0 -4px 4px 0 rgba(0, 0, 0, 0.25)"
                  color="white"
                  fontSize={{ base: "sm", md: "md" }}
                  fontWeight="semibold"
                  mx="auto"
                  display="block"
                  _hover={{
                    transform: "scale(1.05)",
                    boxShadow:
                      "inset 0 -4px 4px 0 rgba(0, 0, 0, 0.25), 0 0 20px rgba(117, 55, 255, 0.5)",
                  }}
                  transition="all 0.3s ease">
                  READ OUR WHITEPAPER
                </Button>
              </Box>
            </MotionBox>

            {/* Hero Image */}
            <MotionBox
              flex="1"
              display="flex"
              justifyContent="center"
              alignItems="center"
              w="100%"
              maxW={{ base: "300px", sm: "350px", md: "450px", lg: "900px" }}
              mx="auto"
              variants={contentVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={1}>
              <Image
                src="/kpop_road_section_1.png"
                alt="Hero Illustration"
                width="100%"
                height="auto"
                objectFit="contain"
                transform={{ base: "none", lg: "translateX(40px)" }}
              />
            </MotionBox>
          </Flex>
        </Container>
      </MotionFlex>
    </Box>
  );
}

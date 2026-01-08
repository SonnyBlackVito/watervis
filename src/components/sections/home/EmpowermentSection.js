"use client";
import { Box, Flex, Text, Container, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);
const MotionText = motion.create(Text);

export default function EmpowermentSection() {
  return (
    <Box
      w="full"
      minH="100vh"
      position="relative"
      bg="linear-gradient(345deg, rgba(0, 0, 0, 0.4) 0%,rgba(0, 0, 0, 0.1) 25% ,rgba(0, 0, 0, 0.1) 75%,rgba(0, 0, 0, 0.1) 50%,rgba(185, 179, 179, 0.3) 85% ,rgba(52, 48, 48, 0.3) 100%)"
      py={20}>
      <Flex minH="100vh" justifyContent="center" alignItems="center">
        <MotionBox
          position="absolute"
          top={{ base: "50px", md: "80px", lg: "200px" }}
          left={{ base: "10px", md: "50px", lg: "110px" }}
          animate={{
            rotate: [0, 90],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          zIndex={1}>
          <Image
            src="/star-right.png"
            alt="Decorative Star Icon"
            loading="lazy"
            width={{ base: "80px", sm: "120px", md: "200px", lg: "320px" }}
            height={{ base: "80px", sm: "120px", md: "200px", lg: "320px" }}
            opacity={{ base: 0.6, md: 0.8, lg: 1 }}
            pointerEvents="none"
          />
        </MotionBox>

        <MotionBox
          position="absolute"
          bottom={{ base: "50px", md: "80px", lg: "110px" }}
          right={{ base: "10px", md: "50px", lg: "110px" }}
          animate={{
            rotate: [0, -360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          zIndex={1}>
          <Image
            src="/star-right.png"
            alt="Decorative Star Icon"
            loading="lazy"
            width={{ base: "80px", sm: "120px", md: "200px", lg: "320px" }}
            height={{ base: "80px", sm: "120px", md: "200px", lg: "320px" }}
            opacity={{ base: 0.6, md: 0.8, lg: 1 }}
            pointerEvents="none"
          />
        </MotionBox>

        <Container maxW="7xl" position="relative" zIndex={10}>
          {/* Main Title */}
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            mb={16}>
            <MotionText
              fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
              fontWeight="bold"
              color="white"
              textAlign="center"
              lineHeight="short"
              textShadow="0 4px 20px rgba(0, 0, 0, 0.7)"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              mb={4}>
              {/* EMPOWERMENT THROUGH */}
              WATERVIS DEEP-SEA
            </MotionText>

            <MotionText
              fontSize={{ base: "32px", md: "44px", lg: "55px" }}
              fontWeight="bold"
              background="linear-gradient(270deg, #6750FF 0%, #9819AB 50%, #8B45C7 100%)"
              bgClip="text"
              color="transparent"
              sx={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              textAlign="center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileInView={{
                textShadow: [
                  "0 0 30px rgba(103, 80, 255, 0.4), 0 0 60px rgba(152, 25, 171, 0.2)",
                  "0 0 40px rgba(103, 80, 255, 0.6), 0 0 80px rgba(152, 25, 171, 0.3)",
                  "0 0 30px rgba(103, 80, 255, 0.4), 0 0 60px rgba(152, 25, 171, 0.2)",
                ],
              }}>
              ORIGIN
            </MotionText>
          </Flex>

          <Flex
            alignItems="center"
            justifyContent={{ base: "center", lg: "space-evenly" }}
            direction={{ base: "column", lg: "row" }}
            gap={{ base: 8, lg: 10 }}
            maxW="6xl"
            mx="auto">
            {/* Card 1 - KpopRoad VR LIVE */}
            <MotionBox
              bg="linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(103, 80, 255, 0.1) 50%, rgba(0, 0, 0, 0.3) 100%)"
              backdropFilter="blur(15px)"
              border="1px solid rgba(103, 80, 255, 0.3)"
              p={8}
              // width={{ base: "340px", lg: "450px" }}
              width={{ base: "340px", md: "340px", lg: "620px" }}
              height={{ base: "auto", lg: "280px" }}
              borderRadius="3xl"
              textAlign="center"
              position="relative"
              overflow="hidden"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(103, 80, 255, 0.2)",
                border: "1px solid rgba(103, 80, 255, 0.5)",
              }}>
              <Box position="relative" zIndex={2}>
                <Text
                  fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
                  fontWeight="bold"
                  background="linear-gradient(135deg, #6750FF 0%, #9819AB 100%)"
                  bgClip="text"
                  color="transparent"
                  sx={{
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                  mb={6}>
                  WATERVIS DEEP ORIGIN
                </Text>
                <Text
                  fontSize={{ base: "sm", md: "md", lg: "lg" }}
                  color="rgba(255, 255, 255, 0.9)"
                  lineHeight="tall"
                  fontWeight="medium">
                  Access the pristine energy of 1,032m deep-sea water,
                  meticulously sourced and verified to deliver nature's purest
                  minerals directly to you.
                </Text>
              </Box>
            </MotionBox>

            {/* Card 2 - KpopRoad PLAY */}
            <MotionBox
              bg="linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(152, 25, 171, 0.1) 50%, rgba(0, 0, 0, 0.3) 100%)"
              backdropFilter="blur(15px)"
              border="1px solid rgba(152, 25, 171, 0.3)"
              p={8}
              // width={{ base: "340px", lg: "450px" }}
              width={{ base: "340px", md: "340px", lg: "620px" }}
              height={{ base: "auto", lg: "280px" }}
              borderRadius="3xl"
              textAlign="center"
              position="relative"
              overflow="hidden"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(152, 25, 171, 0.2)",
                border: "1px solid rgba(152, 25, 171, 0.5)",
              }}>
              <Box position="relative" zIndex={2}>
                <Text
                  fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
                  fontWeight="bold"
                  background="linear-gradient(135deg, #9819AB 0%, #8B45C7 100%)"
                  bgClip="text"
                  color="transparent"
                  sx={{
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                  mb={6}>
                  WATERVIS RWA LINK
                </Text>
                <Text
                  fontSize={{ base: "sm", md: "md", lg: "lg" }}
                  color="rgba(255, 255, 255, 0.9)"
                  lineHeight="tall"
                  fontWeight="medium">
                  Uniting the essential value of Water with Web3 innovation to
                  create seamless, transparent connections between premium
                  resources and global consumers.
                </Text>
              </Box>
            </MotionBox>
          </Flex>
        </Container>

        {/* Enhanced Background Decorations */}
        <MotionBox
          position="absolute"
          bottom="15%"
          left="8%"
          width="120px"
          height="120px"
          borderRadius="50%"
          bg="radial-gradient(circle, rgba(103, 80, 255, 0.15), rgba(152, 25, 171, 0.05), transparent)"
          filter="blur(25px)"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.7, 0.3],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />

        <MotionBox
          position="absolute"
          top="20%"
          right="10%"
          width="80px"
          height="80px"
          borderRadius="50%"
          bg="radial-gradient(circle, rgba(152, 25, 171, 0.2), rgba(139, 69, 199, 0.08), transparent)"
          filter="blur(20px)"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.8, 0.4],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 2,
          }}
        />
      </Flex>
    </Box>
  );
}

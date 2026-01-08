"use client";
import { Box, Flex, Text, Container, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);
const MotionText = motion.create(Text);

export default function BuildingBlockSection() {
  return (
    <Box
      w="full"
      minH="100vh"
      position="relative"
      bg="linear-gradient(15deg, rgba(0, 0, 0, 0.4) 0%,rgba(0, 0, 0, 0.1) 25% ,rgba(0, 0, 0, 0.1) 75%,rgba(0, 0, 0, 0.1) 50%,rgba(185, 179, 179, 0.3) 85% ,rgba(52, 48, 48, 0.3) 100%)"
      py={20}>
      <Flex minH="100vh" justifyContent="center" alignItems="center">
        {/* Decorative star icon - Top Right */}
        <MotionBox
          position="absolute"
          top={{ base: "50px", md: "80px", lg: "120px" }}
          right={{ base: "10px", md: "50px", lg: "80px" }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
            x: [0, -20, 0],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 12,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          zIndex={1}>
          <Image
            src="/star-right.png"
            alt="Decorative Star Icon"
            loading="lazy"
            width={{ base: "60px", sm: "100px", md: "150px", lg: "200px" }}
            height={{ base: "60px", sm: "100px", md: "150px", lg: "200px" }}
            opacity={{ base: 0.4, md: 0.6, lg: 0.8 }}
            pointerEvents="none"
            filter="drop-shadow(0 0 20px rgba(103, 80, 255, 0.3))"
          />
        </MotionBox>

        {/* Decorative star icon - Bottom Left */}
        <MotionBox
          position="absolute"
          bottom={{ base: "50px", md: "80px", lg: "120px" }}
          left={{ base: "10px", md: "50px", lg: "80px" }}
          animate={{
            rotate: [360, 0],
            scale: [1, 1.4, 1],
            x: [0, 25, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 15,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 3,
          }}
          zIndex={1}>
          <Image
            src="/star-right.png"
            alt="Decorative Star Icon"
            loading="lazy"
            width={{ base: "80px", sm: "120px", md: "180px", lg: "250px" }}
            height={{ base: "80px", sm: "120px", md: "180px", lg: "250px" }}
            opacity={{ base: 0.3, md: 0.5, lg: 0.7 }}
            pointerEvents="none"
            filter="drop-shadow(0 0 25px rgba(152, 25, 171, 0.4))"
          />
        </MotionBox>

        <Container maxW="7xl" position="relative" zIndex={10}>
          {/* Main Title */}
          <MotionText
            fontSize={{ base: "2xl", md: "4xl", lg: "5xl", xl: "6xl" }}
            fontWeight="bold"
            color="white"
            textAlign="center"
            mb={20}
            lineHeight="short"
            textShadow="0 4px 20px rgba(0, 0, 0, 0.7), 0 0 40px rgba(255, 255, 255, 0.1)"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            {/* THE BUILDING BLOCKS{" "} */}
            THE CORE ELEMENTS{" "}
            <Text
              fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
              fontWeight={300}
              as="span"
              color="#0EFE21"
              textShadow="0 0 20px rgba(14, 254, 33, 0.5)">
              OF
            </Text>
            <br />
            OF THE WATERVIS UNIVERSE
          </MotionText>

          {/* Enhanced Cards Grid */}
          <Flex
            alignItems="center"
            justifyContent={{ base: "center", lg: "space-evenly" }}
            direction={{ base: "column", lg: "row" }}
            gap={{ base: 8, lg: 10 }}
            maxW="6xl"
            mx="auto">
            {/* Card 1 - KPOPROAD IMMERSIVE REALITY */}
            <MotionBox
              // bg="linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(103, 80, 255, 0.1) 50%, rgba(0, 0, 0, 0.3) 100%)"
              bg="#202020"
              backdropFilter="blur(15px)"
              border="1px solid rgba(103, 80, 255, 0.3)"
              p={8}
              width={{ base: "340px", md: "340px", lg: "620px" }}
              height={{ base: "auto", lg: "300px" }}
              borderRadius="3xl"
              textAlign="center"
              position="relative"
              overflow="hidden"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              zIndex={2}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(103, 80, 255, 0.2)",
                border: "1px solid rgba(103, 80, 255, 0.5)",
              }}>
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                zIndex={0}
                w="100%"
                bg="radial-gradient(125% 125% at 50% 10%, #050505ff 40%, #7c3aed 100%)"></Box>
              <Box position="relative" zIndex={2}>
                <Text
                  fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
                  fontWeight="bold"
                  background="linear-gradient(90deg, #7537FF 0%, #EAA9F4 100%)"
                  bgClip="text"
                  color="transparent"
                  sx={{
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                  mb={6}
                  lineHeight="short">
                  {/* KPOPROAD IMMERSIVE REALITY */}
                  WATERVIS DEEP-SEA ORIGIN
                </Text>
                <Text
                  fontSize={{ base: "sm", md: "md", lg: "lg" }}
                  color="rgba(255, 255, 255, 0.9)"
                  lineHeight="tall"
                  fontWeight="medium">
                  Experience the pristine journey from 1,032m depth,
                  meticulously sourced and verified to bring the ocean's pure
                  energy to life
                </Text>
              </Box>
            </MotionBox>

            {/* Card 2 - KPOPROAD ON-CHAIN ASSETS */}
            <MotionBox
              bg="linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(152, 25, 171, 0.1) 50%, rgba(0, 0, 0, 0.3) 100%)"
              backdropFilter="blur(15px)"
              // border="1px solid rgba(152, 25, 171, 0.3)"
              border="1px solid rgba(103, 80, 255, 0.3)"
              p={8}
              // width={{ base: "340px", lg: "450px" }}
              width={{ base: "340px", md: "340px", lg: "620px" }}
              height={{ base: "auto", lg: "300px" }}
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
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                zIndex={0}
                w="100%"
                bg="radial-gradient(125% 125% at 50% 10%, #050505ff 40%, #7c3aed 100%)"></Box>
              <Box position="relative" zIndex={2}>
                <Text
                  fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
                  fontWeight="bold"
                  // background="linear-gradient(135deg, #9819AB 0%, #8B45C7 100%)"
                  background="linear-gradient(90deg, #7537FF 0%, #EAA9F4 100%)"
                  bgClip="text"
                  color="transparent"
                  sx={{
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                  mb={6}
                  lineHeight="short">
                  WATERVIS ON-CHAIN ASSETS
                </Text>
                <Text
                  fontSize={{ base: "sm", md: "md", lg: "lg" }}
                  color="rgba(255, 255, 255, 0.9)"
                  lineHeight="tall"
                  fontWeight="medium"
                  // textAlign="left"
                >
                  Digitizing premium water resources-from mineral data
                  verification to physical redemption rights-delivering
                  authenticated quality and unlocking sustainable RWA value.
                </Text>
              </Box>
            </MotionBox>
          </Flex>
        </Container>

        {/* Enhanced Background Decorations */}
        <MotionBox
          position="absolute"
          bottom="15%"
          right="12%"
          width="120px"
          height="120px"
          borderRadius="50%"
          bg="radial-gradient(circle, rgba(103, 80, 255, 0.15), rgba(152, 25, 171, 0.05), transparent)"
          filter="blur(25px)"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.7, 0.3],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />

        <MotionBox
          position="absolute"
          top="25%"
          left="8%"
          width="80px"
          height="80px"
          borderRadius="50%"
          bg="radial-gradient(circle, rgba(152, 25, 171, 0.2), rgba(139, 69, 199, 0.08), transparent)"
          filter="blur(20px)"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.8, 0.4],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 2,
          }}
        />

        {/* Floating particles */}
        <MotionBox
          position="absolute"
          top="30%"
          left="20%"
          width="4px"
          height="4px"
          borderRadius="50%"
          bg="rgba(14, 254, 33, 0.8)"
          animate={{
            y: [0, -80, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 1,
          }}
        />

        <MotionBox
          position="absolute"
          top="50%"
          left="20%"
          width="4px"
          height="4px"
          borderRadius="50%"
          bg="rgba(14, 254, 33, 0.8)"
          animate={{
            y: [0, -80, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 1,
          }}
        />
        <MotionBox
          position="absolute"
          top="50%"
          left="50%"
          width="4px"
          height="4px"
          borderRadius="50%"
          bg="rgba(14, 254, 33, 0.8)"
          animate={{
            y: [0, -80, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 1,
          }}
        />

        <MotionBox
          position="absolute"
          top="60%"
          left="70%"
          width="4px"
          height="4px"
          borderRadius="50%"
          bg="rgba(14, 254, 33, 0.8)"
          animate={{
            y: [0, -80, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 1,
          }}
        />

        <MotionBox
          position="absolute"
          top="50%"
          left="70%"
          width="4px"
          height="4px"
          borderRadius="50%"
          bg="rgba(14, 254, 33, 0.8)"
          animate={{
            y: [0, -80, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 1,
          }}
        />

        <MotionBox
          position="absolute"
          top="70%"
          left="70%"
          width="4px"
          height="4px"
          borderRadius="50%"
          bg="rgba(14, 254, 33, 0.8)"
          animate={{
            y: [0, -80, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 1,
          }}
        />
        {/* <FloatingParticles /> */}
        <MotionBox
          position="absolute"
          bottom="35%"
          right="25%"
          width="6px"
          height="6px"
          borderRadius="50%"
          bg="rgba(103, 80, 255, 0.7)"
          animate={{
            y: [0, 60, 0],
            x: [0, -40, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.2, 0],
          }}
          transition={{
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 3,
          }}
        />
      </Flex>
    </Box>
  );
}

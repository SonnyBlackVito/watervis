"use client";

import { Box, Flex, Image, Text, VStack, Container } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);
const MotionText = motion.create(Text);

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

const ContentSection = ({
  imageSrc,
  imageAlt,
  paragraphs,
  reverseLayout = false,
  imageMaxW = { base: "100%", md: "80%", lg: "100%" },
  imageCustomProps = {},
}) => {
  return (
    <Flex
      direction={{
        base: "column",
        lg: reverseLayout ? "row-reverse" : "row",
      }}
      align="center"
      justify="space-between"
      gap={{ base: 8, md: 10, lg: 16 }}
      w="full">
      <VStack
        align="flex-start"
        flex={1}
        spacing={{ base: 4, md: 6 }}
        maxW={{ base: "100%", lg: "50%" }}>
        {paragraphs.map((text, index) => (
          <MotionText
            key={index}
            fontSize={{ base: "sm", md: "md", lg: "lg" }}
            color="#FFF"
            fontWeight="500"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px", amount: 0.3 }}
            transition={{
              delay: 0.1 + index * 0.1,
              duration: 0.5,
              ease: "easeOut",
            }}>
            {text}
          </MotionText>
        ))}
      </VStack>

      <MotionBox
        flex={1}
        variants={scaleIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px", amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        display="flex"
        justifyContent={reverseLayout ? "flex-start" : "center"}
        alignItems="center"
        maxW={{ base: "100%", lg: "50%" }}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          w={imageMaxW}
          maxW={{ base: "400px", md: "400px", lg: "400px" }}
          h="300px"
          objectFit="contain"
          loading="lazy"
          {...imageCustomProps}
        />
      </MotionBox>
    </Flex>
  );
};

export default function AboutSection() {
  const section1Paragraphs = [
    "Each painting by Picasso is a symphony never heard before.\nEach K-pop stage is a canvas never painted.",
    "Amid the bold colors and explosive melodies, KpopRoad creates a new space — where art and music tell the same story, where Picasso's colors blend with the heartbeat of the stage, and where fans are not just spectators, but living parts of the artwork itself.",
    "This is not merely the convergence of two worlds — it is the fusion of emotion, creativity, and technology.",
  ];

  const section2Paragraphs = [
    "Each painting by Picasso is a symphony never heard before.\nEach K-pop stage is a canvas never painted.",
    "Amid the bold colors and explosive melodies, KpopRoad creates a new space — where art and music tell the same story, where Picasso's colors blend with the heartbeat of the stage, and where fans are not just spectators, but living parts of the artwork itself.",
    "Where painting meets music, art no longer stands still. It moves, resonates, and spreads — in rhythm with the hearts of the fans.",
  ];

  return (
    <MotionBox
      py={{ base: 16, md: 20, lg: 24 }}
      px={{ base: 4, md: 6 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      position="relative"
      zIndex={20}
      overflow="hidden">
      <Image
        src="/art/absoluteRightAbout.webp"
        alt="decorative"
        position="absolute"
        right={{ base: "-10%", md: "-5%", lg: "0%" }}
        top={{ base: "5%", md: "10%", lg: "-85%" }}
        w={{ base: "150px", md: "230px", lg: "2000px" }}
        h={{ base: "150px", md: "300px", lg: "1400px" }}
        opacity={{ base: 0.3, md: 0.6, lg: 0.8 }}
        pointerEvents="none"
        zIndex={1}
        loading="lazy"
      />

      {/* <Image
        src="/art/aaa.webp"
        alt="aaa"
        position="absolute"
        right={{ base: "-10%", md: "-5%", lg: "7%" }}
        top={{ base: "5%", md: "10%", lg: "8%" }}
        w={{ base: "150px", md: "230px", lg: "700px" }}
        h={{ base: "150px", md: "300px", lg: "220px" }}
        pointerEvents="none"
        zIndex={1}
        loading="lazy"
      /> */}

      <Image
        src="/art/aaa.webp"
        alt="aaa"
        position="absolute"
        pointerEvents="none"
        loading="lazy"
        zIndex={1}
        objectFit="contain"
        display={{ base: "none", sm: "block" }}
        right={{ base: "-15%", md: "-5%", lg: "5%", xl: "8%" }}
        top={{ base: "2%", md: "8%", lg: "6%", xl: "0%" }}
        /* Responsive size */
        w={{ base: "180px", md: "260px", lg: "520px", xl: "700px" }}
        h={{ base: "180px", md: "260px", lg: "350px", xl: "420px" }}
      />

      <Container zIndex={100} maxW="container.xl">
        <MotionText
          mb={{ base: 4, md: 6, lg: 8 }}
          fontFamily="SVN-Gilroy, sans-serif"
          fontSize={{ base: "28px", sm: "36px", md: "44px", lg: "64px" }}
          fontWeight="800"
          lineHeight={{ base: "1.2", md: "55px" }}
          background="linear-gradient(90deg, #7537FF 0%, #EAA9F4 100%)"
          bgClip="text"
          sx={{
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          textAlign={{ base: "center", md: "left" }}>
          KPOP ROAD x PICASSO
        </MotionText>

        <Box position="relative" mb={{ base: 16, md: 20, lg: 32 }}>
          <ContentSection
            imageSrc="/art/about_picasso_1.webp"
            imageAlt="Picasso and KPOP Road collaboration art"
            paragraphs={section1Paragraphs}
            reverseLayout={false}
          />

          <Image
            position="absolute"
            src="/art/kpoproad_absolute.webp"
            alt="KPOP Road logo decoration"
            display={{ base: "none", lg: "block" }}
            bottom={{ lg: "-10%", xl: "-35%" }}
            right={{ lg: "5%", xl: "10%" }}
            h={{ lg: "80px", xl: "119px" }}
            w={{ lg: "360px", md: "3px", xl: "535px" }}
            // opacity={01}
            pointerEvents="none"
            loading="lazy"
          />

          {/* <Image
            position="absolute"
            src="/art/kpoproad_absolute.webp"
            alt="KPOP Road logo decoration"
            display={{ base: "none", lg: "block" }}
            bottom={{ lg: "-10%", xl: "-35%" }}
            right={{ lg: "5%", xl: "10%" }}
            h={{ base: "70px", lg: "80px", xl: "119px" }}
            w={{ base: "250px", lg: "360px", xl: "535px" }}
            pointerEvents="none"
            loading="lazy"
            objectFit="contain"
            zIndex={0}
          /> */}
          {/* 
          <Image
            position="absolute"
            src="/art/kpoproad_absolute.webp"
            alt="KPOP Road logo decoration"
            display={{ base: "none", lg: "block" }}
            bottom={{ lg: "-5%", xl: "-15%", "2xl": "-25%" }}
            right={{ lg: "200%", xl: "6%", "2xl": "10%" }}
            h={{ base: "70px", lg: "90px", xl: "130px" }}
            w={{ base: "250px", lg: "380px", xl: "560px" }}
            pointerEvents="none"
            loading="lazy"
            objectFit="contain"
            zIndex={0}
          /> */}
        </Box>

        <ContentSection
          imageSrc="/art/about_picasso_2.webp"
          imageAlt="Artistic fusion of music and painting"
          paragraphs={section2Paragraphs}
          reverseLayout={true}
          imageMaxW={{ base: "90%", md: "70%", lg: "100%" }}
          imageCustomProps={{
            maxW: { base: "350px", md: "450px", lg: "520px" },
          }}
        />
      </Container>
    </MotionBox>
  );
}

'use client';

import React, { useRef } from 'react';
import { Box, Container, Text, VStack } from '@chakra-ui/react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function AboutSection() {
  const containerRef = useRef();
  
  const paragraphs = [
    'Our NFT Collection is crafted in collaboration with talented artists, bringing K-pop energy and creativity into the Web3 world. Each piece transforms idols and characters like Rody into vibrant digital collectibles that capture the passion of the stage and the love of fans.',
    'More than art, these NFTs represent connection — a bridge between idols and global fans, carrying unique stories, emotions, and unforgettable memories.',
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const titleScale = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6], [0.5, 0.8, 1.1, 1]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.1, 0.3], [0, 0.7, 1]);
  const titleY = useTransform(scrollYProgress, [0, 0.3], [100, 0]);
  const titleRotate = useTransform(scrollYProgress, [0, 0.3], [5, 0]);
  const titleBlur = useTransform(scrollYProgress, [0, 0.2], [10, 0]);
  
  const textScale = useTransform(scrollYProgress, [0, 0.3, 0.6], [0.6, 0.9, 1]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.5], [0, 0.8, 1]);
  const textY = useTransform(scrollYProgress, [0, 0.4], [50, 0]);
  const textBlur = useTransform(scrollYProgress, [0, 0.3], [8, 0]);
  
  const backgroundScale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.3], [0.3, 0]);

  return (
    <Box ref={containerRef} position="relative" py={{ base: '80px', md: '120px' }}>
      <motion.div
        style={{
          scale: backgroundScale,
          opacity: backgroundOpacity
        }}
      >
        <Box
          position="absolute"
          inset="0"
          pointerEvents="none"
          bgGradient="radial-gradient(circle at center, rgba(103, 80, 255, 0.1) 0%, transparent 70%)"
        />
      </motion.div>
      <Container maxW="container.xl" centerContent position="relative" zIndex={1}>
        <motion.div
          style={{
            scale: titleScale,
            opacity: titleOpacity,
            y: titleY,
            rotate: titleRotate,
            filter: `blur(${titleBlur}px)`
          }}
        >
          <Text
            as="h2"
            fontSize={{ base: '36px', md: '52px' }}
            fontWeight="900"
            textTransform="uppercase"
            lineHeight="55px"
            textAlign="left"
            bgGradient="linear-gradient(270deg, #6750FF 0%, #9819AB 100%)"
            bgClip="text"
            textShadow="0 0 30px rgba(103, 80, 255, 0.5), 0 0 60px rgba(152, 25, 171, 0.3)"
            mb={{ base: 12, md: 24 }}
          >
            NFT COLLECTION
          </Text>
        </motion.div>
        
        <motion.div
          style={{
            scale: textScale,
            opacity: textOpacity,
            y: textY,
            filter: `blur(${textBlur}px)`
          }}
        >
          <VStack 
            spacing={{ base: 4, md: 5 }} 
            maxW={{ base: '95%', md: '980px' }} 
            color="whiteAlpha.900" 
            align="stretch"
          >
            {paragraphs.map((p, i) => (
              <motion.div
                key={i}
                initial={{ 
                  opacity: 0, 
                  y: 50,
                  scale: 0.8,
                  rotateX: 45
                }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  scale: 1,
                  rotateX: 0
                }}
                transition={{ 
                  delay: i * 0.15, 
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                viewport={{ once: true, margin: "-50px" }}
                style={{ width: '100%' }}
              >
                <Text
                  fontSize={{ base: '14px', md: '16px' }}
                  lineHeight="30px"
                  textTransform="uppercase"
                  fontWeight="600"
                  textAlign="left"
                  textShadow="0 0 20px rgba(255, 255, 255, 0.15)"
                >
                  {p}
                </Text>
              </motion.div>
            ))}
          </VStack>
        </motion.div>
      </Container>
    </Box>
  );
}

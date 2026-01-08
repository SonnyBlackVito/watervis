"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Box, Text, Flex } from '@chakra-ui/react';

export default function HeroSection() {
  const containerRef = useRef();

  const collections = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    src: `/collection/collection-${i + 1}.webp`,
    alt: `Collection ${i + 1}`
  }));

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const x = useTransform(scrollYProgress, 
    [0, 0.1, 0.3, 0.5, 0.7, 0.9, 1], 
    ['60vw', '40vw', '0vw', '-50vw', '-120vw', '-180vw', '-250vw']
  );
  
  const cardScale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.7, 0.9, 1, 0.8]);
  const cardRotate = useTransform(scrollYProgress, [0, 0.5, 1], [8, 4, 0]);

  const text1Opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8]);
  const text1X = useTransform(scrollYProgress, [0, 0.2], [-60, 0]);
  
  const text2Opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0.8]);
  const text2X = useTransform(scrollYProgress, [0, 0.3], [60, 0]);
  
  const text3Opacity = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0, 1, 1, 0.8]);
  const text3Scale = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0.7, 0.9, 1, 0.8]);

  return (
    <>
      <style jsx>{`
        @keyframes neon-pulse {
          0% {
            text-shadow: 0 0 30px rgba(0, 212, 255, 0.6), 0 0 60px rgba(255, 0, 255, 0.4);
            filter: drop-shadow(0 0 20px rgba(0, 212, 255, 0.3));
          }
          100% {
            text-shadow: 0 0 50px rgba(0, 212, 255, 0.8), 0 0 80px rgba(255, 0, 255, 0.6);
            filter: drop-shadow(0 0 30px rgba(0, 212, 255, 0.5));
          }
        }
        
        .optimized-text {
          contain: layout style paint;
          backface-visibility: hidden;
          perspective: 1000px;
        }
        
        .optimized-container {
          contain: layout style paint;
          will-change: transform;
        }
      `}</style>
      <Box
        ref={containerRef}
        position="relative"
        minH={{ base: "600vh", sm: "800vh", md: "1000vh", lg: "1200vh" }}
        style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
      >
      <Box position="fixed" top="-10vh" left="0" w="100%" h={{ base: "100vh", sm: "100vh", md: "110vh", lg: "120vh" }} zIndex={2}>
        <Box>
          <Box position="absolute" left={{ base: '10vw', sm: '10vw', md: '7vw', lg: '6vw' }} top={{ base: '25vh', sm: '20vh', md: '20vh', lg: '25vh' }} zIndex={30}>
            <motion.div 
              style={{ 
                opacity: text1Opacity,
                x: text1X,
                willChange: 'transform, opacity',
                transform: 'translate3d(0, 0, 0)'
              }}
            >
              <Text 
                m="0" 
                fontSize={{ base: '24px', sm: '28px', md: '32px', lg: '40px', xl: '50px' }} 
                fontWeight="700" 
                letterSpacing={{ base: '0.03em', sm: '0.05em', md: '0.1em' }}
                textTransform="uppercase"
                className="optimized-text"
                style={{
                  background: 'linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 50%, #45B7D1 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: '0 0 20px rgba(255, 107, 107, 0.4)',
                  fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif'
                }}
              >
                RODY COLLECTION
              </Text>
            </motion.div>
          </Box>

          <Box position="absolute" left={{ base: '5vw', sm: '5vw', md: '7vw', lg: '6vw' }} bottom={{ base: '20vh', sm: '28vh', md: '28vh', lg: '28vh' }} zIndex={5}>
            <motion.div 
              style={{ 
                opacity: text2Opacity,
                x: text2X,
                willChange: 'transform, opacity',
                transform: 'translate3d(0, 0, 0)'
              }}
            >
              <Text
                m="0"
                fontSize={{ base: '28px', sm: '32px', md: '40px', lg: '60px', xl: '80px' }}
                fontWeight="900"
                letterSpacing={{ base: '0.03em', sm: '0.02em', md: '0.05em' }}
                textTransform="uppercase"
                className="optimized-text"
                style={{
                  background: 'linear-gradient(45deg, #FFFFFF 0%, #F0F0F0 50%, #E0E0E0 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: '0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.3)',
                  fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif'
                }}
              >
                A LIMITED 300-PIECE
              </Text>
            </motion.div>
          </Box>

          <Box position="absolute" left={{ base: '8vw', sm: '8vw', md: '7vw', lg: '6vw' }} bottom={{ base: '12vh', sm: '15vh', md: '12vh', lg: '12vh' }} zIndex={5}>
            <motion.div 
              style={{ 
                opacity: text3Opacity,
                scale: text3Scale,
                willChange: 'transform, opacity',
                transform: 'translate3d(0, 0, 0)'
              }}
            >
              <Text
                m="0"
                fontSize={{ base: '35px', sm: '38px', md: '40px', lg: '60px', xl: '80px' }}
                fontWeight="900"
                letterSpacing={{ base: '0.03em', sm: '0.03em', md: '0.08em' }}
                textTransform="uppercase"
                className="optimized-text"
                style={{
                  background: 'linear-gradient(135deg, #00D4FF 0%, #FF00FF 50%, #FF6B35 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  WebkitTextStroke: '2px transparent',
                  textShadow: '0 0 30px rgba(0, 212, 255, 0.6), 0 0 60px rgba(255, 0, 255, 0.4)',
                  fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
                  animation: 'neon-pulse 3s ease-in-out infinite alternate'
                }}
              >
                NFT COLLECTION
              </Text>
            </motion.div>
          </Box>
        </Box>

        <motion.div 
          style={{ x }} 
          className="relative w-full h-full optimized-container"
        >
          <motion.div
            style={{
              scale: cardScale,
              rotate: cardRotate,
              willChange: 'transform',
              transform: 'translate3d(0, 0, 0)'
            }}
          >
            <Box
              position="absolute"
              top={{ base: '40vh', sm: '32vh', md: '24vh', lg: '28vh' }}
              left={{ base: '45vw', sm: '42vw', md: '40vw', lg: '35vw' }}
              style={{ 
                transformOrigin: 'left center', 
                willChange: 'transform',
                overflow: 'hidden'
              }}
            >
              <Flex
                gap={{ base: '0.2vw', sm: '0.6vw', md: '0.8vw', lg: '0.8vw' }}
                alignItems="center"
                style={{ minWidth: 'max-content' }}
              >
              {collections.map((c, idx) => (
                <motion.div
                  key={c.id}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    delay: idx * 0.05, 
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                >
                  <Box 
                    position="relative" 
                    w={{ base: '58vw', sm: '63vw', md: '50vw', lg: '22vw' }} 
                    h={{ base: '80vw', sm: '87vw', md: '68vw', lg: '30vw' }}
                    overflow="hidden"
                    zIndex={1}
                  >
                    <Box position="absolute" inset="0">
                      <Image
                        src={c.src}
                        alt={c.alt}
                        fill
                        style={{ objectFit: 'contain' }}
                        sizes="(max-width: 375px) 58vw, (max-width: 480px) 63vw, (max-width: 768px) 22vw, 22vw"
                      />
                    </Box>
                  </Box>
                </motion.div>
              ))}
              </Flex>
            </Box>
          </motion.div>
        </motion.div>
      </Box>
      </Box>
    </>
  );
};

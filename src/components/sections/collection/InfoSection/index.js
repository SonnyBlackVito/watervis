"use client";

import React from 'react';
import { Box, Container, Flex, Text, VStack, Grid } from '@chakra-ui/react';
import HoloCard from './components/HoloCard';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

const InfoRow = ({ lines }) => (
  <VStack spacing={2} color="#FFF">
    {lines.map((line) => (
      <Text
        key={line}
        fontSize={{ base: '16px', md: '18px' }}
        lineHeight="30px"
        fontWeight="800"
        textTransform="uppercase"
        letterSpacing="0.05em"
        textShadow="0 0 25px rgba(255, 255, 255, 0.3), 0 0 40px rgba(255, 255, 255, 0.2)"
      >
        {line}
      </Text>
    ))}
  </VStack>
);

const Title = ({ children }) => (
  <Text
    as="h2"
    fontSize={{ base: '36px', md: '52px' }}
    fontWeight="900"
    textTransform="uppercase"
    lineHeight="55px"
    textAlign="center"
    bgGradient="linear-gradient(270deg, #6750FF 0%, #9819AB 100%)"
    bgClip="text"
    textShadow="0 0 30px rgba(103, 80, 255, 0.5), 0 0 60px rgba(152, 25, 171, 0.3)"
    mb={{ base: 12, md: 24 }}
  >
    {children}
  </Text>
);

const Feature = ({ icon, title, text, gradient }) => (
  <Box
    position="relative"
    p={6}
    borderRadius="xl"
    bg="rgba(0, 0, 0, 0.4)"
    backdropFilter="blur(20px)"
    border="1px solid"
    borderColor="whiteAlpha.200"
    transition="all 0.4s ease"
    _hover={{
      transform: 'translateY(-8px)',
      borderColor: 'whiteAlpha.400',
      boxShadow: `0 20px 40px ${gradient}40`,
    }}
    _before={{
      content: '""',
      position: 'absolute',
      inset: '-1px',
      borderRadius: 'xl',
      padding: '1px',
      background: `linear-gradient(135deg, ${gradient}, transparent)`,
      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
      WebkitMaskComposite: 'xor',
      maskComposite: 'exclude',
      opacity: 0,
      transition: 'opacity 0.4s',
      _groupHover: { opacity: 1 }
    }}
    role="group"
    maxW="320px"
    mx="auto"
  >
    {/* Icon with gradient background */}
    <Box
      w="60px"
      h="60px"
      borderRadius="full"
      bg={`linear-gradient(135deg, ${gradient}30, ${gradient}10)`}
      display="flex"
      alignItems="center"
      justifyContent="center"
      mb={4}
      mx="auto"
      position="relative"
      _before={{
        content: '""',
        position: 'absolute',
        inset: '-2px',
        borderRadius: 'full',
        background: `linear-gradient(135deg, ${gradient}, transparent)`,
        opacity: 0.5,
        filter: 'blur(8px)',
      }}
    >
      <Text fontSize="2xl" position="relative" zIndex={1}>{icon}</Text>
    </Box>
    

    <VStack spacing={2}>
      <Text
        fontSize={{ base: '18px', md: '20px' }}
        fontWeight="900"
        textTransform="uppercase"
        bgGradient={`linear-gradient(270deg, ${gradient} 0%, ${gradient} 100%)`}
        bgClip="text"
        letterSpacing="0.05em"
        textShadow={`0 0 20px ${gradient}40`}
      >
        {title}
      </Text>
      <Text
        fontSize={{ base: '13px', md: '14px' }}
        color="whiteAlpha.700"
        lineHeight="22px"
        textAlign="center"
      >
        {text}
      </Text>
    </VStack>
  </Box>
);

const Stat = ({ label, value }) => {
  const stringValue = String(value);
  const hasSolUnit = stringValue.toUpperCase().includes('SOL');
  const [numericPart, unitPart] = hasSolUnit
    ? [stringValue.replace(/\s*SOL/i, '').trim(), 'SOL']
    : [stringValue, ''];

  return (
    <VStack spacing={1}>
      <Text
        fontSize={{ base: '24px', md: '32px' }}
        fontWeight="black"
        textShadow="0 0 30px rgba(103, 80, 255, 0.5)"
      >
        <Box as="span" color="#FFFFFF">{numericPart}</Box>
        {hasSolUnit && (
          <Box
            as="span"
            ml={2}
            bgGradient="linear-gradient(90deg, #00FFA3 0%, #DC1FFF 100%)"
            bgClip="text"
          >
            {unitPart}
          </Box>
        )}
      </Text>
      <Text
        fontSize={{ base: '12px', md: '14px' }}
        color="whiteAlpha.600"
        textTransform="uppercase"
        letterSpacing="0.05em"
      >
        {label}
      </Text>
    </VStack>
  );
};

export default function InfoSection() {
  return (
    <Box py={{ base: '80px', md: '100px' }}>
      <Container maxW="container.xl">
        <RevealOnScroll initialY={24}>
          <Flex align="center" gap={4} mb={{ base: 8, md: 10 }}>
            <Text
              color="white"
              fontSize={{ base: '20px', md: '28px' }}
              fontWeight="black"
              letterSpacing="0.08em"
              textTransform="uppercase"
              textShadow="0 0 30px rgba(255, 255, 255, 0.4), 0 0 50px rgba(255, 255, 255, 0.2)"
            >
              COLLECTIONS
            </Text>
            <Box flex="1" h="2px" bg="whiteAlpha.800" boxShadow="0 0 10px rgba(255, 255, 255, 0.3)" />
          </Flex>
        </RevealOnScroll>

        <Box textAlign="center">
          <RevealOnScroll initialY={36}>
            <Title>
              KpopRoad Genesis
            </Title>
          </RevealOnScroll>
          <RevealOnScroll delay={0.05}>
            <InfoRow lines={[
              'Total Supply: 300',
              'Mint Date: Coming Soon',
            ]} />
          </RevealOnScroll>
          
          {/* Description */}
          <RevealOnScroll delay={0.1}>
            <Text 
              maxW="800px" 
              mx="auto" 
              mt={6}
              fontSize={{ base: '14px', md: '16px' }}
              color="whiteAlpha.800"
              lineHeight="28px"
              fontWeight="500"
            >
              The genesis collection of KpopRoad NFTs - 300 unique digital collectibles featuring K-pop inspired characters, unlocking exclusive access to the KpopRoad ecosystem.
            </Text>
          </RevealOnScroll>

          <RevealOnScroll delay={0.15} initialY={40}>
            <HoloCard />
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <Flex gap={4} justify="center" mt={5} flexWrap="wrap">
              <Box
                as="button"
                px={5}
                py={3}
                minWidth={{ base: '160px', md: '180px' }}
                fontSize={{ base: '12px', md: '14px' }}
                fontWeight="800"
                textTransform="uppercase"
                letterSpacing="0.05em"
                bgGradient="linear-gradient(270deg, #6750FF 0%, #9819AB 100%)"
                color="white"
                borderRadius="full"
                transition="all 0.3s"
                _hover={{ transform: 'scale(1.05)', boxShadow: '0 0 30px rgba(103, 80, 255, 0.6)' }}
              >
                Mint Now
              </Box>
            </Flex>
          </RevealOnScroll>

          <RevealOnScroll delay={0.25}>
            <Flex gap={{ base: 6, md: 12 }} justify="center" mt={12} flexWrap="wrap">
              <Stat label="Floor Price" value="1.2 SOL" />
              <Stat label="Total Volume" value="150 SOL" />
              <Stat label="Holders" value="250+" />
            </Flex>
          </RevealOnScroll>

          <Box mt={16}>
            <RevealOnScroll delay={0.3}>
              <Grid
                templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
                gap={{ base: 6, md: 8 }}
              >
                <Feature 
                  icon="🎵" 
                  title="Exclusive Access" 
                  text="VIP access to virtual concerts and exclusive K-pop content"
                  gradient="#FF6B9D, #FFC371"
                />
                <Feature 
                  icon="💎" 
                  title="Holder Rewards" 
                  text="Special perks, airdrops, and community benefits"
                  gradient="#6750FF, #9819AB"
                />
                <Feature 
                  icon="🎨" 
                  title="Limited Edition" 
                  text="300 unique hand-crafted digital collectibles"
                  gradient="#00F5FF, #7B2FF7"
                />
              </Grid>
            </RevealOnScroll>
          </Box>

          {/* Artist Credit */}
          <RevealOnScroll delay={0.35}>
            <Text 
              fontSize="sm" 
              color="whiteAlpha.500" 
              mt={12}
              fontStyle="italic"
            >
              Artwork by KpopRoad Artists • Powered by KpopRoad Team
            </Text>
          </RevealOnScroll>
        </Box>
      </Container>
    </Box>
  );
};

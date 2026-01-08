"use client";

import { Box, Text, VStack, HStack, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaTelegram, FaMedium } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function JoinOurCommunity() {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const generated = Array.from({ length: 12 }).map(() => {
      const top = `${Math.random() * 100}%`;
      const left = `${Math.random() * 100}%`;
      const size = `${Math.random() * 3 + 2}px`;
      const delay = `${Math.random() * 3}s`;
      return { top, left, size, delay };
    });
    setDots(generated);
  }, []);

  return (
    <Box
      w="100vw"
      minH="500px"
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={4}
      py={20}
      overflow="hidden"
      overflowX="hidden"
      ml="calc(-50vw + 50%)"
      mr="calc(-50vw + 50%)"
    >
      {dots.map((dot, i) => (
        <Box
          key={i}
          position="absolute"
          top={dot.top}
          left={dot.left}
          w={dot.size}
          h={dot.size}
          bg="rgba(138, 43, 226, 0.4)"
          borderRadius="full"
          sx={{
            animation: "floatUpDown 6s ease-in-out infinite",
            animationDelay: dot.delay,
          }}
          zIndex={1}
          aria-hidden="true"
        />
      ))}
      <Box
        position="relative"
        maxW="1200px"
        w="100%"
        borderRadius="24px"
        border="2px solid"
        borderColor="#6f44ad"
        p={{ base: 4, md: 5, lg: 6 }}
        textAlign="center"
        bg="linear-gradient(135deg, rgba(138, 43, 226, 0.1), rgba(147, 112, 219, 0.1))"
        backdropFilter="blur(20px)"
        zIndex={2}
        transition="all 0.3s ease"
      >
        <VStack spacing={6} align="center" position="relative" zIndex={2}>
          <Image
            src="/logo/logo.png"
            alt="Kpop Road Logo"
            w={{ base: "200px", md: "250px", lg: "300px" }}
            h="auto"
            objectFit="contain"
            filter="drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))"
          />
          <Text
            fontSize={{ base: '20px', md: '22px', lg: '25px' }}
            fontWeight="bold"
            bg="linear-gradient(135deg, #6750FF, #9819AB, #8A2BE2)"
            bgClip="text"
            color="#fff"
            textShadow="0 0 20px rgba(138, 43, 226, 0.5)"
            letterSpacing="wide"
            position="relative"
            _after={{
              content: '""',
              position: "absolute",
              bottom: "-8px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "120px",
              height: "3px",
              background: "linear-gradient(90deg, #6750FF, #9819AB, #8A2BE2)",
              borderRadius: "2px"
            }}
          >
            Join Our Community
          </Text>
          <Text
            fontSize={{ base: '14px', md: '16px' }}
            color="white"
            opacity={0.9}
            maxW="800px"
            mx="auto"
            px={{ base: 4, md: 6 }}
            py={{ base: 2, md: 3 }}
            lineHeight="1.6"
            textAlign="center"
          >
            K-POP ROAD is a Web3 platform that connects global fans with K-POP
            artists, offering exclusive content, NFT trading, voting,
            merchandise, and K-brand products. Through on-chain governance, fans
            evolve from participants into true co-creators of the K-POP
            ecosystem.
          </Text>
          <HStack spacing={6} mt={3} flexWrap="wrap" justifyContent="center">
            <Box
              as={Link}
              href="https://t.me/kpoproad"
              target="_blank"
              rel="noopener noreferrer"
              color="#fff"
              fontWeight="bold"
              fontSize="14px"
              display="flex"
              alignItems="center"
              gap={2}
              textDecoration="none"
              borderRadius="lg"
              transition="all 0.3s ease"
              _hover={{ 
                textDecoration: "none",
                color: "#8A2BE2",
                bg: "rgba(138, 43, 226, 0.1)",
                transform: "translateY(-2px)"
              }}
            >
              <FaTelegram />
              Telegram
            </Box>

            <Box
              as={Link}
              href="https://medium.com/@kpoproad9"
              target="_blank"
              rel="noopener noreferrer"
              color="#fff"
              fontWeight="bold"
              fontSize="14px"
              display="flex"
              alignItems="center"
              gap={2}
              textDecoration="none"
              borderRadius="lg"
              transition="all 0.3s ease"
              _hover={{ 
                textDecoration: "none",
                color: "#8A2BE2",
                bg: "rgba(138, 43, 226, 0.1)",
                transform: "translateY(-2px)"
              }}
            >
              <FaMedium />
              Medium
            </Box>
            
            <Box
              as={Link}
              href="https://x.com/kpop_road"
              target="_blank"
              rel="noopener noreferrer"
              color="#fff"
              fontWeight="bold"
              fontSize="14px"
              display="flex"
              alignItems="center"
              gap={2}
              textDecoration="none"
              borderRadius="lg"
              transition="all 0.3s ease"
              _hover={{ 
                textDecoration: "none",
                color: "#8A2BE2",
                bg: "rgba(138, 43, 226, 0.1)",
                transform: "translateY(-2px)"
              }}
            >
              <FaXTwitter />
              Twitter
            </Box>
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
}

"use client";
import { Box, Container, VStack, Text, Image, Flex } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { useEffect, useRef, useState } from "react";

const kfFloatUpDown = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const kfGradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const kfNoiseGrain = keyframes`
  0%, 100% { transform: translate(0, 0); }
  10% { transform: translate(-5%, -5%); }
  20% { transform: translate(-10%, 5%); }
  30% { transform: translate(5%, -10%); }
  40% { transform: translate(-5%, 15%); }
  50% { transform: translate(-10%, 5%); }
  60% { transform: translate(15%, 0); }
  70% { transform: translate(0, 10%); }
  80% { transform: translate(-15%, 0); }
  90% { transform: translate(10%, 5%); }
`;

const kfVerticalBeam = keyframes`
  0% { transform: translateY(-100%); opacity: 0; }
  15% { opacity: 0.9; }
  85% { opacity: 0.9; }
  100% { transform: translateY(100vh); opacity: 0; }
`;

const kfBreathe = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

const kfPulseGlow = keyframes`
  0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
  50% { transform: translate(-50%, -50%) scale(1.05); opacity: 0.8; }
`;

const kfPulseLine = keyframes`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
`;

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isHoveringSecond, setIsHoveringSecond] = useState(false);
  const videoRef = useRef(null);
  const videoRefSecond = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (isHovering) {
        videoRef.current.play().catch(console.error);
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isHovering]);

  useEffect(() => {
    if (videoRefSecond.current) {
      if (isHoveringSecond) {
        videoRefSecond.current.play().catch(console.error);
      } else {
        videoRefSecond.current.pause();
        videoRefSecond.current.currentTime = 0;
      }
    }
  }, [isHoveringSecond]);

  return (
    <Box
      minH="100vh"
      position="relative"
      borderTop="1px"
      borderColor="rgba(255, 255, 255, 0.1)"
      overflow="hidden"
      w="100%"
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        opacity={0.03}
        zIndex={1}
        animation={`${kfNoiseGrain} 1s steps(10) infinite`}
        pointerEvents="none"
        backgroundImage="url(data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E)"
        backgroundRepeat="repeat"
        backgroundSize="200px 200px"
      />
      {[10, 30, 50, 70, 90].map((left, i) => (
        <Box
          key={i}
          position="absolute"
          top={0}
          left={`${left}%`}
          w="1px"
          h="100%"
          bg="rgba(255, 255, 255, 0.1)"
          zIndex={1}
          pointerEvents="none"
          display={{ base: "none", md: "block" }}
        />
      ))}

      <Box
        position="absolute"
        top="-250px"
        left={{ base: "20%", md: "10%" }}
        w="2px"
        h="250px"
        bg="linear-gradient(270deg, #FFB6E1 0%, #FFA6C9 100%)"
        boxShadow="0 4px 4px 0 rgba(0, 0, 0, 0.25)"
        zIndex={2}
        pointerEvents="none"
        animation={`${kfVerticalBeam} 4s cubic-bezier(0.4, 0, 0.2, 1) infinite`}
      />

      <Box
        position="absolute"
        top="-250px"
        left={{ base: "30%", md: "30%" }}
        w="2px"
        h="250px"
        bg="linear-gradient(270deg, #FFB6E1 0%, #FFA6C9 100%)"
        boxShadow="0 4px 4px 0 rgba(0, 0, 0, 0.25)"
        zIndex={2}
        pointerEvents="none"
        display={{ base: "none", md: "block" }}
        animation={`${kfVerticalBeam} 7s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite 1s`}
      />

      <Box
        position="absolute"
        top="-250px"
        left="50%"
        w="2px"
        h="250px"
        bg="linear-gradient(270deg, #FFB6E1 0%, #FFA6C9 100%)"
        boxShadow="0 4px 4px 0 rgba(0, 0, 0, 0.25)"
        zIndex={2}
        pointerEvents="none"
        animation={`${kfVerticalBeam} 8s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite 2s`}
      />

      <Box
        position="absolute"
        top="-250px"
        left="70%"
        w="2px"
        h="250px"
        bg="linear-gradient(270deg, #FFB6E1 0%, #FFA6C9 100%)"
        boxShadow="0 4px 4px 0 rgba(0, 0, 0, 0.25)"
        zIndex={2}
        pointerEvents="none"
        display={{ base: "none", md: "block" }}
        animation={`${kfVerticalBeam} 6.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite 0.5s`}
      />

      <Box
        position="absolute"
        top="-250px"
        left={{ base: "80%", md: "90%" }}
        w="2px"
        h="250px"
        bg="linear-gradient(270deg, #FFB6E1 0%, #FFA6C9 100%)"
        boxShadow="0 4px 4px 0 rgba(0, 0, 0, 0.25)"
        zIndex={2}
        pointerEvents="none"
        animation={`${kfVerticalBeam} 7.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite 1.5s`}
      />

      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        zIndex={2}
        bg="linear-gradient(120deg, rgba(103, 80, 255, 0.08) 0%, rgba(152, 25, 171, 0.06) 50%, rgba(103, 80, 255, 0.08) 100%)"
        backgroundSize="200% 200%"
        animation={`${kfGradientShift} 12s ease-in-out infinite`}
        pointerEvents="none"
      />

      <Box
        position="absolute"
        top={`${mousePosition.y * 0.3}%`}
        left={`${mousePosition.x * 0.2}%`}
        w={{ base: "300px", md: "400px", lg: "600px" }}
        h={{ base: "300px", md: "400px", lg: "600px" }}
        bg="radial-gradient(circle, rgba(103, 80, 255, 0.08) 0%, transparent 70%)"
        borderRadius="50%"
        transform="translate(-50%, -50%)"
        zIndex={2}
        animation={`${kfFloatUpDown} 6s ease-in-out infinite`}
        transition="all 0.8s ease-out"
      />

      <Box
        position="absolute"
        top={`${100 - mousePosition.y * 0.2}%`}
        right={`${100 - mousePosition.x * 0.15}%`}
        w={{ base: "200px", md: "300px", lg: "400px" }}
        h={{ base: "200px", md: "300px", lg: "400px" }}
        bg="radial-gradient(circle, rgba(152, 25, 171, 0.06) 0%, transparent 70%)"
        borderRadius="50%"
        transform="translate(50%, 50%)"
        zIndex={2}
        animation={`${kfFloatUpDown} 6s ease-in-out infinite 2s`}
        transition="all 0.8s ease-out"
      />

      <Container
        maxW="container.xl"
        position="relative"
        zIndex={4}
        pt={{ base: 6, md: 8 }}
        pb={{ base: 12, md: 20 }}
        px={{ base: 4, sm: 6, md: 8, lg: 9 }}
      >
        <Flex
          direction={{ base: "column", lg: "row" }}
          align="center"
          justify="space-between"
          minH={{ base: "auto", lg: "80vh" }}
          gap={{ base: 8, md: 10 }}
        >
          <VStack
            align={{ base: "center", lg: "start" }}
            spacing={{ base: 6, md: 8, lg: 10 }}
            flex={{ base: "1", lg: "2" }}
            maxW="100%"
            textAlign={{ base: "center", lg: "left" }}
            order={{ base: 2, lg: 1 }}
          >
            <VStack
              spacing={{ base: 4, md: 6 }}
              align={{ base: "center", lg: "start" }}
            >
              <Text
                fontSize={{ base: "28px", sm: "36px", md: "40px", lg: "48px" }}
                fontWeight="bold"
                color="#fff"
                lineHeight="1.2"
                textShadow="0 0 20px rgba(138, 43, 226, 0.7)"
                px={{ base: 2, sm: 0 }}
              >
                Kpop Road — The Power of NFT & Web3 for K-pop Fans
              </Text>

              <Text
                fontSize={{ base: "14px", sm: "15px", md: "16px" }}
                color="white"
                opacity={0.9}
                lineHeight="1.6"
                px={{ base: 2, sm: 0 }}
                mb={{ base: 4, sm: 4, md: 6 }}
                maxW={{ base: "100%", lg: "90%" }}
              >
                Kpop Road is an innovative project that brings K-pop fandom into
                the world of Web3 and blockchain. Fans can collect exclusive
                NFTs, participate in global voting, and unlock direct
                connections with their idols.
              </Text>
            </VStack>

            <VStack
              spacing={{ base: 8, md: 12, lg: 20 }}
              align={{ base: "center", lg: "start" }}
              w="100%"
            >
              <Flex
                direction={{ base: "column", sm: "row" }}
                gap={{ base: 4, md: 6 }}
                w="100%"
                maxW="800px"
              >
                <Box
                  flex={1}
                  bg="radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139, 92, 246, 0.25), transparent 70%), #000000"
                  borderRadius="10px"
                  p={{ base: 4, md: 6 }}
                  backdropFilter="blur(10px)"
                  position="relative"
                  overflow="hidden"
                  transition="all 0.3s ease"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  _hover={{
                    transform: { base: "none", md: "translateY(-5px)" },
                  }}
                >
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    opacity={isHovering ? 0.3 : 0}
                    transition="opacity 0.3s ease"
                    overflow="hidden"
                    borderRadius="10px"
                    display={{ base: "none", md: "block" }}
                  >
                    <Box
                      as="video"
                      ref={videoRef}
                      src="/audition/homepage/nft.webm"
                      muted
                      loop
                      playsInline
                      position="absolute"
                      top="50%"
                      left="50%"
                      minW="100%"
                      minH="100%"
                      transform="translate(-50%, -50%)"
                      objectFit="cover"
                      zIndex={1}
                    />
                  </Box>

                  <VStack
                    spacing={3}
                    align="start"
                    position="relative"
                    zIndex={2}
                  >
                    <Text
                      fontSize={{ base: "md", md: "lg" }}
                      fontWeight="bold"
                      bg="linear-gradient(270deg, #6750FF 0%, #9819AB 100%)"
                      bgClip="text"
                      style={{
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      NEXST LIVE EXPERIENCE
                    </Text>
                    <Text
                      color="white"
                      opacity={0.9}
                      lineHeight="1.6"
                      fontSize={{ base: "xs", md: "sm" }}
                    >
                      Step into a journey where technology meets music, offering
                      exclusive experiences and direct connections.
                    </Text>
                  </VStack>
                </Box>

                <Box
                  flex={1}
                  bg="radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139, 92, 246, 0.25), transparent 70%), #000000"
                  p={{ base: 4, md: 6 }}
                  borderRadius="10px"
                  backdropFilter="blur(10px)"
                  position="relative"
                  overflow="hidden"
                  transition="all 0.3s ease"
                  onMouseEnter={() => setIsHoveringSecond(true)}
                  onMouseLeave={() => setIsHoveringSecond(false)}
                  _hover={{
                    transform: { base: "none", md: "translateY(-5px)" },
                  }}
                >
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    opacity={isHoveringSecond ? 0.3 : 0}
                    transition="opacity 0.3s ease"
                    overflow="hidden"
                    borderRadius="10px"
                    display={{ base: "none", md: "block" }}
                  >
                    <Box
                      as="video"
                      ref={videoRefSecond}
                      src="/audition/homepage/nft.webm"
                      muted
                      loop
                      playsInline
                      position="absolute"
                      top="50%"
                      left="50%"
                      minW="100%"
                      minH="100%"
                      transform="translate(-50%, -50%)"
                      objectFit="cover"
                      zIndex={1}
                    />
                  </Box>

                  <VStack
                    spacing={3}
                    align="start"
                    position="relative"
                    zIndex={2}
                  >
                    <Text
                      fontSize={{ base: "md", md: "lg" }}
                      fontWeight="bold"
                      bg="linear-gradient(270deg, #6750FF 0%, #9819AB 100%)"
                      bgClip="text"
                      style={{
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      LIVE INTERACTION
                    </Text>
                    <Text
                      color="white"
                      opacity={0.9}
                      lineHeight="1.6"
                      fontSize={{ base: "xs", md: "sm" }}
                    >
                      Not just watching — but joining, interacting, and feeling
                      closer to your idols than ever before.
                    </Text>
                  </VStack>
                </Box>
              </Flex>
            </VStack>
          </VStack>

          <Box
            flex={{ base: "1", lg: "1" }}
            position="relative"
            display="flex"
            justifyContent="center"
            alignItems="center"
            maxW="100%"
            order={{ base: 1, lg: 2 }}
            mb={{ base: 6, lg: 0 }}
          >
            <Box
              position="relative"
              animation={`${kfBreathe} 3s ease-in-out infinite`}
            >
              <Image
                src="/audition/homepage/nft-mascot.webp"
                alt="Kpop Road Mascot"
                maxW={{ base: "350px", sm: "300px", md: "350px", lg: "500px" }}
                height="auto"
                zIndex={5}
                filter="drop-shadow(0 0 15px rgba(138, 43, 226, 0.3))"
              />

              <Box
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                w="110%"
                h="110%"
                bg="radial-gradient(circle, rgba(138, 43, 226, 0.08) 0%, transparent 70%)"
                borderRadius="50%"
                animation={`${kfPulseGlow} 3s ease-in-out infinite`}
                zIndex={4}
              />
            </Box>
            <Box
              position="absolute"
              top="60%"
              left="50%"
              transform="translateX(-50%)"
              zIndex={3}
              display={{ base: "none", md: "block" }}
            >
              {[-60, 0, 60].map((left, i) => (
                <Box
                  key={i}
                  position="absolute"
                  w="2px"
                  h="100px"
                  bg="linear-gradient(to bottom, rgba(138, 43, 226, 0.4), rgba(103, 80, 255, 0.2), transparent)"
                  left={`${left}px`}
                  animation={`${kfPulseLine} 5s ease-in-out infinite ${i}s`}
                  borderRadius="1px"
                  boxShadow="0 0 4px rgba(138, 43, 226, 0.15)"
                />
              ))}
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

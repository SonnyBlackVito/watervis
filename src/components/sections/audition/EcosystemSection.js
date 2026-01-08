import { Box, Container, Text, VStack, Flex } from "@chakra-ui/react";
import Image from "next/image";

export default function EcosystemSection() {
  const ecosystemItems = [
    {
      number: "01",
      title: "Kpop Road Vote",
      description:
        "Fans can vote to support their favorite or rising idols, pushing them onto the global ranking chart and opening new opportunities.",
    },
    {
      number: "02",
      title: "Standardize Idols into NFT cards",
      description:
      "From fan passion to digital power Unique characters like Rody are transformed into dazzling idols on stage, immortalized as collectible NFT cards.",
    },
    {
      number: "03",
      title: "Fan Reward",
      description: "Earn rewards through participation: airdrops, merchandise, concert passes, and unforgettable fan experiences.",
    },
    {
      number: "04",
      title: "KpopRoad Marketplace",
      description: "A vibrant marketplace where fans can trade, collect, and unlock exclusive idol experiences.",
    },
  ];

  return (
    <>
      <Box py={{ base: 16, md: 20 }} position="relative" zIndex={3}>
        <Box
          position="absolute"
          top={{ base: 2, md: -20 }}
          right={{ base: 18, md: 2 }}
          w={{ md: "360px", lg: "500px" }}
          h={{ md: "160px", lg: "200px" }}
          pointerEvents="none"
          zIndex={0}
          opacity={{ base: 0.45, md: 0.5 }}
          display={{ base: "none", md: "block" }}
        >
          <Image src="/audition/homepage/kpoproad-layer-1.png" alt="kpoproad layer 1" fill style={{ objectFit: "contain" }} />
        </Box>
        <Box
          position="absolute"
          bottom={{ base: -8, md: -20 }}
          left={{ base: 18, md: 2 }}
          w={{ md: "360px", lg: "500px" }}
          h={{ md: "160px", lg: "200px" }}
          pointerEvents="none"
          zIndex={0}
          opacity={{ base: 0.45, md: 0.5 }}
          display={{ base: "none", md: "block" }}
        >
          <Image src="/audition/homepage/kpoproad-layer-2.png" alt="kpoproad layer 2" fill style={{ objectFit: "contain" }} />
        </Box>

        <Container maxW="container.xl" px={4} position="relative" zIndex={2}>
          <VStack spacing={16} align="center">
            <Text
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              fontWeight="bold"
              color="white"
              textAlign="center"
              textShadow="0 0 20px rgba(138, 43, 226, 0.5)">
              Ecosystem
            </Text>

            <Flex
              direction={{ base: "column", lg: "row" }}
              gap={{ base: 8, lg: 6 }}
              w="100%"
              justify="flex-start"
              align="stretch">
              {ecosystemItems.map((item, index) => (
                <Box
                  key={index}
                  flex={1}
                  maxW={{ base: "100%", lg: "25%" }}
                  px={6}
                  py={10}
                  borderRadius="24px"
                  bg="radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139, 92, 246, 0.25), transparent 70%), radial-gradient(ellipse 80% 60% at 50% 100%, rgba(139, 92, 246, 0.25), transparent 70%), #000000"
                  border="1px solid rgba(255, 255, 255, 0.2)"
                  boxShadow="0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
                  position="relative"
                  overflow="hidden"
                  transition="all 0.6s ease"
                  sx={{
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "200%",
                      height: "2px",
                      background:
                        "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)",
                      transform:
                        "translateX(-100%) translateY(-100%) rotate(45deg)",
                      animation: "shine 3s ease-in-out infinite",
                      animationDelay: `${index * 0.5}s`,
                      zIndex: 1,
                      pointerEvents: "none",
                      boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
                    },
                    "@keyframes shine": {
                      "0%": {
                        transform:
                          "translateX(-100%) translateY(-100%) rotate(45deg)",
                        opacity: 0,
                      },
                      "50%": {
                        opacity: 1,
                      },
                      "100%": {
                        transform:
                          "translateX(100%) translateY(100%) rotate(45deg)",
                        opacity: 0,
                      },
                    },
                  }}
                  _hover={{
                    transform: "translateY(-8px)",
                    boxShadow:
                      "0 12px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                  }}>
                  <VStack
                    spacing={3}
                    align="flex-start"
                    position="relative"
                    zIndex={2}>
                    {/* Number */}
                    <Text
                      bg="linear-gradient(180deg, #FFF 0%, #7A798A 100%)"
                      bgClip="text"
                      fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                      fontWeight="bold"
                      color="transparent"
                      lineHeight="1"
                      textShadow="0 4px 12px rgba(0, 0, 0, 0.4)"
                      filter="drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))">
                      {item.number}
                    </Text>

                    {/* Title */}
                    <Text
                      fontSize={{ base: "18px", md: "20px", lg: "20px" }}
                      fontWeight="bold"
                      bg="linear-gradient(270deg,rgb(156, 38, 174) 0%, #9819AB 100%)"
                      bgClip="text"
                      color="transparent"
                      textAlign="left"
                      lineHeight="1.2"
                      textShadow="0 2px 8px rgba(0, 0, 0, 0.4)"
                      filter="drop-shadow(0 0 4px rgba(138, 43, 226, 0.3))">
                      {item.title}
                    </Text>

                    {/* Description */}
                    <Text
                      fontSize={{ base: "sm", md: "md" }}
                      color="rgba(255, 255, 255, 0.85)"
                      lineHeight="1.6"
                      textAlign="left"
                      maxW="280px"
                      textShadow="0 1px 4px rgba(0, 0, 0, 0.3)">
                      {item.description}
                    </Text>
                  </VStack>
                </Box>
              ))}
            </Flex>
          </VStack>
        </Container>
      </Box>
    </>
  );
}

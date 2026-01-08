"use client"

import { 
  Box, 
  Container, 
  Text, 
  VStack, 
  Image,
  Badge,
  SimpleGrid,
} from '@chakra-ui/react'
import { useState } from 'react'

export default function PartnersSectionComponent() {
  const [hoveredCard, setHoveredCard] = useState(null)

  const partners = [
    {
      id: 1,
      name: "Kim",
      role: "Creative Director",
      description: "Creative visionary leading brand strategy and artistic direction for KpopRoad's visual identity.",
      image: "/audition/homepage/partner-1.webp",
      category: "Creative",
      links: {}
    },
    {
      id: 2,
      name: "Han",
      role: "Creative Director",
      description: "Expert in K-pop culture and entertainment design, crafting immersive experiences for fans worldwide.",
      image: "/audition/homepage/partner-2.webp",
      category: "Creative",
      links: {}
    },
    {
      id: 3,
      name: "Jasmin",
      role: "Designer",
      description: "UI/UX specialist creating intuitive interfaces and stunning visual designs for the KpopRoad platform.",
      image: "/audition/homepage/partner-3.webp",
      category: "Designer",
      links: {}
    },
    {
      id: 4,
      name: "Queenie",
      role: "Designer",
      description: "Graphic design expert bringing K-pop aesthetics to life through innovative visual storytelling.",
      image: "/audition/homepage/partner-4.webp",
      category: "Designer",
      links: {}
    }
  ]

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Blockchain':
        return 'linear-gradient(45deg, rgba(138, 43, 226, 0.8), rgba(156, 38, 174, 0.8))'
      case 'Entertainment':
        return 'linear-gradient(45deg, rgba(255, 0, 128, 0.8), rgba(255, 165, 0, 0.8))'
      case 'Global Brand':
        return 'linear-gradient(45deg, rgba(0, 191, 255, 0.8), rgba(138, 43, 226, 0.8))'
      default:
        return 'linear-gradient(45deg, rgba(138, 43, 226, 0.8), rgba(156, 38, 174, 0.8))'
    }
  }

  return (
    <Box
      py={{ base: 16, md: 20 }}
      position="relative"
      zIndex={3}
    >
      <Container maxW="container.xl" px={4}>
        <VStack spacing={16} align="center">
          <VStack spacing={4} align="center" mb={{ base: 12, md: 16, lg: 20 }}>
            <Text
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              fontWeight="bold"
              color="white"
              textAlign="center"
              textShadow="0 0 20px rgba(138, 43, 226, 0.5)"
            >
              Artists
            </Text>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="rgba(255, 255, 255, 0.8)"
              textAlign="center"
              maxW="600px"
            >
              The people and organizations supporting our journey
            </Text>
          </VStack>

          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
            spacing={{ base: 8, md: 10 }}
            w="100%"
          >
            {partners.map((partner) => (
              <Box
                key={partner.id}
                position="relative"
                w="100%"
                h={{ base: "420px", md: "460px" }}
                px={{ base: 1.5, md: 2 }}
                py={{ base: 1.5, md: 2 }}
                cursor="pointer"
                onMouseEnter={() => setHoveredCard(partner.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Box
                  position="absolute"
                  inset={0}
                  borderRadius="28px"
                  bg="radial-gradient(120% 120% at 80% 0%, rgba(138, 43, 226, 0.3), transparent)"
                  opacity={hoveredCard === partner.id ? 1 : 0.6}
                  transition="opacity 0.4s ease, transform 0.4s ease"
                  transform={hoveredCard === partner.id ? "scale(1.02)" : "scale(1)"}
                  filter="blur(25px)"
                  zIndex={0}
                />

                <Box
                  position="relative"
                  h="100%"
                  borderRadius="24px"
                  p="1.5px"
                  bg={hoveredCard === partner.id
                    ? 'linear-gradient(140deg, rgba(138, 43, 226, 0.9), rgba(12, 8, 32, 0.8))'
                    : 'linear-gradient(140deg, rgba(138, 43, 226, 0.5), rgba(12, 8, 32, 0.7))'}
                  transition="all 0.45s cubic-bezier(0.4, 0, 0.2, 1)"
                  boxShadow={hoveredCard === partner.id
                    ? '0 28px 50px rgba(0, 0, 0, 0.55), 0 0 45px rgba(138, 43, 226, 0.35)'
                    : '0 16px 32px rgba(0, 0, 0, 0.45)'}
                >
                  <Box
                    position="relative"
                    w="100%"
                    h="100%"
                    borderRadius="22px"
                    overflow="hidden"
                    bg="rgba(7, 4, 20, 0.9)"
                    backdropFilter="blur(12px)"
                    transition="transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)"
                    transform={hoveredCard === partner.id ? "translateY(-6px) scale(1.01)" : "translateY(0) scale(1)"}
                  >
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      w="100%"
                      h="100%"
                      objectFit="cover"
                      transition="all 0.45s ease"
                      filter={hoveredCard === partner.id ? "brightness(1.08) contrast(1.1)" : "brightness(0.98) contrast(1)"}
                      transform={hoveredCard === partner.id ? "scale(1.04)" : "scale(1)"}
                    />

                    <Box
                      position="absolute"
                      inset={0}
                      bg="linear-gradient(180deg, rgba(0, 0, 0, 0) 40%, rgba(4, 2, 14, 0.85) 72%, rgba(6, 3, 18, 0.95) 100%)"
                    />

                    <Box
                      position="absolute"
                      bottom={0}
                      left={0}
                      right={0}
                      p={{ base: 5, md: 6 }}
                      zIndex={2}
                    >
                      <VStack align="flex-start" spacing={2}>
                        <Text
                          fontSize={{ base: "xl", md: "2xl" }}
                          fontWeight="semibold"
                          color="white"
                          textShadow="0 4px 18px rgba(0, 0, 0, 0.7)"
                        >
                          {partner.name}
                        </Text>
                        <Text
                          fontSize="sm"
                          letterSpacing="0.02em"
                          color="rgba(255, 255, 255, 0.85)"
                          textShadow="0 2px 8px rgba(0, 0, 0, 0.6)"
                        >
                          {partner.role}
                        </Text>
                      </VStack>
                    </Box>

                    <Box
                      position="absolute"
                      inset={0}
                      bg="linear-gradient(180deg, rgba(12, 6, 28, 0) 0%, rgba(12, 6, 28, 0.88) 48%, rgba(7, 4, 20, 0.96) 100%)"
                      opacity={hoveredCard === partner.id ? 1 : 0}
                      transition="opacity 0.45s ease"
                      p={{ base: 5, md: 6 }}
                      display="flex"
                      flexDirection="column"
                      justifyContent="flex-end"
                      zIndex={3}
                    >
                      <Text
                        color="rgba(255, 255, 255, 0.95)"
                        fontSize="sm"
                        lineHeight="1.6"
                        mb={4}
                      >
                        {partner.description}
                      </Text>
                    </Box>

                    <Box
                      position="absolute"
                      top={{ base: 4, md: 5 }}
                      right={{ base: 4, md: 5 }}
                      zIndex={4}
                    >
                      <Badge
                        bg={getCategoryColor(partner.category)}
                        color="white"
                        px={3}
                        py={1}
                        borderRadius="full"
                        fontSize="xs"
                        fontWeight="bold"
                        textShadow="0 1px 2px rgba(0, 0, 0, 0.5)"
                        boxShadow="0 8px 20px rgba(0, 0, 0, 0.35)"
                      >
                        {partner.category}
                      </Badge>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </SimpleGrid>

          <VStack spacing={6} align="center" mt={8}>
            <Text
              fontSize="sm" 
              color="whiteAlpha.500" 
              mt={8}
              fontStyle="italic"
            >
              Designed by the KpopRoad artist team
            </Text>
          </VStack>
        </VStack>
      </Container>
    </Box>
  )
}

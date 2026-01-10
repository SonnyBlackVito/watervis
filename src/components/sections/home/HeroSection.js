import { Box, Flex, VStack, Image, HStack, Text } from "@chakra-ui/react";
import AnimatedLogo from "./AnimatedLogo";

export default function HeroSection() {
  return (
    <Flex
      w="full"
      h="100vh"
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      color="#fff"
      py={{ base: 4, md: 8 }}
      px={{ base: 4, md: 24 }}
      // backgroundImage="url('/animated_wave_light_light.gif')"
      backgroundImage="url('/background_image_watervis1.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      // _before={{
      //   content: '""',
      //   position: "absolute",
      //   inset: 0,
      //   backgroundImage: "url('/background_image_watervis.jpg')",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   backgroundRepeat: "no-repeat",
      //   filter: "blur(800px)", // 👈 blur hình ảnh
      //   transform: "scale(1.1)", // tránh viền trắng
      //   zIndex: -1,
      // }}
    >
      <VStack flex="1" justifyContent="center" textAlign="center" gap={4}>
        {/* <AnimatedLogo /> */}
      </VStack>

      <Box
        as="footer"
        w="full"
        borderTop="2px solid"
        borderColor="gray.600"
        pt={4}
        px={{ base: 2, md: 6 }}>
        <Flex
          w="full"
          justifyContent="space-between"
          alignItems="center"
          direction={{ base: "column", md: "row" }}
          gap={4}>
          {/* Social Icons */}
          <HStack gap={{ base: 3, md: 5 }}>
            {["Frame1", "Frame2", "Frame3", "Frame4", "Frame5"].map((frame) => (
              <Image
                key={frame}
                src={`/${frame}.svg`}
                alt={frame}
                boxSize={{ base: "35px", md: "45px" }}
                filter="brightness(1.2)"
                loading="lazy"
              />
            ))}
          </HStack>

          {/* Footer Text */}
          {/* <Text
            fontSize={{ base: "12px", sm: "14px", md: "16px" }}
            fontWeight="500"
            letterSpacing="wide"
            textAlign={{ base: "center", md: "right" }}
            maxW={{ base: "full", md: "50%" }}>
            Where artists and fans shape{" "}
            <Text as="span" fontWeight="700" lineHeight="22px" color="#0EFE21">
              THE FUTURE OF ENTERTAINMENT TOGETHER
            </Text>
          </Text> */}
        </Flex>
      </Box>
    </Flex>
  );
}

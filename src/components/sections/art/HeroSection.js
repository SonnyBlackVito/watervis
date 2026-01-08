import { Box } from "@chakra-ui/react";

export default function HeroSection() {
  return (
    <Box
      minH="100vh"
      bgImage="url('/art/Banner333.webp')"
      backgroundSize={{ base: "cover", md: "cover" }}
      backgroundPosition={{ base: "center", md: "center" }}
      backgroundRepeat="no-repeat"
      backgroundPositionY={{ base: "center", md: "15%" }}
      overflow="hidden"
      position="relative"
      animation="fadeIn 0.6s ease-in-out"
      sx={{
        "@keyframes fadeIn": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      }}
    />
  );
}

import { Box, Flex, Text, Image, VStack, HStack } from "@chakra-ui/react";
import styles from "./TokenomicsSection.module.css";

export default function TokenomicsSection() {
  return (
    <Box
      bg="linear-gradient(150deg, rgba(0, 0, 0, 0.4) 0%,rgba(0, 0, 0, 0.1) 25% ,rgba(0, 0, 0, 0.1) 75%,rgba(0, 0, 0, 0.1) 50%,rgba(185, 179, 179, 0.3) 85% ,rgba(52, 48, 48, 0.3) 100%)"
      py={20}
      px={{ base: 8, md: 12, lg: 16, xl: 20 }}
      className={styles.tokenomicsSparkleBg}>
      <Box className={styles.sparkleOverlay} />

      <Flex justify="center" align="center">
        <Box position="relative" className={styles.chartAnim}>
          <Image
            src="/tokenomics.png"
            alt="Tokenomics Chart"
            // maxW="400px"
            // w="100%"
            width={680}
            height={560}
            h="auto"
            objectFit="contain"
            transition="all 0.3s ease"
            _hover={{
              transform: "scale(1.08)",
              filter:
                "brightness(1.15) drop-shadow(0 0 30px rgba(106, 78, 221, 0.7))",
            }}
          />
        </Box>
      </Flex>
    </Box>
  );
}

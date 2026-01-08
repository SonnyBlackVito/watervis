"use client";

import { motion } from "framer-motion";
import { Box, Text } from "@chakra-ui/react";

export default function CurtainReveal() {
  return (
    <Box
      position="fixed"
      inset={0}
      zIndex={9999}
      display="flex"
      justifyContent="center"
      alignItems="center"
      overflow="hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ position: "absolute", zIndex: 10000 }}>
        {/* <Text fontSize="48px" fontWeight="bold" letterSpacing={6} color="white">
          ARTIST
        </Text> */}
      </motion.div>

      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{
          duration: 1.8,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          inset: 0,
          transformOrigin: "center",
          background: "linear-gradient(to right, #0a0a0a, #3a3a3a, #0a0a0a)",
        }}
      />
    </Box>
  );
}

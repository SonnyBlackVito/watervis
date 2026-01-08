"use client";
import { useState } from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Container,
  SimpleGrid,
  VStack,
  HStack,
  DialogRoot,
  DialogContent,
  DialogHeader,
  DialogBody,
  DialogBackdrop,
  DialogCloseTrigger,
  DialogTitle,
  Button,
} from "@chakra-ui/react";

import { motion } from "framer-motion";
import Link from "next/link";
import { artworks } from "@/utils/array_picasso";

const MotionBox = motion(Box);
const MotionText = motion(Text);

export default function CollectionSection() {
  const [selectedArt, setSelectedArt] = useState(null);

  const handleImageClick = (art) => {
    setSelectedArt(art);
  };

  const handleClose = () => {
    setSelectedArt(null);
  };

  return (
    <>
      <MotionBox
        minH="100vh"
        py={{ base: 16, md: 20, lg: 24 }}
        px={{ base: 4, md: 6 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        position="relative"
        overflow="hidden">
        <Container maxW="container.xl" position="relative">
          <Image
            src="/art/color_line.webp"
            alt="Decorative gradient"
            position="absolute"
            top="-20px"
            left={{ base: "50%", md: "40%" }}
            transform="translateX(-50%)"
            h={{ base: "120px", md: "180px", lg: "220px" }}
            w="auto"
            zIndex={0}
            pointerEvents="none"
          />

          <Flex
            align="center"
            gap={{ base: 4, md: 6, lg: 8 }}
            mb={{ base: 8, md: 10 }}
            direction={{ base: "column", md: "row" }}
            position="relative"
            zIndex={2}>
            <MotionText
              fontFamily="SVN-Gilroy, sans-serif"
              fontSize={{ base: "28px", sm: "36px", md: "44px", lg: "55px" }}
              fontWeight="800"
              lineHeight={{ base: "1.2", md: "1.3" }}
              color="white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              textAlign={{ base: "center", md: "left" }}
              whiteSpace="nowrap"
              flexShrink={0}>
              COLLECTIONS
            </MotionText>

            <MotionBox
              position="relative"
              height={{ base: "2px", md: "3px" }}
              flex="1"
              minW={{ base: "200px", md: "300px" }}
              maxW={{ base: "100%", md: "600px", lg: "800px" }}
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              transformOrigin="left">
              <Box
                position="absolute"
                inset="0"
                background="white"
                borderRadius="full"
              />
            </MotionBox>
          </Flex>

          <Box mt={{ base: 8, md: 12, lg: 16 }}>
            <SimpleGrid
              columns={{ base: 1, sm: 2, lg: 3 }}
              spacing={{ base: 10, md: 14, lg: 16 }}>
              {artworks.map((art) => (
                <Box
                  key={art.id}
                  cursor="pointer"
                  onClick={() => handleImageClick(art)}
                  position="relative"
                  overflow="hidden"
                  border="none"
                  bg="transparent"
                  boxShadow="0 8px 25px rgba(0, 0, 0, 0.6)"
                  transition="all 0.4s ease"
                  _hover={{
                    transform: "translateY(-8px)",
                    boxShadow:
                      "0 20px 50px rgba(255, 215, 0, 0.3)" /* Ánh vàng khi hover */,
                    borderColor: "gold" /* Viền sáng hơn khi hover */,
                  }}>
                  <Image
                    src={art.image}
                    alt={art.title}
                    w="100%"
                    h="auto"
                    objectFit="cover"
                    display="block"
                  />
                  <Text color="white">{art.title}</Text>
                  <Text color="white">{art.price}</Text>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </Container>
      </MotionBox>

      <DialogRoot
        open={!!selectedArt}
        onOpenChange={(e) => {
          if (!e.open) handleClose();
        }}
        size={{ base: "full", md: "xl" }}>
        <DialogBackdrop
          bg="blackAlpha.800"
          backdropFilter="blur(10px)"
          zIndex={9998}
          position="fixed"
          top={0}
          left={0}
          right={0}
          bottom={0}
        />
        <DialogContent
          bg="gray.900"
          color="white"
          borderRadius={{ base: "0", md: "xl" }}
          mx={{ base: 0, md: 4 }}
          my={{ base: 0, md: 4 }}
          maxW={{ base: "100%", md: "600px", lg: "700px" }}
          maxH={{ base: "100vh", md: "90vh" }}
          zIndex={9999}
          position="fixed"
          top={{ base: 0, md: "50%" }}
          left={{ base: 0, md: "50%" }}
          transform={{ base: "none", md: "translate(-50%, -50%)" }}
          overflowY="auto">
          <DialogHeader
            fontFamily="SVN-Gilroy, sans-serif"
            fontSize={{ base: "20px", sm: "24px", md: "28px", lg: "32px" }}
            fontWeight="700"
            borderBottom="1px solid"
            borderColor="whiteAlpha.200"
            pb={{ base: 3, md: 4 }}
            pt={{ base: 4, md: 6 }}
            px={{ base: 4, md: 6 }}
            position="sticky"
            top={0}
            bg="gray.900"
            zIndex={1}>
            <DialogTitle>{selectedArt?.title}</DialogTitle>
            <DialogCloseTrigger />
          </DialogHeader>

          <DialogBody py={{ base: 4, md: 6 }} px={{ base: 4, md: 6 }}>
            {selectedArt && (
              <VStack gap={{ base: 4, md: 6 }} align="stretch">
                <Image
                  src={selectedArt.image}
                  alt={selectedArt.title}
                  borderRadius="md"
                  w="100%"
                  h="auto"
                  maxH={{ base: "250px", sm: "300px", md: "400px" }}
                  objectFit="contain"
                />

                <VStack gap={{ base: 3, md: 4 }} align="stretch">
                  <HStack
                    justify="space-between"
                    flexWrap={{ base: "wrap", sm: "nowrap" }}>
                    <Text
                      fontSize={{ base: "md", md: "lg" }}
                      fontWeight="600"
                      color="gray.400">
                      Artist:
                    </Text>
                    <Text fontSize={{ base: "md", md: "lg" }} fontWeight="500">
                      {selectedArt.artist}
                    </Text>
                  </HStack>

                  <HStack
                    justify="space-between"
                    flexWrap={{ base: "wrap", sm: "nowrap" }}>
                    <Text
                      fontSize={{ base: "md", md: "lg" }}
                      fontWeight="600"
                      color="gray.400">
                      Price:
                    </Text>
                    <Text
                      fontSize={{ base: "lg", md: "xl" }}
                      fontWeight="700"
                      color="green.400">
                      {selectedArt.price}
                    </Text>
                  </HStack>

                  <HStack
                    justify="space-between"
                    flexWrap={{ base: "wrap", sm: "nowrap" }}>
                    <Text
                      fontSize={{ base: "md", md: "lg" }}
                      fontWeight="600"
                      color="gray.400">
                      Year:
                    </Text>
                    <Text fontSize={{ base: "md", md: "lg" }} fontWeight="500">
                      {selectedArt.year}
                    </Text>
                  </HStack>

                  <HStack
                    justify="space-between"
                    flexWrap={{ base: "wrap", sm: "nowrap" }}>
                    <Text
                      fontSize={{ base: "md", md: "lg" }}
                      fontWeight="600"
                      color="gray.400">
                      Medium:
                    </Text>
                    <Text
                      fontSize={{ base: "md", md: "lg" }}
                      fontWeight="500"
                      textAlign={{ base: "right", sm: "left" }}>
                      {selectedArt.medium}
                    </Text>
                  </HStack>

                  <HStack
                    justify="space-between"
                    flexWrap={{ base: "wrap", sm: "nowrap" }}>
                    <Text
                      fontSize={{ base: "md", md: "lg" }}
                      fontWeight="600"
                      color="gray.400">
                      Dimensions:
                    </Text>
                    <Text fontSize={{ base: "md", md: "lg" }} fontWeight="500">
                      {selectedArt.dimensions}
                    </Text>
                  </HStack>

                  <Box
                    pt={{ base: 3, md: 4 }}
                    borderTop="1px solid"
                    borderColor="whiteAlpha.200">
                    <Text
                      fontSize={{ base: "sm", md: "md" }}
                      color="gray.300"
                      lineHeight="1.8">
                      {selectedArt.description}
                    </Text>
                  </Box>

                  <Box
                    w="100%"
                    h={{ base: "48px", md: "56px" }}
                    bgGradient="linear(to-r, #7537FF, #EAA9F4)"
                    borderRadius={{ base: "md", md: "lg" }}
                    mt={{ base: 2, md: 4 }}
                    cursor="pointer"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontWeight="700"
                    fontSize={{ base: "md", md: "lg" }}
                    color="white"
                    transition="all 0.3s"
                    _hover={{
                      transform: "translateY(-2px)",
                      boxShadow: "0 4px 12px rgba(117, 55, 255, 0.4)",
                    }}
                    _active={{
                      transform: "translateY(0)",
                    }}
                    // onClick={() => {
                    //   alert(
                    //     `Purchasing ${selectedArt.title} for ${selectedArt.price}`
                    //   );
                    // }}
                  >
                    <Link
                      href={`https://app.kpoproad.io/art/${
                        selectedArt.id
                      }?${new URLSearchParams({
                        title: selectedArt.title,
                        artist: selectedArt.artist,
                        price: selectedArt.price,
                        year: selectedArt.year,
                        medium: selectedArt.medium,
                        dimensions: selectedArt.dimensions,
                        description: selectedArt.description,
                      })}`}
                      className="w-full h-[56px] flex justify-center items-center bg-gradient-to-r from-[#7537FF] to-[#EAA9F4] font-bold rounded-lg mt-2 hover:shadow-lg hover:translate-y-[-2px] transition-all">
                      Buy Now — {selectedArt.price}
                    </Link>
                  </Box>
                </VStack>
              </VStack>
            )}
          </DialogBody>
        </DialogContent>
      </DialogRoot>
    </>
  );
}

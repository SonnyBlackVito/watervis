"use client";
import { useState, memo, useCallback, Suspense } from "react";
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
  Spinner,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { artworks } from "@/utils/array_picasso";

// ============= MOTION COMPONENTS =============
const MotionBox = motion.create(Box);
const MotionText = motion.create(Text);

// ============= ANIMATION VARIANTS =============
const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

const slideUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const scaleX = {
  initial: { opacity: 0, scaleX: 0 },
  whileInView: { opacity: 1, scaleX: 1 },
  viewport: { once: true },
  transition: { duration: 1, delay: 0.3, ease: "easeOut" },
};

// ============= ARTWORK CARD COMPONENT =============
const ArtworkCard = memo(({ art, onClick }) => {
  return (
    <MotionBox
      cursor="pointer"
      onClick={onClick}
      position="relative"
      overflow="hidden"
      bg="transparent"
      boxShadow="0 8px 25px rgba(0, 0, 0, 0.6)"
      transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
      willChange="transform, box-shadow"
      role="group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      // transition={{ duration: 0.5 }}
      _hover={{
        transform: "translateY(-12px)",
        boxShadow: "0 24px 60px rgba(255, 215, 0, 0.35)",
      }}>
      {/* Main Image */}
      <Box position="relative" overflow="hidden">
        <Image
          src={art.image}
          alt={`${art.title} by ${art.author}`}
          w="100%"
          h="auto"
          objectFit="cover"
          display="block"
          loading="lazy"
          transition="transform 0.5s ease"
          _groupHover={{ transform: "scale(1.08)" }}
        />

        {/* Gradient Overlay - Always visible but subtle */}
        <Box
          position="absolute"
          bottom="0"
          left="0"
          right="0"
          h="40%"
          bgGradient="linear(to-t, rgba(0,0,0,0.95), rgba(0,0,0,0.7), transparent)"
          pointerEvents="none"
        />
      </Box>

      {/* Info Section - Always visible at bottom */}
      <Box
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        p={{ base: 4, md: 5 }}
        color="white"
        zIndex={1}>
        {/* Title */}
        <Text
          fontSize={{ base: "md", md: "lg" }}
          fontWeight="700"
          mb={2}
          noOfLines={2}
          lineHeight="1.3"
          transition="all 0.3s"
          _groupHover={{ color: "gold" }}>
          {art.title}
        </Text>

        {/* Price */}
        {art.price && (
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            fontWeight="800"
            color="white"
            letterSpacing="tight">
            {art.price}
          </Text>
        )}

        {/* Hover Indicator */}
        <Box
          mt={3}
          opacity="0"
          transform="translateY(10px)"
          transition="all 0.3s ease"
          _groupHover={{ opacity: 1, transform: "translateY(0)" }}>
          <Flex align="center" gap={2}>
            <Text fontSize="sm" fontWeight="600" color="whiteAlpha.900">
              View Details
            </Text>
            <Box
              as="span"
              display="inline-block"
              transition="transform 0.3s"
              _groupHover={{ transform: "translateX(4px)" }}>
              →
            </Box>
          </Flex>
        </Box>
      </Box>
    </MotionBox>
  );
});

ArtworkCard.displayName = "ArtworkCard";

// ============= DIALOG CONTENT COMPONENT =============
const DialogContentComponent = memo(({ art, onClose }) => {
  if (!art) return null;

  const buyUrl = `https://app.kpoproad.io/art/${art.id}?${new URLSearchParams({
    title: art.title,
    artist: art.author,
    price: art.price,
    year: art.year,
    medium: art.material,
    dimensions: art.size,
  })}`;

  return (
    <VStack gap={{ base: 4, md: 6 }} align="stretch">
      {/* Image */}
      <Box
        position="relative"
        borderRadius="lg"
        overflow="hidden"
        bg="gray.800">
        <Image
          src={art.image}
          alt={art.title}
          w="100%"
          h="auto"
          maxH={{ base: "300px", sm: "400px", md: "500px" }}
          objectFit="contain"
        />
      </Box>

      {/* Details Grid */}
      <VStack gap={3} align="stretch">
        <DetailRow label="Artist" value={art.author} />
        <DetailRow
          label="Price"
          value={art.price}
          valueColor="green.400"
          valueWeight="700"
          valueSize={{ base: "lg", md: "xl" }}
        />
        <DetailRow label="Year" value={art.year} />
        <DetailRow label="Material" value={art.material} />
        <DetailRow label="Size" value={art.size} />
        {art.edition && <DetailRow label="Edition" value={art.edition} />}
      </VStack>

      {/* Buy Button */}
      <Link href={buyUrl} passHref>
        <Box
          as="button"
          w="100%"
          h={{ base: "52px", md: "60px" }}
          bgGradient="linear(to-r, #7537FF, #EAA9F4)"
          borderRadius="lg"
          mt={4}
          fontWeight="700"
          fontSize={{ base: "md", md: "lg" }}
          color="white"
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={2}
          transition="all 0.3s ease"
          _hover={{
            transform: "translateY(-3px)",
            boxShadow: "0 8px 24px rgba(117, 55, 255, 0.5)",
          }}
          _active={{
            transform: "translateY(-1px)",
          }}>
          <Text>Buy Now</Text>
          <Text as="span" fontSize="xl">
            💎
          </Text>
          <Text fontWeight="800">{art.price}</Text>
        </Box>
      </Link>
    </VStack>
  );
});

DialogContentComponent.displayName = "DialogContentComponent";

// ============= DETAIL ROW COMPONENT =============
const DetailRow = memo(
  ({
    label,
    value,
    valueColor = "white",
    valueWeight = "500",
    valueSize = { base: "md", md: "lg" },
  }) => (
    <Flex
      justify="space-between"
      align="center"
      py={2}
      borderBottom="1px solid"
      borderColor="whiteAlpha.100"
      gap={4}>
      <Text
        fontSize={{ base: "sm", md: "md" }}
        fontWeight="600"
        color="gray.400"
        minW="100px">
        {label}
      </Text>
      <Text
        fontSize={valueSize}
        fontWeight={valueWeight}
        color={valueColor}
        textAlign="right"
        flex="1">
        {value}
      </Text>
    </Flex>
  )
);

DetailRow.displayName = "DetailRow";

// ============= MAIN COMPONENT =============
export default function CollectionSection() {
  const [selectedArt, setSelectedArt] = useState(null);

  const handleImageClick = useCallback((art) => {
    setSelectedArt(art);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedArt(null);
  }, []);

  return (
    <>
      {/* Collections Grid Section */}
      <MotionBox
        minH="100vh"
        py={{ base: 16, md: 20, lg: 24 }}
        px={{ base: 4, md: 6 }}
        position="relative"
        overflow="hidden"
        {...fadeIn}>
        <Container maxW="container.xl" position="relative">
          {/* Decorative Image */}
          <Image
            src="/art/color_line.webp"
            alt=""
            position="absolute"
            top="-20px"
            left={{ base: "50%", md: "40%" }}
            transform="translateX(-50%)"
            h={{ base: "120px", md: "180px", lg: "220px" }}
            w="auto"
            zIndex={0}
            pointerEvents="none"
            loading="eager"
          />

          {/* Header */}
          <Flex
            align="center"
            gap={{ base: 4, md: 6, lg: 8 }}
            mb={{ base: 12, md: 16 }}
            direction={{ base: "column", md: "row" }}
            position="relative"
            zIndex={2}>
            <MotionText
              fontFamily="SVN-Gilroy, sans-serif"
              fontSize={{ base: "32px", sm: "40px", md: "48px", lg: "60px" }}
              fontWeight="800"
              lineHeight="1.2"
              color="white"
              textAlign={{ base: "center", md: "left" }}
              whiteSpace="nowrap"
              flexShrink={0}
              {...slideUp}>
              COLLECTIONS
            </MotionText>

            <MotionBox
              position="relative"
              height={{ base: "2px", md: "3px" }}
              flex="1"
              minW={{ base: "200px", md: "300px" }}
              maxW={{ base: "100%", md: "600px", lg: "800px" }}
              transformOrigin="left"
              {...scaleX}>
              <Box
                position="absolute"
                inset="0"
                background="linear-gradient(90deg, white 0%, rgba(255,255,255,0.3) 100%)"
                borderRadius="full"
              />
            </MotionBox>
          </Flex>

          {/* Artworks Grid */}
          <SimpleGrid
            columns={{ base: 1, sm: 2, lg: 3 }}
            spacing={{ base: 8, md: 12, lg: 16 }}>
            {artworks.map((art) => (
              <ArtworkCard
                key={art.id}
                art={art}
                onClick={() => handleImageClick(art)}
              />
            ))}
          </SimpleGrid>
        </Container>
      </MotionBox>

      {/* Dialog Modal */}
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
          {/* ✅ CLOSE BUTTON MOBILE */}

          <Box
            display={{ base: "block", md: "none" }}
            position="absolute"
            top="12px"
            right="12px"
            zIndex={100}>
            <DialogCloseTrigger>
              <Box
                w="36px"
                h="36px"
                borderRadius="full"
                bg="whiteAlpha.200"
                backdropFilter="blur(6px)"
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize="20px"
                position="absolute"
                top="-5px"
                right="12px"
                zIndex={100}
                _hover={{ bg: "whiteAlpha.300" }}>
                ✕
              </Box>
            </DialogCloseTrigger>
          </Box>
          {/* ✅ END CLOSE BUTTON MOBILE */}

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

            {/* ❗ Close trigger desktop */}
            <DialogCloseTrigger display={{ base: "none", md: "block" }} />
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
                    <Text fontSize={{ base: "md", md: "lg" }} fontWeight="500">
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
                    }}>
                    <Link
                      href={`https://app.kpoproad.io/art/${
                        selectedArt.id
                      }?${new URLSearchParams({
                        title: selectedArt.title,
                        author: selectedArt.author,
                        price: selectedArt.price,
                        year: selectedArt.year,
                        material: selectedArt.material,
                        size: selectedArt.size,
                        edition: selectedArt.edition,
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

"use client";

import { Box, Text, VStack, HStack } from "@chakra-ui/react";
import Image from "next/image";
import { useCategoryContext } from "@/context/categoryContext";
import GradientButton from "@/components/ui/GradientButton";
import { CATEFORIES } from "@/constants/audition/category";

export default function HeroSection() {
  const { category, setCategory } = useCategoryContext();

  return (
    <Box w={"100%"}>
      <Box
        position="relative"
        w="100%"
        h={{ base: "500px", lg: "700px", xl: "738px" }}
        aspectRatio={{ base: "16/9", md: "21/9", lg: "21/9" }}
        overflow="hidden"
        boxShadow="0 45px 120px rgba(10, 6, 40, 0.35)"
        _after={{
          content: '""',
          position: 'absolute',
          inset: 0,
          bg: 'radial-gradient(90% 90% at 10% 10%, rgba(138, 43, 226, 0.28), transparent)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      >
        <Image
          src={
            category == CATEFORIES.FANIDOL
              ? "/audition/vote/fanidol_banner.webp"
              : category == CATEFORIES.AUDITION
              ? "/audition/vote/audition_banner.webp"
              : "/audition/vote/fanidol_banner.webp"
          }
          alt={
            category == CATEFORIES.FANIDOL
              ? "FanIdol Banner"
              : category == CATEFORIES.AUDITION
              ? "Audition Banner"
              : "FanIdol Banner"
          }
          fill
          style={{ objectFit: "cover" }}
          priority
        />

        <HeroCategoryTabs category={category} setCategory={setCategory} />

        <Box
          position="absolute"
          inset={0}
          display="flex"
          flexDirection="column"
          justifyContent={{ base: "center", lg: "center", xl: "center" }}
          alignItems="center"
          zIndex={2}
          pb={{ base: 0, lg: 12, xl: 0 }}
        >
          <Box
            w="100%"
            maxW="1500px"
            px={{ base: 4, md: 6, lg: 8 }}
            display="flex"
            justifyContent={{ base: "flex-start", md: "center", xl: "flex-end" }}
          >
            <Box
              flex={{ base: "1", xl: "1" }}
              display="flex"
              justifyContent={{ base: "flex-end", md: "center", xl: "flex-end" }}
              px={{ base: 0, md: 0, xl: 12 }}
            >
              <HeroContent category={category} setCategory={setCategory} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function HeroContent({ category, setCategory }) {
  const isFanIdol = category === CATEFORIES.FANIDOL

  const sharedProps = {
    fontSize: { base: "11px", sm: "13px", md: "14px", lg: "15px", xl: "16px" },
    lineHeight: { base: "1.5", md: "1.5", lg: "1.48", xl: "1.45" }
  }

  return (
    <Box
      w="100%"
      maxW={{ base: "100%", md: "580px", lg: "700px", xl: "640px" }}
      borderRadius={{ base: "18px", sm: "24px", md: "26px", lg: "28px" }}
      border={isFanIdol ? "1px solid rgba(255, 255, 255, 0.15)" : "1px solid rgba(20, 4, 30, 0.1)"}
      bg={isFanIdol
        ? "linear-gradient(140deg, rgba(24, 10, 54, 0.88) 0%, rgba(6, 3, 20, 0.78) 100%)"
        : "linear-gradient(160deg, rgba(245, 232, 255, 0.96) 0%, rgba(211, 178, 255, 0.9) 40%, rgba(178, 127, 255, 0.88) 100%)"}
      boxShadow={isFanIdol
        ? "0 45px 90px rgba(10, 4, 36, 0.52)"
        : "0 45px 90px rgba(150, 120, 210, 0.35)"}
      padding={{ base: 4, sm: 6, md: 6, lg: 8 }}
      position="relative"
      minH={{ base: "unset", md: "320px", lg: "380px", xl: "420px" }}
    >
      <Box
        display={{ base: "none", lg: "flex", xl: "none" }}
        position="absolute"
        top="-18px"
        left="50%"
        transform="translateX(-50%)"
        zIndex={10}
      >
        <HStack
          spacing={1.5}
          bg="rgba(15, 15, 22, 0.82)"
          border="1px solid rgba(255, 255, 255, 0.08)"
          borderRadius="full"
          px={1}
          py={1}
          boxShadow="0 22px 45px rgba(0, 0, 0, 0.38)"
          backdropFilter="blur(12px)"
        >
          {[CATEFORIES.FANIDOL, CATEFORIES.AUDITION].map((item) => (
            <GradientButton
              key={item}
              onClick={() => setCategory(item)}
              isChoose={category === item}
              variant="toggle"
              width="130px"
              height="34px"
              fontSize="13.5px"
              fontWeight="600"
            >
              {item === CATEFORIES.FANIDOL ? "Idol" : "Audition"}
            </GradientButton>
          ))}
        </HStack>
      </Box>

      <Box
        position="absolute"
        bg={isFanIdol
          ? "radial-gradient(80% 80% at 20% 0%, rgba(180, 120, 255, 0.25), transparent)"
          : "radial-gradient(90% 90% at 0% 0%, rgba(160, 130, 255, 0.25), transparent)"}
        opacity={0.9}
        pointerEvents="none"
      />

      <VStack align="flex-start" spacing={{ base: 3, sm: 5, md: 4, lg: 5, xl: 6 }} position="relative" zIndex={1} mt={{ base: 6, sm: 8, md: 8, lg: 10, xl: 12 }}>
        {isFanIdol ? (
          <>
            <Text
              fontSize={{ base: "20px", sm: "28px", md: "36px", lg: "44px", xl: "50px" }}
              fontWeight="900"
              color="white"
              textShadow="0 0 40px rgba(140, 90, 255, 0.45)"
              lineHeight={{ base: "1.3", md: "1.25", lg: "1.22", xl: "1.2" }}
            >
              Telegram Mini Game Development 2025
            </Text>
            <Text
              fontSize={{ base: "10px", sm: "12px", md: "15px", lg: "16px", xl: "18px" }}
              fontWeight="700"
              bg="linear-gradient(90deg, #7537FF 0%, #EAA9F4 100%)"
              bgClip="text"
              textTransform="uppercase"
              letterSpacing={{ base: "0.14em", md: "0.16em", lg: "0.17em", xl: "0.18em" }}
            >
              Fanbattle
            </Text>
            <VStack align="flex-start" spacing={{ base: 1.5, md: 2 }}>
              <Text color="rgba(255, 255, 255, 0.96)" fontWeight="600" {...sharedProps}>
                Vote for idols to support them in reaching the top!
              </Text>
              <Text color="rgba(255, 255, 255, 0.85)" fontWeight="500" {...sharedProps}>
                Vote, earn points, support your favorite, and win rewards
              </Text>
            </VStack>
          </>
        ) : (
          <>
            <Text
              fontSize={{ base: "20px", sm: "28px", md: "36px", lg: "44px", xl: "50px" }}
              fontWeight="900"
              color="#130226"
              textShadow="0 0 50px rgba(120, 80, 200, 0.35)"
              lineHeight={{ base: "1.3", md: "1.25", lg: "1.22", xl: "1.2" }}
            >
              Audition Mini Game Development 2025
            </Text>
            <Text
              fontSize={{ base: "10px", sm: "12px", md: "15px", lg: "16px", xl: "18px" }}
              fontWeight="700"
              color="#160832"
              letterSpacing={{ base: "0.14em", md: "0.16em", lg: "0.17em", xl: "0.18em" }}
              textTransform="uppercase"
            >
              Showcase
            </Text>
            <VStack align="flex-start" spacing={{ base: 1.5, md: 2 }}>
              <Text color="rgba(18, 8, 32, 0.92)" fontWeight="600" {...sharedProps}>
                Vote for audition participants to support them in reaching the top!
              </Text>
              <Text color="rgba(18, 8, 32, 0.82)" fontWeight="500" {...sharedProps}>
                Vote, earn points, support your favorite, and win rewards
              </Text>
            </VStack>
          </>
        )}

        <Box pt={{ base: 1, sm: 2, md: 2, lg: 2 }}>
          <a
            href={
              category === CATEFORIES.FANIDOL
                ? "https://t.me/FanIdolsApp_bot"
                : category === CATEFORIES.AUDITION
                ? "https://t.me/AuditionApp_bot"
                : "https://t.me/FanIdolsApp_bot"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <GradientButton
              fontSize={{ base: "11px", sm: "14px", md: "15px", lg: "16px", xl: "18px" }}
              width={{ base: "120px", sm: "150px", md: "160px", lg: "175px", xl: "190px" }}
              height={{ base: "38px", sm: "44px", md: "46px", lg: "50px", xl: "52px" }}
              fontWeight="bold"
            >
              VOTE NOW
            </GradientButton>
          </a>
        </Box>
      </VStack>
    </Box>
  );
}

function HeroCategoryTabs({ category, setCategory }) {
  return (
    <Box
      display={{ base: "flex", lg: "none", xl: "flex" }}
      position="absolute"
      top={{ base: "80px", sm: "90px", md: "70px", xl: "90px" }}
      left="50%"
      transform="translateX(-50%)"
      zIndex={3}
    >
      <HStack
        spacing={{ base: 1.5, md: 2 }}
        bg="rgba(15, 15, 22, 0.82)"
        border="1px solid rgba(255, 255, 255, 0.08)"
        borderRadius="full"
        px={1}
        py={1}
        boxShadow="0 22px 45px rgba(0, 0, 0, 0.38)"
      >
        {[CATEFORIES.FANIDOL, CATEFORIES.AUDITION].map((item) => (
          <GradientButton
            key={item}
            onClick={() => setCategory(item)}
            isChoose={category === item}
            variant="toggle"
            width={{ base: "100px", sm: "120px", md: "140px", xl: "150px" }}
            height={{ base: "32px", sm: "34px", md: "36px", xl: "35px" }}
            fontSize={{ base: "13px", sm: "14px", md: "14.5px", xl: "15px" }}
            fontWeight="600"
          >
            {item === CATEFORIES.FANIDOL ? "Idol" : "Audition"}
          </GradientButton>
        ))}
      </HStack>
    </Box>
  )
}


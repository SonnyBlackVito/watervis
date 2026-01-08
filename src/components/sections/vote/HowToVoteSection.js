"use client";

import { useEffect, useState, useRef } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useCategoryContext } from "@/context/categoryContext";
import { CATEFORIES } from "@/constants/audition/category";
import { hrefTelegramFanIdolsApp } from "@/utils/href";

export default function HowToVoteSection() {
  const [visibleSteps, setVisibleSteps] = useState(new Set());
  const stepRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const stepId = entry.target.dataset.stepId;
          if (entry.isIntersecting) {
            setVisibleSteps(prev => new Set([...prev, stepId]));
          } else {
            setVisibleSteps(prev => {
              const newSet = new Set(prev);
              newSet.delete(stepId);
              return newSet;
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    Object.values(stepRefs.current).forEach(ref => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Container
      pt={{ base: "40px", lg: "120px" }}
      textAlign="center"
      pb={{ base: "40px", lg: "110px" }}
      maxW="1200px"
      mx="auto"
    >
      <Box justifyContent={"center"} mx="auto">
        <Box mb={{ base: "30px", lg: "56px" }}>
          <Text
            fontSize={{ base: "42px", md: "68px", lg: "96px" }}
            fontWeight="extrabold"
            letterSpacing={{ base: "0.04em", lg: "0.06em" }}
            color="white"
            textShadow="0 0 45px rgba(150, 90, 255, 0.35)"
            textTransform="uppercase"
          >
            How to vote
          </Text>
        </Box>
        <Box mb={12}>
          <Text fontSize={{ base: 16, lg: 22 }} color={"rgba(206, 206, 206, 0.9)"} maxW="880px" mx="auto" lineHeight="1.6">
            By voting for the delegate to help them reach the top, you also earn
            rewards and tokens for your participation. Just follow these 4
            simple steps:
          </Text>
        </Box>
      </Box>
      <Box
        display="grid"
        gridTemplateColumns={{
          base: "repeat(1, minmax(0, 1fr))",
          md: "repeat(2, minmax(0, 1fr))",
          lg: "repeat(4, minmax(0, 1fr))"
        }}
        gap={{ base: 6, md: 8, lg: 10 }}
        justifyItems="stretch"
      >
        {[...Array(4)].map((_, i) => (
          <HowToVoteItemComponent 
            key={i} 
            step={i} 
            stepRefs={stepRefs}
            visibleSteps={visibleSteps}
          />
        ))}
      </Box>
    </Container>
  );
}

function HowToVoteItemComponent({ step = 0, stepRefs, visibleSteps }) {
  const { category, setCategory } = useCategoryContext();
  const stepId = `step-${step}`;
  const isVisible = visibleSteps.has(stepId);

  const steps = [
    {
      title: "STEP 01",
      description: `Download Telegram and join the ${
        category == CATEFORIES.FANIDOL ? "FANBATTLE" : "TheRowd"
      } voting app here`,
    },
    {
      title: "STEP 02",
      description: "Tap to vote your favorite Idol",
    },
    {
      title: "STEP 03",
      description: "Tap to Boost to purchase additional XP and cast more votes",
    },
    {
      title: "STEP 04",
      description: "Win the leaderboard earn rewards and airdrop",
    },
  ];

  return (
    <Box
      ref={el => stepRefs.current[stepId] = el}
      data-step-id={stepId}
      bg="rgba(15, 15, 24, 0.95)"
      border="1px solid rgba(255, 255, 255, 0.08)"
      borderRadius="28px"
      px={{ base: 6, lg: 8 }}
      py={{ base: 8, lg: 10 }}
      minH={{ base: "360px", lg: "400px" }}
      display="flex"
      flexDirection="column"
      opacity={isVisible ? 1 : 0}
      transform={isVisible ? "translateY(0)" : "translateY(50px)"}
      transition="all 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
      transitionDelay={`${step * 0.15}s`}
      _hover={{
        transform: isVisible ? "translateY(-8px)" : "translateY(50px)",
        boxShadow: isVisible ? "0 28px 50px rgba(30, 10, 70, 0.35)" : "none",
        borderColor: isVisible ? "rgba(140, 90, 255, 0.6)" : "rgba(255, 255, 255, 0.08)",
        transition: "all 0.3s ease"
      }}
    >
      <Box mb={5} pb={{ base: 5, lg: 6 }} borderBottom={"1px dashed rgba(255, 255, 255, 0.12)"}>
        <Text fontSize={{ base: 22, lg: 32 }} fontWeight="extrabold" letterSpacing="0.12em" color="white">
          {steps?.[step].title}
        </Text>
      </Box>
      <Text fontSize={{ base: "16px", lg: "20px" }} color="rgba(255, 255, 255, 0.8)" fontWeight={400} flex="1" mb={6} lineHeight="1.6">
        {steps?.[step].description}
      </Text>
      <Flex
        flexDirection={"column"}
        justifyItems={"center"}
        alignItems={"center"}
        pt={2}
      >
        {step == 0 && category == CATEFORIES.FANIDOL && (
          <Box
            bg="linear-gradient(120deg, rgba(119, 63, 255, 1), rgba(214, 87, 236, 1))"
            borderRadius="full"
            p="1px"
            w={{ base: "150px", lg: "170px" }}
            boxShadow="0 12px 30px rgba(150, 85, 255, 0.35)"
          >
            <Button
              onClick={hrefTelegramFanIdolsApp}
              w="100%"
              h={{ base: "42px", lg: "46px" }}
              bg="rgba(12, 12, 24, 0.9)"
              color="white"
              borderRadius="full"
              fontSize={{ base: "13px", lg: "15px" }}
              fontWeight="semibold"
              transition="all 0.3s ease"
              _hover={{
                bg: "rgba(18, 18, 32, 0.95)",
                boxShadow: "0 10px 26px rgba(150, 85, 255, 0.4)",
                transform: "translateY(-2px)"
              }}
              _active={{
                transform: "translateY(0)",
                boxShadow: "0 6px 18px rgba(150, 85, 255, 0.25)"
              }}
            >
              Vote Now
            </Button>
          </Box>
        )}
      </Flex>
    </Box>
  );
}

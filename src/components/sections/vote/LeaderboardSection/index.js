"use client";

import { Box, Container, Flex, HStack, Image, Text } from "@chakra-ui/react";
import { slice } from "lodash";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { CATEFORIES } from "@/constants/audition/category";
import { useCategoryContext } from "@/context/categoryContext";
import RankingPosition from "./components/RankingPosition";
import { formatScore } from "@/utils/formatNumber";
import { idolAPI } from "@/lib/api/idol";
import { useEffect, useState } from "react";

export default function LeaderboardSection() {
  const { category } = useCategoryContext();
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchCharacters = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await idolAPI.getIdols({ source: category });
        if (!isMounted) return;
        setCharacters(Array.isArray(data) ? data : []);
      } catch (e) {
        if (!isMounted) return;
        setError(e);
        setCharacters([]);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };
    fetchCharacters();
    return () => {
      isMounted = false;
    };
  }, [category]);

  let top10Character = Array.isArray(characters) ? characters : [];
  if (top10Character?.length > 10)
    top10Character = slice(top10Character, 0, 10);

  const list = slice(top10Character, 3);
  const lastList = (list?.length || 0) - 1;

  const first = slice(top10Character, 0, 1);
  const second = slice(top10Character, 1, 2);
  const third = slice(top10Character, 2, 3);

  return (
    <Container pt={{ base: "20px", lg: "50px"}} pb={{ base: "80px", sm: "80px", lg: "300px" }} textAlign="center">
      {error && (
        <Text color="red.300" fontSize={{ base: "12px", lg: "14px" }} mb={4}>
          Failed to load leaderboard. Please try again.
        </Text>
      )}
      <Flex
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        textAlign="center"
      >
        <RevealOnScroll>
          <Text
            fontSize={{ base: "30px", lg: "90px" }}
            fontWeight="extrabold"
            color="white"
            textShadow="0 0 30px rgba(120, 70, 255, 0.35)"
            letterSpacing={{ base: "0.05em", lg: "0.08em" }}
          >
            Leader Board
          </Text>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <Text
            mt={{ base: 0, lg: 4 }}
            fontSize={{ base: "12px", lg: "24px" }}
            color="#CECECE"
          >
            {category == CATEFORIES.FANIDOL
              ? "Help your favorite idol claim the top spot."
              : "Help your favorite audition participant win first place."}
          </Text>
        </RevealOnScroll>
      </Flex>
      <Flex
        direction={{ base: "column", md: "column", lg: "row" }}
        mt={{ base: "30px", md: "50px", lg: "100px" }}
        h={{ base: "auto", lg: 520 }}
      >
        {/* Rank */}
        <Container m={0} pl={0} mr={{ base: 0, lg: 1 }}>
          <RevealOnScroll>
            <Container
              mx={"auto"}
              my={0}
              w={{ base: "350px", lg: "640px" }}
              position={"relative"}
            >
              <Image objectFit={"cover"} w={"100%"} src={"/audition/vote/ranking_ladder.png"} alt="Ranking ladder background" loading="lazy" />
              {/* First Position */}
              <RankingPosition rank="1st" value={first?.[0]} />
              {/* Second Position */}
              <RankingPosition rank="2nd" value={second?.[0]} />
              {/* Third Position */}
              <RankingPosition rank="3rd" value={third?.[0]} />
            </Container>
          </RevealOnScroll>
        </Container>
        <Box
          w={"100%"}
          maxW={1440}
          pt={"70px"}
          m={0}
          pr={0}
          ml={{ base: 0, lg: 1 }}
        >
            <Container
              bg={"#1B1B1B"}
              border="1.34px solid #272727"
              rounded={10}
              px={6}
              m={0}
            >
              {list?.map((character, k) => {
                return (
                  <RevealOnScroll key={k} delay={k * 0.05}>
                    <Container
                      borderBottom={lastList != k && "1.34px solid #272727"}
                      color={"white"}
                      px={{ base: 4, lg: 6 }}
                    >
                      <HStack justifyContent={"space-between"}>
                        <HStack py={4}>
                          <Box w={{ base: 30, lg: 50 }} textAlign={"center"}>
                            <Text fontSize={{ base: 12, lg: 18 }} fontWeight={500}>
                              {k + 4}
                            </Text>
                          </Box>
                          {character?.url_image ? (
                            <Image
                              objectFit={"cover"}
                              src={character.url_image}
                              w={"40px"}
                              h={"45px"}
                              rounded={"md"}
                              mr={2}
                              alt={`${character?.name || "character"} avatar`}
                              loading="lazy"
                            />
                          ) : (
                            <Image
                              objectFit={"cover"}
                              src={"/default.png"}
                              w={"40px"}
                              h={"45px"}
                              rounded={"md"}
                              mr={2}
                              alt="Default avatar"
                              loading="lazy"
                            />
                          )}
                          <Text fontSize={{ base: 12, lg: 18 }} fontWeight="bold">
                            {character?.name}
                          </Text>
                        </HStack>
                        <Text fontSize={{ base: 12, lg: 18 }} fontWeight="bold">
                          {formatScore(character?.global_score)} XP
                        </Text>
                      </HStack>
                    </Container>
                  </RevealOnScroll>
                );
              })}
            </Container>
        </Box>
      </Flex>
    </Container>
  );
}

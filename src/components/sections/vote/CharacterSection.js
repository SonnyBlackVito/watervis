"use client";

import { useEffect, useState, useRef } from "react";
import {
  Box,
  Text,
  Image,
  HStack,
  Button,
  Container,
  Flex,
  Tooltip,
} from "@chakra-ui/react";
import { CATEFORIES } from "@/constants/audition/category";
import { idolAPI } from "@/lib/api/idol";
import { useCategoryContext } from "@/context/categoryContext";
import ShareSocialModal from "@/components/ui/Modal/ShareSocialModal";

export default function CharacterSection() {
  const { category } = useCategoryContext();
  
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [selectedIdol, setSelectedIdol] = useState(null);
  const [isSharePopupOpen, setSharePopupOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(16);
  const [visibleCards, setVisibleCards] = useState(new Set());
  const cardRefs = useRef({});

  useEffect(() => {
    setVisibleCount(16);
    setVisibleCards(new Set());
  }, [category]);

  useEffect(() => {
    let isMounted = true;
    const fetchCharacters = async () => {
      try {
        setIsLoading(true);
        setIsError(null);
        const data = await idolAPI.getIdols({ source: category });
        if (!isMounted) return;
        setCharacters(Array.isArray(data) ? data : []);
      } catch (e) {
        if (!isMounted) return;
        setIsError(e);
        setCharacters([]);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };
    fetchCharacters();
    return () => { isMounted = false; };
  }, [category]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const cardId = entry.target.dataset.cardId;
          if (entry.isIntersecting) {
            setVisibleCards(prev => new Set([...prev, cardId]));
          } else {
            setVisibleCards(prev => {
              const newSet = new Set(prev);
              newSet.delete(cardId);
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

    Object.values(cardRefs.current).forEach(ref => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => observer.disconnect();
  }, [characters, visibleCount]);

  const handleLoadMore = () => {
    if (characters && Array.isArray(characters)) {
      setVisibleCount((prev) => Math.min(prev + 16, characters.length));
    }
  };

  return (
    <Box
      backgroundImage="url('/audition/vote/background.webp')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      minHeight="100vh"
      maxW="100vw"
      overflow="hidden"
    >
      <Container
        pt={{ base: "40px", lg: "79px" }}
        pb={{ base: "40px", lg: "70px" }}
        textAlign="center"
        maxW="1200px"
        mx="auto"
      >
        <Box>
          {!isLoading && !isError && (
            <Box
              display="grid"
              gridTemplateColumns={{
                base: "repeat(1, minmax(0, 1fr))",
                sm: "repeat(2, minmax(0, 1fr))",
                md: "repeat(3, minmax(0, 1fr))",
                lg: "repeat(4, minmax(0, 1fr))"
              }}
              gap={{ base: 6, md: 8, lg: 10 }}
              mt={{ base: "30px", lg: "80px" }}
              mb={{ base: "28px", lg: "28px" }}
              justifyItems="stretch"
            >
              {characters && Array.isArray(characters) && characters.slice(0, visibleCount).map((character, i) => {
              const cardId = `card-${i}`;
              const isVisible = visibleCards.has(cardId);
              
              return (
                <Box
                  key={i}
                  ref={el => cardRefs.current[cardId] = el}
                  data-card-id={cardId}
                  bg="rgba(12, 12, 18, 0.95)"
                  borderRadius="12px"
                  textAlign="start"
                  w="100%"
                  h="100%"
                  border="1px solid rgba(255, 255, 255, 0.06)"
                  overflow="hidden"
                  opacity={isVisible ? 1 : 0}
                  transform={isVisible ? "translateY(0)" : "translateY(50px)"}
                  transition="all 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
                  transitionDelay={`${(i % 4) * 0.1}s`}
                  position="relative"
                  _before={{
                    content: '""',
                    position: "absolute",
                    inset: "0",
                    borderRadius: "12px",
                    background: "linear-gradient(145deg, rgba(138, 43, 226, 0.15), transparent 55%)",
                    pointerEvents: "none",
                    zIndex: 0
                  }}
                  _hover={{
                    transform: isVisible ? "translateY(-10px)" : "translateY(50px)",
                    boxShadow: "0 30px 60px rgba(0, 0, 0, 0.35)",
                    transition: "all 0.35s ease"
                  }}
                >
                  <Box position="relative" zIndex={1} display="flex" flexDirection="column" h="100%">
                    {character?.url_image ? (
                      <Image
                        objectFit="cover"
                        src={character.url_image}
                        w="100%"
                        h={{ base: "220px", md: "250px", lg: "280px" }}
                        borderTopRadius="12px"
                        fallbackSrc=""
                        mx="auto"
                        loading="lazy"
                        alt={character?.name || "Idol"}
                      />
                    ) : (
                      <Image
                        objectFit="cover"
                        src={"/default.png"}
                        w="100%"
                        h={{ base: "220px", md: "250px", lg: "280px" }}
                        borderTopRadius="12px"
                        fallbackSrc=""
                        mx="auto"
                        loading="lazy"
                        alt={"Idol"}
                      />
                    )}

                    <Flex
                      flexDirection="column"
                      justifyContent="space-between"
                      flex={1}
                      px={{ base: 4, md: 5, lg: 6 }}
                      py={{ base: 5, md: 6 }}
                    >
                      <Box>
                        <Tooltip.Root>
                          <Tooltip.Trigger asChild>
                            <Text
                              fontSize={{ base: "18px", lg: "26px" }}
                              fontWeight="extrabold"
                              color="white"
                              noOfLines={1}
                              maxW="240px"
                              display="block"
                              cursor="pointer"
                              mb={1}
                            >
                              {character?.name}
                            </Text>
                          </Tooltip.Trigger>
                          <Tooltip.Positioner>
                            <Tooltip.Content>
                              {character?.name}
                            </Tooltip.Content>
                          </Tooltip.Positioner>
                        </Tooltip.Root>

                        <Tooltip.Root>
                          <Tooltip.Trigger asChild>
                            <Text
                              fontSize={{ base: "13px", lg: "15px" }}
                              color="rgba(255, 255, 255, 0.65)"
                              noOfLines={1}
                              maxW="240px"
                              lineHeight="1.2"
                              display="block"
                              cursor="pointer"
                              mt={1}
                            >
                              {character?.group_name || "Default Group"}
                            </Text>
                          </Tooltip.Trigger>
                          <Tooltip.Positioner>
                            <Tooltip.Content>
                              {character?.group_name || "Default Group"}
                            </Tooltip.Content>
                          </Tooltip.Positioner>
                        </Tooltip.Root>
                      </Box>

                      <HStack spacing={4} pt={4} alignItems="center">
                        <Box
                          w="50%"
                          bg="linear-gradient(120deg, rgba(111, 46, 239, 1), rgba(214, 67, 236, 1))"
                          borderRadius="full"
                          p="1px"
                        >
                          <a
                            href={
                              category === CATEFORIES.FANIDOL
                                ? "https://t.me/FanIdolsApp_bot"
                                : "https://t.me/AuditionApp_bot"
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ width: "100%", display: "block" }}
                          >
                            <Button
                              w="100%"
                              h={{ base: "36px", lg: "40px" }}
                              bg="transparent"
                              color="white"
                              borderRadius="full"
                              fontSize={{ base: "11px", lg: "14px" }}
                              fontWeight="semibold"
                              transition="all 0.3s ease"
                              _hover={{
                                bg: "rgba(12,12,18,0.4)",
                                boxShadow: "0 10px 26px rgba(120, 60, 210, 0.4)"
                              }}
                              _active={{
                                transform: "translateY(0px)"
                              }}
                            >
                              Vote Now
                            </Button>
                          </a>
                        </Box>
                        <Box
                          w="50%"
                          bg="linear-gradient(120deg, rgba(92, 60, 255, 0.85), rgba(199, 80, 255, 0.85))"
                          borderRadius="full"
                          p="1px"
                        >
                          <Button
                            w="100%"
                            h={{ base: "36px", lg: "40px" }}
                            bg="rgba(12,12,18,0.95)"
                            color="white"
                            borderRadius="full"
                            fontSize={{ base: "11px", lg: "14px" }}
                            fontWeight="semibold"
                            onClick={() => {
                              setSelectedIdol(character);
                              setSharePopupOpen(true);
                            }}
                            transition="all 0.3s ease"
                            _hover={{
                              bg: "rgba(22,22,32,0.95)",
                              boxShadow: "0 10px 24px rgba(199, 52, 214, 0.35)"
                            }}
                            _active={{
                              transform: "translateY(0px)"
                            }}
                          >
                            Share
                          </Button>
                        </Box>
                      </HStack>
                    </Flex>
                  </Box>
                </Box>
              );
              })}
            </Box>
          )}

          {!isLoading && !isError && characters && Array.isArray(characters) && visibleCount < characters.length && (
            <Container justifyItems={"center"}>
              <HStack justifyContent="center">
                <Button
                  onClick={handleLoadMore}
                  w={"148px"}
                  bg={"footerBackground"}
                  color={"#8F9299"}
                  rounded={"full"}
                >
                  더보기
                </Button>
              </HStack>
            </Container>
          )}
        </Box>

        <ShareSocialModal
          isOpen={isSharePopupOpen}
          onClose={() => setSharePopupOpen(false)}
          idol={selectedIdol}
        />
      </Container>
    </Box>
  );
}

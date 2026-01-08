"use client"

import {
  Accordion,
  Badge,
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Image,
  Progress,
  Text,
  VStack
} from '@chakra-ui/react'
import { FiChevronDown } from 'react-icons/fi'
import { useState, useEffect, useRef } from 'react'

export default function HowToMintSection() {
  const [currentStep, setCurrentStep] = useState('0')
  const [lastActiveStep, setLastActiveStep] = useState(0)
  const [currentNFT, setCurrentNFT] = useState(0)
  const [hovered, setHovered] = useState(false)
  const nftRef = useRef(null)
  
  const mintSteps = [
    {
      step: 1,
      title: "Connect Wallet",
      description: "Connect your Phantom or compatible wallet to begin the NFT minting process"
    },
    {
      step: 2,
      title: "Choose Collection",
      description: "Select the NFT collection you want to mint from the available collections"
    },
    {
      step: 3,
      title: "Confirm Transaction",
      description: "Review the information and confirm your NFT minting transaction on the blockchain"
    },
    {
      step: 4,
      title: "Wait for Confirmation",
      description: "Wait for the blockchain network to confirm and process your transaction"
    },
    {
      step: 5,
      title: "Receive NFT",
      description: "Receive your NFT in your wallet and start using it in the ecosystem"
    }
  ]

  const nftImages = [
    '/audition/homepage/collection-1.webp',
    '/audition/homepage/collection-2.webp', 
    '/audition/homepage/collection-3.webp',
    '/audition/homepage/collection-4.webp',
    '/audition/homepage/collection-5.webp'
  ]

  const activeStepIndex = currentStep !== undefined ? Number(currentStep) : null
  const displayedStepIndex = activeStepIndex ?? lastActiveStep
  const progressValue = ((displayedStepIndex + 1) / mintSteps.length) * 100

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNFT((prev) => (prev + 1) % nftImages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [nftImages.length])

  const applyPos = (clientX, clientY) => {
    const el = nftRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    
    const l = clientX - r.left;
    const t = clientY - r.top;
    const h = r.height;
    const w = r.width;
    
    const px = Math.abs(Math.floor(100 / w * l) - 100);
    const py = Math.abs(Math.floor(100 / h * t) - 100);
    const pa = (50 - px) + (50 - py);
    
    const lp = 50 + (px - 50) / 1.5;
    const tp = 50 + (py - 50) / 1.5;
    const px_spark = 50 + (px - 50) / 7;
    const py_spark = 50 + (py - 50) / 7;
    const p_opc = 20 + (Math.abs(pa) * 1.5);
    
    const ty = ((tp - 50) / 2) * -1;
    const tx = ((lp - 50) / 1.5) * 0.5;

    el.style.setProperty("--gradX", `${lp}%`);
    el.style.setProperty("--gradY", `${tp}%`);
    el.style.setProperty("--sparkX", `${px_spark}%`);
    el.style.setProperty("--sparkY", `${py_spark}%`);
    el.style.setProperty("--opacity", `${p_opc / 100}`);
    
    el.style.transform = `rotateX(${ty}deg) rotateY(${tx}deg)`;
  };

  const onEnter = () => {
    setHovered(true);
    const el = nftRef.current;
    if (el) {
      el.classList.remove("animated");
    }
  };

  const onLeave = () => {
    setHovered(false);
    const el = nftRef.current;
    if (!el) return;
    
    el.style.transform = "rotateX(0deg) rotateY(0deg)";
    el.style.setProperty("--gradX", "50%");
    el.style.setProperty("--gradY", "50%");
    el.style.setProperty("--sparkX", "50%");
    el.style.setProperty("--sparkY", "50%");
    el.style.setProperty("--opacity", "0.75");
    
    setTimeout(() => {
      if (el) {
        el.classList.add("animated");
      }
    }, 2500);
  };

  return (
    <Box
      py={{ base: 16, md: 20 }}
      position="relative"
      zIndex={3}
    >
      <Container maxW="container.xl" px={4} overflow="hidden">
        <VStack spacing={16} align="center">
          {/* Title */}
          <VStack spacing={4} align="center" mb={{ base: 12, md: 16, lg: 20 }}>
            <Text
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              fontWeight="bold"
              color="white"
              textAlign="center"
              textShadow="0 0 20px rgba(138, 43, 226, 0.5)"
            >
              How to Mint
            </Text>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="rgba(255, 255, 255, 0.8)"
              textAlign="center"
              maxW="600px"
            >
              Complete guide to minting NFTs in the FanIdol ecosystem
            </Text>
          </VStack>

          {/* Main Content */}
          <Flex
            direction={{ base: "column", lg: "row" }}
            gap={{ base: 12, lg: 16 }}
            w="100%"
            minH={{ lg: '520px' }}
            align={{ base: 'stretch', lg: 'center' }}
            justify="center"
          >
            <Box
              flex={{ base: 1, lg: 1 }}
              position="relative"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <VStack spacing={8} align="center">
                <Box
                  position="relative"
                  w={{ base: "320px", md: "420px", lg: "520px" }}
                  h={{ base: "320px", md: "420px", lg: "520px" }}
                  sx={{
                    perspective: '1000px',
                    transformStyle: 'preserve-3d',
                    '--gradX': '50%',
                    '--gradY': '50%',
                    '--sparkX': '50%',
                    '--sparkY': '50%',
                    '--opacity': '0.75'
                  }}
                >
                  <Box
                    ref={nftRef}
                    position="relative"
                    w="100%"
                    h="100%"
                    transformOrigin="center"
                    transition="transform 0.5s ease"
                    willChange="transform, filter"
                    zIndex={10}
                    onMouseEnter={onEnter}
                    onMouseLeave={onLeave}
                    onMouseMove={(e) => applyPos(e.clientX, e.clientY)}
                    onTouchStart={(e) => {
                      setHovered(true);
                      const t = e.touches[0];
                      applyPos(t.clientX, t.clientY);
                    }}
                    onTouchMove={(e) => {
                      const t = e.touches[0];
                      applyPos(t.clientX, t.clientY);
                    }}
                    onTouchEnd={onLeave}
                    sx={{
                      touchAction: 'none',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        bottom: 0,
                        top: 0,
                        backgroundRepeat: 'no-repeat',
                        opacity: 'var(--opacity)',
                        backgroundImage: 'url("https://assets.codepen.io/13471/sparkles.gif"), url("https://assets.codepen.io/13471/holo.png"), linear-gradient(125deg, #ff008450 15%, #fca40040 30%, #ffff0030 40%, #00ff8a20 60%, #00cfff40 70%, #cc4cfa50 85%)',
                        backgroundPosition: 'var(--sparkX) var(--sparkY)',
                        backgroundSize: '160%',
                        backgroundBlendMode: 'overlay',
                        zIndex: 2,
                        filter: 'brightness(1) contrast(1)',
                        transition: 'all 0.33s ease',
                        mixBlendMode: 'color-dodge',
                        pointerEvents: 'none'
                      },
                      '&:hover::after': {
                        backgroundPosition: 'var(--sparkX) var(--sparkY)',
                        filter: 'brightness(1) contrast(1)',
                        opacity: 'var(--opacity)'
                      }
                    }}
                  >
                    {/* NFT Image */}
                    <Image
                      src={nftImages[currentNFT]}
                      alt={`NFT Collection ${currentNFT + 1}`}
                      w="100%"
                      h="100%"
                      objectFit="contain"
                      transition="all 1s cubic-bezier(0.4, 0, 0.2, 1)"
                      filter="drop-shadow(0 0 30px rgba(138, 43, 226, 0.4)) brightness(1.1) contrast(1.1)"
                      position="relative"
                      zIndex={3}
                    />
                  </Box>
                </Box>

                <HStack spacing={4}>
                  {nftImages.map((_, index) => (
                    <Box
                      key={index}
                      position="relative"
                      w="16px"
                      h="16px"
                      borderRadius="50%"
                      bg={index === currentNFT ? "linear-gradient(45deg, rgba(138, 43, 226, 0.9), rgba(156, 38, 174, 0.9))" : "rgba(255, 255, 255, 0.2)"}
                      transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                      cursor="pointer"
                      onClick={() => setCurrentNFT(index)}
                      _hover={{
                        bg: "linear-gradient(45deg, rgba(138, 43, 226, 0.7), rgba(156, 38, 174, 0.7))",
                        transform: "scale(1.2)"
                      }}
                      sx={{
                        '&::before': index === currentNFT ? {
                          content: '""',
                          position: 'absolute',
                          top: '-4px',
                          left: '-4px',
                          right: '-4px',
                          bottom: '-4px',
                          borderRadius: '50%',
                          background: 'linear-gradient(45deg, rgba(138, 43, 226, 0.3), rgba(156, 38, 174, 0.3))',
                          animation: 'pulse 2s ease-in-out infinite'
                        } : {}
                      }}
                    />
                  ))}
                </HStack>

                <Box
                  position="absolute"
                  top="10%"
                  right="10%"
                  w="60px"
                  h="60px"
                  borderRadius="50%"
                  bg="linear-gradient(45deg, rgba(138, 43, 226, 0.3), rgba(156, 38, 174, 0.3))"
                  animation="float 3s ease-in-out infinite"
                  sx={{
                    '@keyframes float': {
                      '0%, 100%': { transform: 'translateY(0px)' },
                      '50%': { transform: 'translateY(-20px)' }
                    }
                  }}
                />
                <Box
                  position="absolute"
                  bottom="15%"
                  left="5%"
                  w="40px"
                  h="40px"
                  borderRadius="50%"
                  bg="linear-gradient(45deg, rgba(156, 38, 174, 0.3), rgba(138, 43, 226, 0.3))"
                  animation="float 4s ease-in-out infinite reverse"
                />
              </VStack>
            </Box>

            <Box
              flex={{ base: 1, lg: 1 }}
              w="100%"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box
                w="100%"
                bg="linear-gradient(140deg, rgba(24, 10, 42, 0.85), rgba(10, 6, 26, 0.75))"
                borderRadius="24px"
                border="1px solid rgba(255, 255, 255, 0.08)"
                boxShadow="0 22px 50px rgba(0, 0, 0, 0.45)"
                backdropFilter="blur(14px)"
                p={{ base: 6, md: 8 }}
              >
                <VStack spacing={{ base: 6, md: 8 }} align="stretch">
                  <Box>
                    <HStack justify="space-between" mb={4}>
                      <Text color="white" fontSize="lg" fontWeight="semibold">
                        Mint Progress
                      </Text>
                      <Badge
                        bg="linear-gradient(45deg, rgba(138, 43, 226, 0.8), rgba(156, 38, 174, 0.8))"
                        color="white"
                        px={3}
                        py={1}
                        borderRadius="full"
                      >
                        Step {displayedStepIndex + 1}/5
                      </Badge>
                    </HStack>
                    <Progress.Root
                      value={progressValue}
                      max={100}
                      w="100%"
                    >
                      <Progress.Track
                        bg="rgba(255, 255, 255, 0.1)"
                        borderRadius="full"
                        h="12px"
                        overflow="hidden"
                      >
                        <Progress.Range
                          bg="linear-gradient(90deg, rgba(138, 43, 226, 0.8), rgba(156, 38, 174, 0.8))"
                          borderRadius="full"
                        />
                      </Progress.Track>
                    </Progress.Root>
                  </Box>

                  <Accordion.Root
                    value={currentStep ?? undefined}
                    onValueChange={({ value }) => {
                      const nextValue = Array.isArray(value) ? value[0] : value ?? undefined

                      setCurrentStep(nextValue ?? undefined)

                      if (nextValue !== undefined) {
                        const nextIndex = Number(nextValue)

                        if (!Number.isNaN(nextIndex)) {
                          setLastActiveStep(nextIndex)
                        }
                      }
                    }}
                    collapsible
                    display="flex"
                    flexDirection="column"
                    gap={{ base: 3, md: 4 }}
                  >
                    {mintSteps.map((step, index) => {
                      const isOpen = currentStep === String(index)
                      const isVisited = displayedStepIndex > index

                      const itemBg = isOpen
                        ? 'linear-gradient(140deg, rgba(138, 43, 226, 0.28), rgba(12, 8, 32, 0.9))'
                        : isVisited
                          ? 'linear-gradient(140deg, rgba(138, 43, 226, 0.18), rgba(12, 8, 32, 0.8))'
                          : 'rgba(12, 8, 32, 0.72)'

                      const borderColor = isOpen
                        ? 'rgba(185, 115, 255, 0.6)'
                        : isVisited
                          ? 'rgba(138, 43, 226, 0.35)'
                          : 'rgba(255, 255, 255, 0.07)'

                      const numberBg = isOpen
                        ? 'linear-gradient(45deg, rgba(138, 43, 226, 1), rgba(156, 38, 174, 0.95))'
                        : isVisited
                          ? 'linear-gradient(45deg, rgba(138, 43, 226, 0.7), rgba(156, 38, 174, 0.6))'
                          : 'rgba(255, 255, 255, 0.12)'

                      const numberColor = (isOpen || isVisited)
                        ? 'white'
                        : 'rgba(255, 255, 255, 0.8)'

                      const titleColor = (isOpen || isVisited)
                        ? 'white'
                        : 'rgba(255, 255, 255, 0.85)'

                      const indicatorColor = isOpen
                        ? 'white'
                        : 'rgba(255, 255, 255, 0.7)'

                      return (
                        <Accordion.Item
                          key={index}
                          value={String(index)}
                          borderRadius={{ base: '18px', md: '20px' }}
                          border="1px solid"
                          borderColor={borderColor}
                          bg={itemBg}
                          boxShadow={isOpen ? '0 24px 55px rgba(138, 43, 226, 0.28)' : isVisited ? '0 16px 40px rgba(138, 43, 226, 0.18)' : '0 10px 24px rgba(0, 0, 0, 0.45)'}
                          transition="all 0.35s ease"
                          overflow="hidden"
                        >
                          <Accordion.ItemTrigger
                            className="mint-accordion-trigger"
                            py={{ base: 5, md: 6 }}
                            px={{ base: 5, md: 6 }}
                            w="100%"
                            bg="transparent"
                            border="none"
                            display="flex"
                            alignItems="center"
                            gap={4}
                            transition="background 0.3s ease"
                            _hover={{
                              bg: 'rgba(138, 43, 226, 0.12)'
                            }}
                          >
                            <HStack spacing={4} flex={1} align="center">
                              <Box
                                className="mint-step-number"
                                w="40px"
                                h="40px"
                                borderRadius="50%"
                                bg={numberBg}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                transition="all 0.3s ease"
                                boxShadow={isOpen ? '0 0 20px rgba(138, 43, 226, 0.35)' : 'none'}
                              >
                                <Text
                                  fontSize="lg"
                                  fontWeight="bold"
                                  color={numberColor}
                                >
                                  {step.step}
                                </Text>
                              </Box>

                              <Text
                                className="mint-step-title"
                                fontSize="lg"
                                fontWeight="semibold"
                                color={titleColor}
                                textAlign="left"
                                transition="color 0.3s ease"
                              >
                                {step.title}
                              </Text>
                            </HStack>
                            <Accordion.ItemIndicator
                              className="mint-indicator"
                              ml="auto"
                              color={indicatorColor}
                              transition="transform 0.3s ease, color 0.3s ease"
                              transform={isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}
                            >
                              <FiChevronDown size={20} />
                            </Accordion.ItemIndicator>
                          </Accordion.ItemTrigger>
                          <Accordion.ItemContent
                            className="mint-accordion-content"
                            px={{ base: 5, md: 6 }}
                            pb={{ base: 5, md: 6 }}
                            sx={{
                              overflow: 'hidden',
                              animationDuration: '0.32s',
                              animationTimingFunction: 'cubic-bezier(0.25, 0.8, 0.25, 1)',
                              animationFillMode: 'forwards',
                              '&[data-state=open]': {
                                animationName: 'accordion-open'
                              },
                              '&[data-state=closed]': {
                                animationName: 'accordion-close'
                              },
                              '@keyframes accordion-open': {
                                from: { height: 0, opacity: 0, transform: 'translateY(-6px)' },
                                to: { height: 'var(--accordion-content-height)', opacity: 1, transform: 'translateY(0)' }
                              },
                              '@keyframes accordion-close': {
                                from: { height: 'var(--accordion-content-height)', opacity: 1, transform: 'translateY(0)' },
                                to: { height: 0, opacity: 0, transform: 'translateY(-6px)' }
                              }
                            }}
                          >
                            <Flex align="flex-start" gap={4}>
                              <Box w="40px" h="1px" visibility="hidden" />
                              <Box
                                className="mint-content-box"
                                flex={1}
                                bg="rgba(0, 0, 0, 0.25)"
                                border="1px solid rgba(255, 255, 255, 0.08)"
                                borderRadius="14px"
                                px={{ base: 4, md: 6 }}
                                py={{ base: 4, md: 5 }}
                                boxShadow="inset 0 0 0 1px rgba(255, 255, 255, 0.04)"
                              >
                                <Text
                                  color="rgba(255, 255, 255, 0.88)"
                                  fontSize="md"
                                  lineHeight="1.7"
                                >
                                  {step.description}
                                </Text>
                              </Box>
                            </Flex>
                          </Accordion.ItemContent>
                        </Accordion.Item>
                      )
                    })}
                  </Accordion.Root>

                  <Button
                    size="lg"
                    bg="linear-gradient(45deg, rgba(138, 43, 226, 0.9), rgba(156, 38, 174, 0.9))"
                    color="white"
                    borderRadius="16px"
                    py={6}
                    px={12}
                    fontSize="xl"
                    fontWeight="bold"
                    transition="all 0.3s ease"
                    _hover={{
                      bg: "linear-gradient(45deg, rgba(138, 43, 226, 1), rgba(156, 38, 174, 1))",
                      transform: "translateY(-2px)",
                      boxShadow: "0 8px 25px rgba(138, 43, 226, 0.4)"
                    }}
                    _active={{
                      transform: "translateY(0px)"
                    }}
                    position="relative"
                    overflow="hidden"
                    sx={{
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: '-100%',
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                        transition: 'left 0.5s'
                      },
                      '&:hover::before': {
                        left: '100%'
                      }
                    }}
                  >
                    Mint Your NFT
                  </Button>
                </VStack>
              </Box>
            </Box>
          </Flex>
        </VStack>
      </Container>
    </Box>
  )
}

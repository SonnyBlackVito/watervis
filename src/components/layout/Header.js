"use client";

import {
  Box,
  Flex,
  Text,
  HStack,
  Stack,
  IconButton,
  Image,
  VStack,
  Spinner,
} from "@chakra-ui/react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, useCallback, useTransition } from "react";
import HoverButton from "../ui/HowerButton";

const PageLoader = () => {
  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      bottom="0"
      bg="rgba(0, 0, 0, 0.8)"
      backdropFilter="blur(8px)"
      zIndex="9999"
      display="flex"
      alignItems="center"
      justifyContent="center"
      animation="fadeIn 0.2s ease">
      <VStack spacing={4}>
        <Box position="relative">
          <Spinner
            size="xl"
            thickness="4px"
            speed="0.8s"
            color="purple.500"
            emptyColor="gray.700"
            w="60px"
            h="60px"
          />
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            w="40px"
            h="40px"
            borderRadius="full"
            bg="linear-gradient(135deg, #9333EA, #EC4899)"
            opacity="0.3"
            animation="pulse 1.5s ease-in-out infinite"
          />
        </Box>

        <Text
          fontSize="lg"
          fontWeight="600"
          bgGradient="linear(to-r, purple.400, pink.400)"
          bgClip="text"
          animation="pulse 1.5s ease-in-out infinite">
          Loading...
        </Text>
      </VStack>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 0.5;
            transform: translate(-50%, -50%) scale(1.1);
          }
        }
      `}</style>
    </Box>
  );
};

const NavLink = ({
  children,
  href,
  onClick,
  onClose,
  isActive = false,
  submenu,
  setIsLoading,
}) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  useEffect(() => {
    return () => {
      if (hoverTimeout) clearTimeout(hoverTimeout);
    };
  }, [hoverTimeout]);

  const handleMouseEnter = () => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setIsSubmenuOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsSubmenuOpen(false);
    }, 300);
    setHoverTimeout(timeout);
  };

  const handleClick = (e) => {
    // ✨ Hiển thị loading khi navigate
    if (href && !href.startsWith("http")) {
      setIsLoading(true);
    }

    if (onClick) {
      e.preventDefault();
      setIsLoading(true); // ✨ Loading cho onClick
      onClick();
    }
    if (onClose) onClose();
  };

  const linkProps = {
    color: isActive ? "transparent" : "#FFFFFF",
    background: isActive
      ? "linear-gradient(135deg, #9333EA, #EC4899)"
      : "transparent",
    backgroundClip: isActive ? "text" : "unset",
    WebkitBackgroundClip: isActive ? "text" : "unset",
    fontWeight: "600",
    letterSpacing: "0.05em",
    cursor: "pointer",
    position: "relative",
    transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    fontSize: "15px",
    lineHeight: "1.5",
    py: 2,
    px: 1,
    _after: {
      content: '""',
      position: "absolute",
      bottom: "0",
      left: "0",
      right: "0",
      height: "2px",
      background: "linear-gradient(90deg, #9333EA, #EC4899)",
      transform: isActive ? "scaleX(1)" : "scaleX(0)",
      transformOrigin: "center",
      transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      borderRadius: "2px",
    },
    _hover: {
      color: "transparent",
      background: "linear-gradient(135deg, #9333EA, #EC4899)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      transform: "translateY(-2px)",
      _after: {
        transform: "scaleX(1)",
      },
    },
  };

  if (submenu) {
    return (
      <Box
        position="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <HStack
          spacing={1}
          {...linkProps}
          onClick={(e) => {
            if (onClick) {
              e.preventDefault();
              onClick();
            }
          }}>
          <Text>{children}</Text>
          <ChevronDown
            size={14}
            style={{
              transition: "transform 0.2s ease",
              transform: isSubmenuOpen ? "rotate(180deg)" : "rotate(0deg)",
            }}
          />
        </HStack>

        {isSubmenuOpen && (
          <VStack
            position="absolute"
            top="100%"
            left="50%"
            transform="translateX(-50%)"
            mt={0}
            pt={2}
            bg="rgba(0, 0, 0, 0.95)"
            backdropFilter="blur(12px)"
            borderRadius="12px"
            border="1px solid rgba(255, 255, 255, 0.1)"
            boxShadow="0 8px 32px rgba(0, 0, 0, 0.4)"
            py={2}
            px={1}
            spacing={0}
            minW="160px"
            zIndex={1000}
            alignItems="stretch">
            {submenu.map((item) => {
              const isSubmenuActive =
                typeof window !== "undefined" &&
                window.location.pathname === item.href;
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  passHref
                  onClick={() => setIsLoading(true)} // ✨ Loading cho submenu
                >
                  <Text
                    px={4}
                    py={2.5}
                    fontSize="14px"
                    fontWeight="500"
                    color={isSubmenuActive ? "transparent" : "white"}
                    background={
                      isSubmenuActive
                        ? "linear-gradient(135deg, #9333EA, #EC4899)"
                        : "transparent"
                    }
                    backgroundClip={isSubmenuActive ? "text" : "unset"}
                    WebkitBackgroundClip={isSubmenuActive ? "text" : "unset"}
                    cursor="pointer"
                    borderRadius="8px"
                    transition="all 0.2s ease"
                    _hover={{
                      bg: "rgba(147, 51, 234, 0.2)",
                      color: "transparent",
                      background: "linear-gradient(135deg, #9333EA, #EC4899)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                    }}>
                    {item.label}
                  </Text>
                </Link>
              );
            })}
          </VStack>
        )}
      </Box>
    );
  }

  if (href) {
    let isExternal = false;

    if (href.startsWith("http://") || href.startsWith("https://")) {
      try {
        const url = new URL(href);
        const hostname = url.hostname;
        isExternal =
          !hostname.includes("localhost") && !hostname.includes("kpoproad.io");
      } catch (e) {
        isExternal = false;
      }
    }

    return (
      <Link
        href={href}
        rel="noopener noreferrer"
        passHref
        target={isExternal ? "_blank" : undefined}
        onClick={handleClick}>
        <Text {...linkProps}>{children}</Text>
      </Link>
    );
  }

  return (
    <Text {...linkProps} onClick={handleClick}>
      {children}
    </Text>
  );
};

// Mobile NavLink - Tương tự thêm setIsLoading
const MobileNavLink = ({
  children,
  href,
  onClick,
  onClose,
  isActive = false,
  submenu,
  setIsLoading, // ✨ Thêm prop
}) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const handleClick = (e) => {
    if (submenu) {
      e.preventDefault();
      setIsSubmenuOpen(!isSubmenuOpen);
      return;
    }

    // ✨ Loading cho mobile
    if (href && !href.startsWith("http")) {
      setIsLoading(true);
    }

    if (onClick) {
      e.preventDefault();
      setIsLoading(true);
      onClick();
    }
    if (onClose) onClose();
  };

  const linkProps = {
    color: isActive ? "transparent" : "#FFFFFF",
    background: isActive
      ? "linear-gradient(135deg, #9333EA, #EC4899)"
      : "transparent",
    backgroundClip: isActive ? "text" : "unset",
    WebkitBackgroundClip: isActive ? "text" : "unset",
    fontWeight: "600",
    letterSpacing: "0.05em",
    cursor: "pointer",
    position: "relative",
    transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    fontSize: "15px",
    lineHeight: "1.5",
    py: 2,
    px: 1,
    _after: {
      content: '""',
      position: "absolute",
      bottom: "0",
      left: "0",
      right: "0",
      height: "2px",
      background: "linear-gradient(90deg, #9333EA, #EC4899)",
      transform: isActive ? "scaleX(1)" : "scaleX(0)",
      transformOrigin: "center",
      transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      borderRadius: "2px",
    },
    _hover: {
      color: "transparent",
      background: "linear-gradient(135deg, #9333EA, #EC4899)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      transform: "translateY(-2px)",
      _after: {
        transform: "scaleX(1)",
      },
    },
  };

  if (submenu) {
    return (
      <Box>
        <HStack
          spacing={1}
          {...linkProps}
          onClick={handleClick}
          justify="space-between"
          w="full">
          <Text>{children}</Text>
          <ChevronDown
            size={16}
            style={{
              transition: "transform 0.2s ease",
              transform: isSubmenuOpen ? "rotate(180deg)" : "rotate(0deg)",
            }}
          />
        </HStack>

        {isSubmenuOpen && (
          <VStack
            mt={2}
            pl={4}
            spacing={3}
            alignItems="stretch"
            borderLeft="2px solid rgba(147, 51, 234, 0.3)">
            {submenu.map((item) => {
              const isSubmenuActive =
                typeof window !== "undefined" &&
                window.location.pathname === item.href;
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  passHref
                  onClick={() => {
                    setIsLoading(true);
                    if (onClose) onClose();
                  }}>
                  <Text
                    fontSize="14px"
                    fontWeight="500"
                    color={
                      isSubmenuActive
                        ? "transparent"
                        : "rgba(255, 255, 255, 0.8)"
                    }
                    background={
                      isSubmenuActive
                        ? "linear-gradient(135deg, #9333EA, #EC4899)"
                        : "transparent"
                    }
                    backgroundClip={isSubmenuActive ? "text" : "unset"}
                    WebkitBackgroundClip={isSubmenuActive ? "text" : "unset"}
                    cursor="pointer"
                    transition="all 0.2s ease"
                    _hover={{
                      color: "transparent",
                      background: "linear-gradient(135deg, #9333EA, #EC4899)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                    }}>
                    {item.label}
                  </Text>
                </Link>
              );
            })}
          </VStack>
        )}
      </Box>
    );
  }

  if (href) {
    let isExternal = false;

    if (href.startsWith("http://") || href.startsWith("https://")) {
      try {
        const url = new URL(href);
        const hostname = url.hostname;
        isExternal =
          !hostname.includes("localhost") && !hostname.includes("kpoproad.io");
      } catch (e) {
        isExternal = false;
      }
    }

    return (
      <Link
        href={href}
        rel="noopener noreferrer"
        passHref
        target={isExternal ? "_blank" : undefined}
        onClick={handleClick}>
        <Text {...linkProps}>{children}</Text>
      </Link>
    );
  }

  return (
    <Text {...linkProps} onClick={handleClick}>
      {children}
    </Text>
  );
};

const Header = ({ onHome, onAbout }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isLoading, setIsLoading] = useState(false); // ✨ Loading state
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✨ Tắt loading khi pathname thay đổi
  useEffect(() => {
    setIsLoading(false);
  }, [pathname]);

  // Update active section based on pathname
  useEffect(() => {
    if (pathname === "/") {
      setActiveSection("home");
    } else if (pathname.startsWith("/audition")) {
      setActiveSection("audition");
    } else if (pathname.startsWith("/news")) {
      setActiveSection("news");
    }
  }, [pathname]);

  const handleScrollToTop = useCallback(() => {
    setActiveSection("home");
    if (pathname !== "/") {
      setIsLoading(true); // ✨ Show loading
      router.push("/");
      return;
    }
    if (onHome) return onHome();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, router, onHome]);

  const handleGoAudition = useCallback(() => {
    setActiveSection("audition");
    setIsLoading(true); // ✨ Show loading
    router.push("/audition");
  }, [router]);

  const handleGoNews = useCallback(() => {
    setActiveSection("news");
    setIsLoading(true); // ✨ Show loading
    router.push("/news");
  }, [router]);

  const handleGoArtist = useCallback(() => {
    setIsLoading(true); // ✨ Show loading
    router.push("/artist");
  }, [router]);

  const closeDrawer = () => setIsDrawerOpen(false);

  const navItems = [
    {
      key: "home",
      label: "HOME",
      onClick: handleScrollToTop,
      isActive: pathname === "/",
    },
    // {
    //   key: "artist",
    //   label: "ART",
    //   onClick: handleGoArtist,
    //   isActive: pathname.startsWith("/artist"),
    // },
    // {
    //   key: "audition",
    //   label: "AUDITION",
    //   onClick: handleGoAudition,
    //   isActive: pathname.startsWith("/audition"),
    //   submenu: [
    //     {
    //       key: "audition-collection",
    //       label: "COLLECTION",
    //       href: "/audition/collection",
    //     },
    //     {
    //       key: "audition-vote",
    //       label: "VOTE",
    //       href: "/audition/vote",
    //     },
    //   ],
    // },
    // {
    //   key: "whitepaper",
    //   label: "WHITEPAPER",
    //   href: "https://docs.kpoproad.com",
    // },
    // {
    //   key: "news",
    //   label: "NEWS",
    //   onClick: handleGoNews,
    //   isActive: pathname.startsWith("/news"),
    // },
  ];

  return (
    <>
      {/* ✨ Loading Overlay */}
      {isLoading && <PageLoader />}

      <Box
        as="header"
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={100}
        bg="transparent"
        pointerEvents="none"
        pt={5}>
        <Flex
          pointerEvents="auto"
          mx="auto"
          w="100%"
          maxW={isScrolled ? "min(1400px, 90vw)" : "100vw"}
          px={{ base: 4, md: 8, lg: 10 }}
          py={{ base: 3, md: 3.5 }}
          align="center"
          justify="space-between"
          bg={isScrolled ? "rgba(0, 0, 0, 0.6)" : "transparent"}
          backdropFilter={isScrolled ? "saturate(180%) blur(12px)" : "none"}
          borderBottomWidth={isScrolled ? "1px" : 0}
          borderColor={isScrolled ? "whiteAlpha.200" : "transparent"}
          boxShadow={
            isScrolled
              ? "0 4px 24px rgba(0, 0, 0, 0.4), 0 0 80px rgba(147, 51, 234, 0.1)"
              : "none"
          }
          borderRadius={isScrolled ? "full" : "0"}
          transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)">
          <HStack spacing={0} alignItems="center" hideBelow="lg" flex="1">
            <Image
              src="/logo/logo.png"
              alt="KPOP ROAD"
              h="32px"
              cursor="pointer"
              onClick={handleScrollToTop}
              mr={12}
              transition="all 0.2s ease"
              _hover={{
                transform: "scale(1.08)",
                filter: "drop-shadow(0 0 8px rgba(147, 51, 234, 0.4))",
              }}
            />

            <HStack spacing={8} alignItems="center" justify="center" flex="1">
              {navItems.map((item) => (
                <NavLink
                  key={item.key}
                  href={item.href}
                  onClick={item.onClick}
                  isActive={!!item.isActive}
                  submenu={item.submenu}
                  setIsLoading={setIsLoading} // ✨ Pass setIsLoading
                >
                  {item.label}
                </NavLink>
              ))}
            </HStack>
          </HStack>

          <Box hideFrom="lg">
            <Image
              src="/logo/logo.png"
              alt="KPOP ROAD"
              h="28px"
              cursor="pointer"
              onClick={handleScrollToTop}
              transition="all 0.2s ease"
              _hover={{ transform: "scale(1.05)" }}
            />
          </Box>

          <Box hideFrom="lg">
            <IconButton
              onClick={() => setIsDrawerOpen(true)}
              variant="ghost"
              size="md"
              color="#FFF"
              _hover={{
                bg: "whiteAlpha.200",
                transform: "scale(1.05)",
              }}
              _active={{ bg: "whiteAlpha.300" }}
              transition="all 0.2s ease"
              aria-label="Open menu">
              <Menu size={22} />
            </IconButton>
          </Box>

          {isDrawerOpen && (
            <>
              <Box
                position="fixed"
                top="0"
                left="0"
                w="100vw"
                h="100vh"
                bg="blackAlpha.700"
                backdropFilter="blur(4px)"
                zIndex="1000"
                onClick={closeDrawer}
                animation="fadeIn 0.2s ease"
              />
              <Box
                position="fixed"
                top="0"
                left="0"
                w="300px"
                h="100vh"
                bg="linear-gradient(to bottom, rgba(0, 0, 0, 0.98), rgba(20, 0, 40, 0.98))"
                color="white"
                zIndex="1001"
                boxShadow="0 0 50px rgba(147, 51, 234, 0.3)"
                transform={isDrawerOpen ? "translateX(0)" : "translateX(-100%)"}
                transition="transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)">
                <Flex
                  justify="space-between"
                  align="center"
                  p={5}
                  borderBottomWidth="1px"
                  borderColor="whiteAlpha.200">
                  <Image
                    src="/logo/logo.png"
                    alt="KPOP ROAD"
                    h="28px"
                    cursor="pointer"
                    onClick={() => {
                      handleScrollToTop();
                      closeDrawer();
                    }}
                    transition="all 0.2s ease"
                    _hover={{ transform: "scale(1.05)" }}
                  />
                  <IconButton
                    onClick={closeDrawer}
                    variant="ghost"
                    size="sm"
                    color="#FFFFFF"
                    _hover={{
                      bg: "whiteAlpha.200",
                      color: "#EC4899",
                    }}
                    transition="all 0.2s ease"
                    aria-label="Close menu">
                    <X size={20} />
                  </IconButton>
                </Flex>

                <Stack gap={6} p={6} mt={4}>
                  {navItems.map((item) => (
                    <MobileNavLink
                      key={item.key}
                      href={item.href}
                      onClick={item.onClick}
                      onClose={closeDrawer}
                      isActive={!!item.isActive}
                      submenu={item.submenu}
                      setIsLoading={setIsLoading}>
                      {item.label}
                    </MobileNavLink>
                  ))}

                  <Box mt={8}>
                    <HoverButton />
                  </Box>
                </Stack>
              </Box>
            </>
          )}

          {/* Desktop Action Button */}
          <Box hideBelow="lg" ml={12}>
            <HoverButton />
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Header;

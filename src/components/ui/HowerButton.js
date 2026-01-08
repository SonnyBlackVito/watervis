import { Box, Image, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const MotionBox = motion.create(Box);

export default function HoverButton() {
  const [isHover, setIsHover] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const buttonWidth = useBreakpointValue({
    base: "140px",
    sm: "150px",
    md: "160px",
    lg: "170px",
  });

  const buttonHeight = useBreakpointValue({
    base: "36px",
    sm: "38px",
    md: "40px",
    lg: "42px",
  });

  const paddingX = useBreakpointValue({
    base: 2.5,
    sm: 3,
    md: 4,
    lg: 4,
  });

  const paddingY = useBreakpointValue({
    base: 2,
    sm: 2.5,
    md: 3,
    lg: 3,
  });

  const fontSize = useBreakpointValue({
    base: "xs",
    sm: "sm",
    md: "sm",
    lg: "md",
  });

  const iconSize = useBreakpointValue({
    base: "10px",
    sm: "11px",
    md: "12px",
    lg: "13px",
  });

  const iconImageSize = useBreakpointValue({
    base: "46%",
    sm: "48%",
    md: "50%",
    lg: "52%",
  });

  const handleLaunchApp = () => {
    setIsPopupOpen(true);
  };

  return (
    <>
      {/* <Link
        href="https://app.kpoproad.io"
        passHref
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: "none",
          color: "inherit",
          fontSize: "inherit",
          fontWeight: "inherit",
        }}> */}
      <Box
        href="https://app.kpoproad.io"
        passHref
        target="_blank"
        rel="noopener noreferrer"
        as="button"
        position="relative"
        px={paddingX}
        py={paddingY}
        bg="#ffffff"
        color="black"
        fontWeight="600"
        borderRadius="md"
        overflow="hidden"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={handleLaunchApp}
        minW={buttonWidth}
        height={buttonHeight}
        cursor="pointer"
        fontSize={fontSize}
        display="block"
        _active={{
          transform: "scale(0.98)",
        }}
        touchAction="manipulation">
        <MotionBox
          layout
          position="absolute"
          top={isHover ? "auto" : { base: "2px", sm: "3px", md: "4px" }}
          bottom={isHover ? { base: "2px", sm: "3px", md: "4px" } : "auto"}
          left={{ base: "2px", sm: "3px", md: "4px" }}
          w={iconSize}
          h={iconSize}
          animate={{
            rotate: isHover ? 280 : 350,
          }}
          transition={{
            layout: { duration: 0.4, ease: "easeInOut" },
          }}>
          <Image
            src="/icons/left_arrow.svg"
            alt="icon"
            loading="lazy"
            w={iconImageSize}
            h={iconImageSize}
            objectFit="contain"
          />
        </MotionBox>

        {/* Right Arrow */}
        <MotionBox
          layout
          position="absolute"
          top={isHover ? { base: "0px", sm: "1px", md: "2px" } : "auto"}
          bottom={
            isHover
              ? { base: "6px", sm: "7px", md: "8px" }
              : { base: "-2px", sm: "-1px", md: "-2px" }
          }
          right={
            isHover
              ? { base: "-3px", sm: "-2px", md: "-3px" }
              : { base: "-2px", sm: "-1px", md: "-2px" }
          }
          w={iconSize}
          h={iconSize}
          animate={{
            rotate: isHover ? 290 : 350,
          }}
          transition={{
            layout: { duration: 0.4, ease: "easeInOut" },
          }}>
          <Image
            src="/icons/right_arrow.svg"
            alt="icon"
            w={iconImageSize}
            h={iconImageSize}
            loading="lazy"
            objectFit="contain"
          />
        </MotionBox>

        <Box
          position="relative"
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100%">
          <MotionBox
            position="absolute"
            fontSize={fontSize}
            fontWeight="inherit"
            animate={{
              y: isHover ? { base: 12, sm: 15, md: 20 } : 0,
              opacity: isHover ? 0 : 1,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}>
            LAUNCH APP
          </MotionBox>

          {/* Hover Text */}
          <MotionBox
            position="absolute"
            fontSize={fontSize}
            fontWeight="inherit"
            animate={{
              y: isHover ? 0 : { base: -12, sm: -15, md: -20 },
              opacity: isHover ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}>
            LAUNCH APP
          </MotionBox>
        </Box>
      </Box>
      {/* </Link> */}
    </>
  );
}

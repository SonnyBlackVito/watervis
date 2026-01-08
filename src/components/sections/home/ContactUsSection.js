"use client";

import React, { useState } from "react";
import {
  Box,
  Text,
  Container,
  SimpleGrid,
  Input,
  Textarea,
  Button,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { contactAPI } from "@/lib/api/contact";

const MotionBox = motion.create(Box);
const MotionText = motion.create(Text);

export default function ContactUsSection() {
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [touched, setTouched] = useState({});
  const [submitting, setSubmitting] = useState(false);

  // Validation
  const errors = {
    email:
      touched.email && values.email
        ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)
          ? ""
          : "Invalid email"
        : "",
    first_name: touched.first_name && !values.first_name ? "Required" : "",
    message: touched.message && !values.message ? "Required" : "",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((s) => ({ ...s, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({
      first_name: true,
      last_name: true,
      phone: true,
      email: true,
      message: true,
    });

    if (errors.email || errors.first_name || errors.message) {
      return;
    }

    setSubmitting(true);
    try {
      const contactData = {
        firstName: values.first_name,
        lastName: values.last_name,
        email: values.email,
        phone: values.phone,
        message: values.message,
      };

      await contactAPI.sendContact(contactData);
      toast.success("Your message has been sent successfully.");

      setValues({
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
        message: "",
      });
      setTouched({});
    } catch (err) {
      console.error("Error submitting contact form:", err);
      
      toast.error(err.response?.data?.message || "An error occurred while sending your message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const labelStyle = {
    fontSize: "20px",
    color: "white",
    fontWeight: "normal",
    textTransform: "capitalize",
    letterSpacing: "normal",
    flex: "0 0 auto",
    whiteSpace: "nowrap",
    minW: "100px",
    w: "100px",
  };

  const inputStyle = {
    variant: "unstyled",
    bg: "transparent",
    px: 0,
    py: 3,
    borderRadius: 0,
    color: "white",
    fontSize: "18px",
    _placeholder: { color: "white" },
    _focus: {
      outline: "none",
      boxShadow: "none",
    },
    transition: "all 180ms ease",
  };

  const fieldWrapperStyle = {
    borderBottom: "1px solid",
    borderColor: "rgba(255,255,255,0.5)",
    _hover: { borderColor: "rgba(255,255,255,0.25)" },
    _focusWithin: {
      // borderColor: "purple.400",
      borderBottomWidth: "1px",
    },
    transition: "border-color 180ms ease",
    pb: 2,
    maxW: "480px",
  };

  return (
    <Box
      w="full"
      minH="50vh"
      bg="black"
      py={{ base: 8, md: 12 }}
      px={{ base: 4, md: 8 }}
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
      overflow="hidden">
      {/* Animated background dots */}
      {[...Array(6)].map((_, i) => (
        <MotionBox
          key={i}
          position="absolute"
          width="4px"
          height="4px"
          bg="rgba(14,254,33,0.36)"
          borderRadius="50%"
          top={`${14 + i * 12}%`}
          left={`${6 + i * 14}%`}
          animate={{
            y: [0, -14, 0],
            opacity: [0.25, 0.8, 0.25],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.4,
          }}
        />
      ))}

      <Container maxW="6xl" py={4} zIndex={5}>
        <VStack spacing={4} mb={8} alignItems="center" textAlign="center">
          <MotionText
            fontSize={{ base: "32px", md: "44px", lg: "55px" }}
            fontWeight="bold"
            background="linear-gradient(270deg, #8B5FFF 0%, #B030D0 50%, #A35FE0 100%)"
            bgClip="text"
            color="transparent"
            sx={{
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            textShadow="0 0 40px rgba(139, 95, 255, 0.7), 0 0 80px rgba(176, 48, 208, 0.4)"
            initial="hidden"
            animate="visible"
            custom={0}
            whileInView={{
              textShadow: [
                "0 0 40px rgba(139, 95, 255, 0.7), 0 0 80px rgba(176, 48, 208, 0.4)",
                "0 0 50px rgba(139, 95, 255, 0.9), 0 0 100px rgba(176, 48, 208, 0.5)",
                "0 0 40px rgba(139, 95, 255, 0.7), 0 0 80px rgba(176, 48, 208, 0.4)",
              ],
            }}
            transition={{
              textShadow: {
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity,
              },
            }}>
            CONTACT US{" "}
          </MotionText>

          <Text
            fontSize={{ base: "sm", md: "md", lg: "lg" }}
            color="white"
            maxW="4xl"
            lineHeight="tall"
            opacity={1}>
            Have any questions or want to learn more about our project? Contact
            our team to find out more!
          </Text>
        </VStack>

        <Box as="form" onSubmit={handleSubmit}>
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={{ base: 8, md: 12 }}
            mb={12}
            >
            {/* First Name */}
            <Box
            mb={{base:8,md:8,lg:12}}>
              <Flex
                {...fieldWrapperStyle}
                borderColor={
                  touched.first_name && errors.first_name
                    ? "red.400"
                    : fieldWrapperStyle.borderColor
                }
                align="center"
                gap={6}
              >
                <Text {...labelStyle}>First Name</Text>
                <Input
                  name="first_name"
                  value={values.first_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  flex="1"
                  {...inputStyle}
                />
              </Flex>
              {errors.first_name && (
                <Text color="red.400" fontSize="xs" mt={1}>
                  {errors.first_name}
                </Text>
              )}
            </Box>

            {/* Last Name */}
            <Box>
              <Flex
                {...fieldWrapperStyle}
                align="center"
                gap={6}
              >
                <Text {...labelStyle}>Last Name</Text>
                <Input
                  name="last_name"
                  value={values.last_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  flex="1"
                  {...inputStyle}
                />
              </Flex>
            </Box>

            {/* Phone */}
            <Box>
              <Flex
                {...fieldWrapperStyle}
                align="center"
                gap={6}
              >
                <Text {...labelStyle}>Phone</Text>
                <Input
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="tel"
                  flex="1"
                  {...inputStyle}
                />
              </Flex>
            </Box>

            {/* Email */}
            <Box>
              <Flex
                {...fieldWrapperStyle}
                borderColor={
                  touched.email && errors.email
                    ? "red.400"
                    : fieldWrapperStyle.borderColor
                }
                align="center"
                gap={6}
              >
                <Text {...labelStyle}>Email</Text>
                <Input
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="email"
                  flex="1"
                  {...inputStyle}
                />
              </Flex>
              {errors.email && (
                <Text color="red.400" fontSize="xs" mt={1}>
                  {errors.email}
                </Text>
              )}
            </Box>
          </SimpleGrid>

          {/* Message */}
          <Box mb={8} w="full">
            <Flex
              {...fieldWrapperStyle}
              borderColor={
                touched.message && errors.message
                  ? "red.400"
                  : fieldWrapperStyle.borderColor
              }
              align="flex-start"
              gap={6}
              w="full"
              maxW="none">
              <Text {...labelStyle} pt={3}>Message</Text>
              <Textarea
                name="message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                minH="120px"
                resize="vertical"
                placeholder="Write your message..."
                flex="1"
                px={2}
                py={3}
                variant="unstyled"
                bg="transparent"
                borderRadius={0}
                color="white"
                fontSize="17px"
                _placeholder={{ color: "rgba(255,255,255,0.4)" }}
                _focus={{
                  outline: "none",
                  boxShadow: "none",
                }}
                transition="all 180ms ease"
                cursor="text"
              />
            </Flex>
            {errors.message && (
              <Text color="red.400" fontSize="xs" mt={1}>
                {errors.message}
              </Text>
            )}
          </Box>

          <MotionBox
            initial="hidden"
            animate="visible"
            custom={3}
            display="flex"
            justifyContent="center"
            w="full">
            <Button
              type="submit"
              bg="linear-gradient(135deg, #6750FF 0%, #9819AB 50%, #8B45C7 100%)"
              color="white"
              size={{ base: "md", md: "lg", lg: "xl" }}
              h={{ base: "8", md: "10", lg: "12" }}
              w={{ base: "full", md: "200px", lg: "280px" }}
              maxW="90%"
              px={10}
              py={4}
              fontSize="xl"
              fontWeight="bold"
              borderRadius="full"
              border="2px solid rgba(103, 80, 255, 0.3)"
              boxShadow="0 8px 32px rgba(103, 80, 255, 0.3), 0 0 40px rgba(152, 25, 171, 0.2)"
              isLoading={submitting}
              loadingText="Sending..."
              _hover={{
                transform: "translateY(-3px) scale(1.02)",
                boxShadow:
                  "0 12px 40px rgba(103, 80, 255, 0.4), 0 0 60px rgba(152, 25, 171, 0.3)",
                bg: "linear-gradient(135deg, #7C5CFF 0%, #A625BD 50%, #9F58D9 100%)",
              }}
              _active={{
                transform: "translateY(-1px) scale(1.01)",
              }}
              _disabled={{
                opacity: 0.6,
                cursor: "not-allowed",
                transform: "none",
              }}
              transition="all 0.3s ease">
              {submitting ? "Sending..." : "Send Us"}
            </Button>
          </MotionBox>
        </Box>
      </Container>

      {/* Background blur effects */}
      <MotionBox
        position="absolute"
        top="28%"
        left="6%"
        width="120px"
        height="120px"
        borderRadius="full"
        bg="radial-gradient(circle, rgba(14,254,33,0.08), transparent)"
        filter="blur(22px)"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.25, 0.6, 0.25],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      />

      <MotionBox
        position="absolute"
        bottom="22%"
        right="10%"
        width="100px"
        height="100px"
        borderRadius="full"
        bg="radial-gradient(circle, rgba(139,92,246,0.06), transparent)"
        filter="blur(18px)"
        animate={{
          scale: [1.05, 0.95, 1.05],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          delay: 1,
        }}
      />
    </Box>
  );
}
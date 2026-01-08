"use client";
import {
  Container,
  Flex,
  HStack,
  Text,
  VStack,
  Box,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";

export default function Footer() {
  return (
    <Container
      color="white"
      bgColor="#BEBEBE"
      fontWeight={500}
      maxW="100%"
      minH={{ base: "auto", md: "30vh" }}
      backgroundColor="footerBackground"
      py={{ base: 6, sm: 8, md: 12 }}
      px={{ base: 4, sm: 6, md: 8 }}>
      <VStack spacing={{ base: 6, md: 8 }}>
        <Text
          px={{ base: 4, md: 8 }}
          fontSize={{ base: "xs", sm: "sm", md: "md" }}
          color="gray.300"
          textAlign="center"
          maxW="100%">
          Copyright WATERVIS . All rights reserved.
        </Text>
      </VStack>
    </Container>
  );
}

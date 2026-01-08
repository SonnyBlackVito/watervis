"use client";
import {
  createSystem,
  defaultConfig,
  defineTextStyles,
} from "@chakra-ui/react";

const textStyles = defineTextStyles({
  body: {
    value: {
      fontFamily: "Inter, sans-serif",
      fontWeight: "normal",
    },
  },
  heading: {
    value: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: "bold",
    },
  },
});

export const system = createSystem(defaultConfig, {
  theme: {
    textStyles,
    tokens: {
      fonts: {
        heading: { value: "Poppins, sans-serif" },
        body: { value: "Inter, sans-serif" },
      },
    },
  },
});

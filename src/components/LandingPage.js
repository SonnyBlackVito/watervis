import AboutCollectionSection from "@/sections/art/AboutCollectionSection";
import CollectionSection from "@/sections/art/CollectionSection copy";
import HeroSection from "@/sections/art/HeroSection";
import AboutSection from "@/sections/art/AboutSection";

import { Box } from "lucide-react";

export default function LandingPage() {
  return (
    <Box as="main">
      <HeroSection />
      <AboutSection />
      <AboutCollectionSection />
      <CollectionSection />
    </Box>
  );
}

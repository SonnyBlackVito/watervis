// "use client";

// import HeroSection from "@/components/HeroSection";

// import HeroSection from "@/components/sections/home/HeroSection";
import AboutSection from "@/components/sections/home/AboutSection";
import BuildingBlockSection from "@/components/sections/home/BuildingBlockSection";
import EmpowermentSection from "@/components/sections/home/EmpowermentSection";
import TokenomicsSection from "@/components/sections/home/TokenomicsSection";
import RoadmapSection from "@/components/sections/home/RoadmapSection";
import PartnerSection from "@/components/sections/home/PartnerSection";
import OurWebsiteSection from "@/components/sections/home/OurWebsiteSection";
import StayTunedSection from "@/components/sections/home/StayTunedSection";
import ContactUsSection from "@/components/sections/home/ContactUsSection";

import PreciseScrollAnimation from "@/components/PreciseScrollAnimation";
import HeroSection from "@/components/sections/home/HeroSection";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box bg="#12131A" overflowX="hidden" overflowY="hidden">
      <HeroSection />

      {/* <LandingPageSection /> */}

      <Box id="about">
        <PreciseScrollAnimation
          animation="fadeInUp"
          threshold={0.25}
          delay={0.1}>
          <AboutSection />
        </PreciseScrollAnimation>
      </Box>

      <PreciseScrollAnimation
        animation="fadeInLeft"
        threshold={0.3}
        delay={0.05}>
        <Box id="services">
          <BuildingBlockSection />
        </Box>
      </PreciseScrollAnimation>

      <PreciseScrollAnimation
        animation="fadeInRight"
        threshold={0.3}
        delay={0.1}>
        <Box id="features">
          <EmpowermentSection />
        </Box>
      </PreciseScrollAnimation>

      <PreciseScrollAnimation animation="scaleIn" threshold={0.4} delay={0.2}>
        <Box id="team">
          <RoadmapSection />
        </Box>
      </PreciseScrollAnimation>
      {/* 




      <PreciseScrollAnimation
        animation="fadeInRight"
        threshold={0.3}
        delay={0.1}>
        <Box id="features">
          <TokenomicsSection />
        </Box>
      </PreciseScrollAnimation>



      <PreciseScrollAnimation
        animation="slideInUp"
        threshold={0.3}
        delay={0.15}>
        <Box id="portfolio">
          <PartnerSection />
        </Box>
      </PreciseScrollAnimation>

      <PreciseScrollAnimation animation="fadeInUp" threshold={0.3} delay={0.1}>
        <Box id="testimonials">
          <OurWebsiteSection />
        </Box>
      </PreciseScrollAnimation>

      <PreciseScrollAnimation animation="fadeIn" threshold={0.35} delay={0.2}>
        <Box id="contact">
          <StayTunedSection />
        </Box>
      </PreciseScrollAnimation>

      <PreciseScrollAnimation animation="fadeInUp" threshold={0.3} delay={0.1}>
        <ContactUsSection />
      </PreciseScrollAnimation> */}
    </Box>
  );
}

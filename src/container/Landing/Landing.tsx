import React from "react";
import { Box } from "@chakra-ui/react";
import {
  Navbar,
  HeroSection,
  SectionOne,
  SectionTwo,
  SectionThree,
  Reviews,
  PricingSection,
  Faq,
  LandingFooter,
} from "../../components/Landing";

function Landing() {
  return (
    <Box>
      <Navbar />

      <Box position="relative">
        <Box
          display={{ sm: "none", lg: "block" }}
          position="absolute"
          w="100%"
          h="300px"
          bottom={{ lg: "-180px", "2xl": "-160px" }}
          left="0px"
          bg=" linear-gradient(180deg, rgba(250, 251, 251, 0.0001) 0%, #f0f5fc 100%)"
          borderBottomRadius="50%"
          zIndex="-99"
        />
        <HeroSection />
      </Box>

      <Box>
        <SectionOne />
      </Box>

      <Box position="relative" bgColor="brand.400">
        {/* top curve  */}
        <Box
          transform="rotate(180deg)"
          position="absolute"
          top="-1px"
          left="0px"
          w="100%"
          h={{ sm: "50px", lg: "100px" }}
        >
          <svg
            id="bigHalfCircle"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            fill="white"
            preserveAspectRatio="none"
          >
            <path d="M0 100 C40 0 60 0 100 100 Z" />
          </svg>
        </Box>

        {/* bottom curve */}
        <Box
          transform="rotate(180deg)"
          position="absolute"
          bottom={{ sm: "-48px", lg: "-98px" }}
          left="0px"
          w="100%"
          h={{ sm: "50px", lg: "100px" }}
        >
          <svg
            id="bigHalfCircle"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            fill="#00A15D"
            preserveAspectRatio="none"
          >
            <path d="M0 100 C40 0 60 0 100 100 Z" />
          </svg>
        </Box>
        <SectionTwo />
      </Box>

      <Box>
        <SectionThree />
      </Box>

      <Box position="relative" bgColor="brand.400">
        {/* top curve svg */}
        <Box
          transform="rotate(180deg)"
          position="absolute"
          top="-1px"
          left="0px"
          w="100%"
          h={{ sm: "50px", lg: "100px" }}
          zIndex="99"
        >
          <svg
            id="bigHalfCircle"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            fill="white"
            preserveAspectRatio="none"
          >
            <path d="M0 100 C40 0 60 0 100 100 Z" />
          </svg>
        </Box>

        {/* bottom curve svg */}
        <Box
          position="absolute"
          bottom="-1px"
          left="0px"
          w="100%"
          h={{ sm: "50px", lg: "100px" }}
          zIndex="99"
        >
          <svg
            id="bigHalfCircle"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            fill="white"
            preserveAspectRatio="none"
          >
            <path d="M0 100 C40 0 60 0 100 100 Z" />
          </svg>
        </Box>

        <Reviews />
      </Box>

      <Box
        position="relative"
        bg=" linear-gradient(180deg, rgba(0, 161, 93, 0.0001) 30.73%, rgba(0, 161, 93, 0.1) 92.71%)"
      >
        <Box
          transform="rotate(180deg)"
          position="absolute"
          bottom={{ sm: "-50px", xl: "-100px" }}
          display={{ sm: "none", xl: "block" }}
          left="0px"
          w="100%"
          h={{ sm: "50px", xl: "100px" }}
        >
          <svg
            id="bigHalfCircle"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            fill="rgba(0, 161, 93, 0.1)"
            preserveAspectRatio="none"
          >
            <path d="M0 100 C40 0 60 0 100 100 Z" />
          </svg>
        </Box>
        <PricingSection />
      </Box>

      <Box>
        <Faq />
      </Box>

      <Box position="relative" bgColor="brand.400">
        {/* top curve svg */}
        <Box
          transform="rotate(180deg)"
          position="absolute"
          top="-1px"
          left="0px"
          w="100%"
          h={{ sm: "50px", xl: "100px" }}
          zIndex={99}
        >
          <svg
            id="bigHalfCircle"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            fill="white"
            preserveAspectRatio="none"
          >
            <path d="M0 100 C40 0 60 0 100 100 Z" />
          </svg>
        </Box>
        <LandingFooter />
      </Box>
    </Box>
  );
}

export default Landing;

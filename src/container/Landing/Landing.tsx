import React from "react";
import { Box } from "@chakra-ui/react";
import {
  Navbar,
  HeroSection,
  SectionOne,
  SectionTwo,
  SectionThree,
  Reviews,
} from "../../components/Landing";

function Landing() {
  return (
    <Box>
      <Navbar />
      <Box position="relative" maxW={"min(100%,1420px)"} mx="auto">
        <HeroSection />
      </Box>

      <Box>
        <SectionOne />
      </Box>

      <Box>
        <SectionTwo />
      </Box>

      <Box>
        <SectionThree />
      </Box>

      <Box>
        <Reviews />
      </Box>
    </Box>
  );
}

export default Landing;

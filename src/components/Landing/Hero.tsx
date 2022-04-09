import React, { useEffect, useRef } from "react";
import {
  Box,
  HStack,
  Text,
  Heading,
  Button,
  Image,
  Stack,
  Show,
} from "@chakra-ui/react";
import { BsArrowRightShort } from "react-icons/bs";
import { gsap } from "gsap";

function Hero() {
  const headingRef: any = useRef();
  const textRef: any = useRef();
  const buttonRef: any = useRef();
  const macbookRef: any = useRef();
  const teamcardRef: any = useRef();
  const progressRef: any = useRef();
  const patternRef: any = useRef();

  useEffect(() => {
    gsap
      .timeline()
      .from(headingRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "slow(0.7, 0.7, false)",
      })
      .from(
        textRef.current,
        {
          opacity: 0,
          y: 30,
          duration: 1,
          ease: "slow(0.7, 0.7, false)",
        },
        "-=1"
      )
      .from(
        buttonRef.current,
        {
          opacity: 0,
          y: 30,
          duration: 1,
          ease: "slow(0.7, 0.7, false)",
        },
        "-=0.9"
      )
      .from(
        macbookRef.current,
        {
          opacity: 0,
          x: 20,
          y: -20,
          duration: 1,
        },
        "-=0.8"
      )
      .from(
        teamcardRef.current,
        {
          opacity: 0,
          x: 20,
          duration: 1,
        },
        "-=0.7"
      )
      .from(
        patternRef.current,
        {
          opacity: 0,
          x: 20,
          duration: 1,
        },
        "-=0.7"
      )
      .from(progressRef.current, {
        opacity: 0,
        x: 20,
        duration: 1,
      });
  }, []);

  return (
    <Box
      maxW={"min(100%,1500px)"}
      mx="auto"
      mb={{ sm: "100px", xl: "300px" }}
      px={{ sm: "30px", lg: "40px", xl: "80px" }}
      mt="5rem"
      position="relative"
    >
      <HStack mx="auto" w={{ "2xl": "1200px" }} alignItems="stretch">
        <Box flex="1 1 0px">
          <Box
            textAlign={{ sm: "center", lg: "left" }}
            w={{ sm: "100%", lg: "80%" }}
          >
            <Heading
              ref={headingRef}
              color="text.gray"
              fontSize={{ sm: "2xl", lg: "3xl", xl: "5xl" }}
            >
              Project and Team <br /> Management Made Simple!
            </Heading>

            <Text
              color="text.secondary"
              fontSize={{ sm: "sm", lg: "md" }}
              fontWeight="normal"
              lineHeight="1.4rem"
              my="1rem"
              ref={textRef}
            >
              Collaborating on projects has never been
              <Show above="xl">
                <br />
              </Show>
              easier, welcome to the project workspace that puts accountability
              first.
            </Text>
          </Box>

          <Stack
            ref={buttonRef}
            justifyContent={{ md: "center", lg: "flex-start" }}
            direction={{ sm: "column", md: "row" }}
            spacing={5}
            alignItems="center"
          >
            <Button
              bgColor="#FF5E4B"
              color="white"
              borderColor="#ff5e4b"
              borderWidth="2px"
              fontWeight="normal"
              fontSize="sm"
              px="1.5rem"
              py="1.4rem"
              w={{ sm: "170px", xl: "200px" }}
              _hover={{ bg: "#FF5E4B", color: "brand.400" }}
              _active={{ bg: "#FF5E4B" }}
              _focus={{ outline: "none", color: "brand.400" }}
            >
              Get Started
              <BsArrowRightShort size="1.3rem" />
            </Button>

            <Button
              bgColor="brand.100"
              color="brand.400"
              borderColor="brand.400"
              borderWidth="1px"
              fontWeight="normal"
              fontSize="sm"
              px="1.5rem"
              py="1.4rem"
              w={{ sm: "170px", xl: "200px" }}
              _hover={{ bg: "brand.100" }}
              _active={{ bg: "brand.100" }}
              _focus={{ outline: "none" }}
            >
              How It Works
              <BsArrowRightShort size="1.3rem" />
            </Button>
          </Stack>
        </Box>

        <Box flex="1 1 0px" display={{ sm: "none", lg: "block" }}>
          <Box
            position="absolute"
            right="0px"
            top="0px"
            zIndex="-2"
            w={{ lg: "300px", xl: "500px" }}
            h={{ lg: "300", xl: "450px" }}
            fontSize={{ sm: "2xl", lg: "3xl", xl: "5xl" }}
          >
            <Image
              src="/images/bg_circle.png"
              alt="sync logo"
              width="100%"
              height="100%"
            />
          </Box>

          <Box position="relative" h="100%">
            <Box
              ref={macbookRef}
              position="absolute"
              bottom={{ lg: "-90px", xl: "-140px" }}
              right={{ lg: "0px", xl: "-20px" }}
              h={{ lg: "220", xl: "330px" }}
            >
              <Image src="/images/macbook.png" alt="sync logo" height="100%" />
            </Box>

            <Box
              ref={teamcardRef}
              position="absolute"
              bottom={{ lg: "-70px", xl: "-120px" }}
              h={{ lg: "130px", xl: "200px" }}
              right={{ lg: "-20px", xl: "-40px" }}
            >
              <Image
                src="/images/card_team.png"
                alt="sync logo"
                height="100%"
              />
            </Box>

            <Box
              ref={progressRef}
              position="absolute"
              bottom="-60px"
              right={{ lg: "240px", xl: "340px" }}
              h={{ lg: "130px", xl: "200px" }}
            >
              <Image
                src="/images/DailyProgress.png"
                alt="sync logo"
                height="100%"
              />
            </Box>
            <Box
              ref={patternRef}
              position="absolute"
              bottom={{ sm: "60px", xl: "90px" }}
              right={{ sm: "280px", xl: "400px" }}
              zIndex="-1"
              h={{ lg: "70px", xl: "100px" }}
            >
              <Image src="/images/pattern.png" alt="sync logo" height="100%" />
            </Box>

            <Box
              position="absolute"
              top="110px"
              right={{ sm: "0px", xl: "-20px" }}
              zIndex="-1"
              h={{ lg: "60px", xl: "80px" }}
            >
              <Image src="/images/dots.png" alt="sync logo" height="100%" />
            </Box>
          </Box>
        </Box>
      </HStack>
    </Box>
  );
}

export default Hero;

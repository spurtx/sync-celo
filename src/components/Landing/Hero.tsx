import React from "react";
import {
  Box,
  HStack,
  Text,
  Heading,
  Button,
  Image,
  Stack,
} from "@chakra-ui/react";
import { BsArrowRightShort } from "react-icons/bs";

function Hero() {
  return (
    <Box
      mb={{ sm: "100px", xl: "400px" }}
      px={{ sm: "1rem", xl: "3rem" }}
      maxW={"min(100%,1420px)"}
      mx="auto"
      mt="5rem"
    >
      {/* TODO: LOOK FOR BETTER WAY TO CURVE LINEAR GRADIENT  */}
      <Box
        display={{ sm: "none", xl: "block" }}
        position="absolute"
        w="100%"
        h="300px"
        bottom="-200px"
        left="0px"
        bg=" linear-gradient(180deg, rgba(250, 251, 251, 0.0001) 0%, #f0f5fc 100%)"
        borderBottomRadius="50%"
        zIndex="-99"
      />

      <HStack alignItems="stretch">
        <Box flex="1 1 0px">
          <Box
            textAlign={{ sm: "center", xl: "left" }}
            w={{ sm: "100%", xl: "75%" }}
          >
            <Heading color="text.gray" fontSize={{ sm: "4xl", xl: "5xl" }}>
              Project and Team <br /> Management Made Simple!
            </Heading>

            <Text
              color="text.secondary"
              fontSize="md"
              fontWeight="normal"
              lineHeight="1.5rem"
              my={{ sm: "1.7rem", xl: "1.2rem" }}
            >
              Collaborating on projects has never been <br /> easier, welcome to
              the project workspace that puts accountability first.
            </Text>
          </Box>

          <Stack
            direction={{ sm: "column", xl: "row" }}
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
              w="200px"
              _hover={{ bg: "#FF5E4B" }}
              _active={{ bg: "#FF5E4B" }}
              _focus={{ outline: "none" }}
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
              w="200px"
              _hover={{ bg: "brand.100" }}
              _active={{ bg: "brand.100" }}
              _focus={{ outline: "none" }}
            >
              Watch Demo
              <BsArrowRightShort size="1.3rem" />
            </Button>
          </Stack>
        </Box>

        <Box flex="1 1 0px" display={{ sm: "none", xl: "block" }}>
          <Box position="absolute" right="0px" top="0px" zIndex="-2">
            <Image
              src="/images/bg_circle.png"
              alt="sync logo"
              width="500px"
              height="450px"
            />
          </Box>

          <Box position="relative" h="100%">
            <Box position="absolute" bottom="-140px" right="-20px">
              <Image src="/images/macbook.png" alt="sync logo" height="330px" />
            </Box>
            <Box position="absolute" bottom="-120px" right="-40px">
              <Image
                src="/images/card_team.png"
                alt="sync logo"
                height="200px"
              />
            </Box>
            <Box position="absolute" bottom="-80px" left="-0px">
              <Image
                src="/images/DailyProgress.png"
                alt="sync logo"
                height="200px"
              />
            </Box>

            <Box position="absolute" top="110px" right="-20px" zIndex="-1">
              <Image src="/images/dots.png" alt="sync logo" height="80px" />
            </Box>
          </Box>
        </Box>
      </HStack>
    </Box>
  );
}

export default Hero;

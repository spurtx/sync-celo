import React from "react";
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

function Hero() {
  return (
    <Box
      maxW={"min(100%,1500px)"}
      mx="auto"
      mb={{ sm: "100px", xl: "400px" }}
      px={{ sm: "30px", lg: "40px", xl: "80px" }}
      mt="5rem"
      position="relative"
    >
      <HStack mx="auto" w={{ "2xl": "1200px" }} alignItems="stretch">
        <Box flex="1 1 0px">
          <Box
            textAlign={{ sm: "center", lg: "left" }}
            w={{ sm: "100%", lg: "75%" }}
          >
            <Heading
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
              w={{ sm: "170px", xl: "200px" }}
              _hover={{ bg: "brand.100" }}
              _active={{ bg: "brand.100" }}
              _focus={{ outline: "none" }}
            >
              Watch Demo
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
              position="absolute"
              bottom={{ lg: "-90px", xl: "-140px" }}
              right={{ lg: "0px", xl: "-20px" }}
              h={{ lg: "220", xl: "330px" }}
            >
              <Image src="/images/macbook.png" alt="sync logo" height="100%" />
            </Box>
            <Box
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

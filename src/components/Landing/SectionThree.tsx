import React, { useRef, useEffect } from "react";
import {
  Box,
  Button,
  Text,
  Tag,
  Heading,
  Image,
  HStack,
} from "@chakra-ui/react";
import { BsArrowRightShort } from "react-icons/bs";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function SectionThree() {
  const middleRef: any = useRef();
  const rightSideRef: any = useRef();
  const leftSideRef: any = useRef();
  const buttonRef: any = useRef();

  useEffect(() => {
    gsap.from(middleRef.current, {
      opacity: 0,
      ease: "slow(0.7, 0.7, false)",
      delay: 0.8,
      duration: 1,
      scrollTrigger: {
        trigger: ".trigger_3",
      },
    });

    gsap.from(rightSideRef.current, {
      opacity: 0,
      x: 30,
      ease: "slow(0.7, 0.7, false)",
      delay: 0.6,
      duration: 1,
      scrollTrigger: {
        trigger: ".trigger_3",
      },
    });

    gsap.from(leftSideRef.current, {
      opacity: 0,
      x: -30,
      ease: "slow(0.7, 0.7, false)",
      delay: 0.6,
      duration: 1,
      scrollTrigger: {
        trigger: ".trigger_3",
      },
    });
  });

  return (
    <Box
      maxW={"min(100%,1500px)"}
      px={{ sm: "30px", lg: "40px", xl: "80px" }}
      mx="auto"
      id="reviews"
    >
      <HStack
        justifyContent="center"
        h="100%"
        spacing={0}
        flexDirection={{ sm: "column", lg: "row" }}
      >
        <Box display={{ sm: "none", lg: "block" }}>
          <Box ref={leftSideRef}>
            <Image
              transform={{ sm: "rotate(90deg)", lg: "rotate(0deg)" }}
              src="/images/left-side.svg"
              height={{ sm: "330px", lg: "600px" }}
              alt="iphone"
            />
          </Box>
        </Box>
        <Box>
          <Box
            ref={middleRef}
            textAlign="center"
            maxW="400px"
            mb={{ sm: "50px", lg: "0px" }}
          >
            <Tag
              color="brand.400"
              size="lg"
              borderRadius="1.4rem"
              fontSize={{ sm: "xs", lg: "sm" }}
              py="10px"
              px="20px"
              bgColor="brand.100"
              fontWeight="medium"
            >
              INTEGRATIONS
            </Tag>

            <Heading
              color="text.gray"
              fontSize={{ sm: "xl", lg: "3xl" }}
              my="1.2rem"
              className="trigger_3"
            >
              Seamless connection with tools you are familiar with
            </Heading>

            <Text
              color="text.secondary"
              fontSize="sm"
              fontWeight="normal"
              lineHeight="1.5rem"
            >
              Add as many projects and teams as you grow.
            </Text>

            <Button
              ref={buttonRef}
              mt="1.4rem"
              bgColor="#FF5E4B"
              color="white"
              borderColor="#ff5e4b"
              borderWidth="2px"
              fontWeight="normal"
              fontSize="sm"
              px="1rem"
              py="1.3rem"
              transition="all 0.4s"
              w={{ sm: "170px", xl: "170px" }}
              _hover={{
                bg: "brand.400",
                color: "white",
                borderColor: "brand.400",
              }}
              _active={{
                bg: "brand.400",
                color: "white",
                borderColor: "brand.400",
              }}
              _focus={{ outline: "none" }}
            >
              Get Started
              <BsArrowRightShort size="1.3rem" />
            </Button>
          </Box>
        </Box>
        <Box display={{ sm: "none", lg: "block" }}>
          <Box ref={rightSideRef}>
            <Image
              src="/images/right-side.svg"
              transform={{ sm: "rotate(90deg)", lg: "rotate(0deg)" }}
              height={{ sm: "330px", lg: "600px" }}
              alt="iphone"
            />
          </Box>
        </Box>
      </HStack>
    </Box>
  );
}

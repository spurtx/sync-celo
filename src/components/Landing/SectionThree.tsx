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
  const textRef: any = useRef();
  const headRef: any = useRef();
  const tagRef: any = useRef();
  const rightSideRef: any = useRef();
  const leftSideRef: any = useRef();
  const buttonRef: any = useRef();

  useEffect(() => {
    gsap.from(textRef.current, {
      opacity: 0,
      y: 30,
      ease: "slow(0.7, 0.7, false)",
      delay: 0.8,
      duration: 1,
      scrollTrigger: {
        trigger: ".trigger_3",
      },
    });

    gsap.from(headRef.current, {
      opacity: 0,
      y: 30,
      ease: "slow(0.7, 0.7, false)",
      delay: 0.7,
      duration: 1,
      scrollTrigger: {
        trigger: ".trigger_3",
      },
    });

    gsap.from(tagRef.current, {
      opacity: 0,
      y: 30,
      ease: "slow(0.7, 0.7, false)",
      delay: 0.6,
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

    gsap.from(buttonRef.current, {
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
      // h="60vh"
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
          <Box textAlign="center" maxW="400px" mb={{ sm: "50px", lg: "0px" }}>
            <Tag
              color="brand.400"
              size="lg"
              borderRadius="1.4rem"
              fontSize={{ sm: "xs", lg: "sm" }}
              py="10px"
              px="20px"
              bgColor="brand.100"
              fontWeight="medium"
              ref={tagRef}
            >
              Integrations
            </Tag>

            <Heading
              color="text.gray"
              fontSize={{ sm: "xl", lg: "3xl" }}
              my="1.2rem"
              className="trigger_3"
              ref={headRef}
            >
              Seamless integrations with other payment tools
            </Heading>

            <Text
              color="text.secondary"
              fontSize="sm"
              fontWeight="normal"
              lineHeight="1.5rem"
              ref={textRef}
            >
              Sync! absolutely works great with payment tools in ensuring your
              payments.
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
              w={{ sm: "170px", xl: "170px" }}
              _active={{ bg: "#FF5E4B" }}
              _focus={{ outline: "none", color: "brand.400" }}
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

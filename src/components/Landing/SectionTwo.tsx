import React, { useRef, useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  Tag,
  HStack,
  Image,
  Center,
} from "@chakra-ui/react";
import { GoPrimitiveDot } from "react-icons/go";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function SectionTwo() {
  const textRef: any = useRef();
  const headRef: any = useRef();
  const tagRef: any = useRef();
  const leftColumnRef: any = useRef();
  const rightColumnRef: any = useRef();
  const phoneRef: any = useRef();

  useEffect(() => {
    gsap.from(textRef.current, {
      opacity: 0,
      y: -30,
      ease: "slow(0.7, 0.7, false)",
      delay: 0.8,
      duration: 1,
      scrollTrigger: {
        trigger: ".trigger_2",
      },
    });

    gsap.from(headRef.current, {
      opacity: 0,
      y: -30,
      ease: "slow(0.7, 0.7, false)",
      delay: 0.7,
      duration: 1,
      scrollTrigger: {
        trigger: ".trigger_2",
      },
    });

    gsap.from(tagRef.current, {
      opacity: 0,
      y: -30,
      ease: "slow(0.7, 0.7, false)",
      delay: 0.6,
      duration: 1,
      scrollTrigger: {
        trigger: ".trigger_2",
      },
    });

    gsap.from(leftColumnRef.current, {
      opacity: 0,
      ease: "slow(0.7, 0.7, false)",
      delay: 0.6,
      duration: 1,
      transform: "rotate(-5deg)",
      scrollTrigger: {
        trigger: ".leftCol",
      },
    });

    gsap.from(rightColumnRef.current, {
      opacity: 0,
      ease: "slow(0.7, 0.7, false)",
      delay: 0.6,
      duration: 1,
      transform: "rotate(5deg)",
      scrollTrigger: {
        trigger: ".rightCol",
      },
    });

    gsap.from(phoneRef.current, {
      opacity: 0,
      ease: "slow(0.7, 0.7, false)",
      delay: 0.6,
      duration: 1,
      y: 100,
      scrollTrigger: {
        trigger: ".middleCol",
      },
    });
  });

  return (
    <Box
      pb="50px"
      pt="100px"
      maxW={"min(100%,1500px)"}
      px={{ sm: "30px", lg: "40px", xl: "80px" }}
      mx="auto"
      position="relative"
      mb="100px"
    >
      <Box textAlign="center" mt="4rem">
        <Tag
          color="white"
          size="lg"
          borderRadius="1.4rem"
          fontSize={{ sm: "xs", lg: "sm" }}
          py="10px"
          px="20px"
          bgColor="rgba(255, 255, 255, 0.5)"
          fontWeight="medium"
          ref={tagRef}
        >
          FOR MEMBERS
        </Tag>

        <Heading
          color="white"
          fontSize={{ sm: "xl", lg: "3xl" }}
          my="1.2rem"
          className="trigger_2"
          ref={headRef}
        >
          Apply, Join Projects & Get Paid
        </Heading>

        <Text
          ref={textRef}
          color="white"
          fontSize={{ sm: "xs", lg: "sm" }}
          fontWeight="normal"
          lineHeight="1.5rem"
        >
          Setup the tools that enable you work efficiently. You can pick from
          the existing <br /> integrations we have connect at least one to
          proceed.
        </Text>
      </Box>

      <HStack
        mt="5rem"
        spacing={{ sm: 0, lg: 5 }}
        flexDirection={{ sm: "column", lg: "row" }}
        alignItems="center"
      >
        <Box
          ref={leftColumnRef}
          flex="1 1 0px"
          textAlign={{ sm: "center", lg: "right" }}
          d="flex"
          flexDir="column"
          alignItems={{ sm: "flex-start", lg: "flex-end" }}
        >
          {/* <Box w={{ sm: "100%", xl: "75%" }} mb="4rem">
            <Tag bg="#fcfcfd49" borderRadius="50%" h="15px" w="15px">
              <GoPrimitiveDot color="#FF8A65" size="1.1rem" />
            </Tag>
            <Text color="#FAFAFB" my="0.4rem" fontWeight="semibold">
              Easy Access
            </Text>
            <Text fontSize="15px" color="#fafafbb6" fontWeight="normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dis ac
              placerat elementum massa turpis at.
            </Text>
          </Box> */}

          <Box w={{ sm: "100%", xl: "75%" }} mb="4rem" className="leftCol">
            <Tag bg="#fcfcfd49" borderRadius="50%" h="15px" w="15px">
              <GoPrimitiveDot color="#FF8A65" size="1.1rem" />
            </Tag>
            <Text color="#FAFAFB" my="0.4rem" fontWeight="semibold">
              Measure your productivity
            </Text>
            <Text fontSize="15px" color="#fafafbb6" fontWeight="normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dis ac
              placerat elementum massa turpis at.
            </Text>
          </Box>

          <Box w={{ sm: "100%", xl: "75%" }} mb={{ sm: "4rem", lg: "0rem" }}>
            <Tag bg="#fcfcfd49" borderRadius="50%" h="15px" w="15px">
              <GoPrimitiveDot color="#FF8A65" size="1.1rem" />
            </Tag>
            <Text color="#FAFAFB" my="0.4rem" fontWeight="semibold">
              Activity Statistics
            </Text>
            <Text fontSize="15px" color="#fafafbb6" fontWeight="normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dis ac
              placerat elementum massa turpis at.
            </Text>
          </Box>
        </Box>

        <Box flex="1 1 0px" ref={phoneRef} className="middleCol">
          <Center>
            <Box>
              <Image
                src="/images/iphone.png"
                height={{ sm: "400px", lg: "460px" }}
                width={{ sm: "220px", lg: "270px" }}
                alt="iphone"
              />
            </Box>
          </Center>
        </Box>

        <Box
          ref={rightColumnRef}
          flex="1 1 0px"
          textAlign={{ sm: "center", lg: "left" }}
        >
          <Box
            w={{ sm: "100%", lg: "75%" }}
            mb="4rem"
            mt={{ sm: "4rem", lg: "0rem" }}
          >
            <Tag bg="#fcfcfd49" borderRadius="50%" h="15px" w="15px">
              <GoPrimitiveDot color="#FF8A65" size="1.1rem" />
            </Tag>
            <Text color="#FAFAFB" my="0.4rem" fontWeight="semibold">
              Easy Access
            </Text>
            <Text fontSize="15px" color="#fafafbb6" fontWeight="normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dis ac
              placerat elementum massa turpis at.
            </Text>
          </Box>

          {/* <Box w={{ sm: "100%", xl: "75%" }} mb="4rem" >
            <Tag bg="#fcfcfd49" borderRadius="50%" h="15px" w="15px">
              <GoPrimitiveDot color="#FF8A65" size="1.1rem" />
            </Tag>
            <Text color="#FAFAFB" my="0.4rem" fontWeight="semibold">
              Measure your productivity
            </Text>
            <Text fontSize="15px" color="#fafafbb6" fontWeight="normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dis ac
              placerat elementum massa turpis at.
            </Text>
          </Box> */}

          <Box w={{ sm: "100%", xl: "75%" }} className="rightCol">
            <Tag bg="#fcfcfd49" borderRadius="50%" h="15px" w="15px">
              <GoPrimitiveDot color="#FF8A65" size="1.1rem" />
            </Tag>
            <Text color="#FAFAFB" my="0.4rem" fontWeight="semibold">
              Activity Statistics
            </Text>
            <Text fontSize="15px" color="#fafafbb6" fontWeight="normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dis ac
              placerat elementum massa turpis at.
            </Text>
          </Box>
        </Box>
      </HStack>
    </Box>
  );
}

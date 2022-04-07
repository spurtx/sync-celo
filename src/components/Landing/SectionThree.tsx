import React, { useRef, useEffect } from "react";
import { Box, Center, Text, Tag, Heading } from "@chakra-ui/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function SectionThree() {
  const textRef: any = useRef();
  const headRef: any = useRef();
  const tagRef: any = useRef();
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
  });

  return (
    <Box
      maxW={"min(100%,1500px)"}
      px={{ sm: "30px", lg: "40px", xl: "80px" }}
      mx="auto"
      h="50vh"
    >
      <Center h="100%">
        <Box textAlign="center" maxW="400px" h="300px">
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
        </Box>
      </Center>
    </Box>
  );
}

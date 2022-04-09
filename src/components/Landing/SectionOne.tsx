import React, { useRef, useEffect } from "react";
import {
  Box,
  Tag,
  Text,
  Heading,
  SimpleGrid,
  Image,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function SectionOne() {
  const textRef: any = useRef();
  const headRef: any = useRef();
  const tagRef: any = useRef();
  const columnRef: any = useRef();

  useEffect(() => {
    gsap.from(textRef.current, {
      opacity: 0,
      y: 30,
      ease: "slow(0.7, 0.7, false)",
      delay: 0.8,
      duration: 1,
      scrollTrigger: {
        trigger: ".trigger",
      },
    });

    gsap.from(headRef.current, {
      opacity: 0,
      y: 30,
      ease: "slow(0.7, 0.7, false)",
      delay: 0.7,
      duration: 1,
      scrollTrigger: {
        trigger: ".trigger",
      },
    });

    gsap.from(tagRef.current, {
      opacity: 0,
      y: 30,
      ease: "slow(0.7, 0.7, false)",
      delay: 0.6,
      duration: 1,
      scrollTrigger: {
        trigger: ".trigger",
      },
    });

    gsap.from(columnRef.current, {
      opacity: 0,
      y: 30,
      ease: "slow(0.7, 0.7, false)",
      delay: 1,
      duration: 1,
      scrollTrigger: {
        trigger: ".column_trigger",
      },
    });
  });

  return (
    <Box
      maxW={"min(100%,1500px)"}
      px={{ sm: "30px", lg: "40px", xl: "80px" }}
      mb="100px"
      mt="1rem"
      mx="auto"
      id="forPartners"
    >
      <Box textAlign="center">
        <Tag
          color="brand.400"
          borderRadius="1.4rem"
          fontSize={{ sm: "xs", lg: "sm" }}
          py="8px"
          px="20px"
          bgColor="brand.100"
          fontWeight="medium"
          ref={tagRef}
        >
          FOR PARTNERS
        </Tag>

        <Heading
          color="text.gray"
          fontSize={{ sm: "xl", lg: "3xl" }}
          my="1.2rem"
          className="trigger"
          ref={headRef}
        >
          Create Projects, Gigs & Bids
        </Heading>

        <Text
          ref={textRef}
          color="text.secondary"
          fontSize={{ sm: "xs", lg: "sm" }}
          fontWeight="normal"
          lineHeight={{ sm: "1.2rem", lg: "0.8rem" }}
        >
          Setup the tools that enable you work efficiently. You can pick from
          the existing
          <Box display={{ sm: "none", lg: "block" }}>
            <br />
          </Box>
          integrations we have connect at least one to proceed.
        </Text>
      </Box>

      <Box mt="5rem">
        <SimpleGrid
          columns={{ sm: 1, lg: 2, xl: 4 }}
          spacing={{ sm: 20, xl: 5 }}
          ref={columnRef}
          className="column_trigger"
        >
          {data.map((item) => (
            <Box key={item.title} textAlign="center" px="1rem">
              <Tag borderRadius="8px" h="35px" w="35px" p="7px" bg="#ebf5f0">
                <Box
                  border="1px dashed gray"
                  h="100%"
                  w="100%"
                  d="flex"
                  justifyContent="center"
                  p="2px"
                >
                  <Image src={item.image} alt="pie" />
                </Box>
              </Tag>

              <Text
                color="text.gray"
                fontWeight="bold"
                fontSize="xl"
                mt="2rem"
                mb="1rem"
              >
                {item.title}
              </Text>
              <Text
                color="text.secondary"
                fontSize="sm"
                fontWeight="normal"
                lineHeight="1.5rem"
                mb="1rem"
              >
                {item.text}
              </Text>

              <Link href={item.link} passHref>
                <ChakraLink
                  _focus={{ outline: "none" }}
                  _hover={{ outline: "none" }}
                  color="brand.400"
                  fontWeight="bold"
                  fontSize="md"
                  d="inline-flex"
                  alignItems="center"
                >
                  Learn more <BsArrowRightShort size="1.5rem" />
                </ChakraLink>
              </Link>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default SectionOne;

const data = [
  {
    image: "/images/pie.png",
    title: "Analyze performance",
    text: "Track progress on projects, gigs or bids and ensure productivity.",
    link: "#",
  },
  {
    image: "/images/shield.png",
    title: "Collaborate securely",
    text: "Share/publish documents with your team members.",
    link: "#",
  },
  {
    image: "/images/dot_pattern.png",
    title: "Global marketplace",
    text: "Gain access to global talents in every professional field.",
    link: "#",
  },
  {
    image: "/images/workflow.png",
    title: "Easy and Intuitive",
    text: "Easily converse and collaborate with team members. ",
    link: "#",
  },
];

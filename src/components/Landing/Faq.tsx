import React, { useRef, useEffect } from "react";
import {
  Box,
  Text,
  Tag,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Button,
} from "@chakra-ui/react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Faq() {
  const textRef: any = useRef();
  const headRef: any = useRef();
  const tagRef: any = useRef();
  const faqRef: any = useRef();

  useEffect(() => {
    gsap.from(textRef.current, {
      opacity: 0,
      y: -30,
      ease: "slow(0.7, 0.7, false)",
      delay: 0.8,
      duration: 1,
      scrollTrigger: {
        trigger: ".trigger_6",
      },
    });

    gsap.from(headRef.current, {
      opacity: 0,
      y: -30,
      ease: "slow(0.7, 0.7, false)",
      delay: 0.7,
      duration: 1,
      scrollTrigger: {
        trigger: ".trigger_6",
      },
    });

    gsap.from(tagRef.current, {
      opacity: 0,
      y: -30,
      ease: "slow(0.7, 0.7, false)",
      delay: 0.6,
      duration: 1,
      scrollTrigger: {
        trigger: ".trigger_6",
      },
    });
    gsap.from(faqRef.current, {
      opacity: 0,
      x: -30,
      ease: "circ.in",
      delay: 0.6,
      duration: 1,
      scrollTrigger: {
        trigger: ".faq_trigger",
      },
    });
  });

  return (
    <Box
      pb="50px"
      mt={{ sm: "100px", lg: "200px" }}
      maxW={"min(100%,1500px)"}
      px={{ sm: "30px", lg: "40px", xl: "80px" }}
      mx="auto"
    >
      <Box mb="3rem" textAlign="center" mt="4rem">
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
          FAQ&lsquo;s
        </Tag>

        <Heading
          color="text.gray"
          fontSize={{ sm: "xl", lg: "3xl" }}
          my="1.2rem"
          ref={headRef}
          className="trigger_6"
        >
          Our frequently asked questions
        </Heading>

        <Text
          color="text.secondary"
          fontSize={{ sm: "xs", lg: "sm" }}
          fontWeight="normal"
          lineHeight="1.5rem"
          ref={textRef}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
          nullam maecenas.
        </Text>
      </Box>

      <Box maxW="750px" mx="auto" className="faq_trigger">
        <Accordion allowToggle ref={faqRef}>
          {faqData.map((faq: any) => (
            <AccordionItem
              key={faq.id}
              border="1px solid #171B1E"
              borderRadius="xl"
              mb="1.2rem"
            >
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton _focus={{ outline: "none" }}>
                      <Box
                        flex="1"
                        textAlign="left"
                        fontSize="sm"
                        color="text.gray"
                        fontWeight="medium"
                        py="0.5rem"
                      >
                        {faq.question}
                      </Box>
                      {isExpanded ? (
                        <AiOutlineMinus fontSize="18px" />
                      ) : (
                        <AiOutlinePlus fontSize="18px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Text
                      color="text.secondary"
                      fontSize="sm"
                      fontWeight="normal"
                      lineHeight="1.5rem"
                    >
                      {faq.answer}
                    </Text>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          ))}
        </Accordion>

        <Box d="flex" justifyContent="center">
          <Button
            mt="2rem"
            bgColor="brand.100"
            color="brand.400"
            borderColor="brand.400"
            borderWidth="1px"
            fontWeight="normal"
            fontSize="sm"
            px="1rem"
            py="1.4rem"
            w={{ sm: "170px", xl: "200px" }}
            _hover={{ bg: "brand.100" }}
            _active={{ bg: "brand.100" }}
            _focus={{ outline: "none" }}
          >
            More On How It Works
            <BsArrowRightShort size="1.3rem" />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

const faqData = [
  {
    id: 1,
    question: "How do I sign up on Spurt X!?",
    answer:
      "Setup the tools that enable you work efficiently, You can pick from the existing integrations we have connect at least one to proceed..Setup the tools that enable you work efficiently,",
  },
  {
    id: 2,
    question:
      "What’s the difference between a Consultant Member and a Consultant Partner?",
    answer:
      "Setup the tools that enable you work efficiently, You can pick from the existing integrations we have connect at least one to proceed..Setup the tools that enable you work efficiently,",
  },
  {
    id: 3,
    question: "How do I create a project?",
    answer:
      "Setup the tools that enable you work efficiently, You can pick from the existing integrations we have connect at least one to proceed..Setup the tools that enable you work efficiently,",
  },
  {
    id: 4,
    question: "How do I create a Bid?",
    answer:
      "Setup the tools that enable you work efficiently, You can pick from the existing integrations we have connect at least one to proceed..Setup the tools that enable you work efficiently,",
  },
  {
    id: 5,
    question: "How Do I Withdraw Funds?",
    answer:
      "Setup the tools that enable you work efficiently, You can pick from the existing integrations we have connect at least one to proceed..Setup the tools that enable you work efficiently,",
  },
];

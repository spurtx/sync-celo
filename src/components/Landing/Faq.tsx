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

export default function Faq() {
  return (
    <Box
      pb="90px"
      mt="200px"
      px={{ sm: "1rem", xl: "3rem" }}
      maxW={"min(100%,1420px)"}
      mx="auto"
    >
      <Box mb="3rem" textAlign="center" mt="4rem">
        <Tag
          color="brand.400"
          size="lg"
          borderRadius="1.4rem"
          fontSize="sm"
          py="10px"
          px="20px"
          bgColor="brand.100"
          fontWeight="medium"
        >
          FAQ&lsquo;s
        </Tag>

        <Heading color="text.gray" fontSize="2xl" my="1.2rem">
          Our frequently asked questions
        </Heading>

        <Text
          color="text.secondary"
          fontSize="sm"
          fontWeight="normal"
          lineHeight="1.5rem"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
          nullam maecenas.
        </Text>
      </Box>

      <Box w={{ sm: "340px", xl: "750px" }} maxW="750px" mx="auto">
        <Accordion allowToggle>
          {faqData.map((faq: any) => (
            <AccordionItem
              key={faq}
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

                    <Button
                      mt="2rem"
                      bgColor="brand.400"
                      color="white"
                      fontSize="sm"
                      _hover={{ bgColor: "brand.400" }}
                      _active={{ bgColor: "brand.400" }}
                    >
                      Learn More
                    </Button>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
    </Box>
  );
}

const faqData = [
  {
    question: "How do I sign up on Spurt X!?",
    answer:
      "Setup the tools that enable you work efficiently, You can pick from the existing integrations we have connect at least one to proceed..Setup the tools that enable you work efficiently,",
  },
  {
    question:
      "What’s the difference between a Consultant Member and a Consultant Partner?",
    answer:
      "Setup the tools that enable you work efficiently, You can pick from the existing integrations we have connect at least one to proceed..Setup the tools that enable you work efficiently,",
  },
  {
    question: "How do I create a project?",
    answer:
      "Setup the tools that enable you work efficiently, You can pick from the existing integrations we have connect at least one to proceed..Setup the tools that enable you work efficiently,",
  },
  {
    question: "How do I create a Bid?",
    answer:
      "Setup the tools that enable you work efficiently, You can pick from the existing integrations we have connect at least one to proceed..Setup the tools that enable you work efficiently,",
  },
  {
    question: "How Do I Withdraw Funds?",
    answer:
      "Setup the tools that enable you work efficiently, You can pick from the existing integrations we have connect at least one to proceed..Setup the tools that enable you work efficiently,",
  },
];

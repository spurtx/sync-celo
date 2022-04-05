import {
  Box,
  Heading,
  Text,
  Tag,
  Radio,
  RadioGroup,
  Link as ChakraLink,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";
import PricingCard from "./PricingCard";

export default function PricingSection() {
  return (
    <Box
      pb="90px"
      pt="100px"
      px={{ sm: "1rem", xl: "3rem" }}
      maxW={"min(100%,1420px)"}
      mx="auto"
      position="relative"
      bg=" linear-gradient(180deg, rgba(0, 161, 93, 0.0001) 30.73%, rgba(0, 161, 93, 0.1) 92.71%)"
    >
      <Box
        transform="rotate(180deg)"
        position="absolute"
        bottom={{ sm: "-50px", xl: "-100px" }}
        display={{ sm: "none", xl: "block" }}
        left="0px"
        w="100%"
        h={{ sm: "50px", xl: "100px" }}
      >
        <svg
          id="bigHalfCircle"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          fill="rgba(0, 161, 93, 0.1)"
          preserveAspectRatio="none"
        >
          <path d="M0 100 C40 0 60 0 100 100 Z" />
        </svg>
      </Box>

      <Box textAlign="center" mt="4rem">
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
          OUR PRICING
        </Tag>

        <Heading color="text.gray" fontSize="2xl" my="1.2rem">
          Choose the plan <br /> that’s right for you
        </Heading>

        <Text
          color="text.secondary"
          fontSize="sm"
          fontWeight="normal"
          lineHeight="1.5rem"
          display="inline-block"
        >
          <Text color="text.dark" fontWeight="semibold" display="inline-block">
            {" "}
            Start with the Free plan
          </Text>{" "}
          to try out our platform for an unlimited period of time.{" "}
          <Link href="#" passHref>
            <ChakraLink
              color="brand.400"
              fontWeight="semibold"
              display="inline-flex"
            >
              Get started <BsArrowRightShort size="1.2rem" />
            </ChakraLink>
          </Link>
        </Text>
      </Box>

      <Tabs colorScheme="gray">
        <RadioGroup defaultValue="monthly">
          <TabList border="none" my="3rem" justifyContent="center">
            <Tab
              border="none"
              _focus={{ border: "none" }}
              _active={{ bg: "none" }}
            >
              <Radio size="md" colorScheme="green" value="monthly">
                Bill Monthly
              </Radio>
            </Tab>

            <Tab
              border="none"
              _focus={{ border: "none" }}
              _active={{ bg: "none" }}
            >
              <Radio size="md" colorScheme="green" value="annual">
                Bill Annually
              </Radio>
            </Tab>

            <Tab
              border="none"
              _focus={{ border: "none" }}
              _active={{ bg: "none" }}
            >
              <Radio size="md" colorScheme="green" value="quarter">
                Bill Quartely
              </Radio>
            </Tab>
          </TabList>
        </RadioGroup>

        <TabPanels>
          {plansData.map((plan: any) => (
            <TabPanel p="0px" key={plan.id}>
              <PricingCard plan={plan} />
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
}

const plansData = [
  {
    id: 1,
    member: [
      {
        price: 7,
        plan: "month",
        type: "member",
        description: "In assumenda consequatur exercitationem a aspernatur.",
        points: [
          "distinctio ut corporis",
          "distinctio ut corporis",
          "distinctio ut corporis",
        ],
      },
    ],
    partner: [
      {
        price: 10,
        plan: "month",
        type: "partner",
        description: "In assumenda consequatur exercitationem a aspernatur.",
        points: [
          "distinctio ut corporis",
          "distinctio ut corporis",
          "distinctio ut corporis",
          "distinctio ut corporis",
        ],
      },
    ],
  },
  {
    id: 2,
    member: [
      {
        price: 54,
        plan: "annually",
        type: "member",
        description: "In assumenda consequatur exercitationem a aspernatur.",
        points: [
          "distinctio ut corporis",
          "distinctio ut corporis",
          "distinctio ut corporis",
        ],
      },
    ],
    partner: [
      {
        price: 90,
        plan: "annually",
        type: "partner",
        description: "In assumenda consequatur exercitationem a aspernatur.",
        points: [
          "distinctio ut corporis",
          "distinctio ut corporis",
          "distinctio ut corporis",
          "distinctio ut corporis",
        ],
      },
    ],
  },
  {
    id: 3,
    member: [
      {
        price: 15,
        plan: "quarterly",
        type: "member",
        description: "In assumenda consequatur exercitationem a aspernatur.",
        points: [
          "distinctio ut corporis",
          "distinctio ut corporis",
          "distinctio ut corporis",
        ],
      },
    ],
    partner: [
      {
        price: 25,
        plan: "quarterly",
        type: "partner",
        description: "In assumenda consequatur exercitationem a aspernatur.",
        points: [
          "distinctio ut corporis",
          "distinctio ut corporis",
          "distinctio ut corporis",
          "distinctio ut corporis",
        ],
      },
    ],
  },
];

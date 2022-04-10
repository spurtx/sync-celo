import React, { useRef, useEffect } from "react";

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
  Hide,
  Show,
} from "@chakra-ui/react";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";
import PricingCard from "./PricingCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function PricingSection() {
  const textRef: any = useRef();
  const headRef: any = useRef();
  const tagRef: any = useRef();
  const tabRef: any = useRef();

  useEffect(() => {
    gsap.from(textRef.current, {
      opacity: 0,
      y: 30,
      ease: "slow(0.7, 0.7, false)",
      delay: 0.8,
      duration: 1,
      scrollTrigger: {
        trigger: ".trigger_5",
      },
    });

    gsap.from(headRef.current, {
      opacity: 0,
      y: 30,
      ease: "slow(0.7, 0.7, false)",
      delay: 0.7,
      duration: 1,
      scrollTrigger: {
        trigger: ".trigger_5",
      },
    });

    gsap.from(tagRef.current, {
      opacity: 0,
      y: 30,
      ease: "slow(0.7, 0.7, false)",
      delay: 0.6,
      duration: 1,
      scrollTrigger: {
        trigger: ".trigger_5",
      },
    });

    gsap.from(tabRef.current, {
      opacity: 0,
      y: 30,
      ease: "slow(0.7, 0.7, false)",
      delay: 0.6,
      duration: 1,
      scrollTrigger: {
        trigger: ".trigger_5",
      },
    });
  });

  return (
    <Box
      pb="90px"
      pt="50px"
      maxW={"min(100%,1500px)"}
      px={{ sm: "30px", lg: "40px", xl: "80px" }}
      mx="auto"
      position="relative"
      id="pricing"
    >
      <Box textAlign="center" mt="4rem">
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
          OUR PRICING
        </Tag>

        <Heading
          color="text.gray"
          fontSize={{ sm: "xl", lg: "3xl" }}
          my="1.2rem"
          ref={headRef}
          className="trigger_5"
          mx="auto"
          w={{ sm: "100%", lg: "50%" }}
        >
          Flexible and cost-savings plans you can choose from
        </Heading>

        <Text
          color="text.secondary"
          fontSize="sm"
          fontWeight="normal"
          lineHeight="1.5rem"
          mx="auto"
          w={{ sm: "100%", lg: "50%" }}
          ref={textRef}
        >
          Get in on private beta, you don’t start paying until after 90 days.
          Select a suitable plan now to{" "}
          <Link href="#" passHref>
            <ChakraLink
              color="brand.400"
              fontWeight="semibold"
              d="inline-flex"
              alignItems="center"
            >
              get started for free <BsArrowRightShort size="1.2rem" />
            </ChakraLink>
          </Link>
        </Text>
      </Box>

      <Tabs colorScheme="gray">
        <RadioGroup defaultValue="monthly">
          <TabList border="none" my="3rem" justifyContent="center" ref={tabRef}>
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
        description: "Affordable subscription to help you get more value.",
        points: [
          "Unlimited Access to Gigs",
          "Opportunity Recommendations",
          "Performance Monitor",
          "Data saving mode",
          "Supports add-ons and plugins",
        ],
      },
    ],
    partner: [
      {
        price: 10,
        plan: "month",
        type: "partner",
        description:
          "Single subscription, multiple benefits with access to more add-ons and support systems..",
        points: [
          "Project Management",
          "Members Verification",
          "Team Management",
          "Budgeting and Funds Management",
          "Access to business financing",
          "Analytics and Reporting",
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
        description: "Affordable subscription to help you get more value.",
        points: [
          "Unlimited Access to Gigs",
          "Opportunity Recommendations",
          "Performance Monitor",
          "Data saving mode",
          "Supports add-ons and plugins",
        ],
      },
    ],
    partner: [
      {
        price: 90,
        plan: "annually",
        type: "partner",
        description:
          "Single subscription, multiple benefits with access to more add-ons and support systems..",
        points: [
          "Project Management",
          "Members Verification",
          "Team Management",
          "Budgeting and Funds Management",
          "Access to business financing",
          "Analytics and Reporting",
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
        description: "Affordable subscription to help you get more value.",
        points: [
          "Unlimited Access to Gigs",
          "Opportunity Recommendations",
          "Performance Monitor",
          "Data saving mode",
          "Supports add-ons and plugins",
        ],
      },
    ],
    partner: [
      {
        price: 25,
        plan: "quarterly",
        type: "partner",
        description:
          "Single subscription, multiple benefits with access to more add-ons and support systems..",
        points: [
          "Project Management",
          "Members Verification",
          "Team Management",
          "Budgeting and Funds Management",
          "Access to business financing",
          "Analytics and Reporting",
        ],
      },
    ],
  },
];

import React, { useRef, useEffect } from "react";

import {
  Box,
  Text,
  Button,
  HStack,
  Divider,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { BsArrowRightShort, BsCheck2 } from "react-icons/bs";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

interface Props {
  plan?: any;
}

function PricingCard({ plan }: Props) {
  const { member, partner } = plan;
  const card_1Ref: any = useRef();
  const card_2Ref: any = useRef();

  useEffect(() => {
    gsap.from(card_1Ref.current, {
      opacity: 0,
      ease: "sine.in",
      delay: 0.6,
      duration: 1,
      transform: "rotate(-10deg)",
      scrollTrigger: {
        trigger: ".card_1trigger",
      },
    });
    gsap.from(card_2Ref.current, {
      opacity: 0,
      ease: "sine.in",
      delay: 0.6,
      duration: 1,
      transform: "rotate(10deg)",
      scrollTrigger: {
        trigger: ".card_2trigger",
      },
    });
  });

  return (
    <HStack
      flexDirection={{ sm: "column", lg: "row" }}
      spacing={{ sm: 0, lg: 8 }}
      justifyContent="center"
      alignItems="center"
    >
      {member.map((item: any) => (
        <Box
          key={item.price}
          borderTop="3px solid green"
          borderColor="brand.400"
          borderRadius="8px"
          w="270px"
          h="470px"
          boxShadow="md"
          bgColor="white"
          px="1.2rem"
          py="2rem"
          mb={{ sm: "4rem", xl: "0rem" }}
          position="relative"
          ref={card_1Ref}
        >
          <Box d="flex" alignItems="center" mb="1rem">
            <Text color="text.gray" fontSize="4xl" fontWeight="bold">
              ${item.price}
            </Text>
            <Text color="text.secondary" fontWeight="normal" fontSize="sm">
              /{item.plan}
            </Text>
          </Box>

          <Text color="text.gray" fontSize="xl" fontWeight="bold">
            {item.type}
          </Text>

          <Text
            color="text.secondary"
            fontWeight="300"
            fontSize="sm"
            mt="1rem"
            className="card_1trigger"
            lineHeight="1.4rem"
          >
            {item.description}
          </Text>

          <Divider borderColor="#E5EAF4" borderWidth="0.012rem" my="1.5rem" />

          <List spacing={5} fontWeight="400">
            {item.points.map((point: any) => (
              <ListItem color="text.gray" fontSize="sm" key={point}>
                <ListIcon
                  as={BsCheck2}
                  color="#00A15D"
                  bgColor="brand.100"
                  borderRadius="20px"
                  w="18px"
                  h="18px"
                />
                {point}
              </ListItem>
            ))}
          </List>

          <Button
            position="absolute"
            bottom="20px"
            left="0pc"
            right="0px"
            mx="auto"
            color="brand.400"
            bgColor="white"
            borderColor="brand.400"
            borderWidth="2px"
            borderRadius="3xl"
            w="80%"
            d="flex"
            fontSize="sm"
            _hover={{ bg: "white" }}
            _active={{ bg: "white" }}
            justifyContent="space-between"
          >
            Get Started <BsArrowRightShort size="1.3rem" />
          </Button>
        </Box>
      ))}

      {partner.map((item: any) => (
        <Box
          key={item.price}
          borderTop="3px solid green"
          borderColor="brand.400"
          borderRadius="8px"
          w="270px"
          h="470px"
          boxShadow="md"
          bgColor="white"
          px="1.2rem"
          py="2rem"
          position="relative"
          ref={card_2Ref}
        >
          <Box d="flex" alignItems="center" mb="1rem">
            <Text color="brand.400" fontSize="4xl" fontWeight="bold">
              ${item.price}
            </Text>
            <Text color="text.secondary" fontWeight="normal" fontSize="sm">
              /{item.plan}
            </Text>
          </Box>

          <Text color="text.gray" fontSize="xl" fontWeight="bold">
            {item.type}
          </Text>

          <Text
            color="text.secondary"
            fontWeight="300"
            fontSize="sm"
            mt="1rem"
            lineHeight="1.4rem"
            className="card_2trigger"
          >
            {item.description}{" "}
          </Text>

          <Divider borderColor="#E5EAF4" borderWidth="0.012rem" my="1.5rem" />

          <List spacing={5} fontWeight="400">
            {item.points.map((point: any) => (
              <ListItem color="text.gray" fontSize="sm" key={point}>
                <ListIcon
                  as={BsCheck2}
                  color="#00A15D"
                  bgColor="brand.100"
                  borderRadius="20px"
                  w="18px"
                  h="18px"
                />
                {point}
              </ListItem>
            ))}
          </List>

          <Button
            position="absolute"
            bottom="20px"
            left="0pc"
            right="0px"
            mx="auto"
            color="white"
            bgColor="brand.400"
            borderColor="brand.400"
            borderWidth="2px"
            borderRadius="3xl"
            w="80%"
            d="flex"
            fontSize="sm"
            _hover={{ bg: "brand.400" }}
            _active={{ bg: "brand.400" }}
            justifyContent="space-between"
          >
            Get Started <BsArrowRightShort size="1.3rem" />
          </Button>
        </Box>
      ))}
    </HStack>
  );
}

export default PricingCard;

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

export default function SectionTwo() {
  return (
    <Box
      bgColor="brand.400"
      pb="50px"
      pt="100px"
      px={{ sm: "1rem", xl: "3rem" }}
      maxW={"min(100%,1420px)"}
      mx="auto"
      position="relative"
      mb="200px"
    >
      {/* top curve svg */}
      <Box
        transform="rotate(180deg)"
        position="absolute"
        top="-1px"
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
          fill="white"
          preserveAspectRatio="none"
        >
          <path d="M0 100 C40 0 60 0 100 100 Z" />
        </svg>
      </Box>

      {/* bottom curve svg  */}
      <Box
        transform="rotate(180deg)"
        position="absolute"
        bottom={{ sm: "-48px", xl: "-98px" }}
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
          fill="#00A15D"
          preserveAspectRatio="none"
        >
          <path d="M0 100 C40 0 60 0 100 100 Z" />
        </svg>
      </Box>

      <Box textAlign="center" mt="4rem">
        <Tag
          color="white"
          size="lg"
          borderRadius="1.4rem"
          fontSize="sm"
          py="10px"
          px="20px"
          bgColor="rgba(255, 255, 255, 0.5)"
          fontWeight="medium"
        >
          BECOME A CONSULTANT PARTNER
        </Tag>

        <Heading color="white" fontSize="2xl" my="1.2rem">
          Apply, Join Projects & Get Paid
        </Heading>

        <Text
          color="white"
          fontSize="sm"
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
        spacing={{ sm: 0, xl: 5 }}
        flexDirection={{ sm: "column", xl: "row" }}
      >
        <Box
          flex="1 1 0px"
          textAlign={{ sm: "center", xl: "right" }}
          d="flex"
          flexDir="column"
          alignItems={{ sm: "flex-start", xl: "flex-end" }}
        >
          <Box w={{ sm: "100%", xl: "75%" }} mb="4rem">
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

          <Box w={{ sm: "100%", xl: "75%" }} mb="4rem">
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

          <Box w={{ sm: "100%", xl: "75%" }} mb="4rem">
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

        <Box px="2rem" flex="1 1 0px">
          <Center>
            <Box w="90%">
              <Image
                src="/images/iphone.png"
                width="100%"
                // height="650px"
                alt="iphone"
              />
            </Box>
          </Center>
        </Box>

        <Box flex="1 1 0px" textAlign={{ sm: "center", xl: "left" }}>
          <Box
            w={{ sm: "100%", xl: "75%" }}
            mb="4rem"
            mt={{ sm: "4rem", xl: "0rem" }}
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

          <Box w={{ sm: "100%", xl: "75%" }} mb="4rem">
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

          <Box w={{ sm: "100%", xl: "75%" }} mb="4rem">
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

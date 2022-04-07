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
      // bgColor="brand.400"
      pb="50px"
      pt="100px"
      maxW={"min(100%,1500px)"}
      px={{ sm: "30px", lg: "40px", xl: "80px" }}
      mx="auto"
      position="relative"
      mb="200px"
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
        >
          BECOME A CONSULTANT PARTNER
        </Tag>

        <Heading color="white" fontSize={{ sm: "xl", lg: "3xl" }} my="1.2rem">
          Apply, Join Projects & Get Paid
        </Heading>

        <Text
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
          flex="1 1 0px"
          textAlign={{ sm: "center", lg: "right" }}
          d="flex"
          flexDir="column"
          alignItems={{ sm: "flex-start", lg: "flex-end" }}
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

        <Box flex="1 1 0px">
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

        <Box flex="1 1 0px" textAlign={{ sm: "center", lg: "left" }}>
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

          <Box w={{ sm: "100%", xl: "75%" }}>
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

import { Box, Heading, Text, Tag, Button } from "@chakra-ui/react";

export default function Reviews() {
  return (
    <Box
      bgColor="brand.400"
      pb="50px"
      pt="100px"
      px={{ sm: "1rem", xl: "3rem" }}
      maxW={"min(100%,1420px)"}
      mx="auto"
      position="relative"
    >
      {/* top curve svg */}
      <Box
        transform="rotate(180deg)"
        position="absolute"
        top="-1px"
        left="0px"
        w="100%"
      >
        <svg
          id="bigHalfCircle"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="100%"
          height="100"
          viewBox="0 0 100 100"
          fill="white"
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
          REVIEWS
        </Tag>

        <Heading color="white" fontSize="3xl" my="1.2rem">
          Spurt! loved by all users
        </Heading>

        <Text
          color="white"
          fontSize="sm"
          fontWeight="normal"
          lineHeight="1.5rem"
        >
          See how much they love our product and give positive response about
          <br />
          what our to do for make their problem solved.
        </Text>

        <Button
          mt="2.5rem"
          bg=" linear-gradient(180deg, #FF8A65 0%, #FF5E4B 100%)"
          color="white"
          borderColor="#ff5e4b"
          borderWidth="2px"
          fontWeight="normal"
          fontSize="sm"
          px="1rem"
          py="1.2rem"
          _hover={{ bg: "linear-gradient(180deg, #FF8A65 0%, #FF5E4B 100%)" }}
          _active={{ bg: "linear-gradient(180deg, #FF8A65 0%, #FF5E4B 100%)" }}
          _focus={{ outline: "none" }}
        >
          Read all Reviews
        </Button>
      </Box>
    </Box>
  );
}

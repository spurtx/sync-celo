import { Box, Center, Text, Tag, Heading } from "@chakra-ui/react";

export default function SectionThree() {
  return (
    <Box
      px={{ sm: "1rem", xl: "3rem" }}
      maxW={"min(100%,1420px)"}
      mx="auto"
      h="70vh"
    >
      <Center h="100%">
        <Box textAlign="center" maxW="400px" h="300px">
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
            Integrations
          </Tag>

          <Heading color="text.gray" fontSize="2xl" my="1.2rem">
            Seamless integrations with other payment tools
          </Heading>

          <Text
            color="text.secondary"
            fontSize="sm"
            fontWeight="normal"
            lineHeight="1.5rem"
          >
            Sync! absolutely works great with payment tools in ensuring your
            payments.
          </Text>
        </Box>
      </Center>
    </Box>
  );
}

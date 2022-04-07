import { Box, Center, Text, Tag, Heading } from "@chakra-ui/react";

export default function SectionThree() {
  return (
    <Box
      maxW={"min(100%,1500px)"}
      px={{ sm: "30px", lg: "40px", xl: "80px" }}
      mx="auto"
      h="50vh"
    >
      <Center h="100%">
        <Box textAlign="center" maxW="400px" h="300px">
          <Tag
            color="brand.400"
            size="lg"
            borderRadius="1.4rem"
            fontSize={{ sm: "xs", lg: "sm" }}
            py="10px"
            px="20px"
            bgColor="brand.100"
            fontWeight="medium"
          >
            Integrations
          </Tag>

          <Heading
            color="text.gray"
            fontSize={{ sm: "xl", lg: "3xl" }}
            my="1.2rem"
          >
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

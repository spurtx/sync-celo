import React from "react";
import { Box, Text } from "@chakra-ui/react";

function ProjectDescription() {
  return (
    <Box px={{ base: "1rem", lg: "4rem" }} pb="100px">
      <Box
        outline="1px solid #E2E2EA"
        borderRadius="2xl"
        mt="30px"
        bg="white"
        position="relative"
        p="1.2rem"
      >
        <Text color="text.gray" fontWeight="medium" fontSize="lg" mb="0.8rem">
          Project Description
        </Text>

        <Text fontSize="md" color="#000000" opacity="0.8" lineHeight="20px">
          Voluptatem et est. Et facere ea ipsum iste sed quibusdam fugit velit
          eius. Eos excepturi voluptatibus.Voluptatem et est. Et facere ea ipsum
          iste sed quibusdam fugit velit eius. Eos excepturi
          voluptatibus.Voluptatem et est. Et facere ea ipsum iste sed quibusdam
          fugit velit eius. Eos excepturi voluptatibus.
        </Text>
      </Box>
    </Box>
  );
}

export default ProjectDescription;

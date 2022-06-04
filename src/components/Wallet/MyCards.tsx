import { Box, Text, HStack, IconButton } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";

export default function MyCards() {
  return (
    <Box
      border="1px solid #D7D7D7"
      bgColor="#ffffff"
      px="15px"
      py="20px"
      borderRadius="10px"
      height="130px"
      maxH="150px"
    >
      <HStack justifyContent="space-between">
        <Text color="#0D0138" fontWeight="medium" fontSize="md">
          My Cards
        </Text>

        <IconButton
          aria-label="action button"
          size="sm"
          bg="none"
          icon={<BsThreeDots size="1.2rem" />}
        />
      </HStack>
    </Box>
  );
}

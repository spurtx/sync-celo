import { Box, Avatar, HStack, Text, Heading } from "@chakra-ui/react";
import { CgQuote } from "react-icons/cg";

interface Props {
  review?: any;
}

export default function ReviewCard({ review }: Props) {
  return (
    <Box
      bg="white"
      borderRadius="xl"
      //   minW="400px"
      p="1.4rem"
      minH="180px"
      // maxH={{ sm: "200px", lg: "180px" }}
      boxShadow="2xl"
    >
      <HStack spacing={4}>
        <Box>
          <Avatar src={review.image} size="md" />
        </Box>

        <Box flexGrow={1}>
          <Heading fontWeight="bold" fontSize="md" color="text.gray">
            {review.name}
          </Heading>
          <Text
            fontSize="sm"
            fontWeight="normal"
            mt="5px"
            color="text.secondary"
          >
            {review.location}
          </Text>
        </Box>

        <Box>
          <CgQuote color="#dceee6" fontSize="3rem" />
        </Box>
      </HStack>

      <Box mt="1.5rem">
        <Text color="text.gray" fontSize="sm" fontWeight="normal">
          &ldquo;
          {review.review}
          &ldquo;
        </Text>
      </Box>
    </Box>
  );
}

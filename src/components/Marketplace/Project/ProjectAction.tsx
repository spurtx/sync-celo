import React from "react";
import {
  Box,
  Button,
  Text,
  Progress,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import { format } from "date-fns";

function ProjectAction() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box px={{ base: "1rem", lg: "4rem" }}>
      <Box
        outline="1px solid #E2E2EA"
        borderRadius="2xl"
        mt="30px"
        bg="white"
        position="relative"
      >
        <Box
          borderRadius="2xl"
          height={{ base: "unset", sm: "270px" }}
          __css={{ aspectRatio: { base: "16/9", sm: "unset" } }}
          outline="1px solid #E2E2EA"
          bgColor="#e2e2ea"
          bgImage="/images/img_4.jpg"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
        />

        <Box p="1rem">
          <Text color="text.gray" fontWeight="medium" fontSize="xl" mb="0.8rem">
            Project Agerbee
          </Text>

          <Text as="span" fontSize="sm">
            by <Text as="span">Cyberdyne Systems</Text>
          </Text>

          <Text
            mt="1.3rem"
            color="brand.400"
            fontSize="2xl"
            fontWeight="medium"
          >
            $950,000.00
          </Text>

          <Box
            d="flex"
            flexDir={{ base: "column", lg: "row" }}
            alignItems="end"
            justifyContent="space-between"
          >
            <Box mt="1.2rem" w={{ base: "100%", lg: "50%" }}>
              <Text
                textAlign="right"
                color="#696974"
                fontWeight="normal"
                fontSize="14px"
                mb="5px"
              >
                75% funded
              </Text>
              <Progress
                value={75}
                size="xs"
                colorScheme="green"
                borderRadius="20px"
              />
            </Box>

            <Box mt={{ base: "1rem", lg: "0rem" }}>
              <Text as="span" fontSize="sm">
                Payback Date:{" "}
                <Text as="span" fontWeight="medium">
                  {format(new Date("2022-10-02T03:36:49.452785+01:00"), "PP")}
                </Text>
              </Text>
            </Box>
          </Box>

          <Button
            mt="1.5rem"
            color="white"
            fontSize="sm"
            borderRadius="8px"
            fontWeight="semibold"
            bgColor="brand.400"
            _focus={{ outline: "none" }}
            _hover={{ bg: "brand.400" }}
            onClick={onOpen}
            size="md"
          >
            Contribute
          </Button>
        </Box>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} trapFocus={false}>
        <ModalOverlay />
        <ModalContent borderRadius="xl" py="2rem">
          <ModalBody mb="2rem">
            <Text
              color="text.gray"
              fontWeight="semibold"
              fontSize={{ base: "md", md: "lg" }}
              textAlign="center"
            >
              Contribute
            </Text>

            <Box mt="2rem">
              <Input
                fontSize="sm"
                borderRadius="8px"
                border="1px solid"
                borderColor="brand.400"
                h="50px"
                placeholder="$"
              />
            </Box>
          </ModalBody>

          <ModalFooter justifyContent="center" gap={10}>
            <Button
              color="white"
              fontSize="sm"
              borderRadius="8px"
              fontWeight="semibold"
              bgColor="brand.400"
              _focus={{ outline: "none" }}
              _hover={{ bg: "brand.400" }}
              size="lg"
            >
              Proceed
            </Button>

            <Button
              color="brand.400"
              fontSize="sm"
              borderRadius="8px"
              border="2px solid"
              borderColor="brand.400"
              fontWeight="semibold"
              onClick={onClose}
              _focus={{ outline: "none" }}
              _hover={{ bg: "white" }}
              bg="white"
              size="lg"
            >
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default ProjectAction;

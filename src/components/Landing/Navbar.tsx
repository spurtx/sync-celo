import React from "react";
import {
  Box,
  HStack,
  VStack,
  Button,
  Link as ChakraLink,
  Image,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
// import Image from "next/image";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      maxW={"min(100%,1420px)"}
      mx="auto"
      pt="2rem"
      px={["1rem", "1rem", "3rem"]}
    >
      <HStack justifyContent="space-between">
        <Box>
          <Image
            src="/images/logo.png"
            alt="sync logo"
            width={["130px", "130px", "200px"]}
            height={["40px", "40px", "70px"]}
          />
        </Box>

        <Button
          display={["block", "block", "none"]}
          bg="white"
          border="none"
          _hover={{ bg: "none" }}
          _active={{ bg: "none" }}
          _focus={{ outline: "none" }}
          onClick={onOpen}
        >
          <GiHamburgerMenu size="2rem" />
        </Button>

        <HStack spacing={10} display={["none", "none", "flex"]}>
          <Link href="#" passHref>
            <ChakraLink
              _focus={{ outline: "none" }}
              _hover={{ outline: "none" }}
              color="text.gray"
              fontWeight="semibold"
              fontSize="md"
            >
              Home
            </ChakraLink>
          </Link>
          <Link href="#" passHref>
            <ChakraLink
              _focus={{ outline: "none" }}
              _hover={{ outline: "none" }}
              color="text.gray"
              fontWeight="semibold"
              fontSize="md"
            >
              Landings
            </ChakraLink>
          </Link>
          <Link href="#" passHref>
            <ChakraLink
              _focus={{ outline: "none" }}
              _hover={{ outline: "none" }}
              color="text.gray"
              fontWeight="semibold"
              fontSize="md"
            >
              Pages
            </ChakraLink>
          </Link>
          <Link href="#" passHref>
            <ChakraLink
              _focus={{ outline: "none" }}
              _hover={{ outline: "none" }}
              color="text.gray"
              fontWeight="semibold"
              fontSize="md"
            >
              Docs
            </ChakraLink>
          </Link>
          <Link href="#" passHref>
            <ChakraLink
              _focus={{ outline: "none" }}
              _hover={{ outline: "none" }}
              color="text.gray"
              fontWeight="semibold"
              fontSize="md"
            >
              Help
            </ChakraLink>
          </Link>
          <Button
            bg="white"
            color="brand.primary"
            borderColor="brand.primary"
            borderWidth="2px"
            borderStyle="solid"
            px="1.7rem"
            py="1.3rem"
            _hover={{ bg: "none" }}
            _active={{ bg: "none" }}
            _focus={{ outline: "none" }}
          >
            Sign up
          </Button>
        </HStack>
      </HStack>

      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent pt="4rem">
          <DrawerBody>
            <VStack spacing={10}>
              <Link href="#" passHref>
                <ChakraLink
                  _focus={{ outline: "none" }}
                  _hover={{ outline: "none" }}
                  color="text.gray"
                  fontWeight="semibold"
                  fontSize="md"
                >
                  Home
                </ChakraLink>
              </Link>
              <Link href="#" passHref>
                <ChakraLink
                  _focus={{ outline: "none" }}
                  _hover={{ outline: "none" }}
                  color="text.gray"
                  fontWeight="semibold"
                  fontSize="md"
                >
                  Landings
                </ChakraLink>
              </Link>
              <Link href="#" passHref>
                <ChakraLink
                  _focus={{ outline: "none" }}
                  _hover={{ outline: "none" }}
                  color="text.gray"
                  fontWeight="semibold"
                  fontSize="md"
                >
                  Pages
                </ChakraLink>
              </Link>
              <Link href="#" passHref>
                <ChakraLink
                  _focus={{ outline: "none" }}
                  _hover={{ outline: "none" }}
                  color="text.gray"
                  fontWeight="semibold"
                  fontSize="md"
                >
                  Docs
                </ChakraLink>
              </Link>
              <Link href="#" passHref>
                <ChakraLink
                  _focus={{ outline: "none" }}
                  _hover={{ outline: "none" }}
                  color="text.gray"
                  fontWeight="semibold"
                  fontSize="md"
                >
                  Help
                </ChakraLink>
              </Link>
              <Button
                bg="white"
                color="brand.primary"
                borderColor="brand.primary"
                borderWidth="2px"
                borderStyle="solid"
                px="1.7rem"
                py="1.3rem"
                _hover={{ bg: "none" }}
                _active={{ bg: "none" }}
                _focus={{ outline: "none" }}
              >
                Sign up
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default Navbar;

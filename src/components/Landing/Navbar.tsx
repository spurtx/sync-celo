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
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const routes = [
    {
      name: "Home",
      link: "#",
    },
    {
      name: "Landings",
      link: "#",
    },
    {
      name: "Pages",
      link: "#",
    },
    {
      name: "Docs",
      link: "#",
    },
    {
      name: "Help",
      link: "#",
    },
  ];

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
          display={{ sm: "block", xl: "none" }}
          bg="white"
          border="none"
          _hover={{ bg: "none" }}
          _active={{ bg: "none" }}
          _focus={{ outline: "none" }}
          onClick={onOpen}
        >
          <GiHamburgerMenu size="2rem" />
        </Button>

        <HStack spacing={10} display={{ sm: "none", xl: "flex" }}>
          {routes.map(({ name, link }: any) => (
            <Link href={link} passHref key={name}>
              <ChakraLink
                _focus={{ outline: "none" }}
                _hover={{ outline: "none" }}
                color="text.gray"
                fontWeight="semibold"
                fontSize="md"
              >
                {name}
              </ChakraLink>
            </Link>
          ))}

          <Button
            bg="white"
            color="brand.400"
            borderColor="brand.400"
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

      {/* for mobile  */}
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent pt="4rem">
          <DrawerBody>
            <VStack spacing={10}>
              {routes.map(({ name, link }: any) => (
                <Link href={link} passHref key={name}>
                  <ChakraLink
                    _focus={{ outline: "none" }}
                    _hover={{ outline: "none" }}
                    color="text.gray"
                    fontWeight="semibold"
                    fontSize="md"
                  >
                    {name}
                  </ChakraLink>
                </Link>
              ))}

              <Button
                bg="white"
                color="brand.400"
                borderColor="brand.400"
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

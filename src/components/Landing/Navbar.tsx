import React, { useEffect, useRef } from "react";
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
import { MdOutlineClear } from "react-icons/md";
import { gsap } from "gsap";

function Navbar() {
  const navRef: any = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    gsap.timeline().from(navRef.current, {
      opacity: 0,
      y: -15,
      duration: 1,
      ease: "circ.in",
    });
  }, []);

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
      maxW={"min(100%,1500px)"}
      px={{ sm: "30px", lg: "40px", xl: "80px" }}
      mx="auto"
      pt="2rem"
      id="navbar"
    >
      <HStack ref={navRef} justifyContent="space-between">
        <Box>
          <Image
            src="/images/logo.png"
            alt="sync logo"
            width={["130px", "130px", "180px"]}
            height={["40px", "40px", "60px"]}
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
        <DrawerContent>
          <DrawerBody>
            <HStack my="2rem" justifyContent="space-between">
              <Box>
                <Image
                  src="/images/logo.png"
                  alt="sync logo"
                  width="90px"
                  height="30px"
                />
              </Box>

              <Button bg="none" onClick={onClose}>
                <MdOutlineClear fontSize="1.5rem" />
              </Button>
            </HStack>
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

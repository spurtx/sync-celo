import React, { useEffect, useRef } from "react";
import {
  Box,
  HStack,
  VStack,
  Button,
  Image,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClear } from "react-icons/md";
import gsap from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

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

  const scrollToSection = (arg: string) => {
    gsap.timeline().to(window, { scrollTo: arg, duration: 1 });
    onClose();
  };

  const routes = [
    {
      name: "For Partners",
      go_to: "#forPartner",
    },
    {
      name: "For Members",
      go_to: "#forMember",
    },
    {
      name: "Reviews",
      go_to: "#reviews",
    },
    {
      name: "Pricing",
      go_to: "#pricing",
    },
    {
      name: "FAQs",
      go_to: "#faq",
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
          {routes.map(({ name, go_to }: any) => (
            <Button
              key={name}
              _focus={{ outline: "none" }}
              _hover={{ outline: "none" }}
              color="text.gray"
              fontWeight="semibold"
              fontSize="sm"
              px="0px"
              h="0px"
              onClick={() => scrollToSection(go_to)}
            >
              {name}
            </Button>
          ))}

          <Button
            bg="white"
            color="brand.400"
            borderColor="brand.400"
            borderWidth="2px"
            borderStyle="solid"
            px="1.5rem"
            py="1.3rem"
            fontSize="sm"
            transition="all 0.5s"
            _hover={{ bg: "brand.400", color: "white" }}
            _active={{ bg: "brand.400", color: "white" }}
            _focus={{ outline: "none" }}
          >
            Join Beta
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
            <VStack spacing={16} mt="5rem">
              {routes.map(({ name, go_to }: any) => (
                <Button
                  key={name}
                  _focus={{ outline: "none" }}
                  _hover={{ outline: "none" }}
                  color="text.gray"
                  fontWeight="semibold"
                  fontSize="sm"
                  px="0px"
                  h="0px"
                  onClick={() => scrollToSection(go_to)}
                >
                  {name}
                </Button>
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
                Join Beta
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default Navbar;

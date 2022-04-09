import React from "react";
import {
  Box,
  Heading,
  Text,
  Link as ChakraLink,
  Stack,
  Image,
  IconButton,
  UnorderedList,
  ListItem,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { BsTwitter, BsInstagram, BsLinkedin, BsGoogle } from "react-icons/bs";

function LandingFooter() {
  return (
    <Box
      bgColor="brand.400"
      pb="50px"
      pt="100px"
      px={{ sm: "1rem", xl: "3rem" }}
      maxW={"min(100%,1950px)"}
      mx="auto"
      position="relative"
    >
      <Box mt={{ sm: "3rem", xl: "6rem" }}>
        <Stack
          direction={{ sm: "column", lg: "row" }}
          spacing={{ sm: 20, lg: 32 }}
          alignItems={{ sm: "center", lg: "start" }}
          justifyContent="center"
        >
          <Box>
            <VStack>
              <Box mb="3rem">
                <Link href="/" passHref>
                  <ChakraLink _focus={{ outline: "none" }}>
                    <Image src="/images/footer_logo.png" alt="sync logo" />
                  </ChakraLink>
                </Link>
              </Box>

              <Box color="white">
                <IconButton
                  bg="#fcfcfd49"
                  size="sm"
                  borderRadius="50%"
                  mx="1rem"
                  aria-label="Search database"
                  icon={<BsGoogle />}
                />
                <IconButton
                  bg="#fcfcfd49"
                  size="sm"
                  borderRadius="50%"
                  aria-label="Search database"
                  icon={<BsTwitter />}
                />
                <IconButton
                  bg="#fcfcfd49"
                  size="sm"
                  borderRadius="50%"
                  mx="1rem"
                  aria-label="Search database"
                  icon={<BsInstagram />}
                />
                <IconButton
                  bg="#fcfcfd49"
                  size="sm"
                  borderRadius="50%"
                  aria-label="Search database"
                  icon={<BsLinkedin />}
                />
              </Box>
            </VStack>
          </Box>

          <Stack direction="row" spacing={{ sm: 20, lg: 32 }}>
            <Box color="white">
              <Heading fontSize="md" fontWeight="medium">
                Product
              </Heading>

              <UnorderedList
                listStyleType="none"
                m="0px"
                fontSize="sm"
                fontWeight={400}
                opacity="0.9"
                mt="2rem"
                spacing={6}
                textTransform="capitalize"
              >
                {productRoutes.map((item: any) => (
                  <ListItem key={item.title}>
                    <Link href={item.link} passHref>
                      <ChakraLink
                        _focus={{ outline: "none" }}
                        isExternal={item.newTab}
                      >
                        {item.title}
                      </ChakraLink>
                    </Link>
                  </ListItem>
                ))}
              </UnorderedList>
            </Box>

            <Box color="white">
              <Heading fontSize="md" fontWeight="medium">
                Company
              </Heading>

              <UnorderedList
                listStyleType="none"
                m="0px"
                fontSize="sm"
                mt="2rem"
                spacing={6}
                fontWeight={400}
                opacity="0.9"
                textTransform="capitalize"
              >
                {companyRoutes.map((item: any) => (
                  <ListItem key={item.title}>
                    <Link href={item.link} passHref>
                      <ChakraLink _focus={{ outline: "none" }} isExternal>
                        {item.title}
                      </ChakraLink>
                    </Link>
                  </ListItem>
                ))}
              </UnorderedList>
            </Box>
          </Stack>
        </Stack>
      </Box>

      <Box mt={{ sm: "5rem", xl: "10rem" }} mb="2rem" textAlign="center">
        <Text color="white" fontSize="sm" fontWeight={400} opacity="0.9">
          Copyright © 2021 Spurt X!
        </Text>
      </Box>
    </Box>
  );
}

export default LandingFooter;

const productRoutes = [
  {
    title: "Join beta",
    link: "https://sync-staging.netlify.app/signup",
    newTab: true,
  },
  {
    title: "features",
    link: "#forPartners",
  },
  {
    title: "developer",
    link: "/",
  },
  {
    title: "pricing",
    link: "#pricing",
  },
];

const companyRoutes = [
  {
    title: "about",
    link: "https://www.spurt.solutions/",
  },
  {
    title: "Cookie Policy",
    link: "https://www.freeprivacypolicy.com/live/45180457-d16f-4c39-80e8-3e3417a3d557",
  },
  {
    title: "privacy policy",
    link: "https://www.freeprivacypolicy.com/live/45180457-d16f-4c39-80e8-3e3417a3d557",
  },
  {
    title: "careers",
    link: "/",
  },
];

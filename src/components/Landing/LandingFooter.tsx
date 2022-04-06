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
      {/* top curve svg */}
      <Box
        transform="rotate(180deg)"
        position="absolute"
        top="-1px"
        left="0px"
        w="100%"
        h={{ sm: "50px", xl: "100px" }}
      >
        <svg
          id="bigHalfCircle"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          fill="white"
          preserveAspectRatio="none"
        >
          <path d="M0 100 C40 0 60 0 100 100 Z" />
        </svg>
      </Box>

      <Box mt={{ sm: "3rem", xl: "6rem" }}>
        <Stack direction={{ sm: "column", xl: "row" }} spacing={20}>
          <Box w={{ sm: "100%", xl: "30%" }}>
            <Stack
              direction="column"
              alignItems={["flex-start", "center", "flex-end"]}
            >
              <Box mb="3rem">
                <Image src="/images/footer_logo.png" alt="sync logo" />
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
            </Stack>
          </Box>

          <Stack direction={["column", "row"]} spacing={20} flexGrow={1}>
            <Stack direction="row" spacing={20}>
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
                        <ChakraLink>{item.title}</ChakraLink>
                      </Link>
                    </ListItem>
                  ))}
                </UnorderedList>
              </Box>

              <Box color="white">
                <Heading fontSize="md" fontWeight="medium">
                  Services
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
                  {servicesRoutes.map((item: any) => (
                    <ListItem key={item.title}>
                      <Link href={item.link} passHref>
                        <ChakraLink>{item.title}</ChakraLink>
                      </Link>
                    </ListItem>
                  ))}
                </UnorderedList>
              </Box>
            </Stack>

            <Stack direction="row" spacing={20}>
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
                        <ChakraLink>{item.title}</ChakraLink>
                      </Link>
                    </ListItem>
                  ))}
                </UnorderedList>
              </Box>

              <Box color="white">
                <Heading fontSize="md" fontWeight="medium">
                  More
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
                  {moreRoutes.map((item: any) => (
                    <ListItem key={item.title}>
                      <Link href={item.link} passHref>
                        <ChakraLink>{item.title}</ChakraLink>
                      </Link>
                    </ListItem>
                  ))}
                </UnorderedList>
              </Box>
            </Stack>
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
    title: "landing page",
    link: "/",
  },
  {
    title: "features",
    link: "/",
  },
  {
    title: "documentation",
    link: "/",
  },
  {
    title: "referral program",
    link: "/",
  },
  {
    title: "pricing",
    link: "/",
  },
];

const servicesRoutes = [
  {
    title: "Documentation",
    link: "/",
  },
  {
    title: "design",
    link: "/",
  },
  {
    title: "themes",
    link: "/",
  },
  {
    title: "illustrations",
    link: "/",
  },
  {
    title: "UI Kit",
    link: "/",
  },
];

const companyRoutes = [
  {
    title: "about",
    link: "/",
  },
  {
    title: "terms",
    link: "/",
  },
  {
    title: "privacy policy",
    link: "/",
  },
  {
    title: "careers",
    link: "/",
  },
];

const moreRoutes = [
  {
    title: "documentation",
    link: "/",
  },
  {
    title: "license",
    link: "/",
  },
  {
    title: "changelog",
    link: "/",
  },
];
import {
  Box,
  Text,
  Image,
  Heading,
  Center,
  Tag,
  Input,
  Button,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Link from "next/link";

export default function Custom404() {
  return (
    <Box
      h="100vh"
      maxW={"min(100%,1500px)"}
      px={{ sm: "30px", lg: "40px", xl: "80px" }}
      mx="auto"
    >
      <Center h="100%" flexDirection="column">
        <Box>
          <Image src="/images/404_image.svg" alt="404 image" width="270px" />
        </Box>

        <Box textAlign="center" mt="3rem">
          <Tag
            color="brand.400"
            borderRadius="1.4rem"
            fontSize={{ sm: "xs", lg: "sm" }}
            py="8px"
            px="20px"
            bgColor="brand.100"
            fontWeight="medium"
          >
            OOPS!
          </Tag>

          <Heading
            color="text.gray"
            fontSize={{ sm: "xl", lg: "3xl" }}
            my="1.2rem"
            className="trigger"
          >
            Something Appears Broken
          </Heading>

          <Text
            color="text.secondary"
            fontSize={{ sm: "xs", lg: "sm" }}
            fontWeight="normal"
            lineHeight={{ sm: "1.2rem", lg: "1.3rem" }}
          >
            It's not you, it's us. Please put in your email address <br /> and we
            will send you a bop as soon as the <br /> page information is
            available
          </Text>
        </Box>

        <Box d="flex" mt="3rem" mb="2rem">
          <Input
            borderLeftRadius="7px"
            borderColor="brand.400"
            borderWidth="1px"
            borderRadius="0px"
            color="text.secondary"
            fontSize="sm"
            borderRightColor="white"
            _focus={{ outline: "none" }}
            placeholder="Email Address"
            _placeholder={{ fontSize: "sm" }}
          />
          <Button
            borderRightRadius="7px"
            color="white"
            bgColor="brand.400"
            borderRadius="0px"
            fontSize="sm"
            px="1.5rem"
            _hover={{ bgColor: "#03854e" }}
          >
            Send
          </Button>
        </Box>

        <Link href="/" passHref>
          <ChakraLink
            d="flex"
            alignItems="center"
            color="brand.400"
            fontWeight="semibold"
            fontSize="sm"
            gap="10px"
          >
            <AiOutlineArrowLeft />
            Go Home
          </ChakraLink>
        </Link>
      </Center>
    </Box>
  );
}

import React from "react";
import { Box, Tag, Text, HStack, Image } from "@chakra-ui/react";
import { IoIosArrowRoundUp } from "react-icons/io";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { BsArrowRightSquareFill, BsArrowLeftSquareFill } from "react-icons/bs";

const AllTimeWallet = () => {
  return (
    <Box
      border="1px solid #D7D7D7"
      bgColor="#ffffff"
      p="10px"
      borderRadius="10px"
      height="130px"
      maxH="150px"
      d="flex"
      flexDir="column"
      justifyContent="space-between"
    >
      <HStack justifyContent="space-between">
        <Text color="#0D0138" fontWeight="medium" fontSize="14px">
          All Time
        </Text>

        <Tag color="brand.400" bgColor="#DCEEE6" py="10px">
          +1,300.50
        </Tag>
      </HStack>

      <Box>
        <Text color="#0D0138" fontWeight="medium" opacity="0.4" fontSize="sm">
          Current Balance
        </Text>

        <Text color="#0D0138" fontWeight="semibold" mt="1.2rem" fontSize="xl">
          $147,242,131,40
        </Text>
      </Box>
    </Box>
  );
};

const MainWallet = () => {
  return (
    <Box position="relative">
      <Tag
        position="absolute"
        right="-17px"
        top="30%"
        bg="none"
        d={{ base: "none", lg: "block" }}
      >
        <BsArrowRightSquareFill color="#00A15D" size="1.3rem" />
      </Tag>
      <Box
        w={{ base: "100%", lg: "90%" }}
        border="1px solid #D7D7D7"
        bgColor="#ffffff"
        p="10px"
        borderRadius="10px"
        height="130px"
        maxH="150px"
        d="flex"
        flexDir="column"
        justifyContent="space-between"
      >
        <Text color="#0D0138" fontWeight="medium" fontSize="14px">
          Main Wallet
        </Text>

        <Text color="#0D0138" fontWeight="medium" fontSize="xl">
          $123,000.10
        </Text>

        <HStack d="flex" justifyContent="space-between">
          <Tag color="brand.400" bgColor="#DCEEE6">
            20.4%
            <IoIosArrowRoundUp />
          </Tag>

          <FaRegMoneyBillAlt size="1.5rem" color="#000000" />
        </HStack>
      </Box>
    </Box>
  );
};

const CeloWallet = () => {
  return (
    <Box position="relative" d="flex" justifyContent="end">
      <Tag
        position="absolute"
        left="-17px"
        top="60%"
        bg="none"
        size="sm"
        d={{ base: "none", lg: "flex" }}
        // d='flex'
        // w="30px"
        // h="25px"
        // justifyContent="center"
        // alignItems="center"
      >
        <BsArrowLeftSquareFill size="1.3rem" color="#00A15D" />
      </Tag>
      <Box
        w={{ base: "100%", lg: "90%" }}
        border="1px solid #D7D7D7"
        bgColor="#ffffff"
        p="10px"
        borderRadius="10px"
        height="130px"
        maxH="150px"
        d="flex"
        flexDir="column"
        justifyContent="space-between"
      >
        <Text color="#0D0138" fontWeight="medium" fontSize="14px">
          Celo Wallet
        </Text>

        <Text color="#0D0138" fontWeight="medium" fontSize="xl">
          $123,000.10
        </Text>

        <HStack d="flex" justifyContent="space-between">
          <Tag color="brand.400" bgColor="#DCEEE6">
            20.4%
            <IoIosArrowRoundUp />
          </Tag>

          <Image src="/images/celo.png" boxSize="25px" alt="celo logo" />
        </HStack>
      </Box>
    </Box>
  );
};

function MyWallets() {
  return (
    <Box>
      <Box
        d="grid"
        gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr 1fr" }}
        gap={4}
      >
        <AllTimeWallet />
        <MainWallet />
        <CeloWallet />
      </Box>
    </Box>
  );
}

export default MyWallets;

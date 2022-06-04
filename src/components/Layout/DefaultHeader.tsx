import { VscTriangleDown } from "react-icons/vsc";
import { useRouter } from "next/router";
import Link from "next/link";
import { AiOutlineClockCircle, AiOutlineCheckSquare } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { RiMessage2Line, RiSearchLine } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";
import { DashboardSVG } from "@components/Icons";
import {
  Box,
  HStack,
  Image,
  Link as ChakraLink,
  Avatar,
  Text,
  Tag,
  Hide,
  TagLabel,
} from "@chakra-ui/react";

export const defaultRoutes = [
  {
    links: "/dashboard",
    label: "Dashboard",
    icon: <DashboardSVG />,
  },
  {
    links: "/marketplace",
    label: "Marketplace",
    icon: <RiSearchLine />,
  },
  {
    links: "/projects",
    label: "Projects",
    icon: <AiOutlineCheckSquare />,
  },
  {
    links: "/activity",
    label: "Activity",
    icon: <AiOutlineClockCircle />,
  },
  {
    links: "/history",
    label: "History",
    icon: <AiOutlineClockCircle />,
  },
  {
    links: "/messages",
    label: "Messages",
    icon: <RiMessage2Line />,
  },
];

const Logo = () => {
  return (
    <Box>
      <Image
        src="/images/beta_logo.png"
        alt="sync logo"
        width="100px"
        height="40px"
      />
    </Box>
  );
};

const HeaderMiddle = () => {
  const router = useRouter();

  return (
    <Box height="100%">
      <HStack as="nav" justifyContent="center" height="100%" spacing={10}>
        {defaultRoutes.map(({ links, label, icon }) => {
          const isActive = router.pathname.includes(links);

          return (
            <Link key={links ?? label} href={links} passHref>
              <ChakraLink
                as="a"
                position="relative"
                backgroundColor="transparent"
                alignSelf="center"
                justifyContent="center"
                alignItems="center"
                display="flex"
                fontSize="sm"
                fontWeight={isActive ? "600" : "400"}
                color={isActive ? "brand.400" : "text.secondary"}
                height="100%"
                borderRadius="0px"
                px="0px"
                _hover={{ bgColor: "transparent" }}
                _focus={{ boxShadow: "none" }}
                _after={{
                  content: isActive ? '""' : "unset",
                  position: "absolute",
                  bgColor: "brand.400",
                  borderTopStartRadius: "full",
                  borderTopEndRadius: "full",
                  width: "100%",
                  height: "2.95px",
                  bottom: "0%",
                }}
              >
                <Box as="span" mr="4px">
                  {icon}
                </Box>
                {label}
              </ChakraLink>
            </Link>
          );
        })}
      </HStack>
    </Box>
  );
};

const HeaderAction = () => {
  return (
    <HStack justifyContent="end" alignItems="center" height="100%" spacing={4}>
      <Box>
        <FaRegBell />
      </Box>

      <Box>
        <Tag
          size="lg"
          variant="unstyled"
          borderRadius="full"
          px="0px"
          gap="0.5rem"
        >
          <Avatar size="sm" name="austin robert" />
          <Hide below="sm">
            <TagLabel fontSize="sm" color="#171725" fontWeight="semibold">
              Austin Robert
            </TagLabel>
            <VscTriangleDown color="#92929D" size="1rem" />
          </Hide>
        </Tag>
      </Box>
    </HStack>
  );
};

function DefaultHeader() {
  return (
    <Box
      as="header"
      boxShadow="inset 0px -1px 0px #E2E2EA"
      height="70px"
      px="30px"
      position="sticky"
      w="100%"
      top="0px"
      zIndex={{ base: 2, lg: 1 }}
      backgroundColor="#ffffff"
    >
      <HStack justifyContent="space-between" alignItems="center" height="100%">
        <Logo />
        <HeaderMiddle />
        <HeaderAction />
      </HStack>
    </Box>
  );
}

export default DefaultHeader;

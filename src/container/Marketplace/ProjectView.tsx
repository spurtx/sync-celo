import React from "react";
import {
  Box,
  useDisclosure,
  IconButton,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "next/link";
import { HiOutlineArrowLeft } from "react-icons/hi";
import dynamic from "next/dynamic";

const [ProjectAction, ProjectDescription] = [
  dynamic(() => import("@components/Marketplace/Project/ProjectAction")),
  dynamic(() => import("@components/Marketplace/Project/ProjectDescription")),
];

function ProjectView() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box px={{ base: "1rem", lg: "4rem" }}>
      <Box d="flex" alignItems="center" gap="20px" pt="2rem">
        <Link href="/crowd-lending" passHref>
          <ChakraLink>
            <IconButton
              aria-label=""
              icon={<HiOutlineArrowLeft />}
              bgColor="white"
              boxShadow="sm"
            />
          </ChakraLink>
        </Link>
        <Text fontWeight="medium">Crowd Lending</Text>
      </Box>

      <ProjectAction />
      <ProjectDescription />
    </Box>
  );
}

export default ProjectView;

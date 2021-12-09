import React from "react";
import { Box, VStack, HStack, Icon, Circle, Divider } from "@chakra-ui/react";
import { AiOutlineSetting } from "react-icons/ai";
import { MdOutlineDashboard } from "react-icons/md";
import { FaEthereum } from "react-icons/fa";
import { RiNewspaperLine } from "react-icons/ri";
import { BsArrowLeftRight } from "react-icons/bs";
export default function SideBar() {
  return (
    <Box
      d={{ base: "none", md: "block" }}
      // position="fixed"
      // top="0"
      // left="0"
      bgColor="#262D3A"
    >
      <VStack d={{ base: "none", md: "flex" }} h="100vh" bgColor="#262D3A">
        <Circle
          p={2}
          border="1px"
          borderColor="#6763FD"
          bgGradient="linear(to-r, #6763FD, #B150F2)"
          size="39px"
          my="6"
        >
          <Icon boxSize={5} as={FaEthereum} />
        </Circle>
        <Divider />
        <HStack
          _hover={{
            background: "#3C424E",
          }}
          as="button"
          w="full"
          px="10"
          py="6"
        >
          <Icon boxSize="6" textColor="#A154F4" as={FaEthereum} />
        </HStack>
        <HStack
          _hover={{
            background: "#3C424E",
          }}
          as="button"
          w="full"
          px="10"
          py="6"
        >
          <Icon boxSize="7" textColor="#A154F4" as={MdOutlineDashboard} />
        </HStack>
        <HStack
          _hover={{
            background: "#3C424E",
          }}
          as="button"
          w="full"
          px="10"
          py="6"
        >
          <Icon boxSize="7" textColor="#A154F4" as={BsArrowLeftRight} />
        </HStack>
        <HStack
          _hover={{
            background: "#3C424E",
          }}
          as="button"
          w="full"
          px="10"
          py="6"
        >
          <Icon boxSize="7" textColor="#A154F4" as={RiNewspaperLine} />
        </HStack>
        <HStack
          _hover={{
            background: "#3C424E",
          }}
          as="button"
          w="full"
          px="10"
          py="6"
        >
          <Icon boxSize="7" textColor="#A154F4" as={AiOutlineSetting} />
        </HStack>
      </VStack>
    </Box>
  );
}

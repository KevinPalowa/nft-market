import * as React from "react";

import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
  Box,
  Icon,
  Text,
  HStack,
  Divider,
  Center,
  Circle,
} from "@chakra-ui/react";
import { AiOutlineMenu, AiOutlineSetting } from "react-icons/ai";
import { MdOutlineDashboard } from "react-icons/md";
import { FaEthereum } from "react-icons/fa";
import { RiNewspaperLine } from "react-icons/ri";
import { BsArrowLeftRight } from "react-icons/bs";
function Menu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Box d={{ base: "inline-flex", md: "none" }}>
      <Button ref={btnRef} bg="transparent" border="none" onClick={onOpen}>
        <Icon as={AiOutlineMenu}></Icon>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        size="full"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg="#1B1E2A">
          <DrawerCloseButton />
          <DrawerHeader>
            <Center>
              {/* <HStack> */}
              <Circle
                p={2}
                border="1px"
                borderColor="#6763FD"
                bgGradient="linear(to-r, #6763FD, #B150F2)"
                mr={3}
              >
                <Icon boxSize="7" as={FaEthereum} />
              </Circle>
              <Text>Cuan Makers</Text>
              {/* </HStack> */}
            </Center>
          </DrawerHeader>
          <Divider />
          <DrawerBody p={0}>
            <VStack align="stretch" px="30px" py="15px">
              <HStack bg="#262d3a" p={4} borderRadius="xl">
                <Icon boxSize="6" textColor="#A154F4" as={FaEthereum} />
                <Text>543,694,489 ETH</Text>
              </HStack>
              <HStack py="4" spacing={8}>
                <Icon boxSize="7" textColor="#A154F4" as={MdOutlineDashboard} />
                <Text>Dashboard</Text>
              </HStack>
              <HStack py="4" spacing={8}>
                <Icon boxSize="7" textColor="#A154F4" as={BsArrowLeftRight} />
                <Text>Activity</Text>
              </HStack>
              <HStack py="4" spacing={8}>
                <Icon boxSize="7" textColor="#A154F4" as={RiNewspaperLine} />
                <Text>Transaction</Text>
              </HStack>
              <HStack py="4" spacing={8}>
                <Icon boxSize="7" textColor="#A154F4" as={AiOutlineSetting} />
                <Text>Setting</Text>
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
export default Menu;
